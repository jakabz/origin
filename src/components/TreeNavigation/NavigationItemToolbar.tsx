import * as React from 'react';
import './TreeNavigation.css';
import { INavigationItem } from './TreeNavigation';
import { ActionButton, Stack } from '@fluentui/react';


export interface INavigationItemToolbarProps {
    item: INavigationItem;
    navigationItems: INavigationItem[];
    changeNavigation: (items: INavigationItem[]) => void;
}

export const NavigationItemToolbar: React.FunctionComponent<INavigationItemToolbarProps> = (props: React.PropsWithChildren<INavigationItemToolbarProps>) => {
  return (
    <Stack horizontal className="NavigationItemToolbar">
        <ActionButton iconProps={{iconName: 'Edit'}} title='Edit' className='NavigationItemToolbarButton' />
        <ActionButton iconProps={{iconName: 'ChevronUp'}} title='Move up' className='NavigationItemToolbarButton' />
        <ActionButton iconProps={{iconName: 'ChevronDown'}} title='Move down' className='NavigationItemToolbarButton' />
        <ActionButton iconProps={{iconName: 'Delete'}} title="Delete" className='NavigationItemToolbarButton' />
    </Stack>
  );
};