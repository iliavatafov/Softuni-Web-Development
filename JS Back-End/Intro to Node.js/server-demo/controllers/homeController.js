const { html } = require("../utils");

const homePage = html(`
<h1>Home Page</h1>
<p>Some text here</p>
`);

const aboutPage = html(`
<h1>About Page</h1>
<p>Some text here</p>
`);

const contactsPage = html(`
<h1>Contacts Page</h1>
<p>Some text here</p>
`);

function homeController(req, res) {
  const home = html(homePage);
  res.write(home);
  res.end();
}
function aboutController(req, res) {
  res.write(html(aboutPage));
  res.end();
}
function contactsController(req, res) {
  res.write(html(contactsPage));
  res.end();
}

module.exports = {
  homeController,
  aboutController,
  contactsController,
};
