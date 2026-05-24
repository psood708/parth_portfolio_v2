export async function register() {
  // The environment passes --localstorage-file to Node.js with a missing path,
  // leaving global.localStorage as an object whose methods are not functions.
  // Patch it with a working in-memory implementation so Next.js SSR doesn't crash.
  const broken =
    typeof localStorage !== 'undefined' &&
    typeof localStorage.getItem !== 'function'

  const missing = typeof localStorage === 'undefined'

  if (broken || missing) {
    const store: Record<string, string> = {}
    ;(globalThis as unknown as Record<string, unknown>).localStorage = {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => { store[key] = value },
      removeItem: (key: string) => { delete store[key] },
      clear: () => { Object.keys(store).forEach(k => delete store[k]) },
      get length() { return Object.keys(store).length },
      key: (index: number) => Object.keys(store)[index] ?? null,
    }
  }
}
