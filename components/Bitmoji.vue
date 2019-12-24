<template>
  <div class="bitmojiAni">
    <img svg-inline class="icon" src="~/assets/hanselbitmoji.svg" alt="example" />
  </div>
</template>

<style>
.bitmojiAni {
  border-radius: 250px;
  box-sizing: border-box;
  background-color: goldenrod;
  border: 5px solid #cfd8dc;
  display: inline-block;
  animation: turn 0.5s linear forwards 0.5s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;

  height: 230px;
  width: 230px;
}
</style>
