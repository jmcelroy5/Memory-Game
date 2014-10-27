
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_indices= [];
var tiles_matched = 0;

function newBoard(){
	shuffle(memory_array);
	for (var i=0; i < memory_array.length ; i++){
		var tile = document.createElement("div");
		tile.setAttribute("id", i);
		tile.setAttribute('onclick','MemoryFlip(this,"' + memory_array[i] + '")');
		document.getElementById("container").appendChild(tile);
	}
}

function MemoryFlip(tile, value){
	if (tile.innerHTML === "" && memory_values.length < 2){
	// If tile is 
		tile.style.background = "#ffffff";
		tile.innerHTML = value;
		memory_values.push(value);
		memory_indices.push(tile.id);
	}

	if (memory_values.length == 2){
	// If two cards are flipped over, compare the values
		if (memory_values[0] == memory_values[1]){
			tiles_matched += 2;
			memory_values = [];
			memory_indices = [];
		}
		else if (memory_values[0] != memory_values[1]) {

			function flipBack() {
				var tile1 = document.getElementById(memory_indices[0]);
				var tile2 = document.getElementById(memory_indices[1]);
				tile1.style.background = "url(cat.jpg)";
				tile2.style.background = "url(cat.jpg)";
				tile1.innerHTML = "";
				tile2.innerHTML = "";
				memory_values = [];
				memory_indices = [];
			}
			setTimeout(flipBack, 700);
		}
	}

	if (tiles_matched == memory_array.length){
		function wonGame(){
			document.getElementById("container").innerHTML = "You win!"
		}
	}
}



// 	When tiles_matched == memory_array:
// 		they won the game
			

function shuffle(o){ 
	// Shuffles array (found on stack overflow)
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

newBoard();

