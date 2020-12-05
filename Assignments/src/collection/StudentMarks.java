package collection;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class StudentMarks {
    public static void main(String[] args) {

        int total_Marks=0;
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number of students:");
        int no_Of_Students=input.nextInt();
        ArrayList<Integer> student = new ArrayList<Integer>(no_Of_Students);

        // Storing Student mkarks
        for(int i=0;i<no_Of_Students;i++){
            System.out.print("Enter " +(i+1)+ " Student marks:");
            int marks = input.nextInt();
            total_Marks=total_Marks+marks;
            student.add(marks);
        }
        // First  Student
        int max = student.get(0);
        for(int i=0;i<no_Of_Students;i++){
            if(max<student.get(i)) {
                max = student.get(i);
            }
        }
        System.out.println("Highest Marks: "+max);

        //Average Marks
        float average_Marks = total_Marks/no_Of_Students;
        System.out.println("Average Marks: "+average_Marks);

        // displaying the marks
        System.out.print("Marks: ");
        for(int i=0;i<no_Of_Students;i++){
            System.out.print((i+1)+"-"+student.get(i)+" ");;

        }
        // 3rd student display
        System.out.println("3rd Student marks :"+student.get(2));

        //sort
        Collections.sort(student);
        for(int i : student) {
            System.out.println(i);
        }






    }
}