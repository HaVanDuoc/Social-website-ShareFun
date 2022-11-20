import React from 'react';
import RichTextEditor from '../../../components/RichTextEditor';
import './Post.scss';

const Post = () => {
    return (
        <div className="newPost box">
            <div className="newPost_header">
                <h1>Đăng Bài</h1>
            </div>
            <div className="newPost_content">
                <div className="field">
                    <div className="title">Tiêu đề</div>
                    <input type="text" placeholder="Vui lòng nhập tiêu đề (bắt buộc)" />
                </div>
                <div className="field">
                    <div className="title">Nội dung</div>
                    <RichTextEditor />
                </div>
                <div className="field">
                    <div className="title">Chọn chủ đề</div>
                    <input type="text" placeholder="Vui lòng nhập tiêu đề (bắt buộc)" />
                </div>
                <div className="field">
                    <button className="btnSubmit">Đăng</button>
                </div>
            </div>
        </div>
    );
};

export default Post;
