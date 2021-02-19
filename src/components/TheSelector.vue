<template>
  <section>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="animal1">Choose Animal 1 </label>
        <select id="animal1" name="animal1" v-model="animal1">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="newspaper">Bat</option>
        </select>
        <div class="form-control">
          <label for="animal2">Choose Animal 2 </label>
          <select id="animal2" name="animal2" v-model="animal2">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="newspaper">Bat</option>
          </select>
        </div>
      </div>
      <div>
        <button>Compare</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animal1: 'dog',
      animal2: 'cat'
    };
  },
  methods: {
    submitForm() {}
  }
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
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
