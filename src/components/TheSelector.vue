<template>
  <!-- {{ $store.state.animals }} -->

  <!-- {{ animals }} -->
  <section class="compare-selects">
    <span class="form-control">
      <label for="animal1">Choose Animal 1 </label>
      <select id="animal1" v-model="animal1">
        <option v-for="animal in animals" :value="animal.id" :key="animal.id">{{
          animal.commonName
        }}</option>
      </select>
      <p>Animal 1: {{ animal1 }}</p>
    </span>
    <span class="form-control">
      <label for="animal2">Choose Animal 1 </label>
      <select id="animal2" v-model="animal2">
        <option v-for="animal in animals" :value="animal.id" :key="animal.id">{{
          animal.commonName
        }}</option>
      </select>
      <p>Animal 1: {{ animal2 }}</p>
    </span>
  </section>

  <button v-on:click.stop="compareAnimals">Compare</button>
</template>

<script>
export default {
  data() {
    return {
      animal1: 'noanimal',
      animal2: 'noanimal',
      animals: [
        {
          id: 'noanimal',
          commonName: 'Choose Animal',
          scientificName: '',
          speed: '',
          siteLink: '',
          img: ''
        },
        {
          id: 'animal001',
          commonName: 'African wild dog',
          scientificName: 'Lycaon pictus',
          speed: 45,
          siteLink: 'https://en.wikipedia.org/wiki/African_wild_dog',
          img: 'https://faster-than.s3.amazonaws.com/animal-wilddog.png'
        },
        {
          id: 'animal002',
          commonName: "Anna's hummingbird",
          scientificName: 'Calypte anna',
          speed: 61.06,
          siteLink: 'https://en.wikipedia.org/wiki/Anna%27s_hummingbird',
          img: 'https://faster-than.s3.amazonaws.com/animal-annahummingbird.png'
        },
        {
          id: 'animal003',
          commonName: 'Atlantic bluefin tuna',
          scientificName: 'Thunnus thynnus',
          speed: 43.51,
          siteLink: 'https://en.wikipedia.org/wiki/Atlantic_bluefin_tuna',
          img: 'https://faster-than.s3.amazonaws.com/animal-bluefin.png'
        },
        {
          id: 'animal004',
          commonName: 'Bison',
          scientificName: 'Bison',
          speed: 35,
          siteLink: 'https://en.wikipedia.org/wiki/Bison',
          img: 'https://faster-than.s3.amazonaws.com/animal-annahummingbird.png'
        },
        {
          id: 'animal005',
          commonName: 'Black mamba snake',
          scientificName: 'Dendroaspis polylepis',
          speed: 12.9,
          siteLink: 'https://en.wikipedia.org/wiki/Black_mamba',
          img: 'https://faster-than.s3.amazonaws.com/animal-blackmamba.png'
        }
      ]
    };
  },
  computed: {
    animalsList() {
      return this.$store.getters.getAnimals;
    }
  },

  methods: {
    submitForm() {
      // console.log('Animal 1 ', this.animal1);
      // console.log('Animal 2 ', this.animal2);
      // console.log(this.$store.animals);
    },
    compareAnimals(event) {
      console.log('Animal 1 ', this.animal1);
      console.log('Animal 2 ', this.animal2);

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
form {
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

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
