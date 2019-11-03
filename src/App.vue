<template>
    <div id="app">
        <Navbar></Navbar>

        <Header></Header>


        <GoTop></GoTop>

        <Body></Body>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Header from './components/Header.vue'
    import GoTop from './components/GoTop.vue'
    import Body from './components/Body.vue'

    export default {
        name: "app",
        components: {
            Navbar,
            Header,
            GoTop,
            Body
        }
    }

</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

</style>
