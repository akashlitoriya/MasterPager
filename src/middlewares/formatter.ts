export const formatAlert = (alert: any) => {
    let formattedAlert: string = "";
    if (typeof alert === "string") {
        return alert;
    }
    formattedAlert += `Service: ${alert.serviceName || 'Unknown Service'} --- ${new Date(alert?.timestamp ?? Date.now()).toISOString()}\n`;
    formattedAlert += `Message: ${alert.message || 'No message provided'}\n`;
    if (alert.stackTrace) {
        formattedAlert += `Stack Trace:\n${alert.stackTrace}\n`;
    }
    if (alert.metadata) {
        formattedAlert += `Metadata:\n${JSON.stringify(alert.metadata, null, 2)}\n`;
    }
    return formattedAlert;
}