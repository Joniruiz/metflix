const getUrl = (req) =>
  req.protocol + "://" + req.get("host") + req.originalUrl;
const bcrypt = require('bcrypt');

const {User} = require('../database/models')

module.exports = {
    test: (req,res) => {
        User.findAll().then(response => {res.send(response)})  // prueba para ver si estan bien los modelos
    },
    register: (req,res) => {
        let {name,last_name,email,password} = req.body    // destructuring del body para no andar poniendo req.body en todas las lineas
       User.create({name,last_name,email,password:bcrypt.hashSync(password,10)})   // registro el usuario y con el bcrypt encripto la password
    
        .then((user) =>    // respuesta de la promesa el usuario
        res.status(200).json({
            meta:{
                endPoint:getUrl(req), 
            },
            data: user   // en la data envio todo el usuario completo
        })
        )
        .catch((err) => res.status(400).send(err))
    },
     login: async (req,res) => {      
        let {email,password} = req.body        
       const user = await User.findOne({    // con el metodo findOne lo utilizo para buscar el usuario por el email que me llega
           where: {email :email}
       })
       if(!user) return res.status(400).json({ error : 'Usuario inexistente'})   // en caso de no encontrar coincidencia con ese email , le envio el mensaje de usuario inexistente
       
       const validPassword = await bcrypt.compare(password ,user.password);   // valido las passwords
       if(!validPassword) return res.status(400).json({error:'password invalida'})    // si la password es invalida, no coincide con la que tenemos en la base de datos que comparamos con el metodo compare del bcrypt le envio el mensaje 

       res.json({
           data:user  // en la data envio el usuario completo
       })
    } 
}