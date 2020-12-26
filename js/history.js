

export default {
  name: "Index",
  components: {line1, },

  head() {
    return {
      title: "歴史-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "米国の歴史、また黒人差別の歴史を表記しています。" }
      ]
    }
  },

  data(){
    return{
      locationName:null
    }
  },
  methods:{
    onClick(locationName){
      this.locationName=locationName
    }
  }
}