import Head from "next/head";
import { useRouter } from "next/router";

import * as React from "react";
import { useState, useMemo, useRef } from "react";

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import CITIES from "../api/cities.json";
import Pin from "./pin";

import { Button, Offcanvas } from "react-bootstrap";

import CreateEventModal from "../../components/createEventModal";
import EditEventModal from "../../components/editEventModal/EditEventModal";
import Profile from "../../components/Profile";

import IEvent, { undefinedEvent } from "../../components/IEvent";

import HostInfoModal from "../../components/hostInfoModal";

interface HomeProp {
  username: string;
}

const Home = ({ username }: HomeProp) => {
  // console.log(session);
  // console.log(session.user.email);
  // const username = session?.user?.email;
  const router = useRouter();

  interface City {
    title: string;
    date: string;
    category: string;
    address: string;
    postcode: string;
    description: string;
    latitude: number;
    longitude: number;
    host: {
      name: string;
      address: string;
      phone: string;
      website: string;
      description: string;
    };
    participants: string[];
    maxParticipants: number;
  }
  const [popupInfo, setPopupInfo] = useState<City | null>();

  const [viewState, setViewState] = useState({
    latitude: -25,
    longitude: 135,
    zoom: 4,
  });

  const mapRef = useRef<any>(null);

  const onMapLoad = React.useCallback(() => {
    mapRef.current.on("move", () => {
      // do something when move
    });
  }, []);

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
        >
          <Pin
            onClick={() => {
              setPopupInfo(city);
              // console.log(popupInfo);
              mapRef.current.flyTo({
                center: [city.longitude, city.latitude],
                zoom: 14,
                speed: 0.8,
                curve: 1,
              });
            }}
          />
        </Marker>
      )),
    []
  );
  const [showCreateEventModal, setShowCreateEventModal] =
    useState<boolean>(false);

  const [showEditEventModal, setShowEditEventModal] = useState<boolean>(false);

  const [editEvent, setEditEvent] = useState<IEvent>(undefinedEvent);

  const [showProfile, setShowProfile] = useState<boolean>(false);

  // store which event host has been selected and shown
  const [selectedHostInfo, setSelectedHostInfo] = useState<object>({
    name: "string",
    address: "string",
    phone: "string",
    website: "string",
    description: "string",
  });
  const [showHostModal, setShowHostModal] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Map
          {...viewState}
          ref={mapRef}
          onLoad={onMapLoad}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            zIndex: 1,
          }}
          mapStyle="mapbox://styles/mong00x/cl1qkztx0000m15o5638w9apn"
          mapboxAccessToken={process.env.MAPBOX_TOKEN}
        >
          <GeolocateControl position="bottom-left" />
          <FullscreenControl position="bottom-left" />
          <NavigationControl position="bottom-left" />
          <ScaleControl />

          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              closeOnClick={false}
              onClose={() => setPopupInfo(null)}
              closeOnMove={false}
            >
              <div style={{ zIndex: 10 }}>
                <p style={{ fontSize: "1rem" }}>{popupInfo.date}</p>
                <h3>{popupInfo.title}</h3>
                <p style={{ fontSize: "0.9rem" }}>{popupInfo.description}</p>
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                  {`Location: ${popupInfo.address}`}
                  <br />
                  {`Category: ${popupInfo.category}`}
                </p>

                <p style={{ fontSize: "0.8rem", color: "#666" }}>
                  {`${popupInfo.participants.length} participants joined`}
                  <br />
                  {`${popupInfo.maxParticipants} participants needed`}
                </p>

                <p
                  onClick={() => {
                    setSelectedHostInfo(popupInfo.host);
                    setShowHostModal(true);
                  }}
                  style={{
                    color: "#666",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {`Event hosted by ${popupInfo.host.name}`}
                </p>

                {/* {console.log(username.username)} */}
                {popupInfo.participants.includes(username) ? (
                  <Button disabled>Joined</Button>
                ) : (
                  <>
                    {popupInfo.participants.length >=
                    popupInfo.maxParticipants ? (
                      <Button disabled>Max participants reached</Button>
                    ) : (
                      <Button
                        onClick={() => {
                          popupInfo.participants.push(username);
                        }}
                      >
                        Join
                      </Button>
                    )}
                  </>
                )}

                <HostInfoModal
                  hostInfo={selectedHostInfo}
                  show={showHostModal}
                  onHide={() => setShowHostModal(false)}
                />
              </div>
            </Popup>
          )}
        </Map>

        <Button
          variant="primary"
          style={{
            position: "fixed",
            left: "0",
            top: "0",
            marginTop: "25px",
            marginLeft: "8rem",
            zIndex: 2,
          }}
          onClick={() =>
            console.log(
              navigator.geolocation.getCurrentPosition((position) => {
                mapRef.current.flyTo({
                  center: [position.coords.longitude, position.coords.latitude],
                  zoom: 14,
                  speed: 0.8,
                  curve: 1,
                });
              })
            )
          }
        >
          Check events near me!
        </Button>

        <Button
          style={{
            zIndex: "2",
            background: "white",
            borderColor: "white",
            color: "blue",
            position: "fixed",
            top: "0",
            right: "0",
            marginTop: "25px",
            marginRight: "30px",
            fontWeight: "500",
          }}
          onClick={() => {
            setShowCreateEventModal(true);
          }}
        >
          Create Event
        </Button>

        <CreateEventModal
          showModal={showCreateEventModal}
          setShowModal={setShowCreateEventModal}
        />
        <EditEventModal
          showModal={showEditEventModal}
          setShowModal={setShowEditEventModal}
          event={editEvent}
        />

        <Button
          variant="primary"
          style={{
            zIndex: "2",
            background: "white",
            borderColor: "white",
            color: "blue",
            position: "fixed",
            top: "0",
            left: "0",
            marginTop: "25px",
            marginLeft: "25px",
            fontWeight: "500",
          }}
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          Profile
        </Button>
        <Offcanvas show={showProfile} onHide={() => setShowProfile(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Profile
              action={(e: IEvent) => {
                setEditEvent(e);
                setShowEditEventModal(true);
              }}
            />
          </Offcanvas.Body>
        </Offcanvas>
      </main>
    </div>
  );
};

export default Home;
