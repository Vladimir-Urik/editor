<template>
    <div class="files">
        <HomeButton />
        <File v-for="file in files" @ctxm="openContextMenu" :file="file.name" :fileId="file.id" :fileType="file.type" :selected="file.id === selected" @select="changeFile" @close="closeFile" />
        <NewFile @create="openModal" />
    </div>


    <Modal :show="create" title="Create New File" okButton="Create" closeButton="Close" @close="closeModal" @ok="createNewFile">
        <Input type="text" label="File name:" @input="updateFileName" :error="fileNameError" />
    </Modal>
 
    <FileContextMenu v-if="this.menu.open" :data="this.menu" @close="this.menu.open = false" @open="changeFile" @download="downloadFile" @share="shareFile" />
</template>

<script>
export default {
    name: "FilesNavBar",
    data() {
        let selected = '';

        const route = useRoute()
        if(route.fullPath.startsWith('/file/')) {
            const fileId = route.params.id;
            selected = fileId;
        }
        const modals = useModals();
        const create = modals.name === 'createFile';

        return {
            files: files.data,
            selected: selected,
            create: create,
            fileName: '',
            fileNameError: undefined,
            menu: {
                open: false,
                x: 0,
                y: 0,
                file: undefined
            }
        }
    },
    methods: {
        changeFile(fileId) {
            this.menu.open = false;
            this.$router.push('/file/' + fileId);
        },
        closeFile(fileId) {
            if(this.selected === fileId) {
                if(this.files.length > 1) {
                    const file = this.files[0].id
                    this.$router.push('/file/' + file);
                } else {
                    this.$router.push('/');
                }
            }

            this.files = this.files.filter(file => file.id !== fileId)
        },

        updateFileName(event) {
            this.fileName = event.target.value

            if(this.fileName.length > 0) {
                const regexos = /^(?!\\.)(?!com[0-9]$)(?!con$)(?!lpt[0-9]$)(?!nul$)(?!prn$)[^\\|\\*\?\\:<>\/$"]*[^\\.\\|\\*\\?\\\:<>\/$"]+$/;
                if(!this.fileName.includes('.')) {
                    this.fileNameError = 'File name must contains extension!'
                } else if(!regexos.test(this.fileName)) {
                    this.fileNameError = 'File name is not valid!'
                } else {
                    this.fileNameError = undefined
                }
            } else {
                this.fileNameError = undefined
            }
        },

        createNewFile() {
            if(this.fileName.length > 0) {
                if(this.fileName.startsWith('#')) {
                    if(this.fileName == '#C50F') {
                        this.fileNameError = undefined;
                        this.create = false;

                        for(var i = 0; i < 50; i++) {
                            const id = Math.floor(Math.random() * 1000000000000);
                            const name = id + '.txt';

                            const file = createNewFile(name, 'local/' + name);
                            this.addFile(file);
                        }
                    } else {
                        this.fileNameError = 'File name is not valid!'
                    }
                }

                if(!this.fileName.includes('.')) {
                    this.fileNameError = 'File name must contains extension!'
                } else {
                    const regexos = /^(?!\\.)(?!com[0-9]$)(?!con$)(?!lpt[0-9]$)(?!nul$)(?!prn$)[^\\|\\*\?\\:<>\/$"]*[^\\.\\|\\*\\?\\\:<>\/$"]+$/;
                    if(!regexos.test(this.fileName)) {
                        this.fileNameError = 'File name is not valid!'
                        return;
                    }

                    this.fileNameError = undefined
                    const file = createNewFile(this.fileName, 'local/' + this.fileName);
                    this.addFile(file);
                }
            } else {
                this.fileNameError = 'File name must not be empty!'
            }
        },
        
        addFile(file) {
            files.addFile(file);
            this.$router.push('/file/'+ file.id);
            this.create = false
            this.fileName = ''
        },

        openContextMenu(e) {
            const fileId = e.fileId;

            const fileDetails = this.files.find(file => file.id === fileId);
            if(fileDetails == undefined) return;

            const x = e.clientX;
            const y = e.clientY;

            this.menu.open = true;
            this.menu.x = x;
            this.menu.y = y;
            this.menu.file = fileDetails;
        },

        downloadFile(fileId) {
            this.menu.open = false;
            alert('Downloading file: ' + fileId +" ... (not implemented)");
        },

        shareFile() {
            this.menu.open = false;
            alert('Sharing file: ' + this.menu.file.id +" ... (not implemented)");
        },

        openModal() {
            this.fileName = '';
            this.create = true

            const modals = useModals();
            modals.name = 'createFile';
        },

        closeModal() {
            this.create = false; 
            this.fileName = ''; 
            this.fileNameError = undefined;

            const modals = useModals();
            modals.name = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    .files {
        display: flex;
        padding: 4px 0;
        width: 100%;
        background-color: rgb(60, 60, 60);
        overflow-y: hidden;
        overflow-x: visible;

        &::-webkit-scrollbar {
          height: 7px;
        }

        &::-webkit-scrollbar-track {
          background: rgb(35 35 35);
        }

        &::-webkit-scrollbar-thumb {
          background: rgb(92, 92, 92);
          border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: rgb(71, 71, 71);
        }
    }
</style>