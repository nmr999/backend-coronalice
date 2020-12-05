package com.legato.Springcore;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class App
{
    public static void main( String[] args )
    {

        ApplicationContext  a = new ClassPathXmlApplicationContext("spring.xml");
        Employee e = a.getBean("emp",Employee.class);
        System.out.println(e.getId());
        System.out.println(e.getName());
        System.out.println(e.getAddress());

    }
}