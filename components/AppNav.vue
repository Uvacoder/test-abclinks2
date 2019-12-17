<template>
  <div>
    <ul>
      <li>
        <nuxt-link exact to="/">🏠 Home</nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/Projects">🐱‍💻Projects</nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/StayCurious">📖 Journal</nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/whoami">$ whoami</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: inherit;
  width: 100vw;
  height: 100px;

  ul {
    padding-left: 0;

    li {
      display: inline-block;
      margin-right: 30px;
      border-radius: 4px;
      border: 2px solid limegreen;
      background-color: aliceblue;
      padding: 10px 30px;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
