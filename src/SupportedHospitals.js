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
                    <h5><td onClick={()=>window.open("https://umiamihealth.org/bascom-palmer-eye-institute", "_blank")}>ANNE BATES LEACH EYE HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://aventurahospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=EFlorida_1", "_blank")}>AVENTURA HOSPITAL AND MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.ebaptisthealthcare.org/", "_blank")}>BAPTIST HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baptisthealth.net/en/pages/home.aspx", "_blank")}>BAPTIST HOSPITAL OF MIAMI</td></h5>
<h5><td onClick={()=>window.open("https://www.baptistjax.com/locations/baptist-medical-center-beaches", "_blank")}>BAPTIST MEDICAL CENTER - BEACHES</td></h5>
<h5><td onClick={()=>window.open("https://www.baptistjax.com/locations/baptist-medical-center-nassau", "_blank")}>BAPTIST MEDICAL CENTER - NASSAU</td></h5>
<h5><td onClick={()=>window.open("https://www.baptistjax.com/locations/baptist-medical-center-jacksonville", "_blank")}>BAPTIST MEDICAL CENTER JACKSONVILLE</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/hospitals/bartow-regional-medical-center/patients-and-visitors", "_blank")}>BARTOW REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://baymedical.org/", "_blank")}>BAY MEDICAL CENTER SACRED HEART HEALTH SYSTEM</td></h5>
<h5><td onClick={()=>window.open("https://www.bayfrontstpete.com/", "_blank")}>BAYFRONT HEALTH - ST PETERSBURG</td></h5>
<h5><td onClick={()=>window.open("https://www.bayfrontbrooksville.com/?utm_campaign=biz-listings&utm_source=chs-web&utm_medium=gmb", "_blank")}>BAYFRONT HEALTH BROOKSVILLE</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-dade-city", "_blank")}>BAYFRONT HEALTH DADE CITY</td></h5>
<h5><td onClick={()=>window.open("https://www.bayfrontcharlotte.com/?utm_campaign=biz-listings&utm_source=chs-web&utm_medium=gmb", "_blank")}>BAYFRONT HEALTH PORT CHARLOTTE</td></h5>
<h5><td onClick={()=>window.open("https://www.bayfrontcharlotte.com/?utm_campaign=biz-listings&utm_source=chs-web&utm_medium=gmb", "_blank")}>BAYFRONT HEALTH PUNTA GORDA</td></h5>
<h5><td onClick={()=>window.open("https://www.bethesdaweb.com/", "_blank")}>BETHESDA HOSPITAL EAST</td></h5>
<h5><td onClick={()=>window.open("https://blakemedicalcenter.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_1", "_blank")}>BLAKE MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.brrh.com/", "_blank")}>BOCA RATON REGIONAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://brandonhospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_12", "_blank")}>BRANDON REGIONAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.browardhealth.org/", "_blank")}>BROWARD HEALTH CORAL SPRINGS</td></h5>
<h5><td onClick={()=>window.open("https://www.browardhealth.org/", "_blank")}>BROWARD HEALTH IMPERIAL POINT</td></h5>
<h5><td onClick={()=>window.open("https://www.browardhealth.org/", "_blank")}>BROWARD HEALTH MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.browardhealth.org/", "_blank")}>BROWARD HEALTH NORTH</td></h5>
<h5><td onClick={()=>window.open("https://hf.org/hospitals_services/cch/", "_blank")}>CAPE CANAVERAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("http://www.leehealth.org/facilities/cape-coral-hospital.asp", "_blank")}>CAPE CORAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://capitalregionalmedicalcenter.com/", "_blank")}>CAPITAL REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://centralfloridaregional.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=NFlorida_3", "_blank")}>CENTRAL FLORIDA REGIONAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.citrusmh.com/", "_blank")}>CITRUS MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://my.clevelandclinic.org/", "_blank")}>CLEVELAND CLINIC HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.coralgableshospital.com/", "_blank")}>CORAL GABLES HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.delraymedicalctr.com/", "_blank")}>DELRAY MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.dmh.org/", "_blank")}>DESOTO MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.tmh.org/doctors-memorial-hospital", "_blank")}>DOCTOR'S MEMORIAL HOSPITAL INC</td></h5>
<h5><td onClick={()=>window.open("https://doctorsofsarasota.com/", "_blank")}>DOCTORS HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://doctorsofsarasota.com/", "_blank")}>DOCTORS HOSPITAL OF SARASOTA</td></h5>
<h5><td onClick={()=>window.open("https://www.miamijewishhealth.org/healthcare-services-programs/hospital/", "_blank")}>DOUGLAS GARDENS HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://edfraserhospital.com/", "_blank")}>ED FRASER MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://englewoodcommhospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_67", "_blank")}>ENGLEWOOD COMMUNITY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://fawcetthospital.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=wflorida_77", "_blank")}>FAWCETT MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.flaglerhospital.org/", "_blank")}>FLAGLER HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-orlando", "_blank")}>FLORIDA HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-carrollwood", "_blank")}>FLORIDA HOSPITAL CARROLLWOOD</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-deland", "_blank")}>FLORIDA HOSPITAL DELAND</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-fish-memorial", "_blank")}>FLORIDA HOSPITAL FISH MEMORIAL</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-palm-coast?utm_source=local-listing&utm_medium=organic&utm_campaign=website-link", "_blank")}>FLORIDA HOSPITAL FLAGLER</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-sebring", "_blank")}>FLORIDA HOSPITAL HEARTLAND MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-daytona-beach", "_blank")}>FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-new-smyrna-beach", "_blank")}>FLORIDA HOSPITAL NEW SMYRNA</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-north-pinellas", "_blank")}>FLORIDA HOSPITAL NORTH PINELLAS</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-tampa", "_blank")}>FLORIDA HOSPITAL TAMPA</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-waterman", "_blank")}>FLORIDA HOSPITAL WATERMAN</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-wesley-chapel", "_blank")}>FLORIDA HOSPITAL WESLEY CHAPEL</td></h5>
<h5><td onClick={()=>window.open("https://www.adventhealth.com/hospital/adventhealth-zephyrhills", "_blank")}>FLORIDA HOSPITAL ZEPHYRHILLS</td></h5>
<h5><td onClick={()=>window.open("https://fwbmc.com/", "_blank")}>FORT WALTON BEACH MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.goodsamaritanmc.com/", "_blank")}>GOOD SAMARITAN MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.ebaptisthealthcare.org/gulfbreezehospital", "_blank")}>GULF BREEZE HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("http://www.leehealth.org/facilities/gulf-coast-medical-center.asp", "_blank")}>GULF COAST MEDICAL CENTER LEE MEM HEALTH SYSTEM</td></h5>
<h5><td onClick={()=>window.open("https://gcmc-pc.com/?utm_campaign=corp_listings_mgmt&utm_source=google&utm_medium=business_listing&utm_content=Nflorida_5", "_blank")}>GULF COAST REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.halifaxhealth.org/locations/hospitals/halifax-health-medical-center", "_blank")}>HALIFAX HEALTH MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.orlandohealth.com/facilities/health-central-hospital", "_blank")}>HEALTH CENTRAL</td></h5>
<h5><td onClick={()=>window.open("http://69.195.120.150/", "_blank")}>HEALTHMARK REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.heartofflorida.com/", "_blank")}>HEART OF FLORIDA REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.hialeahhosp.com/", "_blank")}>HIALEAH HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://highlandsregional.com/", "_blank")}>HIGHLANDS REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://hf.org/hospitals_services/hrmc/index.cfm", "_blank")}>HOLMES REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.holy-cross.com/", "_blank")}>HOLY CROSS HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baptisthealth.net/en/facilities/homestead-hospital/pages/default.aspx", "_blank")}>HOMESTEAD HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.indianrivermedicalcenter.com/", "_blank")}>INDIAN RIVER MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.jackson-hospital.com/", "_blank")}>JACKSON HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://jacksonhealth.org/", "_blank")}>JACKSON MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.ebaptisthealthcare.org/JayHospital", "_blank")}>JAY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://jfkmc.com/", "_blank")}>JFK MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.jupitermed.com/", "_blank")}>JUPITER MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://kendallmed.com/", "_blank")}>KENDALL REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://lakecitymedical.com/", "_blank")}>LAKE CITY MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.lakewalesmedicalcenter.com/", "_blank")}>LAKE WALES MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://mylrh.org/", "_blank")}>LAKELAND REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.hcdpbc.org/for-patients/hospital", "_blank")}>LAKESIDE MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.lakewoodranchmedicalcenter.com/", "_blank")}>LAKEWOOD RANCH MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://largomedical.com/", "_blank")}>LARGO MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("http://www.larkinhospital.com/site/", "_blank")}>LARKIN COMMUNITY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("http://www.larkinhospital.com/site/", "_blank")}>LARKIN COMMUNITY HOSPITAL PALM SPRINGS CAMPUS</td></h5>
<h5><td onClick={()=>window.open("https://lawnwoodmed.com/", "_blank")}>LAWNWOOD REGIONAL MEDICAL CENTER & HEART INSTITUTE</td></h5>
<h5><td onClick={()=>window.open("http://www.leehealth.org/facilities/lee-memorial-hospital.asp", "_blank")}>LEE MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.leesburgregional.org/", "_blank")}>LEESBURG REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.lehighregional.com/", "_blank")}>LEHIGH REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.lkmc.com/", "_blank")}>LOWER KEYS MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.manateememorial.com/", "_blank")}>MANATEE MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.martinhealth.org/mhs-martin-medical-center", "_blank")}>MARTIN MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.mayoclinic.org/", "_blank")}>MAYO CLINIC</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/hospitals/mease-countryside-hospital/patients-and-visitors", "_blank")}>MEASE COUNTRYSIDE HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/hospitals/mease-dunedin-hospital/patients-and-visitors", "_blank")}>MEASE DUNEDIN HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://medicalcentertrinity.com/", "_blank")}>MEDICAL CENTER OF TRINITY</td></h5>
<h5><td onClick={()=>window.open("https://memorialhospitaljax.com/", "_blank")}>MEMORIAL HOSPITAL JACKSONVILLE</td></h5>
<h5><td onClick={()=>window.open("https://www.mhs.net/locations/memorial-miramar", "_blank")}>MEMORIAL HOSPITAL MIRAMAR</td></h5>
<h5><td onClick={()=>window.open("https://memorialhospitaltampa.com/", "_blank")}>MEMORIAL HOSPITAL OF TAMPA</td></h5>
<h5><td onClick={()=>window.open("https://www.mhs.net/locations/memorial-pembroke", "_blank")}>MEMORIAL HOSPITAL PEMBROKE</td></h5>
<h5><td onClick={()=>window.open("https://www.mhs.net/locations/memorial-west", "_blank")}>MEMORIAL HOSPITAL WEST</td></h5>
<h5><td onClick={()=>window.open("https://www.mhs.net/locations/memorial-regional", "_blank")}>MEMORIAL REGIONAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/hospitals/morton-plant-north-bay-hospital/patients-and-visitors", "_blank")}>MORTON PLANT HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/hospitals/morton-plant-north-bay-hospital/patients-and-visitors", "_blank")}>MORTON PLANT NORTH BAY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.msmc.com/", "_blank")}>MOUNT SINAI MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.practicelink.com/facility/Munroe-Regional-Medical-Center/Community-Health-Systems/", "_blank")}>MUNROE REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.nchmd.org/", "_blank")}>NAPLES COMMUNITY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://nfrmc.com/", "_blank")}>NORTH FLORIDA REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.northokaloosa.com/", "_blank")}>NORTH OKALOOSA MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.northshoremedical.com/", "_blank")}>NORTH SHORE MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.northside.com/", "_blank")}>NORTHSIDE HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://northwestmed.com/", "_blank")}>NORTHWEST MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://oakhillhospital.com/", "_blank")}>OAK HILL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://ocalahealthsystem.com/", "_blank")}>OCALA REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://orangeparkmedical.com/", "_blank")}>ORANGE PARK MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.orlandohealth.com/", "_blank")}>ORLANDO HEALTH</td></h5>
<h5><td onClick={()=>window.open("https://osceolaregional.com/", "_blank")}>OSCEOLA REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://hf.org/hospitals_services/pbch/index.cfm", "_blank")}>PALM BAY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("http://www.google.com", "_blank")}>PALM BEACH GARDENS MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.palmettogeneral.com/", "_blank")}>PALMETTO GENERAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://palmspasadena.com/", "_blank")}>PALMS OF PASADENA HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://palmswesthospital.com/", "_blank")}>PALMS WEST HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.parrishhealthcare.com/", "_blank")}>PARRISH MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.physiciansregional.com/physicians-regional-pine-ridge", "_blank")}>PHYSICIANS REGIONAL MEDICAL CENTER - PINE RIDGE</td></h5>
<h5><td onClick={()=>window.open("https://plantationgeneral.com", "_blank")}>PLANTATION GENERAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://poincianamedicalcenter.com", "_blank")}>POINCIANA MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.promise-miami.com", "_blank")}>PROMISE HOSPITAL OF MIAMI</td></h5>
<h5><td onClick={()=>window.open("https://pcmcfl.com", "_blank")}>PUTNAM COMMUNITY MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://raulersonhospital.com", "_blank")}>RAULERSON HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://bayonetpointhospital.com", "_blank")}>REGIONAL MEDICAL CENTER BAYONET POINT</td></h5>
<h5><td onClick={()=>window.open("http://www.google.com", "_blank")}>SACRED HEART HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("http://www.google.com", "_blank")}>SACRED HEART HOSPITAL ON THE EMERALD COAST</td></h5>
<h5><td onClick={()=>window.open("http://www.google.com", "_blank")}>SACRED HEART HOSPITAL ON THE GULF</td></h5>
<h5><td onClick={()=>window.open("https://www.srmcfl.com", "_blank")}>SANTA ROSA MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.smh.com", "_blank")}>SARASOTA MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.sebastianrivermedical.org", "_blank")}>SEBASTIAN RIVER MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.bayfrontsevenrivers.com", "_blank")}>SEVEN RIVERS REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.shandslakeshore.com", "_blank")}>SHANDS LAKE SHORE REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://southbayhospital.com", "_blank")}>SOUTH BAY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/sfbh", "_blank")}>SOUTH FLORIDA BAPTIST HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.southlakehospital.com", "_blank")}>SOUTH LAKE HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baptisthealth.net", "_blank")}>SOUTH MIAMI HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.stanthonyhospital.org", "_blank")}>ST ANTHONYS HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.stcloudregional.com", "_blank")}>ST CLOUD REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/sjh", "_blank")}>ST JOSEPHS HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://stluciemed.com", "_blank")}>ST LUCIE MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.stmarysmc.com", "_blank")}>ST MARY'S MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://stpetegeneral.com", "_blank")}>ST PETERSBURG GENERAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.stvincents.org", "_blank")}>ST VINCENT'S MEDICAL CENTER RIVERSIDE</td></h5>
<h5><td onClick={()=>window.open("https://www.stvincents.org", "_blank")}>ST VINCENT'S MEDICAL CENTER SOUTHSIDE</td></h5>
<h5><td onClick={()=>window.open("https://www.stvincents.org", "_blank")}>ST VINCENTS MEDICAL CENTER - CLAY COUNTY</td></h5>
<h5><td onClick={()=>window.open("https://memorialhospitaltampa.com", "_blank")}>TALLAHASSEE MEMORIAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.tgh.org", "_blank")}>TAMPA COMMUNITY HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.tgh.org", "_blank")}>TAMPA GENERAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://tchospital.com", "_blank")}>TWIN CITIES HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://ufhealthjax.org", "_blank")}>UF HEALTH JACKSONVILLE</td></h5>
<h5><td onClick={()=>window.open("https://ufhealth.org", "_blank")}>UF HEALTH SHANDS HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://uhmchealth.co", "_blank")}>UNIVERSITY HOSPITAL AND MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://umiamihealth.org", "_blank")}>UNIVERSITY OF MIAMI HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.veniceregional.com", "_blank")}>VENICE REGIONAL MEDICAL CENTER - BAYFRONT HEALTH</td></h5>
<h5><td onClick={()=>window.open("https://hf.org/hospitals_services/viera/index.cfm", "_blank")}>VIERA HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.thevillagesregionalhospital.org", "_blank")}>VILLAGES REGIONAL HOSPITAL, THE</td></h5>
<h5><td onClick={()=>window.open("https://www.wellingtonregional.com", "_blank")}>WELLINGTON REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://www.westbocamedctr.com", "_blank")}>WEST BOCA MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://westfloridahospital.com", "_blank")}>WEST FLORIDA HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baptisthealth.net/en/facilities/west-kendall-baptist-hospital/pages/default.aspx", "_blank")}>WEST KENDALL BAPTIST HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://baptisthealth.net/en/facilities/west-kendall-baptist-hospital/pages/default.aspx", "_blank")}>WEST PALM HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("http://www.westchesterhospital.com", "_blank")}>WESTCHESTER GENERAL HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://westsideregional.com/", "_blank")}>WESTSIDE REGIONAL MEDICAL CENTER</td></h5>
<h5><td onClick={()=>window.open("https://baycare.org/hospitals/winter-haven-hospital/patients-and-visitors", "_blank")}>WINTER HAVEN HOSPITAL</td></h5>
<h5><td onClick={()=>window.open("https://www.melbourneregional.org", "_blank")}>WUESTHOFF MEDICAL CENTER-MELBOURNE</td></h5>
<h5><td onClick={()=>window.open("https://www.rockledgeregional.org", "_blank")}>WUESTHOFF MEDICAL CENTER-ROCKLEDGE</td></h5>
				
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
