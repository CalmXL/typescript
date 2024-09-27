// 此方法用于判断是不是取消的字符串
export function isCancel(message: any): message is Cancel {
  return message instanceof Cancel;
}

export class Cancel {
  constructor(public message: string) {}
}

export class CancelTokenStatic {
  public resolve: any;

  source() {
    return {
      token: new Promise<Cancel>((resolve, reject) => {
        this.resolve = resolve;
      }),
      cancel: (message: string) => {
        this.resolve(new Cancel(message));
      },
    };
  }
}
