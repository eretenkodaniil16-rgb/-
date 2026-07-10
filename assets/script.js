const menuButton=document.getElementById('menuButton');
const mainNav=document.getElementById('mainNav');
if(menuButton&&mainNav){
  menuButton.addEventListener('click',()=>mainNav.classList.toggle('open'));
  document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>mainNav.classList.remove('open')));
}

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.material-card');
filters.forEach(button=>{
  button.addEventListener('click',()=>{
    filters.forEach(item=>item.classList.remove('active'));
    button.classList.add('active');
    const selected=button.dataset.filter;
    cards.forEach(card=>{
      const shouldShow=selected==='all'||card.dataset.type===selected;
      card.style.display=shouldShow?'flex':'none';
    });
  });
});

const placeholderModal=document.getElementById('placeholderModal');
const modalClose=document.getElementById('modalClose');
function openModal(){
  if(!placeholderModal)return;
  placeholderModal.classList.add('open');
  placeholderModal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
function closeModal(){
  if(!placeholderModal)return;
  placeholderModal.classList.remove('open');
  placeholderModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
document.querySelectorAll('.js-placeholder').forEach(link=>{
  link.addEventListener('click',event=>{
    event.preventDefault();
    openModal();
  });
});
if(modalClose)modalClose.addEventListener('click',closeModal);
if(placeholderModal){
  placeholderModal.addEventListener('click',event=>{
    if(event.target===placeholderModal)closeModal();
  });
}
document.addEventListener('keydown',event=>{
  if(event.key==='Escape')closeModal();
});
