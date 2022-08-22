<template>
   <div class="editor">
    <div class="editor__numbers">
        <span class="editor__number" v-for="(line, index) in content.split('\n')" :id="'number-'+ index" @click="changeLine(index)">{{index+1}}</span>
    </div>
    <div class="editor__code">
        <div class="editor__code--line" @click="launchEditor" v-for="(line, index) in content.split('\n')" :id="'line-'+ index" :empty="line.length < 1">{{line}}</div>
    </div>
   </div>

   <textarea id="editor" rows="1" class="editor__code--editor" :style="'top: '+ y +'px; left: '+ x +'px;'"></textarea>
</template>

<script>
export default {
    name: "Editor",
    props: {
        content: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    methods: {
        launchEditor(event) {
            const line = event.target;
            const lineId = line.id.split('-')[1];

            this.changeLine(lineId);

            // console.log(line, event)
            // this.x = event.x;
            // this.y = line.offsetTop;
            // document.getElementById('editor').focus();
        },

        changeLine(lineId) {
            const elements = document.getElementsByClassName('editor__number__active');
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('editor__number__active');
            }

            const number = document.getElementById('number-' + lineId);
            number.classList.add('editor__number__active');

            const line = document.getElementById('line-' + lineId);

            const editableLines = document.querySelectorAll('.editor__code--line__focused');
            editableLines.forEach(line => {
                line.classList.remove('editor__code--line__focused');
            });


            line.classList.add('editor__code--line__focused');
        }
    },
    mounted() {
        const lastElement = document.querySelector('.editor__code').lastElementChild;
        const lastElementId = lastElement.id.split('-')[1];

        this.changeLine(lastElementId);

        const lastElementHeight = lastElement.offsetHeight;
        const width = lastElement.offsetWidth;
    }

}
</script>

<style lang="scss" scoped>
    .editor {
        background-color: rgb(42, 42, 42);
        width: calc(100% - 20px);
        max-height: calc(100% - 20px - 69px);
        padding: 10px;
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;

        &::-webkit-scrollbar {
          width: 7px;
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

        &__numbers {
            width: fit-content;
            border-right: 1px solid gray;
            height: 100%;
        }

        &__number {
            color: rgb(155, 155, 155);
            font-size: 14px;
            margin-right: 4px;
            margin-left: 2px;
            display: block;
            padding: 2px;
            cursor: pointer;

            &__active {
                color: rgb(222, 222, 222);
                font-weight: bold;
            }
        }

        &__code {
            margin-left: 15px;
            width: 100%;
            outline: none;
            border: none;

            display: flex;
            flex-direction: column;

            overflow: visible;

            &--line {
                display: block;
                color: rgb(215, 215, 215);
                font-size: 14px;
                line-break: normal;
                padding: 2px;

                &__focused {
                    outline: none;
                    border: none;
                    background-color: rgb(64, 64, 64);
                    color: white;
                    border-radius: 3px;
                }
            }

            &--line:empty {
                min-height: 16.67px;
                width: 100%;
            }

            &--editor {
                position: absolute;
                outline: none;
                background-color: transparent;
                color: white;
                font-size: 14px;
                border: none;
                resize: none;
                width: 4px;
            }
        }
    }
</style>