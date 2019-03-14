import * as Immutable from "immutable";
import { IAppModel } from "./IAppModel";

// Our full app state will be formed by reducers states.
export type IAppState = AppReducerState;

/**
 * We use readonly in here because we want to prevent any mutation outside the app state. So, it is good to read,
 * But any update should be done through an Action
 * */
export interface IAppModelState {
    appModel: IAppModel
}

export interface AppReducerState {
    appState: Readonly<IAppModelState>
}