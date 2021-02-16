<template>
    <input type="button" :value="text"/>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        // Text used inside the button
        text: {
            type: String,
            required: true
        },
    }
}
</script>
<style scoped lang="scss">

    input {
        background-color: #1F6F8B;
        color: #E6D5B8;
        margin: 20px;
        padding: 25px;
        font-size: 1.5em;
        border-radius: 10px;
        border: 2px solid rgb(230, 228, 228);
        transition: all ease .4s;
        width: 90%;
        &:focus {
            outline: none;
            color:#1F6F8B;
            background-color: #E6D5B8;
            transition: all ease .4s;
        }
    }

</style>