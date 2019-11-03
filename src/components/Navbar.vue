<template>
    <div id="navbar">

        <div class="navbar">
            <ul>
                <li><a href="#about" onclick="smoothScroll('#about')">О нас</a></li> <!-- Описание команды | О нас -->
                <li><a href="#works" onclick="smoothScroll('#works')">Наши работы</a></li> <!-- Проекты | Наши работы -->
                <li><a href="#team" onclick="smoothScroll('#team')">Наша команда</a></li> <!-- >Наша команда | Действующие и бывшие участники -->
                <li><a href="#social" onclick="smoothScroll('#social')">Мы в соцсетях</a></li> <!-- Ссылки на соц. сети | Мы в соцсетях -->
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        components: {}
    }

</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

</style>
