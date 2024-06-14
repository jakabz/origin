import { Image, ImageFit } from '@fluentui/react';
import * as React from 'react';
import { getIconUrl, IIconSize, IIconType } from './fileIconUrl';

export interface IOfficeFileIconProps {
    fileName: string;
    imageType: IIconType;
    imageSize: IIconSize;
    className?: string;
}

export const OfficeFileIcon: React.FunctionComponent<IOfficeFileIconProps> = (props: React.PropsWithChildren<IOfficeFileIconProps>) => {
  return (
    <Image src={getIconUrl(props.fileName, props.imageSize, props.imageType)} imageFit={ImageFit.cover} className={props.className} />
  );
};