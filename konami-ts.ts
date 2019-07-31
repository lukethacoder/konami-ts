interface IKonami {
  secret_code: string;
  delay?: number;
}

export default class Konami {
  code: string = '';
  super_secret: string =
    '12345678901234567890123456789012345678901234567890123456789012345678901234567890';
  delay: number = 500;
  callbacks: { (): void }[] = [];
  timeout: number = 100;

  constructor(props: IKonami) {
    this.handler = this.handler.bind(this);
    this.dispatch = this.dispatch.bind(this);

    this.super_secret = props.secret_code;
    this.delay = props.delay ? props.delay : 500;

    document.addEventListener('keydown', this.handler, false);
  }

  handler(e: KeyboardEvent) {
    try {
      clearTimeout(this.timeout);
    } catch (error) {}

    this.code = String(this.code + e.keyCode);

    if (this.code === this.super_secret) {
      this.dispatch();
    }

    this.timeout = window.setTimeout(() => {
      clearTimeout(this.timeout);
      this.code = '';
    }, this.delay);
  }

  listen(callback: () => void) {
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
    }
    return this;
  }

  dispatch() {
    this.callbacks.forEach((callback: () => void) => {
      callback();
    });
    this.code = '';
  }
}
