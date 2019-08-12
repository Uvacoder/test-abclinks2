<template>
    <div>
<ul>
    <li>
        <nuxt-link exact to="/">🏠 Home</nuxt-link>
    </li>
    <li>
        <nuxt-link exact to="/Projects">🐱‍💻Projects</nuxt-link>
    </li>
    <li>
        <nuxt-link exact to="/StayCurious">📖 Journal</nuxt-link>
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
    height: 100px;

    ul{
        padding-left: 0;
        li {
            display: inline-block;
            margin-right: 20px;
            border-radius: 4px;
            border: 1px solid #fff ;
            background-color: aliceblue;
            padding: 10px 30px;
            a {text-decoration:none}
        }
        
    }
}
</style>