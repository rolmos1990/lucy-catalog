import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import img1 from "../../../assets/images/team/img_06.jpg";
import img2 from "../../../assets/images/team/img_07.jpg";
import img3 from "../../../assets/images/team/img_08.jpg";
import img4 from "../../../assets/images/team/img_09.jpg";
import img5 from "../../../assets/images/team/img_10.jpg";
import img6 from "../../../assets/images/team/img_11.jpg";

const Team = () => {
  const teamContent = [
    {
      id: 1,
      items: [
        {
          id: 1,
          img: img1,
          name: "Bostami Hasan",
          designation: "Developer",
        },
        {
          id: 2,
          img: img2,
          name: "Jannat Ferdaus",
          designation: "Marketing Lead",
        },
        {
          id: 3,
          img: img3,
          name: "Jubayer Hasan",
          designation: "Developer",
        },
        {
          id: 4,
          img: img4,
          name: "Martin James",
          designation: "Team Lead",
        },
        {
          id: 5,
          img: img5,
          name: "Jenelia Ra.",
          designation: "Designer",
        },
        {
          id: 6,
          img: img6,
          name: "Barlin Jio",
          designation: "Interface Designer",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 2,
          img: img2,
          name: "Jannat Ferdaus",
          designation: "Marketing Lead",
        },

        {
          id: 4,
          img: img4,
          name: "Martin James",
          designation: "Team Lead",
        },
        {
          id: 5,
          img: img5,
          name: "Jenelia Ra.",
          designation: "Designer",
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
        },
        {
          id: 2,
          img: img2,
          name: "Jannat Ferdaus",
          designation: "Marketing Lead",
        },
        {
          id: 6,
          img: img6,
          name: "Barlin Jio",
          designation: "Interface Designer",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          id: 1,
          img: img1,
          name: "Bostami Hasan",
          designation: "Developer",
        },
        {
          id: 4,
          img: img4,
          name: "Martin James",
          designation: "Team Lead",
        },

        {
          id: 6,
          img: img6,
          name: "Barlin Jio",
          designation: "Interface Designer",
        },
      ],
    },
  ];
  return (
    <>
      <Tabs>
        <TabList className="controls control-nav-two text-center mb-30 lg-mb-10">
          <Tab className="control">All</Tab>
          <Tab className="control">Developer</Tab>
          <Tab className="control">Designer</Tab>
          <Tab className="control">Support</Tab>
        </TabList>

        {teamContent.map((item) => (
          <TabPanel key={item.id}>
            <div className="mixitUp-container">
              {item.items.map((team) => (
                <div className="mix" data-aos="fade-right" key={team.id}>
                  <div className="team-block-two text-center">
                    <div className="img-meta ">
                      <img className="w-100" src={team.img} alt="team" />
                    </div>
                    <h4 className="name">{team.name}</h4>
                    <p>{team.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default Team;
