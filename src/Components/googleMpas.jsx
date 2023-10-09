import { Box } from "@chakra-ui/react";
import React from "react";

const GoogleMaps = ({ latitude , longitude }) => {
  return (
    <Box w={"80%"} h={"50%"} m={"auto"} borderRadius={"10px"} mt={"10px"} >
      <iframe
        frameborder="0"
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&output=embed&z=15`}
        allowfullscreen="true"
        aria-hidden="false"
        tabindex="0"
        style={{height:"100%",width:"100%"}}
      ></iframe>
    </Box>
  );
};

export default GoogleMaps;