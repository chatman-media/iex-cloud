export const paramsToQuery = (params: any) => {
  return !params || params === {}
    ? ''
    : `${Object.keys(params)
        .map(x => [x, params[x]].join('='))
        .join('&')}`;
};
