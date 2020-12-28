var lineBar = Vue.component("lineBar", {
    name: "lineBar",
    template: `
<p class="lineBar" :style="{ width: width + 'px', left: left + 'px'}" @click="onClick()">
    <slot></slot>
</p>`,
    props:["width", "left", "number"],

    methods:{
        onClick(){
            this.$emit("clicked", this.number)
        }
    }

})