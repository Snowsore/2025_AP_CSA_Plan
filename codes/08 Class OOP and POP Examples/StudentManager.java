public class StudentManager {
    // Global arrays to store student data (no encapsulation)
    static String[] names = new String[100]; // Array to store names
    static int[] grades = new int[100]; // Array to store grades
    static int studentCount = 0; // Counter for number of students

    // Function to add a student
    static void addStudent(String name, int grade) {
        if (studentCount < 100) {
            names[studentCount] = name;
            grades[studentCount] = grade;
            studentCount++;
        }
    }

    // Function to update a student's grade
    static void updateGrade(int index, int newGrade) {
        int minimumGrade = 0; // Method scope variable
        if (index >= 0 && index < studentCount && newGrade >= minimumGrade) {
            grades[index] = newGrade;
        }
    }

    // Function to print student details
    static void printStudentDetails(int index) {
        if (index >= 0 && index < studentCount) {
            String message = "Student: " + names[index] + ", Grade: " + grades[index]; // Block scope
            System.out.println(message);
        }
    }

    // Function to get total student count
    static int getStudentCount() {
        return studentCount;
    }

    // Main method as program entry point
    public static void main(String[] args) {
        // Adding students (no objects, just function calls)
        addStudent("Alice", 90); // Student 1
        addStudent("Bob", 85); // Student 2

        // Print details using index
        printStudentDetails(0); // Output: Student: Alice, Grade: 90
        printStudentDetails(1); // Output: Student: Bob, Grade: 85

        // Update grade for first student
        updateGrade(0, 95);
        printStudentDetails(0); // Output: Student: Alice, Grade: 95

        // Print total students
        System.out.println("Total students: " + getStudentCount()); // Output: Total students: 2

        // Demonstrate null reference in array
        if (names[2] == null) {
            System.out.println("No student at index 2, null value.");
        }
    }
}