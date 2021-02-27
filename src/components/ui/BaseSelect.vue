<template>
  <div>
    <select :value="value" @input="updateValue" v-bind="$attrs">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      require: true
    }
  }
};
</script>
