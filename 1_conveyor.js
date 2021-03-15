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


////////



const process = require('process');
Servient = require("@node-wot/core").Servient
HttpsClientFactory = require("@node-wot/binding-http").HttpsClientFactory

Helpers = require("@node-wot/core").Helpers
let servient = new Servient();


servient.addClientFactory(new HttpsClientFactory(null))



////////









servient.addCredentials({
    "urn:dev:ops:32473-ConveyorBelt-001": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"

    },
    "urn:dev:ops:32473-ConveyorBelt-002": {
        username: "3721475",
        password: "TmcRHW50sclbxlzh"}
});




Move();

async function Move() {


    try {
        obj = await servient.start();
        //consume all hue sensors
        belt1thing = await obj.consume(belt1td);
        belt2thing = await obj.consume(belt2td);


        belt1thing.invokeAction("startBeltForward");
        belt2thing.invokeAction("startBeltForward");

        setTimeout(async () => {
            await belt1thing.invokeAction("stopBelt");
            await belt2thing.invokeAction("stopBelt");
        }, 5000)

        setTimeout(async () => {
            await belt1thing.invokeAction("startBeltBackward");
            await belt2thing.invokeAction("startBeltBackward");
        }, 10000)

        setTimeout(async () => {
            await belt1thing.invokeAction("stopBelt");
            await belt2thing.invokeAction("stopBelt");
            process.exit();
        }, 15000)


    }
    catch (err) {
        console.error("Script error:", err);
    }


}






