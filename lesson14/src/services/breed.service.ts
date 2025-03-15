import { APIResponse } from 'playwright';
import { ApiService } from 'src/api/api.service';
import { BreedDto } from 'src/dtos/breed.dto';

export class BreedApi {
    private apiService: ApiService;

    public constructor() {
        this.apiService = new ApiService();
    }

    public async getBreeds(limit: number, page: number): Promise<[response: APIResponse, images: BreedDto[]]> {
        const response = await this.apiService.get('/breeds', { limit, page });
        const images = await response.json();
        return [response, images];
    }

    public async getBreedById(id: string): Promise<[response: APIResponse, images: BreedDto]> {
        const response = await this.apiService.get(`/breeds/${id}`);
        const images = await response.json();
        return [response, images];
    }
}
