function salary(input) {

    let numOpenTabs = Number(input[0]);
    let salaryAmonut = Number(input[1]);

    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {

        let currentTab = input[i];

        switch (currentTab) {
            case `Facebook`: salaryAmonut -= 150; break;
            case `Instagram`: salaryAmonut -= 100; break;
            case `Reddit`: salaryAmonut -= 50; break;
        }
    }
    if (salaryAmonut <= 0) {
        console.log(`You have lost your salary.`);
    }
    else {
        console.log(salaryAmonut);
    }
}