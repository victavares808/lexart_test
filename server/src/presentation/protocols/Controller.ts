import { type HttpRequest, type HttpResponse } from './Https';

export interface Controller {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
