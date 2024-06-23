function pintarNegro(event){
    event.target.style.backgroundColor = 'black';
}

const div1 = document.getElementById('div1');
div1.style.backgroundColor = 'blue';
div1.style.height = '200px';
div1.style.width = '200px';
const div2 = document.getElementById('div2');
div2.style.backgroundColor = 'red';
div2.style.height = '200px';
div2.style.width = '200px';
const div3 = document.getElementById('div3');
div3.style.backgroundColor = 'green';
div3.style.height = '200px';
div3.style.width = '200px';
const div4 = document.getElementById('div4');
div4.style.backgroundColor = 'yellow';
div4.style.height = '200px';
div4.style.width = '200px';

div1.addEventListener('click', pintarNegro);
div2.addEventListener('click', pintarNegro);
div3.addEventListener('click', pintarNegro);
div4.addEventListener('click', pintarNegro);