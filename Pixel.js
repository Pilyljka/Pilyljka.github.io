

	

	function F1() {
	var black = 0;

	var b = document.getElementById("b");
	var c = b.getContext("2d");

// Создаем объект изображения
var img = new Image();

// Привязываем функцию к событию onload
// Это указывает браузеру, что делать, когда изображение загружено
img.onload = function() {
	c.drawImage(img, 0, 0);
};

}


function Pixel8() {
	var b = document.getElementById("b");
	var c = b.getContext("2d");
img.src = "Ondrey.bmp";
for (var i=0; i<=40; i++){
	for (var j=0; j<=40; j++){
		var color=c.getImageData(i,j,1,1).data;
		var r=color[0];
		var g=color[1];
		var b=color[2];

		console.log(r,g,b);
		
		
	}
}
}

function SetPixel(){
		var b = document.getElementById("b");
		var c = b.getContext("2d");
		var p = c.createImageData(1,1);
		p.data[0]=255;
		p.data[1]=0;
		p.data[2]=0;
		c.putImageData(p,400,400);
		console.log(black);

}

