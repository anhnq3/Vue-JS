const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        this.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    addOne() {
      this.number = this.number + 1;
    },
    addFive() {
      this.number = this.number + 5;
    },
  },
});

app.mount("#assignment");
