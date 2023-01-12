import express from 'express'
import markoMiddleware from '@marko/express'
import Entrypoint from './views/www.marko'
import cookieParser from 'cookie-parser'

const Assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const app = express()
app.use(cookieParser())
app
  .disable('x-powered-by')
  .use(markoMiddleware()) // Enable res.marko
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

// Pages Route Handler
app.get('/*', (req, res) => {
  const scope = {
    title: 'Upswing',
    Assets,
  }
  res.marko(Entrypoint, scope)
})

export default app
