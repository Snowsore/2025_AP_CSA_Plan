public class ControlStructures {
    public static void main(String[] args) {
        // Conditional: Check if a number is even or odd
        int number = 7;
        if (number % 2 == 0) {
            System.out.println(number + " is even.");
        } else {
            System.out.println(number + " is odd.");
        }

        // Loop: Print squares of numbers from 1 to 5
        System.out.println("Squares from 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i + " squared = " + (i * i));
        }

        // While loop: Count down from 3
        int countdown = 3;
        while (countdown > 0) {
            System.out.println("Countdown: " + countdown);
            countdown--;
        }
    }
}