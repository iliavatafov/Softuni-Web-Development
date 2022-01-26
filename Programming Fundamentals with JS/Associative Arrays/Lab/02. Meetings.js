function solve(data) {
    let calendar = {};
    for (let line of data) {
        let [day, name] = line.split(` `);
        if (!calendar.hasOwnProperty(day)) {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let key in calendar) {
        console.log(`${key} -> ${calendar[key]}`);
    }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)