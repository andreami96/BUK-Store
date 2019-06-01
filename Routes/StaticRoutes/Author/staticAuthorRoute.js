"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { isInt } = require('../../../Utils/isInteger');
const Response = require('../../../Utils/response');

const { findRawAuthorByID } = require('../../../Controller/Author/rawAuthor');

router.get('/:authorID', function (req, res, next) {
    if(isInt(req.params.authorID))
        findRawAuthorByID(req.params.authorID)
            .then((author) => {
                if(author)
                    return res.sendFile(path.join(__dirname, '../../../public/authors/author.html'));
                else
                    return next();
            }).catch((err) => {
            console.log(err);
            return next(new Response(500, "Internal Server Error"));
        });
    else
        next()
});

module.exports = router;
