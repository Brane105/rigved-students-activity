document.querySelector('#check').addEventListener('click',check)
function check(){
    const day = document.querySelector('#day').value.toLowerCase()
    //condition go here
    if(day === 'monday'){
        alert("Boring......");
    }
    else if(day === 'tuesday'){
       alert("School P.E Day....");
    }
    else if(day === 'wednesday'){
        alert("Hungry canteen Day...");
    }
    else if(day === 'thrusday'){
        alert("Another Useless Boring day......");
    }
    else if(day === 'friday'){
        alert("Friday is the go home early day");
    }
    else if(day === 'saturday' || day === 'sunday'){
        alert("Finally its WEEKEND!!!!!!!!");
    }
    else{
        alert("Invlid input !");
    }
}
//Simplete calcultor code
let total= 0
document.querySelector('#zero').addEventListener('click',zero)
document.querySelector('#three').addEventListener('click',three)
document.querySelector('#nine').addEventListener('click',nine)
document.querySelector('#two').addEventListener('click',two)

function zero(){
    total = 0
    document.querySelector('#result').innerText = total
}
function three(){
    total = total + 3
    document.querySelector('#result').innerText = total
}
function nine(){
    total = total + 9
    document.querySelector('#result').innerText = total
}
function two(){
    total = total -2
    document.querySelector('#result').innerText = total
}

/*this below Program changes the Background */
document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue

function partyPurple()  {
    document.querySelector('.div1').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('.div1').style.color ='black'
}
function partyGreen()   {
    document.querySelector('.div2').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('.div2').style.color ='black'
}
function partyBlue()  {
    document.querySelector('.div3').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('.div3').style.color ='black'
}