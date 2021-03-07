<template>
  <footer>
    <p>Copyright @2021 Glenn McClanan.</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      link1Text: 'Texas',
      link1:
        'https://tpwd.texas.gov/publications/nonpwdpubs/young_naturalist/animals/animal_speeds/',
      link2Text: 'Hawaii',
      link2: 'http://www.pbrc.hawaii.edu/~petra/animal_olympians.html',
      link3Text: 'Natural HIstory Magazine',

      link3:
        'https://www.factmonster.com/math-science/biology/plants-animals/speed-of-animals'
    };
  }
};
</script>

<style scoped>
@import url('https://use.typekit.net/art4tjq.css');

footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  margin: 2vmin 0 0 0;
  padding: 2vmin 0;

  /* height: 5rem; */
  background-color: rgba(50, 50, 50, 0.5);
}

footer p {
  padding: 1vmin 0;
  font-size: var(--base-size);
  color: #fff;
}
</style>
