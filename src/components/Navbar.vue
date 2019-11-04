<template>
    <div class="navbar">

        <div class="container">
            <div class="row">
                <div class="nav">
                    <ul>
                        <li><a href="#about" onclick="smoothScroll('#about')">О нас</a></li>
                        <li><a href="#works" onclick="smoothScroll('#works')">Наши работы</a></li>
                        <li><a href="#team" onclick="smoothScroll('#team')">Наша команда</a></li>
                        <li><a href="#social" onclick="smoothScroll('#social')">Мы в соцсетях</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Body',
        props: {}
    }

</script>

<style lang="scss">

</style>
