const express=require("express");
const sqlite3=require("sqlite3").verbose();
const cors=require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


//database initialization

const db = new sqlite3.Database(":memory:");

db.serialize(()=>
{
    db.run("CREATE TABLE students(id INTEGER PRIMARY KEY, name TEXT,program TEXT)");
    db.run("CREATE TABLE subjects(id INTEGER PRIMARY KEY, name TEXT, year INTEGER)");

    //Sample data inserted
    const students = [
        ["carren","software engineering"],
        ["kija","computer science"],
        ["nicolaus","information system"],
        ["gilbert","computer science"],
        ["john","computer science"],
        ["amina","software engineering"],
        ["abdul","information system"],
        ["asha","information system"],
        ["juma","software engineering"],
        ["anna","software engineering"],
    ];

    students.forEach(student =>{
        db.run("INSERT INTO students(name,program) VALUES(?,?)",student);
    });
    const subjects =[
        ["introduction to programming", 1],
        ["data structures", 1],
        ["software analysis and design", 2],
        ["software engineering principles", 2],
        ["operating system", 3],
        ["computer networking", 3],
        ["machine learning", 4],
        ["cloud computing", 4],
    ];

    subjects.forEach(subject =>{
        db.run("INSERT INTO subjects(name,year) VALUES(?,?)",subject);
    });
});

//endpoint of API

app.get("/students",(req,res)=>{
    db.all("SELECT*FROM students",[],(err,rows)=>{
        if(err) return res.status(500).json({error:err.message});
        res.json(rows);
    });

});
app.get("/subjects",(req,res)=>{
    db.all("SELECT*FROM subjects",[],(err,rows)=>{
        if(err) return res.status(500).json({error:err.message});
        res.json(rows);
    });
});
//start server
app.listen(PORT, () =>{
    console.log('server is running on http://localhost:${PORT}');
});