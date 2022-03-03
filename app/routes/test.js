import Router from 'express'

import { testController } from '../controllers'

const router = Router()

router.post('/test', testController.test)

export default router
