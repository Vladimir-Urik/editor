<template>
   <div @click="goToHome" class="home">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="home__icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
   </div>
</template>

<script>
export default {
    name: "HomeButton",
    methods: {
        goToHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
    .home {
        user-select: none;
        margin-left: 5px;
        padding: 8px 14px;
        background-color: rgb(44, 44, 44);
        width: fit-content;
        border-radius: 4px;
        color: rgb(165, 165, 165);
        transition: all 0.2s;
        display: flex;

        &:hover {
            color: rgb(255, 255, 255);
            background-color: rgb(49, 49, 49);
            cursor: pointer;
        }

        &__icon {
            color: rgb(173, 173, 173);
            width: 14px;
            height: 14px;
            align-self: center;
            transition: all 0.2s;
        }

        &:hover > &__icon {
            color: rgb(255, 255, 255);
        }
    }
</style>