

import java.util.*;

public class SetProgram {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Set<String> str = new TreeSet<>();
        str.add("ram");
        str.add("ravi");
        str.add("mahesh");
        str.add("ram");
        str.add("david");
        str.add("sachin");

        for(String s: str)
            System.out.println(s);

        str.remove("ram");
        System.out.println(str.contains("mahesh"));

        System.out.println(str);

    }

}
