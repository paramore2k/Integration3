var vm = new Vue({
    el: "#app",
    data: {
        firstname: "David",
        lastname: "Champagne",
        address: "Quebec City",
    },
    methods: {
        mydetails: function () {
            return (
                "I am " + this.firstname + " " + this.lastname + " from " + this.address
            );
        },
    },
});
