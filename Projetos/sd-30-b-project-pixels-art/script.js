
const col2 = document.getElementById('c2');
const col3 = document.getElementById('c3');
const col4 = document.getElementById('c4');
const cArray = [col2, col3, col4];

const button = document.getElementById('button-random-color');

function randColor(color) {
    color.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    return color;
  }


  window.addEventListener('load', () => {
    for (let i = 0; i < cArray.length; i += 1) {
        const color = localStorage.getItem(`colorPalette${i}`);
        if (color) {
           cArray[i].style.backgroundColor = color;
        }
    }
  });
button.addEventListener('click', () => { 
    for(let i = 0; i < cArray.length; i +=1) {
        randColor(cArray[i]);
      console.log(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
      localStorage.setItem(`colorPalette${i}`, cArray); // salvando as cores.
      
    }
});

// requisito recuperar 5: 


// requisito 6 e 7:

function board(num) {
  const pBoard = document.getElementById('pixel-board');

  for (let i3 = 0; i3 < num; i3 += 1) {
    const pLine = document.createElement('div');
    pLine.classList.add('line');
    pBoard.appendChild(pLine);

    for (let i2 = 0; i2 < num; i2 += 1) {
      const pItem = document.createElement('div');
      pItem.classList.add('pixel');
      pLine.appendChild(pItem);
    }
  }
}
  board(5);

  // resuitiso 8: