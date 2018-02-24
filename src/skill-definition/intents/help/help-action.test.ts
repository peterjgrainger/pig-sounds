import { Request, request, response } from "alexa-app/types";
import test from 'ava';
import {instance, mock, verify} from 'ts-mockito';
import {helpAction} from './help-action';

test((t) => {

    t.plan(3);

    const testRequest = {} as request;
    const testResponse = {
        say: (input) => {
            t.is(input, 'Say, talk to me or, say hello, to get started');
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.false(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(helpAction(testRequest, testResponse), testResponse);

});
