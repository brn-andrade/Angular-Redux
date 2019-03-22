import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';


const inititalState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com.br'
};

export function reducer(state: Tutorial[] = [inititalState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}
