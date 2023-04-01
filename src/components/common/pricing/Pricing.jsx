import React from "react";

const Pricing = () => {
  const pricingListMenu = [
    {
      id: 1,
      name: "Monthly",
      dataBsTarget: "#month",
      isActive: "active",
    },
    {
      id: 2,
      name: "Yearly",
      dataBsTarget: "#year",
      isActive: "",
    },
  ];

  const PricingContent = [
    {
      id: 1,
      pricingId: "month",
      isActive: "show active",
      mainContent: [
        {
          id: 1,
          isActive: "",
          packName: "Single",
          packDetails: "For individuals and teams",
          bgColor: "#FFF7EB",
          price: "8",
          durationNumber: "Per editor, monthly",
          facility: "with unlimited email",
          features: [
            "Unlimited Email",
            "5gb Hosting",
            "2 website 3 sub domain",
            "Email & Live chat",
            "Backling",
            "Discount Programe",
          ],
          animationDelay: "",
          activeClass: "",
        },
        {
          id: 2,
          isActive: "active most-popular",
          packName: "Team",
          packDetails: "For individuals and teams",
          bgColor: "#E2F2FD",
          price: "12",
          durationNumber: "For team, monthly",
          facility: "team with 8 users",
          features: [
            "Unlimited Email",
            "5gb Hosting",
            "2 website 3 sub domain",
            "Email & Live chat",
            "Backling",
            "Discount Programe",
          ],
          animationDelay: "100",
          activeClass: "active most-popular",
        },
        {
          id: 3,
          isActive: "",
          packName: "Business",
          packDetails: "For individuals and teams",
          bgColor: "#FFEBEB",
          price: "37",
          durationNumber: "All users, monthly",
          facility: "for unlimited users",
          features: [
            "Unlimited Email",
            "5gb Hosting",
            "2 website 3 sub domain",
            "Email & Live chat",
            "Backling",
            "Discount Programe",
          ],
          animationDelay: "200",
          activeClass: "",
        },
      ],
    },
    {
      id: 2,
      pricingId: "year",
      isActive: "",
      mainContent: [
        {
          id: 1,
          isActive: "",
          packName: "Single",
          packDetails: "For individuals and teams",
          bgColor: "#FFF7EB",
          price: "90",
          durationNumber: "Per editor, yearly",
          facility: "with unlimited email",
          features: [
            "Unlimited Email",
            "5gb Hosting",
            "2 website 3 sub domain",
            "Email & Live chat",
            "Backling",
            "Discount Programe",
          ],
          animationDelay: "",
          activeClass: "",
        },
        {
          id: 2,
          isActive: "active most-popular",
          packName: "Team",
          packDetails: "For individuals and teams",
          bgColor: "#E2F2FD",
          price: "125",
          durationNumber: "For team, yearly",
          facility: "team with 8 users",
          features: [
            "Unlimited Email",
            "5gb Hosting",
            "2 website 3 sub domain",
            "Email & Live chat",
            "Backling",
            "Discount Programe",
          ],
          animationDelay: "100",
          activeClass: "active most-popular",
        },
        {
          id: 3,
          isActive: "",
          packName: "Business",
          packDetails: "For individuals and teams",
          bgColor: "#FFEBEB",
          price: "370",
          durationNumber: "All users, yearly",
          facility: "for unlimited users",
          features: [
            "Unlimited Email",
            "5gb Hosting",
            "2 website 3 sub domain",
            "Email & Live chat",
            "Backling",
            "Discount Programe",
          ],
          animationDelay: "200",
          activeClass: "",
        },
      ],
    },
  ];

  return (
    <>
      <ul
        className="nav nav-tabs justify-content-center pricing-nav-one"
        role="tablist"
      >
        {pricingListMenu.map((item) => (
          <li className="nav-item" role="presentation" key={item.id}>
            <button
              className={`nav-link ${item.isActive}`}
              data-bs-toggle="tab"
              data-bs-target={item.dataBsTarget}
              type="button"
              role="tab"
            >
              Monthly
            </button>
          </li>
        ))}
      </ul>
      {/* End nav-tabs */}

      <div className="pricing-table-area-one">
        <div className="tab-content">
          {PricingContent.map((pricing) => (
            <div
              className={`tab-pane fade ${pricing.isActive}`}
              id={pricing.pricingId}
              key={pricing.id}
            >
              <div className="row justify-content-center">
                {pricing.mainContent.map((item) => (
                  <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className={`pr-table-wrapper ${item.isActive}`}>
                      <div className="pack-name">{item.packName}</div>
                      <div className="pack-details">{item.packDetails}</div>
                      <div
                        className="top-banner d-md-flex"
                        style={{ background: item.bgColor }}
                      >
                        <div className="price">
                          <sup>$</sup> {item.price}
                        </div>
                        <div>
                          <span>{item.durationNumber}</span>
                          <em>{item.facility}</em>
                        </div>
                      </div>
                      {/* <!-- /.top-banner --> */}
                      <ul className="pr-feature">
                        {item.features.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
                      <a href="#" className="trial-button">
                        Start 30 days free trial
                      </a>
                      <div className="trial-text">
                        No card required, cancel any time
                      </div>
                    </div>
                    {/* <!-- /.pr-table-wrapper --> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
