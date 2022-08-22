<template>
    <div class="container" v-if="notifications.data.length > 0">
        <Notification v-for="notification in (notifications.data.length > 4 ? notifications.data.slice(notifications.data.length-4, notifications.data.length) : notifications.data)" :title="notification.title" :description="notification.description" :actions="notification.actions || []" :nType="notification.type" :id="notification.id" />
    </div>
</template>

<script>
export default {
    name: "NotificationsContainer",
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: 300px;
        position: absolute;
        z-index: 50;
        bottom: 1em;
        right: 1em;
        
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>