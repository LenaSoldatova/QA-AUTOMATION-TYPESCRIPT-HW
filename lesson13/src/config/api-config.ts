
import { APIRequestContext, request as playwrightRequest } from '@playwright/test';

export const API_URL = 'https://api.thecatapi.com/v1';
export const API_KEY = 'live_3pfMPtHCLmERC1TGzTk8SaN5bggmcyPHt5cLM8d72ngx7UiMwgc4KPbQWlLhkvx4';

export async function setupAPIRequest(): Promise<APIRequestContext> {
    const apiRequest = await playwrightRequest.newContext({
        extraHTTPHeaders: {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }
    });

    return apiRequest;
}
