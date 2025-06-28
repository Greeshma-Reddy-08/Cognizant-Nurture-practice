-- Exercise 1: Control Structures
-- Table Setup (loan_customers)

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE loan_customers';
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE != -942 THEN
      RAISE;
    END IF;
END;
/

CREATE TABLE loan_customers (
  customer_id       NUMBER PRIMARY KEY,
  full_name         VARCHAR2(100),
  age               NUMBER,
  current_interest  NUMBER,
  loan_amount       NUMBER,
  due_date          DATE,
  vip_status        CHAR(1)
);
/

INSERT INTO loan_customers VALUES (1, 'Ravi Kumar', 66, 10.0, 200000, SYSDATE + 15, 'N');
INSERT INTO loan_customers VALUES (2, 'Sneha Reddy', 59, 9.5, 150000, SYSDATE + 45, 'N');
INSERT INTO loan_customers VALUES (3, 'Aman Gupta', 72, 11.0, 300000, SYSDATE + 20, 'N');
INSERT INTO loan_customers VALUES (4, 'Priya Shah', 40, 8.0, 180000, SYSDATE + 10, 'N');
COMMIT;
/

-- Scenario 1: Discount for customers above 60
BEGIN
  FOR cust IN (SELECT customer_id, full_name FROM loan_customers WHERE age > 60) LOOP
    UPDATE loan_customers
    SET current_interest = current_interest - 1
    WHERE customer_id = cust.customer_id;

    DBMS_OUTPUT.PUT_LINE('1% discount applied for ' || cust.full_name);
  END LOOP;
END;
/

-- Scenario 2: Promote VIPs
BEGIN
  FOR cust IN (SELECT customer_id, full_name FROM loan_customers WHERE loan_amount > 200000) LOOP
    UPDATE loan_customers
    SET vip_status = 'Y'
    WHERE customer_id = cust.customer_id;

    DBMS_OUTPUT.PUT_LINE(cust.full_name || ' has been promoted to VIP.');
  END LOOP;
END;
/

-- Scenario 3: Send reminders
BEGIN
  FOR cust IN (
    SELECT full_name, due_date 
    FROM loan_customers 
    WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan for ' || cust.full_name || ' is due on ' || TO_CHAR(cust.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
/
