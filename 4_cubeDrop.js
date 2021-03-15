uarmtd = {
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
belt1td = {
    "@context": [
        "https://www.w3.org/2019/wot/td/v1",
        {
            "@language": "en"
        }
    ],
    "@type": "",
    "id": "urn:dev:ops:32473-ConveyorBelt-001",
    "title": "ConveyorBelt1",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt1/properties/speed",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt1/actions/startBeltForward",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt1/actions/startBeltBackward",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt1/actions/stopBelt",
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
            "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt1/all/properties",
            "contentType": "application/json",
            "op": [
                "writeallproperties",
                "writemultipleproperties"
            ]
        }
    ]
}

belt2td = {
    "@context": [
        "https://www.w3.org/2019/wot/td/v1",
        {
            "@language": "en"
        }
    ],
    "@type": "",
    "id": "urn:dev:ops:32473-ConveyorBelt-002",
    "title": "ConveyorBelt2",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt2/properties/speed",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt2/actions/startBeltForward",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt2/actions/startBeltBackward",
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
                    "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt2/actions/stopBelt",
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
            "href": "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt2/all/properties",
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
Helpers = require("@node-wot/core").Helpers
let servient = new Servient();
servient.addClientFactory(new HttpsClientFactory(null));



servient.addCredentials({
    "de:tum:ei:esi:uArm": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    },
    "urn:dev:ops:32473-ConveyorBelt-001": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    },
    "urn:dev:ops:32473-ConveyorBelt-002":{
        username: "3721475",
        password: "TmcRHW50sclbxlzh"
    }



});

async function open(thing) {
    return x = await thing.invokeAction("gripOpen");
};

async function close(thing) {
    return x = await thing.invokeAction("gripClose");
};

Move();
//
async function Move() {


    try {
        obj = await servient.start();
        //consume all hue sensors
        conveyorChoice = 0
        rand = Math.random()
        console.log(rand)
        beltthing = 0
        if(rand >= 0.5){
            conveyorChoice = 1
            beltthing = await obj.consume(belt1td); 
        }
        else{
            conveyorChoice = 2
            beltthing = await obj.consume(belt2td);
        }
        uarmthing = await obj.consume(uarmtd);
        

        //await uarmthing.writeProperty("homeLoc", {"x": 128.58, "y": 0, "z": 19.72} ) //change x y z values with proper ones
        await uarmthing.invokeAction("goHome");


        setTimeout(async () => {
            await uarmthing.invokeAction("gripOpen");
        
        }, 10000)// wait until it goes home


        setTimeout(async () => {
            await uarmthing.invokeAction("goTo", {"x": 239, "y": -128, "z": 40});  //above the red cube
             
            setTimeout(async () => {
                await uarmthing.invokeAction("goTo", {"x": 239, "y": -128, "z": -5}); //go to cube`s height
                
                setTimeout(async () => {
                    close(uarmthing).then(async() => {
                        wait(1500)
                        if (conveyorChoice == 1){
                            await uarmthing.invokeAction("goTo", { "x":70, "y": -320, "z": 6}); //go to delivery point
                        }
                        else if (conveyorChoice == 2){
                            await uarmthing.invokeAction("goTo", { "x": 100, "y": 330, "z": 6}); //go to delivery point
                        }
                        
                        
                    })
                    
                    setTimeout(async () => {
                        open(uarmthing).then(async () => {
                            wait(1500)
                            await beltthing.invokeAction("startBeltForward")
                            setTimeout(async () => {
                                wait(1000)
                                await beltthing.invokeAction("stopBelt");
                                wait(1000)
                                await uarmthing.invokeAction("goHome");

                            }, 12000) //wait until cube falls 
                        })
                    }, 17000) //grip close + going to delivery point time

                }, 5000) //wait as grip lowers itself to cube level
            }, 10000) //wait 10 until it goes above cube
        }, 15000) //going home + grip open time

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






