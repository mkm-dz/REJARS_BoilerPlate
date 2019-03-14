import { IAppActions } from "../actions/appActions";
import { IAppModelState } from "../Interfaces/interfaces";
import { AppModel } from "../Models/AppModel";

// We need to define the initial state for our reducer.
export const INITIAL_APP_MODEL_STATE = Object.freeze<IAppModelState>({
    appModel: new AppModel(),
});

/**
 * The app reducer.
 * @param state The state for the reducer, it default to the initial state
 * @param action The action
 */
export function appReducer(state = INITIAL_APP_MODEL_STATE, action: IAppActions): IAppModelState {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

