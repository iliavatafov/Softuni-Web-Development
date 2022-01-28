function cat(arr) {

    class Cat {
        constructor(catName, age) {
            this.catName = catName,
                this.age = age,
                this.speak = () => {
                    console.log(`${catName}, age ${age} says Meow`);
                };
        }
    }

    for (let cat of arr) {
        let [catName, age] = cat.split(` `);
        let newCat = new Cat(catName, age);
        newCat.speak();
    }
}