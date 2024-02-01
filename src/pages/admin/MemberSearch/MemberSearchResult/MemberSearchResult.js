import React, { useEffect, useState } from 'react'
import "assets/css/MemberSearch/MemberSearch.css"
import BoldHeading from 'components/BoldHeading/BoldHeading'
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { setClickedMember } from "redux/Reducers/LoggedSlice";
// import { MDBVectorMap } from 'mdb-react-vector-maps';
import { Link } from 'react-router-dom';

import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'companyname',
  },
  {
    title: 'Licensee Name',
    dataIndex: 'membername',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'Airport Code',
    dataIndex: 'airportcode',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

// const markers = [
//   {
//     id: 1,
//     name: "Qobustan",
//     position: { lat: 40.0709493, lng: 49.3694411 },
//   },
//   {
//     id: 2,
//     name: "Sumqayit",
//     position: { lat: 40.5788843, lng: 49.5485073 },
//   },
//   {
//     id: 3,
//     name: "Baku",
//     position: { lat: 40.3947365, lng: 49.6898045 },
//   }
// ];
const MemberSearchResult = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXg0NNnj9eZMfVwsBY0cKY4d42O485BtQ",
  });

  // sir implement this useState for center😊
  const [center, setCenter] = useState({ lat: 40.3947365, lng: 49.6898045 });
  const [activeMarker, setActiveMarker] = useState(null);
  const [tooltip, setTooltip] = useState(false);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      setTooltip(true);
    }
    setActiveMarker(marker);
  };



  // sir implement this function for center😊
const handleMapClick = (event) => {
    // Update the center state based on the clicked position
    setCenter({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };
  
  const dispatch = useDispatch();
  const { isLoading,
    memberSearchResult,
    companyBranches } = useSelector(state => state.member);
  const [companyData, setCompnayData] = useState([]);
  const navigate = useNavigate()
  //companyBranches.data.map((item,key)=> alert(JSON.stringify(item)));
  const [rowSeleted, setRowSelected] = useState(-1);
  useEffect(() => {
    if (rowSeleted >= 0) {
      if (Object.keys(memberSearchResult).length > 0
        && memberSearchResult.data.length > 0) {
        const clickedMember = memberSearchResult.data.find(item => item.id === rowSeleted);
        dispatch(setClickedMember(clickedMember));
        navigate(`/companyprofile/${clickedMember.company_id}/${clickedMember.id}`)
      }
    }
  }, [rowSeleted])

  useEffect(() => {
    let member = []
    if (Object.keys(memberSearchResult).length > 0
      && memberSearchResult.data.length > 0) {
      memberSearchResult.data.map((item, index) => {
        member.push({
          key: index,
          id: item.id,
          membername: `${item.first_name} ${item.last_name}`,
          companyname: item.company_name,
          country: item.country,
          city: item.city,
          airportcode: item.company_airport_code,
          status: item.status
        })
      })
    }
    setCompnayData(member);
  }, [memberSearchResult]);
  const tooltipStyle = {
    backgroundColor: 'white'
  }
  const [markers1, setMarkers] = useState();
  useEffect(() => {
    let updatedMarkers = [];
    let i = 1;
    if (typeof companyBranches.data !== 'undefined'
      && companyBranches.data.length > 0) {
      companyBranches.data.map((item, index) => {
        if (item.latitude
          && item.longitude) {
          // const { x, y } = convertLatLongToXY(item.latitude, item.longitude, mapDimensions.width, mapDimensions.height);
          updatedMarkers.push({
            id: index,
            name: <Link to={`/companyprofile/${item.company_id}`}><h5 style={{ color: 'black' }}> {item?.company_name}</h5>  <p style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}><center>{item?.branch_name}</center></p> </Link>,
            position: { lat: Number(item.latitude), lng: Number(item.longitude) },
            // label: <div className="custom-marker-label"><Link to={`/companyprofile/${item.company_id}`}><h5 style={{ color: 'black' }}> {item?.company_name}</h5>  <p style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}><center>{item?.branch_name}</center></p> </Link></div>,
          })
          // regioncodes.push(item.region_code);
        }
        i++;
      });
    }
  // console.log('Markers Data:', updatedMarkers)

    // setPinRegion(regioncodes);
    setMarkers(updatedMarkers);
  }, [companyBranches]);
  //console.log(markers1)
  //console.log('pinRegions', pinRegions)
  return (
    <div className="widget-content widget-content-area member-search-result">
      <div className="widget-header">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
            <div className="widget-header">
              <BoldHeading
                Boldheading="Licensee Search Result"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        {!isLoading ?
          <Table
            // rowSelection={{
            //   type: 'radio'
            // }}
            scroll={{
              x: 600,
            }}
            columns={columns}
            dataSource={companyData}
            pagination={{
              defaultPageSize: 20,
              showSizeChanger: true,
              pageSizeOptions: ['20', '50', '100']
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => { setRowSelected(record.id) }
              };
            }}
            locale={{
              emptyText:
                (<div
                  className="css-dev-only-do-not-override-htwhyh ant-empty ant-empty-normal">
                  <div className="ant-empty-image">
                    <svg width="64" height="41" viewBox="0 0 64 41" xmlns="https://www.w3.org/2000/svg">
                      <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                        <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7">
                        </ellipse><g fillRule="nonzero" stroke="#d9d9d9">
                          <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa">
                          </path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="ant-empty-description">
                    Please Search & Select Licensees first
                  </div>
                </div>
                )
            }}
          />
          :
          <div className="col-xl-12 col-lg-12" style={{ margin: "15% 40%" }}>
            <RotatingLines
              strokeColor="#bbce00"
              strokeWidth="5"
              animationDuration="1.00"
              width="70"
              visible={true}
            />
          </div>
        }
      </div>
      {/* {console.log(markers1)} */}
      <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
        <div data-mdb-vector-map-init>

          <div className="container">
            
            <div style={{ height: "90vh", width: "100%" }}>
              {isLoaded ? (
                <GoogleMap
                  // center={{ lat: 40.3947365, lng: 49.6898045 }}


                  // sir implement this for center 😊
                  center={center}
                  zoom={2}
                  //onMouseOver={() => setActiveMarker(null)}
                  mapContainerStyle={{ width: "100%", height: "90vh" }}
                >
                  {typeof (companyBranches.data) !== 'undefined'
                    && companyBranches.data.length > 0 && markers1 !== 'undefined' && markers1.map(({ id, name, position }) => (
                      <MarkerF
                        key={id}
                        position={position}
                        onMouseOver={() => handleActiveMarker(id)}
                        // onMouseOut={() => handleActiveMarker()}
                      icon={{
                        url:"https://icon-library.com/images/pin-icon-png/pin-icon-png-9.jpg",
                        scaledSize: { width: 30, height: 30 }
                      }}
                      // https://static-00.iconduck.com/assets.00/map-marker-icon-1366x2048-7u371uwd.png
                      
                      >
                        {activeMarker === id ? (
                          <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                            <div style={{ width:'250px',height:'100px',textAlign:'center', overflow:'hidden', backgroundColor : "green"}}>
                                {name}
                            </div>
                          </InfoWindowF>
                        ) : null}
                      </MarkerF>
                    ))}
                </GoogleMap>
              ) : null}
            </div>
          </div>

          {/* <MDBVectorMap
            id="map-2"
            map='world'
            style={{ backgroundColor: "#1b4d70", overflow: "hidden",position:'relative' }}
            selectRegion={pinRegions}
            selectFill='#81C784'
            hoverFill='#A5D6A7'
            readonly
            markers={markers1}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default MemberSearchResult