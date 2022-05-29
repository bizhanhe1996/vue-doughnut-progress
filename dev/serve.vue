
<template>
  <div id="app">
    <VueDoughnutProgress
      :radius="radius"
      :color="color"
      :thickness="thickness"
      :percent="percent"
      :text="text"
    />
    <div id="controls">
      <span>Radius: <input type="range" min="20" max="200" v-model="radius"> {{radius}}</span>
      <span>Color: <input type="color" v-model="color"></span>
      <span>Thickness: <input type="range" min="1" max="20" v-model="thickness"> {{thickness}}</span>
      <span>Percent: <button @click="percent += 10">Add 10</button><button @click="percent -= 10">Substract 10</button> {{percent}}</span>
      <span>Text: <input type="text" v-model="text.text"></span>
      <span>Bold: <input type="checkbox" v-model="text.bold"></span>
      <span>Font Size: <input type="range" min="6" max="72" v-model="text.size"> {{text.size}}</span>
    </div>
  </div>
</template>

<script>
import VueDoughnutProgress from '../src/vue-doughnut-progress';
export default {
  name: 'ServeDev',
  components: {
    VueDoughnutProgress
  },
  data() {
    return {
      radius: 50,
      color: 'red',
      thickness: 5,
      percent: 25,
      text: {
        text: "<p style='text-align:center'>Doughnut<br/>Progress</p>",
        bold: true,
        size: 14
      }
    }
  }
};
</script>

<style scoped>
#controls {
  display: flex;
  flex-direction: column;
  font-family: ubuntu;
}
#controls span {
  padding: 1rem;
}

</style>