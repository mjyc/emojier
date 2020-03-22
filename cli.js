#!/usr/bin/env node

const emojier = require(".");

let data = "";

process.stdin.on("data", chunk => {
  data += chunk;
});

process.stdin.on("end", async () => {
  console.log(await emojier(data));
});
