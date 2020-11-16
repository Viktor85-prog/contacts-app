import protoTypes from "prop-types";
import { useState, useCallback } from "react";
import styles from "./CopyToClipboardText.module.css";
import Box from "@material-ui/core/Box";
import { useCopyToClipboard } from "react-use";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

export const CopyToClipboardText = ({ text }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState("copy");
  // let getTooltipTitle = "copy";
  // const getTooltipTitle = () => {
  //   switch (statusCopy) {
  //     case "copy":
  //       return "Copy";
  //     case "copied":
  //       return "Copied";
  //     default:
  //       return "";
  //   }
  // };
  const onclickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy("copied");
  }, [copyToClipboard, text]);
  const onMouseLeaveCopy = useCallback(() => {
    setStatusCopy("copy");
  }, [setStatusCopy, "copy"]);

  return (
    <Box
      className={styles.root}
      onClick={onclickCopy}
      data-tooltip={statusCopy}
      onMouseLeave={onMouseLeaveCopy}
    >
      <FileCopyOutlinedIcon className={styles.icon} /> {text}
    </Box>
  );
};

CopyToClipboardText.protoTypes = {
  text: protoTypes.string.isRequired,
};
