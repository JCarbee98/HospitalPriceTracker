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
					<p1>These are a list of hospitals that our website supports for hopsital lookup and operation lookup. All of the links below should direct you to
					each hospital's personal website where you can find more information.</p1>
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
<h5><a href="http://69.195.120.150/">HEALTHMARK REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.heartofflorida.com/">HEART OF FLORIDA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.hialeahhosp.com/">HIALEAH HOSPITAL</a></h5>
<h5><a href="https://highlandsregional.com/">HIGHLANDS REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://hf.org/hospitals_services/hrmc/index.cfm">HOLMES REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.holy-cross.com/">HOLY CROSS HOSPITAL</a></h5>
<h5><a href="https://baptisthealth.net/en/facilities/homestead-hospital/pages/default.aspx">HOMESTEAD HOSPITAL</a></h5>
<h5><a href="https://www.indianrivermedicalcenter.com/">INDIAN RIVER MEDICAL CENTER</a></h5>
<h5><a href="https://www.jackson-hospital.com/">JACKSON HOSPITAL</a></h5>
<h5><a href="https://jacksonhealth.org/">JACKSON MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://www.ebaptisthealthcare.org/JayHospital">JAY HOSPITAL</a></h5>
<h5><a href="https://jfkmc.com/">JFK MEDICAL CENTER</a></h5>
<h5><a href="https://www.jupitermed.com/">JUPITER MEDICAL CENTER</a></h5>
<h5><a href="https://kendallmed.com/">KENDALL REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://lakecitymedical.com/">LAKE CITY MEDICAL CENTER</a></h5>
<h5><a href="https://www.lakewalesmedicalcenter.com/">LAKE WALES MEDICAL CENTER</a></h5>
<h5><a href="https://mylrh.org/">LAKELAND REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.hcdpbc.org/for-patients/hospital">LAKESIDE MEDICAL CENTER</a></h5>
<h5><a href="https://www.lakewoodranchmedicalcenter.com/">LAKEWOOD RANCH MEDICAL CENTER</a></h5>
<h5><a href="https://largomedical.com/">LARGO MEDICAL CENTER</a></h5>
<h5><a href="http://www.larkinhospital.com/site/">LARKIN COMMUNITY HOSPITAL</a></h5>
<h5><a href="http://www.larkinhospital.com/site/">LARKIN COMMUNITY HOSPITAL PALM SPRINGS CAMPUS</a></h5>
<h5><a href="https://lawnwoodmed.com/">LAWNWOOD REGIONAL MEDICAL CENTER & HEART INSTITUTE</a></h5>
<h5><a href="http://www.leehealth.org/facilities/lee-memorial-hospital.asp">LEE MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://www.leesburgregional.org/">LEESBURG REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.lehighregional.com/">LEHIGH REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.lkmc.com/">LOWER KEYS MEDICAL CENTER</a></h5>
<h5><a href="https://www.manateememorial.com/">MANATEE MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://www.martinhealth.org/mhs-martin-medical-center">MARTIN MEDICAL CENTER</a></h5>
<h5><a href="https://www.mayoclinic.org/">MAYO CLINIC</a></h5>
<h5><a href="https://baycare.org/hospitals/mease-countryside-hospital/patients-and-visitors">MEASE COUNTRYSIDE HOSPITAL</a></h5>
<h5><a href="https://baycare.org/hospitals/mease-dunedin-hospital/patients-and-visitors">MEASE DUNEDIN HOSPITAL</a></h5>
<h5><a href="https://medicalcentertrinity.com/">MEDICAL CENTER OF TRINITY</a></h5>
<h5><a href="https://memorialhospitaljax.com/">MEMORIAL HOSPITAL JACKSONVILLE</a></h5>
<h5><a href="https://www.mhs.net/locations/memorial-miramar">MEMORIAL HOSPITAL MIRAMAR</a></h5>
<h5><a href="https://memorialhospitaltampa.com/">MEMORIAL HOSPITAL OF TAMPA</a></h5>
<h5><a href="https://www.mhs.net/locations/memorial-pembroke">MEMORIAL HOSPITAL PEMBROKE</a></h5>
<h5><a href="https://www.mhs.net/locations/memorial-west">MEMORIAL HOSPITAL WEST</a></h5>
<h5><a href="https://www.mhs.net/locations/memorial-regional">MEMORIAL REGIONAL HOSPITAL</a></h5>
<h5><a href="https://baycare.org/hospitals/morton-plant-north-bay-hospital/patients-and-visitors">MORTON PLANT HOSPITAL</a></h5>
<h5><a href="https://baycare.org/hospitals/morton-plant-north-bay-hospital/patients-and-visitors">MORTON PLANT NORTH BAY HOSPITAL</a></h5>
<h5><a href="https://www.msmc.com/">MOUNT SINAI MEDICAL CENTER</a></h5>
<h5><a href="https://www.practicelink.com/facility/Munroe-Regional-Medical-Center/Community-Health-Systems/">MUNROE REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.nchmd.org/">NAPLES COMMUNITY HOSPITAL</a></h5>
<h5><a href="https://nfrmc.com/">NORTH FLORIDA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.northokaloosa.com/">NORTH OKALOOSA MEDICAL CENTER</a></h5>
<h5><a href="https://www.northshoremedical.com/">NORTH SHORE MEDICAL CENTER</a></h5>
<h5><a href="https://www.northside.com/">NORTHSIDE HOSPITAL</a></h5>
<h5><a href="https://northwestmed.com/">NORTHWEST MEDICAL CENTER</a></h5>
<h5><a href="https://oakhillhospital.com/">OAK HILL HOSPITAL</a></h5>
<h5><a href="https://ocalahealthsystem.com/">OCALA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://orangeparkmedical.com/">ORANGE PARK MEDICAL CENTER</a></h5>
<h5><a href="https://www.orlandohealth.com/">ORLANDO HEALTH</a></h5>
<h5><a href="https://osceolaregional.com/">OSCEOLA REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://hf.org/hospitals_services/pbch/index.cfm">PALM BAY HOSPITAL</a></h5>
<h5><a href="PALM BEACH GARDENS MEDICAL CENTER">PALM BEACH GARDENS MEDICAL CENTER</a></h5>
<h5><a href="https://www.palmettogeneral.com/">PALMETTO GENERAL HOSPITAL</a></h5>
<h5><a href="https://palmspasadena.com/">PALMS OF PASADENA HOSPITAL</a></h5>
<h5><a href="https://palmswesthospital.com/">PALMS WEST HOSPITAL</a></h5>
<h5><a href="https://www.parrishhealthcare.com/">PARRISH MEDICAL CENTER</a></h5>
<h5><a href="https://www.physiciansregional.com/physicians-regional-pine-ridge">PHYSICIANS REGIONAL MEDICAL CENTER - PINE RIDGE</a></h5>
<h5><a href="https://plantationgeneral.com">PLANTATION GENERAL HOSPITAL</a></h5>
<h5><a href="https://poincianamedicalcenter.com">POINCIANA MEDICAL CENTER</a></h5>
<h5><a href="https://www.promise-miami.com">PROMISE HOSPITAL OF MIAMI</a></h5>
<h5><a href="https://pcmcfl.com">PUTNAM COMMUNITY MEDICAL CENTER</a></h5>
<h5><a href="https://raulersonhospital.com">RAULERSON HOSPITAL</a></h5>
<h5><a href="https://bayonetpointhospital.com">REGIONAL MEDICAL CENTER BAYONET POINT</a></h5>
<h5><a href="https://healthcare.ascension.org/Locations/Florida/FLPEN/Pensacola-Sacred-Heart-Hospital-Pensacola">SACRED HEART HOSPITAL</a></h5>
<h5><a href="https://healthcare.ascension.org/Locations/Florida/FLPEN/Miramar-Beach-Sacred-Heart-Hospital-on-the-Emerald-Coast">SACRED HEART HOSPITAL ON THE EMERALD COAST</a></h5>
<h5><a href="https://healthcare.ascension.org/Locations/Florida/FLPEN/Port-Saint-Joe-Sacred-Heart-Hospital-on-the-Gulf">SACRED HEART HOSPITAL ON THE GULF</a></h5>
<h5><a href="https://www.srmcfl.com">SANTA ROSA MEDICAL CENTER</a></h5>
<h5><a href="https://www.smh.com">SARASOTA MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://www.sebastianrivermedical.org">SEBASTIAN RIVER MEDICAL CENTER</a></h5>
<h5><a href="https://www.bayfrontsevenrivers.com">SEVEN RIVERS REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://www.shandslakeshore.com">SHANDS LAKE SHORE REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://southbayhospital.com">SOUTH BAY HOSPITAL</a></h5>
<h5><a href="https://baycare.org/sfbh">SOUTH FLORIDA BAPTIST HOSPITAL</a></h5>
<h5><a href="https://www.southlakehospital.com">SOUTH LAKE HOSPITAL</a></h5>
<h5><a href="https://baptisthealth.net">SOUTH MIAMI HOSPITAL</a></h5>
<h5><a href="https://www.stanthonyhospital.org">ST ANTHONYS HOSPITAL</a></h5>
<h5><a href="https://www.stcloudregional.com">ST CLOUD REGIONAL MEDICAL CENTER</a></h5>
<h5><a href="https://baycare.org/sjh">ST JOSEPHS HOSPITAL</a></h5>
<h5><a href="https://stluciemed.com">ST LUCIE MEDICAL CENTER</a></h5>
<h5><a href="https://www.stmarysmc.com">ST MARY'S MEDICAL CENTER</a></h5>
<h5><a href="https://stpetegeneral.com">ST PETERSBURG GENERAL HOSPITAL</a></h5>
<h5><a href="https://www.stvincents.org">ST VINCENT'S MEDICAL CENTER RIVERSIDE</a></h5>
<h5><a href="https://www.stvincents.org">ST VINCENT'S MEDICAL CENTER SOUTHSIDE</a></h5>
<h5><a href="https://www.stvincents.org">ST VINCENTS MEDICAL CENTER - CLAY COUNTY</a></h5>
<h5><a href="https://memorialhospitaltampa.com">TALLAHASSEE MEMORIAL HOSPITAL</a></h5>
<h5><a href="https://www.tgh.org">TAMPA COMMUNITY HOSPITAL</a></h5>
<h5><a href="https://www.tgh.org">TAMPA GENERAL HOSPITAL</a></h5>
<h5><a href="https://tchospital.com">TWIN CITIES HOSPITAL</a></h5>
<h5><a href="https://ufhealthjax.org">UF HEALTH JACKSONVILLE</a></h5>
<h5><a href="https://ufhealth.org">UF HEALTH SHANDS HOSPITAL</a></h5>
<h5><a href="https://uhmchealth.co">UNIVERSITY HOSPITAL AND MEDICAL CENTER</a></h5>
<h5><a href="https://umiamihealth.org">UNIVERSITY OF MIAMI HOSPITAL</a></h5>
<h5><a href="https://www.veniceregional.com">VENICE REGIONAL MEDICAL CENTER - BAYFRONT HEALTH</a></h5>
<h5><a href="https://hf.org/hospitals_services/viera/index.cfm">VIERA HOSPITAL</a></h5>
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
            lat: 28.205605,
            lng: -84.298495
        },
        zoom: 7
    };

    render() {
        return (
            <div style={{ height: '75vh', width: '75%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <HospitalLabel
                        lat={30.441}
                        lng={-83.152138}
                        text="Hospital"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default HomePage;
