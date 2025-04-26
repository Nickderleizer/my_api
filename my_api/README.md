CS 421 API - Student and Subject Management

A simple REST API built using **Node.js**, **Express.js**, and **SQLite** for managing students and subjects.

features

- Retrieve a list of students
- Retrieve a list of subjects
- Uses an **in-memory SQLite database** (data resets when the server restarts)
Running the API server
start the server
bash 
node server.js

Installation and Setup
 1. Install Node.js  
Make sure you have Node.js installed. [Download here](https://nodejs.org/)

 2. Clone or Download the Project
```bash
git clone https://github.com/COMPUTER VILLAGE TEC/cs421-api.git

cd cs421-api

 Backup Schemes

In this assignment, I explored three common backup schemes and described how each works, with its pros and cons.
1. Full Backup
Description: This type of backup copies all files and data in the system or specified directory every time it runs.

How it's executed: Run a command to copy everything into a backup file. Example with tar:

bash
Copy

tar -czf full_backup.tar.gz /var/www/your_api
Advantages:

Easy to restore, everything is in one place.

No need to combine multiple backups.

Disadvantages:

Takes a lot of time and storage.

Not efficient for frequent backups.

🔹 2. Incremental Backup
Description: Only backs up files that have changed since the last backup (full or incremental).

How it's executed: Use rsync or backup tools that track file changes (e.g., rsnapshot, tar with timestamps).

Advantages:

Very efficient in storage and speed.

Good for daily or frequent backups.

Disadvantages:

Restoring takes time—you need the last full backup and all incremental backups.

More complex recovery.

🔹 3. Differential Backup
Description: Backs up files changed since the last full backup.

How it's executed: Also done with tools like rsync, or manually identifying changed files.

Advantages:

Faster to restore than incremental backups.

Less storage than full backups.

Disadvantages:

Requires more space than incremental backups.

Grows in size each day until the next full backup.


