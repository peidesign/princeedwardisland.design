const item = require("./item.11ty");

module.exports = data => {
  const endpoints = {};
  const collections = data.collections;

  for (var collection of Object.keys(collections)) {
    if (collections[collection].length > 0) {
      const items = {};

      collections[collection].forEach(template => {
        const { _id, permalink } = JSON.parse(item(template.data));

        items[_id] = permalink;
      });

      endpoints[collection] = items;
    }
  }

  return JSON.stringify(endpoints);
};
