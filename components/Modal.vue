<template>
    <div v-if="show" class="modal-box">
        <div class="modal">
            <div class="modal__header">{{ title }}</div>
            <div class="modal__body">
                <slot />
            </div>
            <div class="modal__footer">
                <button class="modal__footer--button__close" @click="closeModal">{{ closeButton }}</button>
                <button class="modal__footer--button__ok" @click="okModal">{{ okButton }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            show: {
                type: Boolean,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            okButton: {
                type: String,
                required: true
            },
            closeButton: {
                type: String,
                required: true
            },
        },
        methods: {
            closeModal() {
                this.$emit("close")
            },
            okModal() {
                this.$emit("ok")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-null {
        opacity: 0;
        display: none;
    }

    .modal-box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;

        animation: fadeIn 0.2s forwards;
    }

    .modal {
        width: 400px;
        background-color: rgb(39, 39, 39);
        padding: 15px;
        border-radius: 5px;

        &__header {
            color: rgb(199, 199, 199);
            font-size: 1.2rem;
        }

        &__body {
            margin-top: 15px;
            margin-bottom: 15px;
        }

        &__footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;

            &--button {
                &__ok {
                    color: rgb(255, 255, 255);
                    background-color: rgb(0, 122, 204);
                    padding: 5px 10px;
                    border-radius: 5px;
                    transition: all 0.2s;
                    margin-left: 5px;
                    border: none;
                    outline: none;

                    &:hover {
                        background-color: rgb(3, 99, 195);
                        cursor: pointer;
                    }
                }

                &__close {
                    color: rgb(255, 255, 255);
                    background-color: rgb(77, 73, 73);
                    padding: 5px 10px;
                    border-radius: 5px;
                    transition: all 0.2s;
                    margin-left: 5px;
                    border: none;
                    outline: none;

                    &:hover {
                        background-color: rgb(60, 57, 57);
                        cursor: pointer;
                    }
                }
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }
</style>