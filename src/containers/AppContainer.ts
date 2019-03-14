import { connect } from "react-redux";
import { customActionB, customActionA, IAppActions } from "../actions/appActions";
import { App, IConnectedProps, IDispatchProps, IOwnProps } from "../components/App";
import { IAppState } from "../Interfaces/interfaces";
import { ThunkDispatch } from "redux-thunk";

function mapStateToProps(state: IAppState, ownProps: IOwnProps): IOwnProps & IConnectedProps {
    return state.appState;
}

type DispatchType = ThunkDispatch<IAppState, any, IAppActions>;
function mapDispatchToProps(dispatch: DispatchType): IDispatchProps {
    return {
        /**
         *  this dispatch is the dispatch that has been overriden by Thunk on the applymiddleware function in 
         * the store.
         **/
        customActionA: (appModel) => dispatch(customActionA(appModel)),
        customActionB: () => dispatch(customActionB()),
    }
}

/**
 *  we are exporting the default module in here (which we pass ButtonComponent) but on the components that use
 * this component we need to USE THE DEFAULT NOT DIRECTLY USE THE BUTTONCOMPONENT e.g
 * import ButtonComponent from "./ButtonComponent" // this is the right way
 * import {ButtonComponent} from "./ButtonComponent" // this is the WRONG way
 **/
export default connect<IConnectedProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(App)