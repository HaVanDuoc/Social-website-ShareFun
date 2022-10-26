import React, { Fragment } from 'react';

const DataHotTopic = [
    {
        id: 1,
        name: '#xuhuong',
        count: '10k bài đăng',
    },
    {
        id: 2,
        name: '#xuhuong',
        count: '10k bài đăng',
    },
    {
        id: 3,
        name: '#xuhuong',
        count: '10k bài đăng',
    },
    {
        id: 4,
        name: '#xuhuong',
        count: '10k bài đăng',
    },
    {
        id: 5,
        name: '#xuhuong',
        count: '10k bài đăng',
    },
];

const HotTopic = () => {
    return (
        <Fragment>
            <div className="rightBarComponent hotTopic">
                <div className="rightBarTitle">Chủ đề hot</div>

                {DataHotTopic.map((item) => (
                    <div className="rightBarItem hotTopicItem" key={item.id}>
                        <div className="name">{item.name}</div>
                        <div className="count">{item.count}</div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default HotTopic;
