<template>
    <div class="input">
        <p class="input__label">{{ label }}</p>
        <input class="input__input" :type="type" v-model="value" :placeholder="placeholder || ''" />
        <p class="input__error" v-if="error !== undefined">{{error}}</p>
    </div>
</template>

<script>
    export default {
        name: "Input",
        props: {
            type: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: false
            },
            label: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: false
            },
            error: {
                type: String,
                required: false
            }
        },
        methods: {
            closeModal() {
                this.$emit("close")
            },
            okModal() {
                this.$emit("ok")
            },
        }
    }
</script>

<style lang="scss" scoped>
    .input {
    
        &__label {
            display: block;
            margin-bottom: 5px;
            color: rgb(192, 192, 192);
            font-size: 13px;
            margin-left: 2px;
        }

        &__input {
            width: calc(100% - 20px);
            border: solid 1px rgb(62, 62, 62);
            background-color: rgb(30, 30, 30);
            color: white;
            padding: 5px 10px;
            font-size: 0.8rem;
            transition: all 0.2s;
            outline: none;
            border-radius: 3px;

            &:focus {
                outline: none;
                border: solid 1px rgb(115, 115, 115);
                background-color: rgb(21, 21, 21);
            }
        }

        &__error {
            color: rgb(253, 80, 80);
            font-size: 14px;
            margin: 0;
            margin-top: 3px;

            &::before {
                content: "↵";
                transform: rotateY(180deg);
                display: inline-block;
                color: red;
                margin-right: 4px;
                margin-left: 4px;
                font-weight: 800;
            }
        }
    }
</style>