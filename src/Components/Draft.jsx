const ball = () =>{















app.post('/carts', async (requestAnimationFrame,res)=>{
const resulst = await lCollection.find().toArray();
res.send(resulst)
})

app.post('/carts', async (requestAnimationFrame,res)=>{
    const focous = req.body
const resulst =await lCollection.insertDocument(focous);
res.send(resulst)
})























}