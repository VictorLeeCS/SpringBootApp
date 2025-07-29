# Spring Boot App

A full-stack web application built with **Spring Boot** and **React** that provides item management functionality with user authentication.

## 🚀 Features

- **User Authentication**: Secure login/logout with session management
- **Item Management**: Create, read, update, and delete items
- **Responsive UI**: Modern React frontend with real-time updates
- **Database Integration**: PostgreSQL database with JPA/Hibernate

## 🛠️ Tech Stack

### Backend
- **Java** with Spring Boot
- **Spring Security** for authentication
- **Spring Data JPA** for database operations
- **PostgreSQL** database
- **Maven** for dependency management

### Frontend
- **React** with modern hooks
- **JavaScript ES6+**
- **Fetch API** for HTTP requests
- **React Router** for navigation
- **NPM** for package management

## 📦 Item Model

Each item contains:
- **ID**: Auto-generated unique identifier
- **Name**: Item name
- **Description**: Item description
- **Price**: Item price (Integer)
- **Image**: Image URL/path

## 🔧 Setup & Installation

### Prerequisites
- Java 17+
- Node.js 16+
- PostgreSQL
- Maven

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/VictorLeeCS/SpringBootApp.git

# Navigate to project directory
cd SpringBootApp

# Start PostgreSQL
brew services start postgresql

# Run Spring Boot application
mvn spring-boot:run

#Navigate to the front end directory
cd frontEnd/react_app

#Run front end
npm run dev

#Front end is serve on port 3000

