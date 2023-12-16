import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { Button, Img, Input, P } from "../../atoms";
import { Props } from "./props";
import { FontSize, LineHeight, UserProps } from "../../../common";
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

  const videoId = useParams().id?.toString();

  const onSubmithandler = (data: InputFields) => {
    console.log(videoId);
    (async () => {
      setLoading(true);
      const user: UserProps = JSON.parse(localStorage.getItem("currentUser") || "{}");
      await fetch("http://localhost:3000/comments", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoId,
          userId: user.id,
          userName: user.name,
          comment: data.comment,
          createdAt: new Date().toString(),
          userProfileSrc:
            "https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png",
        }),
      })
        .then((r) => r.json())
        .then(() => {
          toast.success("Your comment was successfully published!");
          window.location.reload();
        });
      setLoading(false);
    })();
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
