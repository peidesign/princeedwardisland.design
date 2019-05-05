module.exports = def => {
  let content = {};
  const props = def.get("props");

  props.forEach(prop => {
    const namespace = prop.get("namespace");
    const category = prop.get("category");
    const name = prop.get("name");
    let value = `var(--${category}-${name})`;

    if (namespace && namespace !== "namespace") {
      value = `var(--${namespace}-${category}-${name})`;
    }

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
