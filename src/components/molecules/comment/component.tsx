import React from "react";
import classNames from "classnames";
import { Props } from "./props";
import { Img, P, Span } from "../../atoms";
import { Colors, FontSize, LineHeight } from "../../../common";

export const Comment: React.FC<Props> = ({ commentData, className }) => (
  <div className={classNames([className, "d-flex column-gap-3"])}>
    <Img src={commentData.userProfileSrc} alt="user profile" width="40px" height="40px" />
    <div>
      <P className="mb-2">
        <Span fontSize="13px" lineHeight="15px" fontWeight={600} className="me-2">
          {commentData.userName}
        </Span>
        <Span
          fontSize={FontSize.Secondary}
          lineHeight={LineHeight.Secondary}
          color={Colors.text.grey}
        >
          {commentData.createdAt} ago
        </Span>
      </P>
      <P fontSize={FontSize.Primary} lineHeight={LineHeight.Primary}>
        {commentData.comment}
      </P>
    </div>
  </div>
);
