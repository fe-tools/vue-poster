import { ElementHandler } from '../../canvas';
declare type ImageConfig = {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    src: string;
    cors: boolean;
};
declare const drawImage: ElementHandler<ImageConfig>;
export default drawImage;
