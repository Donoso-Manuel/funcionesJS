var a = 'pink';
var s = 'orange';
var d = 'lightblue';
var q = 'purple';
var w = 'gray';
var e = 'brown';


const div = document.getElementById('key');
div.style.height = '200px';
div.style.width = '200px';
div.style.backgroundColor = 'white';
div.style.border = '1px solid black';

document.addEventListener('keydown', function(event){
    if(event.key === 'a'){
        div.style.backgroundColor = a;
    }else if(event.key === 's'){
        div.style.backgroundColor = s;
    }else if(event.key === 'd'){
        div.style.backgroundColor = d;
    }
})

const container = document.querySelector('.container');

document.addEventListener('keydown',function(event){
    let nuevoElemento = document.createElement('div');
    nuevoElemento.style.height = '200px'
    nuevoElemento.style.width = '200px'
    nuevoElemento.style.border = '1px solid black'

    if(event.key === 'q'){
        nuevoElemento.style.backgroundColor = q;
        container.appendChild(nuevoElemento);
    }else if(event.key === 'w'){
        nuevoElemento.style.backgroundColor = w;
        container.appendChild(nuevoElemento);
    }else if(event.key === 'e'){
        nuevoElemento.style.backgroundColor = e;
        container.appendChild(nuevoElemento);
    }
})