import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorlogger, logger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('failed to connect database', err)
  }
}

boostrap()
