export const SET_BLOCK_POSITION = 'SET_BLOCK_POSITION';
export const SET_SELECTED_BLOCK = 'SET_SELECTED_BLOCK';
export const SET_DISABLED_VIEW_BUTTON = 'SET_DISABLED_VIEW_BUTTON';
export const SET_DISABLED_EXECUTE_BUTTON = 'SET_DISABLED_EXECUTE_BUTTON';

export const setBlockPosition = blockPosition => dispatch => {
    dispatch({
        type: SET_BLOCK_POSITION,
        payload: blockPosition
    });
};

export const setSelectedBlock = selectedBlock => dispatch => {
    dispatch({
        type: SET_SELECTED_BLOCK,
        payload: selectedBlock
    });
};

export const setDisabledViewButton = disabledViewButton => dispatch => {
    dispatch({
        type: SET_DISABLED_VIEW_BUTTON,
        payload: disabledViewButton
    });
};

export const setDisabledExecuteButton = disabledExecuteButton => dispatch => {
    dispatch({
        type: SET_DISABLED_EXECUTE_BUTTON,
        payload: disabledExecuteButton
    });
}