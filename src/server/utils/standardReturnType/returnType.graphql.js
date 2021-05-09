const createReturnType = listType => `
    type ${listType}ListType {
      list: [${listType}]
      total: Int
    }
  `;

const returnTypeField = (returnSchema, isArray) =>
  isArray
    ? `
  data: ${returnSchema}ListType
  error: String
  statusCode: Int
  message: String
`
    : `
  data: ${returnSchema}
  error: String
  statusCode: Int
  message: String
`;

export const returnType = (
  typeName,
  returnSchema,
  isArray
) => {
  const defaultReturn = `
    type ${typeName} {
      ${returnTypeField(returnSchema, isArray)}
    }
  `;

  return isArray
    ? `${createReturnType(returnSchema)} ${defaultReturn}`
    : defaultReturn;
};
