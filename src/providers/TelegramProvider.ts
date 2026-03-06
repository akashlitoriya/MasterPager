
interface TelegramConfig {
    token: string,
    chatId: string
}
export class TelegramProvider {
    private config: TelegramConfig;

    constructor(config: TelegramConfig) {
        this.config = config;
    }

    async send(alert: string) {
        const message = alert;
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