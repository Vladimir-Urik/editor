export interface Command {
    name: string;
    description: string;
    callback: () => void;
}