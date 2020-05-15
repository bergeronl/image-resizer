const fs = require('fs');
const path = require('path');

async function crawl(args, update) {
    const dir = await fs.promises.opendir(args.src);
    for await (const dirEntry of dir) {
        try {
            if (dirEntry.isFile()) {
                const fullFilePath = path.join(args.src, dirEntry.name);
                await update(fullFilePath, args);
            }
        } catch (error) {
            console.error(`Error processing entry '${dirEntry.name}'. Error: ${error}`);
        }
    }
}

module.exports = {
    crawl
}
