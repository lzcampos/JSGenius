<template>

    <div class="container">
        <slot></slot>
    </div>

</template>

<style lang="scss" scoped>

    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    
    .header {
        width: auto !important;
    }

</style>