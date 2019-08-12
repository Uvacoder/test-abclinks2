<template>
  <div class="container">
    <div>
     <logo/>
     <h2 class="hello">
       Hello World!
     </h2>
     <h1 class="title">
        I'm Hansel Wei
      </h1>
      <h2 class="subtitle">
       A curious Full Stack Developer <br> that loves emerging tech!
      </h2>
      <div class="links">
        <a
          href="http://hanselwei.me"
          target="_blank"
          class="button--green"
        >
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
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Myriad Pro', 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #eee;
  letter-spacing: 1px;
}

.hello {
  font-weight: 300;
  font-size: 42px;
  color: #00b8ff;
  word-spacing: 5px;
  padding-bottom: 15px;
}


.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #d600ff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
