import { createContext, useContext } from 'react'
import { DudaContextValue } from './@types/duda'

const DudaContext = createContext<DudaContextValue>({
  data: {
    device: 'desktop',
    page: 'home',
    inEditor: true,
    accountId: '',
    siteId: '',
    widgetId: '',
    widgetVersion: '-1',
    elementId: '',
    config: {},
    locale: 'en',
  },
})

export const DudaProvider = DudaContext.Provider

export const useDudaContext = () => useContext(DudaContext)
