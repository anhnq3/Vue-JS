const app = Vue.createApp({
  data() {
    return { userInput: "", userInputEnter: "" };
  },
  methods: {
    showAlert() {
      alert("This works!");
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    saveInputEnter(event) {
      this.userInputEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
