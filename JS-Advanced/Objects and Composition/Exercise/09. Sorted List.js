function createSortedList() {
    
    let list = {
        numbers: [],
        size: 0,
        add(element) {
            this.numbers.push(element);
            this.numbers.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < this.numbers.length) {
                this.numbers.splice(index, 1);
                this.size--;
            }
            if (index < 0 || index > this.numbers.length) {
                throw 'Index out of range!';
            }

            if (this.numbers.length === 0) {
                throw 'Empty';
            }

        },
        get(index) {
            if (index >= 0 && index < this.numbers.length) {
                return this.numbers[index];
            } else if (index < 0 || index > this.numbers.length) {
                throw 'Index out of range!';
            }
            if (this.numbers.length === 0) {
                throw 'Empty';
            }
        },
    }
    return list;
}


