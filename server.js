const express = require('express')
const app= express()

app.set('view engine', 'ejs')
app.use(logger)
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) =>{
    console.log('Here')
    res.render("index", {text: "this is from server.js"})
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}
app.listen(3000)