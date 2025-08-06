import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input: Get two numbers and an operation
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();

        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();

        System.out.print("Choose operation (+, -, *, /): ");
        char operation = scanner.next().charAt(0);

        // Control structure: Perform calculation based on operation
        double result;
        if (operation == '+') {
            result = num1 + num2;
            System.out.println(num1 + " + " + num2 + " = " + result);
        } else if (operation == '-') {
            result = num1 - num2;
            System.out.println(num1 + " - " + num2 + " = " + result);
        } else if (operation == '*') {
            result = num1 * num2;
            System.out.println(num1 + " * " + num2 + " = " + result);
        } else if (operation == '/') {
            if (num2 == 0) {
                System.out.println("Error: Division by zero!");
            } else {
                result = num1 / num2;
                System.out.println(num1 + " / " + num2 + " = " + result);
            }
        } else {
            System.out.println("Error: Invalid operation!");
        }

        scanner.close();
    }
}