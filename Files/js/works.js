'use strict';

// Common variable declarations
const imageContents = document.querySelectorAll('.img-content');
const imageContentsDesc = document.querySelectorAll('.img-content > p');
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal > img');
const modalTitle = document.querySelectorAll('#modal > h2');
const modalDesc = document.querySelectorAll('#modal > p');
const modalClose = document.querySelector('#modal > button');

const setupImageModal = function(){
    imageContents.forEach((image) => {
        image.addEventListener('click', (event) => {
            const srcImg = image.children[0].src;
            console.log(event);
            modalTitle[0].textContent = image.children[1].textContent;
            modalDesc[0].textContent = image.children[2].textContent;
            modalImg.src = srcImg;
            modal.classList.toggle('visible-modal');
        });
    });
    
    modalClose.addEventListener('click', () => {
        modal.classList.toggle('visible-modal');
    })
}

setupImageModal();