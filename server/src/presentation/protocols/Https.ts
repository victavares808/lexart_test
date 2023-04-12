export interface HttpRequest {
  body?: any
  query?: any
}

export interface HttpResponse<T = any> {
  statusCode: number
  body: T
}
