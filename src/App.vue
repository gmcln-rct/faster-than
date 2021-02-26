<template>
  <the-header></the-header>
  <the-selector></the-selector>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheSelector from './components/TheSelector';
import TheFooter from './components/TheFooter';

export default {
  components: {
    TheHeader,
    TheSelector,
    TheFooter
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  letter-spacing: 1px;
}
</style>
