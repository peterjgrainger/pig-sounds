import { dialog, DialogState, intent } from 'alexa-app/types';
import test from 'ava';
import { PublishingInformation } from '../publishing-information';
import { Slot } from '../skill-definition/models/slots/slot';
import { slotTypes } from '../skill-definition/models/slots/slot-types';
import { interactionModel } from './interaction-model';

const intents = [
        {
            dialog: {} as dialog,
            dialogState: {} as DialogState,
            isDelegatedDialog: () => true,
            name: 'testIntent',
            slots: { name: 'NAME' },
            utterances: [
                'I would like to say hello to the world and {-|name}',
                'Can I say hello to {you|me|them}',
            ],
        } as intent,
    ];

test((t) => {
    const model = interactionModel(intents, PublishingInformation);
    t.is(!!model, true);

    const util = require('util');

    t.deepEqual(model.interactionModel.languageModel.intents,
                [{
                    name: 'testIntent',
                    samples: [
                        'I would like to say hello to the world and {name}',
                        'Can I say hello to you',
                        'Can I say hello to me',
                        'Can I say hello to them',
                    ],
                    slots: [{name: 'name',
                            type: 'NAME'}],
                }]);

    t.is(model.interactionModel.languageModel.invocationName,
        PublishingInformation.NAME);
    t.deepEqual(model.interactionModel.languageModel.types, []);

});
