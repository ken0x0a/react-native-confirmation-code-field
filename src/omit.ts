export const omit = (arr: string[], obj: object): object =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => {
      acc[key] = obj[key];

      return acc;
    }, {});
