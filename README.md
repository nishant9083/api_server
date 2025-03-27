# Node.js & MongoDB REST API

This project is a RESTful web service built using **Node.js, Express, and MongoDB**. It provides CRUD operations for managing a list of people stored in a MongoDB database.

## Features
- **GET /api/users**: Retrieve a list of all people in the database.
- **POST /api/users/person**: Create a new person.
- **PUT /api/users/:id**: Update an existing person's details.
- **DELETE /api/users/:id**: Remove a person from the database.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

### 1. Clone the repository
```sh
git clone https://github.com/nishant9083/api_server.git
cd api_server
```

### 2. Install dependencies
```sh
npm install
```

### 3. Configure MongoDB
Update the MongoDB connection URI in `.env`:
```sh
MONGO_URI = "mongodb+srv://your_username:your_password@cluster0.mongodb.net/your_database?retryWrites=true&w=majority";
```

### 4. Start the Server
```sh
npm start
```
The API will be available at `http://localhost:3000`.

## API Endpoints
### 1. Get all people
**GET /api/users**
```sh
curl -X GET http://localhost:3000/api/users/
```
_Response:_
```json
[
  { "_id": "660d9a5e4f1a2b3456789abc", "name": "John Doe", "age": 30, "gender": "Male", "mobile": "1234567890" }
]
```

### 2. Create a new person
**POST /api/users/person**
```sh
curl -X POST http://localhost:3000/api/users/person -H "Content-Type: application/json" -d '{"name": "Jane Doe", "age": 28, "gender": "Female", "mobile": "9876543210"}'
```
_Response:_
```json
  { "_id": "660d9a5e4f1a2b3456789abc", "name": "Jane Doe", "age": 28, "gender": "Female", "mobile": "9876543210" }
```

### 3. Update a person
**PUT /api/users/:id**
```sh
curl -X PUT http://localhost:3000/api/users/660d9a5e4f1a2b3456789abc -H "Content-Type: application/json" -d '{"name": "John Smith", "age": 32,  "gender": "Male", "mobile": "1234567890"}'
```
_Response:_
```json
  { "_id": "660d9a5e4f1a2b3456789abc", "name": "John Smith", "age": 32, "gender": "Male", "mobile": "1234567890" }
```

### 4. Delete a person
**DELETE /api/users/:id**
```sh
curl -X DELETE http://localhost:3000/api/users/660d9a5e4f1a2b3456789abc
```

## Project Structure
```
.
├── src
│   ├── config
│   │   ├── db.ts  # MongoDB connection
│   ├── controllers
│   │   ├── person.controller.ts  # API logic
│   ├── models
│   │   ├── person.model.ts  # Model Schema for people
│   ├── routes
│   │   ├── person.routes.ts  # API routes
│   ├── index.ts  # Entry point
├── package.json
├── README.md
```

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **TypeScript** - Typed JavaScript

## License
This project is licensed under the MIT License.

---
### Author
**Nishant Verma**  
Pre-final Year B.Tech in Data Science & AI

