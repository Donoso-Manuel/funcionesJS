function pintar(event, color = 'green'){
    event.style.backgroundColor = color;
}

const ele = document.getElementById("ele1")
ele.addEventListener('click', (event)=>{
    pintar(event.target, 'yellow');
});