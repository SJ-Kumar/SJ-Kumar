## Understand the Problem and Clarify Requirements
Understanding the requirements is the fundamental first step in any system design interview.
It is crucial to ensure that you and your interviewer are on the same page before proceeding with the design of the system. 
This involves understanding and articulating both the functional and non-functional requirements. Let's dive into these two categories.

### Functional Requirements
Functional requirements define the primary features and behaviors of the system. They form the core of what the system is intended to do. 
Understanding these requirements involves identifying the main system operations and interactions. 
Let's say you're designing a system like Twitter. Some of the functional requirements might include:

Tweeting: Users should be able to post short messages (tweets).
Following: Users should be able to follow other users.
Timeline: Users should see an updated list of tweets from the users they follow.

### Non-Functional Requirements
Non-functional requirements refer to system characteristics like reliability, security, scalability, and performance. 
These are often the 'ilities' that you hear about, such as availability, scalability, etc. 
They are not about specific features but about how the system works

In our Twitter example, some non-functional requirements could be:

High availability: The system should ensure continued operation even in case of component failure.
Scalability: The system should be capable of handling a large number of requests and grow as the user base increases.
Security: User data confidentiality and integrity should be maintained.
Typical technologies to address these requirements can include distributed databases like Cassandra for scalability, 
Amazon S3 for reliable and scalable storage, and security measures like SSL/TLS for data in transit and hashing + salting for password security.


## Back-of-the-Envelope Estimation
Back-of-the-envelope (BOT) estimation involves making rough calculations or estimates about system metrics. This skill is particularly valuable when gauging the system's scale, which impacts design considerations related to performance, scalability, and reliability.

Two of the most commonly asked bot estimations are:

Estimate the number of daily active users
Estimate the storage requirements of the system


### Estimating Daily Active Users (DAU)
Daily Active Users (DAU) refers to the unique users who engage with a system or service within a 24-hour period. 
Estimating DAU helps you gauge the scale of the system, which impacts how you design the system.

Here are some tips for estimating DAU:

Consider the user base: If the system is designed for a specific set of users (like employees of a company), this can give a good estimate of the DAU.
Consider the nature of the system: Some systems (like social networks) have higher user engagement than others (like a monthly bill payment system).
Consider the system's reach: If the system is global, it might have more potential users than a system targeted to a specific region.
Consider potential growth: Systems don't remain static, they grow. Factor in the potential growth rate.
With these considerations in mind, you can apply this template:

"Our service is targeting users that need [ User Need ]. I know that [ Similar System X ] which serves a similar user base has roughly [ Y ] daily active users. I estimate our system will have about [ W ]% of [ X ]'s user base because [ Z ]. Leaving room for growth, our system should support [ X * W * (1.5 for growth) ]."

Here are rounded estimates of some common services DAU for reference.

Website	DAU (millions)
Facebook	2,000
Instagram	500
Snapchat	400
LinkedIn	300
Twitter	200
Uber	50
Remember, the goal here is not to predict the exact number of users but to prepare for designing a system that can handle its expected load.

### Estimating Storage Requirements
Estimating the storage requirements involves understanding the data your system will handle and making rough estimates. 
This is crucial to inform storage choices and ensure the system can handle its data needs.

Follow these steps to estimate storage requirements:

Identify the types of data the system will store (user profiles, transaction logs, multimedia files, etc.).
Estimate the size of each unit of data. For example, a user profile might include text data (a few kilobytes) and images (a few hundred kilobytes to a few megabytes).
Multiply the estimated size per unit by the expected number of units (users, transactions, etc.).
Factor in data growth over time, data redundancy for fault tolerance, backups, and potential future features.
Bytes scale up in thousands. An effective way to convert between bytes is to count commas (divide by 1,000). For example, starting with 71,000,000,000 bytes, we can chop off the last three digits after the comma to get 71,000,000 kilobytes. Do this again to get 71,000 megabytes. Once more gives us 71 gigabytes.

#### Unit	Size
Byte	1 B
Kilobyte	1,024 Bytes
Megabyte	1,024 KB
Gigabyte	1,024 MB
Terabyte	1,024 GB
It's very useful to have a sense of the storage requirements for basic data types like words, images, and videos. 
This allows you to move quickly through this section in the interview.

#### Data Type	Estimated Size
1 Character	1 Byte
1 Word (5 characters avg.)	5 Bytes
1 Page of text (500 words avg.)	2,500 Bytes or ~2.5 KB
1 Image (compressed)	500 KB - 2 MB
1 High-resolution Image	2 - 10 MB
1 Minute of Audio (MP3)	1 MB
1 Minute of Video (standard 480p)	50 - 150 MB
1 Minute of Video (HD 1080p)	200 - 300 MB

### CAP Theorem
Understanding the CAP theorem and its implications is a fundamental step in any system design interview. 
This theorem is particularly important when designing distributed systems, as it helps guide decisions regarding trade-offs between consistency, availability, and partition tolerance.

Grasping the Basics
The CAP theorem states that a distributed computing system cannot simultaneously provide all three of the following guarantees:

Consistency: Every read receives the most recent write or an error. Essentially, all nodes in the distributed system see the same data at the same time.

Availability: Every request gets a non-error response, but there's no guarantee that it contains the most recent write. 
Basically, all nodes are always operational and can execute read and write operations.

Partition Tolerance: The system continues to operate despite an arbitrary number of network partitions. 
Even if the system splits into multiple sub-systems that can't communicate with each other, it still functions.

Decoding the Trade-offs
All distributed systems must have network partitioning in order to scale, so your job is to just choose between consistency and availability. 
Here's a simplified breakdown:

CP (Consistency/Partition Tolerance): This combination prioritizes data consistency across all nodes over availability. 
Should a network partition occur, some nodes may be unreachable, but the ones that are available provide consistent data.

AP (Availability/Partition Tolerance): Here, the availability of all nodes is prioritized over data consistency. 
In case of a network partition, all nodes are accessible but may not provide the most recent data.

In your interview, you should decide where is more important for your system, consistency or availability, and clearly state, "We will design a [AP/CP] system because ..."

Applying the Knowledge
Understanding the implications of the CAP theorem for your specific system's needs is vital for successful system design. 
It guides the decision-making process when designing the architecture and selecting technologies to use.

For instance, a system like a bank's database that cannot afford any inconsistency might opt for a CP system, sacrificing availability during a network partition. 
On the other hand, a service like a social media platform might prefer to be always available and allow temporary inconsistencies, opting for an AP system.


## Choosing a System Architectures
When discussing the high level overview, it's important to consider the tradeoffs of different architectures and settle on one that best fits your needs.

Here are some common architectures and their tradeoffs:

Architecture	
Monolithic Architecture
Simplicity: Easier to develop and deploy because all components are interwoven and deployed together.

Consistency: Since there's only one codebase, it's easier to maintain consistency in terms of tools, libraries, and processes used.

Efficiency: Inter-component communication can be faster because all components reside in the same process.

Microservices Architecture

Scalability: Each service is independent, so they can be scaled individually based on demand.

Flexibility: Different services can use different technologies that best suit their requirements.

Isolation: Failure in one service doesn't directly affect the others.

Serverless Architecture
Scalability: The infrastructure scales up and down automatically based on the demand.

Cost-effectiveness: You only pay for the compute time you consume.

Reduced Operational Effort: Server management and capacity planning are handled by the cloud provider.

Event-Driven Architecture

Scalability: Can handle high loads and spikes in traffic.

Flexibility: Components are decoupled, promoting flexibility and evolution of individual parts.

Real-time: Can react to events in real-time.

Service-Oriented Architecture (SOA)

Reusability: Services can be reused across different applications, improving development efficiency.

Flexibility: Allows for loose coupling of services, enabling changes to be made to one service without affecting others.

Each architecture has its unique trade-offs and is suited to different kinds of applications and business requirements.

