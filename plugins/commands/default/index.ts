import { generateFiftyRandomFiles } from "./generate-50-random-files"

export function registerAllCommands($registerCommand: any) {
    $registerCommand(generateFiftyRandomFiles);
}