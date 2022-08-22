import { Command } from "../../interfaces";

export const generateFiftyRandomFiles: Command = {
    name: 'generate 50 random files',
    description: 'Automaticlly generate 50 files for testing!',
    callback: function() {
        const rand = () => {
            return Math.random().toString(36).substr(2);
        };

        for(var i = 0; i <  50; i++) {
            const extensions = ['yml', 'json', 'txt', 'php', 'java', 'bat', 'sh'];
            const name = rand() +"." + (extensions[Math.floor(Math.random() * extensions.length)]);

            const parsedFile = loadFile(name, "local/"+ name, rand() + rand() + rand() + rand())
            files.addFile(parsedFile);
        }

        this.$notify('INFO', '50 Files!!!', '50 Files for you (<3) are generated!')
    }
}