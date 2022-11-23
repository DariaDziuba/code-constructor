import {SET_BLOCK_POSITION, SET_SELECTED_BLOCK, SET_DISABLED_VIEW_BUTTON, SET_DISABLED_EXECUTE_BUTTON} from './actions';

const initializeState = {
    blockPosition: [],
    disabledViewButton: true,
    disabledExecuteButton: true,
    selectedBlock: ''
};

export const blockReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SET_BLOCK_POSITION:
            return { ...state, blockPosition: action.payload };
        case SET_SELECTED_BLOCK:
            return { ...state, selectedBlock: action.payload };
        default: return state;
    }
}

export const buttonReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SET_DISABLED_VIEW_BUTTON:
            return { ...state, disabledViewButton: action.payload };
        case SET_DISABLED_EXECUTE_BUTTON:
            return { ...state, disabledExecuteButton: action.payload };
        default: return state;
    }
};
