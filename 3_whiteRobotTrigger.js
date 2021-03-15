dobottd = {
    "@context": [
        "https://www.w3.org/2019/wot/td/v1",
        {
            "@language": "en"
        }
    ],
    "id": "urn:dev:ops:32473-DobotMagician-001",
    "title": "DobotMagician",
    "description": "Robot arm on a sliding rail",
    "properties": {
        "position": {
            "type": "object",
            "description": "Position of the end effector. x,y,z are dependent of each other",
            "properties": {
                "x": {
                    "type": "number",
                    "maximum": 300,
                    "minimum": 220
                },
                "y": {
                    "type": "number",
                    "maximum": 40,
                    "minimum": 5
                },
                "z": {
                    "type": "number",
                    "maximum": 45,
                    "minimum": -45
                },
                "r": {
                    "type": "number",
                    "maximum": 180,
                    "minimum": -180
                },
                "l": {
                    "type": "number",
                    "maximum": 1000,
                    "minimum": 0
                }
            },
            "readOnly": false,
            "writeOnly": false,
            "observable": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/properties/position",
                    "contentType": "application/json",
                    "op": [
                        "readproperty",
                        "writeproperty"
                    ]
                }
            ]
        }
    },
    "actions": {
        "moveToStartPosition": {
            "title": "Move to Start Position",
            "description": "The robot moves to the default start position",
            "output": {
                "const": "At the start position"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/moveToStartPosition",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "pickObjectPosition1": {
            "title": "Pick Object at Position 1",
            "description": "The robot picks the object at the preprogrammed position 1",
            "output": {
                "const": "Dobot magician is picking object at position 1"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/pickObjectPosition1",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "pickObjectPosition2": {
            "title": "Pick Object at Position 2",
            "description": "The robot picks the object at position 2",
            "output": {
                "const": "Dobot magician is picking object at position 2"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/pickObjectPosition2",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "moveToObjectRed": {
            "title": "Move to Object Red",
            "description": "Robot moves the object to the preprogrammed location for red colored objects",
            "output": {
                "const": "Dobot magician is moving object at the color dependent position"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/moveToObjectRed",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "moveToObjectGreen": {
            "title": "Move to Object Green",
            "description": "Robot moves the object to the preprogrammed location for green colored objects",
            "output": {
                "const": "Dobot magician is moving object at the color dependent position"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/moveToObjectGreen",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "moveToObjectBlue": {
            "title": "Move to Object Blue",
            "description": "Robot moves the object to the preprogrammed location for blue colored objects",
            "output": {
                "const": "Dobot magician is moving object at the color dependent position"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/moveToObjectBlue",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "moveToObjectNone": {
            "title": "Move to Object None",
            "description": "The robot moves the object to preprogrammed position for objects whose color cannot be detected",
            "output": {
                "const": "Dobot magician is moving object at the color dependent position"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/moveToObjectNone",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        }
    },
    "security": "basic_sc",
    "securityDefinitions": {
        "basic_sc": {
            "in": "header",
            "scheme": "basic"
        }
    },
    "forms": [
        {
            "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/all/properties",
            "contentType": "application/json",
            "op": [
                "writeallproperties",
                "writemultipleproperties"
            ]
        }
    ]
}
infraredtd = {
    "@context": [
        "https://www.w3.org/2019/wot/td/v1",
        {
            "@language": "en"
        }
    ],
    "@type": "",
    "id": "urn:dev:ops:32473-InfraredSensor-001",
    "title": "InfraredSensor1",
    "description": "Infrared sensor for the detection of objects",
    "properties": {
        "objectPresence": {
            "title": "Read infrared sensor",
            "description": "Reads the infrared sensor; 0: no object in front; 1: object in front.",
            "type": "boolean",
            "observable": true,
            "readOnly": false,
            "writeOnly": false,
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/properties/objectPresence",
                    "contentType": "application/json",
                    "op": [
                        "readproperty",
                        "writeproperty"
                    ]
                },
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/properties/objectPresence/observable",
                    "contentType": "application/json",
                    "op": [
                        "observeproperty"
                    ],
                    "subprotocol": "longpoll"
                }
            ]
        }
    },
    "events": {
        "detectedObject": {
            "title": "Object detected",
            "description": "Detects the rising edge of the signal of the infrared sensor.",
            "data": {
                "type": "boolean"
            },
            "forms": [
                {
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/events/detectedObject",
                    "contentType": "application/json",
                    "subprotocol": "longpoll",
                    "op": [
                        "subscribeevent"
                    ]
                }
            ]
        }
    },
    "security": "basic_sc",
    "securityDefinitions": {
        "basic_sc": {
            "in": "header",
            "scheme": "basic"
        }
    },
    "forms": [
        {
            "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/all/properties",
            "contentType": "application/json",
            "op": [
                "writeallproperties",
                "writemultipleproperties"
            ]
        }
    ]
}

const process = require('process');
Servient = require("@node-wot/core").Servient;

HttpsClientFactory = require("@node-wot/binding-http").HttpsClientFactory;

let servient = new Servient();
servient.addClientFactory(new HttpsClientFactory(null));



servient.addCredentials({
    "urn:dev:ops:32473-DobotMagician-001": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    },
    "urn:dev:ops:32473-InfraredSensor-001": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    }


});



Move();

async function Move() {


    try {
        obj = await servient.start();
        //consume all hue sensors
        dobotthing = await obj.consume(dobottd);
        infrathing = await obj.consume(infraredtd);


        infrathing.subscribeEvent("detectedObject", async (eventData) => {
            try {
                console.log("Event data: " +  eventData);
                console.log("event triggered")
                process.exit();
            } catch (error) {
                console.error("Cannot read the ready event or startMeasurement failed");
                console.error(error);
                process.exit();
            }
        });

        dobotthing.invokeAction("pickObjectPosition1")


    }
    catch (err) {
        console.error("Script error:", err);
    }


}






