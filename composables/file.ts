export interface File {
    name: string;
    id: string;
    type: string;
    path: string;
}

export function createFile(name: string, id: string, type: string, path: string): File {
    return {
        name,
        id,
        type,
        path
    };
}