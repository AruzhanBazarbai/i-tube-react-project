import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Button, Img, Input, P } from "../../atoms";
import { Props } from "./props";
import { FontSize, LineHeight } from "../../../common";
import { Comment } from "../../molecules";

type InputFields = {
  comment: string;
};

export const Comments: React.FC<Props> = ({ commentsData, className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputFields>();

  const [loading, setLoading] = useState(false);

  const onSubmithandler = (data: InputFields) => {
    console.log("submitting...");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(data);
    reset();
  };
  return (
    <div className={classNames([className, "d-flex flex-column row-gap-4"])}>
      <P fontSize={FontSize.Default} lineHeight={LineHeight.Default}>
        {commentsData?.length} Comments
      </P>
      <div>
        <form onSubmit={handleSubmit(onSubmithandler)} className="comment-section w-100">
          <Img
            src={require("../../../assets/images/icons/profile.png")}
            alt="profile icon"
            width="40px"
            height="40px"
          />
          <Input
            type="text"
            placeholder="Add a comment..."
            registerTemplate={register("comment", { required: true })}
            fontSize={FontSize.Primary}
            lineHeight={LineHeight.Primary}
          />
          <P>{errors.comment?.message}</P>
          <Button type="submit" disabled={loading} borderRadius="10px" size="sm">
            {loading ? "Sending..." : "Post"}
          </Button>
        </form>
      </div>
      {commentsData?.map((el) => <Comment commentData={el} />)}
    </div>
  );
};
