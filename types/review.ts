import { RefObject } from "react";

export type ReviewProps = {
  liked: boolean | null;
  disliked: boolean | null;
  onLikeClick: () => void;
  onDisLikeClick: () => void;
  onReply: () => void;
  isReply: boolean | null;
  reviewRef: RefObject<HTMLDivElement>;
};
