import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const profileItems = [
  {
    id: 0,
    icon1: <HelpOutlineOutlinedIcon />,
    icon2: <KeyboardArrowDownOutlinedIcon />,
    label: "Help Center",
    links: [],
  },
  {
    id: 1,
    icon1: <InfoOutlinedIcon />,
    icon2: <KeyboardArrowDownOutlinedIcon />,
    label: "More",
    links: [
      "Reddit iOS",
      "Reddit Android",
      "Rereddit",
      "Best Communities",
      "Communities",
      "About Reddit",
      "Blog",
      "Carrers",
      "Press",
    ],
  },
  {
    id: 2,
    icon1: <ReceiptLongOutlinedIcon />,
    icon2: <KeyboardArrowDownOutlinedIcon />,
    label: "Terms & Policies",
    links: [
      "User Agreement",
      "Privacy Policy",
      "Content Policy",
      "Moderator Code of Conduct",
    ],
  },
  {
    id: 3,
    icon1: <CampaignOutlinedIcon />,
    icon2: <KeyboardArrowDownOutlinedIcon />,
    label: "Advertise on Reddit",
    links: [],
  },
  {
    id: 4,
    icon1: <LoginOutlinedIcon />,
    icon2: <KeyboardArrowDownOutlinedIcon />,
    label: "Log In / Sign Up",
    links: [],
  },
];

