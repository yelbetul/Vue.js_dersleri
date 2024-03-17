const { createApp } = Vue;

createApp({
  data() {
    return {
        output:"",
    };
  },
  methods: {
    readRefs(){
        console.log(this.$refs.icerik.value);
        console.log(this.$refs.icerik2.innerHTML);

        this.output = this.$refs.icerik2.innerHTML;
    }
  },
}).mount("#app");
