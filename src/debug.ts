export const debug = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Debug] ${message}`, {
      timestamp: new Date().toISOString(),
      data,
      stack: new Error().stack
    })
  }
}