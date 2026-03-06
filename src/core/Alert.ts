export interface Alert {
    serviceName?: string,
    message: string,
    timestamp: number,
    stackTrace?: string | undefined,
    metadata?: Record<string, any> | undefined
}