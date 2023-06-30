console.log("hello world")
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      styleClass: 'text-center text-uppercase text-success my-5'
    }
  }
}).mount('#app')