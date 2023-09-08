require("dotenv").config();
const port = process.env.PORT || 3030
const express = require("express")
const path = require("path")
const app = express()
 //const hbs = require("hbs")
const LogInCollection = require("./mongo")
const BiilingDetails = require("./billing")
const { error } = require("console");
const { default: mongoose } = require("mongoose");

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);
app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)


app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/cart' , (req,res) => {
    res.render("cart")
})

app.get('/billing' , (req,res) => {
    res.render("billing")
})
app.get('/thankyou' , (req,res) => {
    res.render("thankyou")
})

 app.get('/home', (req, res) => {
     res.render('home')
 })

app.post('/signup', async (req, res) => {
    try{  
     const data = new LogInCollection({
        fname: req.body.fname,
        lname:req.body.lname,
        phone:req.body.phone,
        email:req.body.email,
        gender:req.body.gender,
        password: req.body.password
     })

     //await data.save()

    /*const data = {
        fname: req.body.fname,
        lname:req.body.lname,
        phone:req.body.phone,
        email:req.body.email,
        gender:req.body.gender,
        password: req.body.password
    }*/
    
  //  const checking = await LogInCollection.findOne({email: req.body.email})

    await data.save()
   /*
    if (checking.email == req.body.email && checking.password==req.body.password) {
        res.send("user details already exists")
    }
    else{
       // await LogInCollection.insertMany([data])
        await data.save()
    }*/
    
   res.redirect("login")
   }
   catch(error){
    console.log(error)
   }

})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ email: req.body.email})
       // console.log(check)
        if (check.password == req.body.password) {
            res.status(201).render("loggedin", { naming: `${req.body.password}+${req.body.email}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        
    }


})

app.post('/billing', async (req, res) => {
    try{  
     const data = new BiilingDetails({
        fname: req.body.fname,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zipcode:req.body.zipcode,
        email:req.body.email,
        cardname:req.body.cardname,
        cardno:req.body.cardno,
     })

     await data.save()
    
   res.redirect("thankyou")
   }
   catch(error){
    console.log(error)
   }

})



app.listen(port, () => {
    console.log('port connected');
})