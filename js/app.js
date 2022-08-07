
$(document).ready(function(){
  $('.nav-trigger').click(function(){
     $('.site-content-wrapper').toggleClass('scaled');
  });  

});




















































































































//product page
let previewContaine = document.querySelector('.produc-preview');
let previewBox = previewContaine.querySelectorAll('.preview');

document.querySelectorAll('.produc-containe .produc').forEach(produc =>{
   produc.onclick = () =>{
    previewContaine.style.display = 'flex';
      let name = produc.getAttribute('data-name');
      previewBox.forEach(preview =>{
       let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('activ');
        }
      });
   };
});

previewBox.forEach(close =>{
     close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('activ');
      previewContaine.style.display = 'none';
     };
});
