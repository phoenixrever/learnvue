const common = require('./js/common');
const utils = require('./js/utils');
require('./css/normal.css');
common.info('Hello world!' + utils.add(100, 200));
import Vue from 'vue'
import App from './vue/app.vue'

new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
});