// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isProject = <T>(value: any, fieldName: string): value is T => fieldName in value;
