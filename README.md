<p style="text-align:center">
    <img src="https://github.com/bizhanhe1996/vue-doughnut-progress/blob/master/demo.gif?raw=true" width="250" height="250">
</p>

# vue-doughnut-progress
An animated responsive Circular Progress Bar for Vue 3

## Demo
A demo of the package is available <a href="https://bz06xb.csb.app/">HERE</a>

## Getting started
1. Install it using npm: 
```
npm i vue-doughnut-progress
```
2. Import it into your vue file:
```
import VueDoughnutProgress from 'vue-doughnut-progress';
```
3. Register it (Locally or Globally)
```
components: {
    VueDoughnutProgress
}
```
4. Add it to your template with the properties:
```
<VueDoughnutProgress
    radius="50"
    thickness="5"
    color="red"
    percent="23"
    :text="{
        text:'<p style=`text-align:center`>Doughnut<br/>Progress</p>',
        bold: true,
        size: 14
    }" 
/>
```
    
## Properties
| name | type | map | description |
| ---- | ---- | --- | ------------|
| radius | Integer | | radius of the progress circle, no need to add px |
| thickness | Integer | | thickness of circle, no need to add px|
| color | String | | color of progress, could be a color name or a HEX color code|
| percent | Integer | | an integer ranging from 0 to 100, no need to add % |
| text | Object | {<br>text: String,<br/>bold: Boolean,<br/>size: Integer<br/>} | An object with properties about the text inside the progress circle <br/> <ul><li>**text**: the text inside the progress cirlce, could be simple string or HTML </li><li> **bold**: whether the text inside the circle is bold or not, either true or false </li><li> **size**: font-size of the text inside the circle, no need to add px</li></ul> |