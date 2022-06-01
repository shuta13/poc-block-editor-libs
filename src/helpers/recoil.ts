import { OutputData } from "@editorjs/editorjs";
import { atom } from "recoil";

export const editorOutput = atom<OutputData | null>({
  key: "editorOutput",
  default: null
});
