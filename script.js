//your JS code here. If required.
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelectorAll('.progress');
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

	
	progress.forEach((prog, idx) => {
    if (idx < currentIndex) {
      prog.classList.add('progress-active');
    } else {
      prog.classList.remove('progress-active');
    }
  });


	nextButton.disabled = currentIndex==circles.length;
	prevButton.disabled = currentIndex==1;
}

