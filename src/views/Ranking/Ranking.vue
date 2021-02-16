<template>

    <div class="header">
        <icon fileName="voltar.png" to="/" />
        Ranking
    </div>

    <div class="rankingList">

        <template v-if="!showError">
            <tr v-for="(position, index) of ranking" :key="position">
                <td :class="{podium: isPodium(index), position: true}"> {{ index+1 }} </td>
                <td :class="{podium: isPodium(index), name: true}"> {{ position.name }}  </td>
                <td :class="{podium: isPodium(index), score: true}"> {{ position.score }} </td>
            </tr>
        </template>

        <template v-else>
            <div class="error">
                {{ errorMessage }}
            </div>
        </template>

    </div>
    
</template>

<script>

import axios from 'axios';
import Icon from '@/components/Icon/Icon.vue'


export default {
    name: 'Ranking',
    async created() {
        await this.getRanking()
    },
    components: {
        Icon
    },
    data: () => ({
        ranking: [],
        baseUrl: 'https://us-central1-prova-front-letras.cloudfunctions.net',
        errorMessage: "",
        showError: false
    }),
    methods: {

        // Tries to get the ranking from API and shows an error message if 
        // an error occurs
        getRanking: async function() {
            try {
                let data = await axios.get(`${this.baseUrl}/ranking`)
                this.ranking = data.data.sort( (a, b) => a.score < b.score ? 1 : (a.score === b.score ? 0 : -1) )
            } catch(error) {
                this.error = "Não foi possível carregar o ranking :("
                this.showError = true
            }
        },

        // Verify if position is less than 3
        isPodium: (position) => {
            return position < 3
        }
    }
}
</script>

<style scoped lang="scss">

    #app {
        height: auto;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
        color: #E6D5B8;
        font-weight: 200;
        font-size: 1.75em;
        img {
            position: absolute;
            top: 0;
            left: 0;
            padding: 20px;
        }
    }

    .rankingList {
        margin-top: 15%;
        width: 100%;
        background-color: #1C2B2D;
        tr {
            display: flex;
            align-self: center;
            padding: 10px;
            width: 100%;
            color: #1F6F8B;
            font-size: 24px;
        }
    }

    .position {
        width: 15%;
    }

    .name {
        width: 65%;
        text-align: start;
    }

    .score {
        width: 20%;
        text-align: start;
    }

    .podium {
        color: #99A8B2;
    }

    
</style>