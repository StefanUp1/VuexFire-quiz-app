import firebase from 'firebase'

const db = firebase.initializeApp({
    databaseURL: 'https://vue-quiz-questions.firebaseio.com/'
}).database()

export const questionsRef = db.ref('questions')
