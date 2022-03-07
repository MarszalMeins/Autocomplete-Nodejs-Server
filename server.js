const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/", async (req,res) => {

    await axios.get("https://unsplash.com/nautocomplete/" + req.body.autocomplete)
    .then((response) => {
        const data = response.data
        res.status(200).json({succes:true, data:data})
    })
    .catch((err) => {
        res.status(404).json({succes:false})
    })
})

app.listen(port, () => {
    console.log("Server is running on port:" + port);
})