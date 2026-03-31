/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TURNSTILE_SITE_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string
          appearance?: 'always' | 'execute' | 'interaction-only'
          size?: 'normal' | 'compact' | 'flexible'
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: (errorCode: string) => void
        },
      ) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
    onTurnstileLoad?: () => void
  }
}

export {}
