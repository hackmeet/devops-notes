public class Person {
    String name;
    int age;
    String address;
    String email;

    public Person(String name,int age,String address,String email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
    }

    public void printInfo() {
        System.out.println("name = " + this.name);
        System.out.println("address = " + this.address);
        System.out.println("age = " + this.age);
        System.out.println("email = " + this.email);
    }

    public static void main(String args[]) {
        Person person = new Person("person1", 20, "Pune", "person1@test.com");
        person.printInfo();
    }
}