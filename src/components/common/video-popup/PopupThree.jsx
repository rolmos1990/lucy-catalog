import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const PopupThree = () => {
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
        className="fancybox video-icon tran3s overlay-icon"
        onClick={() => setOpen(true)}
        role="button"
      >
        <i className="bi bi-play-fill"></i>
      </div>
    </>
  );
};

export default PopupThree;
