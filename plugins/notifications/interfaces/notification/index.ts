export interface Notification {
    id: string,
    date: Date,
    type: 'WARN' | 'ERROR' | 'INFO',
    title: string,
    description: string,
    actions?: {
        title: string,
        callback: void
    }[]
}