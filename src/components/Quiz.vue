<template>
    <div>
        <div v-for="(question, index) in questions">
            <div v-show="index === questionIndex" class="quiz">
                <div class="question">{{question.question}}</div>
                <div class="answers" :class="{isTrue: question.isTrue, isFalse: question.isFalse}">
                    <label v-for="(answer, key) in question.answers">
                        <input type="radio" :value="key" :name="index" v-model="userAnswers[index]">
                        {{key}} : {{answer}}
                    </label>
                </div>
                <div>
                    <button id="previous" v-show="questionIndex > 0" v-on:click="prevQ">Previous Question</button>
                    <button id="next" v-show="questionIndex < questions.length - 1" v-on:click="nextQ"> Next Question</button>
                    <button id="submit" v-show="questionIndex === questions.length - 1" v-on:click="submit">Submit quiz</button>
                </div>
                <div v-show="seen">
                    {{userCorrectAnswers}} / {{questions.length}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { questionsRef } from '../firebase/firebase.js'

    export default {
        name: 'App',
        data() {
            return {
                userAnswers: [],
                userCorrectAnswers: 0
            }
        },
        computed: {
            ...mapGetters([
                'questions',
                'questionIndex'
            ])
        },
        methods: {
            ...mapActions([
                'nextQ',
                'prevQ',
                'seen',
            ]),
            submit() {
                this.userCorrectAnswers = 0
                for (let userAnswer in this.userAnswers) {
                    if (this.userAnswers[userAnswer] === this.questions[userAnswer].correctAnswer) {
                        this.questions[userAnswer].isFalse = false
                        this.questions[userAnswer].isTrue = true
                        this.userCorrectAnswers++

                    } else {
                        this.questions[userAnswer].isTrue = false
                        this.questions[userAnswer].isFalse = true
                    }
                }
                this.seen()
            }
        },
        created() {
            this.$store.dispatch('setQuizRef', questionsRef)
        }
    }

</script>

<style scoped>
    .question {
        font-size: 30px;
        margin-bottom: 10px;
    }

    .answers {
        margin-bottom: 20px;
        text-align: left;
        display: inline-block;
    }

    .answers label {
        display: block;
        margin-bottom: 10px;
    }

    button {
        font-family: sans-serif;
        font-size: 20px;
        background-color: #279;
        color: #fff;
        border: 0px;
        border-radius: 3px;
        padding: 10px;
        cursor: pointer;
        margin-bottom: 20px;
    }

    button:hover {
        background-color: #38a;
    }

    .isTrue {
        color: green;
    }

    .isFalse {
        color: red;
    }

</style>
