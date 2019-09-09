export class Notification {
  public id: number;
  public msg: string;
  public value: string;

  constructor(
    id?: number,
    msg?: string,
    value?: string
  ) {
    this.id = id;
    this.msg = msg;
    this.value = value;
  }
}
