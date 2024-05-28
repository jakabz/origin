import * as React from 'react';
import './TreeNavigation.css';
import { INavigationItem } from './TreeNavigation';
import { NavigationItem } from './NavigationItem';

export interface INavigationLevelProps {
    navigationItems: INavigationItem[];
    changeNavigation: (navigationItems: INavigationItem[]) => void;
    editMode: boolean;
    parentId: number | null;
    defaultIcon?: string;
}

export const NavigationLevel: React.FunctionComponent<INavigationLevelProps> = (props: React.PropsWithChildren<INavigationLevelProps>) => {

    const [items, setItems] = React.useState<INavigationItem[]>(props.navigationItems);
    const [levelItems, setLevelItems] = React.useState<INavigationItem[]>([]);


    React.useEffect(() => {
        setItems(props.navigationItems);
        if (props.parentId) {
            setLevelItems(props.navigationItems.filter(item => item.parentId === props.parentId));
        } else {
            setLevelItems(props.navigationItems.filter(item => !item.parentId));
        }
    }, [props.navigationItems, props.parentId]);

    if (levelItems.length === 0) {
        return null;
    } else {
        return (
            <ul className='NavigationLevel'>
                {levelItems.map(item => {
                    return (
                        <li key={item.id}>
                            <NavigationItem
                                item={item}
                                navigationItems={items}
                                changeNavigation={(items: INavigationItem[]) => props.changeNavigation(items)}
                                editMode={props.editMode}
                                defaultIcon={props.defaultIcon}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
};