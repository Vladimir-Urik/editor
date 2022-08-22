<template>
    <NuxtLayout name="classic">
        <FilePath :path="this.file.path" />
        <Editor :content="this.file.data" />
    </NuxtLayout>
</template>

<script>
import FilePath from '~~/components/FilePath.vue';
import Editor from '~~/components/Editor.vue';
export default {
    data() {
        const route = useRoute();
        const fileId = route.params.id;
        const file = files.data.find(file => file.id === fileId);
        if (file == undefined) {
            this.$router.push("/");
        }
        const fileData = localStorage.getItem("file:" + file.id);
        return {
            file: file,
            fileData: fileData
        };
    },
    components: { FilePath, Editor }
}
</script>

