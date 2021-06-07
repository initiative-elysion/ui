import colors, { IPalette } from './colors';
import fonts, { IFonts } from './fonts';
import radii, { IRadii } from './radii';
import size, { ISizes } from './size';
import zIndices, { IZIndices } from './zIndices';
import space, { ISpacing } from './space';

export interface IDesignTokens {
    colors: IPalette
    fonts: IFonts
    radii: IRadii
    size: ISizes
    zIndices: IZIndices
    space: ISpacing
}

const designTokens: IDesignTokens = {
    colors,
    fonts,
    radii,
    size,
    zIndices,
    space,
};

export default designTokens;