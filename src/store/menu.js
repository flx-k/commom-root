const menu = {
  state: {
      arr:[]
  },
  getters:{
    arr:state=>{
        return state.arr;
    }
  },
  mutations: {
    set(state,path){
        state.arr=path.split('/');
        console.info(state.arr);
    }
  },
  actions: {

  }
}
export default menu;
