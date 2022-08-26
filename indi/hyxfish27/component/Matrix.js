import styleToggler from '../styleToggler' // 耦合了

// Block display
const board = document.querySelector('.board')

/**
 * @author hyxfish27
 * @public
 * @class Matrix
 * @classdesc 定義二維陣列行為
 */

export class Matrix {
  constructor (row, column) {
    console.log(row, column)
  }

  /**
   * @function
   * @public
   * @param {int} row 
   * @param {int} column 
   * @returns 初始 row * column 陣列
   */
  initial (row, column) {
    const initialArr = new Array(row)
    for (let i = 0; i < row; i++) {
      initialArr[i] = new Array(column)
    }
    return initialArr
  }

  /**
   * @function
   * @param {array} array 
   * @param {object} input 
   * @returns 根據陣列與輸入所產生的圖形
   */
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
