import React from "react";
import styles from "../Navbar/navbar.module.css";
import Redditlogo from "../Navbar/Reddit-logo-name.png";
import MainButton from "../main-button";
import SecondaryButton from "../secondary-button";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import Profile from "../profile/index"
export default function Nabvar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.redditimg}>
        <img src={Redditlogo} alt="reddit" className={styles.Redditlogo} />
      </div>
      <div className={styles.navsearch}>
        <input
          type="search"
          placeholder=" Search Reddit "
          className={styles.searchreddit}
        ></input>
      </div>
      <div className={styles.navbuttons}>
        <SecondaryButton
          style={{
            padding: "12px 0",
            width: "30%",
            height: "15%",
            marginTop: "10px",
          }}
        >
          {" "}
          <QrCodeScannerOutlinedIcon />
          Get App
        </SecondaryButton>
        <MainButton
          style={{
            padding: "12px 0",
            width: "30%",
            height: "15%",
            marginTop: "10px",
            background: "#FF4500",
            borderRadius: "9999px"
          }}
        >
          Join Reddit
        </MainButton>
        
      </div>
      <Profile/>
    </div>
  );
}
