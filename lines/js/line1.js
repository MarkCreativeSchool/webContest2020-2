export default {
    name: "line1.js",
    data() {
        return {
            locationName: null
        }
    },
    methods: {
        onClose() {
            this.$emit("onClose")
        },
    }
}