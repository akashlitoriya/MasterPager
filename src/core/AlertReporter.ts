import type { Provider } from "@core/Provider.ts";
import type { Alert } from "@core/Alert.ts";
import { formatAlert } from "@middlewares/formatter.js";

export class AlertReporter {
    private providers: Provider[] = [];
    private appName: string = "AlertReporter";

    constructor(providers: Provider[], appName?: string) {
        this.providers = providers;
        if (appName) {
            this.appName = appName;
        }
    }

    async alert(alert: Alert) {
        alert.serviceName = alert?.serviceName || this.appName;
        const formattedAlert = formatAlert(alert);
        for (const provider of this.providers) {
            await provider.send(formattedAlert);
        }
    }

    async error(error: Error, metadata?: Record<string, any>) {
        const alert: Alert = {
            serviceName: this.appName,
            message: error?.message || 'Unknown error',
            timestamp: Date.now(),
            stackTrace: error?.stack || '',
            metadata
        };
        return this.alert(alert);
    }
}