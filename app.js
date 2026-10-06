let hp = 100;
const button = document.querySelector('#button');


function attack (){
    //let hp = 100;
    let missed = Math.random();
    let dmgRandom = Math.floor(Math.random() * 20) + 1;
    console.log('health: ' + hp);

    if (missed < 0.1){
        //missed logic
        console.log('missed');
        console.log('no change');
        return "Your attack was dodged!"

    }else if(missed > 0.1){
        //hit logic
        console.log('hit');
        console.log('damage: ' + dmgRandom);
        console.log('health: ' + hp);
        hp -= dmgRandom;

        //health logic
        if (hp > 0){
            //document.getElementById("updateLog").innerHTML = "HIT!";
            return ("Hit! Damage: " + dmgRandom + ". Remaining Health: " + hp)
        }else if(hp <= 0){
            //document.getElementById("updateLog").innerHTML = "faint";
            console.log('fainted');
            button.disabled = true;
            return "The enemy has fainted!"
        }

        //return hp;
    }
}

function resetBtn () {
    hp = 100;
    document.getElementById("updateLog").innerHTML = "Enemy revived - continue attack?";
    button.disabled = false;
    console.log('enemy revived')
}

document.getElementById("button").addEventListener('click', ()=>{
    document.getElementById("updateLog").innerHTML = attack();
})

document.getElementById("reset").addEventListener('click', ()=>{
    resetBtn();
})