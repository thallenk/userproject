const User = require('../models/User')
const Yup = require('yup')


module.exports = {
    async index(req,res){
        
        const user = await User.find();
        res.json(user)
    },
    async create(req,res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            cpf: Yup.string().required().min(11).max(11),
            //a senha tem no minimo 6 carcteres
            password: Yup.string().required().min(6)
        })
        
        if( !(await schema.isValid(req.body))){
            return res.status(401).json({
                error:'Falha na validação'})
        }
       // const {name, email, cpf, password} = req.body;
        let user = await User.findOne({
            //tratando o email pois ele deve ser unico
        email: req.body.email})
        if(!user){
            const{name, email, cpf, password} = await User.create(req.body)
            return res.status(200).json({
                name,
                email,
                cpf
            })
        }
        else{
            return res.status(500).json({error:'Usuário já cadastrado'})
        }
    
    },

}