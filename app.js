const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.json({message: "Hello Bonnie"})
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))