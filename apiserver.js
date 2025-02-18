const express=require("express")
const app=express()
//registering 
app.use(express.json())
let products=[{"prodid":"1","prodname":"iphone16"},
    {"prodid":"2","prodname":"samsung s24"},
    {"prodid":"3","prodname":"oneplus12"}]//temporary storage
app.get("/products",(req,res)=>
{
    res.send(products)
})
app.post("/products",(req,res)=>
    {
        if(req.body)
            products.push(req.body)
        res.send("<h1>The product is saved successfully</h1>")
    })
app.delete("/products/:id",(req,res)=>
    {
        let searchid=req.params.id
        let flag=0
        for(i=0;i<products.length;i++)
        {
            if(products[i].prodid==searchid)
            {
                products.splice(i,1)
                flag=1
            }
        }
        if(flag==1)
            res.send("<h1>The product is deleted successfully</h1>")
        else
            res.send("<h1>Product not found</h1>")
    })
app.put("/products",(req,res)=>
    {
            res.send("<h1>The product is updated successfully</h1>")
    })

app.listen(3800,()=>console.log("api server running on PORT 3800"))
