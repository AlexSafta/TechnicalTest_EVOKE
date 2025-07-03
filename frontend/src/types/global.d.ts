// Global type definitions and extensions

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Extend window for development
declare global {
  interface Window {
    // Add any window extensions here if needed
  }
}

export {};
