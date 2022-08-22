import type { File } from './file';

export const files = reactive({
    data: [],
    
    addFile(file: File) {
        this.data.push(file);
    }
});

export const useModals = () => useState('modal', () => {
    return {
        'name': ''
    }
});