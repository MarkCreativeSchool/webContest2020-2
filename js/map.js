var app = new Vue({
    el: "#app",
    components: {modal: modal,},
    data(){
        return {
            isOpen: false,
            mapFileData: "",
            mapArticles: []
        }
    },
    methods: {
        openMap(location){
            console.log(mapData["ny"])
            this.mapFileData = mapData[location]["map"]
            this.mapArticles = mapData[location]["articles"]
            this.isOpen = true
        },
        closeModal(){
            this.isOpen = false
        }
    }
})