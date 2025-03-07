import { PactV4, SpecificationVersion, MatchersV3 } from '@pact-foundation/pact';
//import { PetStoreService } from '../services/pet-store.service';
import { PetDto } from '../models/pet.dto';


export class PactProvider {
    public static provider = new PactV4({
        consumer: 'Pets-Web-v4',
        provider: 'Pets-API-v4',
        spec: SpecificationVersion.SPECIFICATION_VERSION_V4
    });

    private static createPetExample(): PetDto {
        return {
            id: 1002,
            category: {
                id: 1005,
                name: 'cat'
            },
            name: 'freddie-clone',
            photoUrls: ['string'],
            tags: [
                {
                    id: 1005,
                    name: 'my freddie clone'
                }
            ],
            status: 'available'
        };
    }

    public static readonly petExample: PetDto = PactProvider.createPetExample();
    public static readonly EXPECTED_BODY = MatchersV3.like(PactProvider.petExample);
}
