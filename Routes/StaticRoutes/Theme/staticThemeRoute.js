"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { findRawThemeByID } = require('../../../Controller/Theme/rawTheme');

router.get('/:themeID', function (req, res, next) {

    let themeID = parseInt(req.params.themeID);

    if(Number.isInteger(themeID) && themeID <= Math.pow(2, 31))
        findRawThemeByID(themeID)
            .then((theme) => {
                if(theme)
                    return res.sendFile(path.join(__dirname, '../../../public/catalogue/theme-single.html'));
                else
                    return next();
            }).catch((err) => {
            console.log(err);
            return next(new Response(500, "Internal Server Error"));
        });
    else
        next();
});

module.exports = router;