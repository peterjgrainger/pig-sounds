import { Context, dialog, IntentRequest, LaunchRequest, request, RequestBody, response, session} from "alexa-app/types";
import test from 'ava';
import {PigSounds} from './pig-sounds';

for (let index = 0; index < 1; index++) {
    test((t) => {
        const helloWorld = new PigSounds();

        t.plan(6);

        const testRequest = {
            confirmationStatus: '',
            context: {} as Context,
            data: {} as RequestBody,
            getDialog: () => ({} as dialog),
            getSession: () => ({} as session),
            hasSession: () => true,
            isAudioPlayer: () => false,
            isConfirmed: () => true,
            isPlaybackController: () => false,
            session: () => false,
            slot: () => 'person name',
            slots: {},
            type: () => "LaunchRequest",
        } as request;

        const testResponse = {
            say: (input) => {
                // tslint:disable-next-line:max-line-length
                t.regex(input, /<speak><audio src='https:\/\/s3.eu-west-2.amazonaws.com\/pig-sounds\/[a-zA-Z0-9\-_]+.mp3'\/><\/speak>/);

                return testResponse;
            },
            shouldEndSession: (shouldEnd) => {
                t.true(shouldEnd);
                return testResponse;
            },
        } as response;

        t.is(helloWorld.action(testRequest, testResponse), testResponse);

        t.is(helloWorld.name, 'PigSound');
        t.deepEqual(helloWorld.schema().slots, {});
        t.deepEqual(helloWorld.schema().utterances,
                    [
                        'give me a sound',
                        'to say hello',
                        'say hello',
                        'talk to me',
                        'to talk to me',
                        'to talk',
                    ]);

    });

}
