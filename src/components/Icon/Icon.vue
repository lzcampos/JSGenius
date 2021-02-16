<template>
    <img :src="path.img" alt="" @click="goTo">
</template>

<script>
export default {
    props: {
        // Name of the file of the icon
        fileName: {
            type: String,
            required: true
        },

        // Route to go when click on the icon
        // I've decided to use this because every icon on the project has this function,
        // and I think it's better to do that without wrapping every icon on a anchor tag
        to: {
            type: String
        }
    },
    computed: {
        path() {
            return {
                img: require(`@/assets/img/${this.fileName}`)
            }
        }
    },
    methods: {

        // Pushes a new route to the router if prop "to" was passed
        goTo: function() {
            if (this.to) {
                this.$router.push({path: this.to})
            }
        }
    }
}
</script>

<style scoped>

    img {
        align-self: center;
    }

</style>