import MenuService from '../services/menu.service'

const MenuController = {
  fetchAllMenus(req, res) {
    const allMenus = MenuService.fetchAllMenus()
    return res
      .json({
        status: 'success',
        data: allMenus
      })
      .status(200)
  },
  addAMenu(req, res) {
    const newMenu = req.body
    const createdMenu = MenuService.addAMenu(newMenu)
    return res
      .json({
        status: 'success',
        data: createdMenu
      })
      .status(201)
  }
}

export default MenuController
