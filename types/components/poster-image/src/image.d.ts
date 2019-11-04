import { ElementHandler } from '../../../helper/type';
declare type ImageConfig = {
    width?: number | 'auto';
    height?: number | 'auto';
    offsetX?: number;
    offsetY?: number;
    src: string;
    cors?: boolean;
};
declare const drawImage: ElementHandler<ImageConfig>;
export default drawImage;
