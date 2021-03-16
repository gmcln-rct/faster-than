<template>
  <header>
    <nav>
      <img
        class="logo"
        src="https://faster-than.s3.amazonaws.com/faster-than-logo.svg"
      />
      <span class="site-name"> Faster Than</span>
      <ul>
        <li>
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://use.typekit.net/art4tjq.css');

header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: rgba(0, 77, 122, 0.8);

  -webkit-box-shadow: 0px 6px 8px -3px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 6px 8px -3px rgba(0, 0, 0, 0.24);
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
  width: 65px;
  margin: 0 1vmin 0 0;
  padding: 1vmin 1vmin 1vmin 0;
  opacity: 0.95;
  filter: invert(1);
}

@media only screen and (max-width: 720px) {
  .logo {
    width: 50px;
  }
}
</style>
