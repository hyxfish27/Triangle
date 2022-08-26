import styleToggler from '../styleToggler' // 耦合了

// Block display
const board = document.querySelector('.board')

export class Matrix {
  constructor (row, column) {
    console.log(row, column)
  }

  initial (row, column) {
    const initialArr = new Array(row)
    for (let i = 0; i < row; i++) {
      initialArr[i] = new Array(column)
    }
    return initialArr
  }

  render (array, input) {
    for (let i = 0; i < array.length; i++) {
      const horizontalDiv = document.createElement('div')
      for (let j = 0; j < array[i].length; j++) {
        const blockDiv = document.createElement('span')
        array[i][j]
          ? styleToggler(blockDiv)('block')(`${input.size}px`)(`${input.margin}px`)(input.symbol)
          : styleToggler(blockDiv)('block-none')(`${input.size}px`)(`${input.margin}px`)(input.symbol)
        horizontalDiv.appendChild(blockDiv)
      }
      board.appendChild(horizontalDiv)
    }
    return board
  }
}
