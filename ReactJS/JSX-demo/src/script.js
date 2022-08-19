const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement(
//     'header', { className: 'header' },
//     React.createElement('h1', {}, 'Hello from React!!!'),
//     React.createElement('h2', {}, 'Somthing')
// )

const reactElement = (
    <header className="site-header">
        <h1>Hellp from JSX</h1>
        <h2>React slogan</h2>
    </header>
)



root.render(reactElement);