export interface File {
    name: string;
    id: string;
    type: string;
    path: string;
    data: any;
}

export function createFile(name: string, id: string, type: string, path: string, data: any): File {
    return {
        name,
        id,
        type,
        path,
        data
    };
}

export function createNewFile(name: string, path: string): File {
    const rand = () => {
        return Math.random().toString(36).substr(2);
    };

    const id = rand() + rand();
    const type = name.split('.')[1];

    return createFile(name, id, type, path, "");
}

export function loadFile(name: string, path: string, data: any): File {
    const rand = () => {
        return Math.random().toString(36).substr(2);
    };

    const id = rand() + rand();
    const type = name.split('.')[1];

    return createFile(name, id, type, path, data);
}