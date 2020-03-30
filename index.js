const fs = require("fs");
const shuffle = require("lodash.shuffle");
const emoj = require("emoj");

module.exports = async (texts, options) => {
  const lines = texts.split(".").map(line => line.trim());
  const emojis = await Promise.all(lines.map(line => emoj(line)));
  const outtexts = emojis.reduce((txts, emoji) => {
    const emjs = options.random ? shuffle(emoji) : emoji;
    return options.all
      ? txts.replace(".", emjs.join(""))
      : txts.replace(".", emjs[0]);
  }, texts);
  return outtexts;
};
