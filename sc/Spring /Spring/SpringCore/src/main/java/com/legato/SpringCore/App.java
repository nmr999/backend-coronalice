package com.legato.SpringCore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
      ApplicationContext a =
    		  new ClassPathXmlApplicationContext("spring.xml");
      		  employee e = a.getBean("emp",employee.class);
      		  System.out.println(e.getId());
      		  System.out.println(e.getName());
      		  System.out.println(e.getAddress());
    }
}
