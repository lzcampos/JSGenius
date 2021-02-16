<template>
    <container>

        <div class="right">
            <icon fileName="ranking.png" to="/ranking" />
        </div>

        <icon fileName="logo.png"/>

        <router-link to="/game">
            <base-button text="Iniciar Jogo" />
        </router-link>
        
    </container>
</template>

<script>

import Icon from '@/components/Icon/Icon.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import Container from '@/components/Container/Container.vue'

export default {
    components: {
        Icon,
        BaseButton,
        Container
    }
}
</script>

<style scoped lang="scss">

    .right {
        display: flex;
        justify-content: flex-end;
        padding: 15px 15px 0 0;
    }
    
</style>