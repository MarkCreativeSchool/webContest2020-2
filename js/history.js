var app = new Vue({
  el: "#app",
  components: {lineBar: lineBar, modal: modal, },
  data() {
    return{
      selectTabIndex: 0,
      isOpen: false,
      coreData: [],
    }
  },
  methods:{
    onTabClick(index){
      this.selectTabIndex = index;
    },
    clicked(number){
      var data = historyData[this.selectTabIndex][number]
      this.coreData = data
      this.isOpen = true;
    },
    close(){
      this.isOpen = false;
    }
  }
})