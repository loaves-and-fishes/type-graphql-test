import { plainToClass } from 'class-transformer';

import { Church } from './church-type';

export function createChurchSamples() {
  return plainToClass(Church, [
    {
      name: 'Church A'
    },
    {
      name: 'Church B'
    },
    {
      name: 'Church C'
    }
  ]);
}