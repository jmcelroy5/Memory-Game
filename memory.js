
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var flipped_tiles = [];
var tiles_matched = 0;

function newBoard(){
	shuffle(memory_array);
											// The following creates a new array of tile objects that mirrors the memory array
	var tileDivs = memory_array.map(function(value,index){				// Map over each item in memory array (param: current memory value and current index)
		var tile = document.createElement("div");				// Create a new tile div object
		tile.addEventListener('click', function() {				// Then add a click event listener to it which will...
			MemoryFlip(tileDivs[index], value);				// Call MemoryFlip, passing tile object and corresponding letter value
		});
		document.getElementById("container").appendChild(tile);
		return tile;	
	});
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function MemoryFlip(tile, value){

	if (tile.innerHTML === "" && memory_values.length < 2){
		tile.style.background = "#ffffff";
		tile.innerHTML = value;
		memory_values.push(value);
		flipped_tiles.push(tile)
	}

	if (memory_values.length == 2){
		if (memory_values[0] == memory_values[1]){
			tiles_matched += 2;
			memory_values = [];
			flipped_tiles = [];
		}
		else if (memory_values[0] != memory_values[1]) {

			function flipBack() {
				var tile1 = flipped_tiles[0]
				var tile2 = flipped_tiles[1]
				tile1.style.background = "url(cat.jpg)";
				tile2.style.background = "url(cat.jpg)";
				tile1.innerHTML = "";
				tile2.innerHTML = "";
				memory_values = [];
				flipped_tiles = [];
			}
			setTimeout(flipBack, 700);
		}
	}

	if (tiles_matched == memory_array.length){
		function wonGame(){
			document.getElementById("container").innerHTML = "<h1>You win!</h1>";
		}
		wonGame();
	}
}

newBoard();

