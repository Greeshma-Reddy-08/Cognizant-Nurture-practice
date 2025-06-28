-- SCENARIO 1: Process Monthly Interest for Savings Accounts
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE savings_accounts';
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE != -942 THEN RAISE; END IF;
END;
/

CREATE TABLE savings_accounts (
  account_id     NUMBER PRIMARY KEY,
  customer_name  VARCHAR2(100),
  balance        NUMBER
);
/

-- Insert sample data
INSERT INTO savings_accounts VALUES (101, 'Ravi Kumar', 10000);
INSERT INTO savings_accounts VALUES (102, 'Sneha Reddy', 25000);
INSERT INTO savings_accounts VALUES (103, 'Aman Gupta', 5000);
COMMIT;

-- Stored Procedure: ProcessMonthlyInterest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
    UPDATE savings_accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_id = acc.account_id;

    DBMS_OUTPUT.PUT_LINE('Interest added to account: ' || acc.account_id);
  END LOOP;
END;
/

-- Execute Procedure
BEGIN
  ProcessMonthlyInterest;
END;
/

-- SCENARIO 2: Update Employee Bonus Based on Department

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE employees';
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE != -942 THEN RAISE; END IF;
END;
/

CREATE TABLE employees (
  emp_id     NUMBER PRIMARY KEY,
  emp_name   VARCHAR2(100),
  department VARCHAR2(50),
  salary     NUMBER
);
/

-- Insert sample data
INSERT INTO employees VALUES (1, 'John', 'HR', 40000);
INSERT INTO employees VALUES (2, 'Anita', 'IT', 50000);
INSERT INTO employees VALUES (3, 'Raj', 'IT', 60000);
INSERT INTO employees VALUES (4, 'Meena', 'Sales', 45000);
COMMIT;

-- Stored Procedure: UpdateEmployeeBonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) AS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_pct / 100)
  WHERE department = dept_name;

  DBMS_OUTPUT.PUT_LINE('Bonus applied for department: ' || dept_name);
END;
/

-- Execute Procedure
BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

-- SCENARIO 3: Transfer Funds Between Accounts

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE bank_accounts';
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE != -942 THEN RAISE; END IF;
END;
/

CREATE TABLE bank_accounts (
  acc_number NUMBER PRIMARY KEY,
  acc_holder VARCHAR2(100),
  balance    NUMBER
);
/

-- Insert sample data
INSERT INTO bank_accounts VALUES (201, 'Ravi', 10000);
INSERT INTO bank_accounts VALUES (202, 'Sneha', 15000);
COMMIT;

-- Stored Procedure: TransferFunds
CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) AS
  from_balance NUMBER;
BEGIN
  SELECT balance INTO from_balance FROM bank_accounts WHERE acc_number = from_acc;

  IF from_balance < amount THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance in account: ' || from_acc);
  ELSE
    UPDATE bank_accounts SET balance = balance - amount WHERE acc_number = from_acc;
    UPDATE bank_accounts SET balance = balance + amount WHERE acc_number = to_acc;

    DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from ' || from_acc || ' to ' || to_acc);
  END IF;
END;
/

-- Execute Procedure
BEGIN
  TransferFunds(201, 202, 3000);
END;
/
