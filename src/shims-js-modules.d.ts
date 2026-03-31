declare module '@/composables/useSEO.js' {
  export function useSEO(opts: Record<string, unknown>): void
  export function useStructuredData(type: string, data: Record<string, unknown>): void
}

declare module '@/utils/seo.js' {
  export const pageSeoData: Record<string, Record<string, unknown>>
}
