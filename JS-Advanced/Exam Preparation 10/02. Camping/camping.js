class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        const isConditionMet = Object.keys(this.priceForTheCamp).some(c => c == condition);

        if (!isConditionMet) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {

        const participant = this.listOfParticipants.find(p => p.name == name);

        if (participant) {
            const removalIndex = this.listOfParticipants.indexOf(participant);
            this.listOfParticipants.splice(removalIndex, 1);
            return `The ${name} removed successfully.`;
        } else {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        if (typeOfGame == 'WaterBalloonFights') {
            const partOne = this.listOfParticipants.find(p => p.name == participant1);
            const partTwo = this.listOfParticipants.find(p => p.name == participant2);

            if (!partOne || !partTwo) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (partOne.condition != partTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (partOne.power > partTwo.power) {
                partOne.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (partOne.power < partTwo.power) {
                partTwo.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }

        } else if (typeOfGame == 'Battleship') {
            const part = this.listOfParticipants.find(p => p.name == participant1);

            if (!part) {
                throw new Error(`Invalid entered name/s.`);
            }

            part.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a, b) => b.wins - a.wins).map(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.registerParticipant("george", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


/*

console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));

console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));

console.log(summerCamp.toString());
*/