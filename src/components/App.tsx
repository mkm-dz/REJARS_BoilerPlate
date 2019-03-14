import * as React from "react";
import { ButtonComponent } from "./Button";
import { IAppModelState } from "../Interfaces/interfaces";
import { IAppModel } from "../Interfaces/IAppModel";

export interface IOwnProps {
}

export interface IConnectedProps {
    appModel: Readonly<IAppModel>
}

export interface IDispatchProps {
    customActionA: (appModel: IAppModel) => void;
    customActionB: any;
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
        let currentState: IAppModelState = this.props.customActionB();
        this.props.customActionA(currentState.appModel);
    }
}
