import Vue from 'vue'

//自己封装的一些组件
import defineComponent from '@/components/index'
Vue.use(defineComponent);
//elementUI
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import loading from '../common/components/loading/loading'
Vue.use(loading)
//AntdUI框架
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);
Vue.use(Element);



//Vant UI

// import Vant from 'vant';
// import 'vant/lib/index.css';
//
// Vue.use(Vant);

//mock

import '@/mock/index'
