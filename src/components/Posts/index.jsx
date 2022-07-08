import React, { useState } from "react";
import "./Posts.scss";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Posts = ({ post }) => {
    const { username, date, title, tag, view, countComment, countShare } = post;

    const [countfavourite, setCountFavourite] = useState(post.countfavourite);
    const [isFavourite, setIsFavourite] = useState(false);

    const handleFavourite = () => {
        setCountFavourite(
            isFavourite ? countfavourite - 1 : countfavourite + 1
        );
        setIsFavourite(!isFavourite);
    };

    return (
        <div className="hvdPosts">
            <div className="postWrapper">
                <div id="post">
                    <div className="post__header">
                        <div className="post__poster">
                            <div className="post__avatar">
                                <img src="/assets/avatar/avt.jpg" alt="" />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* username */}
                                <div className="post__username">{username}</div>
                                {/* date */}
                                <div className="post__date">{date}</div>
                            </div>
                        </div>
                        <div className="post__following">Theo Dõi</div>
                    </div>

                    <div className="post__body">
                        {/* title */}
                        <div className="post__title">{title}</div>
                        <div className="post__content">
                            <div>{post.desc}</div>
                            <div>
                                <img src={post.photo} alt="" />
                            </div>
                        </div>
                        {/* tag */}
                        <div className="post__topic">{tag}</div>
                    </div>

                    <div className="post__footer">
                        <div className="showInteractive">
                            <div className="like">
                                <i className="favoriteIcon">
                                    <FavoriteIcon />
                                </i>
                                <span>
                                    {countfavourite === 0
                                        ? ""
                                        : countfavourite + " yêu thích"}
                                </span>
                            </div>

                            <div className="comment">
                                <i className="commentIcon">
                                    <ChatBubbleOutlineIcon />
                                </i>
                                <span>
                                    {countComment === 0
                                        ? ""
                                        : countComment + " bình luận"}
                                </span>
                            </div>

                            <div className="share">
                                <i className="shareIcon">
                                    <ReplyIcon />
                                </i>
                                <span>
                                    {countShare === 0
                                        ? ""
                                        : countShare + " chia sẻ"}
                                </span>
                            </div>

                            <div className="view">
                                <i className="viewIcon">
                                    <VisibilityIcon />
                                </i>
                                <span>{view}</span>
                            </div>
                        </div>

                        <div className="postInteraction">
                            <div className="like" onClick={handleFavourite}>
                                <i className="favoriteIcon">
                                    <FavoriteIcon />
                                </i>
                                <span>Yêu thích</span>
                            </div>
                            <div className="comment">
                                <i className="commentIcon">
                                    <ChatBubbleOutlineIcon />
                                </i>
                                <span>Bình luận</span>
                            </div>
                            <div className="share">
                                <i className="shareIcon">
                                    <ReplyIcon />
                                </i>
                                <span>Chia sẻ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
