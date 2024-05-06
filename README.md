# EventTrackerProject
## Description

The EventTrackerProject is an API designed for Runescape players to log combat-related events efficiently. It provides essential CRUD operations for managing combat entries seamlessly.




## Learning Objectives

- Create a JPA Project:
  - Develop Java entity classes that model the database tables.
  - Utilize JPA annotations to map entities to database tables.
- Configure a Spring Boot app to publish a REST API:
  - Implement Spring REST annotations for creating RESTful APIs.
  - Utilize Spring Data JPA to perform CRUD operations on the database.
  - Send and receive JSON data for efficient communication between the client and server.

## API Routes

| Action  | HTTP Method | URI Template                  | Description                                             |
|---------|-------------|-------------------------------|---------------------------------------------------------|
| LIST    | GET         | /api/combats                  | Retrieve all combat entries                             |
| READ    | GET         | /api/combats/{id}             | Retrieve combat entry by id                             |
| CREATE  | POST        | /api/combats                  | Create a new combat entries                             |
| UPDATE  | PUT         | /api/combats/{id}             | Update an existing combat entry                         |
| DELETE  | DELETE      | /api/combats/{id}             | Delete a combat entry                                   |
| READ    | GET         | /api/combats/search/{keyword} | Search a combat entry by name, category or combat style |

## Technologies Used

- **IDE**: Spring Tool Suite 4.
- **Java**: Primary programming language.
- **Spring Boot**: Framework for building and deploying Java-based applications.
- **Spring Data JPA**: Simplifies database access and manipulation using JPA.
- **MySQL**: Database system used for storing workout data.
- **RESTful API**: Utilized to expose CRUD operations over HTTP.
- **Gradle**: Build tool for managing dependencies and project configuration.
- **Git/GitHub**: Version control and repository hosting platform.
- **Postman**: API development tool for testing and debugging.
- **AWS**: Deployment platform for hosting the application.

## Lessons Learned

- **Integration of JPA and Spring Boot:** 
  - Successfully configured and utilized JPA within the Spring Boot framework, streamlining data management. facilitating efficient data management.
- **CRUD Implementation:** 
  - Deepened understanding of implementing CRUD operations in web applications, ensuring seamless interaction with the database.
