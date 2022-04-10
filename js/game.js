function init() {
	cvs = document.getElementById('CVS');
	gct = cvs.getContext('2d');

	hanaKage = new Object({ 'x': (cvs.width - 200) / 2, 'y': 150, 'dx': 200, 'dy': 50, 'mx': 0, 'my': 0 });
	hana = new Object({ 'x': (cvs.width - 300) / 2, 'y': 0, 'dx': 300, 'dy': 300, 'mx': 0, 'my': 0 }, 'img/hana0.png');
	yubi = new Object({ 'x': 0, 'y': 300, 'dx': 200, 'dy': 300, 'mx': 1, 'my': 0 }, 'img/yubi.png');

	update();
}

class Object {
	constructor(pos, imgSrc = null) {
		this.pos = pos

		if (!imgSrc)
			return

		this.imgSrc = new Image();
		this.imgSrc.src = imgSrc;
	}

	isOnObject(obj) {
		if (this.pos.x < obj.pos.x + obj.pos.dx && this.pos.x + this.pos.dx > obj.pos.x && this.pos.y < obj.pos.y + obj.pos.dy && this.pos.y + this.pos.dy > obj.pos.y)
			return true;

		return false;
	}

	draw(color) {
		gct.fillStyle = color;
		gct.fillRect(this.pos.x, this.pos.y, this.pos.dx, this.pos.dy);
	}

	imgDraw(x = this.pos.dx, y = this.pos.dy) {
		gct.drawImage(this.imgSrc, 0, 0, this.pos.dx, this.pos.dy, this.pos.x, this.pos.y, x, y);
	}

	move() {
		this.pos.x += this.pos.mx;
		this.pos.y += this.pos.my;
	}

	action(dif) {
		dif();
	}
}

function refreshCvs() {
	gct.fillStyle = 'white';
	gct.fillRect(0, 0, cvs.width, cvs.height);
}

function update() {
	refreshCvs();

	yubi.move();

	hanaKage.draw('black');
	hana.imgDraw();
	yubi.imgDraw(100, 200);


	window.requestAnimationFrame(update);
}

window.addEventListener('load', init);