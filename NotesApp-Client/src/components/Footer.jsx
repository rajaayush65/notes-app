import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ The Avos Media {year}</p>
    </footer>
  );
}

export default Footer;
