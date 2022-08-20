<template>
  <div class="contextmenu" v-click-outside="onClickOutside" :style="'top: ' + data.y +'px; left: '+ data.x +'px;'">
    <div class="contextmenu__button" @click="openFile">
      <svg class="contextmenu__button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> 
      Open
    </div>
    <div class="contextmenu__button" @click="downloadFile">
      <svg class="contextmenu__button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
      Download
    </div>
    <div class="contextmenu__button" @click="shareFile">
      <svg class="contextmenu__button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
      Share
    </div>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

export default {
    name: "FileContextMenu",
    directives: {
      clickOutside: vClickOutside.directive
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
      onClickOutside (event) {
        this.$emit('close')
      },

      openFile() {
        this.$emit('open', this.data.file.id)
      },

      downloadFile() {
        this.$emit('download', this.data.file.id)
      },

      shareFile() {
        this.$emit('share', this.data.file.id)
      }
    }
}
</script>

<style lang="scss" scoped>
    .contextmenu {
      position: absolute;
      width: 150px;
      background-color: rgb(36, 36, 36);
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      padding: 3px;
      gap: 3px;
      z-index: 90;

      &__button {
        padding: 10px;
        color: rgb(165, 165, 165);
        border: none;
        outline: none;
        text-align: left;
        background-color: transparent;
        border-radius: 5px;
        transition: all 0.2s;
        font-size: 14px;
        display: flex;

        &:hover {
          background-color: rgba(21, 21, 21, 0.342);
          cursor: pointer;
        }

        &__icon {
          margin-right: 10px;
          width: 14px;
          height: 14px;
          align-self: center;
        }
      }
    }
</style>
