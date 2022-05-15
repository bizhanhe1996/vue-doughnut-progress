# vue-doughnut-progress
An animated responsive Circular Progress Bar for Vue (3 and 2)

## Getting started
1. Install it using npm: npm i vue-doughnut-progress
2. Import it into your vue file:

    ```
    import VueDoughnutProgress from '@/vue-doughnut-progress.vue';
    ```

3. Add it to your template with parameters:
    
    ```
    <VueDoughnutProgress
        size="50"
        thickness="5"
        color="red"
        percent="23"
        text="test"
        bold="false"
        fontSize="14" 
    />
    ```

## Parameters

1. size:            Integer
2. thickness:       Integer
3. color:           String
4. percent:         Integer
5. text:            String (HTML Strings are possible)
6. bold:            Boolean
7. fontSize:        Integer (in pixels, no need to add px)