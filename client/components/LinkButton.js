import { useAccount, useSignMessage, useNetwork } from 'wagmi';
import { useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:1337/api/auth';

const performLink = async (address, chain, uid) => {
  /// link to user
  const linkData = {
    network: 'evm',
    address: '0x0c01624e6D74132b5571Ee8a6A2dE63fbe7d20b7',
    uid: uid,
  };

  await axios.post(`${API_URL}/link-account`, linkData, {
    headers: {
      'content-type': 'application/json',
    },
  });
};

export default function LinkButton() {
  const { isConnected, address } = useAccount();
  const { chain, network } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  var drawButton = false;

  useEffect(() => {
    const currentAddress = localStorage.getItem('currentAddress');
    const currentUid = localStorage.getItem('currentUid');

    const doLink = async (uid) => {
      const userData = { address, chain: chain.id, network: 'evm' };

      /// Request message from our backend
      const { data } = await axios.post(`${API_URL}/request-message`, userData, {
        headers: {
          'content-type': 'application/json',
        },
      });
      const message = data.message;

      /// Sign message
      const signature = await signMessageAsync({ message });
      const sigData = {
        network: 'evm',
        signature: signature,
        message: message,
        address: address,
        uid: uid,
      };

      /// Verify signature and login user
      const resp = await axios.post(`${API_URL}/link-account`, sigData, {
        headers: {
          'content-type': 'application/json',
        },
      });

      const user = resp.data.user;
      console.log('user', user);
    };

    if (currentAddress !== address) {
      console.log(`account switched to ${address}`);
      localStorage.setItem('currentAddress', address);
      /// Still need to check if address already linked to a user before attempting link
      if (confirm('This address is not linked to your account, would you like to link it?') && currentUid) {
        doLink(currentUid);
      }
    }
  }, [address]);

  return;
}
