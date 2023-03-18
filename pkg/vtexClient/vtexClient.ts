import { AxiosError, AxiosInstance } from 'axios';
import { join } from 'path';

type HttpMethod = 'post' | 'get' | 'put' | 'delete';

type SendParams = {
  path: string;
  method: HttpMethod;
  payload: unknown;
};

export class VtexClient {
  constructor(
    private axios: AxiosInstance,
    private baseUrl: string,
    private authToken: string
  ) {}

  async send(params: SendParams): Promise<unknown> {
    // TODO
    const { method, path, payload } = params;
    const fullUrl = `${this.baseUrl}/${path}`;
    try {
      switch (method) {
        case 'post': {
          const res = await this.axios.post(fullUrl, payload, {
            headers: {
              'Content-Type': 'application/json',
              VtexIdclientAutCookie: this.authToken,
            },
          });

          const response = res.data;
          return response;
        }
        case 'get': {
          const res = await this.axios.get(fullUrl, {
            headers: {
              'Content-Type': 'application/json',
              VtexIdclientAutCookie: this.authToken,
            },
          });

          const response = res.data;
          return response;
        }
        case 'put': {
          console.log(payload);
          console.log(this.authToken);
          console.log(fullUrl);
          const res = await this.axios.put(fullUrl, payload, {
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              VtexIdclientAutCookie: this.authToken,
            },
          });

          const response = res.data;
          return response;
        }
      }
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        const data = e.response?.data;
        if (data !== undefined) {
          throw Error(`Vtex error: ${data}`);
        }
      }
    }

    throw Error(`Not implemented yet`);
  }
}
