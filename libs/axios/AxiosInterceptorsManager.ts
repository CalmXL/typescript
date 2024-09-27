type OnFulfilled<V> = (value: V) => V | Promise<V>;
type OnRejected = (error: any) => any;

export interface Interceptor<V> {
  onFulfilled?: OnFulfilled<V>;
  onRejected?: OnRejected;
}

class AxiosInterceptorsManager<V> {
  public interceptors: (Interceptor<V> | null)[] = [];

  use(onFulfilled?: OnFulfilled<V>, onRejected?: OnRejected): number {
    this.interceptors.push({
      onFulfilled,
      onRejected,
    });

    return this.interceptors.length - 1;
  }
  eject(id: number) {
    if (this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }
}

export default AxiosInterceptorsManager;
