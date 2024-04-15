const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://chatutea-frontend-j4mq.vercel.app/" , methods: ["GET","POST"]}));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username, firt_name: username},
            {headers: {"private-key": "425d486c-0f06-4b8a-8381-873dde8aae98"}}
        );
        return res.status(r.status).json(r.data);
    } catch(e){
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);