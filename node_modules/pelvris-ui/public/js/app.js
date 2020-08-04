let bars = document.querySelector('#bars')
let nav = document.querySelector('#nav')
bars.addEventListener('click', (e)=>{
  bars.classList.toggle('change');

  nav.className == 'header_close'? nav.classList.add('header_open') :  nav.classList.remove('header_open')
});