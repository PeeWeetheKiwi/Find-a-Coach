import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import UserRequests from "./pages/user/UserRequests.vue";
import NotFound from "./components/NotFound.vue";
import ContactCoach from "./pages/user/ContactCoach.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList},
        { path: '/coaches/:id', component: CoachDetail, props: true, children: [
                { path: 'contact', component: ContactCoach}
            ]},
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: UserRequests},
        { path: '/:notFound(.*)', component: NotFound},
    ]
});

export default router;