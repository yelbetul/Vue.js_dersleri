const { createApp } = Vue

createApp({
    data(){
        return {
            name: "Betul",
            job: "Öğrenci",
            website:"http://www.google.com.tr",
            websiteTag: "<a href='https://www.google.com.tr'>HTML tag eklenerek</a> "       
        }
    },
    methods: {

    },
}).mount("#app");