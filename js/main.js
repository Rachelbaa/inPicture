'use strict'
console.log('in picture');
var gQuests;
var gCurrQuestIdx = 0;


function initGame() {
    gCurrQuestIdx = 0
    gQuests = []
    createGQuests()
    createElQuests()
    var resElB = document.querySelector('.restart')
    resElB.style.display = 'none'
    var staElB = document.querySelector('.start')
    staElB.style.display = 'none'
}

function createGQuests() {
    gQuests = [
        {
            id: 1,
            opts: ["What did you wipe on my back?!, My faith in humanity.", "I wouldn't mind being eaten, as long as it's by a scorchingly hot lady titan!"],
            correctOptIndex: 1
        }, {
            id: 2,
            opts: ["True, she only want that thing...", "False, she needs just you and a work with huge salary (:"],
            correctOptIndex: 1
        }, {
            id: 3,
            opts: ["Yanik want to suck a dick", "Yasha want to suck a dick"],
            correctOptIndex: 0
        }
    ];
    console.log(gQuests, 'array');
}

function createElQuests() {
    console.log(gQuests[gCurrQuestIdx].opts.length, ' length of options');
    var strHTML = '';
    strHTML += `<div>
        <img class="img${gQuests[gCurrQuestIdx].id}" src="/img/${gQuests[gCurrQuestIdx].id}.jpg">
            <h4 style="font-family: verdana">Pick the sentence that describes the picture:</h4>`
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        strHTML += `<button onclick="clickedA(this, ${i})"> ${gQuests[gCurrQuestIdx].opts[i]}</button> <br><br>`
    }
    strHTML += `</div>`;
    var elbody = document.querySelector('.board');
    elbody.innerHTML = strHTML;
}

function clickedA(elB, num) {
    var resElB = document.querySelector('.restart')
    console.log(resElB);
    if (num === gQuests[gCurrQuestIdx].correctOptIndex) {
        elB.style.color = "green"
        gCurrQuestIdx++
        if (gCurrQuestIdx < gQuests.length) {
            createElQuests()
        }
    } else {
        alert('Wrong Answer!')
    }
    if (gCurrQuestIdx === gQuests.length && elB.style.color === "green") {
        var resElB = document.querySelector('.restart')
        resElB.style.display = 'block'

    }
}

