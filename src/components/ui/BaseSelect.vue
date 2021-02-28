<template>
  <div>
    <select
      :value="modelValue"
      class="field"
      @input="updateValue"
      v-bind="{
        ...$attrs,
        onChange: $event => {
          $emit('update:modelValue', $event.target.value);
        }
      }"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
        >{{ option }}</option
      >
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
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>
