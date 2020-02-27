<template>
    <div class="main-panel">
        <Content />
        <Footer />
    </div>
</template>


<script>
import Content from './content/Content'
import Footer from './footer/Footer'

export default {
    name:"main-panel",
    components:{
        Content,
        Footer
    }
}
</script>