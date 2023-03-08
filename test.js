Argument of type 'ConfigService' is not assignable to parameter of type 'Injector'.
  Property 'get' is missing in type 'ConfigService' but required in type 'Injector'.
  
  export function initializeApp(injector: Injector) {
    return (): Promise<boolean> => new Promise(async (resolve) => {
