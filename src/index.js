#!/usr/bin/env node

const parseArguments = require('./modules/argumentParser');
const imageCrawler = require('./modules/imageCrawler');
const imageUpdater = require('./modules/imageUpdater');

async function run() {
    const args = parseArguments();

    await imageCrawler.crawl(args, imageUpdater.update);
};

run();