interface EventsType {
  [eventName: string]: Function[]
}

class Event {
  private events: EventsType = {}

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].push(callback)
  }

  emit(eventName: string, ...payload: any[]) {
    const listeners = this.events[eventName] || []

    listeners.forEach(listener => {
      listener.apply(null, payload)
    })
  }
}

export default new Event()