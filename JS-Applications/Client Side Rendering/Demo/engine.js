export function renderTemplate(templateAsString, data) {
    console.log(data)
    const patern = /{{(.+?)}}/gm;

    return templateAsString.replace(patern, (match, propName) => {
        return data[propName];
    });

}