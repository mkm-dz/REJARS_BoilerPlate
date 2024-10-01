import { connect } from "react-redux";
import { extraReducerActionThunk, IAppActions } from "../actions/appActions";
import { App, IConnectedProps, IDispatchProps, IOwnProps } from "../components/App";
import { IAppModelState, IAppState } from "../Interfaces/interfaces";
import { ThunkDispatch } from "@reduxjs/toolkit";
import store from "../store/configureStore";

function mapStateToProps(state: IAppModelState, ownProps: IOwnProps): IOwnProps & IConnectedProps {
    return {
        sampleAppState: state.sampleAppState,
        secondaryAppState: state.sampleAppState
    };
}

type DispatchType = ThunkDispatch<IAppState, any, IAppActions>;

function mapDispatchToProps(dispatch: DispatchType): IDispatchProps {
    return {
        extraReducerAction: (sentMessage: string) => dispatch(extraReducerActionThunk({ dispatch: store.dispatch, getState: () => store.getState(), sentMessage }))
    }
}

/**
 *  we are exporting the default module in here (which we pass ButtonComponent) but on the components that use
 * this component we need to USE THE DEFAULT NOT DIRECTLY USE THE BUTTONCOMPONENT e.g
 * import ButtonComponent from "./ButtonComponent" // this is the right way
 * import {ButtonComponent} from "./ButtonComponent" // this is the WRONG way
 **/
export default connect<IConnectedProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(App)