class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        const currentParticipant = this.listOfParticipants.find(p => p.name === name);

        if (condition !== `child` && condition !== `student` && condition !== `collegian`) {
            throw new Error(`Unsuccessful registration at the camp.`);
        }

        if (currentParticipant !== undefined && currentParticipant.name === name) {
            return `The ${name} is already registered at the camp.`;
        }


        const price = this.priceForTheCamp[condition];

        if (price > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {

        const currentParticipant = this.listOfParticipants.find(p => p.name === name);

        if (currentParticipant === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            let indexOfElementForRemove = this.listOfParticipants.findIndex(p => p.name === name);
            this.listOfParticipants.splice(indexOfElementForRemove);
            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        const participantOne = this.listOfParticipants.find(p => p.name === participant1);
        const participantTwo = this.listOfParticipants.find(p => p.name === participant2);

        if (typeOfGame === `WaterBalloonFights`) {

            if (participantOne === undefined || participantTwo === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }


            if (participantOne.condition !== participantTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (participantOne.power > participantTwo.power) {

                participantOne.wins += 1;

                return `The ${participantOne.name} is winner in the game ${typeOfGame}.`;

            } else if (participantOne.power < participantTwo.power) {

                participantTwo.wins += 1;

                return `The ${participantTwo.name} is winner in the game ${typeOfGame}.`;

            } else {
                return `There is no winner.`;
            }

        } else if (typeOfGame === `Battleship`) {

            if (participantOne === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            participantOne.power += 20;

            return `The ${participantOne.name} successfully completed the game ${typeOfGame}.`

        }
    }

    toString() {

        const result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        this.listOfParticipants.forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return result.join(`\n`);
    }
}