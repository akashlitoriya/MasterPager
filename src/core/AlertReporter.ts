import type { Provider } from "@core/Provider.ts";
import type { Alert } from "@core/Alert.ts";

export class AlertReporter {
    private providers: Provider[] = [];

    constructor(providers: Provider[]) {
        this.providers = providers;
    }

    private async alert(alert: Alert) {
        for (const provider of this.providers) {
            await provider.send(alert);
        }
    }

    async error(error: Alert) {
        return this.alert(error);
    }
}