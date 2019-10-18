const getters = {
    //一级 主菜单 menu
    menuArrs: state => state.menu.menuArrs,
    activeMenuArrs: state => state.menu.activedArr,
    //二级 菜单 Submenu 
    submenuArrs: state => state.menu.submenuMap[state.menu.activedArr[1]]
    
}

export default getters
