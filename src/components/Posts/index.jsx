import React from "react";
import "./Posts.scss";

// Icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Posts = () => {
    return (
        <div className="hvdPosts">
            <div className="postWrapper">
                {/* Post */}
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
                                <div className="post__username">username</div>
                                <div className="post__date">2312</div>
                            </div>
                        </div>
                        <div className="post__following">Theo Dõi</div>
                    </div>

                    <div className="post__body">
                        <div className="post__title">
                            Chúc mừng sinh nhật, Barbara!
                        </div>
                        <div className="post__content">
                            <div>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Accusantium, molestias.
                                Consequatur, quo dignissimos? Sed asperiores
                                soluta aliquid explicabo sequi magni repellat
                                sint, delectus in perferendis voluptatibus
                                doloribus. Aspernatur, id ad!
                            </div>
                            <div>
                                <img
                                    src="/assets/images-post/post-img.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="post__topic">#tag</div>
                    </div>

                    <div className="post__footer">
                        <div className="like">
                            <i>
                                <FavoriteBorderIcon />
                            </i>
                            <span>Yêu thích</span>
                        </div>
                        <div className="comment">
                            <i>
                                <ChatBubbleOutlineIcon />
                            </i>
                            <span>Bình luận</span>
                        </div>
                        <div className="share">
                            <i>
                                <ReplyIcon />
                            </i>
                            <span>Chia sẻ</span>
                        </div>
                        <div className="view">
                            <i>
                                <VisibilityIcon />
                            </i>
                            <span>View</span>
                        </div>
                    </div>
                </div>
                {/* ------ */}
                {/* Post */}
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
                                <div className="post__username">username</div>
                                <div className="post__date">2312</div>
                            </div>
                        </div>
                        <div className="post__following">Theo Dõi</div>
                    </div>

                    <div className="post__body">
                        <div className="post__title">
                            Chúc mừng sinh nhật, Barbara!
                        </div>
                        <div className="post__content">
                            <div>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Accusantium, molestias.
                                Consequatur, quo dignissimos? Sed asperiores
                                soluta aliquid explicabo sequi magni repellat
                                sint, delectus in perferendis voluptatibus
                                doloribus. Aspernatur, id ad!
                            </div>
                            <div>
                                <img
                                    src="/assets/images-post/post-img.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="post__topic">#tag</div>
                    </div>

                    <div className="post__footer">
                        <div className="like">
                            <i>
                                <FavoriteBorderIcon />
                            </i>
                            <span>Yêu thích</span>
                        </div>
                        <div className="comment">
                            <i>
                                <ChatBubbleOutlineIcon />
                            </i>
                            <span>Bình luận</span>
                        </div>
                        <div className="share">
                            <i>
                                <ReplyIcon />
                            </i>
                            <span>Chia sẻ</span>
                        </div>
                        <div className="view">
                            <i>
                                <VisibilityIcon />
                            </i>
                            <span>View</span>
                        </div>
                    </div>
                </div>
                {/* ------ */}
                {/* Post */}
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
                                <div className="post__username">username</div>
                                <div className="post__date">2312</div>
                            </div>
                        </div>
                        <div className="post__following">Theo Dõi</div>
                    </div>

                    <div className="post__body">
                        <div className="post__title">
                            Chúc mừng sinh nhật, Barbara!
                        </div>
                        <div className="post__content">
                            <div>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Accusantium, molestias.
                                Consequatur, quo dignissimos? Sed asperiores
                                soluta aliquid explicabo sequi magni repellat
                                sint, delectus in perferendis voluptatibus
                                doloribus. Aspernatur, id ad!
                            </div>
                            <div>
                                <img
                                    src="/assets/images-post/post-img.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="post__topic">#tag</div>
                    </div>

                    <div className="post__footer">
                        <div className="like">
                            <i>
                                <FavoriteBorderIcon />
                            </i>
                            <span>Yêu thích</span>
                        </div>
                        <div className="comment">
                            <i>
                                <ChatBubbleOutlineIcon />
                            </i>
                            <span>Bình luận</span>
                        </div>
                        <div className="share">
                            <i>
                                <ReplyIcon />
                            </i>
                            <span>Chia sẻ</span>
                        </div>
                        <div className="view">
                            <i>
                                <VisibilityIcon />
                            </i>
                            <span>View</span>
                        </div>
                    </div>
                </div>
                {/* ------ */}
            </div>
        </div>
    );
};

export default Posts;
