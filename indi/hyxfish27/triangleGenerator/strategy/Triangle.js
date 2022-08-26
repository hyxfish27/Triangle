// import styleToggler from '../../styleToggler'
import { Matrix } from '../../component/Matrix'

// Block display
const board = document.querySelector('.board')

const matrix = new Matrix()

/**
 * @author hyxfish27
 * @public
 * @desc 使用策略模式列舉 TriangleStrategies
 */
const TriangleStrategies = {
  /**
   * @param {object} input 
   * @param {int} input.height 三角形高度
   * @desc 處理等腰三角形演算法-1,2,3,4,5
   */
  'isosceles-triangle': function (input) {
    board.innerHTML = ''

    const row = input.height
    const column = 2 * input.height - 1

    const initialMatrix = matrix.initial(row, column)
    const mid = (column - 1) / 2

    for (let i = 0; i < input.height; i++) {
      for (let j = 0; j < column; j++) {
        const initial = mid - i
        if ((j - initial) % 2 === 0 && j >= mid - i && j <= mid + i) {
          initialMatrix[i][j] = 1
        } else {
          initialMatrix[i][j] = 0
        }
      }
    }
    return initialMatrix
    // matrix.render(initialMatrix, input)
  },
  /**
   * @param {object} input 
   * @param {int} input.height 三角形高度
   * @desc 處理等腰三角形演算法-1,3,5,7,9
   */
  'type-2': function (input) {
    const base = 2 * input.height - 1
    const mid = (base - 1) / 2
    for (let i = 0; i < input.height; i++) {
      const horizontal = document.createElement('div')
      for (let j = 0; j < base; j++) {
        const block = document.createElement('div')
        if (j < mid - i || j > mid + i) {
          // styleToggler(block)('block-none')(`${input.size}px`)(`${input.margin}px`)(input.symbol)
        } else {
          // styleToggler(block)('block')(`${input.size}px`)(`${input.margin}px`)(input.symbol)
        }
        horizontal.appendChild(block)
      }
      board.appendChild(horizontal)
    }
  }
}

export default TriangleStrategies
