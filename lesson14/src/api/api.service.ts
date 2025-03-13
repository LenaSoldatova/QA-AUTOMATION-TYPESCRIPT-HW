import { IApiService } from 'src/api/i-api.service';
import { request, APIRequestContext, APIResponse} from '@playwright/test';

export const API_URL = 'https://api.thecatapi.com/v1';
export const API_KEY = 'live_3pfMPtHCLmERC1TGzTk8SaN5bggmcyPHt5cLM8d72ngx7UiMwgc4KPbQWlLhkvx4';

export class ApiService implements IApiService {
    private apiRequestContext?: APIRequestContext;

    // API Request Context
    private async getRequestContext(): Promise<APIRequestContext> {
        if (!this.apiRequestContext) {
            this.apiRequestContext = await request.newContext({
                baseURL: API_URL,
                extraHTTPHeaders: this.getAuthHeader(),
                ignoreHTTPSErrors: true
            });
        }
        return this.apiRequestContext;
    }

    // GET request
    public async get(uri: string, params?: Record<string, string | number | boolean>): Promise<APIResponse> {
        const requestContext = await this.getRequestContext();
        const url = new URL(`${API_URL}${uri}`);
        if (params) {
            Object.keys(params).forEach(key => url.searchParams.append(key, String(params[key])));
        }
        return requestContext.get(url.toString(), {
            headers: this.getAuthHeader()
        });
    }

    // POST request
    public async post(uri: string, body: unknown, headers?: Record<string, string>): Promise<APIResponse> {
        const requestContext = await this.getRequestContext();
        const url = new URL(`${API_URL}${uri}`);
        return requestContext.post(url.toString(), {
            headers: { ...this.getAuthHeader(), ...headers },
            data: body
        });
    }

    // POST FORM request - можно было использовать готовый пост
    public async postForm(uri: string, formData: FormData, headers?: Record<string, string>): Promise<Response> {
        return fetch(`${API_URL}${uri}`, {
            method: 'POST',
            headers: { ...this.getAuthHeader(), ...headers },
            body: formData
        });

    }

    // PUT request - не использовала
    public async put(uri: string, body: unknown, headers?: Record<string, string>): Promise<APIResponse> {
        const requestContext = await this.getRequestContext();
        return requestContext.put(this.convertToRelativePath(uri), {
            headers: { ...this.getDefaultHeaders(), ...headers },
            data: body
        });
    }

    // Path ??? надо понять зачем
    private convertToRelativePath(path: string): string {
        return path.startsWith('/') ? path : `/${path}`;
    }

    // Key Headers
    private getAuthHeader(): Record<string, string> {
        return { 'x-api-key': API_KEY };
    }

    // Headers
    private getDefaultHeaders(): Record<string, string> {
        return {
            ...this.getAuthHeader(),
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };
    }
}
