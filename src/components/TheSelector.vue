<template>
  <section>
    <form>
      <div class="form-control">
        <label for="animal1">Choose Animal 1 </label>
        <select id="animal1" name="animal1" v-model="animal1">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="newspaper">Bat</option>
        </select>
        <div class="form-control">
          <label for="animal2">Choose Animal 2 </label>
          <select id="animal2" name="animal2">
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
  }
};
</script>
