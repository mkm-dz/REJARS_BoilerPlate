import { IAppModel } from "../Interfaces/IAppModel";
import { IAppModelState, IAppState } from "../Interfaces/interfaces";
import { Constants } from "../common/constants";
import { Dispatch } from "react";

// We expose the actions through union so we can strong type reducers.
export type IAppActions = ICustomActionA & ICustomActionB

/**
 * The customActionA action declaration
 */
export interface ICustomActionA {
    type: string;
    appModel: IAppModel;
}

/**
 * The customActionB action declaration
 */
export interface ICustomActionB extends IAppModelState {
    type: string;
}

/**
 * customActionA action implementation
 */
export function customActionAImplementation(appModel: IAppModel): ICustomActionA {
    return {
        type: Constants.CustomActionA,
        appModel
    }
}

/**
 * customActionB action implementation
 * @param appModel 
 */
export function customActionBImplementation(
    appModel: Readonly<IAppModel>): ICustomActionB {
    return {
        type: Constants.CustomActionB,
        appModel,
    };
}

/**
 * The action creator for the customActionA action.
 * @param appModel 
 */
export function customActionA(appModel: IAppModel) {
    return (dispatch: Dispatch<any>) => {
        dispatch(customActionAImplementation(appModel));
    };
}

/**
 * The action creator for the customActionB action.
 */
export function customActionB() {
    return (dispatch: Dispatch<any>, getState: () => IAppState) => {
        let currentState = getState().appState;
        return dispatch(customActionBImplementation(currentState));
    }
}


