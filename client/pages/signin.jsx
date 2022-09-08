import { ConnectButton } from '@rainbow-me/rainbowkit';
import { signIn, useSession } from 'next-auth/react';
import { useAccount, useSignMessage, useNetwork } from 'wagmi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LinkButton from '../components/LinkButton';

const API_URL = 'http://localhost:1337/api/auth';

function SignIn() {
  const { isConnected, address } = useAccount();
  const { chain, network } = useNetwork();
  const { status } = useSession();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      /// Save current address to local storage to detect changes (for linking)
      if (address) {
        localStorage.setItem('currentAddress', address);
      }

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
      };

      /// Verify signature and login user
      const resp = await axios.post(`${API_URL}/sign-message`, sigData, {
        headers: {
          'content-type': 'application/json',
        },
      });

      const user = resp.data.user;
      console.log('user', user);

      localStorage.setItem('currentUid', user.objectId);

      //   await doALink('0xdcFcDdDfdccf0882E8149ad9de3b112B8a55258d', chain, user.objectId);

      return;

      // Not working, i think it has something to do with the linking

      // redirect user after success authentication to '/user' page
      const { url } = await signIn(
        'credentials',
        {
          message,
          signature,
          redirect: false,
          callbackUrl: '/user',
        },
        // { uid: user.objectId },
      );
      /**
       * instead of using signIn(..., redirect: "/user")
       * we get the url from callback and push it to the router to avoid page refreshing
       */
      console.log(url);
      push(url);
    };
    if (status === 'unauthenticated' && isConnected) {
      handleAuth();
    }
  }, [status, isConnected]);

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <ConnectButton />
      <LinkButton />
      {/* <button onClick={doALink()}></button> */}
    </div>
  );
}

export default SignIn;
