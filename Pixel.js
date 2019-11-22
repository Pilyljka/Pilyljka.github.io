

	var b = document.getElementById("b");
	var c = b.getContext("2d");
	var black = 0;

// Создаем объект изображения
var img = new Image();

// Привязываем функцию к событию onload
// Это указывает браузеру, что делать, когда изображение загружено
img.onload = function() {
	c.drawImage(img, 10, 10);
};
function Pixel8() {
img.src = "Ondrey.bmp";
for (var i=0; i<=400; i++){
	for (var j=0; j<=400; j++){
		var color=c.getImageData(i,j,1,1).data;
		var r=color[0];
		var g=color[1];
		var b=color[2];

		if ((r==0)&&(g==0)&&(b==0))
		{
			black++;
		}
		
		
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

