import { NavigationLevel } from './NavigationLevel';
import './TreeNavigation.css';
import * as React from 'react';

export interface INavigationItem {
    id: number;
    label: string;
    url: string;
    parentId?: number;
    order: number;
    icon?: string;
}

export interface ITreeNavigationProps {
    navigationItems: INavigationItem[];
    changeNavigation: (navigationItems: INavigationItem[]) => void;
    editMode: boolean;
    defaultIcon?: string;
}

export const TreeNavigation: React.FunctionComponent<ITreeNavigationProps> = (props: React.PropsWithChildren<ITreeNavigationProps>) => {

    const [items, setItems] = React.useState<INavigationItem[]>(props.navigationItems);

    React.useEffect(() => {
        const orderedItems = props.navigationItems.sort((a, b) => a.order - b.order);
        setItems(orderedItems);
    }, [props.navigationItems]);

    return (
        <div className="TreeNavigation">
            <NavigationLevel 
                navigationItems={items} 
                changeNavigation={(items:INavigationItem[]) => props.changeNavigation(items)}
                editMode={props.editMode}
                parentId={null}
                defaultIcon={props.defaultIcon}
            />
        </div>
    );
};