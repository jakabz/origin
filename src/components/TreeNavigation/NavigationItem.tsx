import * as React from 'react';
import './TreeNavigation.css';
import { INavigationItem } from './TreeNavigation';
import { NavigationItemToolbar } from './NavigationItemToolbar';
import { ActionButton, Icon, Link, Stack } from '@fluentui/react';
import { NavigationLevel } from './NavigationLevel';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

export interface INavigationItemProps {
    item: INavigationItem;
    navigationItems: INavigationItem[];
    changeNavigation: (items: INavigationItem[]) => void;
    editMode: boolean;
    defaultIcon?: string;
}

export const NavigationItem: React.FunctionComponent<INavigationItemProps> = (props: React.PropsWithChildren<INavigationItemProps>) => {

    const [navigationItems, setNavigationItems] = React.useState<INavigationItem[]>(props.navigationItems);
    const [item, setItem] = React.useState<INavigationItem>(props.item);
    const [isChildrens, setIsChildrens] = React.useState<boolean>(false);
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    React.useEffect(() => {
        setNavigationItems(props.navigationItems);
        setItem(props.item);
        setIsChildrens(props.navigationItems.filter(item => item.parentId === props.item.id).length > 0);
    }, [props.navigationItems, props.item]);

    return (
        <>
            <Stack horizontal verticalAlign='center' className="NavigationItem">
                <Stack horizontal verticalAlign='center' className="NavigationItemInner">
                    {
                        isChildrens ? (
                            <ActionButton
                                iconProps={{ iconName: isExpanded ? 'ChevronDown' : 'ChevronRight' }}
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="NavigationItemExpandButton"
                            />
                        ) : (
                            <span style={{ width: 32, display: 'inline-block' }}></span>
                        )
                    }
                    {
                        item.icon ? (
                            <Icon iconName={item.icon} className="NavigationItemIcon" />
                        ) : (
                            <Icon iconName={props.defaultIcon ? props.defaultIcon : 'TextDocument'} className="NavigationItemIcon" />
                        )
                    }
                    <Link onClick={() => window.location.href = props.item.url} className="NavigationItemLink">{props.item.label}</Link>
                </Stack>
                {
                    props.editMode &&
                    <NavigationItemToolbar
                        item={item}
                        navigationItems={navigationItems}
                        changeNavigation={props.changeNavigation}
                    />
                }
            </Stack>
            {
                isExpanded && isChildrens && (
                    <NavigationLevel
                        navigationItems={navigationItems}
                        changeNavigation={props.changeNavigation}
                        editMode={props.editMode}
                        parentId={item.id}
                        defaultIcon={props.defaultIcon}
                    />
                )
            }
        </>
    );
};