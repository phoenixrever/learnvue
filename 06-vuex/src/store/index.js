import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:1,
    reactive:{
      name:'phoenixhell'
    }
  },
  mutations: {
    add(state){
     return  state.counter++
    },
    //特殊提交的对象
    del(state,payload){
      // return state.counter--
      return state.counter+payload.counter
    },
    mul(state,param){
      return state.counter+=param
    },
    addReactive(state){
      delete state.reactive.name;
      // state.reactive['newParam']=18
    },
    updateInfo(state,payload){
      state.reactive.name=payload
    }
  },
  actions: {
    // asyncMethod(context,obj){
    //   setTimeout(()=>{
    //     context.commit('updateInfo',obj.payload);
    //     obj.callBack("actions");
    //   },2000)
    // }
    asyncMethod(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updateInfo',payload);
          resolve(payload+'is commit ok pass it ')
        },2000)
      });
    }
  },
  modules: {
    moduleA:{
      state:{
        name:"moduleAState"
      },
      mutations:{},
      getters:{
        fullname1(state){
          return state.name+"------";
        },
        fullname2(state,getters,rootState){
          return state.name+getters.fullname1+getters.mul+'--'+rootState.reactive.name
        }
      },
      actions:{
        asyncModuleMethod(context){
          setTimeout(()=>{
            console.log(context);
          },2000)
        }
      }
    }
  },
  getters:{
    mul(state){
      return state.counter *  state.counter;
    },
    plus(state,getters){
      return state.counter+"------"+getters.mul
    },
    funWithParam(state){
      return (param)=>{
        return param
      };
    }
  }
})
