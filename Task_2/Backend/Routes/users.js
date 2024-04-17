const express=require('express');
const {createUsers,getUserById,deleteUser,getAll}=require('../controllers/users');
const router=express.Router();

router.get('/getAll',getAll);

router.post('/upload',createUsers);

router.get('/:userId',getUserById);

router.delete('/delete/:id',deleteUser);






module.exports=router;