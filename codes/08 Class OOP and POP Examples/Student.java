// Define a class named Student
public class Student {
    // Private fields (encapsulation)
    private String name;
    private int grade;

    // Static field to track total number of students
    private static int studentCount = 0;

    // Constructor using 'this' to distinguish fields from parameters
    public Student(String name, int grade) {
        this.name = name; // 'this' refers to the current object's field
        this.grade = grade;
        studentCount++; // Increment static counter
    }

    // Public getter method for name
    public String getName() {
        return name;
    }

    // Public setter method for grade with scope-limited variable
    public void setGrade(int newGrade) {
        // Method scope variable
        int minimumGrade = 0;
        if (newGrade >= minimumGrade) {
            this.grade = newGrade; // Update grade if valid
        }
    }

    // Public method to display student details
    public void printDetails() {
        // Block scope variable
        String message = "Student: " + this.name + ", Grade: " + grade;
        System.out.println(message);
    }

    // Static method to get total student count
    public static int getStudentCount() {
        return studentCount;
    }

    // Main method as program entry point
    public static void main(String[] args) {
        // Creating objects (references) using 'new'
        Student s1 = new Student("Alice", 90); // Object 1
        Student s2 = new Student("Bob", 85); // Object 2

        // Calling methods on objects
        s1.printDetails(); // Output: Student: Alice, Grade: 90
        s2.printDetails(); // Output: Student: Bob, Grade: 85

        // Update grade using setter
        s1.setGrade(95);
        s1.printDetails(); // Output: Student: Alice, Grade: 95

        // Access static method without object
        System.out.println("Total students: " + Student.getStudentCount()); // Output: Total students: 2

        // Demonstrate null reference
        Student s3 = null; // Reference not pointing to any object
        if (s3 == null) {
            System.out.println("s3 is null, no object assigned.");
        }
    }
}