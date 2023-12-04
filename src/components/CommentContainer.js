import React from 'react'
import Comment from './Comment'

const commentsData = [
    {
        name: "Priya Jha",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        replies: [
            {
                name: "Nandini",
                text: "     Nisi modi dolor non dolorum eaque ratione earum dignissimos nam ea enim nemo, officiis consequatur ipsa illo veritatis accusamus deleniti autem rerum.",
                replies: []
            },
        ],
    },
    {
        name: "Nandini",
        text: "     Nisi modi dolor non dolorum eaque ratione earum dignissimos nam ea enim nemo, officiis consequatur ipsa illo veritatis accusamus deleniti autem rerum.",
        replies: [
            {
                name: "Priya Jha",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                replies: [
                    {
                        name: "Nandini",
                        text: "     Nisi modi dolor non dolorum eaque ratione earum dignissimos nam ea enim nemo, officiis consequatur ipsa illo veritatis accusamus deleniti autem rerum.",
                        replies: [
                            {
                                name: "Priya Jha",
                                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                                replies: [
                                    {
                                        name: "Nandini",
                                        text: "     Nisi modi dolor non dolorum eaque ratione earum dignissimos nam ea enim nemo, officiis consequatur ipsa illo veritatis accusamus deleniti autem rerum.",
                                        replies: []
                                    },
                                ],
                            },
                        ]
                    },
                ],
            },
        ]
    },
    {
        name: "Priya Jha",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        replies: [],
    },
    {
        name: "Priya Jha",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        replies: [
            {
                name: "Nandini",
                text: "     Nisi modi dolor non dolorum eaque ratione earum dignissimos nam ea enim nemo, officiis consequatur ipsa illo veritatis accusamus deleniti autem rerum.",
                replies: [
                    {
                        name: "Priya Jha",
                        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                        replies: [
                        ],
                    },
                ]
            },
        ],
    },
    {
        name: "Priya Jha",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        replies: [],
    },
]

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className='ml-9 border-l-2 border-gray-500 pl-3'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>)
    )
}
const CommentContainer = () => {

    return (
        <div>
            <div className='text-xl font-medium'>82763 Comments</div>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentContainer