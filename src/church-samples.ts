import { plainToClass } from 'class-transformer';
import nanoid from 'nanoid';

import { Church } from './church-type';

export function createChurchSamples() {
  return plainToClass(Church, [
    {
      id: nanoid(),
      name: 'Church A'
    },
    {
      id: nanoid(),
      name: 'Church B'
    },
    {
      id: nanoid(),
      name: 'Church C'
    }
  ]);
}