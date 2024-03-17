const { createApp } = Vue;

createApp({
  data() {
    return {
        aktiflik: false,
        extra: false,
    };
  },
  methods: {},
  computed: {
    degisik: function(){
        return{
            aktif : this.aktiflik,
            extra: this.extra,
        }
    }
  }
}).mount("#app");
