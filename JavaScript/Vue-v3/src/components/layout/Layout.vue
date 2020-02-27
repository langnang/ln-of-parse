<template>
    <div class="wrapper">
        <Header />
        <sidebar />
        <Panel />
        <Extra />
    </div>
</template>

<script>
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Panel from './panel/Panel'
import Extra from './extra/Extra'

export default {
    name:"Layout",
    components:{
        Header,
        Sidebar,
        Panel,
        Extra

    }
}
</script>
