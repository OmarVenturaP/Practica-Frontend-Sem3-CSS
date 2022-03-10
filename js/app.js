const container=document.getElementById('div-sec3-right');

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('acordion')){
        e.target.parentElement.classList.toggle('scale')
        console.log(e.target.children)
        e.target.children[2].classList.toggle('rotate')
    }
}); 