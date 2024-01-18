import { type HttpRequest, type HttpResponse } from './http'

interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse
}

export type { Controller }
