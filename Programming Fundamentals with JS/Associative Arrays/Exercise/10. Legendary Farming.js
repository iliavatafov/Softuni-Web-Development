function solve(input) {

    let legendaryMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    let junk = {};
    let materials = input.split(` `);
    for (let i = 0; i < materials.length; i += 2) {
        let material = materials[i + 1].toLowerCase();
        flag = false;
        switch (material) {
            case `shards`:
                legendaryMaterials.shards += Number(materials[i]);
                if (legendaryMaterials.shards >= 250) {
                    console.log(`Shadowmourne obtained!`);
                    legendaryMaterials.shards -= 250;
                    flag = true;
                }
                break;
            case `fragments`:
                legendaryMaterials.fragments += Number(materials[i]);
                if (legendaryMaterials.fragments >= 250) {
                    console.log(`Valanyr obtained!`);
                    legendaryMaterials.fragments -= 250;
                    flag = true;
                }
                break;
            case `motes`:
                legendaryMaterials.motes += Number(materials[i]);
                if (legendaryMaterials.motes >= 250) {
                    console.log(`Dragonwrath obtained!`);
                    legendaryMaterials.motes -= 250;
                    flag = true;
                }
                break;
            default:
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = Number(materials[i]);
                } else {
                    junk[material] += Number(materials[i]);
                }
                break;
        }
        if (flag) {
            break;
        }
    }
    let sortedMaterials = Object.entries(legendaryMaterials)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1] - a[1]);
    sortedMaterials.forEach(x => console.log(`${x[0]}: ${x[1]}`));
    let sortedJunk = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]));
    sortedJunk.forEach(x => console.log(`${x[0]}: ${x[1]}`))
}

solve('3 Motes 5 stones 5 stones 6 leathers 255 fragments 7 Shards')