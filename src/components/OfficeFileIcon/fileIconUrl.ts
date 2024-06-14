export enum IIconType {
  png = "png",
  svg = "svg",
}

export enum IIconSize {
  xs = 16,
  s = 20,
  m = 24,
  l = 48,
  xl = 96,
}

export const getIconUrl = (
  fileName: string,
  size?: IIconSize,
  iconType?: IIconType
): string => {
  const ext = fileName.split(".").pop();
  const lowerExt = ext ? ext.toLowerCase() : "";
  const ICON_CDN_URL = `https://static2.sharepointonline.com/files/fabric/assets/item-types`;
  const ICON_SIZE = size ? size : IIconSize.s;
  const FILE_TYPE = iconType ? iconType : IIconType.png;
  switch (lowerExt) {
    case "doc":
      return `${ICON_CDN_URL}/${ICON_SIZE}/docx.${FILE_TYPE}`;
    case "docx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/docx.${FILE_TYPE}`;
    case "docm":
      return `${ICON_CDN_URL}/${ICON_SIZE}/docx.${FILE_TYPE}`;
    case "rtf":
      return `${ICON_CDN_URL}/${ICON_SIZE}/rtf.${FILE_TYPE}`;
    case "html":
      return `${ICON_CDN_URL}/${ICON_SIZE}/html.${FILE_TYPE}`;
    case "aspx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/html.${FILE_TYPE}`;
    case "xml":
      return `${ICON_CDN_URL}/${ICON_SIZE}/xml.${FILE_TYPE}`;
    case "xlsx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/xlsx.${FILE_TYPE}`;
    case "xls":
      return `${ICON_CDN_URL}/${ICON_SIZE}/xlsx.${FILE_TYPE}`;
    case "csv":
      return `${ICON_CDN_URL}/${ICON_SIZE}/csv.${FILE_TYPE}`;
    case "pptx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/pptx.${FILE_TYPE}`;
    case "potx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/potx.${FILE_TYPE}`;
    case "ppsx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/ppsx.${FILE_TYPE}`;
    case "vsdx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/vsdx.${FILE_TYPE}`;
    case "vssx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/vssx.${FILE_TYPE}`;
    case "vstx":
      return `${ICON_CDN_URL}/${ICON_SIZE}/vstx.${FILE_TYPE}`;
    case "pdf":
      return `${ICON_CDN_URL}/${ICON_SIZE}/pdf.${FILE_TYPE}`;
    case "txt":
      return `${ICON_CDN_URL}/${ICON_SIZE}/txt.${FILE_TYPE}`;
    default:
      return `${ICON_CDN_URL}/${ICON_SIZE}/genericfile.${FILE_TYPE}`;
  }
};
