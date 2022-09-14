import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getter';
console.log('getters', getters);

const moduleFiles = require.context("./module", true, /\.js$/);
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = moduleFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
   modules,
   getters
})

export default store