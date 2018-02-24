import { request, response } from "alexa-app/types";
import * as SsmlBuilder from "ssml-builder";
import { Intent } from "../../models/intents/intent";
import { IntentDefinition } from "../../models/intents/intent-definition";
import { Slot } from "../../models/slots/slot";
import { SlotType } from "../../models/slots/slot-type";
import { slotTypes } from "../../models/slots/slot-types";
import { getPigSound } from "../helpers/get-pig-sound";

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
    public action = (alexaRequest: request, alexaResponse: response) => {
        const speech = new SsmlBuilder();
        const output = speech.audio(getPigSound()).ssml();

        return alexaResponse.say(output)
                    .shouldEndSession(true);
    }
}
