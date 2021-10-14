import BackTop from 'components/common/backTop/BackTop.vue'

export const BackTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShow:false
    }
  },
  methods: {
    backTop() {
      this.$refs.betterScroll.scrollTo(0, 0);
    }
  }
};
