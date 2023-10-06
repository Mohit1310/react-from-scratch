import React from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const commentData = [
  {
    name: "Mohit",
    comment: "This is a nested comment!!!",
    replies: [
      {
        name: "Mohit",
        comment: "This is a nested comment!!!",
        replies: [
          {
            name: "Mohit",
            comment: "This is a nested comment!!!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Mohit",
    comment: "This is a nested comment!!!",
    replies: [
      {
        name: "Mohit",
        comment: "This is a nested comment!!!",
        replies: [
          {
            name: "Mohit",
            comment: "This is a nested comment!!!",
            replies: [
              {
                name: "Mohit",
                comment: "This is a nested comment!!!",
                replies: [
                  {
                    name: "Mohit",
                    comment: "This is a nested comment!!!",
                    replies: [],
                  },
                  {
                    name: "Mohit",
                    comment: "This is a nested comment!!!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Mohit",
        comment: "This is a nested comment!!!",
        replies: [],
      },
    ],
  },
  {
    name: "Mohit",
    comment: "This is a nested comment!!!",
    replies: [
      {
        name: "Mohit",
        comment: "This is a nested comment!!!",
        replies: [],
      },
      {
        name: "Mohit",
        comment: "This is a nested comment!!!",
        replies: [],
      },
    ],
  },
  {
    name: "Mohit",
    comment: "This is a nested comment!!!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;

  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <div
      className={
        isDarkMode
          ? "flex bg-stone-600 p-2 my-2 rounded-lg shadow-sm text-white"
          : "flex bg-gray-100 p-2 my-2 rounded-lg shadow-sm"
      }
    >
      <PiUserCircleLight className="text-4xl" />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div
        className={
          isDarkMode
            ? "pl-5 border border-l-white ml-5"
            : "pl-5 border border-l-black ml-5"
        }
      >
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  return (
    <div>
      <h1
        className={
          isDarkMode
            ? "text-2xl font-bold py-2 text-white"
            : "text-2xl font-bold py-2"
        }
      >
        Comments:
      </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
