import React from "react";
import {useParams} from "react-router";
import {_decodePhone} from "../../../../utils/helpers";

const MobileMenuContent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

    let { ws } = useParams();
    const selectedWhatsapp = _decodePhone(ws);

  return (
    <>
      <hr />
      <div className="address-block">
        <h4 className="title">Estas siendo atendido por:</h4>
        <p>
          <img src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" style={{height:"40px", display: 'inline'}}/> {selectedWhatsapp} <br />
        </p>
            <br /><br />
          <b>Siguenos en nuestras redes: </b><br />
      </div>
      {/* End .address-block */}
    </>
  );
};

export default MobileMenuContent;
