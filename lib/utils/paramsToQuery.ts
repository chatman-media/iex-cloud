export const paramsToQuery = (params: any) => {
    if (!params || params === {}) return '';
    return `?${Object.keys(params)
        .map(x => [x, params[x]].join('='))
        .join('&')}`;
};
