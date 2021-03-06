import Events from "../common/Events"
import { IMessagesState } from "./MessagesStore";
import { IAuthState } from "./AuthStore";

// 
// components select from stateStore,
// state emmited to specific store (messages / tree)
// 
// 

interface IStateStoreState {
    messages: IMessagesState
    tree: any
    auth: IAuthState
}

interface IStateStore {
    state: IStateStoreState

    get(key: string): any | null
    set(key: string, val: any): void

    on(name: string, listener: Function): void
    off(name: string, listener: Function): void
    emit(name: string, args: object[]): void
}

class StateStore implements IStateStore {
    state: IStateStoreState = {
        messages: {},
        tree: {},
        auth: {
            user: null,
            isAuthenticated: false,
        }
    }
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

    static instance: IStateStore

    static getInstance() {
        if (!StateStore.instance) {
            StateStore.instance = new StateStore()
        }

        return StateStore.instance
    }
}

export { StateStore, IStateStore }
