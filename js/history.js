var app = new Vue({
  el: "#app",
  components: {lineBar: lineBar, modal: modal, },
  data() {
    return{
      selectTabIndex: 0,
      isOpen: false,

    }
  },
  methods:{
    onTabClick(index){
      this.selectTabIndex = index;
    },
    clicked(){
      this.isOpen = true;
    },
    close(){
      this.isOpen = false;
    }
  }
})