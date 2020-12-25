import { Router } from 'express';

import refreshTokenController from '@controllers/auth/refresh';
import clearSessionController from '@controllers/auth/clear';

const router = Router();

router.get('/refresh', refreshTokenController);
router.get('/clear', clearSessionController);

export default router;
