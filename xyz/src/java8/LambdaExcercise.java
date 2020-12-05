package java8;

import java.util.*;

public class LambdaExcercise {
    public static List<String> countries;
    public static Map<String,String> countryCapitals;
    public static List<String> getCountries() {
        return countries;
    }
    public static void setCountries(List<String> countries) {
        LambdaExcercise.countries = countries;
    }
    public static Map<String, String> getCountryCapitals() {
        return countryCapitals;
    }
    public static void setCountryCapitals(Map<String, String> countryCapitals) {
        LambdaExcercise.countryCapitals = countryCapitals;
    }

    public static void displayCountries() {
        countries.forEach(i -> System.out.println(i));
    }
    public static void displayCountryCapitals() {
        countryCapitals.forEach((i,j) -> System.out.println(i + " : " + j));
    }
    public static void sortCountriesByName() {
        Collections.sort(countries,(p1,p2) -> { return p1.compareTo(p2)>0 ?-1 : 1; });

    }
    public static void sortCountriesByLength() {
        Collections.sort(countries,(p1,p2) -> { return p1.length() > p2.length() ? -1 : p1.length()<p2.length() ? 1 : 0 ;});

    }
    public static void removeCountry(String name) {
        if(name.length() > 6) {
            int i = countries.indexOf(name);
            countries.remove(i);
        }

    }
    public static void main(String[] args) {
        countries =new ArrayList<String>();
        countries.add("india");
        countries.add("alabama");
        countries.add("afghanistan");
        countries.add("pakistan");
        countries.add("england");
        countries.add("ireland");
        countryCapitals = new HashMap<String,String>();
        countryCapitals .put("india", "delhi");
        countryCapitals .put("alabama", "montgomery");
        countryCapitals .put("afghanistan", "kabul");
        countryCapitals .put("pakistan", "islamabad");
        countryCapitals .put("england","london");
        countryCapitals .put("ireland", "dublin");
        LambdaExcercise.displayCountries();
        LambdaExcercise.displayCountryCapitals();
        LambdaExcercise.sortCountriesByName();
        LambdaExcercise.displayCountries();
        System.out.println("================");
        LambdaExcercise.sortCountriesByLength();
        LambdaExcercise.displayCountries();
        System.out.println("================");
        LambdaExcercise.removeCountry("pakistan");
        LambdaExcercise.displayCountries();
    }
}