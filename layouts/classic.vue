<template>
    <div class="layout" @dragover.prevent @drop.stop.prevent="onDrop">
        <Sidebar />
        <div class="layout__data">
            <FilesNavBar />
            <slot />
        </div>
        <NotificationsContainer />
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

<script>
export default {
    layout: 'classic',
    methods: {
        onDrop(e) {
            for(var i in e.dataTransfer.files) {
                const file = e.dataTransfer.files[i];
                
                const reader = new FileReader();
                reader.onload = function (event) {
                    const data = event.target.result;
                    const parsedFile = loadFile(file.name, "local/"+ file.name, data)

                    files.addFile(parsedFile);
                };

                reader.readAsText(file, 'utf-8');
            }
        },
    }
}
</script>