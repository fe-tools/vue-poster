declare class Event {
    private events;
    on(eventName: string, callback: Function): void;
    emit(eventName: string, ...payload: any[]): void;
}
declare const _default: Event;
export default _default;
