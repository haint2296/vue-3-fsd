import { worker } from '@/shared/services/msw/browser'

function isDev() {
  return import.meta.env.DEV
}

async function startMockServer() {
  if (isDev()) {
    await worker.start()
  }
}

async function bootstrap() {
  console.log('bootstrap')
  await startMockServer()
}

export { bootstrap }
