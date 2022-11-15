import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export const TopBarRightItems = [
    {
        tippyContent: "Messenger",
        badgeContent: 0,
        icon: <ChatBubbleOutlineIcon />,
    },
    {
        tippyContent: "Lời mời kết bạn",
        badgeContent: 1,
        icon: <PersonAddIcon />,
    },
    {
        tippyContent: "Thông báo",
        badgeContent: 3,
        icon: <NotificationsNoneIcon />,
    },
];