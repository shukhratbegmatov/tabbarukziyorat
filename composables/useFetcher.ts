import { FetchOptions } from 'ohmyfetch'
import { NitroFetchRequest } from 'nitropack'

class ApiFetcher {
  public readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }
  private generateFingerprint() {
    const cookie = useCookie('visitorId')
    if (!cookie.value) {
      cookie.value = generateUUID()
    }
    return cookie.value
  }

  private $service(options: FetchOptions) {
    const locale = useCookie('locale')
    return $fetch.create({
      ...options,
      baseURL: this.baseUrl,
      headers: {
        Fingerprint: this.generateFingerprint(),
        ...options?.headers,
        'Accept-Language': locale.value || 'en',
      },
    })
  }

  public $get<T = any>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.$service(options)(endpoint)
        .then((response: T) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  }

  public $post<T = any>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: 'POST' })(endpoint)
        .then((response: T) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }

  public $put<T = any>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: 'PUT' })(endpoint)
        .then((response: T) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }

  public $patch<T = any>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: 'PATCH' })(endpoint)
        .then((response: T) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }

  public $delete<T = any>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: 'DELETE' })(endpoint)
        .then((response: T) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }
}

export const $api = new ApiFetcher(import.meta.env.VITE_APP_BASE_URL as string)
