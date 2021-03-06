blackrobottd = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "actions": {
        "beep": {
            "description": "Beep for 1 sec",
            "forms": [
                {
                    "contentType": "application/json",
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/beep",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/beepwithtime",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/gohome",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/goto",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/gowithspeed",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/gripclose",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/gripopen",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/sequence1",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/turnleft",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/actions/turnright",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/properties/homeloc",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/uarm/properties/location",
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


const process = require('process');
Servient = require("@node-wot/core").Servient
HttpsClientFactory = require("@node-wot/binding-http").HttpsClientFactory

Helpers = require("@node-wot/core").Helpers
let servient = new Servient();


servient.addClientFactory(new HttpsClientFactory(null))



servient.addCredentials({
    "de:tum:ei:esi:uArm": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    }
    

});



Move();

async function Move() {


    try {
        obj = await servient.start();
        //consume all hue sensors
        robotthing = await obj.consume(blackrobottd);
       


        await robotthing.invokeAction("goTo", {"x":100,"y":-300,"z":0});
        

        setTimeout(async () => {
            await robotthing.invokeAction("goTo", { "x": 50, "y": 330, "z": 0 });

        }, 10000)

        setTimeout(async () => {
            await robotthing.invokeAction("goTo", { "x": 150, "y": 0, "z": -5 });

        }, 20000)

        setTimeout(async () => {
            await robotthing.invokeAction("goTo", { "x": 200, "y": 0, "z": 20 });

            process.exit();
        }, 30000)

        setTimeout(async () => {
            await robotthing.invokeAction("goTo", { "x": 100, "y": 50, "z": 20 });

            process.exit();
        }, 40000)

        setTimeout(async () => {
            await robotthing.invokeAction("goTo", { "x": 100, "y": 200, "z": -5 });

            process.exit();
        }, 50000)


    }
    catch (err) {
        console.error("Script error:", err);
    }


}






