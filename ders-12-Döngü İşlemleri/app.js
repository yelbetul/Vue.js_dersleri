const { createApp } = Vue;

createApp({
  data() {
    return {
      karakterler: ["Adnan", "Behlül", "Bihter", "Matmazel"],
      ozellikler: [
        {
          name: "Adnan",
          age: 55,
        },
        {
          name: "Behlül",
          age: 35,
        },
        {
          name: "Bihter",
          age: 36,
        },
        {
          name: "Matmazel",
          age: 43,
        },
      ],
    };
  },
  methods: {},
}).mount("#app");
