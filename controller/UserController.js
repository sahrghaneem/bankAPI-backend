const UserModel=require('../models/model').bankModel

const getAllUsers = (req, res) => {
UserModel.find({}, (err, user) => {
        if (err) return res.status(404).json(err);
        if (user)
        return res.status(200).json(user)
    })
}

const getUsersbyId=(req,res)=>{
const {userId} = req.params
UserModel.find({_id:{$eq:userId}},(err,data)=>{
    if(err)
    return res.status(404).send(err)
    return res.status(200).send(data)
})
}

const addNewUsers = (req, res) => {
const {name,country, passportId,username} = req.body
    let userAdd = new UserModel({
        name,
        country,
        passportId,
        username
    })
    userAdd.save((err, data) => {
        if (err)
        return res.status(404).send(err)
        return res.status(200).send(data)
    })
}

const deleteUser = (req, res) => {
    const {userId} = req.params
    UserModel.findByIdAndDelete(userId, (err, data) => {
        if (err)
        return res.status(404).send(err)
        return res.status(200).send(data)
    })
}

const updateCashUser = (req, res) => {
    const {userId} = req.params
    const {cash} = req.body
    const newCash=parseInt(cash)
    UserModel.findById(userId,(err,data)=>{
        if(err) return res.status(404).send(err)
        UserModel.findByIdAndUpdate(userId,{cash:data.cash+newCash},{new:true}, (err,data) => {
            if (err)
            return res.status(204).send(err)
            return res.status(201).send(data)
    
        })
    })
   
}

const updateCridetUser = (req, res) => {
    const {userId} = req.params
    const {cridet} = req.body
    const newCridet=parseInt(cridet)
        UserModel.findByIdAndUpdate(userId,{cridet:newCridet},{new:true}, (err,data) => {
            if (err)
            return res.status(204).send(err)
            return res.status(201).send(data)
    
        })
   
}

const updateDrawMoney = (req, res) => {
    const {userId} = req.params
    const {cash} = req.body
   UserModel.findById(userId,(err,data)=>{
    if (err)
    return res.status(204).send(err)
    const newCash=data.cash- parseInt(cash)
    if(newCash>0){
    UserModel.findByIdAndUpdate(userId,{cash:newCash},{new:true}, (err,data) => {
        if (err)
        return res.status(204).send(err)
        return res.status(201).send(data)

})
}
})
      
   
}

const updateTransfer = (req, res) => {
    const {from , to} = req.params
    const {cash} = req.body

   UserModel.findById(from,(err,data)=>{
    if (err)
    return res.status(204).send(err)
    const newCashFrom=data.cash-cash
    const newCridet=data.cridet-cash
    if(newCashFrom>0 && newCridet>0){
    UserModel.findByIdAndUpdate(from,{cash:newCashFrom},{new:true}, (err,data2) => {
        if (err)
        return res.status(204).send(err)
       
    UserModel.findById(to,(err,data)=>{
        const newCashTo=data.cash+cash
        
        if (err)
        return res.status(204).send(err)
        UserModel.findByIdAndUpdate(to,{cash:newCashTo},{new:true}, (err,data1) => {
        if (err)
        return res.status(204).send(err)
        return res.status(200).json({data1,data2})

        })

    })
}
    )}
})
}



module.exports ={
getAllUsers,
getUsersbyId,
addNewUsers,
updateCashUser,
deleteUser,
updateCridetUser,
updateDrawMoney,
updateTransfer
}