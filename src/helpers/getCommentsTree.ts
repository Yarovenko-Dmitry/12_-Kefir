import {TComment} from "../shared/types";

export const getCommentsTree = (comments: TComment[]) => {
    let commentsTree: any = [];
    let commentHash: any = {};
    let currentComment: TComment;
    let mappedComment: any = {};

    comments.forEach((comment: TComment, index: number) => {
        currentComment = comments[index];
        commentHash[currentComment.id] = currentComment;
        commentHash[currentComment.id]["children"] = [];
    });

    for (let id in commentHash) {
        if (commentHash.hasOwnProperty(id)) {
            mappedComment = commentHash[id];

            if (mappedComment.parent) {
                commentHash[mappedComment["parent"]]["children"].push(mappedComment);
            } else {
                commentsTree.push(mappedComment);
            }
        }
    }

    return commentsTree;
};
