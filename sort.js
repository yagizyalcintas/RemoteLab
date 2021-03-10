const TD_DIRECTORY = ""

Servient = require("@node-wot/core").Servient;


HttpServer = require("@node-wot/binding-http").HttpServer
CoapServer = require("@node-wot/binding-coap").CoapServer
MqttBrokerServer = require("@node-wot/binding-mqtt").MqttBrokerServer

Helpers = require("@node-wot/core").Helpers;

HttpClientFactory = require("@node-wot/binding-http").HttpClientFactory;
CoapClientFactory = require("@node-wot/binding-coap").CoapClientFactory;

//var mqttserver = new MqttBrokerServer("mqtt://localhost");
var httpServer = new HttpServer({port: 8080});
var coapServer = new CoapServer({port: 5683});


var servient = new Servient();
servient.addServer(httpServer);
servient.addServer(coapServer);
//servient.addServer(mqttserver)
servient.addClientFactory(new HttpClientFactory(null))
servient.addClientFactory(new CoapClientFactory(null))

servient.addCredentials({
    "urn:dev:ops:32473-DobotMagician-001": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    },
    "urn:dev:ops:32473-InfraredSensor-001": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    },

    "de:tum:ei:esi:uArm": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    },
    "urn:dev:ops:32473-ConveyorBelt-001": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    }
});


const whiteBottd = {
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
                    "href": "http://172.16.1.155:8080/DobotMagician/properties/position",
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
                    "href": "http://172.16.1.155:8080/DobotMagician/actions/moveToStartPosition",
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
                    "href": "http://172.16.1.155:8080/DobotMagician/actions/pickObjectPosition1",
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
                    "href": "http://172.16.1.155:8080/DobotMagician/actions/pickObjectPosition2",
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
                    "href": "http://172.16.1.155:8080/DobotMagician/actions/moveToObjectRed",
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
                    "href": "http://172.16.1.155:8080/DobotMagician/actions/moveToObjectGreen",
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
                    "href": "http://172.16.1.155:8080/DobotMagician/actions/moveToObjectBlue",
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
                    "href": "http://172.16.1.155:8080/DobotMagician/actions/moveToObjectNone",
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
            "href": "http://172.16.1.155:8080/DobotMagician/all/properties",
            "contentType": "application/json",
            "op": [
                "writeallproperties",
                "writemultipleproperties"
            ]
        }
    ]
}
const infrasensortd = {
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
                    "href": "http://172.16.1.151:8080/InfraredSensor1/properties/objectPresence",
                    "contentType": "application/json",
                    "op": [
                        "readproperty",
                        "writeproperty"
                    ]
                },
                {
                    "href": "http://172.16.1.151:8080/InfraredSensor1/properties/objectPresence/observable",
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
                    "href": "http://172.16.1.151:8080/InfraredSensor1/events/detectedObject",
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
            "href": "http://172.16.1.151:8080/InfraredSensor1/all/properties",
            "contentType": "application/json",
            "op": [
                "writeallproperties",
                "writemultipleproperties"
            ]
        }
    ]
}
const uarmtd = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "actions": {
        "beep": {
            "description": "Beep for 1 sec",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/beep",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/beep",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": true,
            "safe": false,
            "title": "Beep"
        },
        "beepWithTime": {
            "description": "Beep for a time set between 1-3 sec",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/beepwithtime",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/beepwithtime",
                    "mqv:commandCode": 3,
                    "op": "invokeaction"
                }
            ],
            "idempotent": true,
            "input": {
                "maximum": 3,
                "minimum": 1,
                "type": "integer"
            },
            "safe": false,
            "title": "Beep with Time set"
        },
        "goHome": {
            "description": "Go to the set home point",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/gohome",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/gohome",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": false,
            "safe": false,
            "title": "Go Home"
        },
        "goTo": {
            "description": "Move to Position x,y,z given by the user with fixed speed=3000",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/goto",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/goto",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": true,
            "input": {
                "properties": {
                    "x": {
                        "maximum": 250,
                        "minimum": 50,
                        "type": "integer"
                    },
                    "y": {
                        "maximum": 350,
                        "minimum": -350,
                        "type": "number"
                    },
                    "z": {
                        "maximum": 60,
                        "minimum": -5,
                        "type": "integer"
                    }
                },
                "required": [
                    "x",
                    "y",
                    "z"
                ],
                "type": "object"
            },
            "safe": false,
            "title": "Go to position"
        },
        "goWithSpeed": {
            "description": "Move to described Position with set speed",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/gowithspeed",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/gowithspeed",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": true,
            "input": {
                "properties": {
                    "speed": {
                        "maximum": 10000,
                        "minimum": 100,
                        "type": "integer"
                    },
                    "x": {
                        "maximum": 250,
                        "minimum": 50,
                        "type": "integer"
                    },
                    "y": {
                        "maximum": 350,
                        "minimum": -350,
                        "type": "integer"
                    },
                    "z": {
                        "maximum": 60,
                        "minimum": -5,
                        "type": "integer"
                    }
                },
                "required": [
                    "x",
                    "y",
                    "z",
                    "speed"
                ],
                "type": "object"
            },
            "safe": false,
            "title": "Go to with speed"
        },
        "gripClose": {
            "description": "Closes the grip",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/gripclose",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/gripclose",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": true,
            "safe": false,
            "title": "Close Grip"
        },
        "gripOpen": {
            "description": "Opens the grip",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/gripopen",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/gripopen",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": true,
            "safe": false,
            "title": "Open Grip"
        },
        "sequence1": {
            "description": "Routine to move to a position and close the grip",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/sequence1",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/sequence1",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": true,
            "safe": false,
            "title": "Grip Routine"
        },
        "turnLeft": {
            "description": "Turn robot arm to left for 1 step",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/turnleft",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/turnleft",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": false,
            "input": {
                "properties": {
                    "y": {
                        "maximum": 350,
                        "miniqmum": -350,
                        "type": "number"
                    }
                },
                "required": [
                    "y"
                ],
                "type": "object"
            },
            "safe": false,
            "title": "Turn Left"
        },
        "turnRight": {
            "description": "Turn robot arm to right for a certain distance (has yet to be implemented in loT.py)",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/actions/turnright",
                    "htv:methodName": "POST",
                    "op": "invokeaction"
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/actions/turnright",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "invokeaction"
                }
            ],
            "idempotent": false,
            "input": {
                "properties": {
                    "y": {
                        "maximum": 350,
                        "minimum": -350,
                        "type": "number"
                    }
                },
                "required": [
                    "y"
                ],
                "type": "object"
            },
            "safe": false,
            "title": "Turn Right"
        }
    },
    "id": "de:tum:ei:esi:uArm",
    "properties": {
        "homeLoc": {
            "description": "Home location, can be set to a new value. goHome action goes there",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/properties/homeloc",
                    "op": [
                        "readproperty",
                        "writeproperty"
                    ]
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/properties/homeloc",
                    "mqv:controlPacketValue": "SUBSCRIBE",
                    "op": [
                        "readproperty",
                        "observeproperty"
                    ]
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/properties/homeloc/writeproperty",
                    "mqv:controlPacketValue": "PUBLISH",
                    "op": "writeproperty"
                }
            ],
            "properties": {
                "x": {
                    "maximum": 250,
                    "minimum": 50,
                    "type": "integer"
                },
                "y": {
                    "maximum": 350,
                    "minimum": -350,
                    "type": "integer"
                },
                "z": {
                    "maximum": 60,
                    "minimum": -5,
                    "type": "integer"
                }
            },
            "required": [
                "x",
                "y",
                "z"
            ],
            "title": "Home location",
            "type": "object"
        },
        "location": {
            "description": "Gives back the current location",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "http://172.16.1.150:8080/uarm/properties/location",
                    "op": [
                        "readproperty"
                    ]
                },
                {
                    "contentType": "application/json",
                    "href": "mqtt://dbbroker.local:1883/uarm/properties/location",
                    "mqv:controlPacketValue": "SUBSCRIBE",
                    "op": [
                        "readproperty",
                        "observeproperty"
                    ]
                }
            ],
            "properties": {
                "x": {
                    "maximum": 250,
                    "minimum": 50,
                    "type": "integer"
                },
                "y": {
                    "maximum": 350,
                    "minimum": -350,
                    "type": "integer"
                },
                "z": {
                    "maximum": 60,
                    "minimum": -5,
                    "type": "integer"
                }
            },
            "required": [
                "x",
                "y",
                "z"
            ],
            "title": "Return location",
            "type": "object"
        }
    },
    "security": "basic_sc",
    "securityDefinitions": {
        "basic_sc": {
            "in": "header",
            "scheme": "basic"
        }
    },
    "title": "Uarm"
}
const converyorbelt1td = {
    "@context": [
        "https://www.w3.org/2019/wot/td/v1",
        {
            "@language": "en"
        }
    ],
    "@type": "",
    "id": "urn:dev:ops:32473-ConveyorBelt-001",
    "title": "ConveyorBelt1",
    "base": "http://172.16.1.153:8080/ConveyorBelt1/",
    "description": "Stepper motor on a Rpi that makes a conveyor belt",
    "security": "basic_sc",
    "securityDefinitions": {
        "basic_sc": {
            "in": "header",
            "scheme": "basic"
        }
    },
    "properties": {
        "speed": {
            "title": "Speed",
            "description": "Speed of the conveyor belt",
            "type": "integer",
            "unit": "%",
            "minimum": 1,
            "maximum": 100,
            "readOnly": false,
            "writeOnly": false,
            "observable": false,
            "forms": [
                {
                    "href": "properties/speed",
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
        "startBeltForward": {
            "title": "Start conveyor belt",
            "description": "This action starts moving the conveyor belt forward",
            "output": {
                "const": "Conveyor belt started"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "actions/startBeltForward",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "startBeltBackward": {
            "title": "Start conveyor belt",
            "description": "This action starts moving the conveyor belt backward",
            "output": {
                "const": "Conveyor belt started"
            },
            "synchronous": true,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "actions/startBeltBackward",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        },
        "stopBelt": {
            "title": "Stop conveyor belt",
            "description": "This action stops moving the conveyor belt",
            "output": {
                "const": "Conveyor belt stopped"
            },
            "synchronous": false,
            "idempotent": false,
            "safe": false,
            "forms": [
                {
                    "href": "actions/stopBelt",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ],
                    "htv:methodName": "POST"
                }
            ]
        }
    },
    "forms": [
        {
            "href": "all/properties",
            "contentType": "application/json",
            "op": [
                "writeallproperties",
                "writemultipleproperties"
            ]
        }
    ]
}
const positionBehindRedCube = {

    "speed": 10000, "x": 225, "y": -115, "z": -5
}
const positionToPickRedCube = {

    "speed": 10000, "x": 235, "y": -135, "z": -5
}
const positionToPickGreen={
    "speed": 10000, "x":235, "y":-25, "z":-5
}
const positionToPickNone={
    "speed": 10000,"x":225,"y":115,"z":-5
}
const positionToPickBlue={
    "speed": 10000,"x":220, "y":49, "z":-5
}
const positionP1 = {

    "speed": 10000, "x": 100,
    "y": -300,
    "z": 0
}

///////////////////////


servient.start().then((WoT) => {
    WoT.produce({
    title: 'cubeSorter',
    description: `A hierarchical Mashup-thing that sort the cube on your behalf 
    and you can also know the state of sorting, that mean where your cube currently is.`,
    '@context': [
        'https://www.w3.org/2019/wot/td/v1',
    ],
    properties: {
        cubePosition: {
            type: 'string',
            description: `Shows the current position of cube. The property is observable. It is updated
            as and when the cube is heldByUarm, onConveyorBelt1,
            onConveyorBelt2, stopped etc`,
            observable: true,
            readOnly: false,
            writeOnly: false
        }
    },
    actions: {
        sortCube: {
            description: `Mashup sorting starts upon accepting the color of cube to be sorted  as input  `,
            input: {
                type: 'string',
                enum: ['red', 'blue', 'green', 'none']
            },
            output: {
                type: 'string',
                description: `Returns a message when the sorting begins`,

            },
        }
    },
    securityDefinitions: {
        "nosec_sc": {
            "scheme": "nosec"
        }
    },
    security: ["nosec_sc"]

    }).then((thing) => {

        async function Mashup(thing, color) {
            //wot helper object
            //let woTHelper = new WoT.Helpers(servient);
            
            cubeSortLoop(WoT,thing,color);
            
            }

        //initialize the cubeposition property
        thing.writeProperty('cubePosition', ['heldByUarm', 'onConveyorBelt1', 'onConveyorBelt2', 'stopped', 'heldByDobot', 'sorted']);

        // Observe the value of cubeposition property
        thing.observeProperty('cubePosition', (data) => {
            
            console.log("cubePosition has been chnaged");
        
        });

        // Set up a handler for sortCube action
        thing.setActionHandler('sortCube', (params) => {
            console.log("sorting started");
            if(params =="red"||params =="blue"||params =="green"||params =="none")
            {
                Mashup(thing, params);
            }
        
            else
            {
                console.log("Try Again !!")
                console.log("Invalid cube color provided as input. Only red, blue, green ,none are accepted string values" );

            }
        
        });


        // Finally expose the thing
        thing.expose().then(() => { console.info(`${thing.getThingDescription().title} ready`); });
        console.log(`Produced ${thing.getThingDescription().title}`);
        


    }).catch(e => {
        console.log(e);
    });
});







async function cubeSortLoop(WoT,thing,color) {

    async function printCurrentSortStatus() {
        var p = await thing.readProperty('cubePosition');
        console.log("The current status is " + p);
    
    }
    try {
        //var obj = await servient.start();
        var whitebotthing;
        var infrasensorthing;
        var thingConvBelt;
        var thingUarm;
        whitebotthing = await WoT.consume(whiteBottd);
        infrasensorthing = await WoT.consume(infrasensortd);
        thingConvBelt = await WoT.consume(converyorbelt1td);
        thingUarm = await WoT.consume(uarmtd);
        //move uarm to home
        await thingUarm.invokeAction("goHome");

        //wait for 12 seconds to let it move to home position
        wait(12000);
        //open the grip if closed earlier
        await thingUarm.invokeAction("gripOpen");
        //wait 2 seconds to let the grip open
        wait(2000);
        if(color=="red")
        {
            console.log("sorting red");
             //move uarm to approach from behind
        await thingUarm.invokeAction("goWithSpeed", positionBehindRedCube);
        //wait for 10 seconds to let it move to position above red cube
        wait(10000);
        //go down to cube for final pickup
        await thingUarm.invokeAction("goWithSpeed", positionToPickRedCube);
        //wait for 5 seconds to let it move to final position to pickup red cube
        wait(5000);

        }
        if(color=="blue")
        {
            console.log("sorting blue");
             //move uarm to approach from behind
        await thingUarm.invokeAction("goWithSpeed", positionToPickBlue);
        //wait for 10 seconds to let it move to position above red cube
        wait(10000);
        

        }
        if(color=="green")
        {
            console.log("sorting green");
             //move uarm to approach from behind
        await thingUarm.invokeAction("goWithSpeed", positionToPickGreen);
        //wait for 10 seconds to let it move to position above red cube
        wait(10000);
        

        }
        if(color=="none")
        {
            console.log("sorting none/yellow");
             //move uarm to approach from behind
        await thingUarm.invokeAction("goWithSpeed", positionToPickNone);
        //wait for 10 seconds to let it move to position above red cube
        wait(10000);
        

        }
       
        //close the grip and grab the cube
        await thingUarm.invokeAction("gripClose");
        //wait 2 seconds to let the grip close
        wait(2000);
        //updating the status
        await thing.writeProperty('cubePosition', 'heldByUarm');
        await printCurrentSortStatus();
        //go to P1 position
        await thingUarm.invokeAction("goWithSpeed", positionP1);
        //wait for 10 seconds to let it move to  position p1 to drop cube
        wait(10000);
        //drop the cube
        await thingUarm.invokeAction("gripOpen");
        //wait 2 seconds to let the grip open so that cube drops on belt
        wait(2000);
        //updating the status
        await thing.writeProperty('cubePosition', 'onConveyorBelt1');
        await printCurrentSortStatus();
        //subscribe before running the belt
        infrasensorthing.subscribeEvent("detectedObject", async (x) => {

            console.info("cube detected..", x);
            await thingConvBelt.invokeAction("stopBelt");
            wait(2000);
            //updating the status
            await thing.writeProperty('cubePosition', 'stopped');
            await printCurrentSortStatus();
            await whitebotthing.invokeAction("pickObjectPosition1");
            wait(10000);
            //updating the status
            await thing.writeProperty('cubePosition', 'heldByDobot');
            await printCurrentSortStatus();

            await whitebotthing.invokeAction("moveToObjectRed");
            wait(5000);
            //updating the status
            await thing.writeProperty('cubePosition', 'sorted');
            await printCurrentSortStatus();
            console.log("sorting of red cube done")
            //send both bots to home
            await thingUarm.invokeAction("goHome");
            await whitebotthing.invokeAction("moveToStartPosition");
            wait(10000);
            console.log("END");


        });
        //run the belt forward
        await thingConvBelt.invokeAction("startBeltForward");


    }
    catch (err) {
        console.error("Script error:", err);
        
    }


}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}


