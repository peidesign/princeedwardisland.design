module.exports = def => {
  let content = {};
  const props = def.get("props");

  props.forEach(prop => {
    const category = prop.get("category");
    const name = prop.get("name");
    const value = `var(--${name})`;

    if (!content.hasOwnProperty(category)) {
      content[category] = {};
    }

    content[category][name] = value;
  });

  return [
    `// Autogenerated file. DO NOT EDIT.`,
    `module.exports = ${JSON.stringify(content, null, 2)};\n`
  ].join("\n");
};
