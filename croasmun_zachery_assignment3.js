/*
Croasmun Zachery
SDI 1302 Project 3
*/

var wizard =function (name) {
	var inPack = [];
	var itemload =function (item){
		if (item.itemArea < 100){
			inPack.push(item);
			console.log("WOOHOO! The item " + item.type + " fits in my pack.")
		}else {
			console.log(" OOH NO! The item is to BIG!");
		 }
	};
	
		
	return{ 
		"name":name,
		"age":"125",
		"backPack":inPack,
		"itemload":itemload,
		"spellList":[" Freeze ", " Fire ", " Lightining ", " Death "],
		"spellMin":[" 4 ", " 6 ", " 10 ", " 18 "],
		
	};
};

var sam = wizard ("Sam");
//test code

/*sam.itemload(potionSmall);
console.log(manaLG);
sam.itemload(manaLG);
sam.itemload(shieldPotion);
console.log(sam);
*/
console.log("Our journey begins with the might wizard " + sam.name + " who is about to face the most fearsome dragon of all time.");
console.log(sam.name + ' screams at the dragon "I will destroys you Beast!"')
var killDragon = function(spellNumber){
	var spell = sam.spellList [spellNumber],
		spellMinUsed = sam.spellMin [spellNumber]
		
	console.log("It will take the mighty " + sam.name + " a total of" + spellMinUsed + "Minuets to cast the" + spell
	+ "curse against the terrifyingly fearsome dragon ");
	
	for(var minuets = 0; minuets < spellMinUsed; minuets += 2){
		var minLeft = spellMinUsed - minuets;
		console.log(minuets + " Minuets have passed " + minLeft + " Minuets till spell is finished");
	};
	if (spellMinUsed > 15){
		return console.log("I have slain the beast!");
	}else{console.log(" I need another spell! " + "so " + sam.name +" cast the "+ sam.spellList[3] + " curse.");}
};

killDragon(0);
killDragon(3);

console.log("After dealing a deadly blow to the dragon our hero " + sam.name + " finds a chest of 3 items.");
console.log("the first item our hero finds is a " + potionSmall.type);
sam.itemload(potionSmall);
console.log("the second item our hero finds is a " + shieldPotion.type);
sam.itemload(shieldPotion);
console.log("the third item our hero finds is a " + manaLG.type);
sam.itemload(manaLG);
console.log("So our hero " + sam.name + " drank as much of the" + manaLG.type + "as he could and gave the rest to the Earth.");
console.log("and our heros story will continue another day");
