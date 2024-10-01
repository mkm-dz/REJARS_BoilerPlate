import * as React from "react";
import { ButtonComponent } from "./Button";
import { IAppModelState } from "../Interfaces/interfaces";

export interface IOwnProps {
}

export interface IConnectedProps extends IAppModelState {
}

export interface IDispatchProps {
    extraReducerAction: (sentMessage: string) => void;
}

type IAppProps = IOwnProps & IConnectedProps & IDispatchProps;

export class App extends React.PureComponent<IAppProps> {

    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        return (<div>
            <ButtonComponent title={"TestActionA"} callBack={this.testActionA.bind(this)} />
        </div>);
    }

    private testActionA(event: React.MouseEvent<HTMLInputElement>): void {
        let currentState: string = this.props.secondaryAppState;
        this.props.extraReducerAction(`Triggering the action from App.tsx with currentState:${currentState}`);
    }
}
