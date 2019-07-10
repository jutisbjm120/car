import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const shoplist=[
  {
    id:123,
    count:2
  },
  {
    id:456,
    count:3
  }
];
// 定义store
let store= new Vuex.Store({
  state:{
    count:10,
    arr:[1,10.3,3,9.29,100,200],
    shoplist
  },
  mutations:{
    updateCount(store,str){//改变store的状态的
      setTimeout(()=>{
        store.count+=1+str;//vuex中的状态是响应的
      },3000);
    },
    ch_(store,a){
      store.count=a;
    },
    updateid(store,palyload){
     let item= store.shoplist.find(item=>item.id==palyload.id);
      item.count+=1;
    }
  },
  actions:{
      yb(store,str){
        setTimeout(()=>{
          store.commit("updateCount",str)
        },3000)
      }
  },
  getters:{
    len(state){
      let arr2=[];
      for (let i in state.arr){
        if(state.arr[i]>5){
          arr2.push(state.arr[i]);
        }
      }
      return arr2;
    },
    totals(state){
     return state.shoplist.reduce((n,item)=>n+item.count,0)
    }
  }
});
export default store;
