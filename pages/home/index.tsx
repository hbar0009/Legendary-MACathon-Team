import Head from "next/head";
import { useRouter } from "next/router";

import * as React from "react";
import { useState, useMemo, useRef } from "react";

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  
} from "react-map-gl";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

import Data from "../api/cities.json";
import Pin from "./pin";

import { Button, Offcanvas, ListGroup } from "react-bootstrap";

import CreateEventModal from "../../components/createEventModal";
import EditEventModal from "../../components/editEventModal/EditEventModal";
import Profile from "../../components/Profile";

import IEvent, { undefinedEvent } from "../../components/IEvent";

import HostInfoModal from "../../components/hostInfoModal";
import styles from "../../styles/EventList.module.css";
interface HomeProp {
  username: string;
}

const Home = ({ username }: HomeProp) => {
  // console.log(session);
  // console.log(session.user.email);
  // const username = session?.user?.email;
  const router = useRouter();

  interface Data {
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
  const [popupInfo, setPopupInfo] = useState<Data | null>();

  const [viewState, setViewState] = useState({
    latitude: -37.8,
    longitude: 144.9,
    zoom: 10,
  });

  const mapRef = useRef<any>(null);

  const onMapLoad = React.useCallback(() => {
    mapRef.current.on("load", () => {
      null;
    });
  }, []);

  const pins = useMemo(
    () =>
      Data.map((data, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="bottom"
        >
          <Pin
            onClick={() => {
              setPopupInfo(data);
              mapRef.current.flyTo({
                center: [data.longitude, data.latitude],
                zoom: 16,
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
          mapStyle="mapbox://styles/mong00x/cl1syqu5o003515mquddi3wzr"
          mapboxAccessToken={process.env.MAPBOX_TOKEN}
        >
          <GeolocateControl position="bottom-right" />
          <NavigationControl position="bottom-right" />

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
          style={{
            zIndex: "2",
            background: "white",
            borderColor: "white",
            color: "blue",
            position: "fixed",
            top: "25px",
            right: "30px",
            fontWeight: "500",
          boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.25)",

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
            borderRadius: "50px",
            width:"3rem",
            height:"3rem",
            marginTop: "25px",
            marginLeft: "30px",
            fontWeight: "500",
            boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.25)",

          }}
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          <svg style={{width:"2.5rem",position:"absolute",right:"3px", bottom:"3px" }} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Person Circle</title><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
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

        <div style={{
          display:"flex",
          flexDirection:"column",
          position:"fixed",
          zIndex:2,
          maxWidth:"380px",
          maxHeight:"460px",
          top:"100px",
          left:"30px",
          backgroundColor:"white",
          boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.25)",
          borderRadius:"4px"
          }}>
            
          <h3 className={styles.title}>Event List</h3>

          <ListGroup style={{ overflowY: "scroll" }}>
            {Data.map((event) => {
              return (
                <ListGroup.Item
                  key={Data.indexOf(event)}
                  className={styles.listItem}
                  onClick={() => {
                    setPopupInfo(event);
                    mapRef.current.flyTo({
                      center: [event.longitude, event.latitude],
                      zoom: 16,
                      speed: 0.8,
                      curve: 1,
                    });
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ fontWeight: "bold" }}>{event.title}</div>
                    <div className={styles.date}>{event.date}</div>
                  </div>

                  <div className={styles.address}>{event.address}</div>
                  <div className={styles.description}>{event.description}</div>
                  <a href={event.host.website} className={styles.host}>
                    {event.host.name}
                  </a>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <Button
          variant="primary"
          style={{
            position: "relative",
            margin:"12px",

          }}
          onClick={() =>
              navigator.geolocation.getCurrentPosition((position) => {
                mapRef.current.flyTo({
                  center: [position.coords.longitude, position.coords.latitude],
                  zoom: 14,
                  speed: 0.8,
                  curve: 1,
                });
              })
            }
          >
            Check events near me!
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
