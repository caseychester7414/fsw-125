const express = require("express")
const app = express()


const movies= [
    {title: "Troy", genre: "War"},
    {title: "aquaman", genre: "fantasy"},
    {title: "Venom",genre: "action"}
]
const tv= [
    {title: "Vikings", genre: "Action"},
    {title: "Rick And Morty", genre: "Cartoon"},
    {title: "lucifier", genre: "Fantasy"}
]
const shortFilm= [
    {title: "bao", genre: "fanstasy"},
    {title: "playdate with destiny", genre: "cartoon"},
    {title: "tangled every after", genre: "fanstasy"}

]


app.get("/movies", (req,res) => {
    res.send(movies)

})
app.get("/tv", (req,res) => {
    res.send(tv)

})
app.get("/shortFilm", (req,res) => {
    res.send(shortFilm)

})


app.listen(4000, () => {
    console.log("The server is running on Port 4000")

})