import type { Alert } from "@core/Alert.ts";

export interface Provider {
    send(alert: Alert) : Promise<void> | void
}