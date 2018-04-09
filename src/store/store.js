import Vue from 'vue'
import Vuex from 'vuex'
import * as VuexFire from 'vuexfire'


Vue.use(Vuex)

import quiz from './quiz.js'

export default new Vuex.Store({
    mutations: VuexFire.firebaseMutations,
    modules: {
        quiz
    }
})
