<template>
  <h1>{{ title }}</h1>
  <button v-on:click="changeTitle()">Başlığı Değiştir</button>
</template>

<script>
export default {
  data() {
    return {
      title: "İlk Vue CLI çalışmam",
    }
  },
  methods: {
    changeTitle: function () {
      this.title = "Başlığı Değiştirdim.";
    }
  }
}
</script>