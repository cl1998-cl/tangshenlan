import pTitle from './pTitle/index';
import pCode from './pCode/index';
import pText from './pText/index';

export default {
    install(Vue){
        Vue.component('p-title', pTitle);
        Vue.component('p-code', pCode);
        Vue.component('p-text', pText);
    }
}