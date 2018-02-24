import test from 'ava';
import { getSlotTypesForModel, slotTypes } from './slot-types';

test((t) => {
    t.deepEqual(getSlotTypesForModel(), []);
});
