/**
 * Takes an object and turns them into query parameters for a URL
 * @param params Object to convert to query parameters
 * @param addQuestionMark Optional: indicates whether to begin the query parameters with a question mark
 * @returns Query parameters in string format, ready to be used in a URL
 */
export const paramsToQuery = (params: any, addQuestionMark?: boolean): string => {
  return !params || params === {}
    ? ''
    : `${addQuestionMark ? '?' : ''}${Object.keys(params)
        .map(x => [x, params[x]].join('='))
        .join('&')}`;
};
