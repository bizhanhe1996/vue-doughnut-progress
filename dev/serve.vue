
<template>
  <div id="app">
    <VueDoughnutProgress
      :size="size"
      :color="color"
      :thickness="thickness"
      :percent="percent"
      :bold="bold"
      :text="text"
      :fontSize="fontSize"
    />
    <div id="controls">
      <span>Size: <input type="range" min="20" max="200" v-model="size"> {{size}}</span>
      <span>Color: <input type="color" v-model="color"></span>
      <span>Thickness: <input type="range" min="1" max="20" v-model="thickness"> {{thickness}}</span>
      <span>Percent: <button @click="percent += 10">Add 10</button><button @click="percent -= 10">Substract 10</button> {{percent}}</span>
      <span>Bold: <input type="checkbox" v-model="bold"></span>
      <span>Text: <input type="text" v-model="text"></span>
      <span>Font Size: <input type="range" min="6" max="72" v-model="fontSize"> {{fontSize}}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VueDoughnutProgress from 'vue-doughnut-progress';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueDoughnutProgress
  },
  data() {
    return {
      size: 50,
      color: 'red',
      thickness: 5,
      percent: 25,
      bold: true,
      text: "test",
      fontSize:14
    }
  }
});
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