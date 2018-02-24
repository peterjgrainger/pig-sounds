import * as Chance from "chance";
import { pigSoundsList } from "./pig-sound-list";

const s3location = 'https://s3.eu-west-2.amazonaws.com/pig-sounds';

/**
 * Return the pig sound
 */
export function getPigSound() {
    const chance = new Chance();
    const pigIndex = chance.integer({min: 0, max: pigSoundsList.length - 1});
    return `${s3location}/${pigSoundsList[pigIndex]}.mp3`;
}
