
const col2 = document.getElementById('c2');
const col3 = document.getElementById('c3');
const col4 = document.getElementById('c4');
const cArray = [col2, col3, col4];

const button = document.getElementById('button-random-color');

function randColor(color) {
    color.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    return color;
}

button.addEventListener('click', () => { 
    for(let i = 0; i < cArray.length; i +=1) {
        randColor(cArray[i]);
      console.log(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
    }
});

