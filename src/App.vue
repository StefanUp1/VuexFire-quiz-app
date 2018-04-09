<template>
    <div id="app">
        <h1>Quiz on Important Facts</h1>
        <div id="quiz-container">
            <app-quiz></app-quiz>
        </div>
    </div>
</template>

<script>
    import Quiz from './components/Quiz.vue'

    export default {
        name: 'App',
        components: {
            appQuiz: Quiz
        }
    }

</script>

<style scoped>
    h1 {
        font-weight: 300;
        margin: 0px;
        padding: 10px;
        font-size: 20px;
        background-color: #444;
        color: #fff;
    }

    #app {
        font-size: 20px;
        font-family: sans-serif;
        color: #333;
        font-weight: 300;
        text-align: center;
        background-color: #f8f6f0;
        height: 100vh;
    }

 #quiz-container { 
     position: relative; 
     height: 200px; 
     margin-top: 40px; 
    }

</style>
