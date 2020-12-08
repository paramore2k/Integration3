var vm = new Vue({
    el: "#app",
    data: {
    nombre: 4
    },
    computed: {
        moncalcul () {
            return this.nombre + 10;
        },
    },
});
