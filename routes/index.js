const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

router.get("/andrew", (req, res) => {
    const student = {
        name: "Андрій",
        age: 18,
        groupNumber: 3,
    };
    res.render("student", { student });
});

router.get("/pavlo", (req, res) => {
    const student = {
        name: "Павло",
        age: 18,
        groupNumber: 3,
    };
    res.render("student", { student });
});

router.get("/stas", (req, res) => {
    const student = {
        name: "Ростислав",
        age: 19,
        groupNumber: 3,
    };
    res.render("student", { student });
});

router.get("/ivan", (req, res) => {
    const student = {
        name: "Тетяна",
        age: 19,
        groupNumber: 3,
    };
    res.render("student", { student });
});

module.exports = router;