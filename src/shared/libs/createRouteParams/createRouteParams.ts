export function createRouteParams(params: string): string {
  return params.trim().toLowerCase().replace(/\s/g, '-');
}
