class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    updateSize = () => this.size = this.list.length;
    sorting = () => this.list.sort((a, b) => a - b);

    add(element) {
        this.list.push(element);
        this.updateSize()
        this.sorting()
    }

    remove(index) {
        let listLength = this.list.length;
        if (index >= 0 && index < listLength) {
            this.list.splice(index, 1);
            this.updateSize()
        } else {
            throw new Error(`Range Error`);
        }
    }

    get(index) {
        let listLength = this.list.length;
        if (index >= 0 && index < listLength) {
            return this.list[index];
        } else {
            throw new Error(`Range Error`);
        }
    }
}