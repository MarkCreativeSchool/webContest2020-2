var lineBar = Vue.component("lineBar", {
    name: "lineBar",
    template: `
<p class="lineBar" :style="{ width: width + 'px', left: left + 'px'}" @click="onClick()">
    <slot></slot>
</p>`,
    props:["width", "left"],

    methods:{
        onClick(){
            console.log("yay")
            this.$emit("clicked")
        }
    }

})