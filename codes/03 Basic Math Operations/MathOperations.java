public class MathOperations {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // Basic arithmetic operations
        int sum = a + b; // Addition
        int difference = a - b; // Subtraction
        int product = a * b; // Multiplication
        double quotient = (double) a / b; // Division with type casting
        int remainder = a % b; // Modulus (remainder)

        // Output results
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
        System.out.println("Product: " + product);
        System.out.println("Quotient: " + quotient);
        System.out.println("Remainder: " + remainder);

        // Example: Calculate area of a circle
        double radius = 5.0;
        double area = Math.PI * radius * radius;
        System.out.println("Area of circle (radius = " + radius + "): " + area);
    }
}