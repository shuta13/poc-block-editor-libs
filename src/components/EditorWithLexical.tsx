import React, { useCallback, useState } from "react";
import { Output } from "./Output";
import { SaveButton } from "./SaveButton";

import { $getRoot, $getSelection, EditorState, RootNode } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

const initialConfig = {
  onError: console.error
};

export const EditorWithLexical: React.FC = () => {
  const [elements, setElements] = useState<RootNode | null>(null);
  const [
    lexicalInnerState,
    setLexicalInnerState
  ] = useState<EditorState | null>(null);

  const onChange = useCallback((editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const selection = $getSelection();

      console.log(root, selection);

      setElements(root);
      setLexicalInnerState(editorState);
    });
  }, []);

  const onClick = useCallback(() => {
    lexicalInnerState?.read(() => {
      console.log(elements?.getTextContent());
    });
  }, [elements, lexicalInnerState]);

  return (
    <>
      <h3>Lexical</h3>
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text...</div>}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>
      <SaveButton onClick={onClick} />
      <Output />
    </>
  );
};
