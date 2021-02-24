<template>
  <!-- {{ $store.state.animals }} -->

  <!-- {{ animals }} -->
  <section class="compare">
    <div class="compare-selects">
      <span class="form-control">
        <!-- <div>{{ animal1Img.img }}</div> -->
        <label for="animal1">Choose Animal 1 </label>
        <select id="animal1" class="select-css" v-model="animal1">
          <option
            v-for="(animal, index) in animals"
            :value="animal.id"
            :key="index"
            >{{ animal.commonName }}</option
          >
        </select>

        <p v-if="!animal1IsValid">Please select an animal</p>
        <img v-if="animal1 !== 'noanimal'" :src="animal1Img.img" />
      </span>
      <span class="form-control">
        <label for="animal2">Choose Animal 2 </label>
        <select id="animal2" class="select-css" v-model="animal2">
          <option
            v-for="animal in animals"
            :value="animal.id"
            :key="animal.id"
            >{{ animal.commonName }}</option
          >
        </select>
        <p v-if="!animal2IsValid">Please select an animal</p>
        <!-- <img v-if="animal2Img.img" :src="animal2Img.img" /> -->
      </span>
    </div>
    <button v-on:click.stop="compareAnimals">Compare</button>
  </section>
</template>

<script>
import { animals } from './data/animals.js';
export default {
  data() {
    return {
      animal1: 'noanimal',
      animal2: 'noanimal',
      animals: animals,
      animal1IsValid: true,
      animal2IsValid: true
    };
  },
  computed: {
    animal1Img() {
      let animal1Img;
      if (this.animal1 !== 'noanimal') {
        animal1Img = animals.find(x => x.id === this.animal1);
      }
      console.log('animal1 image' + animal1Img);
      return animal1Img;
    },
    animal2Img() {
      let animal2Img;
      if (this.animal2 !== 'noanimal') {
        animal2Img = animals.find(x => x.id === this.animal2);
      }
      console.log('animal2 image' + animal2Img);
      return animal2Img;
    }
  },

  methods: {
    validateSelects() {
      console.log('This is validating');
    },
    compareAnimals(event) {
      this.validateSelects();
      let selectedAnimal1 = this.animals.find(x => x.id === this.animal1);
      let selectedAnimal2 = this.animals.find(x => x.id === this.animal2);

      let winner;

      if (selectedAnimal1.speed > selectedAnimal2.speed) {
        winner = selectedAnimal1;
      } else {
        winner = selectedAnimal2;
      }

      console.log('Winner: ' + winner.commonName);

      let typeCheck = typeof selectedAnimal1.speed;
      console.log('Type 1' + typeCheck);

      if (event) {
        console.log(event.target.tagName);
      }
    }
  }
};
</script>

<style scoped scss>
.compare {
  /* max-width: 40rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
}

.compare-selects {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  margin: 0 5vmin;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

button {
  margin: 0 auto;
  padding: 0.75rem 2rem;
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

/* class applies to select element itself, not a wrapper element */
.select-css {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient. 
    for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference
    
  */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 0.7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;
}
/* Hide arrow icon in IE browsers */
.select-css::-ms-expand {
  display: none;
}
/* Hover style */
.select-css:hover {
  border-color: #888;
}
/* Focus style */
.select-css:focus {
  border-color: #aaa;
  /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

/* Set options to normal weight */
.select-css option {
  font-weight: normal;
}

/* Support for rtl text, explicit support for Arabic and Hebrew */
*[dir='rtl'] .select-css,
:root:lang(ar) .select-css,
:root:lang(iw) .select-css {
  background-position: left 0.7em top 50%, 0 0;
  padding: 0.6em 0.8em 0.5em 1.4em;
}

/* Disabled styles */
.select-css:disabled,
.select-css[aria-disabled='true'] {
  color: gray;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
}

.select-css:disabled:hover,
.select-css[aria-disabled='true'] {
  border-color: #aaa;
}
</style>
