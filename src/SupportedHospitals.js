import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// React Component for maps implementation
const HospitalLabel = ({ text }) => <div>{text}</div>;

// Style setting to center header
var divStyle = {
    width: "500px",
    margin: "auto"
};

// Basic information about the project in it's current iteration is listed on the homepage
class HomePage extends Component {
    render() {
        return (
			<div>
                <div style={divStyle}>
                    <h2>Supported Hospitals</h2>
                </div>
                <div>
                    <h3>Hospital List:</h3>
                </div>
                <div>
                    <h5><a href="https://umiamihealth.org/bascom-palmer-eye-institute">ANNE BATES LEACH EYE HOSPITAL</a></h5>
<h5><a href="https://aventurahospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=EFlorida_1">AVENTURA HOSPITAL AND MEDICAL CENTER</a></h5>
<h5><a href="https://www.ebaptisthealthcare.org/">BAPTIST HOSPITAL</a></h5>
<h5><a href="https://baptisthealth.net/en/pages/home.aspx">BAPTIST HOSPITAL OF MIAMI</a></h5>
<h5><a href="https://www.baptistjax.com/locations/baptist-medical-center-beaches">BAPTIST MEDICAL CENTER - BEACHES</a></h5>
<h5><a href="https://www.baptistjax.com/locations/baptist-medical-center-nassau">BAPTIST MEDICAL CENTER - NASSAU</a></h5>
<h5><a href="https://www.baptistjax.com/locations/baptist-medical-center-jacksonville">BAPTIST MEDICAL CENTER JACKSONVILLE</a></h5>
<h5><a href="https://baycare.org/hospitals/bartow-regional-medical-center/patients-and-visitors">BARTOW REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://baymedical.org/">BAY MEDICAL CENTER SACRED HEART HEALTH SYSTEM</a></h5>
<h5><a href="https://www.bayfrontstpete.com/">BAYFRONT HEALTH - ST PETERSBURG</a></h5>
<h5><a href="https://www.bayfrontbrooksville.com/?utm_campaign=biz-listings&utm_source=chs-web&utm_medium=gmb">BAYFRONT HEALTH BROOKSVILLE</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-dade-city">BAYFRONT HEALTH DADE CITY</a></h5>
<h5><a href="https://www.bayfrontcharlotte.com/?utm_campaign=biz-listings&utm_source=chs-web&utm_medium=gmb">BAYFRONT HEALTH PORT CHARLOTTE</a></h5>
<h5><a href="https://www.bayfrontcharlotte.com/?utm_campaign=biz-listings&utm_source=chs-web&utm_medium=gmb">BAYFRONT HEALTH PUNTA GORDA</a></h5>
<h5><a href="https://www.bethesdaweb.com/">BETHESDA HOSPITAL EAST</a></h5>
<h5><a href="https://blakemedicalcenter.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_1">BLAKE MEDICAL CENTER</a></h5>
<h5><a href="https://www.brrh.com/">BOCA RATON REGIONAL HOSPITAL</a></h5>
<h5><a href="https://brandonhospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_12">BRANDON REGIONAL HOSPITAL</a></h5>
<h5><a href="https://www.browardhealth.org/">BROWARD HEALTH CORAL SPRINGS</a></h5>
<h5><a href="https://www.browardhealth.org/">BROWARD HEALTH IMPERIAL POINT</a></h5>
<h5><a href="https://www.browardhealth.org/">BROWARD HEALTH MEDICAL CENTER</a></h5>
<h5><a href="https://www.browardhealth.org/">BROWARD HEALTH NORTH</a></h5>
<h5><a href="https://hf.org/hospitals_services/cch/">CAPE CANAVERAL HOSPITAL</a></h5>
<h5><a href="http://www.leehealth.org/facilities/cape-coral-hospital.asp">CAPE CORAL HOSPITAL</a></h5>
<h5><a href="https://capitalregionalmedicalcenter.com/">CAPITAL REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://centralfloridaregional.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=NFlorida_3">CENTRAL FLORIDA REGIONAL HOSPITAL</a></h5>
<h5><a href="https://www.citrusmh.com/">CITRUS MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://my.clevelandclinic.org/">CLEVELAND CLINIC HOSPITAL</a></h5>
<h5><a href="https://www.coralgableshospital.com/">CORAL GABLES HOSPITAL</a></h5>
<h5><a href="https://www.delraymedicalctr.com/">DELRAY MEDICAL CENTER</a></h5>
<h5><a href="https://www.dmh.org/">DESOTO MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://www.tmh.org/doctors-memorial-hospital">DOCTOR'S MEMORIAL HOSPITAL INC</a></h5>
<h5><a href="https://doctorsofsarasota.com/">DOCTORS HOSPITAL</a></h5>
<h5><a href="https://doctorsofsarasota.com/">DOCTORS HOSPITAL OF SARASOTA</a></h5>
<h5><a href="https://www.miamijewishhealth.org/healthcare-services-programs/hospital/">DOUGLAS GARDENS HOSPITAL</a></h5>
<h5><a href="https://edfraserhospital.com/">ED FRASER MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://englewoodcommhospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_67">ENGLEWOOD COMMUNITY HOSPITAL</a></h5>
<h5><a href="https://fawcetthospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_77">FAWCETT MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://www.flaglerhospital.org/">FLAGLER HOSPITAL</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-orlando">FLORIDA HOSPITAL</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-carrollwood">FLORIDA HOSPITAL CARROLLWOOD</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-deland">FLORIDA HOSPITAL DELAND</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-fish-memorial">FLORIDA HOSPITAL FISH MEMORIAL</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-palm-coast?utm_source=local-listing&utm_medium=organic&utm_campaign=website-link">FLORIDA HOSPITAL FLAGLER</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-sebring">FLORIDA HOSPITAL HEARTLAND MEDICAL CENTER</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-daytona-beach">FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-new-smyrna-beach">FLORIDA HOSPITAL NEW SMYRNA</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-north-pinellas">FLORIDA HOSPITAL NORTH PINELLAS</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-tampa">FLORIDA HOSPITAL TAMPA</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-waterman">FLORIDA HOSPITAL WATERMAN</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-wesley-chapel">FLORIDA HOSPITAL WESLEY CHAPEL</a></h5>
<h5><a href="https://www.adventhealth.com/hospital/adventhealth-zephyrhills">FLORIDA HOSPITAL ZEPHYRHILLS</a></h5>
<h5><a href="https://fwbmc.com/">FORT WALTON BEACH MEDICAL CENTER</a></h5>
<h5><a href="https://www.goodsamaritanmc.com/">GOOD SAMARITAN MEDICAL CENTER</a></h5>
<h5><a href="https://www.ebaptisthealthcare.org/gulfbreezehospital">GULF BREEZE HOSPITAL</a></h5>
<h5><a href="http://www.leehealth.org/facilities/gulf-coast-medical-center.asp">GULF COAST MEDICAL CENTER LEE MEM HEALTH SYSTEM</a></h5>
<h5><a href="https://gcmc-pc.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=Nflorida_5">GULF COAST REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.halifaxhealth.org/locations/hospitals/halifax-health-medical-center">HALIFAX HEALTH MEDICAL CENTER</a></h5>
<h5><a href="https://www.orlandohealth.com/facilities/health-central-hospital">HEALTH CENTRAL</a></h5>
<h5><a href="http://www.google.com">HEALTHMARK REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">HEART OF FLORIDA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">HIALEAH HOSPITAL</a></h5>
<h5><a href="http://www.google.com">HIGHLANDS REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">HOLMES REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">HOLY CROSS HOSPITAL</a></h5>
<h5><a href="http://www.google.com">HOMESTEAD HOSPITAL</a></h5>
<h5><a href="http://www.google.com">INDIAN RIVER MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">JACKSON HOSPITAL</a></h5>
<h5><a href="http://www.google.com">JACKSON MEMORIAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">JAY HOSPITAL</a></h5>
<h5><a href="http://www.google.com">JFK MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">JUPITER MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">KENDALL REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LAKE CITY MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LAKE WALES MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LAKELAND REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LAKESIDE MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LAKEWOOD RANCH MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LARGO MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LARKIN COMMUNITY HOSPITAL</a></h5>
<h5><a href="http://www.google.com">LARKIN COMMUNITY HOSPITAL PALM SPRINGS CAMPUS</a></h5>
<h5><a href="http://www.google.com">LAWNWOOD REGIONAL MEDICAL CENTER & HEART INSTITUTE</a></h5>
<h5><a href="http://www.google.com">LEE MEMORIAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">LEESBURG REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LEHIGH REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">LOWER KEYS MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">MANATEE MEMORIAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">MARTIN MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">MAYO CLINIC</a></h5>
<h5><a href="http://www.google.com">MEASE COUNTRYSIDE HOSPITAL</a></h5>
<h5><a href="http://www.google.com">MEASE DUNEDIN HOSPITAL</a></h5>
<h5><a href="http://www.google.com">MEDICAL CENTER OF TRINITY</a></h5>
<h5><a href="http://www.google.com">MEMORIAL HOSPITAL JACKSONVILLE</a></h5>
<h5><a href="http://www.google.com">MEMORIAL HOSPITAL MIRAMAR</a></h5>
<h5><a href="http://www.google.com">MEMORIAL HOSPITAL OF TAMPA</a></h5>
<h5><a href="http://www.google.com">MEMORIAL HOSPITAL PEMBROKE</a></h5>
<h5><a href="http://www.google.com">MEMORIAL HOSPITAL WEST</a></h5>
<h5><a href="http://www.google.com">MEMORIAL REGIONAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">MORTON PLANT HOSPITAL</a></h5>
<h5><a href="http://www.google.com">MORTON PLANT NORTH BAY HOSPITAL</a></h5>
<h5><a href="http://www.google.com">MOUNT SINAI MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">MUNROE REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">NAPLES COMMUNITY HOSPITAL</a></h5>
<h5><a href="http://www.google.com">NORTH FLORIDA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">NORTH OKALOOSA MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">NORTH SHORE MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">NORTHSIDE HOSPITAL</a></h5>
<h5><a href="http://www.google.com">NORTHWEST MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">OAK HILL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">OCALA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">ORANGE PARK MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">ORLANDO HEALTH</a></h5>
<h5><a href="http://www.google.com">OSCEOLA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">PALM BAY HOSPITAL</a></h5>
<h5><a href="http://www.google.com">PALM BEACH GARDENS MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">PALMETTO GENERAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">PALMS OF PASADENA HOSPITAL</a></h5>
<h5><a href="http://www.google.com">PALMS WEST HOSPITAL</a></h5>
<h5><a href="http://www.google.com">PARRISH MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">PHYSICIANS REGIONAL MEDICAL CENTER - PINE RIDGE</a></h5>
<h5><a href="http://www.google.com">PLANTATION GENERAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">POINCIANA MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">PROMISE HOSPITAL OF MIAMI</a></h5>
<h5><a href="http://www.google.com">PUTNAM COMMUNITY MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">RAULERSON HOSPITAL</a></h5>
<h5><a href="http://www.google.com">REGIONAL MEDICAL CENTER BAYONET POINT</a></h5>
<h5><a href="http://www.google.com">SACRED HEART HOSPITAL</a></h5>
<h5><a href="http://www.google.com">SACRED HEART HOSPITAL ON THE EMERALD COAST</a></h5>
<h5><a href="http://www.google.com">SACRED HEART HOSPITAL ON THE GULF</a></h5>
<h5><a href="http://www.google.com">SANTA ROSA MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">SARASOTA MEMORIAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">SEBASTIAN RIVER MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">SEVEN RIVERS REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">SHANDS LAKE SHORE REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">SOUTH BAY HOSPITAL</a></h5>
<h5><a href="http://www.google.com">SOUTH FLORIDA BAPTIST HOSPITAL</a></h5>
<h5><a href="http://www.google.com">SOUTH LAKE HOSPITAL</a></h5>
<h5><a href="http://www.google.com">SOUTH MIAMI HOSPITAL</a></h5>
<h5><a href="http://www.google.com">ST ANTHONYS HOSPITAL</a></h5>
<h5><a href="http://www.google.com">ST CLOUD REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">ST JOSEPHS HOSPITAL</a></h5>
<h5><a href="http://www.google.com">ST LUCIE MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">ST MARY'S MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">ST PETERSBURG GENERAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">ST VINCENT'S MEDICAL CENTER RIVERSIDE</a></h5>
<h5><a href="http://www.google.com">ST VINCENT'S MEDICAL CENTER SOUTHSIDE</a></h5>
<h5><a href="http://www.google.com">ST VINCENTS MEDICAL CENTER - CLAY COUNTY</a></h5>
<h5><a href="http://www.google.com">TALLAHASSEE MEMORIAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">TAMPA COMMUNITY HOSPITAL</a></h5>
<h5><a href="http://www.google.com">TAMPA GENERAL HOSPITAL</a></h5>
<h5><a href="http://www.google.com">TWIN CITIES HOSPITAL</a></h5>
<h5><a href="http://www.google.com">UF HEALTH JACKSONVILLE</a></h5>
<h5><a href="http://www.google.com">UF HEALTH SHANDS HOSPITAL</a></h5>
<h5><a href="http://www.google.com">UNIVERSITY HOSPITAL AND MEDICAL CENTER</a></h5>
<h5><a href="http://www.google.com">UNIVERSITY OF MIAMI HOSPITAL</a></h5>
<h5><a href="http://www.google.com">VENICE REGIONAL MEDICAL CENTER - BAYFRONT HEALTH</a></h5>
<h5><a href="http://www.google.com">VIERA HOSPITAL</a></h5>
<h5><a href="https://www.thevillagesregionalhospital.org">VILLAGES REGIONAL HOSPITAL, THE</a></h5>
<h5><a href="https://www.wellingtonregional.com">WELLINGTON REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.westbocamedctr.com">WEST BOCA MEDICAL CENTER</a></h5>
<h5><a href="https://westfloridahospital.com">WEST FLORIDA HOSPITAL</a></h5>
<h5><a href="https://baptisthealth.net/en/facilities/west-kendall-baptist-hospital/pages/default.aspx">WEST KENDALL BAPTIST HOSPITAL</a></h5>
<h5><a href="https://baptisthealth.net/en/facilities/west-kendall-baptist-hospital/pages/default.aspx">WEST PALM HOSPITAL</a></h5>
<h5><a href="http://www.westchesterhospital.com">WESTCHESTER GENERAL HOSPITAL</a></h5>
<h5><a href="https://westsideregional.com/">WESTSIDE REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://baycare.org/hospitals/winter-haven-hospital/patients-and-visitors">WINTER HAVEN HOSPITAL</a></h5>
<h5><a href="https://www.melbourneregional.org">WUESTHOFF MEDICAL CENTER-MELBOURNE</a></h5>
<h5><a href="https://www.rockledgeregional.org">WUESTHOFF MEDICAL CENTER-ROCKLEDGE</a></h5>
				
                </div>
                <div>
                    <Map />>
                </div>
			</div>
        );
    }
}

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '75vh', width: '75%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyASVyNjLVxumXXANxDppf080uLYn8xTKdQ" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <HospitalLabel
                        lat={30.441813}
                        lng={-84.298495}
                        text="Hospital"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default HomePage;
