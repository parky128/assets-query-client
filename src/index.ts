import { AlGlobalizer } from '@al/common';
import { AlAssetsQueryClientInstance } from './al-assets-query-client';

/* tslint:disable:variable-name */
export const AlAssetsQueryClient = AlGlobalizer.instantiate('al.assets-query', () => new AlAssetsQueryClientInstance());

export { AlAssetsQueryClientInstance } from './al-assets-query-client';
export * from './types';
