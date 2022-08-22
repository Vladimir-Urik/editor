import type { File } from './file';

export const useFiles = () => useState<File[]>('files', () => [])

export const useModals = () => useState('modal', () => {
    return {
        'name': ''
    }
});