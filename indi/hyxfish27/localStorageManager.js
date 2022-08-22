const getItemManager = (storage) => {
    return JSON.parse(localStorage.getItem(storage))
}

const setItemManager = (storage) => {
    return localStorage.setItem(storage, JSON.stringify(storage))
}

module.exports = {
 getItemManager,
 setItemManager
}