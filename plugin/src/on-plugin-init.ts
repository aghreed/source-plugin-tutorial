import type { GatsbyNode } from "gatsby";
import { ERROR_CODES } from "./constants";

export const onPluginInit: GatsbyNode[`onPluginInit`] = ({ reporter }) => {
  reporter.setErrorMap({
    [ERROR_CODES.GraphQLSourcing]: {
      text: (context) => {
        console.log("context passed: ", context);
        return `${context.sourceMessage}: ${context.graphqlError}`;
      },
      level: `ERROR`,
      category: `THIRD_PARTY`,
    },
  });
};
