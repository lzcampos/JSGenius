<template>
    <div class="card" :class="styleRules">
        <p>
            {{ content }}
        </p>
    </div>
</template>

<script>

export default {
    name: 'NumberCard',
    props: {
        cardType: {
            type: String,
            default: 'keyboard'
        },
        content: {
            type: Number,
            default: 0
        }
    },
    computed: {

        // Returns object in the format { class: true } to style the div on template.
        // Passing "display" to cardType prop it will get the display class, 
        // like the big numberCard that show the game numbers on the Game screen
        styleRules: function() {
            return { 
                [this.cardType]: true 
            }
        },
    }
}

</script>

<style scoped lang="scss">

    .card {
        background-color: transparent;
        width: 40%;
        max-height: 30%;
        align-self: center;
        align-content: center;
        p {
            font-weight: 300;
            line-height: 0;
            max-height: 100%;
        }
    }

    .keyboard {
        border: 4px solid #1F6F8B;
        color: #99A8B2;
        font-size: 8vh;
        width: 30% !important;
        margin-right: -2px;
        margin-bottom: -2px;
        transition: all ease .5s;
        &:active {
            background-color: #1F6F8B;
            transition: all ease .2s;
            > p {
                color: #E6D5B8;
            }
        }
    }

    .display {
        border: 4px solid#E6D5B8;
        color: #E6D5B8;
        font-size: 12vh;
        margin-top: 80px;
    }

</style>