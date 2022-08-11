const app = Vue.createApp({
  data() {
    return { enteredTask: "", tasks: [], taskListIsVisible: true };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
    toggleList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
