const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Sekarsha")
.then(() => {
    console.log("DATA BASE CONNECTED");
    
}).catch((err) => {
    console.log(err);
    
});

const product_schema=new mongoose.Schema({
    id:Number ,
    name: String,
    details: String,
    rating: String,
    pic: String,
    category: String,
    price: String,
    weight: String
})

const product_modal=mongoose.model("Ecomerce",product_schema)

app.get("/",async(req,res)=>{
     
    try {
        const get_product=await product_modal.find()
        res.json(get_product)
    } catch (error) {
        console.log("get method la error"+error);
        
    }

   
})

app.listen(3000,()=>{
    console.log("PORT IS RUNNING");
    
})