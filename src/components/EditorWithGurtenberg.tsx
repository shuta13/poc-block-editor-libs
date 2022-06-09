import React, { useEffect } from "react";
/**
 * @description NOTE: comment out for suppressing the error
 */
// import {
//   BlockEditorProvider,
//   BlockList,
//   ObserveTyping,
//   WritingFlow,
//   // @ts-expect-error
//   BlockTools
// } from "@wordpress/block-editor";
// import { useState } from "@wordpress/element";
// import { Output } from "./Output";
// import { SaveButton } from "./SaveButton";
// import { Popover, SlotFillProvider } from "@wordpress/components";
// import { registerCoreBlocks } from "@wordpress/block-library";

// function MyEditorComponent() {
//   const [blocks, updateBlocks] = useState([]);

//   return (
//     <BlockEditorProvider
//       value={blocks}
//       onInput={(blocks) => updateBlocks(blocks as never[])}
//       onChange={(blocks) => updateBlocks(blocks as never[])}
//     >
//       <SlotFillProvider>
//         <BlockTools>
//           <WritingFlow>
//             <ObserveTyping>
//               <BlockList />
//             </ObserveTyping>
//           </WritingFlow>
//         </BlockTools>
//         <Popover.Slot />
//       </SlotFillProvider>
//     </BlockEditorProvider>
//   );
// }

export const EditorWithGurtenberg: React.FC = () => {
  // useEffect(() => {
  //   registerCoreBlocks();
  // }, []);

  return (
    <>
      <h3>Gurtenberg(@wordpress/block-editor)※最新版はうまく動きません</h3>
      <a
        href="https://codesandbox.io/s/17sjn"
        target="_blank"
        rel="noopener noreferer"
      >
        うまく動く例(^5.2.0)
      </a>
      {/* <MyEditorComponent />
      <SaveButton onClick={() => {}} />
      <Output /> */}
    </>
  );
};
