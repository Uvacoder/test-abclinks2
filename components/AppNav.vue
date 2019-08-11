<template>
    <div>
<ul>
    <li>
        <nuxt-link exact to="/">Home</nuxt-link>
    </li>
    <li>
        <nuxt-link exact to="/Projects">Projects</nuxt-link>
    </li>
</ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;

    ul{
        padding-left: 0;
        li {
            display: inline-block;
            margin-right: 20px;
            
        }
    }
}
</style>