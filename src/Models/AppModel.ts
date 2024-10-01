import { IAppModelState } from "../Interfaces/interfaces";
export class AppModel implements IAppModelState {

    public sampleAppState: string;
    public secondaryAppState: string;
    constructor() {
        this.sampleAppState = '';
        this.secondaryAppState = '';
    }
}