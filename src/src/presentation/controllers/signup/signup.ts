import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helper'
import { type HttpRequest, type HttResponse } from '../../protocols/http'

class SignUpController {
  handle(httpRequest: HttpRequest): HttResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}

export { SignUpController }
