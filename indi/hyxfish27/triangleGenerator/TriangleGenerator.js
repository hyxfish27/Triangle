import { Symbol, Label } from '../lib/define/define'
import TriangleStrategies from './strategy/TriangleStrategies'
import Badges from '../component/Badge'
import { Input } from '../component/Input'

const badges = new Badges()
const blockInput = new Input()

badges.addBadge(Symbol.STAR, Label.STAR)
badges.addBadge(Symbol.CIRCLE, Label.CIRCLE)
badges.addBadge(Symbol.CROSS, Label.CROSS)

const badgeBtns = document.querySelector('.badge-btns')

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
      TriangleStrategies['isosceles-triangle'](blockInput)
    })
  })
}

generateBadgeButtons(badges)
