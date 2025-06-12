const elm1 = [];
const elm2 = [];
const elm3 = [];
const elm4 = [];
const elm1div = document.getElementById('elm1');
const elm2div = document.getElementById('elm2');
const elm3div = document.getElementById('elm3');
const elm4div = document.getElementById('elm4');
const btn1 = document.getElementById('generator-btn1');
const btn2 = document.getElementById('generator-btn2');

fetch('resource1.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        lines.forEach(line => {
        console.log(line); 
        const parts = line.split(' || ');
        if (parts[0]) elm1.push(parts[0].trim());
        if (parts[1]) elm2.push(parts[1].trim());
        });
    })
    .catch(error => console.error('Error loading resource1.txt:', error));

fetch('resource2.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        lines.forEach(line => {
        console.log(line); 
        const parts = line.split(' || ');
        if (parts[0]) elm4.push(parts[0].trim());
        if (parts[1]) elm3.push(parts[1].trim());
        });
    })
    .catch(error => console.error('Error loading resource1.txt:', error));

    function generateRandom(one, two, div1, div2){
    let first = one[Math.floor(Math.random()*one.length)];
    let second = two[one.indexOf(first)];
        console.log('Updating:', div1, div2, 'With:', first, second);
    div1.textContent = first;
    div2.textContent = second;  
}
btn1.addEventListener('click', ()=>generateRandom(elm1, elm2, elm1div, elm2div));
btn2.addEventListener('click', ()=>generateRandom(elm3, elm4, elm3div, elm4div));