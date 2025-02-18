const express=require("express")
const app=express()
app.get("/",(req,res)=>
 {
    res.send("<h1>hello frm express</h1>")

 })

app.get("/about",(req,res)=>
    {
       res.send("<h1>hello frm express</h1>")
   
    })

    app.use((req,res)=>
        {
           res.send("<h1>no access</h1>")
       
        }


)
app.listen(4500,()=>console.log("express server running at 4500"))