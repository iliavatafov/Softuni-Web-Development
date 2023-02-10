function html(body, title = "Hello") {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <title>${title}</title>
</head>
<body>
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
    <a href="/contacts">Contacts</a>
    </li>
    <li>
    <a href="/catalog">Catalog</a>
    </li>
  </ul>
</nav>
  ${body}
</body>
</html>`;
}

function addItem(name, color) {
  const id = nextId();
  data[id] = {
    name,
    color,
  };
}

function nextId() {
  return "xxxxxxxx".replace(/x/g, () =>
    ((Math.random() * 16) | 0).toString(16)
  );
}

function getItems() {
  return Object.entries(data).map(([id, item]) =>
    Object.assign({}, item, { id })
  );
}

const data = {
  f134p623: {
    name: "Product 1",
    color: "red",
  },
  "18k4n623": {
    name: "Product 2",
    color: "green",
  },
  "1034r62t": {
    name: "Product 3",
    color: "blue",
  },
  "11w416u3": {
    name: "Product 4",
    color: "orange",
  },
};

module.exports = {
  html,
  addItem,
  getItems,
};
