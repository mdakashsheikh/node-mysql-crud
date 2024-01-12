const db = require("../db/db")

const inserData = async(req, res) => {

    const movieName = req.body.movieName;
    const review = req.body.review;
    const sqlInsert ="INSERT INTO movie_reviews (movie_name, review) VALUES (?, ?)";

    db.query(sqlInsert, [movieName, review], (err, result) => {
        if(err) {
            throw err;
        }else {
            res.send(result)
        }
    })
}

const getData = async(req, res) => {
    const sqlSelect = "SELECT * FROM movie_reviews"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
}

const editData = async(req, res) => {
    const id = req.params.id;
    const movieName = req.body.movieName;
    const review = req.body.review;

    const sqlUpdate = "UPDATE movie_reviews SET `movie_name`=?,  `review`=? WHERE ID=?";

    db.query(sqlUpdate, [movieName, review, id], (err, result) => {
        if(err) return res.json({Message: 'Server Error'});
        return res.json(result);
    })
}

const deleteData = async(req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM movie_reviews WHERE ID = ?";

    db.query(sqlDelete, [id], (err, result) => {
        if(err) return res.json({Message: "Server Error"});
        return res.json(result);
    })
}

module.exports = {
    inserData,
    getData,
    editData,
    deleteData,
}