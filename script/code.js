//function

function ageDays(){
    //age
    let age = +prompt('Enter Your Age')
    //days in years accounting for leap years
    let days = 365.25
    //conversion
    let conversion = days * age
    console.log(`At ${age} years old you would be ${conversion}`);    
}

ageDays()