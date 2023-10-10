export type PathData = {
  title: string;
  link: string;
};

/**
 * Generates breadcrumbs data based on the provided path and optional base path.
 *
 * Breadcrumbs provide a navigational trail for users to understand their current location
 * within the application. This function takes a path and an optional base path, then
 * parses them to create an array of `PathData` objects representing each level of the breadcrumb.
 *
 * @param {string} path - The current path for which breadcrumbs are generated.
 * @param {string} [basePath=''] - An optional base path to be removed from the beginning of the provided path.
 * @returns {PathData[]} - An array of `PathData` objects representing each level of the breadcrumb.
 *
 * @example
 * createBreadcrumbs(
 * "/project/Currency%20Convertor/test/test%20TEST/roman"
 * );
 *
 * // Returns an array of breadcrumb data for the given path:
 * [
 *   { title: "project", link: "/project" },
 *   { title: "Currency Convertor", link: "/project/Currency Convertor" },
 *   { title: "test", link: "/project/Currency Convertor/test" },
 *   { title: "test TEST", link: "/project/Currency Convertor/test/test TEST" },
 *   { title: "roman", link: "/project/Currency Convertor/test/test TEST/roman" }
 * ]
 *
 * @example
 * createBreadcrumbs(
 * "/project/Currency%20Convertor/test/test%20TEST/roman",
 * '/project'
 * );
 *
 * // Returns an array of breadcrumb data for the given path:
 * [
 *   { title: "Currency Convertor", link: "/project/Currency Convertor" },
 *   { title: "test", link: "/project/Currency Convertor/test" },
 *   { title: "test TEST", link: "/project/Currency Convertor/test/test TEST" },
 *   { title: "roman", link: "/project/Currency Convertor/test/test TEST/roman" }
 * ]
 */
export function createBreadcrumbs(path: string, basePath: string = ''): PathData[] {
  // Formatting the base path and decoding the provided path
  const basePathFormatted = basePath.trim() === '/' ? '' : basePath;
  const decoded = decodeURI(path);

  // Extracting individual crumbs from the path
  const arrOfCrumbs = decoded
    .replace(basePathFormatted, '')
    .split('/')
    .filter((el) => el);

  // Generating breadcrumb data based on the crumbs
  const arrOfPaths: PathData[] = [];
  arrOfCrumbs.forEach((el, i) => {
    if (i) {
      arrOfPaths.push({
        title: el,
        link: `${arrOfPaths[i - 1]}/${el}`,
      });
    } else {
      arrOfPaths.push({
        title: el,
        link: `${basePathFormatted}/${el}`,
      });
    }
  });

  // Returning the array of breadcrumb data
  return arrOfPaths;
}

/**
 * @typedef {Object} PathData - Represents a single level of breadcrumb data.
 * @property {string} title - The title or label for the breadcrumb level.
 * @property {string} link - The link or URL associated with the breadcrumb level.
 */
