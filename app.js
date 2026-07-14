const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://sandra_joseph:junghoseok@ac-dayqjc3-shard-00-00.gtlcxqh.mongodb.net:27017,ac-dayqjc3-shard-00-01.gtlcxqh.mongodb.net:27017,ac-dayqjc3-shard-00-02.gtlcxqh.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-13t3ac-shard-0&authSource=admin&appName=Cluster0").then(


    ()=>{

        console.log("MongoDb connected")
    }
).catch(
    (error) =>{

        console.log(error)
    }
)

const Hackathon = mongoose.model("Hackathons", new mongoose.Schema(
    {
       teamId: String,
       teamName: String,
       teamLeader: String,
       leaderEmail: String,
       leaderPhone: String,
       collegeName: String,
       NumberOfMember: String,
       projectTitle: String,
       problemStatementTrack:  String,
       technologyStack: String,
       mentorName: String,
       RegistrationDate: String,
       table: String


    }
))

app.post("/hackathon-add", async (req,res)=>{
    await Hackathon.create(req.body)
    res.json({"status":"success"})
})

app.post("/view-hackathon", async (req,res)=>{
    const logs=await Hackathon.find()
    res.json(logs)
})



app.listen(2000, ()=>{
    console.log("server started")
})