const fs = require("fs");
const emoj = require("emoj");

module.exports = async texts => {
  const lines = texts.split(".").map(line => line.trim());
  const emojis = (await Promise.all(lines.map(line => emoj(line)))).map(
    results => results[0]
  );
  const outtexts = emojis.reduce(
    (txts, emoji) => txts.replace(".", `${emoji}`),
    texts
  );
  return outtexts;
};
