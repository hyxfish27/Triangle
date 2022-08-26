/**
 * @author hyxfish27
 * @public
 * @desc 處理 localsorage 行為
 */

/**
 * @function
 * @param {string} storage
 * @desc 從 localstorage 取資料
 */
const getItemManager = (storage) => {
  return JSON.parse(localStorage.getItem(storage))
}

/**
 * @function
 * @param {string} storage
 * @desc 存資料到 localstorage
 */
const setItemManager = (storage) => {
  return localStorage.setItem(storage, JSON.stringify(storage))
}

module.exports = {
  getItemManager,
  setItemManager
}
