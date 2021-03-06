import Events from "../common/Events"
import { IMessage } from "../models/message";

interface IMessagesState {
    [key: string]: IMessage
}

interface IMessagesStore {
    state: IMessagesState

    get(key: string): any | null
    set(key: string, val: any): void

    on(name: string, listener: Function): void
    off(name: string, listener: Function): void
    emit(name: string, args: object[]): void
}

class MessagesStore implements IMessagesStore {
    state: IMessagesState = {}
    events = Events()

    get(key: string) {
        return this.state[key] || null
    }
    set(key: string, val: any) {
        this.state[key] = val
    }

    on: (name: string, listener: Function) => void = this.events.on
    off: (name: string, listener: Function) => void = this.events.off
    emit: (name: string, args: object[]) => void = this.events.emit

    static instance: IMessagesStore

    static getInstance() {
        if (!MessagesStore.instance) {
            MessagesStore.instance = new MessagesStore()
        }

        return MessagesStore.instance
    }
}

export { MessagesStore, IMessagesStore, IMessagesState }
