import { Express } from "express"

export default interface InterfaceServer {
    app: Express
    readonly PROTOCOL: string
    readonly HOST: string
    readonly PORT: number
    fullURL(): string
    listen(): void | never
}