const UserService = require('../services/UserService.js')

const createUser = async (req,res) =>{
    try {
        const {name,email,password, confirmPassword,phone}=req.body
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isCheckEmail = emailRegex.test(email)
        if (!name || !email || !password || !confirmPassword || !phone) {
             return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
             })
        }
        else if(!isCheckEmail){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
             })
        }
        else if(password !== confirmPassword){
            return res.status(200).json({
                status: 'ERR',
                message: 'The password is equal confirmPassword'
             })
        }
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser
}