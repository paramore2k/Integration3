const accueil = { template: "<div>Accueil</div>"};
const about = { template: "<div>À propos</div>"};
const plan = { template: "<div>Plan du site</div>"};
const articles = { template: "<div>Liste d'articles</div>"};

const routes = [
    { path: "/accueil", component: accueil },
    { path: "/about", component: about },
    { path: "/plan", component: plan },
    { path: "/articles", component: articles },
];


const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
}).$mount("#app");
