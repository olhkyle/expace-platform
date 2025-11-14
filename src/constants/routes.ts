type Route<T> = T[keyof T] | (string & {})

const ADMIN_ROOT = '/admin'

const routes = {
	USER: {
		ROOT: '/',
		REGISTER: '/register',
		WIP: '/wip',
	},
	ADMIN: {
		ROOT: ADMIN_ROOT,
		ACADEMY: `${ADMIN_ROOT}/academy`,
		DESIGNTHOU: {
			NEWS: `${ADMIN_ROOT}/designthou/news`,
		},
		AUTH: {
			LOGIN: `${ADMIN_ROOT}/login`,
			SIGNUP: `${ADMIN_ROOT}/signup`,
		},
		SETTINGS: {
			SUBSCRIPTION: `${ADMIN_ROOT}/settings/subscription`,
			MYACCOUNT_PROFILE: `${ADMIN_ROOT}/settings/profile`,
		},
	},
} as const

export type { Route }
export { routes }
