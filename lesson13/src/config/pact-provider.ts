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
            'id':100300,
            'category': {
                'id': 105,
                'name': 'cat'
            },
            'name': 'cat',
            'photoUrls': ['https://cdn2.thecatapi.com/images/rw09G0crt.jpg'],
            'tags': [
                {
                    'id': 3,
                    'name': 'ttt'
                }
            ],
            'status': 'available'
        };
    }

    public static readonly petExample: PetDto = PactProvider.createPetExample();
    public static readonly EXPECTED_BODY = MatchersV3.like(PactProvider.petExample);
}
