import { IAppModelState } from "../Interfaces/interfaces";
import { Constants } from "../common/constants";
import { Dispatch } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";

// We expose the actions through union so we can strong type reducers.
export type IAppActions = ISimpleReducerAction & IExtraReducerAction;

export interface ISimpleReducerAction {
    type: string;
    sampleAppState: string;
}

export interface IExtraReducerAction {
    type: string;
    secondaryAppState: string;
}

export const extraReducerActionThunk = createAsyncThunk(
    'app/extraReducerAction',
    async (args: { dispatch: Dispatch<any>, getState: () => IAppModelState, sentMessage: string }) => {
        const currentSampleState = args.getState().sampleAppState;
        args.dispatch({ type: Constants.simpleReducerAction, payload: { sampleAppState: `currentSampleState:${currentSampleState}, data added on the reducer via simpleReducerAction` } });
        const newState = args.sentMessage + 'data added on the reducer via extraReducerActionThunk'
        return { secondaryAppState: newState };
    }
);
