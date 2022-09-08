import { requestMessage, verifyMessage, linkUser } from './authService';
import { NextFunction, Request, Response } from 'express';

export async function request(req: Request, res: Response, next: NextFunction) {
  try {
    const { address, chain, network } = req.body;

    const message = await requestMessage({
      address,
      chain,
      network,
    });

    res.status(200).json({ message });
  } catch (err) {
    next(err);
  }
}

export async function verify(req: Request, res: Response, next: NextFunction) {
  try {
    const { network, message, signature, address } = req.body;

    const user = await verifyMessage({
      network,
      message,
      signature,
      address,
    });

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}

export async function link(req: Request, res: Response, next: NextFunction) {
  try {
    const { network, signature, message, address, uid } = req.body;

    const user = await linkUser({
      network,
      signature,
      message,
      address,
      uid,
    });

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}
