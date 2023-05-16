import { Network } from '@defiverse/balancer-sdk';

import { PoolType } from '@/services/pool/types';

export type Pool = {
  id: string;
  poolType: PoolType;
  tokens: Array<{
    address: string;
    symbol: string;
    weight: string;
  }>;
  chain: Network;
};