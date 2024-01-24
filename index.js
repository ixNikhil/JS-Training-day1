 
function Calculate(){
    //Interest rate section
    let interest = document.getElementById('interest').value;
    interest = Number(interest);

    //Time section
    let time = document.getElementById('time').value;
    time = Number(time);

    //Amount section
    let amount = document.getElementById('amount').value;
    amount = Number(amount);

    //Calculation section
    let result;
    result = (interest * time * amount)/100;

    //Print section 
    document.getElementById('result').innerHTML = result;

}