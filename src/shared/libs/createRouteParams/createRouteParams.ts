export function createRouteParams(params: string): string {
  return params.trim().replace(/\s/g, '_');
}
