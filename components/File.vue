<template>
   <div @click="openFile" @contextmenu.native="openContextMenu" :class="this.selected ? 'file file--selected' : 'file'">
    <svg class="file__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    <p class="file__name">{{file}}</p>
    <span class="file__close" @click="closeFile"><span class="file__close--icon">⨯</span></span>
   </div>
</template>

<script>
export default {
    name: "File",
    props: {
        file: {
            type: String,
            required: true
        },
        fileId: {
            type: String,
            required: true
        },
        fileType: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        openFile() {
            console.log('Emiting: ', this.fileId)
            this.$emit("select", this.fileId)
        },
        closeFile() {
            console.log('Closing file: ', this.fileId)
            this.$emit("close", this.fileId)
        },


        openContextMenu(event) {
            event.preventDefault();
            
            const clientX = event.clientX;
            const clientY = event.clientY;

            this.$emit("ctxm", {
                clientX,
                clientY,
                fileId: this.fileId
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .file {
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
            background-color: rgb(32, 32, 32);
            cursor: pointer;
        }
        
        &--selected {
            color: rgb(255, 255, 255);
            background-color: rgb(32, 32, 32);
        }

        &__icon {
            color: rgb(173, 173, 173);
            width: 13px;
            height: 18px;
            align-self: center;
        }

        &__name {
            font-family: 'Rubik', sans-serif;
            padding: 0;
            margin: 0;
            font-size: 14px;
            align-self: center;
            margin-left: 5px;
        }

        &__close {
            margin-left: 7px;
            color: rgb(165, 165, 165);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;

            &:hover {
                color: rgb(255, 255, 255);
                border-radius: 50%;
                background-color: rgba(103, 103, 103, 0.564);
                cursor: pointer;
            }

            &--icon {
                align-self: center;
            }
        }
    }
</style>