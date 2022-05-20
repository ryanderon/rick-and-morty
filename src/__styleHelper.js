export const wordEllipsis = (line) => {
  return {
    display: "-webkit-box",
    WebkitLineClamp: line,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordBreak: "break-word",
  };
};
