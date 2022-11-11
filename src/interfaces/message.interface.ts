export interface IMessageData {
    id?: number
    title?: string
    message?: string
    created_at?: string
    user?: {
      name: string
    }
}