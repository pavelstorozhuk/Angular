import { GeneratorService } from './generator.service';


export let generateString = (length: number) => (generator: GeneratorService) => generator.generate(length);
