<template>
    <div class="notification__container">
        <p class="notification__title"><span :class="'notification__badge notification__badge--'+ nType">{{nType}}</span> {{title}}</p>
        <div class="notification__description">{{description}}</div>
        <div v-if="actions.length > 0" class="notification__actions">
            <p class="notification__actions--action" v-for="action in actions" @click="action.callback()">{{action.title}}</p>
        </div>
        <svg @click="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="notification__close"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </div>
</template>

<script>
export default {
    name: "Notification",
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        actions: {
            type: Array,
            required: true
        },
        nType: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        close() {
            notifications.removeNotification(this.id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .notification {
        &__container {
            width: calc(100% - 1em);
            background-color: rgb(31, 31, 31);
            border: 2px solid rgb(35, 35, 35);
            border-radius: 6px;
            padding: 0.5em;
        }

        &__badge {
            padding: 0.1em 0.3em;
            margin-right: 5px;
            border-radius: 3px;

            &--INFO {
                background-color: rgb(0, 21, 255);
                color: white;
            }

            &--WARN {
                background-color: rgb(255, 187, 0);
                color: white;
            }

            &--ERROR {
                background-color: rgb(255, 4, 0);
                color: white;
            }
        }

        &__title {
            padding: 0;
            margin: 0;
            font-size: 14px;
            color: rgb(205, 205, 205);
            font-weight: 500;
        }

        &__description {
            padding: 0;
            margin-top: 10px;
            font-size: 13px;
            color: rgb(171, 171, 171);
        }

        &__actions {
            margin-top: 5px;
            display: flex;
            flex-direction: row;
            gap: 10px;

            &--action {
                font-size: 10px;
                text-decoration: underline;
                color: aquamarine;
                cursor: pointer;
            }
        }

        &__close {
            color: rgb(105, 105, 105);
            width: 16px;
            height: 16px;

            position: absolute;
            top: 10px;
            right: 10px;

            &:hover {
                color: rgb(215, 215, 215);
                cursor: pointer;
            }
        }
    }
</style>