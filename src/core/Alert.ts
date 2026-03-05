export interface Alert {
    message: string,
    timestamp: number,
    stackTrace?: string,
    metadata?: Record<string, any>
}