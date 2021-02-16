<template>
  <container>
    <number-card :content="restNumber" v-bind="restNumber" cardType="display">
    </number-card>

    <div class="numberContainer">
      <number-card
        v-for="index in 9"
        :key="index"
        :content="index"
        class="gameButton"
        @click="saveNumber(index); playNote(index)"
      >
      </number-card>
    </div>
  </container>
</template>

<script>

import Container from "@/components/Container/Container.vue";
import NumberCard from "@/components/NumberCard/NumberCard.vue";
import * as Tone from 'tone';

export default {
  name: "Game",

  components: {
    Container,
    NumberCard,
  },

  mounted() {
    this.startNewRound();
  },

  data: () => ({
    gameNumbers: [],
    playerInput: [],
    restNumber: 0,
    allowInput: false,
    score: 0,
	notes: {
		1: "A4",
		2: "B4",
		3: "C4",
		4: "C#4",
		5: "D4",
		6: "E4",
		7: "F4",
		8: "F#4",
		9: "G4",
		10: "G#4"
	}
  }),

  methods: {

	// Returns number between 1 and 9 (inclusive)
    sortNumber: () => {
      return Math.floor(Math.random() * 9 + 1);
    },

	// Makes a pause of 2 seconds, push a new number to gameNumbers,
	// then show all numbers (including the new one), waits player input,
	// then verify if it is equals to game numbers. If so, continues the game,
	// else, ends the game.
    startNewRound: async function() {
      await this.delay(2000);
      this.gameNumbers.push(this.sortNumber());
      this.showNumbers();
      await this.recordPlayerInput();
      this.verifyPlayerInput()
        ? (this.score++, this.startNewRound())
        : this.$router.push({
            name: "GameOver",
            params: { score: this.score },
          });
    },

	// Reset player previous round input, then allow input again and finally
	// checks every 100ms if the length of player input is equal to game numbers length
    recordPlayerInput: async function() {
      this.playerInput.length = 0; // Resetting player input
      this.allowInput = true; // Enabling record
      return new Promise((resolve) => {
        setInterval(() => {
          if (!(this.playerInput.length < this.gameNumbers.length)) {
            this.allowInput = false;
            resolve(true);
          }
        }, 100);
      });
    },

	// Verifies if playerInput is equal to the gameNumbers 
    verifyPlayerInput: function() {
      return (
        JSON.stringify(this.gameNumbers) === JSON.stringify(this.playerInput)
      );
    },

	// Show all numbers on the screen using data binding on this.restNumber
    showNumbers: async function() {
      for (let i = 0; i < this.gameNumbers.length; i++) {
        this.restNumber = this.gameNumbers[i];
		this.playNote(this.restNumber)
        await this.delay(300);
      }
      await this.delay(500);
      this.restNumber = 0;
    },

	// "Stop" the execution for the value of the parameter ms
    delay: function(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

	// Saves player input (click on the game keyboard) on playerInput array
    saveNumber: function(number) {
      if (this.allowInput) {
        this.playerInput.push(number);
      }
    },

	// Play note based on the notes object using tonejs library
	playNote: function(number) {
		const synth = new Tone.Synth().toDestination();
		const now = Tone.now()
		synth.triggerAttack(this.notes[number], now)
		synth.triggerRelease(now + 0.3)
	}
  },
};
</script>

<style lang="scss">

.numberContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-content: flex-start;
  max-width: 95%;
  padding-bottom: 10px;
}

</style>
