import type {File} from './file';

export const useFiles = () => useState('files', () => [
    {
        'name': 'Home.tsx',
        'id': '325631751012',
        'type': 'typescript',
        'path': 'local/Home.tsx'
    },
    {
        'name': 'Navbar.tsx',
        'id': '325631156312',
        'type': 'typescript',
        'path': 'local/Navbar.tsx'
    },
    {
        'name': 'Sidebar.tsx',
        'id': '325631531012',
        'type': 'typescript',
        'path': 'local/Sidebar.tsx'
    },
    {
        'name': 'Joke.tsx',
        'id': '325631276012',
        'type': 'typescript',
        'path': 'local/Joke.tsx'
    }
])

export const useModals = () => useState('modal', () => {
    return {
        'name': ''
    }
});