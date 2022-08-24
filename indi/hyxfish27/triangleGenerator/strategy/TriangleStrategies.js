import styleToggler from '../../styleToggler'

// Block display
const board = document.querySelector('.board')

const TriangleStrategies = {
  // 1,2,3,4,5 等腰三角形
  'isosceles-triangle': function (input) {
    board.innerHTML = ''
    const base = 2 * input.height - 1
    const mid = (base - 1) / 2

    for (let i = 0; i < input.height; i++) {
      const horizontalDiv = document.createElement('div')
      for (let j = 0; j < base; j++) {
        const blockDiv = document.createElement('div')
        const initial = mid - i
        if ((j - initial) % 2 === 0 && j >= mid - i && j <= mid + i) {
          styleToggler(blockDiv)('block')(`${input.size}px`)(
          `${input.margin}px`
          )(input.symbol)
        } else {
          styleToggler(blockDiv)('block-none')(`${input.size}px`)(
          `${input.margin}px`
          )(input.symbol)
        }
        horizontalDiv.appendChild(blockDiv)
      }
      board.appendChild(horizontalDiv)
    }
  },
  // 1,3,5,7,9
  'type-2': function (input) {
    const base = 2 * input.height - 1
    const mid = (base - 1) / 2
    for (let i = 0; i < input.height; i++) {
      const horizontal = document.createElement('div')
      for (let j = 0; j < base; j++) {
        const block = document.createElement('div')
        if (j < mid - i || j > mid + i) {
          styleToggler(block)('block-none')(`${input.size}px`)(`${input.margin}px`)(input.symbol)
        } else {
          styleToggler(block)('block')(`${input.size}px`)(`${input.margin}px`)(input.symbol)
        }
        horizontal.appendChild(block)
      }
      board.appendChild(horizontal)
    }
  }
}

export default TriangleStrategies
