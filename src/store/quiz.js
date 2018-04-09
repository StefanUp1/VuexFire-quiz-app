import * as VuexFire from 'vuexfire'

const state = {
    questions: [],
    questionIndex: 0,
    seen: false,
}

const getters = {
    questions: state => {
        return state.questions
    },
    questionIndex: state => {
        return state.questionIndex
    }
}

const mutations = {
    'NEXT'(state) {
        state.questionIndex++
    },
    'PREV'(state) {
        state.questionIndex--
    },
    'SEEN'(state) {
        state.seen = true
    }
}

const actions = {
    nextQ: ({commit}) => {
        commit('NEXT')
    },
    prevQ: ({commit}) => {
        commit('PREV')
    },
    seen: ({commit}) => {
        commit('SEEN')
    },
    setQuizRef: VuexFire.firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('questions', ref)
    })
}

export default {
    state,
    mutations,
    actions,
    getters
}
