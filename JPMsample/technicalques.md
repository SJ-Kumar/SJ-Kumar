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

- RISC Reduced Instruction Set Computing". RISC is a type of computer architecture that focuses on using a smaller set of simple and efficient instructions, typically with fixed instruction lengths, to perform task.

### Overview of the functionality of each layer in the OSI model:

Physical Layer: Deals with the physical transmission of data, including the electrical, mechanical, and physical characteristics of the communication medium.
Data Link Layer: Provides reliable transmission of data between directly connected devices, including error detection and correction.
Network Layer: Routes and forwards data packets across different networks, handles addressing, routing, and fragmentation of data packets.
Transport Layer: Ensures reliable and efficient delivery of data between applications, handles tasks such as flow control, error recovery, and congestion control.
Session Layer: Establishes, maintains, and terminates communication sessions between devices.
Presentation Layer: Handles data representation and translation between different formats and data structures, including encryption, compression, and decryption.
Application Layer: Represents the actual applications or services that end users interact with, includes protocols and services that provide application-specific functions.

### Linux and Windows operating systems
Open-source vs Proprietary: Linux is an open-source operating system, which means its source code is freely available for anyone to modify and distribute. Windows, on the other hand, is a proprietary operating system owned by Microsoft, and its source code is not publicly available.
Customizability: Linux provides high customization options, allowing users to modify and tailor the operating system to their specific needs. Windows, on the other hand, has limited customization options compared to Linux.
File System: Linux uses a variety of file systems, such as ext4, XFS, and Btrfs, while Windows uses NTFS as the default file system.
Command Line Interface (CLI): Linux is known for its powerful and flexible command line interface (CLI), which is widely used by advanced users and system administrators. Windows also has a command line interface (Command Prompt), but it is typically less robust compared to Linux.


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
#### Difference between GET, POST, HTTP, HTTPS
Data Submission	Sends data in the URL parameters	
Sends data in the request body	
Sends data in plain text	
Sends data encrypted with SSL/TLS

Data Limitations	
Limited data length due to URL length restrictions	
Can handle larger data due to request body	
No data encryption	
Data encryption with SSL/TLS

Caching	Data can be cached by browsers	
Data can be cached by browsers	
Data can be cached by intermediaries	
Data can be cached by intermediaries

Security	Data is visible in URL, not suitable for sensitive information	
Data is not visible in URL, suitable for sensitive information	
No data encryption, not secure for sensitive information	
Data encryption provides security for sensitive information

Idempotence	Requests are idempotent, meaning multiple requests produce the same result	
Requests are not idempotent, meaning multiple requests can produce different results	
Requests are not idempotent	Requests are not idempotent
Use Cases	Retrieve data from a server	Submit data to a server	Transfer data over the web	
Transfer data securely over the web

### Data Structures and Algorithms


### Design a website like Make My Trip (both front end and back end)

Front-End Architecture:

User Interface (UI): The front-end architecture should include visually appealing and user-friendly UI components such as home page, search filters, booking forms, payment gateways, user profiles, etc.
Client-Side Technologies: The front-end should be built using modern client-side technologies such as HTML5, CSS3, and JavaScript frameworks like React, Angular, or Vue to provide a responsive and interactive user experience.
API Integration: Integration with third-party APIs for services like flight search, hotel booking, and payment gateways is a crucial part of a travel website. This requires understanding and implementing RESTful API calls to fetch data from external services.

Back-End Architecture:

Server-Side Technologies: The back-end architecture should include server-side technologies such as Node.js, Python, or Java to handle business logic, data processing, and API interactions.
Database Management: A relational database management system (RDBMS) like MySQL or PostgreSQL can be used to store and manage data related to flights, hotels, bookings, user profiles, and payments.
Caching: Caching mechanisms such as Redis or Memcached can be used to improve performance by caching frequently accessed data and reducing the load on the database.
Authentication and Authorization: Implementing secure authentication and authorization mechanisms using technologies like OAuth or JWT to ensure the privacy and security of user data and transactions.
Payment Gateway Integration: Integration with secure and reliable payment gateways like PayPal, Stripe, or other relevant options to facilitate seamless and secure online payments.

Other Considerations:

Scalability: Designing the architecture to handle a high volume of concurrent users and requests, with the ability to scale horizontally by adding more servers or using cloud-based solutions.
Performance: Optimizing the website for performance through techniques like caching, content delivery, and code optimization to reduce load times and improve user experience.
Testing and Deployment: Implementing proper testing and deployment processes to ensure the quality and stability of the website during development and after deployment.


### Multi-tier architecture
Multi-tier architecture, also known as n-tier architecture, is a software architecture pattern where an application is divided into multiple logical tiers or layers, each responsible for different aspects of functionality.

Presentation Tier: Also known as the front-end or user interface (UI) tier, this is the layer that interacts directly with the end users. It is responsible for rendering the user interface, receiving user input, and displaying information to the users. It may include components such as web browsers, mobile apps, or desktop applications.

Application Tier: Also known as the middle-tier or business logic tier, this layer contains the business logic and application processing logic of the application. It handles tasks such as processing user requests, executing business rules, and coordinating interactions between different components of the application. It may include components such as application servers, web services, or APIs.

Data Tier: Also known as the back-end or data storage tier, this layer is responsible for managing data storage and retrieval. It includes databases or other data storage systems that store and manage the application's data.


### the real-life application of graphs in social-network like Facebook and Twitter
Friend/Follower Graph: Graphs are used to model the relationships between users, such as friends on Facebook or followers on Twitter. This allows for functionalities like suggesting friends/followers, displaying social connections, and managing privacy settings.

News Feed Ranking: Graph-based algorithms are used to rank and display content in a user's news feed, taking into account the relationships between users, their activities (e.g., likes, comments, shares), and the content they create or interact with (e.g., posts, tweets).

Social Network Analysis: Graph-based techniques, such as centrality measures, clustering algorithms, and visualization techniques, can be used to analyze and visualize social network data to gain insights into user behavior, relationship patterns, and community structures.

### Client and Server side
Client-side: Refers to the part of a software or system that runs on the user's device, typically a web browser or mobile app, and is responsible for rendering the user interface and processing user inputs.
Server-side: Refers to the part of a software or system that runs on the server and is responsible for processing requests from clients, executing business logic, accessing databases or other resources, and generating responses to be sent back to the clients.


### What happens when we type www.google.com
When you type "www.google.com" in the address bar of a web browser and press Enter, the following sequence of events typically occurs:
DNS Resolution: The web browser sends a request to the DNS server to resolve the domain name "www.google.com" into an IP address.
Establishing a TCP Connection: The web browser establishes a TCP connection with the web server at the obtained IP address.
Sending HTTP Request: The web browser sends an HTTP request to the web server, requesting the web page associated with the URL "www.google.com".
Processing the HTTP Request: The web server receives and processes the HTTP request, which may involve executing server-side scripts, fetching data from databases, etc.
Generating HTTP Response: The web server generates an HTTP response that includes the requested web page, along with other metadata such as headers, status codes, and cookies.
Sending HTTP Response: The web server sends the HTTP response back to the web browser through the established TCP connection.
Rendering the Web Page: The web browser receives the HTTP response and renders the web page in the browser window by parsing HTML, rendering CSS, executing JavaScript, etc.
Closing the TCP Connection: After the web page is fully rendered, the web browser may send additional requests for other resources referenced in the web page. Once all resources are loaded, the TCP connection is closed.
User Interaction: The user can interact with the web page, clicking on links, submitting forms, etc.


