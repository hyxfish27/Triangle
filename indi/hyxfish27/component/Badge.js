class Badge {
  constructor (symbol, label) {
    this.symbol = symbol
    this.label = label
  }
}

export default class Badges {
  constructor () {
    this.badges = []
  }

  addBadge (symbol, label) {
    const newBadge = new Badge()
    newBadge.symbol = symbol
    newBadge.label = label
    this.badges.push(newBadge)
  }
}
