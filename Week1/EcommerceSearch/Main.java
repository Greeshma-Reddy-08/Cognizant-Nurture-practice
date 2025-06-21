import java.util.Arrays;
import java.util.Comparator;

public class Main {
    // Linear search method
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    // Binary search method (on sorted array)
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        // Sample products
        Product[] products = {
            new Product(3, "Mouse", "Electronics"),
            new Product(1, "Keyboard", "Electronics"),
            new Product(5, "Laptop", "Computers"),
            new Product(4, "Ear plugs", "Audio"),
            new Product(2, "Monitor", "Displays")
        };
 
        System.out.println("\nPerforming Linear Search for Product ID: 4");
        Product foundLinear = linearSearch(products, 4);
        System.out.println(foundLinear != null ? foundLinear : "Product Not Found");


        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println("\nPerforming Binary Search for Product ID: 4");
        Product foundBinary = binarySearch(products, 4);
        System.out.println(foundBinary != null ? foundBinary : "Product Not Found");
    }
}
