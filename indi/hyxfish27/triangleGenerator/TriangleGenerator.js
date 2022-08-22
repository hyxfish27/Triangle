// import './reset.css'
import './style.css'

import styleToggler from '../styleToggler'

const block = {
  height: '',
  size: '',
  margin: ''
}

// Block size
const heightInput = document.querySelector("#height");
const sizeInput = document.querySelector("#size");
const marginInput = document.querySelector("#margin");

// Block symbol
const starSymbol = document.querySelector("#star");
const circleSymbol = document.querySelector("#circle");
const crossSymbol = document.querySelector("#cross");

// Block display
const board = document.querySelector(".board");


let symbol = "";
starSymbol.addEventListener("click", function () {
  symbol = starSymbol.innerText;
  generateGraph();
});

circleSymbol.addEventListener("click", function () {
  symbol = circleSymbol.innerText;
  generateGraph();
});

crossSymbol.addEventListener("click", function () {
  symbol = crossSymbol.innerText;
  generateGraph();
});

function generateGraph() {
  const currentBlock = getCurrentBlock();

  const base = 2 * currentBlock.height - 1;
  const mid = (base - 1) / 2;

  board.innerHTML = ""; // TODO: clear method

  // type1: 1, 2, 3, 5, 8
  for (let i = 0; i < block.height; i++) {
    const horizontalDiv = document.createElement("div");
    for (let j = 0; j < base; j++) {
      const blockDiv = document.createElement("div");
      const initial = mid - i;
      if(((j - initial) % 2 === 0 ) &&  (j >= mid - i && j <= mid + i)) {
        styleToggler(blockDiv)("block")(`${currentBlock.size}px`)(`${currentBlock.margin}px`)(symbol);
      } else {
        styleToggler(blockDiv)("block-none")(`${currentBlock.size}px`)(`${currentBlock.margin}px`)(symbol);
      }
      horizontalDiv.appendChild(blockDiv);
    }
    board.appendChild(horizontalDiv);
  }

    // type2: 1, 3, 5, 7, 9
  // for (let i = 0; i < block.height; i++) {
  //   const horizontal = document.createElement("div");
  //   for (let j = 0; j < base; j++) {
  //     const block = document.createElement("div");
  //     if (j < mid - i || j > mid + i) {
  //       styleToggler(block)("block-none")(`${currentBlock.size}px`)(`${currentBlock.margin}px`)(symbol);
  //     } else {
  //       styleToggler(block)("block")(`${currentBlock.size}px`)(`${currentBlock.margin}px`)(symbol);
  //     }
  //     horizontal.appendChild(block);
  //   }
  //   board.appendChild(horizontal);
  // }
}

const getCurrentBlock = () => {
  Object.defineProperties(block, {
    height: {
      value: heightInput.value,
      enumerable: true
    },
    size: {
      value: sizeInput.value,
      enumerable: true
    },
    margin: {
      value: marginInput.value,
      enumerable: true
    }
  })
  return block;
}
