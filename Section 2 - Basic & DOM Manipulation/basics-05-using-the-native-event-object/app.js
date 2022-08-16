const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      const that = this;
      if (value > 50) {
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  //   name(value) {
  //     if (value === "") {
  //       this.fullname = "";
  //     } else {
  //       this.fullname = value + "" + this.lastName;
  //     }
  //   },
  //   lastName(value) {
  //     if (value === "") {
  //       this.fullname = "";
  //     } else {
  //       this.fullname = this.name + "" + value;
  //     }
  //   },
  // },
  computed: {
    fullname() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + "" + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + "" + "Nguyen";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
