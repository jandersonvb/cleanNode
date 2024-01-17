import { MissingParamError } from '../../errors/missing-param-error'
import { type HttpRequest, type HttResponse } from '../../protocols/http'

class SignUpController {
  handle(httpRequest: HttpRequest): HttResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}

export { SignUpController }
