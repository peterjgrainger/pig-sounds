import { request, response } from "alexa-app/types";
import * as Chance from "chance";
import * as ssmlBuilder from "ssml-builder";
import { Intent } from "../../models/intents/intent";
import { IntentDefinition } from "../../models/intents/intent-definition";
import { Slot } from "../../models/slots/slot";
import { SlotType } from "../../models/slots/slot-type";
import { slotTypes } from "../../models/slots/slot-types";
import { pigSoundsList } from "./pig-sound-list";

const s3location = 'https://s3.eu-west-2.amazonaws.com/pig-sounds';

/**
 * Example Intent definition showing slots.
 *
 * @class HelloWorld
 */
export class PigSounds extends Intent implements IntentDefinition {
    // internal name of this intent
    public name = 'PigSound';
    // phrases that will start his intent
    public utterances = [
        'give me a sound',
        'to say hello',
        'say hello',
        'talk to me',
        'to talk to me',
        'to talk',
    ];
    // Dynamic words in the request
    public slots = [];
    public action = (alexaRequest: request, alexaResponse: response) =>
        alexaResponse.say(getSSML())
                    .shouldEndSession(true)
}

/**
 * Return the pig sound
 */
function getSSML() {
    const speech = new ssmlBuilder();
    const chance = new Chance();
    const pigIndex = chance.integer({min: 0, max: pigSoundsList.length - 1});
    return speech.audio(`${s3location}/${pigSoundsList[pigIndex]}.mp3`).ssml();
}
