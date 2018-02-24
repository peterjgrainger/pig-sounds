import { Request, response } from "alexa-app/types";
import test from 'ava';
import {instance, mock, verify} from 'ts-mockito';
import {launch} from './launch';

test((t) => {

    t.plan(3);

    const testRequest = {};

    const testResponse = {
        say: (input) => {
            // tslint:disable-next-line:max-line-length
            t.regex(input, /<speak>Hi, I&apos;m piggy wiggy <audio src='https:\/\/s3.eu-west-2.amazonaws.com\/pig-sounds\/[a-zA-Z0-9\-_]+.mp3'\/> say, talk to me or, say hello, to get started<\/speak>/);
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.false(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(launch(testRequest, testResponse), testResponse);

});
