const crypto = require("crypto");

module.exports = data => {
  let id;
  let output;
  const item = data;

  delete item.pkg;
  delete item.page;
  delete item.collections;

  output = { ...item, ...data.page };
  id = crypto
    .createHash("md5")
    .update(JSON.stringify({ ...item, ...data.page }))
    .digest("hex");
  output._id = id;

  return JSON.stringify(output);
};
