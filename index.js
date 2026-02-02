let submit = document.querySelector('button');
let months = document.getElementById('odia-month');
let p = document.createElement('p');

submit.addEventListener('click', () => {
    let value = months.value;
    
   if(value === ""){
    p.textContent = 'how much'
   } else if(value === 'chaitra')
    p.textContent = 'how much rent';

    document.body.appendChild(p);
})