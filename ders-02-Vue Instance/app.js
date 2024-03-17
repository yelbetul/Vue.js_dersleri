const { createApp } = Vue;

createApp({
  data() {
    return {
        name: "Betül",
        job: "ögrenci", 
        age: 17,
        giyim: {
            sapka: true,
            pantolon: 'Kot',
            tshirt: false,
        },
        yetenek: ["Sürücü","Yazılımcı","Boksör"]
    };
  },
  methods: {

  }
}).mount("#ilk-uygulama");
