TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_hq.jpeg"
      },
      {
       "height": 802,
       "class": "ImageResourceLevel",
       "width": 1605,
       "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 30.7,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 0.37,
        "image": {
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.29
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A9CDD502_A468_0A51_41D6_07C79FD0EAA9",
      "items": [
       {
        "hfov": 30.7,
        "yaw": 0.37,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 156,
           "class": "ImageResourceLevel",
           "width": 585,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.29
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.54,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 0.19,
        "image": {
         "levels": [
          {
           "height": 132,
           "class": "ImageResourceLevel",
           "width": 142,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.81
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A812CB62_A468_FED1_41E3_9FAFE1FCF6D1",
      "items": [
       {
        "hfov": 15.54,
        "yaw": 0.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 265,
           "class": "ImageResourceLevel",
           "width": 285,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.81
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_t.jpg",
  "audios": [
   {
    "loop": true,
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47.ogg",
     "mp3Url": "media/audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47.mp3"
    },
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47"
   }
  ],
  "cardboardMenu": {
   "rollOverBackgroundColor": "#000000",
   "fontFamily": "Arial",
   "fontColor": "#FFFFFF",
   "opacity": 0.4,
   "id": "Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverOpacity": 0.8,
   "class": "Menu",
   "children": [
    {
     "label": "Opening",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": " Gapura Timur",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "Beteng timur",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "Pintu selatan paduraksa",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "Halaman Depan",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "Tugu jam",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "Jagang",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "Serambi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "Bedug",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "Ruang Utama",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "label": "Depan Mimbar",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "label": "Pawestran",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "label": "Bangsal Utara",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "label": "Bangsal Selatan",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "rollOverFontColor": "#FFFFFF"
  },
  "label": "Opening",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "buttonCardboardView": "this.IconButton_4A66FE07_5CDD_2C7D_41C8_62D5E02BCE15",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "mouseControlMode": "drag_rotation"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_A88851C5_A468_0DD2_41D8_EA963347C751",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 11.37,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 4.76,
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696, this.camera_CB57C3A2_D218_62C3_41E4_7DCE6334C82E); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A82BE4D1_A4A8_0BF3_41DE_AD6CD1DB562D",
      "items": [
       {
        "hfov": 11.37,
        "yaw": 4.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 204,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 16.11,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 21.14,
        "image": {
         "levels": [
          {
           "height": 132,
           "class": "ImageResourceLevel",
           "width": 153,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 19.91
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A55A5AB4_A977_9072_41AA_7A02697B4876, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A8FC659B_A498_0A77_41B7_71038B18F42B",
      "items": [
       {
        "hfov": 16.11,
        "yaw": 21.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 265,
           "class": "ImageResourceLevel",
           "width": 306,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 19.91
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 24.11,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -16.48,
        "image": {
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 173,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A4637116_B482_3AE7_41D9_411908C96F8E",
      "items": [
       {
        "hfov": 24.11,
        "yaw": -16.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 507,
           "class": "ImageResourceLevel",
           "width": 439,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.04
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMin": 60,
     "vfov": 180,
     "id": "panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 13.51,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -76.29,
           "image": {
            "levels": [
             {
              "height": 124,
              "class": "ImageResourceLevel",
              "width": 120,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.14
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_A427AE2F_A991_906E_41CD_430E5C7A5D4C, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_A8BB811F_A498_0A6F_41C1_12D18D3EEAF4",
         "items": [
          {
           "hfov": 13.51,
           "yaw": -76.29,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 248,
              "class": "ImageResourceLevel",
              "width": 241,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.14
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 10.85,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -0.48,
           "image": {
            "levels": [
             {
              "height": 105,
              "class": "ImageResourceLevel",
              "width": 96,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.28
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_A46A114E_A996_902E_41D8_222F177FF178, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_A52B024C_A992_F012_41C2_9FCDCF8FD360",
         "items": [
          {
           "hfov": 10.85,
           "yaw": -0.48,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 210,
              "class": "ImageResourceLevel",
              "width": 193,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.28
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 23.82,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 42.56,
           "image": {
            "levels": [
             {
              "height": 42,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_4_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -14
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_BDFCB05E_B38E_1B67_41DC_2B167E922B7B",
         "items": [
          {
           "hfov": 23.82,
           "yaw": 42.56,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 95,
              "class": "ImageResourceLevel",
              "width": 438,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_4_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -14
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 11.29,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 42.67,
           "image": {
            "levels": [
             {
              "height": 102,
              "class": "ImageResourceLevel",
              "width": 102,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_5_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.05
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_BE77917C_B38F_FD2B_41AD_81AA81A4243B",
         "items": [
          {
           "hfov": 11.29,
           "yaw": 42.67,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 204,
              "class": "ImageResourceLevel",
              "width": 204,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_5_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.05
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 14.07,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 172.86,
           "image": {
            "levels": [
             {
              "height": 124,
              "class": "ImageResourceLevel",
              "width": 127,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_6_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.9
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751, this.camera_CB6BD3B0_D218_62DF_41C0_83D64F45000A); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_9A6DCF1C_965D_09CD_41D7_F7966D0E0061",
         "items": [
          {
           "hfov": 14.07,
           "yaw": 172.86,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 248,
              "class": "ImageResourceLevel",
              "width": 255,
              "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_6_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.9
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751",
       "class": "AdjacentPanorama",
       "yaw": 172.86,
       "backwardYaw": 4.76,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_t.jpg",
     "audios": [
      {
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4.ogg",
        "mp3Url": "media/audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4.mp3"
       },
       "class": "PanoramaAudio",
       "autoplay": true,
       "id": "audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4"
      }
     ],
     "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
     "label": "Beteng timur",
     "hfovMax": 120,
     "class": "Panorama"
    },
    "class": "AdjacentPanorama",
    "yaw": 4.76,
    "backwardYaw": 172.86,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_t.jpg",
  "audios": [
   {
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0.ogg",
     "mp3Url": "media/audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0.mp3"
    },
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0"
   }
  ],
  "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
  "label": " Gapura Timur",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A88851C5_A468_0DD2_41D8_EA963347C751_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_A73323B6_A99F_907E_41DA_9BA56748C827",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 17.52,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -176.57,
        "image": {
         "levels": [
          {
           "height": 180,
           "class": "ImageResourceLevel",
           "width": 156,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.29
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A78766D5_A993_9032_41DA_0A67D437776E",
      "items": [
       {
        "hfov": 17.52,
        "yaw": -176.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 360,
           "class": "ImageResourceLevel",
           "width": 313,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.29
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 12.43,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20,
        "image": {
         "levels": [
          {
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 139,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.24
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_E1CE937A_ED1F_4995_41ED_4A11955A0BB2, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_E6C2784D_ED1F_C78F_41C1_792A89CBBC6B",
      "items": [
       {
        "hfov": 12.43,
        "yaw": -20,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 292,
           "class": "ImageResourceLevel",
           "width": 279,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.24
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_t.jpg",
  "audios": [
   {
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11.ogg",
     "mp3Url": "media/audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11.mp3"
    },
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11"
   }
  ],
  "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
  "label": "Pintu selatan paduraksa",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A73323B6_A99F_907E_41DA_9BA56748C827_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 15.81,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 4.48,
        "image": {
         "levels": [
          {
           "height": 137,
           "class": "ImageResourceLevel",
           "width": 141,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.76
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536, this.camera_CB7D33B7_D218_62C1_41C5_4AAE54FD1AD7); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_AA4F8557_A4E8_0AFF_41DF_2A8589A5D9A0",
      "items": [
       {
        "hfov": 15.81,
        "yaw": 4.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 275,
           "class": "ImageResourceLevel",
           "width": 282,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.76
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 11.1,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 123.05,
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.67
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370, this.camera_CB8013BD_D218_62C1_41DC_B611A03D2C3C); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_BF495F73_B386_053E_41D4_0BC825A1DB76",
      "items": [
       {
        "hfov": 11.1,
        "yaw": 123.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 205,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.67
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.29,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -79.71,
        "image": {
         "levels": [
          {
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 93,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.81
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E, this.camera_CB9103C4_D218_6247_41E8_05C72A938CE6); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_BDD4D841_B382_0B5A_41E2_E2CB95658782",
      "items": [
       {
        "hfov": 10.29,
        "yaw": -79.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 178,
           "class": "ImageResourceLevel",
           "width": 187,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.81
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.72,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -139.43,
        "image": {
         "levels": [
          {
           "height": 132,
           "class": "ImageResourceLevel",
           "width": 176,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -57.24
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_79FD5E19_7236_1876_41C8_CAE211661FCC",
      "items": [
       {
        "hfov": 10.72,
        "yaw": -139.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 265,
           "class": "ImageResourceLevel",
           "width": 353,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -57.24
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMin": 60,
     "vfov": 180,
     "id": "panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 19.24,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 3.71,
           "image": {
            "levels": [
             {
              "height": 173,
              "class": "ImageResourceLevel",
              "width": 185,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -22
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_F9B8726D_EDF4_4C22_41E6_223CB50FB07B, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_AABF9161_A4E8_0AD3_419C_13ECC0CEF900",
         "items": [
          {
           "hfov": 19.24,
           "yaw": 3.71,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 347,
              "class": "ImageResourceLevel",
              "width": 370,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -22
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 17.86,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -85.33,
           "image": {
            "levels": [
             {
              "height": 167,
              "class": "ImageResourceLevel",
              "width": 166,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -16.88
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8, this.camera_CB03E36F_D218_6241_41D7_7F57AF25F2DF); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_ABAA8C28_A498_1A51_419E_3006B556451A",
         "items": [
          {
           "hfov": 17.86,
           "yaw": -85.33,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 334,
              "class": "ImageResourceLevel",
              "width": 333,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -16.88
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 27.5,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -36.96,
           "image": {
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 190,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -33.9
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_BDF5C5BB_B382_052E_41B8_D97447B676B9",
         "items": [
          {
           "hfov": 27.5,
           "yaw": -36.96,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 622,
              "class": "ImageResourceLevel",
              "width": 592,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -33.9
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 21.75,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 108.1,
           "image": {
            "levels": [
             {
              "height": 195,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_3_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.81
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B, this.camera_CAFEF363_D218_6241_41E4_32F8A864A8D1); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_FCAD411B_F15A_9B02_41AB_D600CC6059A0",
         "items": [
          {
           "hfov": 21.75,
           "yaw": 108.1,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 408,
              "class": "ImageResourceLevel",
              "width": 418,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.81
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
       "class": "AdjacentPanorama",
       "yaw": 108.1,
       "backwardYaw": 4.48,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMin": 60,
        "vfov": 180,
        "id": "panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 12.95,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 6.29,
              "image": {
               "levels": [
                {
                 "height": 122,
                 "class": "ImageResourceLevel",
                 "width": 115,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 1.43
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_AA360F6D_A499_F6D3_4190_7C3D533E68AE",
            "items": [
             {
              "hfov": 12.95,
              "yaw": 6.29,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 245,
                 "class": "ImageResourceLevel",
                 "width": 231,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 1.43
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 15.15,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 170.29,
              "image": {
               "levels": [
                {
                 "height": 138,
                 "class": "ImageResourceLevel",
                 "width": 139,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_1_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -14.13
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536, this.camera_CB20738E_D218_62C3_41D9_8E05D61BE89A); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_B4DEA708_A498_1651_41DF_95EBAB6D2B9F",
            "items": [
             {
              "hfov": 15.15,
              "yaw": 170.29,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 276,
                 "class": "ImageResourceLevel",
                 "width": 279,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -14.13
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 8.93,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -56.38,
              "image": {
               "levels": [
                {
                 "height": 72,
                 "class": "ImageResourceLevel",
                 "width": 81,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_2_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -12.33
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4, this.camera_CB32A395_D218_62C1_41E2_B03464917EF2); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_BC5EDA4C_B39E_0F6B_41E2_7F79E2F111A1",
            "items": [
             {
              "hfov": 8.93,
              "yaw": -56.38,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 144,
                 "class": "ImageResourceLevel",
                 "width": 163,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_2_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -12.33
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 15.03,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 24.66,
              "image": {
               "levels": [
                {
                 "height": 134,
                 "class": "ImageResourceLevel",
                 "width": 134,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_3_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.09
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showWindow(this.window_C3763403_CE7A_D661_41C5_9982BE157DD6, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_C5AFB60E_CE79_B263_41E2_93877FD8E926",
            "items": [
             {
              "hfov": 15.03,
              "yaw": 24.66,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 268,
                 "class": "ImageResourceLevel",
                 "width": 268,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_3_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.09
             }
            ]
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
          "class": "AdjacentPanorama",
          "yaw": 170.29,
          "backwardYaw": -85.33,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMin": 60,
           "vfov": 180,
           "id": "panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4",
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4.jpeg"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 23.35,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 39.62,
                 "image": {
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 161,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_0_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.42
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_BDE28CFE_B382_0B26_41CE_BD978435215D",
               "items": [
                {
                 "hfov": 23.35,
                 "yaw": 39.62,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 547,
                    "class": "ImageResourceLevel",
                    "width": 442,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_0_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.42
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 19.11,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 12.57,
                 "image": {
                  "levels": [
                   {
                    "height": 159,
                    "class": "ImageResourceLevel",
                    "width": 173,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_1_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.19
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showWindow(this.window_BCB498DC_B3FE_0B6A_41E5_D1345FAAA59A, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_BDDE2397_B3FE_1DE6_41E1_8B201664657A",
               "items": [
                {
                 "hfov": 19.11,
                 "yaw": 12.57,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 319,
                    "class": "ImageResourceLevel",
                    "width": 347,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_1_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.19
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 10.47,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 58.1,
                 "image": {
                  "levels": [
                   {
                    "height": 85,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_2_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8, this.camera_CB44939B_D218_62C0_41B1_6330AECEE517); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_A38E0B08_B382_0EEA_41E6_483291F2D8CF",
               "items": [
                {
                 "hfov": 10.47,
                 "yaw": 58.1,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 171,
                    "class": "ImageResourceLevel",
                    "width": 190,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_2_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11
                }
               ]
              }
             ]
            }
           ],
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
             "class": "AdjacentPanorama",
             "yaw": 58.1,
             "backwardYaw": -56.38,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_t.jpg",
           "audios": [
            {
             "audio": {
              "class": "AudioResource",
              "oggUrl": "media/audio_A3A18480_B382_3BDA_41C2_B065B593F8FB.ogg",
              "mp3Url": "media/audio_A3A18480_B382_3BDA_41C2_B065B593F8FB.mp3"
             },
             "class": "PanoramaAudio",
             "autoplay": true,
             "id": "audio_A3A18480_B382_3BDA_41C2_B065B593F8FB"
            }
           ],
           "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
           "label": "Bedug",
           "hfovMax": 120,
           "class": "Panorama"
          },
          "class": "AdjacentPanorama",
          "yaw": -56.38,
          "backwardYaw": 58.1,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_t.jpg",
        "audios": [
         {
          "audio": {
           "class": "AudioResource",
           "oggUrl": "media/audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C.ogg",
           "mp3Url": "media/audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C.mp3"
          },
          "class": "PanoramaAudio",
          "autoplay": true,
          "id": "audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C"
         }
        ],
        "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
        "label": "Serambi",
        "hfovMax": 120,
        "class": "Panorama"
       },
       "class": "AdjacentPanorama",
       "yaw": -85.33,
       "backwardYaw": 170.29,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_t.jpg",
     "audios": [
      {
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01.ogg",
        "mp3Url": "media/audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01.mp3"
       },
       "class": "PanoramaAudio",
       "autoplay": true,
       "id": "audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01"
      }
     ],
     "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
     "label": "Jagang",
     "hfovMax": 120,
     "class": "Panorama"
    },
    "class": "AdjacentPanorama",
    "yaw": 4.48,
    "backwardYaw": 108.1,
    "distance": 1
   },
   {
    "panorama": {
     "hfovMin": 60,
     "vfov": 180,
     "id": "panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 15.71,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 4.28,
           "image": {
            "levels": [
             {
              "height": 141,
              "class": "ImageResourceLevel",
              "width": 141,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 6.29
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_FC77D8D0_F14D_A91E_41C4_8560C5048F7A, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_A834D34F_A4E8_0EEF_41DE_3A4D9CFD8E65",
         "items": [
          {
           "hfov": 15.71,
           "yaw": 4.28,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 282,
              "class": "ImageResourceLevel",
              "width": 282,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 6.29
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 7.89,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 51.62,
           "image": {
            "levels": [
             {
              "height": 68,
              "class": "ImageResourceLevel",
              "width": 71,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.67
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 12)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_BEEA64FB_B386_1B2E_41E6_6F62B2B93ABD",
         "items": [
          {
           "hfov": 7.89,
           "yaw": 51.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 137,
              "class": "ImageResourceLevel",
              "width": 142,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.67
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 10.07,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -32.19,
           "image": {
            "levels": [
             {
              "height": 87,
              "class": "ImageResourceLevel",
              "width": 91,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_3_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -11.86
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B, this.camera_CB5933A9_D218_62C1_41AB_EB2698741516); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_BDDA8B6D_B382_0D25_41DC_38BC6B9B5D45",
         "items": [
          {
           "hfov": 10.07,
           "yaw": -32.19,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 175,
              "class": "ImageResourceLevel",
              "width": 183,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -11.86
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 24.66,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 27.62,
           "image": {
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 178,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_6_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -11.14
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_BDB524BF_B382_7B26_41E4_5485BCB53EAF",
         "items": [
          {
           "hfov": 24.66,
           "yaw": 27.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 503,
              "class": "ImageResourceLevel",
              "width": 449,
              "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_6_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -11.14
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
       "class": "AdjacentPanorama",
       "yaw": -32.19,
       "backwardYaw": 123.05,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_t.jpg",
     "audios": [
      {
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_4CEF7DB9_5C7B_2F95_41D5_49F2A96A1CA9.ogg",
        "mp3Url": "media/audio_4CEF7DB9_5C7B_2F95_41D5_49F2A96A1CA9.mp3"
       },
       "class": "PanoramaAudio",
       "autoplay": true,
       "id": "audio_4CEF7DB9_5C7B_2F95_41D5_49F2A96A1CA9"
      }
     ],
     "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
     "label": "Tugu jam",
     "hfovMax": 120,
     "class": "Panorama"
    },
    "class": "AdjacentPanorama",
    "yaw": 123.05,
    "backwardYaw": -32.19,
    "distance": 1
   },
   {
    "panorama": {
     "hfovMin": 60,
     "vfov": 180,
     "id": "panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 28.83,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -21.15,
           "image": {
            "levels": [
             {
              "height": 152,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.57
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_A440985C_B486_0B6A_41D7_9FD1681C54DE",
         "items": [
          {
           "hfov": 28.83,
           "yaw": -21.15,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 401,
              "class": "ImageResourceLevel",
              "width": 524,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.57
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 9.55,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 166.38,
           "image": {
            "levels": [
             {
              "height": 85,
              "class": "ImageResourceLevel",
              "width": 90,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -19
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B, this.camera_CB1CE387_D218_62C1_41A1_E8EB55D61406); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_A6315028_B486_1B2A_418D_A494D9AD3996",
         "items": [
          {
           "hfov": 9.55,
           "yaw": 166.38,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 171,
              "class": "ImageResourceLevel",
              "width": 180,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -19
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 9.3,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -62.24,
           "image": {
            "levels": [
             {
              "height": 88,
              "class": "ImageResourceLevel",
              "width": 89,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_9BB0C931_965B_09D7_41C1_E7310FF61B38",
         "items": [
          {
           "hfov": 9.3,
           "yaw": -62.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 177,
              "class": "ImageResourceLevel",
              "width": 178,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.62
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 14.93,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 6.57,
           "image": {
            "levels": [
             {
              "height": 134,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_3_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.85
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_C576BE20_D1E9_A5FF_41E8_4812418DD2A2, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_C31F4A36_D1E8_6DC3_41CF_6571456F5278",
         "items": [
          {
           "hfov": 14.93,
           "yaw": 6.57,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 268,
              "class": "ImageResourceLevel",
              "width": 268,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.85
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
       "class": "AdjacentPanorama",
       "yaw": 166.38,
       "backwardYaw": -79.71,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_t.jpg",
     "audios": [
      {
       "audio": {
        "class": "AudioResource",
        "mp3Url": "media/audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B.mp3",
        "id": "audioresource_F981625E_EDF4_CC1E_41DC_4D65AA4F7A2E",
        "oggUrl": "media/audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B.ogg"
       },
       "class": "PanoramaAudio",
       "autoplay": true,
       "id": "audio_F981125E_EDF4_CC1E_41DF_7D51EA31A6B3"
      }
     ],
     "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
     "label": "Bangsal Selatan",
     "hfovMax": 120,
     "class": "Panorama"
    },
    "class": "AdjacentPanorama",
    "yaw": -79.71,
    "backwardYaw": 166.38,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_t.jpg",
  "audios": [
   {
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A.ogg",
     "mp3Url": "media/audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A.mp3"
    },
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A"
   }
  ],
  "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
  "label": "Halaman Depan",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_AB302472_A498_0AB1_41E2_1E9529F5765B",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 9.45,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.9,
        "image": {
         "levels": [
          {
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 88,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.38
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E, this.camera_CBA263CB_D218_6241_41E6_E1AF2203774E); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_B49E69A7_A498_1A5F_41D1_6F451025BFCF",
      "items": [
       {
        "hfov": 9.45,
        "yaw": 1.9,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 202,
           "class": "ImageResourceLevel",
           "width": 177,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.38
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 17.63,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 169.05,
        "image": {
         "levels": [
          {
           "height": 165,
           "class": "ImageResourceLevel",
           "width": 158,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.71
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_B9268ACE_A9F2_902E_41DC_0D70CFDD4CAE",
      "items": [
       {
        "hfov": 17.63,
        "yaw": 169.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 330,
           "class": "ImageResourceLevel",
           "width": 316,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.71
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.04,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 63.52,
        "image": {
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BD20E8AC_AD00_92A8_41CD_6F0F08B15ED2, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A3D15370_AD00_97B8_4192_AFEE74833F02",
      "items": [
       {
        "hfov": 15.04,
        "yaw": 63.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 268,
           "class": "ImageResourceLevel",
           "width": 268,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.04,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -46.67,
        "image": {
         "levels": [
          {
           "height": 108,
           "class": "ImageResourceLevel",
           "width": 125,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BDB99953_B382_0D7E_41C3_39067C338574",
      "items": [
       {
        "hfov": 14.04,
        "yaw": -46.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 217,
           "class": "ImageResourceLevel",
           "width": 251,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.47
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.41,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 62.19,
        "image": {
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 170,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.09
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BD8E2F49_B386_056A_41E3_5D6B13077607",
      "items": [
       {
        "hfov": 21.41,
        "yaw": 62.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 469,
           "class": "ImageResourceLevel",
           "width": 398,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.09
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMin": 60,
     "vfov": 180,
     "id": "panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 15.02,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -32.48,
           "image": {
            "levels": [
             {
              "height": 134,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.23
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_A6B2892C_A9F1_F012_41D4_2F053443E4FF, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_A79C43BD_A996_9072_41BE_17ACC1B08D72",
         "items": [
          {
           "hfov": 15.02,
           "yaw": -32.48,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 268,
              "class": "ImageResourceLevel",
              "width": 268,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.23
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 14.48,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -1.24,
           "image": {
            "levels": [
             {
              "height": 134,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_B9AE8EF5_A992_F1F2_41DC_A16A03B048A9, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_A6B2DBA7_A991_B01E_41CA_B5C93593BF1F",
         "items": [
          {
           "hfov": 14.48,
           "yaw": -1.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 268,
              "class": "ImageResourceLevel",
              "width": 268,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.62
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 11.33,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -137.52,
           "image": {
            "levels": [
             {
              "height": 102,
              "class": "ImageResourceLevel",
              "width": 102,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.71
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 11)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_B9E2CF50_A9F1_9032_41C7_AE1BF336D482",
         "items": [
          {
           "hfov": 11.33,
           "yaw": -137.52,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 204,
              "class": "ImageResourceLevel",
              "width": 204,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.71
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 19.97,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -52.67,
           "image": {
            "levels": [
             {
              "height": 195,
              "class": "ImageResourceLevel",
              "width": 185,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_3_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.81
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_BE631795_B38E_05FA_41E2_83F2D3FCB53B",
         "items": [
          {
           "hfov": 19.97,
           "yaw": -52.67,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 391,
              "class": "ImageResourceLevel",
              "width": 370,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.81
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 21.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 33.71,
           "image": {
            "levels": [
             {
              "height": 188,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_4_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.19
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_BD88B33C_B386_1D2A_41BB_D0092ECEDE3A",
         "items": [
          {
           "hfov": 21.09,
           "yaw": 33.71,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 377,
              "class": "ImageResourceLevel",
              "width": 401,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_4_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.19
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 11.45,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 170.91,
           "image": {
            "levels": [
             {
              "height": 117,
              "class": "ImageResourceLevel",
              "width": 113,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_5_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.33
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B, this.camera_CB09B37B_D218_6240_41E4_7F1A6630FBD7); this.mainPlayList.set('selectedIndex', 9)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_BD9E42DB_B06E_2DE3_41A9_04BABBD1424C",
         "items": [
          {
           "hfov": 11.45,
           "yaw": 170.91,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 234,
              "class": "ImageResourceLevel",
              "width": 226,
              "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_5_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.33
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B",
       "class": "AdjacentPanorama",
       "yaw": 170.91,
       "backwardYaw": 1.9,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_t.jpg",
     "audios": [
      {
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268.ogg",
        "mp3Url": "media/audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268.mp3"
       },
       "class": "PanoramaAudio",
       "autoplay": true,
       "id": "audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268"
      }
     ],
     "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
     "label": "Depan Mimbar",
     "hfovMax": 120,
     "class": "Panorama"
    },
    "class": "AdjacentPanorama",
    "yaw": 1.9,
    "backwardYaw": 170.91,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_t.jpg",
  "audios": [
   {
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3.ogg",
     "mp3Url": "media/audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3.mp3"
    },
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3"
   }
  ],
  "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
  "label": "Ruang Utama",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 11.43,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -27.24,
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.05
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_B9064232_A9F1_7076_41C5_47BE15AD4EDF",
      "items": [
       {
        "hfov": 11.43,
        "yaw": -27.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 204,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.05
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -77.05,
        "image": {
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.23
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BAC6D9AB_A992_B015_41BA_AC64D10DFE98, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_B901E884_A98E_9012_41E5_394E8E9673D9",
      "items": [
       {
        "hfov": 15.02,
        "yaw": -77.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 268,
           "class": "ImageResourceLevel",
           "width": 268,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.23
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_t.jpg",
  "audios": [
   {
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_B85C4BEA_A993_9016_41DE_311CC1771B4C.ogg",
     "mp3Url": "media/audio_B85C4BEA_A993_9016_41DE_311CC1771B4C.mp3"
    },
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_B85C4BEA_A993_9016_41DE_311CC1771B4C"
   }
  ],
  "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
  "label": "Pawestran",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 23.05,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 19.51,
        "image": {
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.38
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_BD9E88B4_B382_0B3A_41E0_F03F230CC701",
      "items": [
       {
        "hfov": 23.05,
        "yaw": 19.51,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 153,
           "class": "ImageResourceLevel",
           "width": 452,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.38
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.94,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20.38,
        "image": {
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 188,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.33
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BDA44DE5_B386_055A_41D4_92F2F07FBC21",
      "items": [
       {
        "hfov": 25.94,
        "yaw": -20.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 507,
           "class": "ImageResourceLevel",
           "width": 476,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.33
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.64,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -136.38,
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.48
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_BC678035_B05E_2CA6_41DF_AA51869E441C",
      "items": [
       {
        "hfov": 10.64,
        "yaw": -136.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 205,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.48
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.86,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -2.38,
        "image": {
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_5_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.95
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_C719054F_D21B_A641_41DD_F0327CDF8F36, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_C65DECA8_D218_A6CF_41DE_62D9DA1C3CB5",
      "items": [
       {
        "hfov": 14.86,
        "yaw": -2.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 268,
           "class": "ImageResourceLevel",
           "width": 268,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_5_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.95
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_t.jpg",
  "audios": [
   {
    "audio": "this.audioresource_F981625E_EDF4_CC1E_41DC_4D65AA4F7A2E",
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B"
   }
  ],
  "cardboardMenu": "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
  "label": "Bangsal Utara",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "camera": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E"
   }
  ]
 },
 {
  "id": "ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist",
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 0, 1)",
    "camera": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 1, 2)",
    "camera": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 2, 3)",
    "camera": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 3, 4)",
    "camera": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 4, 5)",
    "camera": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 5, 6)",
    "camera": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 6, 7)",
    "camera": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 7, 8)",
    "camera": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 8, 9)",
    "camera": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 9, 10)",
    "camera": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 10, 11)",
    "camera": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 11, 12)",
    "camera": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 12, 13)",
    "camera": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist, 13, 0)",
    "camera": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E"
   }
  ]
 },
 "this.Menu_CAEE933B_D218_63C1_41E9_14EF9F017350",
 {
  "id": "ImageResource_5EFDDBF5_53D5_2B9C_41B0_F53F52861FC4",
  "class": "ImageResource",
  "levels": [
   {
    "height": 1080,
    "class": "ImageResourceLevel",
    "width": 1920,
    "url": "media/zoomImage_5EAEA344_53CB_14FC_41C0_674A81F9CEE3_0_0.png"
   },
   {
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/zoomImage_5EAEA344_53CB_14FC_41C0_674A81F9CEE3_0_1.png"
   },
   {
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/zoomImage_5EAEA344_53CB_14FC_41C0_674A81F9CEE3_0_2.png"
   }
  ]
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_5EFDCBF6_53D5_2B9F_41B6_D6BD65FFF415",
  "duration": 500,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_5EFDFBF6_53D5_2B9F_41CD_B0F71E97D06E",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "id": "ImageResource_C14375CD_D1E8_E641_41E6_52BEB59BCFF1",
  "class": "ImageResource",
  "levels": [
   {
    "height": 800,
    "class": "ImageResourceLevel",
    "width": 1280,
    "url": "media/zoomImage_D482A4E4_C7D1_E3F4_41C3_A6299C88C256_0_0.png"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/zoomImage_D482A4E4_C7D1_E3F4_41C3_A6299C88C256_0_1.png"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/zoomImage_D482A4E4_C7D1_E3F4_41C3_A6299C88C256_0_2.png"
   }
  ]
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_C14345CD_D1E8_E640_41E5_6535B1FA98BF",
  "duration": 500,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_C14355CE_D1E8_E643_4140_185CAE4DAC5C",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "id": "ImageResource_C14045D1_D1E8_E641_41D5_4BC04F35B7A0",
  "class": "ImageResource",
  "levels": [
   {
    "height": 800,
    "class": "ImageResourceLevel",
    "width": 1280,
    "url": "media/zoomImage_D3A34D71_C7D0_22EC_41C6_EABB643AA8C1_0_0.png"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/zoomImage_D3A34D71_C7D0_22EC_41C6_EABB643AA8C1_0_1.png"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/zoomImage_D3A34D71_C7D0_22EC_41C6_EABB643AA8C1_0_2.png"
   }
  ]
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_C14055D1_D1E8_E641_41BF_66940AD7F522",
  "duration": 500,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_C143A5D1_D1E8_E641_41C4_786AF370060C",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "GAPURA PADURAKSA",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCACCC2ED_D218_6241_419A_19F3CA3DA6F3",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Masjid Gedhe Mataram Kotagede ini menyuguhkan arsitektur yang menyimbolkan makna kerukunan dimana gapura yang ada di masjid secara tidak langsung melambangkan kerukunan dari umat Islam dan Hindu-Buddha pada masa Kerajaan Mataram Islam. Gapura yang berada di depan masjid memiliki bentuk yang berbeda dengan masjid-masjid pada umumnya. Gapura pada Masjid Gedhe Mataram berbentuk seperti bangunan yang biasanya di tempat ibadah umat Hindu-Buddha. Pada Gapura Paduraksa, terdapat hiasan kala yang umum dijumpai pada bangunan Hindu-Buddha. Keberadaan Gapura Paduraksa ini mencerminkan sikap toleransi terhadap agama Hindu-Buddha, serta menunjukkan respons arsitektur masjid pada masa itu terhadap gaya arsitektur lokal yang masih dipengaruhi oleh unsur-unsur Hindu-Buddha. Di sisi kanan dan kiri Gapura, terdapat pagar setinggi 2,5 meter yang mengelilingi kompleks masjid dan area pemakaman.</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCACCC2ED_D218_6241_419A_19F3CA3DA6F3_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C.jpg",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "footerBackgroundOpacity": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_A55A5AB4_A977_9072_41AA_7A02697B4876",
  "shadow": true,
  "footerBorderColor": "#000000",
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "footerBorderSize": 0,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "title": "TEMBOK PAGAR",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD742F1_D218_6241_41D1_2CCD15352225",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Masjid gedhe Mataram memiliki dua buah prasasti di bagian depan yang di dalamnya menjelaskan mengenai proses pembangunan Masjid Gedhe Mataram. Prasasti tersebut menyebutkan bahwa proses pembangunan Masjid dilakukan melalui dua tahapan. Tahap pertama dibangun pada masa Sultan Agung dan hanya berupa bangunan inti masjid dengan ukuran yang relatif kecil atau biasa disebut dengan Langgar. Tahap kedua dibangun oleh Raja Kasunanan Surakarta, Paku Buwono X. Hal tersebut ditunjukkan melalui struktur bahan bangunan yang digunakan dalam pembuatan tembok di sekeliling masjid. Pada bagian kiri masjid, terdiri dari batu bata dengan ukuran yang lebih besar dan berwarna merah tua, serta terdapat batu seperti marmer dengan tulisan aksara jawa. Tembok tersebut dibangun pada masa Sultan Agung menggunakan perekat berbahan dasar air aren yang menjadikannya lebih kuat karena proses pembatuan dari perekat tersebut. Kemudian untuk sebagian tembok lainnya merupakan hasil renovasi pembangunan pada masa Paku Buwono X. </SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Sumber Gambar: javatourasian.com</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD742F1_D218_6241_41D1_2CCD15352225_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792.jpg",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_A427AE2F_A991_906E_41CD_430E5C7A5D4C",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "ORNAMEN KALA",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD6B2F2_D218_6240_419B_23ED63360BF2",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Tembok Kelir pada halaman depan Masjid Gedhe Mataram Kotagede ini berfungsi untuk menutupi atau menghalangi pandangan bagian luar ke bagian dalam masjid. Pada tembok Kelir tersebut, terdapat sebuah ornamen berbentuk Kala. Umumnya, ornamen Kala berada pada bangunanbangunan di zaman Hindu-Buddha. Ornamen muka Kala itu sering disebut sebagai makara (muka angkara) yang memiliki makna bahwa Kala atau Buto raksasa ini menunjukkan waktu yang terus memakan kita dan biasanya ornamen Kala ditempatkan pada bagian atas gapura. Ornamen tersebut, pada dasarnya ditujukan menjadi sebuah simbol yang baik yaitu untuk menunjukkan kebijaksanaan dan nilai-nilai luhur para pembangun Masjid Gedhe Mataram Kotagede serta generasi setelahnya.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Anggrahito Ananggadipo E </SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD6B2F2_D218_6240_419B_23ED63360BF2_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C.jpg",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "footerBackgroundOpacity": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_A46A114E_A996_902E_41D8_222F177FF178",
  "shadow": true,
  "footerBorderColor": "#000000",
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "footerBorderSize": 0,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "KEMUNCAK",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD5D2FA_D218_6243_41E2_A0024FADBD2B",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Selain ornamen yang menghiasi dinding masjid, terdapat juga hiasan kemuncak yang mengelilingi halaman Masjid Gedhe Mataram. Terdapat 63 kemuncak yang melambangkan usia Nabi Muhammad SAW. Bentuk kemuncak ini mengerucut ke atas, dengan ukuran yang bervariasi: bagian bawahnya besar, bagian tengah sedang, dan bagian atas kecil. Setiap kemuncak memiliki makna yang mendalam, yaitu syariat, hakikat, dan makrifat. Kemuncak bagian bawah melambangkan syariat, yang berarti hukum atau peraturan, menunjukkan bahwa meskipun seseorang mengetahui adanya peraturan yang ditetapkan, sering kali peraturan tersebut dilanggar. Kemuncak bagian tengah melambangkan hakikat, yang berarti kebenaran atau kenyataan, mencerminkan kemampuan seseorang untuk merasakan dan menyaksikan kehadiran Allah SWT, sehingga hakikat menjadi aspek penting dalam setiap amal dan rahasia. Sementara itu, kemuncak paling atas yang berbentuk kecil melambangkan makrifat, yang merupakan hasil dari hakikat dan mencakup hal-hal yang dapat dirasakan secara istiqamah. Makrifat sendiri merupakan tahapan rohaniah tertinggi yang memungkinkan seseorang untuk benar-benar mengenal Allah SWT dan rahasia-rahasia-Nya.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD5D2FA_D218_6243_41E2_A0024FADBD2B_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "footerBackgroundOpacity": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_E1CE937A_ED1F_4995_41ED_4A11955A0BB2",
  "shadow": true,
  "footerBorderColor": "#000000",
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "footerBorderSize": 0,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "TUGU JAM PAKUBUWONO X",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD4E2FC_D218_6247_41E3_BE0DBAFFD70B",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Masjid Gedhe Mataram Kotagede adalah salah satu simbol spiritual dan budaya yang paling tua di Yogyakarta. Namun, terdapat satu elemen yang kerap luput dari sorotan adalah tugu jam yang berdiri di pelataran masjid sebagai penanda waktu yang bukan hanya fungsional, tetapi juga sarat makna historis. Tugu jam tersebut berkaitan erat dengan tokoh besar dalam sejarah Jawa modern, yaitu Pakubuwono X, Susuhunan Surakarta yang memerintah dari 1893 hingga 1939. Tugu dengan ukuran 1,5 m x 1,5 m dengan tinggi 4 m tersebut memiliki ukuran kayu berbentuk makula pada bagian atasnya. Bangunan tugu tersebut merupakan tetenger Sunan Paku Buwana sepuluh. Selain itu, tugu tersebut juga difungsikan sebagai jam penunjuk waktu shalat. Pada puncak tugu dihiasi dengan hiasan kupluk/ peci raja sebagai penunjuk bahwa masjid tersebut merupakan bangunan milik kerajaan. </SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD4E2FC_D218_6247_41E3_BE0DBAFFD70B_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_C33AD0F6_CEB7_4FA3_41E5_DAF4B0BD0D43.jpg",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_FC77D8D0_F14D_A91E_41C4_8560C5048F7A",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "JAGANG",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD422FE_D218_6243_41E6_C731BDF900DC",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Di sekeliling Masjid Gedhe Mataram Kotagede terdapat sebuah kolam kecil untuk cuci kaki sebagai simbol jamaah yang masuk ke dalam masjid harus dalam keadaan suci, baik jiwa maupun raganya. Selain itu, Jagang di sekeliling masjid digunakan untuk benteng keamanan setelah pagar pembatas serta digunakan sebagai sarana membersihkan kaki sebelum masuk ke dalam masjid. Secara fisik, jagang berfungsi sebagai benteng pertahanan, menciptakan jarak antara dunia luar yang profan dan kompleks masjid yang dianggap suci. Dalam banyak kebudayaan, termasuk dalam tradisi Jawa Islam, air dipercaya memiliki kemampuan untuk mensucikan dan memisahkan ruang sakral dari yang duniawi (Sumalyo, 1993). Oleh karena itu, jagang bukan sekadar parit, tetapi penanda transisi antara dua dunia sebuah \u201cambang simbolik\u201d yang mengajak pengunjung untuk membersihkan diri, secara lahir maupun batin, sebelum memasuki area masjid.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Lebih dari itu, jagang juga berfungsi sebagai penanda batas kekuasaan dan spiritualitas. Dalam konteks sejarah Mataram Islam, masjid tidak hanya berfungsi sebagai tempat ibadah, tetapi juga sebagai pusat pemerintahan dan simbol legitimasi kekuasaan raja. Dengan adanya jagang, masjid diposisikan setara dengan keraton, yang juga memiliki benteng atau parit sebagai elemen pertahanan dan penguat status simboliknya (Atmadi, 1988). Ini menunjukkan bahwa Islam dalam praktiknya di Jawa sangat erat berkelindan dengan sistem politik dan budaya lokal.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Jagang juga memiliki fungsi ekologis dan sosial dalam mengatur sistem drainase dan meminimalkan banjir, serta menjadi ruang alami bagi kehidupan air yang ikut memperkaya ekosistem sekitar masjid. Dalam praktik sosialnya, jagang juga menjadi penanda ruang yang mengatur pergerakan dan tata cara interaksi masyarakat dengan lingkungan suci. Semua ini membentuk pemahaman bahwa ruang ibadah dalam Islam Jawa dibangun dengan penuh pertimbangan ekosistem, kesadaran simbolik, dan fungsi kolektif.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD422FE_D218_6243_41E6_C731BDF900DC_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_F9B8726D_EDF4_4C22_41E6_223CB50FB07B",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "PINTU UTAMA LIWAN",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD25302_D218_63C3_41BF_CABE3B2C4E83",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada pintu utama yang terletak di tengah-tengah antara ketiga pintu tersebut terdapat ornamen yang menunjukkan akulturasi antara Islam dengan budaya Jawa. Ornamen tersebut berupa tulisan aksara Jawa yang diapit oleh 2 (dua) tulisan Arab. Ornamen dengan aksara Jawa berbunyi \u201cKamulyaaken Tahun Ehe, Hangademaken Cipto Swaraning Jalmi\u201d yang artinya \u201cKemuliaan Tahun Ehe, Mendinginkan Kalbu Suara Hati Manusia\u201d. Sedangkan ornamen berupa susunan huruf Arab di sebelah kiri berbunyi \u201cHijrotunnabiyyi Muhammadin SAW min makkati ila madinati, Alfu wa sittani arba\u2019u wa tsaminuuna sanatin\u201d yang artinya \u201cHijrahnya Nabi Muhammad dari Makkah ke Madinah, 1684 tahun\u201d dan ornamen sebelah kanan yang berbunyi \u201cHadzal Babal Masjidil-Harom Fillah Irtajul-Akbar, Tabi\u2019al-Baladil Akbar Surakarta Adiningrat\u201d artinya \u201cIni adalah pintu Masjidil Haram, di dalam keridhoan Allah mengharap kebesaranNya, mengikuti negara besar \u2018Surakarta\u201d. (Hasil wawancara bersama Ust. Ari, 2025). </SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD25302_D218_63C3_41BF_CABE3B2C4E83_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_C3F4CCCF_CE9B_D7E0_41B6_66F6A99C9F0B.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_C3763403_CE7A_D661_41C5_9982BE157DD6",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "BEDUG ",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD1A303_D218_63C1_41E8_C2B84E122BB8",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Bedug yang terletak di pojok selatan serambi tersebut dibuat atas usulan Sunan Kalijaga. Pada saat Sunan Kalijaga sedang melakukan perjalan ke Kulon Progo, tepatnya ke Desa Dondong, ia (Sunan Kalijaga) menemukan sebuah pohon dengan diameter batang yang cukup besar. Pohon tersebut pada zaman dahulu dinamakan sebagai pohon bayam. Pada saat Sunan Kalijaga menemukan pohon tersebut, ia berfikir untuk membawa batang pohon tersebut yang nantinya akan digunakan untuk membuat bedug. Meskipun pohon tersebut berada di tengah hutan, Sunan Kalijaga tetap mencari pemilik pohon tersebut. Pada akhirnya, muncul seorang bernama Nyai Pringgit atau biasa disebut dengan Nyai Brintik yang mengaku bahwa ia adalah pemilik pohon tersebut. Setelah melakukan diskusi, Sunan Kalijaga memerintah Kyai Pringgit membawa batang pohon tersebut menuju ke Keraton Mataram yang pada saat itu sedang melakukan pembangunan Masjid Gedhe Mataram di Kotagede. Sesampainya di Mataram, Nyai Pringgit diangkat menjadi abdi dalem dan dipersilahkan untuk tinggal di kawasan sekitar Masjid Gedhe Mataram yang saat ini bernama Kampung Dondongan. Kampung tersebut merupakan tempat tinggal para abdi dalem keturuan Nyai Pringgit. </SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD1A303_D218_63C1_41E8_C2B84E122BB8_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464.jpg",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_BCB498DC_B3FE_0B6A_41E5_D1345FAAA59A",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "title": "",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD0B305_D218_63C1_41E2_FCD6BA5E187F",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Relasi antara Saka Guru dengan arsitektur masjid merupakan perwujudan yang berhubungan dengan kepercayaan serta makna metafisik. Berikut visualisasi perwujudan dualisme Saka Guru dan arah vertikal antara manusia dengan kekuatan markokosmos. Ruang di dalam Saka Guru membentuk sebuah koneksi antara kehidupan sosial dengan keagamaan. Keagamaan dalam konteks tersebut yakni sesuai dengan pengalaman spiritual masing-masing individu. Manifestasi tersebut dapat disimpulkan secara signifikan bahwa makna Saka Guru dalam bangunan Masjid Gedhe Mataram Kotagede, yaitu: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">1. Secara praktis, Saka Guru sebagai penopang atap. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">2. Secara metafisik, Saka Guru memiliki sifat dualitas atau mendua. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Saka guru juga dapat diartikan sebagai sebuah lambang dari 4 (empat) unsur kehidupan yaitu tanah, air, api, dan udara.. Selain Saka Guru, terdapat sebuah mimbar yang sangat ikonik di dalam ruang utama Masjid tersebut. Mimbar tersebut, merupakan hadiah dari Sultan Palembang kepada Sultan Agung. Sebelumnya, mimbar tersebut merupakan tandu yang digunakan sebagai tempat duduk istri ketika ikut berburu dengan raja. Hingga pada akhirnya setelah diberikan kepada Sultan Agung, tempat duduk tersebut dijadikan sebuah mimbar dan diletakkan di Masjid Gedhe Mataram. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">(Sumber Gambar: Frick 1977 dimodifikasi oleh Ajeng Kusuma, 2020)</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD0B305_D218_63C1_41E2_FCD6BA5E187F_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_BD20E8AC_AD00_92A8_41CD_6F0F08B15ED2",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "normal",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "MIHRAB",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCADF230D_D218_63C1_41C2_545874EB74E6",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Mihrab merupakan elemen penting dalam arsitektur masjid, yang menandai arah kiblat dan menjadi titik fokus dalam ruang ibadah. Di Masjid Gedhe Mataram Kotagede, Yogyakarta salah satu masjid tertua dan paling bersejarah di Jawa mihrab tidak hanya berfungsi secara ritual, tetapi juga menyimpan kekayaan simbolik yang merefleksikan akulturasi budaya dan estetika spiritual Islam-Jawa.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Secara arsitektural, mihrab Masjid Gedhe Mataram memiliki keunikan yang mencerminkan perpaduan antara prinsip-prinsip Islam dan nilai-nilai budaya lokal. Mihrab ini dihiasi dengan ornamen sulur-suluran dan motif lung-lungan, serta tiang semu (dekoratif) yang dilengkapi dengan bingkai di bagian atasnya. Pilihan ornamen ini bukan sekadar estetika, tetapi juga cerminan dari pemahaman dan ketaatan terhadap ajaran Islam, yang melarang representasi visual makhluk hidup seperti manusia atau hewan dalam ruang ibadah, sebagaimana disampaikan dalam berbagai hadis Nabi Muhammad SAW.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Motif sulur dan lung-lungan, atau yang dalam tradisi seni Jawa sering disebut sebagai motif vegetatif, memiliki akar historis yang panjang dalam seni Hindu-Buddha. Dalam konteks tersebut, motif ini menggambarkan kalpataru pohon kehidupan yang diyakini sebagai simbol kesejahteraan dan sumber kehidupan surgawi. Ketika Islam hadir dan berinteraksi dengan budaya lokal Jawa, motif ini mengalami reinterpretasi. Dalam tradisi Islam-Jawa, lung-lungan dimaknai sebagai simbol kehidupan yang terus tumbuh, kesalingan antar manusia, serta pengingat untuk terus bertumbuh dalam kebaikan dan tolong-menolong.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Mihrab di Masjid Gedhe Mataram tidak mencolok atau megah seperti pada masjid-masjid Timur Tengah, tetapi justru menunjukkan kesederhanaan yang penuh makna. Ini mencerminkan nilai kerendahan hati dan spiritualitas dalam Islam Nusantara. Di balik keindahan ukiran sulur-suluran, tersimpan pesan moral dan spiritual yang dalam tentang hubungan manusia dengan Tuhan, sesama manusia, dan alam semesta.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCADF230D_D218_63C1_41C2_545874EB74E6_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_A6B2892C_A9F1_F012_41D4_2F053443E4FF",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "MIMBAR",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCADE1310_D218_63DF_41E9_2B6270E37941",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Mimbar dalam masjid Islam adalah tempat yang digunakan oleh khatib untuk menyampaikan khutbah, terutama pada hari Jumat. Biasanya terletak di dekat mihrab, mimbar memiliki berbagai bentuk dan desain yang mencerminkan budaya setempat, serta berfungsi sebagai simbol kepemimpinan dan penyampaian pesan dakwah kepada jamaah. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada ruangan Liwan atau ruangan utama masjid, terdapat dua buah mimbar dengan ukuran dan bentuk yang berbeda. Mimbar pertama/ mimbar besar yang terbuat dari kayu dan terkesan unik karena berbeda dengan mimbar masjid pada umumnya. Mimbar tersebut merupakan hadiah dari Sultan Palembang kepada Mataram pada masa itu. Dahulunya, mimbar tersebut merupakan tandu yang digunakan sebagai tempat duduk istri raja ketika ikut berburu. Kemudian pada mimbar kedua, memiliki ukuran yang lebih kecil. Selain itu, mimbar kecil ini biasanya digunakan untuk kebutuhan kultum harian di Masjid gedhe Mataram. Penempatan mimbar di sebelah kanan mihrab memiliki makna mengenai keutamaan kanan daripada yang kiri karena kanan merupakan hal yang utama dibandingakan yang kiri.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "55%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCADE1310_D218_63DF_41E9_2B6270E37941_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "44%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_B9AE8EF5_A992_F1F2_41DC_A16A03B048A9",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "PAWESTRAN",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCADCA313_D218_63C1_41E7_C411775B1243",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Dalam tradisi arsitektur masjid kuno di Jawa, terdapat elemen khas yang mencerminkan bukan hanya aspek keagamaan, tetapi juga nilai sosial dan budaya masyarakat setempat. Salah satu elemen tersebut adalah Ruang Pawestran sebuah ruang khusus yang diperuntukkan bagi perempuan, terletak di bagian selatan atau kiri dari ruang utama masjid. Keberadaan ruang ini dapat ditemukan di beberapa masjid tua, termasuk Masjid Gedhe Mataram di Kotagede, Yogyakarta, yang merupakan salah satu masjid tertua di Indonesia, didirikan sekitar tahun 1587 oleh Panembahan Senopati, pendiri Kerajaan Mataram Islam.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Secara etimologis, kata Pawestran berasal dari akar kata estri atau istri, yang berarti perempuan. Penambahan awalan \"pa-\" dan akhiran \"-an\" dalam struktur bahasa Jawa menghasilkan makna sebagai suatu tempat yang berhubungan dengan perempuan. Maka, Pawestran dapat dimaknai sebagai tempat khusus untuk perempuan, terutama dalam konteks ibadah dan kegiatan keagamaan lainnya di masjid.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Di Masjid Gedhe Mataram, ruang Pawestran bukan sekadar pelengkap arsitektural, tetapi mencerminkan sistem nilai masyarakat Jawa Islam tradisional, yang memberikan ruang dan peran tersendiri bagi perempuan dalam kehidupan beragama. Secara fisik, ruangan ini terintegrasi dengan struktur utama masjid namun memiliki pembatas tertentu yang memberi kesan privat, sebagai bentuk penghormatan terhadap norma kesopanan dan adab yang berlaku dalam masyarakat setempat.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Fungsi Pawestran awalnya adalah sebagai ruang shalat khusus bagi jamaah perempuan. Namun, seiring waktu, ruang ini mengalami dinamika fungsi sosial keagamaan. Kini, selain digunakan untuk shalat, Pawestran di Masjid Gedhe Mataram juga difungsikan sebagai tempat mengaji bagi anak-anak dan perempuan dari komunitas sekitar. Aktivitas ini menunjukkan bagaimana ruang-ruang dalam masjid tradisional tidak hanya statis dalam fungsi ibadah, tetapi juga adaptif terhadap kebutuhan komunitas menjadi ruang pendidikan, silaturahmi, dan penguatan nilai-nilai keislaman.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pawestran bukan hanya simbol keterpisahan gender dalam ibadah, namun juga ekspresi dari kearifan lokal yang mengakomodasi peran perempuan dalam ruang spiritual publik, tanpa mengabaikan norma-norma adat dan agama yang berlaku. Keberadaan ruang ini menjadi bukti bahwa arsitektur Islam di Jawa mampu mengintegrasikan nilai-nilai Islam dengan budaya lokal secara harmonis.</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCADCA313_D218_63C1_41E7_C411775B1243_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B.jpg",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_BAC6D9AB_A992_B015_41BA_AC64D10DFE98",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "BANGSAL UTARA",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCADAC317_D218_63C1_41E6_368C545E0F99",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Masjid Gedhe Mataram Kotagede bukan sekadar tempat ibadah, melainkan ruang warisan yang menyimpan jejak peradaban Islam Jawa yang sarat simbol dan makna. Di antara bagian pentingnya terdapat dua bangunan pendukung yang kerap luput dari perhatian: Bangsal Lor (utara) dan Bangsal Kidul (selatan). Kedua bangsal ini bukan sekadar pelengkap arsitektural, tetapi mencerminkan nilai-nilai sosial, spiritual, dan kosmologis dalam tata ruang masyarakat Mataram Islam.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Secara fungsi, bangsal ini dulunya digunakan sebagai tempat musyawarah dan pertemuan para ulama serta abdi dalem masjid, terutama sebelum dan sesudah pelaksanaan ibadah atau upacara keagamaan. Bangsal Lor lebih sering digunakan oleh para tokoh masyarakat dan penghulu, sedangkan Bangsal Kidul dipakai untuk para abdi dalem dan masyarakat umum. Penempatan utara dan selatan sendiri tak bisa dilepaskan dari konsepsi ruang dalam budaya Jawa, di mana arah memiliki makna filosofis tertentu: utara melambangkan kehormatan dan kekuasaan, sementara selatan identik dengan kemasyarakatan dan keseimbangan (Sedyawati, 1993).</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Bangunan kedua bangsal ini juga mencerminkan pola arsitektur Jawa tradisional, dengan atap joglo dan tiang-tiang saka guru dari kayu jati tua yang kuat dan megah. Kesederhanaannya memperlihatkan nilai kesahajaan Islam Jawa, namun keberadaannya memperkuat identitas ruang masjid sebagai pusat kehidupan komunal. Tidak hanya dalam aspek fisik, bangsal juga menjadi media sosial di mana nilai-nilai Islam disampaikan dalam bentuk yang lebih inklusif dan cair (Atmadi, 1988).</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Kehadiran bangsal-bangsal ini memperkuat pemahaman bahwa masjid dalam konteks budaya Jawa bukan hanya ruang vertikal antara manusia dan Tuhan, tapi juga ruang horisontal antar manusia. Di sinilah Islam Jawa menemukan bentuknya\u2014agama yang menyatu dengan budaya, membentuk relasi sosial yang harmonis dan inklusif. Maka, merawat bangsal bukan sekadar menjaga bangunan, tapi juga merawat dialog antara warisan dan kehidupan masa kini.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCADAC317_D218_63C1_41E6_368C545E0F99_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_C75DCE91_D218_62C0_41E9_74EC40DF958E.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_C719054F_D21B_A641_41DD_F0327CDF8F36",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleFontColor": "#000000",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleTextDecoration": "none",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "titleFontFamily": "Lucida Console",
  "title": "BANGSAL SELATAN",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidCAD9231F_D218_63C1_41D6_A3ECEC44BC84",
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "class": "HTMLText",
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Masjid Gedhe Mataram Kotagede bukan sekadar tempat ibadah, melainkan ruang warisan yang menyimpan jejak peradaban Islam Jawa yang sarat simbol dan makna. Di antara bagian pentingnya terdapat dua bangunan pendukung yang kerap luput dari perhatian: Bangsal Lor (utara) dan Bangsal Kidul (selatan). Kedua bangsal ini bukan sekadar pelengkap arsitektural, tetapi mencerminkan nilai-nilai sosial, spiritual, dan kosmologis dalam tata ruang masyarakat Mataram Islam.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Secara fungsi, bangsal ini dulunya digunakan sebagai tempat musyawarah dan pertemuan para ulama serta abdi dalem masjid, terutama sebelum dan sesudah pelaksanaan ibadah atau upacara keagamaan. Bangsal Lor lebih sering digunakan oleh para tokoh masyarakat dan penghulu, sedangkan Bangsal Kidul dipakai untuk para abdi dalem dan masyarakat umum. Penempatan utara dan selatan sendiri tak bisa dilepaskan dari konsepsi ruang dalam budaya Jawa, di mana arah memiliki makna filosofis tertentu: utara melambangkan kehormatan dan kekuasaan, sementara selatan identik dengan kemasyarakatan dan keseimbangan (Sedyawati, 1993).</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Bangunan kedua bangsal ini juga mencerminkan pola arsitektur Jawa tradisional, dengan atap joglo dan tiang-tiang saka guru dari kayu jati tua yang kuat dan megah. Kesederhanaannya memperlihatkan nilai kesahajaan Islam Jawa, namun keberadaannya memperkuat identitas ruang masjid sebagai pusat kehidupan komunal. Tidak hanya dalam aspek fisik, bangsal juga menjadi media sosial di mana nilai-nilai Islam disampaikan dalam bentuk yang lebih inklusif dan cair (Atmadi, 1988).</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Kehadiran bangsal-bangsal ini memperkuat pemahaman bahwa masjid dalam konteks budaya Jawa bukan hanya ruang vertikal antara manusia dan Tuhan, tapi juga ruang horisontal antar manusia. Di sinilah Islam Jawa menemukan bentuknya\u2014agama yang menyatu dengan budaya, membentuk relasi sosial yang harmonis dan inklusif. Maka, merawat bangsal bukan sekadar menjaga bangunan, tapi juga merawat dialog antara warisan dan kehidupan masa kini.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "width": "100%",
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "height": "50%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   },
   {
    "horizontalAlign": "center",
    "paddingTop": 0,
    "id": "image_uidCAD9231F_D218_63C1_41D6_A3ECEC44BC84_1",
    "minWidth": 0,
    "shadow": false,
    "borderSize": 0,
    "height": "50%",
    "width": "100%",
    "borderRadius": 0,
    "url": "media/photo_C75DCE91_D218_62C0_41E9_74EC40DF958E.png",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "titlePaddingTop": 5,
  "class": "Window",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyPaddingBottom": 5,
  "paddingTop": 0,
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "minWidth": 20,
  "width": 400,
  "bodyPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "scrollBarMargin": 2,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "headerBackgroundOpacity": 1,
  "shadowSpread": 1,
  "bodyBorderSize": 0,
  "paddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "id": "window_C576BE20_D1E9_A5FF_41E8_4812418DD2A2",
  "shadow": true,
  "bodyPaddingTop": 5,
  "gap": 10,
  "headerBorderColor": "#000000",
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "titleFontColor": "#000000",
  "backgroundColorRatios": [],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleTextDecoration": "none",
  "shadowHorizontalLength": 3,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontWeight": "bold",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "shadowBlurRadius": 6,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleFontSize": 14,
  "headerBorderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "scrollBarOpacity": 0.5,
  "veilColorDirection": "horizontal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconWidth": 12,
  "layout": "vertical"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.52,
   "pitch": 0
  },
  "id": "camera_CAFEF363_D218_6241_41E4_32F8A864A8D1",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.71,
   "pitch": 0
  },
  "id": "camera_CB03E36F_D218_6241_41D7_7F57AF25F2DF",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.1,
   "pitch": 0
  },
  "id": "camera_CB09B37B_D218_6240_41E4_7F1A6630FBD7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.29,
   "pitch": 0
  },
  "id": "camera_CB1CE387_D218_62C1_41A1_E8EB55D61406",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.67,
   "pitch": 0
  },
  "id": "camera_CB20738E_D218_62C3_41D9_8E05D61BE89A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -121.9,
   "pitch": 0
  },
  "id": "camera_CB32A395_D218_62C1_41E2_B03464917EF2",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.62,
   "pitch": 0
  },
  "id": "camera_CB44939B_D218_62C0_41B1_6330AECEE517",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.14,
   "pitch": 0
  },
  "id": "camera_CB57C3A2_D218_62C3_41E4_7DCE6334C82E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.95,
   "pitch": 0
  },
  "id": "camera_CB5933A9_D218_62C1_41AB_EB2698741516",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.24,
   "pitch": 0
  },
  "id": "camera_CB6BD3B0_D218_62DF_41C0_83D64F45000A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.9,
   "pitch": 0
  },
  "id": "camera_CB7D33B7_D218_62C1_41C5_4AAE54FD1AD7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.81,
   "pitch": 0
  },
  "id": "camera_CB8013BD_D218_62C1_41DC_B611A03D2C3C",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.62,
   "pitch": 0
  },
  "id": "camera_CB9103C4_D218_6247_41E8_05C72A938CE6",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.09,
   "pitch": 0
  },
  "id": "camera_CBA263CB_D218_6241_41E6_E1AF2203774E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47",
 "this.audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A4FF733C_A973_9072_41C6_43A355F99D88_t.jpg",
  "id": "photo_A4FF733C_A973_9072_41C6_43A355F99D88",
  "label": "Gapura Paduraksa",
  "width": 11968,
  "class": "Photo",
  "height": 5984,
  "image": {
   "levels": [
    {
     "url": "media/photo_A4FF733C_A973_9072_41C6_43A355F99D88.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C_t.jpg",
  "id": "photo_A5D33363_A97E_F016_41E3_E11843ACB34C",
  "label": "PADURAKSA(1)",
  "width": 2560,
  "class": "Photo",
  "height": 1920,
  "image": {
   "levels": [
    {
     "url": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 "this.audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792_t.jpg",
  "id": "photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792",
  "label": "masjid-kotagede-edit-1",
  "width": 600,
  "class": "Photo",
  "height": 438,
  "image": {
   "levels": [
    {
     "url": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C_t.jpg",
  "id": "photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C",
  "label": "Javanese_Decoration",
  "width": 4000,
  "class": "Photo",
  "height": 4000,
  "image": {
   "levels": [
    {
     "url": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C_t.png",
  "id": "photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C",
  "label": "Mimbar",
  "width": 383,
  "class": "Photo",
  "height": 683,
  "image": {
   "levels": [
    {
     "url": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59.ogg",
   "mp3Url": "media/audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59.mp3"
  },
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59"
 },
 {
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13.ogg",
   "mp3Url": "media/audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13.mp3"
  },
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53_t.png",
  "id": "photo_B9341347_A9F2_901E_41D8_9D58AF49BA53",
  "label": "Mihrab",
  "width": 554,
  "class": "Photo",
  "height": 368,
  "image": {
   "levels": [
    {
     "url": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 "this.audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3",
 {
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_B98A9738_A9FE_9072_41D8_9489BF11BA30.ogg",
   "mp3Url": "media/audio_B98A9738_A9FE_9072_41D8_9489BF11BA30.mp3"
  },
  "class": "PanoramaAudio",
  "autoplay": true,
  "id": "audio_B98A9738_A9FE_9072_41D8_9489BF11BA30"
 },
 "this.audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B_t.jpg",
  "id": "photo_BB76BDE8_A993_F012_41CF_C2991C92D05B",
  "label": "IMG_20250304_094213_00_010_PureShot",
  "width": 4000,
  "class": "Photo",
  "height": 2250,
  "image": {
   "levels": [
    {
     "url": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 "this.audio_B85C4BEA_A993_9016_41DE_311CC1771B4C",
 "this.audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0",
 "this.audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17_t.png",
  "id": "photo_A2F8F352_AD03_97F8_41E0_E159A156AF17",
  "label": "Saka guru",
  "width": 458,
  "class": "Photo",
  "height": 470,
  "image": {
   "levels": [
    {
     "url": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464_t.jpg",
  "id": "photo_BCBBFC5F_B382_0B66_41D4_FB7577536464",
  "label": "IMG_20250304_094745_00_012_PureShot",
  "width": 4000,
  "class": "Photo",
  "height": 4000,
  "image": {
   "levels": [
    {
     "url": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 "this.audio_A3A18480_B382_3BDA_41C2_B065B593F8FB",
 "this.audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C",
 "this.audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B",
 "this.audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C_t.png",
  "id": "photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C",
  "label": "KEMUNCAK",
  "width": 400,
  "class": "Photo",
  "height": 600,
  "image": {
   "levels": [
    {
     "url": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 "this.audio_F981125E_EDF4_CC1E_41DF_7D51EA31A6B3",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36_t.png",
  "id": "photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36",
  "label": "jAGANG",
  "width": 606,
  "class": "Photo",
  "height": 406,
  "image": {
   "levels": [
    {
     "url": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74.ogg",
   "mp3Url": "media/audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74.mp3"
  },
  "class": "PanoramaAudio",
  "autoplay": true,
  "id": "audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74"
 },
 {
  "thumbnailUrl": "media/album_5E3B580D_53CD_348D_418C_8CE99FE254FD_t.png",
  "id": "album_5E3B580D_53CD_348D_418C_8CE99FE254FD",
  "label": "Photo Album Virtual Reality tour mataram kotagede (1)",
  "playList": {
   "id": "album_5E3B580D_53CD_348D_418C_8CE99FE254FD_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.41",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.52"
      }
     },
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_5E3B580D_53CD_348D_418C_8CE99FE254FD_0_t.png",
      "id": "album_5E3B580D_53CD_348D_418C_8CE99FE254FD_0",
      "label": "Virtual Reality tour mataram kotagede (1)",
      "width": 1920,
      "class": "Photo",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_5E3B580D_53CD_348D_418C_8CE99FE254FD_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.37",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.73"
      }
     },
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_5E3B580D_53CD_348D_418C_8CE99FE254FD_1_t.png",
      "id": "album_5E3B580D_53CD_348D_418C_8CE99FE254FD_1",
      "label": "Virtual Reality tour mataram kotagede",
      "width": 1920,
      "class": "Photo",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_5E3B580D_53CD_348D_418C_8CE99FE254FD_1.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  },
  "class": "PhotoAlbum"
 },
 "this.audio_4CEF7DB9_5C7B_2F95_41D5_49F2A96A1CA9",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_C3F4CCCF_CE9B_D7E0_41B6_66F6A99C9F0B_t.png",
  "id": "photo_C3F4CCCF_CE9B_D7E0_41B6_66F6A99C9F0B",
  "label": "Pintu utama",
  "width": 391,
  "class": "Photo",
  "height": 293,
  "image": {
   "levels": [
    {
     "url": "media/photo_C3F4CCCF_CE9B_D7E0_41B6_66F6A99C9F0B.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_C33AD0F6_CEB7_4FA3_41E5_DAF4B0BD0D43_t.jpg",
  "id": "photo_C33AD0F6_CEB7_4FA3_41E5_DAF4B0BD0D43",
  "label": "Pakoe_Boewono_X,_soesoehoenan_van_Soerakarta,_KITLV_6212.tiff",
  "width": 225,
  "class": "Photo",
  "height": 285,
  "image": {
   "levels": [
    {
     "url": "media/photo_C33AD0F6_CEB7_4FA3_41E5_DAF4B0BD0D43.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_C728C117_D218_BFC1_41E2_4D13EA0DAB06_t.png",
  "id": "photo_C728C117_D218_BFC1_41E2_4D13EA0DAB06",
  "label": "Bangsal Selatan",
  "width": 11968,
  "class": "Photo",
  "height": 5984,
  "image": {
   "levels": [
    {
     "url": "media/photo_C728C117_D218_BFC1_41E2_4D13EA0DAB06.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_C75DCE91_D218_62C0_41E9_74EC40DF958E_t.png",
  "id": "photo_C75DCE91_D218_62C0_41E9_74EC40DF958E",
  "label": "Bangsal Utara",
  "width": 11968,
  "class": "Photo",
  "height": 5984,
  "image": {
   "levels": [
    {
     "url": "media/photo_C75DCE91_D218_62C0_41E9_74EC40DF958E.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 }
], "children": [
 {
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "progressRight": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "minHeight": 50,
  "playbackBarProgressBorderColor": "#000000",
  "class": "ViewerArea",
  "progressBackgroundOpacity": 1,
  "paddingTop": 0,
  "borderSize": 0,
  "playbackBarHeadWidth": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "minWidth": 100,
  "width": "100%",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "paddingBottom": 0,
  "paddingRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderSize": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "toolTipFontColor": "#606060",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "id": "MainViewer",
  "progressBarOpacity": 1,
  "shadow": false,
  "top": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressHeight": 10,
  "progressBottom": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "borderRadius": 0,
  "progressBarBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "left": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingRight": 6
 },
 {
  "id": "HTMLText_A1CAD743_AD01_9FD8_41C9_46423D8EAD3A",
  "backgroundColor": [
   "#FFFFFF"
  ],
  "shadow": true,
  "scrollBarWidth": 10,
  "shadowVerticalLength": 2,
  "scrollBarOpacity": 0.5,
  "top": "5.28%",
  "borderRadius": 10,
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [
   0.11
  ],
  "shadowHorizontalLength": 2,
  "minHeight": 1,
  "paddingLeft": 20,
  "class": "HTMLText",
  "paddingTop": 20,
  "borderSize": 0,
  "shadowBlurRadius": 7,
  "minWidth": 1,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>VIRTUAL TOUR</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"><B>MASJID GEDHE MATARAM KOTAGEDE</B></SPAN></SPAN></DIV></div>",
  "shadowOpacity": 0.19,
  "width": "27.949%",
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "horizontal",
  "shadowColor": "#000000",
  "scrollBarMargin": 2,
  "paddingBottom": 10,
  "paddingRight": 20,
  "left": "3.76%",
  "height": "12.723%",
  "shadowSpread": 1,
  "backgroundOpacity": 0.5
 },
 {
  "bottom": "0%",
  "id": "IconButton_A132C64E_AD03_91E9_41BA_42A64BDC5246",
  "maxWidth": 500,
  "shadow": false,
  "backgroundOpacity": 0,
  "maxHeight": 500,
  "iconURL": "skin/IconButton_A132C64E_AD03_91E9_41BA_42A64BDC5246.png",
  "mode": "push",
  "borderRadius": 0,
  "minHeight": 1,
  "click": "this.showPopupImage(this.ImageResource_5EFDDBF5_53D5_2B9C_41B0_F53F52861FC4, null, '90%', '90%', this.FadeInEffect_5EFDCBF6_53D5_2B9F_41B6_D6BD65FFF415, this.FadeOutEffect_5EFDFBF6_53D5_2B9F_41CD_B0F71E97D06E, {'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconWidth':20,'rollOverBorderSize':0,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconColor':'#888888','iconColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'iconHeight':20,'rollOverIconHeight':20,'pressedIconLineWidth':5,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverIconLineWidth':5,'paddingRight':5,'paddingBottom':5,'pressedBackgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3}, null, null, false)",
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 1,
  "width": 140.05,
  "cursor": "hand",
  "height": 110.52,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "right": "10.77%"
 },
 {
  "bottom": "2.83%",
  "id": "IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66",
  "shadow": false,
  "backgroundOpacity": 0,
  "pressedIconURL": "skin/IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66_pressed.png",
  "iconURL": "skin/IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66.png",
  "mode": "toggle",
  "borderRadius": 0,
  "minHeight": 0,
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 0,
  "width": 77.52,
  "cursor": "hand",
  "height": 66.1,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "right": "4.87%"
 },
 {
  "toolTipBorderSize": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "id": "IconButton_5EF1009B_53CD_1595_41B5_DD5593039A54",
  "maxWidth": 128,
  "shadow": false,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "maxHeight": 128,
  "toolTipOpacity": 1,
  "iconURL": "skin/IconButton_5EF1009B_53CD_1595_41B5_DD5593039A54.png",
  "mode": "toggle",
  "top": "4.32%",
  "toolTipFontFamily": "Arial",
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "minHeight": 1,
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "borderSize": 0,
  "toolTipPaddingBottom": 4,
  "toolTipBorderColor": "#767676",
  "minWidth": 1,
  "width": 57.5,
  "cursor": "hand",
  "toolTipBackgroundColor": "#F6F6F6",
  "height": 34.5,
  "horizontalAlign": "center",
  "toolTipFontSize": 12,
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowOpacity": 0,
  "toolTip": "Fullscreen",
  "transparencyActive": true,
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "paddingBottom": 0,
  "paddingRight": 0,
  "toolTipPaddingRight": 6,
  "verticalAlign": "middle",
  "toolTipTextShadowBlurRadius": 3,
  "right": "1.71%",
  "toolTipFontColor": "#606060",
  "toolTipTextShadowColor": "#000000",
  "backgroundOpacity": 0
 },
 {
  "id": "IconButton_4A66FE07_5CDD_2C7D_41C8_62D5E02BCE15",
  "maxWidth": 55,
  "shadow": false,
  "maxHeight": 54,
  "iconURL": "skin/IconButton_4A66FE07_5CDD_2C7D_41C8_62D5E02BCE15.png",
  "mode": "push",
  "top": "2.83%",
  "borderRadius": 0,
  "minHeight": 1,
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 1,
  "width": 55,
  "cursor": "hand",
  "height": 54,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "right": "7.95%",
  "backgroundOpacity": 0
 },
 {
  "bottom": "0.3%",
  "id": "IconButton_4A47CB71_5DDD_1495_41C6_35E9F355855E",
  "maxWidth": 500,
  "shadow": false,
  "backgroundOpacity": 0,
  "maxHeight": 500,
  "iconURL": "skin/IconButton_4A47CB71_5DDD_1495_41C6_35E9F355855E.png",
  "mode": "push",
  "borderRadius": 0,
  "minHeight": 1,
  "click": "this.showPopupImage(this.ImageResource_C14375CD_D1E8_E641_41E6_52BEB59BCFF1, null, '90%', '90%', this.FadeInEffect_C14345CD_D1E8_E640_41E5_6535B1FA98BF, this.FadeOutEffect_C14355CE_D1E8_E643_4140_185CAE4DAC5C, {'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconWidth':20,'rollOverBorderSize':0,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconColor':'#888888','iconColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'iconHeight':20,'rollOverIconHeight':20,'pressedIconLineWidth':5,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverIconLineWidth':5,'paddingRight':5,'paddingBottom':5,'pressedBackgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3}, null, null, false)",
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 1,
  "width": 126.5,
  "cursor": "hand",
  "height": 103.5,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "right": "19.66%"
 },
 {
  "bottom": "0%",
  "id": "IconButton_4A76EC85_5DD4_EC7D_4196_58EB7F619247",
  "maxWidth": 500,
  "shadow": false,
  "backgroundOpacity": 0,
  "maxHeight": 500,
  "iconURL": "skin/IconButton_4A76EC85_5DD4_EC7D_4196_58EB7F619247.png",
  "mode": "push",
  "borderRadius": 0,
  "minHeight": 1,
  "click": "this.showPopupImage(this.ImageResource_C14045D1_D1E8_E641_41D5_4BC04F35B7A0, null, '90%', '90%', this.FadeInEffect_C14055D1_D1E8_E641_41BF_66940AD7F522, this.FadeOutEffect_C143A5D1_D1E8_E641_41C4_786AF370060C, {'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconWidth':20,'rollOverBorderSize':0,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconColor':'#888888','iconColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'iconHeight':20,'rollOverIconHeight':20,'pressedIconLineWidth':5,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverIconLineWidth':5,'paddingRight':5,'paddingBottom':5,'pressedBackgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3}, null, null, false)",
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 1,
  "width": 263.95,
  "cursor": "hand",
  "height": 133.5,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "left": "0.03%",
  "verticalAlign": "middle"
 },
 {
  "itemLabelFontWeight": "normal",
  "bottom": "23.58%",
  "backgroundOpacity": 0.2,
  "id": "ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164",
  "backgroundColor": [
   "#000000"
  ],
  "shadow": false,
  "itemThumbnailBorderRadius": 0,
  "itemBackgroundColorRatios": [],
  "gap": 10,
  "itemMode": "normal",
  "itemOpacity": 1,
  "itemThumbnailShadowBlurRadius": 4,
  "scrollBarOpacity": 0.5,
  "borderRadius": 5,
  "itemThumbnailOpacity": 1,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "itemPaddingBottom": 3,
  "itemThumbnailShadowHorizontalLength": 3,
  "backgroundColorRatios": [
   0
  ],
  "itemBackgroundOpacity": 0,
  "itemThumbnailShadowSpread": 1,
  "itemLabelGap": 1,
  "itemThumbnailHeight": 45,
  "itemLabelFontStyle": "normal",
  "itemHorizontalAlign": "center",
  "itemVerticalAlign": "middle",
  "itemBackgroundColor": [],
  "itemPaddingRight": 3,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailWidth": 57,
  "minHeight": 1,
  "paddingLeft": 20,
  "class": "ThumbnailList",
  "itemLabelHorizontalAlign": "center",
  "paddingTop": 10,
  "borderSize": 0,
  "minWidth": 1,
  "width": 127,
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingTop": 3,
  "scrollBarMargin": 2,
  "itemThumbnailScaleMode": "fit_outside",
  "horizontalAlign": "left",
  "itemPaddingLeft": 3,
  "playList": "this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist",
  "backgroundColorDirection": "vertical",
  "itemLabelFontColor": "#FFFFFF",
  "itemLabelPosition": "bottom",
  "itemLabelFontFamily": "Arial",
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadow": true,
  "scrollBarColor": "#FFFFFF",
  "paddingRight": 20,
  "height": "52.827%",
  "verticalAlign": "top",
  "right": "0%",
  "layout": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowOpacity": 0.8,
  "paddingBottom": 10,
  "itemLabelFontSize": 14,
  "itemBorderRadius": 0,
  "scrollBarWidth": 10
 },
 {
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColor": [
   "#000000"
  ],
  "shadow": false,
  "top": 0,
  "borderRadius": 0,
  "visible": false,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 0,
  "paddingLeft": 0,
  "class": "UIComponent",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "paddingBottom": 0,
  "paddingRight": 0,
  "left": 0,
  "right": 0,
  "backgroundOpacity": 0.55
 },
 {
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColor": [],
  "shadow": false,
  "top": 0,
  "borderRadius": 0,
  "visible": false,
  "backgroundColorRatios": [],
  "minHeight": 0,
  "paddingLeft": 0,
  "class": "ZoomImage",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "paddingBottom": 0,
  "paddingRight": 0,
  "left": 0,
  "right": 0,
  "backgroundOpacity": 1
 },
 {
  "id": "closeButtonPopupPanorama",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadow": false,
  "fontColor": "#FFFFFF",
  "iconColor": "#000000",
  "gap": 5,
  "textDecoration": "none",
  "mode": "push",
  "top": 10,
  "borderRadius": 0,
  "visible": false,
  "iconHeight": 20,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "minHeight": 0,
  "layout": "horizontal",
  "fontWeight": "normal",
  "paddingLeft": 5,
  "class": "CloseButton",
  "borderColor": "#000000",
  "paddingTop": 5,
  "borderSize": 0,
  "minWidth": 0,
  "fontSize": 12,
  "cursor": "hand",
  "iconLineWidth": 5,
  "horizontalAlign": "center",
  "pressedIconColor": "#888888",
  "fontStyle": "normal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "rollOverIconColor": "#666666",
  "paddingBottom": 5,
  "paddingRight": 5,
  "verticalAlign": "middle",
  "shadowSpread": 1,
  "right": 10,
  "iconWidth": 20,
  "iconBeforeLabel": true,
  "label": "",
  "backgroundOpacity": 0.3
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_D2F9F018_C7D0_225C_41AB_98564CE10164_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_5EF1009B_53CD_1595_41B5_DD5593039A54].forEach(function(component) { component.set('visible', false); }) }",
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_5EF1009B_53CD_1595_41B5_DD5593039A54",
 "minHeight": 20,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "paddingLeft": 0,
 "class": "Player",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 20,
 "width": "100%",
 "buttonToggleMute": "this.IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "height": "100%",
 "backgroundPreloadEnabled": true
})