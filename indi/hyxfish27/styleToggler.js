const styleToggler = (element) => (className) => (size) => (margin) => (symbol) => {
  element.className = className
  element.style.width = size
  element.style.height = size
  element.style.margin = margin
  element.innerText = symbol
}

export default styleToggler
