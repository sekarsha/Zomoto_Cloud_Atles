const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path=require("path")
const dotenv=require("dotenv")

dotenv.config({path:path.join(__dirname,".env")})

const app = express()
app.use(cors())
app.use(express.json())

 mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DATA BASE CONNECTED");
    })
    .catch(() => {
        console.log("Data base not connected");
    })

const Deatails_schema = new mongoose.Schema({
    Name: String,
    Email: String,
    Pass: String
})

const Details_Modal = mongoose.model("User", Deatails_schema)

app.post("/log", (req, res) => {

    const { Email1, Pass1 } = req.body

    Details_Modal.findOne({ Email: Email1 })
        .then(user => {
            if (user) {
                if (user.Pass === Pass1) {
                    res.json("success")
                }
                else {
                    res.json("The Password is incorren=ct")
                }
            }
            else {
                res.json("EMAIL IS Not ")
            }

        })

})



app.post("/reg", async (req, res) => {

    const { Name, Email, Pass } = req.body

    const post_detail = new Details_Modal({ Name, Email, Pass })
    await post_detail.save()
    res.status(201).json(post_detail)

})


app.listen(process.env.PORT, () => console.log("SERVER IS CONNECTED"))