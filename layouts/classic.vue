<template>
    <div class="layout">
        <Sidebar />
        <div class="layout__data">
            <FilesNavBar />
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .layout {
        width: 100%;
        height: 100vh;
        background-color: rgb(42, 42, 42);
        display: flex;
        overflow-y: hidden;

        &__data {
            width: calc(100% - 60px);
        }
    }
</style>