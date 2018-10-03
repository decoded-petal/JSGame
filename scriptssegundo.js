//--------------------Objects------------------//
let character = {
    hero: [0, 0, 0],
    villain: [1, 1, 1],
}

const interactions = {
    actions: document.getElementById('Actions'),
    library: document.getElementById('Library'),
    gym: document.getElementById('Gym'),
    work: document.getElementById('Work'),
    fight: document.getElementById('Fight'),
    next: document.getElementById('Next'),
    restart: document.getElementById('Restart'),
}

const messageHolder = {
    textbox: document.getElementById('text-box'),
    textp: document.querySelector('#text-box > p'),
}

const message = {
    story: ["You're the new kid on the block", "First day of school", 
        'Shoe walks up and says: "We fight friday!"', "How do you respond?"],
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
}
//----------------------------Action Event Listeners---------------------//

interactions.actions.addEventListener('click', function (event) {
    if (event === interactions.library){
        console.log(event.target);
        upgradeHeroSkill (skill);
    } else if (event === interactions.gym){
        console.log(event.target);
        upgradeHeroSkill (skill);
    } else if (event === interactions.work){
        console.log(event.target);
        upgradeHeroSkill (skill);    
    }    
});
interactions.next.addEventListener('click', () => {
    messageHolder.textp.textContent = proceed(messageHolder.textp.textContent, message.story);
});
interactions.fight.addEventListener('click', runFight);
interactions.restart.addEventListener('click', restart);

//-------------------------Functions------------------//

function proceed (current, story) {
    var idx = story.indexOf(current);
    if  (idx === message.story.length - 1) {
        messageHolder.textbox.removeChild(textbox.next);
        interactions.fight.style.display = "inline-block";
        console.log(idx);
    }
    interactions.fight.style.display = "inline-block";
    return message.story[idx + 1];
}

function setVillainStat () {
    let index = Math.floor(Math.random() * 12) + 3;
    for (var i = 0; i < index; i++) {
        let villainStat = [Math.floor(Math.random() * 3)];
        character.villain[villainStat] +=  1;
        console.log("villainstat is now " + character.villain)
    }
}

function upgradeHeroSkill (skill) {
    if (skill === action.library) {
        ++character.hero[0];
    } else if (skill === action.gym) {
        ++character.hero[1];
    } else {
        ++character.hero[2];
    }
    story (skill);
}

function runFight () {

}

function restart () {

}

//*https://codereview.stackexchange.com/questions/132397/prev-next-buttons-for-a-circular-list//*