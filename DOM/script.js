const tagEl = document.getElementsByTagName('h1');
console.log(tagEl);

const testEl = document.getElementsByClassName('testing')
console.log(testEl);

const checkId = document.getElementById('boxText');
console.log(checkId);

const allEl = document.querySelectorAll('.selectAll');

const oneEl = document.querySelector('.selectElOne');

const ell = document.querySelector('#peleZainabu');

const submitBtn = document.querySelector('button');

console.log(submitBtn );


submitBtn.addEventListener('mouseover', ()=> {
    alert('It`s closing hour already' )
})