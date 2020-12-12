import express from 'espress';

export default class Server {
  public app: express.application;
  public port: number;

  constructor() {
      this.app = express();
      this.port =
  }
}