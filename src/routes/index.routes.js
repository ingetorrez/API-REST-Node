import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome JavaScript Community');
})

export default router;