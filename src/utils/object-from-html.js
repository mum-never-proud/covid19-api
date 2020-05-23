import responseAttributes from '../constants/response-attributes';

export default function (stats, responseType) {
  const responseAttribute = responseAttributes[responseType];
  const obj = {};

  if (responseAttribute) {
    responseAttribute.forEach((attr) => {
      obj[attr.name] = stats.eq(attr.col).text().trim() || '0';
    });
  }

  return obj;
}
