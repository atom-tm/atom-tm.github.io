<template>
    <div id="app">

        <Navbar />
        <Header />

        <Body />

    </div>
</template>


<script>
    import Navbar from './components/Navbar.vue'
    import Header from './components/Header.vue'
    import Body from './components/Body.vue'

    export default {
        name: "app",
        components: {
            Navbar,
            Header,
            Body
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
