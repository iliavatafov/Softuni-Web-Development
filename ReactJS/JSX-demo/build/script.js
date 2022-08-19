var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement(
//     'header', { className: 'header' },
//     React.createElement('h1', {}, 'Hello from React!!!'),
//     React.createElement('h2', {}, 'Somthing')
// )

var reactElement = React.createElement(
    "header", { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hellp from JSX"
    ),
    React.createElement(
        "h2",
        null,
        "React slogan"
    )
);

root.render(reactElement);