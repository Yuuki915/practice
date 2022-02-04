import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SettingsIcon from "@mui/icons-material/Settings";

export const MySidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Mail",
    icon: <AttachEmailIcon />,
    link: "/mail",
  },
  {
    title: "Analytics",
    icon: <AssessmentIcon />,
    link: "/analytcs",
  },
  {
    title: "Add Friends",
    icon: <PersonAddIcon />,
    link: "/friends",
  },
  {
    title: "Payment",
    icon: <AddCardIcon />,
    link: "/payment",
  },
  {
    title: "Upload",
    icon: <CloudUploadIcon />,
    link: "/upload",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];
