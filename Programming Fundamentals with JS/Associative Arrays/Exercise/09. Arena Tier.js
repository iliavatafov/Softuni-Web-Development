function solve(arr) {

    let gladiatorsList = {}; 

    for (let list of arr) {

        if (list === `Ave Cesar`) {

            for (let player of Object.keys(gladiatorsList)) {
                let totalSkill = Object.values(gladiatorsList[player]).reduce((a, b) => a + b);
                gladiatorsList[player].totalSkill = totalSkill;
            }

            let arrayGladiatorScor = Object.entries(gladiatorsList);
            let sorted = arrayGladiatorScor.sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].totalSkill - a[1].totalSkill);
            
            for (let player of sorted) {

                let currentResult = Object.entries(player[1]);
                let totalSkill = currentResult.pop().toString().split(`,`)[1];

                console.log(`${player[0]}: ${totalSkill} skill`)

                let sortedTechniques = currentResult.sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - (a[1]));
                
                for (let technique of sortedTechniques) {
                    let [tech, skill] = technique.toString().split(`,`);
                    console.log(`- ${tech} <!> ${skill}`)
                }

            }

        } else if (!list.split(` `).includes(`->`)) {

            let [gladiator1, gladiator2] = list.split(` vs `);

            if (gladiatorsList.hasOwnProperty(gladiator1) && gladiatorsList.hasOwnProperty(gladiator2)) {

                for (let gladiator1Technique of Object.keys(gladiatorsList[gladiator1])) {
                    let gladiator2Techniques = Object.keys(gladiatorsList[gladiator2]);
                    if (gladiator2Techniques.includes(gladiator1Technique)) {

                        let glad1TotalSkills = Object.values(gladiatorsList[gladiator1]).reduce((a, b) => a + b);
                        let glad2TotalSkills = Object.values(gladiatorsList[gladiator2]).reduce((a, b) => a + b);
                        
                        if (glad1TotalSkills > glad2TotalSkills) {
                            delete gladiatorsList[gladiator2];
                        } else if (glad2TotalSkills > glad1TotalSkills){
                            delete gladiatorsList[gladiator1]
                        } 
                    }
                }
            }
        } else {
            let [playerName, technique, skill] = list.split(` -> `);

            if (!gladiatorsList.hasOwnProperty(playerName)) {
                gladiatorsList[playerName] = {
                    [technique]: Number(skill),
                }
            } else if (gladiatorsList[playerName].hasOwnProperty(technique) && gladiatorsList[playerName][technique] < skill) {
                gladiatorsList[playerName][technique] = Number(skill);
            } else if (!gladiatorsList[playerName].hasOwnProperty(technique)) {
                gladiatorsList[playerName][technique] = Number(skill);
            }
        }

    }
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
    
)