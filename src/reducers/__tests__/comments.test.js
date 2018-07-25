import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    // create a fake action
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);
    // should return an array with single item
    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    // unknown type with no type, empty value
    const newState = commentsReducer([], { type: 'sfdsfsdfdsfsdf' });
    expect(newState).toEqual([]);
});