import { Symbol, Label } from '../lib/define/define'
import { Rotate } from './strategy/Rotate'
import TriangleStrategies from './strategy/Triangle'
import Badges from '../component/Badge'
import { Input } from '../component/Input'
import { Matrix } from '../component/Matrix'

const badges = new Badges()
const blockInput = new Input()
const matrix = new Matrix()

badges.addBadge(Symbol.STAR, Label.STAR)
badges.addBadge(Symbol.CIRCLE, Label.CIRCLE)
badges.addBadge(Symbol.CROSS, Label.CROSS)

const badgeBtns = document.querySelector('.badge-btns')
const controlDirection = document.querySelectorAll('.control-direction')

controlDirection.forEach(element => {
  const testInput = {
    height: 5,
    size: 20,
    margin: 16,
    symbol: '*'
  }
  element.addEventListener('click', function () {
    switch (element.id) {
      case '0':
        matrix.render(TriangleStrategies['isosceles-triangle'](testInput), testInput)
        break
      case '1':
        matrix.render(Rotate.rotate90(TriangleStrategies['isosceles-triangle'](testInput)), testInput)
        break
      case '2':
        matrix.render(Rotate.rotate180(TriangleStrategies['isosceles-triangle'](testInput)), testInput)
        break
      case '3':
        matrix.render(Rotate.rotate270(TriangleStrategies['isosceles-triangle'](testInput)), testInput)
        break
      default:
        break
    }
  })
})

const generateBadgeButtons = (badges) => {
  badges.badges.forEach(badge => {
    const btn = document.createElement('button')
    btn.innerHTML = badge.label
    btn.classList.add('badge-btn')
    badgeBtns.appendChild(btn)
    btn.addEventListener('click', function () {
      blockInput.height = document.querySelector('#height').value
      blockInput.size = document.querySelector('#size').value
      blockInput.margin = document.querySelector('#margin').value
      blockInput.symbol = badge.label
      matrix.render(TriangleStrategies['isosceles-triangle'](blockInput), blockInput)
    })
  })
}

generateBadgeButtons(badges)
