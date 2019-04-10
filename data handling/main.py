import csv
import json

jsonFile = open('fileName', 'r').read()
newJSONFile = open("fileName", 'w')
fieldNames = ("DRG Definition", "Provider ID", "Provider Name", "Provider Street Address", "Provider City", "Provider State", "Provider ZIP Code", "Hospital Referral Region (HRR) Description", "Total Discharges", "Average Covered Charges", "Average Total Payments", "Average Medicare Payments")

newJSON = json.loads(jsonFile)
floridaJSON = []



for thing in newJSON:
    if thing["Provider State"] == "FL":
        floridaJSON.append(thing)

hospitalJSON = {"test":[] }
for thing in floridaJSON:
    if thing["Provider Name"] not in hospitalJSON.keys():
        hospitalJSON[thing["Provider Name"]] = []
    hospitalJSON[thing["Provider Name"]].append(thing)


newJSONFile.write(json.dumps(hospitalJSON))
