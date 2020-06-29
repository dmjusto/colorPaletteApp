

import Chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalettes(starterPalette){
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    for(const level of levels){
        newPalette.colors[level] = [];
    }

    for(const color of starterPalette.colors){
        let scale = generateScale(color.color, 10).reverse();
        for(const i in scale){
            newPalette.colors[levels[i]].push({
                name:  `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: Chroma(scale[i]).css(),
                rgba: Chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ', 1.0)')
            })
        }
    }

    return newPalette;
}

function getRange(hexColor){
    const endColor = "#fff";
    return [
        Chroma(hexColor).darken(1.4).hex(),
        hexColor,
        endColor
    ]
}

function generateScale(hexColor, numColors){
    return Chroma.scale(getRange(hexColor)).mode("lab").colors(numColors);
}

export {generatePalettes};