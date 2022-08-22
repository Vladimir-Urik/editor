import { commands } from "~~/composables/states";
import { Command } from "./interfaces";

export default defineNuxtPlugin(() => {
    return {
      provide: {
        registerCommand: (cmd: Command) => {
                commands.addCommand(cmd);
            }
        },
        unregisterCommand: (
            name: string
        ) => {
            commands.removeCommand(name);
        }
    }
  })