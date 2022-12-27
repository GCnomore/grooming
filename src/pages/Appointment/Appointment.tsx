import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

import * as Styled from "./Appointment.styled";
import { RootState } from "../../data/redux/appointmentSlice";
import StoreInfo from "./components/StoreInfo/StoreInfo";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import AppointmentLayout from "../../components/AppointmentLayout/AppointmentLayout";

const Appointment: React.FC = () => {
  const { groomingShop, apptDate, apptTime } = useSelector(
    (state: RootState) => state
  );

  const navigate = useNavigate();

  if (!groomingShop) {
    return <div></div>;
  } else {
    return (
      <Layout>
        <AppointmentLayout
          show={apptDate && apptTime ? true : false}
          btnAction={() => navigate("/customer-info")}
        >
          <Styled.Container>
            <Styled.Contents>
              <Styled.MapSection>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "",
                    // key: process.env.REACT_APP_GOOGLE_MAP_KEY ?? "",
                  }}
                  defaultCenter={{
                    lat: Number(groomingShop.lat),
                    lng: Number(groomingShop.lng),
                  }}
                  options={{
                    disableDefaultUI: false,
                    fullscreenControl: false,
                    styles: [
                      {
                        featureType: "all",
                        elementType: "labels",
                        stylers: [{ visibility: "on" }],
                      },
                    ],
                  }}
                  defaultZoom={19}
                />
              </Styled.MapSection>

              <Styled.StoreInfoSection>
                <StoreInfo store={groomingShop} />
              </Styled.StoreInfoSection>
            </Styled.Contents>
          </Styled.Container>
        </AppointmentLayout>
      </Layout>
    );
  }
};

export default Appointment;
