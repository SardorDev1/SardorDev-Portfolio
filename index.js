const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;
const fs = require('fs')
const nodemailer = require('nodemailer')
const path = require('path')
const serverless = require('serverless-http');


app.use(express.static('public'))
app.use(express.json())


app.set("view engine", "ejs")
app.get('/', (req,res) =>{
 res.sendFile(__dirname + '/public/index.html')   
})

app.get("/CommandVoiceAssistant",(req,res) =>{
res.render('useAi.ejs')

})

app.post('/' , (req, res)=>{
    console.log(req.body);
    const  transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'sardordevoluper@gmail.com',
            pass:'Qwerty19012'
        }
    })


const mailOptions = {
    from: req.body.email,
    to:'sardordevoluper@gmail.com',
    subject:`message from ${req.body.email}: phone number  ${req.body.phone}`,
    text: `contact in
    ${req.body.names}-User Name
     ${req.body.email}-Email Adress
     ${req.body.phone}-Phone Number
     ------message------
     ${req.body.message}`
}
transporter.sendMail(mailOptions,(error,info) =>{
    if(error){
        console.log(error);
        res.send('404 Error (Not found)')
        res.status(400)
    }else{
        console.log('Message sent: ' + info.response);
    res.send('success')
    }
})



   
} )
app.listen(port, () => console.log(`Server has been started in ${port} `))


