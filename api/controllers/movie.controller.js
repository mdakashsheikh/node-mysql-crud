const db = require("../db/db")

const inserData = async(req, res) => {

    const movieName = req.body.movieName;
    const review = req.body.review;
    const sqlInsert = "INSERT INTO movie_reviews (movie_name, review) VALUES (?, ?)";

    db.query(sqlInsert, [movieName, review], (err, result) => {
        if(err) {
            throw err;
        }else {
            res.send(result)
        }
    })
}

module.exports = {
    inserData,
}