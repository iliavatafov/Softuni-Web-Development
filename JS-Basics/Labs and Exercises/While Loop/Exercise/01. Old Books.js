function oldBooks(input){

    let index = 0;
    
    let bookName = input[index];
    index++;

    let currentBookName = input[index];
    index++;

    let counter = 0;

    while(currentBookName !== "No More Books"){        
        if(currentBookName === bookName){
            console.log(`You checked ${counter} books and found it.`)
            break;
        }
        counter++;
        currentBookName = input[index];
        index++;
    }
    if(currentBookName === "No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`)
    }
}

