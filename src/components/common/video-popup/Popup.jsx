import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Popup = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
      {/* End popup component */}

      <div
        className="fancybox video-icon d-flex align-items-center justify-content-center"
        onClick={() => setOpen(true)}
        role="button"
      >
        <img
          src={require("../../../assets/images/icon/icon_41.svg").default}
          alt="icon"
        />
      </div>
    </>
  );
};

export default Popup;
