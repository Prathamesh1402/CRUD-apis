const {Router} =require(`express`);
const controller =require('./controllers.js')

const router = Router();

router.get('/',controller.getStudents );
router.get("/:id", controller.getStudentById);
router.post("/", controller.addStudent);
router .delete("/:id", controller.delStudent);
router.put("/:id", controller.updateStudent);

module.exports= router;