const UserHome = { template: "<div>User Home</div>"};
const UserPosts = { template: "<div>UserPosts</div>"};
const UserProfile = { template: "<div>UserProfile</div>"};
const User = {
    template: '<div class="user">User {{ $route.params.id }}</div>'
};

const routes = [
    { path: "/user", name: "user", component: User },
];

const router = new VueRouter({
    routes: [
        {
            path: "/user/:id",
            component: User,
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched
                { path: "", component: UserHome },

                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                { path: "profile", component: UserProfile },

                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                { path: "posts", component: UserPosts },
            ],
        },
    ],
});


const app = new Vue({
    router,
}).$mount("#app");
