'use strict';

var del = require('del');

del(['build'], function (err, deletedFiles) {
    console.log("Files deleted: " + deletedFiles.join(', '));
});
