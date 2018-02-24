import { request, response } from "alexa-app/types";

/**
 * Required
 *
 * @param request
 * @param response
 */
export function helpAction(alexaRequest: request, alexaResponse: response) {
    return alexaResponse.say('Say, talk to me or, say hello, to get started').shouldEndSession(false);
}
