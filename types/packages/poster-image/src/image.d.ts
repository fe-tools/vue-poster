import { ElementHandler } from '../../../utils/type';
declare type ImageConfig = {
    width?: number;
    height?: number;
    offsetX: number;
    offsetY: number;
    src: string;
    cors?: boolean;
};
declare const drawImage: ElementHandler<ImageConfig>;
export default drawImage;
