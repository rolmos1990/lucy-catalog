import React from "react";

const SubscribeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="email" placeholder="ihidago@ujufidnan.gov" />
      <button>Try free demo</button>
    </form>
  );
};

export default SubscribeForm;
