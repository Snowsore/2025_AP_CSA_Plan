import java.util.Scanner;

public class ErrorHandling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Example: Potential runtime error (division by zero)
        System.out.print("Enter a number to divide 10 by: ");
        int divisor = scanner.nextInt();

        // Check for division by zero
        if (divisor == 0) {
            System.out.println("Error: Cannot divide by zero!");
        } else {
            System.out.println("10 / " + divisor + " = " + (10 / divisor));
        }

        // Example: Logic error (incorrect calculation)
        int a = 5, b = 3;
        // Wrong: Adding instead of multiplying
        System.out.println("Incorrect multiplication: " + (a + b)); // Logic error
        System.out.println("Correct multiplication: " + (a * b));

        scanner.close();
    }
}