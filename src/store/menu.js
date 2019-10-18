const menu = {
  namespaced: true,
  state: {
      menuArrs:[],
      activedArr:[],
      submenuMap:{},
  },
  mutations: {
    setPath(state,path){
        state.activedArr=path.split('/');
        console.info(state.activedArr);
    },
    initMenu(state,arr){
      state.menuArrs=arr
      arr.forEach(m => {
        state.submenuMap[m.id]=m.submenu
      });
      console.info(JSON.stringify(state.submenuMap))
    },
    
  },
  actions: {

  }
}
export default menu;
