<template>
  <footer>
    <h5>Data sources:</h5>
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
  width: 100%;
  align-items: center;

  /* height: 5rem; */
  background-color: #999;
}

footer p {
  font-size: 14px;
  color: #fff;
}
</style>
