const { createApp } = Vue;

createApp({
  data() {
    return {
      age: 25,
      x: 0,
      y: 0,
    };
  },
  methods: {
    ekle: function () {
      this.age++;
    },
    çıkar: function () {
      this.age--;
    },
    ekle10: function (yil) {
      this.age += yil;
    },
    çıkar10: function (yil) {
      this.age -= yil;
    },
    updateXY(event) {
      console.log(event);
      this.x=event.offsetX;
      this.y=event.offsetY;
    },
    tikla(){
        alert("Linke Tıklandı.")
    }
  },
}).mount("#app");
