const pool = require('./Db.js');
const queries = require('./queries.js')

const getStudents= (req, res)=>{
    pool.query(queries.getStudents, (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};


const getStudentById =(req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent = (req, res)=>{
   const {name, id}= req.body; 
   pool.query(queries.checkIdExists,[id], (error,results)=>{
    if (results.rows.length){
        res.send("Id Already exists.");
    }
    pool.query(queries.addStudent, [name, id], (error, results)=>{
        if (error) throw error;
        res.status(201).send("Student created sucessfully.");
    })
   })
};

const delStudent = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id], (error,results)=>{
        const noStudentFound= !results.rows.length;
        if (noStudentFound) {
            res.send("Invalid Id.");
        }

        pool.query(queries.delStudent,[id],(error, results)=>{
            if (error) throw error;
            res.status(200).send("Student deleted sucessfully.")
        });
    });    
};

const updateStudent = (req,res) =>{
    const id = parseInt(req.params.id);
    const {name} =req.body;
    pool.query(queries.getStudentById,[id], (error,results)=>{
        const noStudentFound= !results.rows.length;
        if (noStudentFound) {
            res.send("Invalid Id.");
        }

        pool.query(queries.updateStudent, [name, id], (error , results)=>{
            if (error) throw error;
            res.status(200).send("Student Updated sucessfully.")
        })
    })
}


module.exports={
    getStudents,
    getStudentById,
    addStudent,
    delStudent,
    updateStudent,
}