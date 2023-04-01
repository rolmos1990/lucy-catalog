import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import img1 from "../../../assets/images/team/img_01.jpg";
import img2 from "../../../assets/images/team/img_02.jpg";
import img3 from "../../../assets/images/team/img_03.jpg";
import img4 from "../../../assets/images/team/img_04.jpg";
import img5 from "../../../assets/images/team/img_12.jpg";
import img6 from "../../../assets/images/team/img_13.jpg";
import img7 from "../../../assets/images/team/img_14.jpg";
import img8 from "../../../assets/images/team/img_15.jpg";

const Team2 = () => {
  const teamContent = [
    {
      id: 1,
      items: [
        {
          id: 1,
          img: img1,
          name: "Bostami Hasan",
          designation: "Developer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 2,
          img: img2,
          name: "Jannat Ferdaus",
          designation: "Marketing Lead",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 3,
          img: img3,
          name: "Jubayer Hasan",
          designation: "Developer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 4,
          img: img4,
          name: "Martin James",
          designation: "Team Lead",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 5,
          img: img5,
          name: "Jenelia Ra.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 6,
          img: img6,
          name: "Hasan K.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 7,
          img: img7,
          name: "Hasan K.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 8,
          img: img8,
          name: "Hasan K.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 3,
          img: img3,
          name: "Jubayer Hasan",
          designation: "Developer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 4,
          img: img4,
          name: "Martin James",
          designation: "Team Lead",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 5,
          img: img5,
          name: "Jenelia Ra.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 6,
          img: img6,
          name: "Hasan K.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          id: 1,
          img: img1,
          name: "Bostami Hasan",
          designation: "Developer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 2,
          img: img2,
          name: "Jannat Ferdaus",
          designation: "Marketing Lead",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 5,
          img: img5,
          name: "Jenelia Ra.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 6,
          img: img6,
          name: "Hasan K.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          id: 3,
          img: img3,
          name: "Jubayer Hasan",
          designation: "Developer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 4,
          img: img4,
          name: "Martin James",
          designation: "Team Lead",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 5,
          img: img5,
          name: "Jenelia Ra.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          id: 6,
          img: img6,
          name: "Hasan K.",
          designation: "Designer",
          socialList: [
            { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
            { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
            {
              icon: "fa-pinterest-p",
              profileLink: "https://www.pinterest.com/",
            },
            {
              icon: "fab fa-linkedin-in",
              profileLink: "https://www.linkedin.com/feed/",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Tabs>
        <div className="container">
          <TabList className="controls control-nav-two text-center mb-30 lg-mb-10">
            <Tab className="control">All</Tab>
            <Tab className="control">Developer</Tab>
            <Tab className="control">Designer</Tab>
            <Tab className="control">Support</Tab>
          </TabList>
        </div>

        <div className="box-layout">
          {teamContent.map((item) => (
            <TabPanel key={item.id}>
              <div className="mixitUp-container">
                {item.items.map((team) => (
                  <div className="mix" data-aos="fade-right" key={team.id}>
                    <div className="team-block-one position-relative">
                      <img
                        src={team.img}
                        alt="team avatar"
                        className="team-img w-100"
                      />
                      <div className="overlay-bg d-flex align-items-end">
                        <div className="hover-content tran3s">
                          <h6 className="name">{team.name}</h6>
                          <div className="position">{team.designation}</div>
                          <ul className="social-icon d-flex style-none">
                            {team.socialList.map((list, i) => (
                              <li key={i}>
                                <a
                                  href={list.profileLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i className={`fab ${list.icon}`}></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* End hover-content */}
                      </div>
                      {/* <!-- /.overlay-bg --> */}
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
};

export default Team2;
