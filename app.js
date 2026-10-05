
function attack (){
    document.getElementById("button").addEventListener('click', ()=>{
        let hp = document.getElementById("updateLog");
        let missed = Math.random();
        let dmgRandom = Math.floor(Math.random()*16)+5;

        // if/else statements

        document.getElementById("updateLog").innerHTML = 'Logging...';
    })
}


attack()