function toJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor,
    };

    let result = JSON.stringify(obj);

    console.log(result)
}

toJSON('George',
'Jones',
'Brown'
)