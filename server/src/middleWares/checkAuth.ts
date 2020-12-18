import { Request, Response, NextFunction } from 'express';

import { validateToken } from '@crypto/jwt';
import { IAccessTokenPayload } from '@interfaces/IToken';

export default function(req: Request, res: Response, next: NextFunction) {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1];

        if (!accessToken) throw new Error();

        res.locals.userTokenPayload = validateToken(accessToken) as IAccessTokenPayload;

        next();
    } catch(err) {
        res.sendStatus(401);
    }
}
