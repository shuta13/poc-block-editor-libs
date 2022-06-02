// https://stackoverflow.com/questions/69327990/how-can-i-make-one-property-non-optional-in-a-typescript-type
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type ExtendableObject = { [key: number | string]: any };
