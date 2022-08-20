<template>
   <div @click="createFile" class="file">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="file__icon"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
   </div>
</template>

<script>
export default {
    name: "NewFile",
    methods: {
        createFile() {
            console.log('Creating!')
            this.$emit("create")
        }
    }
}
</script>

<style lang="scss" scoped>
    .file {
        user-select: none;
        margin-left: 5px;
        margin-right: 10px;
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