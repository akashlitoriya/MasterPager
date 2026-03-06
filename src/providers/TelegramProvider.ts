import type { Alert } from "@core/Alert.ts";

interface TelegramConfig {
    token: string,
    chatId: string
}
export class TelegramProvider {
    private config: TelegramConfig;

    constructor(config: TelegramConfig) {
        this.config = config;
    }

    async send(alert: Alert) {
        const message = `*Alert:* ${alert?.message} : \`${alert.timestamp && new Date(alert?.timestamp)?.toISOString()}\``;
        const url = `https://api.telegram.org/bot${this.config.token}/sendMessage`;
        const body = {
            chat_id: this.config.chatId,
            text: message,
        };
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
}