const { createApp } = Vue;

createApp({
  data() {
    return {

    };
  },
  methods: {
    isimYakala(){
        console.log("İsim alanına bir şey yazdın");
    },
    yasYakala(){
        console.log("Yaş alanına bir şey yazdın")
    }
  }
}).mount("#app");