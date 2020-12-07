const fs = require('fs');
exports.fileCall = (filepath) => {
    try {
        text = fs.readFileSync(filepath);
        arr = text.toString().split(' ');
        return arr;
    } catch (e) {
        console.log(e);
    }
}

exports.writeFile = (filepath, arr) => {
    try {
        fs.writeFileSync(filepath, arr.join(" "));
    } catch (e) {
        console.log(e);
    }
}
