import menuData from '../utils/menuData'
import Menu from '../models/menu.model'

const MenuService = {
  fetchAllMenus() {
    const validMenus = menuData.menus.map(menu => {
      const newMenu = new Menu()
      newMenu.id = menu.id
      newMenu.day = menu.day
      newMenu.customerId = menu.customerId
      newMenu.vendorId = menu.vendorId
      newMenu.meals = menu.meals
      return newMenu
    })
    return validMenus
  },
  addMenu(menu) {
    const menuLength = menuData.menus.length
    const menuId = menuData.menus[menuLength - 1].id
    const newId = menuId + 1
    menu.id = newId
    menuData.menus.push(menu)
    return menu
  }
}

export default MenuService
