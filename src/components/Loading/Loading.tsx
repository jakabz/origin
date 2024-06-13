import { ISpinnerStyles, Spinner, Stack } from '@fluentui/react';
import * as React from 'react';

export interface ILoadingProps {
  visible: boolean;
  bgColor?: string;
  loadingString?: string;
  loadingStringColor?: string;
  loadingStringSize?: number;
  spinnerSize?: number;
  spinnerColor?: string;
}

export const Loading: React.FunctionComponent<ILoadingProps> = (props: React.PropsWithChildren<ILoadingProps>) => {
  
  const spinnerStyles:ISpinnerStyles = {
    circle: {
      borderTopColor: props.spinnerColor ? props.spinnerColor : 'rgba(0, 0, 0, 1)',
      width: props.spinnerSize ? `${props.spinnerSize}px` : '40px',
      height: props.spinnerSize ? `${props.spinnerSize}px` : '40px',
    },
    label: {
      color: props.loadingStringColor ? props.loadingStringColor : 'rgba(0, 0, 0, 1)',
      fontSize: props.loadingStringSize ? `${props.loadingStringSize}px` : '16px',
    },
  };
  
  switch (props.visible) {
    case true:
      return (
        <Stack 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 100000000,
                backgroundColor: props.bgColor ? props.bgColor : 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '150px',
                minWidth: '150px',
            }}
        >
            <Spinner 
              label={props.loadingString ? props.loadingString : 'Loading'}
              styles={spinnerStyles}
            />
        </Stack>
      );
    case false:
      return null;
  }
};