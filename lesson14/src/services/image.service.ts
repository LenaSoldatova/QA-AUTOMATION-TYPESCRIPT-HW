import { APIResponse } from 'playwright';
import { ApiService } from 'src/api/api.service';
import fs from 'fs';
import { ImageDto } from '../dtos/image.dto';

export class ImagesApi {
    private apiService: ApiService;

    public constructor() {
        this.apiService = new ApiService();
    }

    public async getMyImages(limit: number, page: number): Promise<[response: APIResponse, images: ImageDto[]]> {
        const response = await this.apiService.get('/images/', { limit, page });
        const images = await response.json();
        return [response, images];
    }

    public async uploadImage(imagePath: string, subId: string, breeds: string[]): Promise<[Response, ImageDto]> {
        const file = fs.readFileSync(imagePath);
        const originalFileName = imagePath.split('/').pop() || 'image.jpg';
        const binaryFile = new File([file], originalFileName, { type: 'image/jpeg' });

        const formData = new FormData();
        formData.append('file', binaryFile);
        formData.append('sub_id', subId);
        formData.append('breeds', breeds.join(','));
        const response: Response = await this.apiService.postForm('/images/upload', formData);
        const responseJson = await response.json();
        return [response, responseJson];
    }

    public async getImageById(id: string): Promise<[response: APIResponse, images: ImageDto]> {
        const response = await this.apiService.get(`/images/${id}`);
        const images = await response.json();
        return [response, images];
    }

    public async getBreedsByImageId(imgId: string, breed: string ): Promise<[response: APIResponse, images: ImageDto]> {
        const body = {
            breed_id: breed
        };
        const response = await this.apiService.post(`/images/${imgId}/breeds`, body);
        const images = await response.json();
        return [response, images];
    }

}
