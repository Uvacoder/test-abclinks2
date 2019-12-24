<template>
  <div>
    <ul>
      <li>
        <nuxt-link exact to="/">🏠📜 (H)</nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/Projects">🐙👨🏻‍💻 (P)</nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/StayCurious">📝📖 (J)</nuxt-link>
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
  align-items: top;
  flex-shrink: inherit;
  width: 100vw;
  height: 100px;

  ul {
    li {
      margin: 0.5em;
      border-radius: 0.75em;
      background-color: aliceblue;
      padding: 1em;
      position: center;
      overflow-x: hidden;
      z-index: 1;

      display: inline;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
