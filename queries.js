const getStudents = "SELECT * FROM students";
const getStudentById = "select * from students where id =$1";
const checkIdExists = "select s from students s where s.id= $1";
const addStudent= "insert into students (name, id) values ($1,$2)";
const delStudent= "delete from students where id = $1";
const updateStudent= "update student set name= $1 where id = $2";

module.exports= {
    getStudents,
    getStudentById,
    checkIdExists,
    addStudent,
    delStudent,
    updateStudent
};