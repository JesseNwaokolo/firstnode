import  express  from "express";
import superheroes from "./api.js"

const port = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.get("/submit", (req, res)=>{
    let heroes = superheroes[Math.floor( Math.random() * superheroes.length)]
    res.render("index.ejs", {hero : heroes})
})

app.post("/post", (req,res)=>{
    superheroes.push(req.body.heroname)
  
})

app.listen(port, ()=>{
    console.log("server started ")
})