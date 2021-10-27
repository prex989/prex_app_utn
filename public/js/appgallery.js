// Variables
let modal = document.querySelector('.modal');
let images = document.querySelectorAll('.gallery img');
let modalImg = document.querySelector('#myModalImg');
let imgBox = document.querySelectorAll('.lists img');
let caption = document.querySelector('.caption-text');
let close = document.querySelector('.close');

images.forEach((images) => {
     
    images.addEventListener('click', () => { 
        modal.style.display = "block";
        modalImg.src = images.src;
        caption.innerHTML = images.alt;
        
    });

});

imgBox.forEach( img => img.addEventListener("click", imgLightbox) );

function imgLightbox (event) {
    modalImg.src = event.target.src;
}

close.addEventListener("click", () => {
    modal.style.display = "none";
});

