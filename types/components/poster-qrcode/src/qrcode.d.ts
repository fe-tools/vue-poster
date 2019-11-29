import { ElementHandler } from '../../../canvas';
declare type QRCodeConfig = {
    width: number | 'auto';
    height: number | 'auto';
    offsetX: number;
    offsetY: number;
    margin: number;
    text: string;
};
declare const drawQRCode: ElementHandler<QRCodeConfig>;
export default drawQRCode;
