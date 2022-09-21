module.exports = {
    "packagerConfig": {
        "name": "ItchySats Desktop",
        "appBundleId": "ItchySats",
        "icon": "logo.icns",
        "overwrite": true,
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "taker_electron",
            },
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "linux",
            ],
        },
        {
            "name": "@electron-forge/maker-dmg",
        },
    ],
    "publishers": [
        {
            "name": "@electron-forge/publisher-github",
            "config": {
                // todo: change to itchysats/itchysats
                "repository": {
                    "owner": "bonomat",
                    "name": "hermes",
                },
            },
        },
    ],
};
