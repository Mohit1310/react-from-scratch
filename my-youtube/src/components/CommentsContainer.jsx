import React from "react";

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

  return (
    <div className="flex bg-gray-100 p-2 my-2 rounded-lg shadow-sm">
      <img
        className="w-8 h-8 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjT0119IxM1Hg7ROECAsZzevAosb8Bon8HfA&usqp=CAU"
        alt="user profile"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-2">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
