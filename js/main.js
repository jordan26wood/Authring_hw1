(function() {

var theImages = document.querySelectorAll('.image-holder'),
theHeading =   document.querySelector('.heading'),
theSubhead =   document.querySelector('.main-copy h2'),
theSeasonText =   document.querySelector('.main-copy p'),
appliedClass;

function changeElements() {
//making sure event handing is working
//debugger;
let objectIndex = dynamicContent[this.id];
let subImages = document.querySelector('.subImagesContainer');

while(subImages.firstChild){
  subImages.removeChild(subImages.firstChild);
}
//add some images at the bottom of the padding-left
objectIndex.images.forEach(function(image, index) {
  //create a new image element
  let newSubImg = document.createElement('img');

  //add a css class to it
  newSubImg.classList.add('thumb')

  //add a sorce
  newSubImg.src = "images/" + objectIndex.images[index];

  //add it to the page
  subImages.appendChild(newSubImg);

});

//remove the last css classs apllided
theSubhead.classList.remove(appliedClass);
theHeading.classList.remove(appliedClass);
//change the color of the text elements
theSubhead.classList.add(this.id);
theHeading.classList.add(this.id);



//change the content on padding-
//firstChild.nodeValue is the same as innerHTML (kind of)
theSubhead.firstChild.nodeValue = objectIndex.headline;
theSeasonText.firstChild.nodeValue = objectIndex.text;

//test
appliedClass = this.id;
}
 theImages.forEach(function(element, index) {

   element.addEventListener('click', changeElements, false);
});

theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
theHeading.classList.add('spring')
})();
