import line1 from "~/lines/html/line1.html"

export default {
  name: "Index",
  components: {line1, },

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