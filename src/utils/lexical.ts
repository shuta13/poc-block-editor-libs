import { createEditor, EditorConfig } from "lexical";

type CreateLexicalParams = Omit<
  Exclude<Parameters<typeof createEditor>[0], undefined>,
  "onError"
>;

export const createLexical = (config: CreateLexicalParams) => {
  return createEditor({
    onError: console.error,
    ...config
  });
};
