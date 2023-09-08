const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/veggies")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const Billing=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
     
    },
    state:{
        type:String,
        required:true,
       
    },
    zipcode:{
        type:String,
        required:true,
        
    },
    cardname:{
        type:String,
        required:true,
        unique:true
    },
    cardno:{
        type:String,
        required:true,
        unique:true
    },
  
    
})

const BillingDetails=new mongoose.model('BillingDetails',Billing)

module.exports=BillingDetails


