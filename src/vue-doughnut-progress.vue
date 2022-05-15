<template>
  <div class="vue-doughnut-progress">
    <svg :width="size" :height="size">
      <!-- Track Circle -->
      <circle 
        :cx="size/2"
        :cy="size/2" 
        :r="r" 
        :style="{
          'stroke-width':thickness,
        }"  
      />
      <!-- Bar Circle -->
      <circle 
        :cx="size/2" 
        :cy="size/2" 
        :r="r" 
        :style="{
          'stroke-dashoffset':dashoffset,
          'stroke-dasharray':dasharray,
          'stroke-width':thickness,
          'stroke':color
        }" 
      />
    </svg>
    <!-- Test Inside Circle -->
    <span :style="{
      'font-weight':bold?'bold':'normal',
      'font-size':fontSize+'px'
      }" 
      v-html="text"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'VueDoughnutProgress',
  props: {
    // Doughnut Properties
    'size': Number,
    'color': String,
    'thickness': Number,
    'percent': Number,
    // Text Properties
    'text': String,
    'fontSize': Number,
    'bold': Boolean,
  }, 
  computed: {
    r() {
      return (this.size / 2) - 2
    },
    dashoffset() {
      return this.dasharray - (this.dasharray*this.percent/100);
    },
    dasharray() {
      return 2 * Math.PI * this.r
    }
  }
}
</script>

<style>
.vue-doughnut-progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
  -webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
}
.vue-doughnut-progress svg {
  -webkit-transform: rotate(-90deg);    
    transform: rotate(-90deg);
  overflow: initial;
} 
.vue-doughnut-progress span {
  position: absolute;
  font-family: Ubuntu;
}
.vue-doughnut-progress circle{
  fill:none;    
}
.vue-doughnut-progress circle:nth-child(1){
  stroke: lightgray;
}
.vue-doughnut-progress circle:nth-child(2){
  position: relative;
  z-index: 1;    
  -webkit-transition: stroke-dashoffset 1s;    
  transition: stroke-dashoffset 1s;
  stroke-linecap: round;
}
</style>