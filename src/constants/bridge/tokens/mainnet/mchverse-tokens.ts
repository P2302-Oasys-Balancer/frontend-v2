import ethIcon from '@/assets/images/bridge/tokens/eth.png';
import wbtcIcon from '@/assets/images/bridge/tokens/wbtc.png';
import usdtIcon from '@/assets/images/bridge/tokens/usdt.png';
import usdcIcon from '@/assets/images/bridge/tokens/usdc.png';
import oasIcon from '@/assets/images/bridge/tokens/oas.png';
import defiIcon from '@/assets/images/bridge/tokens/defi.png';
const rpc = 'https://rpc.oasys.mycryptoheroes.net';
export const BRIDGE_MCHVERSE_TOKENS = [
  {
    name: 'OASYS',
    address: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
    logoURI: oasIcon,
    symbol: 'OAS',
    decimals: 18,
    is_native: false,
    rpc: rpc,
  },
];
