import React from "react";

const CopyrightSocial = () => {
  const socialContent = [
    {
      id: 1,
      iconName: "fa-facebook-f",
      socialLink: "https://www.facebook.com/lucymodascolombia",
    },
    {
      id: 3,
      iconName: "fa-instagram",
      socialLink: "https://www.instagram.com/lucymodascolombia",
    },
  ];

  return (
    <>
      {socialContent.map((social) => (
        <li key={social.id}>
          <a href={social.socialLink} target="_blank" rel="noopener noreferrer">
            <i className={`fab ${social.iconName}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default CopyrightSocial;
