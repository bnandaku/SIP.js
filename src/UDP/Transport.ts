import {
    Transport as TransportBase
} from "../core";

import dgram from "dgram";

class Transport extends TransportBase {

    public server = dgram.createSocket("udp4");
    public isConnected(): boolean {
        return false;
    }
    protected connectPromise(options: any): Promise<any> {
        return undefined;
    }

    protected disconnectPromise(options: any): Promise<any> {
        return undefined;
    }

    protected onMessage(e: any): void {
    }

    protected sendPromise(msg: string, options?: any): Promise<any> {
        return undefined;
    }

}
