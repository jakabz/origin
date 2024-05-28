import { INavigationItem } from "./TreeNavigation";

export const NavigationItems: INavigationItem[] = [
    { id: 1, label: 'Item 1.1.2', url: '/item1.1.2', order: 2, parentId: 4 },
    { id: 2, label: 'Item 1', url: '/item1', order: 1, icon: 'OpenFolderHorizontal'},
    { id: 3, label: 'Item 2', url: '/item2', order: 2, icon: 'OpenFolderHorizontal'},
    { id: 4, label: 'Item 1.1', url: '/item1.1', order: 1, parentId: 2, icon: 'OpenFolderHorizontal'},
    { id: 5, label: 'Item 2.2.1', url: '/item2.2.1', order: 1, parentId: 9 },
    { id: 6, label: 'Item 2.1', url: '/item2.1', order: 1, parentId: 3 },
    { id: 7, label: 'Item 1.1.1', url: '/item1.1.1', order: 1, parentId: 4 },
    { id: 8, label: 'Item 1.2', url: '/item1.2', order: 2, parentId: 2 },
    { id: 9, label: 'Item 2.2', url: '/item2.2', order: 2, parentId: 3, icon: 'OpenFolderHorizontal' },
    { id: 10, label: 'Item 2.2.2', url: '/item2.2.2', order: 2, parentId: 9 },
];

export {};