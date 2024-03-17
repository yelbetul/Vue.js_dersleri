const { createApp } = Vue;

createApp ({
    data(){
        return{
            name:"Betül",
            a: 3,
            b: 4,
        }
    },
    methods: {
        selamla: function(isim,gece){
            return "İyi "+ gece +" " + this.name ;
        },
        topla: function(){
            return this.a + this.b;
        }
    },
}).mount("#ilk-uygulama")