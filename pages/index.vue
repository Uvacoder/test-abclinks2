<template>
  <div class="outer">
    <logo />
    <div class="container">
      <div>
        <h1 class="title">
          print('Hello World! <br />
          I'm <strong> Hansel Wei</strong>.')
        </h1>

        <h2 class="subtitle">
          I am <mark class="keyword">a curious</mark> Full Stack Developer,
          <br />
          Secured Infrastructure
          <mark class="keyword">professional</mark>, &amp; Emerging
          <mark class="keyword">tech fanactic</mark>!
        </h2>
        <div class="links">
          <a href="http://hanselwei.me" target="_blank" class="button--green">
            Resume
          </a>

          <a
            href="https://github.com/darkmastermindz"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Myriad Pro", "Quicksand", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #eee;
  letter-spacing: 1px;
  float: right;
  left: -50%;
}

.hello {
  font-weight: 300;
  font-size: 2em;
  color: #00b8ff;
}

.subtitle {
  font-weight: 300;
  font-size: 2em;
  line-height: 2.5em;
  color: #00b8ff;
}

.links {
  padding-top: 15px;
}

.outer {
  justify-content: center;
  align-items: center;
  text-align: center;
}

mark {
  background-color: transparent;
  color: white;
}
</style>
