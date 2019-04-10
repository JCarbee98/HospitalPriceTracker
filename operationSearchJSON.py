import json

openFile = open("C:/Users/Brandon Hahn/Documents/HospitalInpatient.json", "r").read()
writeFile = open("C:/Users/Brandon Hahn/Documents/NewAndImprovedInpatient.json", "w")

fieldNames = ("Hospital", "Operation")
mainJSON = {"Hospital":[], "Operation":{}}
oldJSON = json.loads(openFile)
for thing in oldJSON.keys():
    mainJSON["Hospital"].append({thing: oldJSON[thing]})



for liz in oldJSON.keys():
    for oper in oldJSON[liz]:
        operString = oper["DRG Definition"][oper["DRG Definition"].find(" - ") + 3:]
        if operString not in mainJSON["Operation"].keys():
            mainJSON["Operation"][operString] = []
        mainJSON["Operation"][operString].append(oper)
writeFile.write(json.dumps(mainJSON))
