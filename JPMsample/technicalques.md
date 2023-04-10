# Basic Technical Questions

## Basics


### HTML

### CSS

### JavaScript

### Java
OOPS:

Encapsulation: It is the process of hiding the internal implementation details of an object and exposing only the necessary information 
or behavior through well-defined interfaces. It helps in achieving data abstraction and provides data security and integrity.
Example: In a banking application, the customer account information and transaction details are encapsulated within the account object, 
and only the necessary methods or properties, such as deposit, withdraw, and balance, are exposed to the external world.

Inheritance: It is a mechanism by which one class inherits the properties and behavior of another class, allowing for code reuse 
and promoting the concept of "is-a" relationship. It facilitates the creation of a hierarchical structure of classes with a common base class and derived classes that inherit its attributes and methods.
Example: In a software application for a vehicle rental service, there could be a base class called "Vehicle" 
that defines common properties like make, model, and year, and then derived classes like "Car", "Truck", and "Motorcycle" that inherit these properties and add their own specific properties and methods.

Polymorphism: It is the ability of objects of different classes to respond to the same method or operation based on their respective implementations. 
It promotes code flexibility and extensibility, allowing for multiple objects to be treated as if they were of the same type.
Example: In a drawing application, there could be different shapes like circles, rectangles, and triangles, each implemented 
as a separate class with their own implementation of a common "draw" method. A polymorphic approach would allow a single "draw" method to be invoked on any shape object, regardless of its actual type.

Abstraction: It is the process of simplifying complex systems by breaking them down into smaller, more manageable parts. 
It involves defining abstract classes or interfaces that provide a common template for implementing concrete classes with specific behavior. It promotes code reusability and maintainability.
Example: In a payment processing application, there could be an abstract class or interface called "Payment" that defines common methods like "processPayment" and "validatePayment". Concrete classes like "CreditCardPayment", "PaypalPayment", and "BankTransferPayment" can then implement these methods with their own specific logic.

Object: It is the fundamental unit of object-oriented programming and represents a real-world entity with its properties (attributes or fields) and behavior (methods or functions). 
Objects are instances of classes, and they interact with each other by sending messages and invoking methods.
Example: In a social media application, a user can be represented as an object with properties like name, age, and email, and methods like "post", "comment", and "like" that define its behavior.
### Python

### Networking
RISC
Reduced Instruction Set Computing". RISC is a type of computer architecture that focuses on using a smaller set of simple and efficient instructions, 
typically with fixed instruction lengths, to perform task.


### OS
what’s a semaphore
- Semaphore is a synchronization primitive in computer programming that is used to control access to resources in a multi-threaded or concurrent environment.
It is a variable that maintains a count and is used to indicate the availability or status of a resource.
- Semaphore can be thought of as a signaling mechanism that allows threads or processes to communicate with each other and coordinate their activities. 
  It is commonly used to prevent race conditions, deadlocks, and other concurrency-related issues.
- Semaphore can be implemented using different algorithms or data structures, such as binary semaphore (with only two possible values: 0 and 1), counting semaphore (with a positive integer count), and named semaphore (that can be shared across processes).
- Semaphore is commonly used in operating systems, concurrent programming, and parallel computing to manage shared resources, such as shared memory, files, 
  or devices, and to synchronize access to critical sections or regions of code.
Example: In a previous project, I used semaphores to manage concurrent access to a shared database where multiple threads were writing data simultaneously. 
By using semaphores, I ensured that only one thread at a time could access and modify the database, preventing data corruption and ensuring consistency.

### DBMS
Joins in DBMS
Joins are used to combine data from two or more tables based on a common column or key. They allow for linking related data across tables, enabling complex queries and analysis. 
There are different types of joins, including inner join, left join, right join, and full outer join.

Normalization in DBMS
Normalization is the process of designing a database schema to eliminate redundancy and improve data integrity. 
It involves organizing data into different levels of normalization, such as 1NF, 2NF, 3NF, and BCNF, to ensure efficient data storage and retrieval 
while minimizing redundancy and data anomalies.

Example: In a previous project, I used a join to combine data from the "Orders" and "Customers" tables to generate a report that showed customer information along with their order details.
The join was performed on the "CustomerID" column, which was a common key between the two tables.
### API


### Data Structures and Algorithms


