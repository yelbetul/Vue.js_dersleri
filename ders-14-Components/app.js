const { createApp } = Vue;

const eleman = {
  template:
    '<p>Ben eleman taginin içerisiyim. Benim adım :  {{ name }}</p><button v-on:click="changeName">Adı değiştir.</button></p>',
  data() {
    return {
      name: "Betül",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Betül Yel";
    },
  },
};
var one = createApp({
    components: {
        "eleman":eleman,
    },
  data() {
    return {};
  },
  methods: {},
  computed: {},
}).mount("#app-one");

var two = createApp({
  data() {
    return {};
  },
  methods: {},
  computed: {},
});

two.component("eleman", {
  template:
    '<p>Ben eleman taginin içerisiyim. Benim adım :  {{ name }}</p><button v-on:click="changeName">Adı değiştir.</button></p>',
  data() {
    return {
      name: "Betül",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Betül Yel";
    },
  },
});

two.mount("#app-two");
