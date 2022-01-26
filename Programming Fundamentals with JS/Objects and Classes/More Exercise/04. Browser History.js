function browserHistory(object, arr) {

    let browserData = JSON.stringify(object);
    browserData = JSON.parse(browserData);

    for (let commands of arr) {
        let [command, webSite] = commands.split(` `);
        switch (command) {
            case `Open`:
                browserData[`Open Tabs`].push(webSite);
                browserData[`Browser Logs`].push(commands);
                break;
            case `Close`:
                if (browserData[`Open Tabs`].includes(webSite)) {
                    let index = browserData[`Open Tabs`].indexOf(webSite);
                    let newElement = browserData[`Open Tabs`].splice(index, 1);
                    browserData[`Recently Closed`].push(newElement);
                    browserData[`Browser Logs`].push(commands);
                }
                break;
            default:
                browserData[`Open Tabs`] = [];
                browserData[`Recently Closed`] = [];
                browserData[`Browser Logs`] = [];
                break;
        }
    }
    console.log(browserData["Browser Name"]);
    console.log(`Open Tabs: ${browserData[`Open Tabs`].join(`, `)}`);
    console.log(`Recently Closed: ${browserData[`Recently Closed`].join(`, `)}`);
    console.log(`Browser Logs: ${browserData[`Browser Logs`].join(`, `)}`)
}

