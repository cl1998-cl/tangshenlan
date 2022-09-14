import Vue from 'vue'
import loading from './index.vue'

let $app = Vue.extend(loading)
let $loading = new $app().$mount(document.createElement('div'))

document.body.appendChild($loading.$el)

export default {
  install(vm) {
    vm.prototype._loading = {
      show: (param) => {
        
        if (param) {
          Object.keys(param).forEach(key => {
            $loading[key] = param[key]
          })
          
        }
       
        $loading.visible = true
      },
      hide: () => {
        $loading.visible = false
      }
    }
  }
}
