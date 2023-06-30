console.log("hello world")
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      styleClass: 'text-center text-uppercase text-success my-5',
      randomImg: `https://unsplash.it/300/300?image=${Math.floor(Math.random()* 3)}`
    }
  }
}).mount('#app')