const { createApp } = Vue;

createApp({
  data() {
    return {
        age:20,
        a:0,
        b:0
    };
  },
  methods: {
    // ayaEkle(){
    //     console.log("A kontrol edildi");
    //     return this.a + this.age;
    // },
    // byeEkle(){
    //     console.log("B kontrol edildi");
    //     return this.b + this.age;
    // }
  },
  computed:{
    ayaEkle(){
        console.log("A kontrol edildi");
        return this.a + this.age;
    },
    byeEkle(){
        console.log("B kontrol edildi");
        return this.b + this.age;
    }
  }
}).mount("#app");