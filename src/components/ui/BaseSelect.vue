<template>
  <div>
    <select :value="modelValue" @input="updateValue" v-bind="$attrs">
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
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
};
</script>
