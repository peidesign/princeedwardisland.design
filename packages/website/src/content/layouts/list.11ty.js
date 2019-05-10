module.exports = data => {
  const endpoints = {};

  Object.keys(data.collections).forEach(collection => {
    if (data.collections[collection].length > 0) {
      endpoints[collection] = data.collections[collection].map(
        item => item.url
      );
    }
  });

  return JSON.stringify(endpoints);
};
