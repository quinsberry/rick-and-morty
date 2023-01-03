export function assertType<T>(value: any, predicate: (value: any) => boolean, message?: string): asserts value is T {
    if (!predicate(value)) {
        throw new Error(message ?? `Invalid value: ${value}`);
    }
}

export function isOfType<T>(value: any, predicate: (value: any) => boolean): value is T {
    return predicate(value);
}

export function firstItemOfArray<T>(array: any, predicate: (value: any) => boolean): array is T {
    if (Array.isArray(array)) {
        return array.length ? predicate(array[0]) : true;
    }
    throw new Error('Passed value is not an array');
}
