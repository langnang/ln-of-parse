import Home from './../pages/Home.vue'
import Icons from './../pages/Icons.vue'


export default {
    mode:"history",
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/icons",
            component:Icons
        }
    ]
}