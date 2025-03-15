import { APIResponse } from 'playwright';

export interface IApiService {
    get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response | APIResponse>;
    post(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response | APIResponse>;
    postForm(uri: string, formData: FormData, headers?: Record<string, string>): Promise<Response | APIResponse>;
    put(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response | APIResponse>;
}
