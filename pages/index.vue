<template>
    <NuxtLayout name="classic">
        <div class="home">
            <div class="home__container">
                <h1 class="home__container--title">Welcome to Simple Editor</h1>

                <div class="home__container--actions">
                    <div class="home__container--actions--button">
                        <svg class="home__container--actions--button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                        <span class="home__container--actions--button__text">New file</span>
                    </div>
                    <div class="home__container--actions--button">
                        <svg class="home__container--actions--button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        <span class="home__container--actions--button__text">Open file</span>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
    mounted: function () {
        this.$notify('INFO', 'Technical Preview Version', 'This is the technical preview of Simple Editor! If you find a bug then please report on github!', [{
            title: 'Open GitHub',
            callback: function () {
                location.href = "https://github.com/Vladimir-Urik/editor"
            }
        }], "technical-preview-notification")
    },
}
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;

        &__container {
            width: 500px;
            height: 200px;
            align-self: center;

            &--title {
                text-align: center;
                color: white;
                font-weight: 300;
                text-shadow: 1px 1px 3px rgb(0, 0, 0);
            }

            &--actions {
                width: 100px;
                margin: 0 auto;
                align-self: flex-end;
                display: flex;
                flex-direction: column;
                gap: 10px;

                &--button {
                    display: flex;
                    cursor: pointer;
                    color: rgb(196, 196, 196);

                    &:hover {
                        color: rgb(250, 250, 250);
                    }

                    &__icon {
                        width: 20px;
                        height: 20px;
                        margin-right: 5px;
                    }

                    &__text {
                        align-self: center;
                        font-size: 16px;
                        font-weight: 300;
                        text-shadow: 1px 1px 3px rgb(0, 0, 0);
                    }
                }
            }
        }
    }
</style>