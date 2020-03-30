#!/usr/bin/env node

const emojier = require(".");

const options = {
  all: process.argv.indexOf("-a") !== -1, // use all emojis instead of picking one
  random: process.argv.indexOf("-r") !== -1 // randomize emojis instead of sorting by relevance
};

let data = "";

process.stdin.on("data", chunk => {
  data += chunk;
});

process.stdin.on("end", async () => {
  console.log(await emojier(data, options));
});
