<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.counter }}</h1>
    <h1>{{ $store.state.moduleA.name }}</h1>
    <h1>{{ $store.state.reactive }}</h1>
    <h1>{{ $store.getters.mul }}</h1>
    <h1>{{ $store.getters.plus }}</h1>
    <hr>
    <h1>{{ $store.getters.fullname2 }}</h1>
    <hr>
    <h1>{{ $store.getters.funWithParam("hello i am param") }}</h1>
    <button @click="add">+</button>
    <button @click="del">-</button>
    <button @click="change(5)">change</button>
    <button @click="addReactive">addReactive</button>
    <button @click="updateInfo('lalallalala')">updateInfo</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    add(){
      this.$store.commit("add")
    },
    del(param){
      //普通提交风格
      // this.$store.commit("del")
      //特殊提交风格
      this.$store.commit({
        type:'del',
        param:param
      })

    },
    change(param){
      this.$store.commit("mul",param)
    },
    addReactive(){
      this.$store.commit("addReactive")
    },
    // updateInfo(param){
    //   this.$store.dispatch("asyncMethod",{
    //     callBack(p){
    //       console.log(p+"-------this method is done");
    //     },
    //     payload:param
    //   })
    // }
    updateInfo(payload){
      this.$store.dispatch("asyncMethod",payload).then((data)=>{
        console.log(data);
      });
      this.$store.dispatch("asyncModuleMethod",payload).then((data)=> {
        console.log(data);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
