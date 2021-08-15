const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express();
const port = process.env.PORT || 5000

//Configurando banco de dados mongodb com o mongoose
mongoose.connect('mongodb://localhost:27017/database', {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}, function(err){
    if(err){
        console.log(err)
    }
    else{

        console.log('MongoDB conectado com sucesso')
    }
})

// informar quais domínios podem consumir os dados da API
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, function(){
    console.log(`Server runing on port ${port}`)
})
