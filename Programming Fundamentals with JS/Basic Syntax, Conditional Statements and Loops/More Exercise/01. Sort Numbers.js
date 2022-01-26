function sortNumbers(n1, n2, n3){
    let num1 = 0;
    let num2 = 0;
    let num3 = 0; 
    
    if(n1 >= n2 && n1 >= n3){
        num1 = n1;
    }
    else if(n2 >= n1 && n2 >= n3){
        num1 = n2;
    }
    else if(n3 >= n2 && n3 >= n1){
        num1 = n3;
    }
    if((n1 >= n2 && n1 <= n3) || (n1 <= n2 && n1 >= n3)){
        num2 = n1;
    }
    else if((n2 >= n1 && n2 <= n3) || (n2 <= n1 && n2 >= n3)){
        num2 = n2;
    }
    else if((n3 >= n2 && n3 <= n1) || (n3 <= n2 && n3 >= n1)){
        num2 = n3;
    }
    if(n1 <= n2 && n1 <= n3){
        num3 = n1;
    }
    else if(n2 <= n1 && n2 <= n3){
        num3 = n2;
    }
    else if(n3 <= n2 && n3 <= n1){
        num3 = n3;
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
