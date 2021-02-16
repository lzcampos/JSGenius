<template>
    <container>
        <div class="right">
            <icon fileName="fechar.png" to="/" />
        </div>

        <h2>Fim de Jogo</h2>

        <div>
            <h3>score</h3>
            <h1> {{ score }} </h1> 
        </div>
        
        <div class="inputsWrapper">
            <input type="text" class="nameInput" placeholder="Digite seu nome" v-model="name" />
            <base-button text="Salvar Ranking" @click="saveScore"></base-button>
        </div>
        

        <div v-if="showAlert" class="alert">
            <p> {{ errorMessage }} </p>
        </div>
    </container>
</template>

<script>

import Icon from '@/components/Icon/Icon.vue'
import Container from '@/components/Container/Container.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import axios from 'axios'

export default {
    name: 'GameOver',
    props: {
        score: {
            default: 0
        }
    },
    components: {
        Container,
        BaseButton,
        Icon
    },
    computed: {
        // Verify if name is not empty
        nameFilled() {
            return this.name != ""
        }
    },
    data: () => ({
        showAlert: false,
        name: "",
        baseUrl: 'https://us-central1-prova-front-letras.cloudfunctions.net',
        errorMessage: ""
    }),
    methods: {

        // If name is filled try to save score on API using POST method
        saveScore: async function () {
            if (this.nameFilled) {
                try {
                    await axios.post(`${this.baseUrl}/save`, {
                        name: this.name,
                        score: parseInt(this.score)
                    })
                } catch (error) {
                    this.errorMessage = "Perdão, não foi possível salvar seu score devido a um erro de rede :("
                    this.showAlert = true
                }
                if (this.errorMessage === "") {
                    this.$router.push({path: '/ranking'})
                }
            } else {
                this.errorMessage = "Por favor, informe um nome para salvar o seu score"
                this.showAlert = true
            }
        }
    }
}
</script>

<style scoped lang="scss">

    div > img {
        align-self: center;
    }

    h1, h2, h3 {
        color: #E6D5B8;
        font-weight: 200;
        margin: 0 auto;
    }

    h2 {
        font-size: 50px;
    }

    h1 {
        font-size: 90px;
    }

    ::placeholder {
        color: #99A8B2;
    }

    .right {
        display: flex;
        justify-content: flex-end;
        padding: 15px 15px 0 0;
    }

    .nameInput {
        background-color: transparent;
        color: #E6D5B8;
        margin: 20px 20px 0 20px;
        padding: 25px;
        font-size: 1.5em;
        border-radius: 10px;
        border: 4px solid#1F6F8B;
        width: 75%;
        &:focus {
            outline: none;
        }
    }

    .inputsWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input {
            width: 80%;
        }
    }

    .alert {
        position: absolute;
        align-self: center;
        top: 60%;
        color: red;
        margin: 20px;
        font-size: 1.2em;
    }

</style>