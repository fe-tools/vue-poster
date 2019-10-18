<template>
  <div
    class="v-poster-loading"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div 
      class="v-poster-loading__icon"
      :style="{ color: color }">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'vue-poster-loading',
  props: {
    color: String,
    backgroundColor: String
  }
})
</script>

<style>
.v-poster-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.v-poster-loading__icon {
  color: #bdbdbd;
}
.v-poster-loading__icon,
.v-poster-loading__icon:after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-animation: VPosterLoading 0.4s linear infinite;
          animation: VPosterLoading 0.4s linear infinite;
}

@-webkit-keyframes VPosterLoading {
  0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); }
  100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes VPosterLoading {
  0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); }
  100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); }
}
</style>