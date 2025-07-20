import { getUsersMock } from '@/shared/services/api/hooks/users/users.msw'

export const handlers = [...getUsersMock()]
