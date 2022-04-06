function solve(input) {

    const capacity = Number(input.shift());

    let messagesData = {};

    let command = input.shift();

    while (command != `Statistics`) {

        let [action, ...data] = command.split(`=`);

        if (action == `Add`) {

            const username = data.shift();
            const sent = Number(data.shift());
            const received = Number(data.shift());

            add(username, sent, received);

        } else if (action == `Message`) {

            const sender = data.shift();
            const receiver = data.shift();

            sendReceiveMessage(sender, receiver);

        } else if (action == `Empty`) {
            const user = data.shift();
            empty(user);
        }

        command = input.shift();
    }

    const userCount = Object.entries(messagesData).length;

    console.log(`Users count: ${userCount}`);

    Object.entries(messagesData).forEach(user => {
        console.log(`${user[0]} - ${user[1].sent + user[1].received}`);
    });

    function add(username, sent, received) {
        if (!messagesData.hasOwnProperty(username)) {
            messagesData[username] = {};
            messagesData[username].sent = sent;
            messagesData[username].received = received;
        }
    }

    function sendReceiveMessage(sender, receiver) {

        if (messagesData.hasOwnProperty(sender) && messagesData.hasOwnProperty(receiver)) {

            messagesData[sender].sent++;
            messagesData[receiver].received++;

            const senderMessagesCount = messagesData[sender].sent + messagesData[sender].received;
            const receiverMessagesCount = messagesData[receiver].sent + messagesData[receiver].received;

            if (senderMessagesCount >= capacity) {
                delete messagesData[sender];
                console.log(`${sender} reached the capacity!`);
            }

            if (receiverMessagesCount >= capacity) {
                delete messagesData[receiver];
                console.log(`${receiver} reached the capacity!`)
            }
        }
    }

    function empty(user) {
        if (messagesData.hasOwnProperty(user)) {
            delete messagesData[user];
        } else if (user = `All`) {
            messagesData = {};
        }
    }

}

solve(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"
])