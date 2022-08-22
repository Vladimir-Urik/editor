import type { File } from './file';
import type { Notification } from '~~/plugins/notifications/interfaces';

export const files = reactive({
    data: [],

    addFile(file: File) {
        this.data.push(file);
    }
});

export const notifications = reactive({
    data: [],
    addNotification(notification: Notification) {
        this.data.push(notification);    
    },
    removeNotification(id: string) {
        this.data = this.data.filter(notification => notification.id !== id);
    }
})

export const useModals = () => useState('modal', () => {
    return {
        'name': ''
    }
});