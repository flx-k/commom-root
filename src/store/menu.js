const menu = {
  state: {
      arr:[],
      activedArr:[],
  },
  getters:{
    menuArrs:state=>{
        return state.arr;
    },
    activeMenuArrs:state=>{
      return state.activedArr;
    }
  },
  mutations: {
    set(state,path){
        state.activedArr=path.split('/');
        console.info(state.activedArr);
    },
    initMenu(state,arr){
      state.arr=arr
    }
  },
  actions: {

  }
}
export default menu;
