const express=require("express")
const app=express()
app.set('view engine','ejs')
app.get("/",(req,res)=>
 {
    res.send("<h1>welcome to flopcart</h1>")

 })
 app.get("/product/:id",(req,res)=>
    {  
       let prodid=req.params.id
       res.send(`details of the product with id $(prodid)`)
   
    }
        )

   app.get("/search",(req,res)=>
   {
      if(req.query.name && req.query.cate)
         res.send(`<h1>Details of Product searched with name ${req.query.name}and category ${req.query.cate}</h1>`)
   else
   res.listen(4500,()=>console.log("express server running at 4500"))
   
      }
   )


 app.listen(4500,()=>console.log("express server running at 4500"))