package com.stackroute;

import java.sql.Connection;
import java.sql.DriverManager;

public class App {

    public static void main(String[] args) {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/Users", "root", "8008@Nmr");
            System.out.println("Connected to databse!");

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
