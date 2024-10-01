import { AppModel } from "../Models/AppModel";
import { IAppActions, extraReducerActionThunk } from "../actions/appActions";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const name = "app";

// We need to define the initial state for our reducer and we need to use Object assign as this
// will create a new object with ONLY ENUMERABLE properties, which is useful to get a plain object
// required by redux.
export const INITIAL_APP_MODEL_STATE = Object.assign({}, new AppModel());

/**
 * The app reducer.
 * @param state The state for the reducer, it default to the initial state
 * @param action The action
 */
export const appSlice = createSlice({
    name,
    initialState: INITIAL_APP_MODEL_STATE,
    reducers: {
        simpleReducerAction: (state, action: PayloadAction<IAppActions>) => {
            let clonedAppModel = Object.assign({}, state, { sampleAppState: action.payload.sampleAppState });
            return Object.assign({}, clonedAppModel);
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducerActionThunk.fulfilled, (state, action: any) => {
                const clonedAppModel = Object.assign({}, state, {
                    secondaryAppState: action.payload.secondaryAppState
                });
                return Object.assign({}, clonedAppModel);
            })
        //.addCase(anotherActionExample.fulfilled, (state, action: any) => { ...
    }
});

export default appSlice.reducer

