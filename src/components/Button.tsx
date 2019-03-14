import * as React from "react";

interface IOwnProps {
    title: string
    callBack: (event: React.MouseEvent<HTMLInputElement>)=>{}
}

export class ButtonComponent extends React.PureComponent<IOwnProps> {

    constructor(props: IOwnProps) {
        super(props);
    }

    public render() {
        return (
            <input type="button" onClick={this.props.callBack} value={this.props.title} />
        );
    }
}

