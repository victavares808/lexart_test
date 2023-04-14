export interface HttpRequest {
  body?: any
  query?: any
  params?: any
}

export interface HttpResponse<T = any> {
  statusCode: number
  body: T
}
