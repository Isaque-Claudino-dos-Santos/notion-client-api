import express, { Express } from "express";
import InterfaceServer from "@Interfaces/InterfaceServer"
import env from "@Config/env";

export default class Server implements InterfaceServer {
    readonly app: Express = express()
    readonly PROTOCOL: string = 'http';
    readonly HOST: string = env.APP_HOST;
    readonly PORT: number = env.APP_PORT;

    fullURL(): string {
        return `${this.PROTOCOL}://${this.HOST}:${this.PORT}`
    }

    listen(): void {
        this.app.listen(this.PORT, this.HOST, () => {
            console.log(`Open Server in ${this.fullURL()}`);

        })
    }
}