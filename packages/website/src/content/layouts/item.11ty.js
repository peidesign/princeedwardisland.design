module.exports = data => {
  const page = data;

  delete page.pkg;
  delete page.page;
  delete page.collections;

  return JSON.stringify({ ...page, ...data.page });
};
