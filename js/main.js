(() => {
	console.log('selected!');
	

let OneStick = document.querySelector(".product-image"),
TwoStick = document.querySelector(".product-image2"),
ThreeStick =document.querySelector(".product-image3"),
FourStick =document.querySelector(".product-image4"),
FiveStick =document.querySelector(".product-image5"),
SixStick =document.querySelector(".product-image6"),
SevenStick =document.querySelector(".product-image7"),
EightStick =document.querySelector(".product-image8"),
NineStick =document.querySelector(".product-image9"),
TenStick =document.querySelector(".product-image10");

function logID(){
	console.log("you are adding this sticker to the cart:",this.id);
}

OneStick.addEventListener("click", logID);
TwoStick.addEventListener("click", logID);
ThreeStick.addEventListener("click", logID);
FourStick.addEventListener("click", logID);
FiveStick.addEventListener("click", logID);
SixStick.addEventListener("click", logID);
SevenStick.addEventListener("click", logID);
EightStick.addEventListener("click", logID);
NineStick.addEventListener("click", logID);
TenStick.addEventListener("click", logID);
})();




