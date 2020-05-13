function toggleTabs(i) {
    currentTab = i;
    hideStuff();
}

/**
 * Toggle an auto-buyer
 * @param {number} i number to toggle 
 * @param {Element} self html element
 */
function toggleSettings(i, self) {
    player.toggles[cardinals[i]] = !player.toggles[cardinals[i]];

    const c = '2px solid ' + (player.toggles[cardinals[i]] ? 'green' : 'red');
    self.style.border = c;

    toggleauto();
}

function toggleChallenges(i) {
if (player.currentChallenge == "" && (i == 'one' || i == 'two' || i == 'three' || i == 'four' || i == 'five')) {
    player.currentChallenge = i;
    reset(2);
    player.transcendCount -= 1;
}
if (player.currentChallenge == "" && (i == 'six' || i == 'seven' || i == 'eight') && player.currentChallengeRein == "") {
    player.currentChallengeRein = i;
    reset(3);
    player.reincarnationCount -= 1;
}
    var x = ""
    var y = ""
    if (player.currentChallengeRein == 'six') {x = " || TAX+ [Reincarnation]"}
    if (player.currentChallengeRein == 'seven') {x = " || MULTIPLIER/ACCELERATOR-- [Reincarnation]"}
    if (player.currentChallengeRein == 'eight') {x = " || COST++ [Reincarnation]"}
    if (player.currentChallengeRein !== "" && player.currentChallenge !== "") { y = "s"}
    if (i == player.currentChallenge || i == player.currentChallengeRein){
    if (i == 'one'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": No Multipliers [Transcension]" + x}
    if (i == 'two'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": No Accelerators [Transcension]" + x}
    if (i == 'three'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": No Shards [Transcension]" + x}
    if (i == 'four'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": Fast Cost Growth [Transcension]" + x}
    if (i == 'five'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": Reduced Diamonds [Transcension]" + x}
    if (i !== 'one' && i !== 'two' && i !== 'three' && i !== 'four' && i !== 'five') {document.getElementById("currentchallenge").textContent = "Current Challenge: None [Transcension]" + x}
    }
}


function toggleBuyAmount(quantity, type) {
player[type + 'buyamount'] = quantity 
let a = ""
if (quantity == 1) {a = "one"}
if (quantity == 10) {a = "ten"}
if (quantity == 100) {a = "hundred"}
if (quantity == 1000) {a = "thousand"}


let c = type + a
let d = ""
 d = d + c

document.getElementById(d).style.backgroundColor = "Green";
if (quantity !== 1) {
    a = "one"
    d = type + a
    document.getElementById(d).style.backgroundColor = "Black"
}
if (quantity !== 10) {
    a = "ten"
    d = type + a
    document.getElementById(d).style.backgroundColor = "Black"
}
if (quantity !== 100) {
    a = "hundred"
    d = type + a
    document.getElementById(d).style.backgroundColor = "Black"
}
if (quantity !== 1000) {
    a = "thousand"
    d = type + a
    document.getElementById(d).style.backgroundColor = "Black"
}
} 

/**
 * Turn on or off a shop
 * @param {number} i
 * @param {Element} Button element
 */
function toggleShops(i, self) {
    const toggles = player.shoptoggles;
    const order = {
        1: 'coin',
        2: 'prestige',
        3: 'transcend',
        4: 'generator'
    }
    if(order[i]) {
        toggles[order[i]] = !toggles[order[i]];
        self.textContent = 'Auto: ' + (toggles[order[i]] ? 'OFF' : 'ON');
        self.style.border = '2px solid ' + (toggles[order[i]] ? 'red' : 'green');
    }
}

function keyboardtabchange(i) {
var q = 3;
if (player.unlocks.coinfour == true) {q += 1}
if (player.unlocks.prestige == true) {q += 2}
if (player.unlocks.transcend == true) {q += 2}
if (player.unlocks.reincarnate == true) {q += 2}
player.tabnumber += i
if (player.tabnumber == q) {player.tabnumber = 1}
if (player.tabnumber == 0) {player.tabnumber = q - 1}

if (player.tabnumber == 1) {toggleTabs("buildings")}
if (player.tabnumber == 2) {toggleTabs("upgrades")}
if (player.tabnumber == 3) {toggleTabs("achievements")}
if (player.tabnumber == 4) {toggleTabs("prestige")}
if (player.tabnumber == 5) {toggleTabs("runes")}
if (player.tabnumber == 6) {toggleTabs("transcension")}
if (player.tabnumber == 7) {toggleTabs("challenges")}
if (player.tabnumber == 8) {toggleTabs("reincarnation")}
if (player.tabnumber == 9) {toggleTabs("researches")}



}

function toggleautoreset(i) {
if (i == 1){
    if (player.resettoggle1 == 1 || player.resettoggle1 == 0){player.resettoggle1 = 2; document.getElementById("prestigeautotoggle").textContent = "Mode: TIME"}
    else{player.resettoggle1 = 1; document.getElementById("prestigeautotoggle").textContent = "Mode: AMOUNT"}
}
if (i == 2){
    if (player.resettoggle2 == 1 || player.resettoggle2 == 0){player.resettoggle2 = 2; document.getElementById("transcendautotoggle").textContent = "Mode: TIME"}
    else{player.resettoggle2 = 1; document.getElementById("transcendautotoggle").textContent = "Mode: AMOUNT"}
}
if (i == 3){
    if (player.resettoggle3 == 1 || player.resettoggle3 == 0){player.resettoggle3 = 2; document.getElementById("reincarnateautotoggle").textContent = "Mode: TIME"}
    else{player.resettoggle3 = 1; document.getElementById("reincarnateautotoggle").textContent = "Mode: AMOUNT"}
}


}

function toggleauto() {
	var e = document.getElementsByClassName("auto");
		for (var i = 0; i < e.length; i++) {
			var a = ""
			var b = ""
			if ((i <= 7 && i>=0) || (i <= 17 && i >= 13) || (i <= 23 && i >= 19) || (i <= 29 && i >= 25)) {a = "Auto ["}
			if (i == 12) {a = "Hover-to-buy ["}
			if (i == 18) {a = "Auto Prestige ["}
			if (i == 24) {a = "Auto Transcend ["}
			if (i == 30) {a = "Auto Reincarnate ["}
			if ((i == 31) || (i == 32) || (i == 33)){
				a = "["
			}
			var u = 0
			if (i <= 7) {u = i}
			if (i >= 12) {u = i - 4}
			if (player.toggles[cardinals[u]] == true){b = "ON]"}
			if (player.toggles[cardinals[u]] == false) {b = "OFF]"}

			if (i <= 7 || i >= 12) {
			e[i].textContent = a + b
			}
	}

}

function toggleResearchBuy() {
    if (maxbuyresearch){
        maxbuyresearch = false;
        document.getElementById("toggleresearchbuy").textContent = "Upgrade: 1 Level"
    }
    else {maxbuyresearch = true; document.getElementById("toggleresearchbuy").textContent = "Upgrade: MAX [if possible]"}
}
