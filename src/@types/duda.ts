export interface DudaContextValue {
  siteDetails: {
    device: 'desktop' | 'tablet' | 'mobile'
    page: string
    inEditor: boolean
    accountId: string
    siteId: string
    widgetId: string
    widgetVersion: string
    elementId: string
    config: any
    locale: string
  }
}
