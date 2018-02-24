import { Request, response } from "alexa-app/types";
import * as SSMLBuilder from "ssml-builder";
import { Z_BEST_SPEED } from "zlib";
import { getPigSound } from "../intents/helpers/get-pig-sound";

/**
 * Required alexa intent.  Only change the wording after
 * ended in the response, but you don't need to.
 *
 * @param request alexa-app request type
 * @param response alexa-app response type
 */
export function launch(request: Request, alexaResponse: response) {
        const speech = new SSMLBuilder();
        const output = speech.say('Hi, I\'m piggy wiggy')
              .audio(getPigSound())
              .say('say, talk to me or, say hello, to get started').ssml();
        return alexaResponse.say(output).shouldEndSession(false);
}
