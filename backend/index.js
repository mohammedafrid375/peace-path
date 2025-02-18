import express from "express"
import cors from "cors"

const App=express()
App.use(cors())

App.get('/getData',(req,res)=>{
    res.send("helloo")
})

App.listen(5000,()=>console.log("App is running on prot 5000 , Yayy!!!"))