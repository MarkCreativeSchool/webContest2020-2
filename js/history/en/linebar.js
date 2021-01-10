var lineBar = Vue.component("lineBar", {
    name: "lineBar",
    template: `
<!--<p class="lineBar" :style="{ width: width + 'px', left: left + 'px'}" @click="onClick()">-->
<!--    <slot></slot>-->
<!--</p>-->

<div class="eventLine" :style="{width:width + 'px', left: left + 'px', top: top + 'px'}" @click="onClick()">
    <div class="linePoint"></div>
    <div class="lineBalloon"><slot></slot></div>
</div>`,

    props:{
        width:{
            type: String,
            required:true
        },
        left:{
            type: String,
            required:true
        },
        number:{
            type:String,
            required:true
        },
        top:{
            type:String,
            required:false,
            default:"0",
        }
    },

    methods:{
        onClick(){
            console.log("aaaaa")
            this.$emit("clicked", this.number)
        }
    }

})