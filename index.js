import express from "express";
import axios from "axios";
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 8080;

// app.get("/", async (req, res, next) => {
//     res.send("Hi there");
//     await axios.get("", {
//         headers: {
//             "Authorization": "Basic fd43417b-fde6-402a-84ff-c456a7f325c6",
//         }
//     }).then(data => res.send(data))
//         .catch(err => next(err));
//     //res.send(response);
// })
app.use(cors());

app.get("/promise", (req, res) => {
    axios({
        url: `https://www.reed.co.uk/api/1.0/search?page=${req.query.page}`,
        method: "get",
        headers: {
            "Authorization": "Basic ZmQ0MzQxN2ItZmRlNi00MDJhLTg0ZmYtYzQ1NmE3ZjMyNWM2Og==",
        }
    })
        .then(response => {
            res.status(200).json(response.data.results);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}.`);

});
