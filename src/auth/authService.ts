import Moralis from 'moralis';
import { authRequests } from '../store';
import { ParseServerRequest } from '../utils/ParseServerRequest';
// import { VerifyEvmOptions } from '@moralisweb3/auth/lib/methods/verify';

const serverRequest = new ParseServerRequest();

/// Interfaces
interface ParseUser {
  objectId: string;
}

export interface RequestMessage {
  address: string;
  chain: string;
  network: string;
}

export interface VerifyMessage {
  network: string;
  signature: string;
  message: string;
  address: string;
}

export interface LinkMessage {
  network: string;
  signature: string;
  message: string;
  address: string;
  uid: string;
}

/// Helpers

/// Gets the uid for a given address or "" if the address is a new user
const getUIDFromAddress = async (_address: string) => {
  const users: any = await serverRequest.get({
    endpoint: `/users`,
    useMasterKey: true,
  });

  for (let i in users.results) {
    let uid = users.results[i].objectId;
    if (await isAddressInUserEvmAccounts(uid, _address)) {
      /// found a match, return this uid
      return uid;
    }
  }
  /// never found match
  return '';
};

/// Is an address is in a user's linked accounts (evm) ?
const isAddressInUserEvmAccounts = async (_uid: string, _address: string) => {
  /// grab user
  const user: any = await serverRequest.get({
    endpoint: `/users/${_uid}`,
    useMasterKey: true,
  });

  var evm_accounts: string[] = user.evm_accounts;
  if (evm_accounts == null) {
    evm_accounts = [];
  }
  return evm_accounts.includes(_address);
};

const DOMAIN = 'omnimint.xyz';
const STATEMENT = 'Please sign this message to confirm your identity.';
const LINK_STATEMENT = 'Please sign this message to link this account to your profile.';
const URI = 'https://omnimint.xyz';
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z';
const TIMEOUT = 15;

/// Requests msg for an address to sign
export async function requestMessage({ address, chain, network }: { address: string; chain: string; network: 'evm' }) {
  const result = await Moralis.Auth.requestMessage({
    address,
    chain,
    network,
    domain: DOMAIN,
    statement: STATEMENT,
    uri: URI,
    expirationTime: EXPIRATION_TIME,
    timeout: TIMEOUT,
  });

  const { message, id, profileId } = result.toJSON();
  authRequests.set(message, { id, profileId });

  return message;
}

/// Verfifies a user's signature from `requestMessage` then logs in the user
/// Checks if the address signing in is an exisitng user or a new user by checking users' linked accounts
export async function verifyMessage({ network, signature, message, address }: VerifyMessage) {
  const storedData = authRequests.get(message);

  if (!storedData) {
    throw new Error('Invalid message');
  }

  const { id: storedId, profileId: storedProfileId } = storedData;

  const authData: any = {
    id: storedProfileId,
    authId: storedId,
    message,
    signature,
    network,
  };

  /// Get uid for address signing (if existing user)
  var uid = await getUIDFromAddress(address);

  /// New user
  if (uid == '') {
    console.log('new user');
    var user = await serverRequest.post<ParseUser>({
      endpoint: `/users`,
      params: {
        authData: {
          moralis: authData,
        },
        // evm_accounts: [address],
      },
      useMasterKey: true,
    });
    console.log('... created');
    uid = user.objectId;
  } else {
    /// Verfiy signature
    try {
      await Moralis.Auth.verify(authData);
    } catch (error) {
      throw new Error('Authentication failed');
    }
  }

  // Get authenticated user
  const updatedUser = await serverRequest.get({
    endpoint: `/users/${uid}`,
    useMasterKey: true,
  });

  return updatedUser;
}

/// Links an address to a user's profile
export async function linkUser({ network, signature, message, address, uid }: LinkMessage) {
  if ((await getUIDFromAddress(address)) != '') throw new Error('Address already linked to a user');

  const storedData = authRequests.get(message);

  if (!storedData) throw new Error('Invalid message');

  const { id: storedId, profileId: storedProfileId } = storedData;

  const authData: any = {
    id: storedProfileId,
    authId: storedId,
    message,
    signature,
    network,
  };

  /// Verfiy signature
  try {
    await Moralis.Auth.verify(authData);
  } catch (error) {
    throw new Error('Authentication failed');
  }

  /// Get user to link address to
  const currentUser: any = await serverRequest.get({
    endpoint: `/users/${uid}`,
    useMasterKey: true,
  });

  /// Get user's linked accounts
  var evm_accounts: string[] = currentUser.evm_accounts;
  evm_accounts = evm_accounts == null ? [] : evm_accounts;

  /// Link account
  evm_accounts.push(address);

  await serverRequest.put({
    endpoint: `/users/${uid}`,
    params: {
      evm_accounts: evm_accounts,
    },
    useMasterKey: true,
  });

  // Get authenticated user
  const updatedUser = await serverRequest.get({
    endpoint: `/users/${uid}`,
    useMasterKey: true,
  });

  return updatedUser;
}
