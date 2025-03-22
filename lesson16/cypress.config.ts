import { defineConfig } from 'cypress';

export default defineConfig({
    projectId: 'cmwjoi',
    e2e: {
        baseUrl: 'https://www.olx.ua/',
        viewportWidth: 1280,
        viewportHeight: 720,
        defaultCommandTimeout: 10000,
        retries: 0
    }
});
