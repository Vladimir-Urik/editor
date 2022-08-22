<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

  body {
    font-family: 'Rubik', sans-serif;
    padding: 0;
    margin: 0;
  }
</style>

<script>
import { registerAllCommands } from './plugins/commands/default';

  export default {
    mounted: function () {
      this.$notify('INFO', 'Technical Preview Version', 'This is the technical preview of Simple Editor! If you find a bug then please report on github!', [{
            title: 'Open GitHub',
            callback: function () {
                location.href = "https://github.com/Vladimir-Urik/editor"
            }
      }], "technical-preview-notification")

        registerAllCommands(this.$registerCommand)
    }

  }
</script>