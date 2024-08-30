import networksSupport from '@/constants/networks';
import { GasPrice } from './providers/types';

const getTokenListFromNetworkId = networkId => {
  const networks = [
    ...networksSupport.networks,
    ...networksSupport.networksDev,
  ];
  const networkSelect = networks.find(item => item.key == networkId);
  if (networkSelect) {
    return networkSelect.tokens;
  }
  return [];
};

const getGasPriceCustom: GasPrice = networkId => {
  const networks = [
    ...networksSupport.networks,
    ...networksSupport.networksDev,
  ];
  const networkSelect = networks.find(item => item.key == networkId);
  if (networkSelect) {
    return {
      price: networkSelect.price,
      maxPriorityFee: networkSelect.maxPriorityFee,
    };
  }
  return {
    price: 0,
    maxPriorityFee: 0,
  };
};

export default {
  getTokenListFromNetworkId,
  getGasPriceCustom,
};
