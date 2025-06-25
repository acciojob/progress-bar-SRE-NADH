//your JS code here. If required.
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementsByClassName('progress')[0];
let currentIndex = 1;
prevButton.addEventListener('click',(e)=>{
 if(currentIndex==1){
	 return;
 }
 currentIndex--;
	updateCircle();
	
});

nextButton.addEventListener('click', ()=>{
	 if(currentIndex==circles.length){
	 return;
    }
 currentIndex++;
	updateCircle();
})

function updateCircle(){
	
	circles.forEach((circle, idx) => {
    if (idx < currentIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

	progress.style.width = `${currentIndex*35}px`;

	nextButton.disabled = currentIndex==circles.length;
	prevButton.disabled = currentIndex==1;
}

