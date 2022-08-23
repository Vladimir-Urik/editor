import type { File } from './file';
import type { Notification } from '~~/plugins/notifications/interfaces';
import { Command } from '~~/plugins/commands/interfaces';

export const files = reactive({
    data: [],

    addFile(file: File) {
        this.data.push(file);
    },
    setFiles(files: File[]) {
        this.data = files;
    },
    removeFile(id: string) {
        this.data = this.data.filter(file => file.id !== id);
    },
    getFile(id: string): File {
        return this.data.find(file => file.id === id);
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

export const commands = reactive({
    data: [],
    addCommand(cmd: Command) {
        const optionalCommand = this.data.find(c => c.name === cmd.name);
        if(optionalCommand) return;

        this.data.push(cmd);
    },
    removeCommand(cmd: string) {
        this.data = this.data.filter(c => c.name !== cmd);
    }
})

export const modals = reactive({
    name: '',
    showModal(name: string) {
        this.name = name;
    },
    hideModal(name: string) {
        this.name = '';
    }
});