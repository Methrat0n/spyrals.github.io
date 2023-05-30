import type { AriaAttributes, DOMAttributes } from "react";

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority: 'high' | 'low' | 'auto';
  }
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
};