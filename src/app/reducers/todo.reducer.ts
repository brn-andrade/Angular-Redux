import { Todo } from '../models/todo.model';
import * as TodoActions from '../actions/todo.actions';


const inititalState: Todo = {
    name: 'Initial Todo',
    url: 'http://google.com.br'
};

export function reducer(state: Todo[] = [inititalState], action: TodoActions.Actions) {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            return [...state, action.payload];

        case TodoActions.REMOVE_TODO:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}
