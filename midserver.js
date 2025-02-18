const express = require("express")
const app=express()
const middleware=(req,res,next)=>
{
    console.log("middleware is not working")
    next()
}
app.use(middleware)
app.get("/",(req,res)=>
{
    res.send("<h1>Home</h1>")

}
)
app.get("/test",(req,res)=>
{
    res.send("<h1>Testing</h1>")
}

)