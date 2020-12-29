var modal = Vue.component("modal", {
    name: "modal",
    template: `
    <div class="modal is-active" v-if="isOpen === true">
  <div class="modal-background" @click="close"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
    `,
    props: ["isOpen"],
    methods: {
        close(){
            this.$emit("close")
        }
    }
})