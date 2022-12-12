<template>
  <div class="bitmojiAni">
    <img svg-inline class="icon" src="~/assets/Alwin.svg" alt="example" />
  </div>
</template>

<style>
.bitmojiAni {
  border-radius: 350px;
  box-sizing: border-box;

  border: 7px solid #cfd8dc;
  display: inline-block;
  animation: turn 0.5s linear backwards 1.5s;
  transform: rotateY(720deg);
  position: relative;
  overflow: hidden;
  height: 230px;
  width: 230px;
}
</style>
