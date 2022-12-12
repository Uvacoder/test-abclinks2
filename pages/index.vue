<template>
  <div class="outer">
    <div class="text-center justify-center py-4">
      <Bitmoji />
    </div>
    <h1 class="title sm:text-4xl md:text-5xl lg:text-6xl">
      <strong>Alec Campbell</strong>
    </h1>

     <div class="text-center max-w-7xl mx-auto py-8 sm:space-x-2 sm:space-y-2 lg:space-x-4 lg:space-y-4">
      <div>
          <span
          class="relative z-0 justify-center px-8 sm:flex-row shadow-sm rounded-md font-bold md:antialiased sm:subpixel-antialiased">
          <a href="https://github.com/uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-grey-700 relative inline-flex items-center px-8 py-2 rounded-l-md border">Github</a>
          <a href="https://twitter.com/VaLandscapes" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue-400 relative inline-flex items-center px-8 py-2 rounded-l-md border">Twitter</a>
          <a href="https://hashnode.com/uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib gray-50 bg-yellow-300 relative inline-flex items-center px-8 py-2 rounded-l-md border">Hashnode</a>
          <a href="https://codepen.io/uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue-600 relative inline-flex items-center px-8 py-2 rounded-l-md border">Codepen</a>
          <a href="https://dev.to/fu4303" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red relative inline-flex items-center px-8 py-2 rounded-l-md border">Dev.to</a>
          <a href="https://polywork.com/uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple-600 relative inline-flex items-center px-8 py-2 rounded-l-md border">Polywork</a>
          <a href="https://linkedin.com/in/alecbcampbell" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue-700 relative inline-flex items-center px-8 py-2 rounded-l-md border">Linkedin</a>
          <a href="mailto:uvacoder@proton.me (uvacoder) <hello@uvacoder@proton.me>" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green relative inline-flex items-center px-4 py-2 rounded-l-md border">Send
            Email</a><br>
         <a href="https://www.showwcase.com/uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-cyan-700 relative inline-flex items-center px-8 py-2 rounded-l-md border">Showwcase</a>
         <a href="https://stackoverflow.com/users/17330377/uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-orange-700 relative inline-flex items-center px-8 py-2 rounded-l-md border">Stackoverflow</a>
         <a href="https://stackblitz.com/@Uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-indigo-400 relative inline-flex items-center px-8 py-2 rounded-l-md border">Stackblitz</a>
         <a href="https://dribbble.com/Uvacoder/" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-pink-500 relative inline-flex items-center px-8 py-2 rounded-l-md border">Dribbble</a>
         <a href="https://www.figma.com/@uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-violet-700 relative inline-flex items-center px-8 py-2 rounded-l-md border">Figma</a>
         <a href="https://jsfiddle.net/user/Uvacoder/" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue-500 relative inline-flex items-center px-8 py-2 rounded-l-md border">JsFiddle</a>
         <a href="https://codesandbox.io/u/Uvacoder" target="_blank"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-teal-700 relative inline-flex items-center px-8 py-2 rounded-l-md border">Codesandbox</a>
   </span>

      </div>

     <h2 class="text-left justify-center d-flex flex-column text-base y-8 sm:p-7 lg:p1 sm:space-x-2 sm:space-y-2 lg:space-x-4 lg:space-y-4 skew-y-12">
          <ul class="list-none tracking-wider antialiased sm:subpixel-antialiased md:antialiased font-extrabold">         
            <li class="text-green-200">{ "I am a" : [ "Full Stack Developer", "Secured Infrastructure Professional", "Data Scientist", "Emerging Tech Fanactic!", "✨" ] },</li>
            <li class="text-purple-300">{ "My hobbies include" : [ "Basketball", "Woodworking", "Reading", "Farming", "🧗🏻‍♂️" ] }</li><br>
          </ul>
    </h2>
        

   
    </div>
  </div>
</template>

<script>
import Bitmoji from "~/components/Bitmoji.vue";

export default {
  components: {
    Bitmoji
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.title {
  font-family: "Roboto Mono", "Quicksand", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  display: inline;
  font-weight: 20em;
  color: #eee;
  letter-spacing: 1px;
  left: -50%;
}

.hello {
  font-weight: 300;
  font-size: 2em;
  color: #00b8ff;
}

.subtitle {
  margin: 2em 8em;
  text-align: center;
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
