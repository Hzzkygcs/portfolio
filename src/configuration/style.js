/*
Pendapat:
Ridjky Tegar Perkasa:
    - Paling bagus gradient4.
    - Yang kedua paling bagus gradient1
Adel:
    - Gradient 4 lebih bagus daripada gradient 1
    - Gradient 1 lebih bagus daripada gradient 2
OT:
    - Gradient 1 lebih bagus daripada gradient 2
Tantra:
    - Gradient 2 lebih bagus daripada gradient 1, tapi gradient 1 juga cakep2 aja
Tara:
    - Gradient 4 lebih bagus daripada gradient 1
    - Gradient 1 lebih bagus daripada gradient 2
Faiz:
    - Gradient 4 lebih bagus daripada gradient 1
    - Gradient 1 lebih bagus daripada gradient 2
Bachtiar:
    - Gradient 4 bagus
    - Ranking keduanya gradient 1
Idris:
    - Gradient 1 paling bagus
Zain:
    - Gradient 4 bagus
    - Gradient 2 dan 3 aneh
    - Gradient 1 juga aneh
Akmal:
    - prefer gradient 1 instead of gradient 4
Bisma:
    - kalau ga gradient 1 ya gradient 4
    - lebih prefer gradient 1 dibandingkan gradient 4
 */
import {generateColorGradientAsHex} from "../core/colors/ColorGradient.js";

export const gradients =  {
    gradient1:  // immanuel - 1.pdf
        () => generateColorGradientAsHex([0x1C, 0x1F, 0x2F], [0x31, 0x36, 0x52], n),
    gradient2:    // immanuel - 2.pdf
        (n) => generateColorGradientAsHex([0x19, 0x24, 0x29], [0x29, 0x39, 0x42], n),
    gradient3:  // immanuel - 3.pdf
        (n) => generateColorGradientAsHex([0x13, 0x20, 0x20], [0x2a, 0x45, 0x46], n),
    gradient4:   // Immanuel - 4.pdf
        (n) => generateColorGradientAsHex(
        [0x10, 0x13, 0x23], [0x1d, 0x21, 0x3f], n)
    ,
};
export const choosenGradientTheme = gradients.gradient4;


export const gradientSpreadPercentage = 10;

