const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
    name: String,
    email:String,
    cpf: String,
    password: String,


},{
    // campo de data de criação e atualização do usuario (createdat, updatedat)
    timestamps:true
});

schema.pre('save', function(next){
    if(!this.isModified("password")){
        return next();
    }

    this.password = bcrypt.hashSync(this.password,10);
    next();
})

const user = mongoose.model('users', schema)

module.exports = user;