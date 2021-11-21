const express = require('express');
const UserController=require('../controller/UserController');
const router = express.Router()

router.get('/',(req,res)=>{
    UserController.getAllUsers(req,res)
}).get('/:userId',(req,res)=>{
    UserController.getUsersbyId(req,res)
}).post('/new',(req,res)=>{
    UserController.addNewUsers(req,res)
}).delete('/delete/:userId',(req,res)=>{
    UserController.deleteUser(req,res)
}).put('/cash/:userId',(req,res)=>{
    UserController.updateCashUser(req,res)
}).put('/cridet/:userId',(req,res)=>{
    UserController.updateCridetUser(req,res)
}).put('/drawMoney/:userId',(req,res)=>{
UserController.updateDrawMoney(req,res)
}).put('/transferMoney/:from/:to',(req,res)=>{
    UserController.updateTransfer(req,res)
})

module.exports=router;