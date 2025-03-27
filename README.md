# my_api
CS 421 API - Student and Subject Management
A simple REST API built using Node.js, Express.js, and SQLite for managing students and subjects.

📌 Features
Retrieve a list of students.

Retrieve a list of subjects.

Uses an in-memory SQLite database.

🛠 Installation and Setup
1️⃣ Install Node.js
Make sure you have Node.js installed.

2️⃣ Clone or Download the Project
sh

git clone https://github.com/yourusername/cs421-api.git
cd cs421-api
3️⃣ Install Dependencies
Run the following command to install required packages:

sh

npm install
🚀 Running the API Server
Start the API by running:

sh

node server.js
If successful, you should see:

arduino

Server is running on http://localhost:3000
📝 API Endpoints
Method	Endpoint	Description
GET	/students	Retrieve all students
GET	/subjects	Retrieve all subjects
Example Response (GET /students)
json

[
  { "id": 1, "name": "Alice", "program": "Software Engineering" },
  { "id": 2, "name": "Bob", "program": "Software Engineering" }
]
Example Response (GET /subjects)
json

[
  { "id": 1, "name": "Introduction to Programming", "year": 1 },
  { "id": 2, "name": "Data Structures", "year": 1 }
]
📌 Troubleshooting
1. MODULE_NOT_FOUND Error
Make sure you've installed dependencies:

sh

npm install
2. SQLITE_ERROR: near "VALUE": syntax error
Check your server.js file and make sure all SQL statements use VALUES instead of VALUE.

3. Port Conflict
If another service is using port 3000, change it in server.js:

javascript

const PORT = process.env.PORT || 4000; // Change from 3000 to 4000
👨‍💻 Author
Your Name
CS 421 - Assignment 1

📜 License
This project is for educational purposes only.

