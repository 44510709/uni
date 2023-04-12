import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'

const store = new Vuex.Store({
	state:state,
	mutations:mutations,
	actions:actions
})


export default store