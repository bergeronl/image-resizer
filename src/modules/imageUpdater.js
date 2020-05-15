const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function update(imgFile, args) {
    if (!fs.existsSync(args.dest)) {
        fs.mkdirSync(args.dest);
    }

    if (args.progress) {
        console.log(path.parse(imgFile).base);
    }
    await sharp(imgFile)
        .resize({
            height: args.height,
            width: args.width,
            fit: 'inside',
            withoutEnlargement: true
        })
        .normalize()
        .toFile(path.join(args.dest, path.parse(imgFile).base));
}

module.exports = {
    update
}
