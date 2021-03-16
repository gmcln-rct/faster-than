<template>
  <header>
    <div class="logo-block">
      <img
        class="logo"
        src="https://faster-than.s3.amazonaws.com/faster-than-logo-3.png"
      />
      <span class="site-name"> Faster Than</span>
    </div>
    <ul>
      <li>
        <router-link to="/compare">Compare</router-link>
      </li>
      <li>
        <router-link to="/quiz">Quiz</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped scss>
@import url('https://use.typekit.net/art4tjq.css');

header {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: rgba(0, 77, 122, 0.8);

  -webkit-box-shadow: 0px 6px 8px -3px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 6px 8px -3px rgba(0, 0, 0, 0.24);
}

.logo-block {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 30vmin 0 0;
}

.site-name {
  /* margin: 0; */
  padding: 0.5vmin 0;
  font-family: bilo, sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: var(--huge-size);

  vertical-align: middle;

  color: #fff;
}

.logo {
  display: inline;
  width: 75px;
  margin: 0 0.5vmin 0 0;
  padding: 1vmin 1vmin 1vmin 0;
  opacity: 0.95;
  /* filter: invert(1); */
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
}

li {
  margin: 0 0.5vmin;

  font-size: var(--medium-size);
}

a {
  display: inline-block;
  padding: 0.5rem 1.5rem;

  text-decoration: none;
  color: white;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
}

a:hover,
a:active,
a.router-link-active {
  color: var(--muted-yellow);
  /* border-color: #f1a80a;
  background-color: #1a037e; */
}

@media only screen and (max-width: 720px) {
  .logo {
    width: 50px;
  }
}
</style>
