<template>
    <div class="content">
        <!-- 加载路由视图 -->
        <router-view></router-view>
    </div>
</template>


<script>

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../../../../pages/Home'
import Components from './../../../../pages/Components'
import Forms from './../../../../pages/Forms'
import Tables from './../../../../pages/Tables'
import Notifications from './../../../../pages/Notifications'
import Typography from './../../../../pages/Typography'
import Icons from './../../../../pages/Icons'


Vue.use(VueRouter)

const Router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component:Home
            
        },
        {
            path:"/Components",
            component:Components
            
        },
        {
            path:"/Forms",
            component:Forms
            
        },
        {
            path:"/Tables",
            component:Tables
            
        },
        {
            path:"/Notifications",
            component:Notifications
            
        },
        {
            path:"/Typography",
            component:Typography
            
        },
        {
            path:"/Icons",
            component:Icons
        }
    ]
})

export default {
    name:"Content",
    router:Router
}
</script>
