import { Notification } from "./interfaces"
import { notifications } from "../../composables/states"

export default defineNuxtPlugin(() => {
    return {
      provide: {
        notify: (
            type: 'WARN' | 'ERROR' | 'INFO',
            title: string,
            description: string,
            actions?: {
                title: string,
                callback: void
            }[],
            id?: string) => {
                const notification: Notification = {
                    type,
                    title,
                    description,
                    actions,
                    id: id || Math.random().toString(36).substr(2),
                    date: new Date()
                }

                const data = notifications.data;
                if(data.find(d => d.id == notification.id)) {
                    return;
                }

                notifications.addNotification(notification);
            }
        }
    }
  })