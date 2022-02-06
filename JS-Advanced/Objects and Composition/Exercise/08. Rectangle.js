function rectangle(n1, n2, color) {
    
    color = color.split(``);
    let firstLetter = color.shift().toUpperCase();
    color.unshift(firstLetter)
    color = color.join(``);

    let result = {
        width: n1,
        height: n2,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }

    return result;
}
