<template>
  <div>
    <select :value="value" @input="updateValue" v-bind="$attrs"> </select>
  </div>
</template>
