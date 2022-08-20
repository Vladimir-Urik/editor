<template>
   <div class="path">
        <div class="path__data">
            <span v-for="(p, index) in path.split('/')" class="path__item">
                <svg class="path__item--directory" v-if="index < path.split('/').length - 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                {{p}}
                 <svg class="path__item--icon" v-if="index < path.split('/').length - 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
        </div>
   </div>
</template>

<script>
export default {
    name: "FilePath",
    props: {
        path: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
    .path {
        width: 100%;
        background-color: rgb(16, 16, 16);
        padding: 5px 0;

        &__data {
            margin-left: 15px;
            display: flex;
        }

        &__item {
            color: rgb(192, 192, 192);
            font-size: 13px;
            align-self: center;
            display: flex;
            cursor: pointer;

            &:hover {
                color: rgb(255, 255, 255);
            }

            &--icon {
                height: 13px;
                align-self: center;
            }

            &--directory {
                height: 13px;
                align-self: center;
                margin-right: 5px;
            }
        }
    }
</style>