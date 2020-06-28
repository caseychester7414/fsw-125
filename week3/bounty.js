const express = require("express")
const app = express()
var uuid = require("uuid")


const bounties= [
    {firstName: "luke", lastName: "skyWalker", Living: true, BountyAmount: 10000, type: "jedi", id: uuid.v4()},
    {firstName: "Crystal", lastName: "Mullins", Living: true, BountyAmount: 10000000, type: "Sith", id: uuid.v4()},
    {firstName: "Giselle", lastName: "skyWalker", Living: true, BountyAmount: 10000, type: "jedi", id: uuid.v4()}

]

app.get("/bounties", (req,res) => {
    res.send(bounties)

})
app.post("/bounties", (req,res) => {
 const body = req.body
   console.log(body)
   body.id = uuid.v4()
   bounties.push(body)
    res.send(body)

})


app.listen(4000, () => {
    console.log("The server is running on Port 4000")

})