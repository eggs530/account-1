import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {//默认路径跳转到money
        path: '/',
        redirect:'/money'
    },
    {//记账
        path:'/money',
        component:Money
    },
    {//标签
        path:'/labels',
        component:Labels
    },
    {//统计
        path:'/statistics',
        component:Statistics
    },
    {
        path:'/labels/edit',
        component:EditLabel
    },
    {//除了上面所有的
        path:'*',
        component:NotFound
    },
];

const router = new VueRouter({
    routes
});

export default router;
