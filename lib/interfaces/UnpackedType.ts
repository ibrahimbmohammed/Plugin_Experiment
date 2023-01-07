export type Unpacked<T> = T extends (infer U)[] ? U : T; // This helps to unpack and remove a type from an array in the type definition
