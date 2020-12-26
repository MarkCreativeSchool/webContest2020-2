// Vue.component('lineBar',{
//     template: '<p>MyComponent</p>'
// })

var lineBar = {
    name: "lineBar",
    template: `
<p class="lineBar" :style="{ width: width + 'px', left: left + 'px'}">
    <slot></slot>
</p>`,
    props:["width", "left"],
}