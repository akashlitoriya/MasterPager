export interface Provider {
    send(alert: string) : Promise<void> | void
}