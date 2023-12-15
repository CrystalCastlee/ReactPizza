declare module '*.svg' {
    const content: any;
    export default content;
}
declare module '*.png' {
    const content: any;
    export default content;
}
declare module '*.scss' {
    const content: any;
    export default content;
}

declare module 'lodash.debounce' {
    import { DebounceSettings } from 'lodash';
  
    function debounce<T extends (...args: any[]) => any>(
      func: T,
      wait?: number,
      options?: DebounceSettings
    ): T & { cancel: () => void; flush: () => void };
  
    export default debounce;
  }
  