import {createRouter, createWebHistory} from 'vue-router';
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import UserRequests from "./pages/user/UserRequests.vue";
import NotFound from "./components/NotFound.vue";
import ContactCoach from "./pages/user/ContactCoach.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store/index.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id', component: CoachDetail, props: true, children: [
                {path: 'contact', component: ContactCoach}
            ]
        },
        {path: '/register', component: CoachRegistration, meta: {requiresAuth: true}},
        {path: '/requests', component: UserRequests, meta: {requiresAuth: true}},
        {path: '/auth', component: UserAuth, meta: {requiresUnauth: true}},
        {path: '/:notFound(.*)', component: NotFound},
    ]

})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
});

export default router;