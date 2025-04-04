TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_t.jpg",
  "cardboardMenu": {
   "selectedFontColor": "#FFFFFF",
   "fontFamily": "Arial",
   "selectedBackgroundColor": "#202020",
   "opacity": 0.4,
   "id": "Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "class": "Menu",
   "children": [
    {
     "class": "MenuItem",
     "label": "OP(1)",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": " Gapura Timur",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "Beteng timur",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "Pintu selatan paduraksa",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "Halaman Depan",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "Tugu jam",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "Jagang",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "Serambi",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "Bedug",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "Ruang Utama",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "Depan Mimbar",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "Pawestran",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "Bangsal Utara",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "class": "MenuItem",
     "label": "Bangsal Selatan",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    }
   ],
   "rollOverOpacity": 0.8
  },
  "hfovMax": 120,
  "id": "panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5",
  "vfov": 180,
  "audios": [
   {
    "loop": true,
    "id": "audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47",
    "audio": {
     "mp3Url": "media/audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A9CDD502_A468_0A51_41D6_07C79FD0EAA9",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.7,
        "yaw": 0.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 200,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.29
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 30.7,
        "yaw": 0.37,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 156,
           "width": 585,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -20.29
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A812CB62_A468_FED1_41E3_9FAFE1FCF6D1",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.54,
        "yaw": 0.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 132,
           "width": 142,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -13.81
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 15.54,
        "yaw": 0.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 265,
           "width": 285,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_1_0.png"
          }
         ]
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
  "class": "Panorama",
  "label": "OP(1)",
  "hfovMin": 60
 },
 {
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_A88851C5_A468_0DD2_41D8_EA963347C751",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0",
    "audio": {
     "mp3Url": "media/audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A82BE4D1_A4A8_0BF3_41DE_AD6CD1DB562D",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.37,
        "yaw": 4.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 102,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 6
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.37,
        "yaw": 4.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 204,
           "width": 204,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 6
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A8FC659B_A498_0A77_41B7_71038B18F42B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A55A5AB4_A977_9072_41AA_7A02697B4876, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.11,
        "yaw": 21.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 132,
           "width": 153,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 19.91
       }
      ],
      "items": [
       {
        "hfov": 16.11,
        "yaw": 21.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 265,
           "width": 306,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 19.91
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A4637116_B482_3AE7_41D9_411908C96F8E",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.11,
        "yaw": -16.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 173,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -11.04
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 24.11,
        "yaw": -16.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 507,
           "width": 439,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -11.04
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": " Gapura Timur",
  "hfovMin": 60
 },
 {
  "id": "panorama_A88851C5_A468_0DD2_41D8_EA963347C751_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4",
    "audio": {
     "mp3Url": "media/audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A8BB811F_A498_0A6F_41C1_12D18D3EEAF4",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A427AE2F_A991_906E_41CD_430E5C7A5D4C, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.51,
        "yaw": -76.29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 124,
           "width": 120,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -1.14
       }
      ],
      "items": [
       {
        "hfov": 13.51,
        "yaw": -76.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 248,
           "width": 241,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.14
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A52B024C_A992_F012_41C2_9FCDCF8FD360",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A46A114E_A996_902E_41D8_222F177FF178, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.85,
        "yaw": -0.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 105,
           "width": 96,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -0.28
       }
      ],
      "items": [
       {
        "hfov": 10.85,
        "yaw": -0.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 210,
           "width": 193,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -0.28
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BDFCB05E_B38E_1B67_41DC_2B167E922B7B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 23.82,
        "yaw": 42.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 42,
           "width": 200,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -14
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 23.82,
        "yaw": 42.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 95,
           "width": 438,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -14
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BE77917C_B38F_FD2B_41AD_81AA81A4243B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.29,
        "yaw": 42.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 102,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": -9.05
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.29,
        "yaw": 42.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 204,
           "width": 204,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_5_0.png"
          }
         ]
        },
        "pitch": -9.05
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "Beteng timur",
  "hfovMin": 60
 },
 {
  "id": "panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_A73323B6_A99F_907E_41DA_9BA56748C827",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11",
    "audio": {
     "mp3Url": "media/audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A78766D5_A993_9032_41DA_0A67D437776E",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 17.52,
        "yaw": -176.57,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 180,
           "width": 156,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -0.29
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 17.52,
        "yaw": -176.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 360,
           "width": 313,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.29
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_E6C2784D_ED1F_C78F_41C1_792A89CBBC6B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_E1CE937A_ED1F_4995_41ED_4A11955A0BB2, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.43,
        "yaw": -20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 146,
           "width": 139,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 37.24
       }
      ],
      "items": [
       {
        "hfov": 12.43,
        "yaw": -20,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 292,
           "width": 279,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_1_0.png"
          }
         ]
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
  "class": "Panorama",
  "label": "Pintu selatan paduraksa",
  "hfovMin": 60
 },
 {
  "id": "panorama_A73323B6_A99F_907E_41DA_9BA56748C827_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A",
    "audio": {
     "mp3Url": "media/audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_AA4F8557_A4E8_0AFF_41DF_2A8589A5D9A0",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536, this.camera_F4D39A37_FE85_BD3E_41A5_017F04957ADF); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.81,
        "yaw": 4.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 137,
           "width": 141,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.76
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 15.81,
        "yaw": 4.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 275,
           "width": 282,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 0.76
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BF495F73_B386_053E_41D4_0BC825A1DB76",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.1,
        "yaw": 123.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 102,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -13.67
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.1,
        "yaw": 123.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 205,
           "width": 204,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -13.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BDD4D841_B382_0B5A_41E2_E2CB95658782",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E, this.camera_F4CB4A3E_FE85_BD2E_41E1_ED5E89672025); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.29,
        "yaw": -79.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 89,
           "width": 93,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -10.81
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.29,
        "yaw": -79.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 178,
           "width": 187,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -10.81
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "Halaman Depan",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "thumbnailUrl": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_t.jpg",
     "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
     "hfovMax": 120,
     "id": "panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
     "vfov": 180,
     "audios": [
      {
       "id": "audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01",
       "audio": {
        "mp3Url": "media/audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01.mp3",
        "class": "AudioResource",
        "oggUrl": "media/audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01.ogg"
       },
       "autoplay": true,
       "class": "PanoramaAudio"
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_AABF9161_A4E8_0AD3_419C_13ECC0CEF900",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_F9B8726D_EDF4_4C22_41E6_223CB50FB07B, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.24,
           "yaw": 3.71,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 173,
              "width": 185,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -22
          }
         ],
         "items": [
          {
           "hfov": 19.24,
           "yaw": 3.71,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 347,
              "width": 370,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -22
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_ABAA8C28_A498_1A51_419E_3006B556451A",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8, this.camera_F4E67A2A_FE85_BCD6_41DD_333E01E4FA2A); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17.86,
           "yaw": -85.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 167,
              "width": 166,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -16.88
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 17.86,
           "yaw": -85.33,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 334,
              "width": 333,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -16.88
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_BDF5C5BB_B382_052E_41B8_D97447B676B9",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 28.57,
           "yaw": -31.34,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 198,
              "width": 200,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -35.81
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 28.57,
           "yaw": -31.34,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 622,
              "width": 629,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -35.81
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_FCAD411B_F15A_9B02_41AB_D600CC6059A0",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B, this.camera_F4DE4A30_FE85_BD33_41E6_735751FF8250); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 21.75,
           "yaw": 108.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 195,
              "width": 200,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -21.81
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 21.75,
           "yaw": 108.1,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 408,
              "width": 418,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -21.81
          }
         ]
        }
       ]
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "class": "Panorama",
     "label": "Jagang",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "thumbnailUrl": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_t.jpg",
        "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
        "hfovMax": 120,
        "id": "panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
        "vfov": 180,
        "audios": [
         {
          "id": "audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C",
          "audio": {
           "mp3Url": "media/audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C.mp3",
           "class": "AudioResource",
           "oggUrl": "media/audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C.ogg"
          },
          "autoplay": true,
          "class": "PanoramaAudio"
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_AA360F6D_A499_F6D3_4190_7C3D533E68AE",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.95,
              "yaw": 6.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 122,
                 "width": 115,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": 1.43
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 12.95,
              "yaw": 6.29,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 245,
                 "width": 231,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_0_0.png"
                }
               ]
              },
              "pitch": 1.43
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_B4DEA708_A498_1651_41DF_95EBAB6D2B9F",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536, this.camera_F4C08A45_FE85_BD52_41C9_B131F72D0A60); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 15.15,
              "yaw": 170.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 138,
                 "width": 139,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -14.13
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 15.15,
              "yaw": 170.29,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 276,
                 "width": 279,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -14.13
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_BC5EDA4C_B39E_0F6B_41E2_7F79E2F111A1",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4, this.camera_F4B79A4C_FE85_BD52_41D4_D903012E8293); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.93,
              "yaw": -56.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 72,
                 "width": 81,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -12.33
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 8.93,
              "yaw": -56.38,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 144,
                 "width": 163,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -12.33
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "pitch": 0,
        "hfov": 360,
        "class": "Panorama",
        "label": "Serambi",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
          "yaw": 170.29,
          "backwardYaw": -85.33,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "thumbnailUrl": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_t.jpg",
           "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
           "hfovMax": 120,
           "id": "panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4",
           "vfov": 180,
           "audios": [
            {
             "id": "audio_A3A18480_B382_3BDA_41C2_B065B593F8FB",
             "audio": {
              "mp3Url": "media/audio_A3A18480_B382_3BDA_41C2_B065B593F8FB.mp3",
              "class": "AudioResource",
              "oggUrl": "media/audio_A3A18480_B382_3BDA_41C2_B065B593F8FB.ogg"
             },
             "autoplay": true,
             "class": "PanoramaAudio"
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_BDE28CFE_B382_0B26_41CE_BD978435215D",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 23.35,
                 "yaw": 39.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 161,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -19.42
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 23.35,
                 "yaw": 39.62,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 547,
                    "width": 442,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -19.42
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_BDDE2397_B3FE_1DE6_41E1_8B201664657A",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showWindow(this.window_BCB498DC_B3FE_0B6A_41E5_D1345FAAA59A, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 19.11,
                 "yaw": 12.57,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 159,
                    "width": 173,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.19
                }
               ],
               "items": [
                {
                 "hfov": 19.11,
                 "yaw": 12.57,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 319,
                    "width": 347,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -10.19
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_A38E0B08_B382_0EEA_41E6_483291F2D8CF",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8, this.camera_F4EFAA23_FE85_BCD6_41A7_6ED2284051A6); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.47,
                 "yaw": 58.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 85,
                    "width": 95,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -11
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 10.47,
                 "yaw": 58.1,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 171,
                    "width": 190,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -11
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "pitch": 0,
           "hfov": 360,
           "class": "Panorama",
           "label": "Bedug",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
             "yaw": 58.1,
             "backwardYaw": -56.38,
             "distance": 1
            }
           ]
          },
          "yaw": -56.38,
          "backwardYaw": 58.1,
          "distance": 1
         }
        ]
       },
       "yaw": -85.33,
       "backwardYaw": 170.29,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
       "yaw": 108.1,
       "backwardYaw": 4.48,
       "distance": 1
      }
     ]
    },
    "yaw": 4.48,
    "backwardYaw": 108.1,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "thumbnailUrl": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_t.jpg",
     "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
     "hfovMax": 120,
     "id": "panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E",
     "vfov": 180,
     "audios": [
      {
       "id": "audio_F981125E_EDF4_CC1E_41DF_7D51EA31A6B3",
       "audio": {
        "id": "audioresource_F981625E_EDF4_CC1E_41DC_4D65AA4F7A2E",
        "mp3Url": "media/audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B.mp3",
        "class": "AudioResource",
        "oggUrl": "media/audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B.ogg"
       },
       "autoplay": true,
       "class": "PanoramaAudio"
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A440985C_B486_0B6A_41D7_9FD1681C54DE",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 28.83,
           "yaw": -21.15,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 152,
              "width": 200,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -10.57
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 28.83,
           "yaw": -21.15,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 401,
              "width": 524,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -10.57
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A6315028_B486_1B2A_418D_A494D9AD3996",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B, this.camera_F4F5FA1C_FE85_BCF2_41B5_70400BAE1F35); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.55,
           "yaw": 166.38,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 85,
              "width": 90,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -19
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 9.55,
           "yaw": 166.38,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 171,
              "width": 180,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -19
          }
         ]
        }
       ]
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "class": "Panorama",
     "label": "Bangsal Selatan",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
       "yaw": 166.38,
       "backwardYaw": -79.71,
       "distance": 1
      }
     ]
    },
    "yaw": -79.71,
    "backwardYaw": 166.38,
    "distance": 1
   }
  ]
 },
 {
  "id": "panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74",
    "audio": {
     "mp3Url": "media/audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A834D34F_A4E8_0EEF_41DE_3A4D9CFD8E65",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_FC77D8D0_F14D_A91E_41C4_8560C5048F7A, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.71,
        "yaw": 4.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 141,
           "width": 141,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 6.29
       }
      ],
      "items": [
       {
        "hfov": 15.71,
        "yaw": 4.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 282,
           "width": 282,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 6.29
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BEEA64FB_B386_1B2E_41E6_6F62B2B93ABD",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.83,
        "yaw": 51.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 79,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -9.38
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 8.83,
        "yaw": 51.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 148,
           "width": 159,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -9.38
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BDDA8B6D_B382_0D25_41DC_38BC6B9B5D45",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.07,
        "yaw": -32.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 87,
           "width": 91,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -11.86
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.07,
        "yaw": -32.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 175,
           "width": 183,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -11.86
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BDB524BF_B382_7B26_41E4_5485BCB53EAF",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.66,
        "yaw": 27.62,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 178,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": -11.14
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 24.66,
        "yaw": 27.62,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 503,
           "width": 449,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_6_0.png"
          }
         ]
        },
        "pitch": -11.14
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "Tugu jam",
  "hfovMin": 60
 },
 {
  "id": "panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
 {
  "id": "panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
 {
  "id": "panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4",
 {
  "id": "panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_AB302472_A498_0AB1_41E2_1E9529F5765B",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3",
    "audio": {
     "mp3Url": "media/audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_B49E69A7_A498_1A5F_41D1_6F451025BFCF",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.79,
        "yaw": 1.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 108,
           "width": 110,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -17.76
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.79,
        "yaw": 1.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 216,
           "width": 221,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -17.76
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B9268ACE_A9F2_902E_41DC_0D70CFDD4CAE",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 17.63,
        "yaw": 169.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 165,
           "width": 158,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -5.71
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 17.63,
        "yaw": 169.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 330,
           "width": 316,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -5.71
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A3D15370_AD00_97B8_4192_AFEE74833F02",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BD20E8AC_AD00_92A8_41CD_6F0F08B15ED2, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.04,
        "yaw": 63.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 134,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -0.19
       }
      ],
      "items": [
       {
        "hfov": 15.04,
        "yaw": 63.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 268,
           "width": 268,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BDB99953_B382_0D7E_41C3_39067C338574",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.04,
        "yaw": -46.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 108,
           "width": 125,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.47
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 14.04,
        "yaw": -46.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 217,
           "width": 251,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -4.47
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BD8E2F49_B386_056A_41E3_5D6B13077607",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.41,
        "yaw": 62.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 170,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -16.09
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 21.41,
        "yaw": 62.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 469,
           "width": 398,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -16.09
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "Ruang Utama",
  "hfovMin": 60
 },
 {
  "id": "panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268",
    "audio": {
     "mp3Url": "media/audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A79C43BD_A996_9072_41BE_17ACC1B08D72",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A6B2892C_A9F1_F012_41D4_2F053443E4FF, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.02,
        "yaw": -32.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 134,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.23
       }
      ],
      "items": [
       {
        "hfov": 15.02,
        "yaw": -32.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 268,
           "width": 268,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.23
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A6B2DBA7_A991_B01E_41CA_B5C93593BF1F",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_B9AE8EF5_A992_F1F2_41DC_A16A03B048A9, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.48,
        "yaw": -1.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 134,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -15.62
       }
      ],
      "items": [
       {
        "hfov": 14.48,
        "yaw": -1.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 268,
           "width": 268,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -15.62
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B9E2CF50_A9F1_9032_41C7_AE1BF336D482",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.33,
        "yaw": -137.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 102,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.71
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.33,
        "yaw": -137.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 204,
           "width": 204,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -7.71
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BE631795_B38E_05FA_41E2_83F2D3FCB53B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.97,
        "yaw": -52.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 195,
           "width": 185,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -15.81
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.97,
        "yaw": -52.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 391,
           "width": 370,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -15.81
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BD88B33C_B386_1D2A_41BB_D0092ECEDE3A",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.09,
        "yaw": 33.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 188,
           "width": 200,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.19
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 21.09,
        "yaw": 33.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 377,
           "width": 401,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -20.19
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "Depan Mimbar",
  "hfovMin": 60
 },
 {
  "id": "panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_B85C4BEA_A993_9016_41DE_311CC1771B4C",
    "audio": {
     "mp3Url": "media/audio_B85C4BEA_A993_9016_41DE_311CC1771B4C.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_B85C4BEA_A993_9016_41DE_311CC1771B4C.ogg"
    },
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_B9064232_A9F1_7076_41C5_47BE15AD4EDF",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.43,
        "yaw": -27.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 102,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -1.05
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.43,
        "yaw": -27.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 204,
           "width": 204,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.05
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B901E884_A98E_9012_41E5_394E8E9673D9",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BAC6D9AB_A992_B015_41BA_AC64D10DFE98, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.02,
        "yaw": -77.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 134,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.23
       }
      ],
      "items": [
       {
        "hfov": 15.02,
        "yaw": -77.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 268,
           "width": 268,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_1_0.png"
          }
         ]
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
  "class": "Panorama",
  "label": "Pawestran",
  "hfovMin": 60
 },
 {
  "id": "panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_t.jpg",
  "cardboardMenu": "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
  "hfovMax": 120,
  "id": "panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB",
  "vfov": 180,
  "audios": [
   {
    "id": "audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B",
    "audio": "this.audioresource_F981625E_EDF4_CC1E_41DC_4D65AA4F7A2E",
    "autoplay": true,
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_BD9E88B4_B382_0B3A_41E0_F03F230CC701",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 23.05,
        "yaw": 19.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 200,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -24.38
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 23.05,
        "yaw": 19.51,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 153,
           "width": 452,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -24.38
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BD8F6AE6_B38E_0F26_41D8_5BFF9980F220",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.33,
        "yaw": -135.62,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 102,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -25.29
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.33,
        "yaw": -135.62,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 205,
           "width": 204,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -25.29
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_BDA44DE5_B386_055A_41D4_92F2F07FBC21",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 25.94,
        "yaw": -20.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 188,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -13.33
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 25.94,
        "yaw": -20.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 507,
           "width": 476,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -13.33
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "Bangsal Utara",
  "hfovMin": 60
 },
 {
  "id": "panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E",
 {
  "id": "panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "media": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E"
   }
  ]
 },
 "this.Menu_F4FD3A03_FE85_BCD6_41E8_797E932220C2",
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF5E8E9CC_FE85_BF52_41CE_FBD2C5C262A9",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Masjid Gedhe Mataram Kotagede ini menyuguhkan arsitektur yang menyimbolkan makna kerukunan dimana gapura yang ada di masjid secara tidak langsung melambangkan kerukunan dari umat Islam dan Hindu-Buddha pada masa Kerajaan Mataram Islam. Gapura yang berada di depan masjid memiliki bentuk yang berbeda dengan masjid-masjid pada umumnya. Gapura pada Masjid Gedhe Mataram berbentuk seperti bangunan yang biasanya di tempat ibadah umat Hindu-Buddha. Pada Gapura Paduraksa, terdapat hiasan kala yang umum dijumpai pada bangunan Hindu-Buddha. Keberadaan Gapura Paduraksa ini mencerminkan sikap toleransi terhadap agama Hindu-Buddha, serta menunjukkan respons arsitektur masjid pada masa itu terhadap gaya arsitektur lokal yang masih dipengaruhi oleh unsur-unsur Hindu-Buddha. Di sisi kanan dan kiri Gapura, terdapat pagar setinggi 2,5 meter yang mengelilingi kompleks masjid dan area pemakaman.</SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF5E8E9CC_FE85_BF52_41CE_FBD2C5C262A9_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C.jpg",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "GAPURA PADURAKSA",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_A55A5AB4_A977_9072_41AA_7A02697B4876",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF5E669E0_FE85_BF52_41ED_2D655B98BDDB",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Masjid gedhe Mataram memiliki dua buah prasasti di bagian depan yang di dalamnya menjelaskan mengenai proses pembangunan Masjid Gedhe Mataram. Prasasti tersebut menyebutkan bahwa proses pembangunan Masjid dilakukan melalui dua tahapan. Tahap pertama dibangun pada masa Sultan Agung dan hanya berupa bangunan inti masjid dengan ukuran yang relatif kecil atau biasa disebut dengan Langgar. Tahap kedua dibangun oleh Raja Kasunanan Surakarta, Paku Buwono X. Hal tersebut ditunjukkan melalui struktur bahan bangunan yang digunakan dalam pembuatan tembok di sekeliling masjid. Pada bagian kiri masjid, terdiri dari batu bata dengan ukuran yang lebih besar dan berwarna merah tua, serta terdapat batu seperti marmer dengan tulisan aksara jawa. Tembok tersebut dibangun pada masa Sultan Agung menggunakan perekat berbahan dasar air aren yang menjadikannya lebih kuat karena proses pembatuan dari perekat tersebut. Kemudian untuk sebagian tembok lainnya merupakan hasil renovasi pembangunan pada masa Paku Buwono X. </SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Sumber Gambar: javatourasian.com</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF5E669E0_FE85_BF52_41ED_2D655B98BDDB_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792.jpg",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "TEMBOK PAGAR",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_A427AE2F_A991_906E_41CD_430E5C7A5D4C",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF707A9E4_FE85_BF52_4184_A31831918F77",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Tembok Kelir pada halaman depan Masjid Gedhe Mataram Kotagede ini berfungsi untuk menutupi atau menghalangi pandangan bagian luar ke bagian dalam masjid. Pada tembok Kelir tersebut, terdapat sebuah ornamen berbentuk Kala. Umumnya, ornamen Kala berada pada bangunanbangunan di zaman Hindu-Buddha. Ornamen muka Kala itu sering disebut sebagai makara (muka angkara) yang memiliki makna bahwa Kala atau Buto raksasa ini menunjukkan waktu yang terus memakan kita dan biasanya ornamen Kala ditempatkan pada bagian atas gapura. Ornamen tersebut, pada dasarnya ditujukan menjadi sebuah simbol yang baik yaitu untuk menunjukkan kebijaksanaan dan nilai-nilai luhur para pembangun Masjid Gedhe Mataram Kotagede serta generasi setelahnya.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Anggrahito Ananggadipo E </SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF707A9E4_FE85_BF52_4184_A31831918F77_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C.jpg",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "ORNAMEN KALA",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_A46A114E_A996_902E_41D8_222F177FF178",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF70709E6_FE85_BF5E_41E2_3EFD0A593547",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Selain ornamen yang menghiasi dinding masjid, terdapat juga hiasan kemuncak yang mengelilingi halaman Masjid Gedhe Mataram. Terdapat 63 kemuncak yang melambangkan usia Nabi Muhammad SAW. Bentuk kemuncak ini mengerucut ke atas, dengan ukuran yang bervariasi: bagian bawahnya besar, bagian tengah sedang, dan bagian atas kecil. Setiap kemuncak memiliki makna yang mendalam, yaitu syariat, hakikat, dan makrifat. Kemuncak bagian bawah melambangkan syariat, yang berarti hukum atau peraturan, menunjukkan bahwa meskipun seseorang mengetahui adanya peraturan yang ditetapkan, sering kali peraturan tersebut dilanggar. Kemuncak bagian tengah melambangkan hakikat, yang berarti kebenaran atau kenyataan, mencerminkan kemampuan seseorang untuk merasakan dan menyaksikan kehadiran Allah SWT, sehingga hakikat menjadi aspek penting dalam setiap amal dan rahasia. Sementara itu, kemuncak paling atas yang berbentuk kecil melambangkan makrifat, yang merupakan hasil dari hakikat dan mencakup hal-hal yang dapat dirasakan secara istiqamah. Makrifat sendiri merupakan tahapan rohaniah tertinggi yang memungkinkan seseorang untuk benar-benar mengenal Allah SWT dan rahasia-rahasia-Nya.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF70709E6_FE85_BF5E_41E2_3EFD0A593547_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C.png",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "KEMUNCAK",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_E1CE937A_ED1F_4995_41ED_4A11955A0BB2",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF70639E8_FE85_BF52_41CC_89F7EECACBD0",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada halaman depan masjid terdapat sebuah tugu dengan ukuran 1,5 m x 1,5 m dengan tinggi 4 m. Tugu tersebut memiliki ukuran kayu berbentuk makula pada bagian atasnya. Bangunan tugu tersebut merupakan tetenger Sunan Paku Buwana sepuluh. Selain itu, tugu tersebut juga difungsikan sebagai jam penunjuk waktu shalat. Pada puncak tugu dihiasi dengan hiasan kupluk/ peci raja sebagai penunjuk bahwa masjid tersebut merupakan bangunan milik kerajaan. </SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF70639E8_FE85_BF52_41CC_89F7EECACBD0_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850.png",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "TUGU JAM",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_FC77D8D0_F14D_A91E_41C4_8560C5048F7A",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF705A9E9_FE85_BF52_41DC_86E8CBF616ED",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Di sekeliling Masjid Gedhe Mataram Kotagede terdapat sebuah kolam kecil untuk cuci kaki sebagai simbol jamaah yang masuk ke dalam masjid harus dalam keadaan suci, baik jiwa maupun raganya. Selain itu, Jagang di sekeliling masjid digunakan untuk benteng keamanan setelah pagar pembatas serta digunakan sebagai sarana membersihkan kaki sebelum masuk ke dalam masjid.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF705A9E9_FE85_BF52_41DC_86E8CBF616ED_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36.png",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "JAGANG",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_F9B8726D_EDF4_4C22_41E6_223CB50FB07B",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF70549EC_FE85_BF52_41D2_956D9CC72327",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Bedug yang terletak di pojok selatan serambi tersebut dibuat atas usulan Sunan Kalijaga. Pada saat Sunan Kalijaga sedang melakukan perjalan ke Kulon Progo, tepatnya ke Desa Dondong, ia (Sunan Kalijaga) menemukan sebuah pohon dengan diameter batang yang cukup besar. Pohon tersebut pada zaman dahulu dinamakan sebagai pohon bayam. Pada saat Sunan Kalijaga menemukan pohon tersebut, ia berfikir untuk membawa batang pohon tersebut yang nantinya akan digunakan untuk membuat bedug. Meskipun pohon tersebut berada di tengah hutan, Sunan Kalijaga tetap mencari pemilik pohon tersebut. Pada akhirnya, muncul seorang bernama Nyai Pringgit atau biasa disebut dengan Nyai Brintik yang mengaku bahwa ia adalah pemilik pohon tersebut. Setelah melakukan diskusi, Sunan Kalijaga memerintah Kyai Pringgit membawa batang pohon tersebut menuju ke Keraton Mataram yang pada saat itu sedang melakukan pembangunan Masjid Gedhe Mataram di Kotagede. Sesampainya di Mataram, Nyai Pringgit diangkat menjadi abdi dalem dan dipersilahkan untuk tinggal di kawasan sekitar Masjid Gedhe Mataram yang saat ini bernama Kampung Dondongan. Kampung tersebut merupakan tempat tinggal para abdi dalem keturuan Nyai Pringgit. </SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF70549EC_FE85_BF52_41D2_956D9CC72327_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464.jpg",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "BEDUG ",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_BCB498DC_B3FE_0B6A_41E5_D1345FAAA59A",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF70459ED_FE85_BF2D_41EE_504F88EB8E25",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Relasi antara Saka Guru dengan arsitektur masjid merupakan perwujudan yang berhubungan dengan kepercayaan serta makna metafisik. Berikut visualisasi perwujudan dualisme Saka Guru dan arah vertikal antara manusia dengan kekuatan markokosmos. Ruang di dalam Saka Guru membentuk sebuah koneksi antara kehidupan sosial dengan keagamaan. Keagamaan dalam konteks tersebut yakni sesuai dengan pengalaman spiritual masing-masing individu. Manifestasi tersebut dapat disimpulkan secara signifikan bahwa makna Saka Guru dalam bangunan Masjid Gedhe Mataram Kotagede, yaitu: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">1. Secara praktis, Saka Guru sebagai penopang atap. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">2. Secara metafisik, Saka Guru memiliki sifat dualitas atau mendua. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Saka guru juga dapat diartikan sebagai sebuah lambang dari 4 (empat) unsur kehidupan yaitu tanah, air, api, dan udara.. Selain Saka Guru, terdapat sebuah mimbar yang sangat ikonik di dalam ruang utama Masjid tersebut. Mimbar tersebut, merupakan hadiah dari Sultan Palembang kepada Sultan Agung. Sebelumnya, mimbar tersebut merupakan tandu yang digunakan sebagai tempat duduk istri ketika ikut berburu dengan raja. Hingga pada akhirnya setelah diberikan kepada Sultan Agung, tempat duduk tersebut dijadikan sebuah mimbar dan diletakkan di Masjid Gedhe Mataram. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">(Sumber Gambar: Frick 1977 dimodifikasi oleh Ajeng Kusuma, 2020)</SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF70459ED_FE85_BF2D_41EE_504F88EB8E25_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17.png",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_BD20E8AC_AD00_92A8_41CD_6F0F08B15ED2",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF703D9F0_FE85_BF32_41D7_56A724956F4C",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada bagian Mihrab terdapat ornamen dengan motif sulur daun dan tiang semu dengan dilengkapi bingkai di bagian atasnya. Ornamen tersebut, pada dasarnya disesuaikan dengan anjuran di dalam agama Islam yang melarang adanya ornamen berbentuk menyerupai manusia maupun hewan. Sebagian besar ornamen yang terdapat di dalam ruang utama Liwan memiliki motif berupa sulur dan juga lung-lungan yang secara simbolik menunjukkan makna sebagai tumbuhan surga di dalam kepercayaan Hindu-Buddha. Motif lung-lungan dalam Islam juga dapat dimaknai sebagai pengingat umat muslim dalam bersosial dan tolong-menolong. </SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF703D9F0_FE85_BF32_41D7_56A724956F4C_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53.png",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "MIHRAB",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_A6B2892C_A9F1_F012_41D4_2F053443E4FF",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF70369F2_FE85_BF36_41D0_B50F84DB5D7B",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Mimbar dalam masjid Islam adalah tempat yang digunakan oleh khatib untuk menyampaikan khutbah, terutama pada hari Jumat. Biasanya terletak di dekat mihrab, mimbar memiliki berbagai bentuk dan desain yang mencerminkan budaya setempat, serta berfungsi sebagai simbol kepemimpinan dan penyampaian pesan dakwah kepada jamaah. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada ruangan Liwan atau ruangan utama masjid, terdapat dua buah mimbar dengan ukuran dan bentuk yang berbeda. Mimbar pertama/ mimbar besar yang terbuat dari kayu dan terkesan unik karena berbeda dengan mimbar masjid pada umumnya. Mimbar tersebut merupakan hadiah dari Sultan Palembang kepada Mataram pada masa itu. Dahulunya, mimbar tersebut merupakan tandu yang digunakan sebagai tempat duduk istri raja ketika ikut berburu. Kemudian pada mimbar kedua, memiliki ukuran yang lebih kecil. Selain itu, mimbar kecil ini biasanya digunakan untuk kebutuhan kultum harian di Masjid gedhe Mataram. Penempatan mimbar di sebelah kanan mihrab memiliki makna mengenai keutamaan kanan daripada yang kiri karena kanan merupakan hal yang utama dibandingakan yang kiri.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "55%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF70369F2_FE85_BF36_41D0_B50F84DB5D7B_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C.png",
    "borderRadius": 0,
    "height": "44%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "MIMBAR",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_B9AE8EF5_A992_F1F2_41DC_A16A03B048A9",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Lucida Console",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "headerBackgroundOpacity": 1,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF70279F4_FE85_BF32_41DC_869F0AEF390B",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada bangunan masjid kuno di Indonesia, terutama di Jawa, terdapat sebuah ruangan khusus yang terletak di samping kiri atau sebelah selatan ruang utama masjid dengan tetap berada pada bangunan utama. Ruangan atau bangunan tersebut biasa disebut dengan Pawestran. Pawestran merupakan tempat shalat yang dikhususkan untuk perempuan dan berada di dalam ruangan utama masjid. Pawestran berasal dari kata estru (istri) yang artinya perempuan dan kemudian diberikan imbuhan \u2018pa-an\u2019 menjadi paistriaan sehingga menunjukkan tempat. Saat ini ruangan pawestran di Masjid Gedhe Mataram juga digunakan sebagai tempat mengaji bagi anak-anak maupun jamaah lainnya yang ada di lingkungan masjid tersebut.</SPAN></SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "height": "50%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF70279F4_FE85_BF32_41DC_869F0AEF390B_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B.jpg",
    "borderRadius": 0,
    "height": "50%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "PAWESTRAN",
  "shadowHorizontalLength": 3,
  "titleFontWeight": "bold",
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "bodyBorderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_BAC6D9AB_A992_B015_41BA_AC64D10DFE98",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "titleFontColor": "#000000",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "id": "camera_F4F5FA1C_FE85_BCF2_41B5_70400BAE1F35",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.29,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F4EFAA23_FE85_BCD6_41A7_6ED2284051A6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.62,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F4E67A2A_FE85_BCD6_41DD_333E01E4FA2A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.71,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F4DE4A30_FE85_BD33_41E6_735751FF8250",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.52,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F4D39A37_FE85_BD3E_41A5_017F04957ADF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.9,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F4CB4A3E_FE85_BD2E_41E1_ED5E89672025",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.62,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F4C08A45_FE85_BD52_41C9_B131F72D0A60",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F4B79A4C_FE85_BD52_41D4_D903012E8293",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -121.9,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47",
 "this.audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A",
 {
  "thumbnailUrl": "media/photo_A4FF733C_A973_9072_41C6_43A355F99D88_t.jpg",
  "id": "photo_A4FF733C_A973_9072_41C6_43A355F99D88",
  "label": "Gapura Paduraksa",
  "width": 11968,
  "class": "Photo",
  "height": 5984,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_A4FF733C_A973_9072_41C6_43A355F99D88.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C_t.jpg",
  "id": "photo_A5D33363_A97E_F016_41E3_E11843ACB34C",
  "label": "PADURAKSA(1)",
  "width": 2560,
  "class": "Photo",
  "height": 1920,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C.jpg"
    }
   ]
  }
 },
 "this.audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4",
 {
  "thumbnailUrl": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792_t.jpg",
  "id": "photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792",
  "label": "masjid-kotagede-edit-1",
  "width": 600,
  "class": "Photo",
  "height": 438,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C_t.jpg",
  "id": "photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C",
  "label": "Javanese_Decoration",
  "width": 4000,
  "class": "Photo",
  "height": 4000,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C_t.png",
  "id": "photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C",
  "label": "Mimbar",
  "width": 383,
  "class": "Photo",
  "height": 683,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C.png"
    }
   ]
  }
 },
 {
  "id": "audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59",
  "audio": {
   "mp3Url": "media/audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59.ogg"
  },
  "autoplay": true,
  "class": "MediaAudio"
 },
 {
  "id": "audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13",
  "audio": {
   "mp3Url": "media/audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13.ogg"
  },
  "autoplay": true,
  "class": "MediaAudio"
 },
 {
  "thumbnailUrl": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53_t.png",
  "id": "photo_B9341347_A9F2_901E_41D8_9D58AF49BA53",
  "label": "Mihrab",
  "width": 554,
  "class": "Photo",
  "height": 368,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53.png"
    }
   ]
  }
 },
 "this.audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3",
 {
  "id": "audio_B98A9738_A9FE_9072_41D8_9489BF11BA30",
  "audio": {
   "mp3Url": "media/audio_B98A9738_A9FE_9072_41D8_9489BF11BA30.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_B98A9738_A9FE_9072_41D8_9489BF11BA30.ogg"
  },
  "autoplay": true,
  "class": "PanoramaAudio"
 },
 "this.audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268",
 {
  "thumbnailUrl": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B_t.jpg",
  "id": "photo_BB76BDE8_A993_F012_41CF_C2991C92D05B",
  "label": "IMG_20250304_094213_00_010_PureShot",
  "width": 4000,
  "class": "Photo",
  "height": 2250,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B.jpg"
    }
   ]
  }
 },
 "this.audio_B85C4BEA_A993_9016_41DE_311CC1771B4C",
 "this.audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0",
 "this.audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11",
 {
  "thumbnailUrl": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17_t.png",
  "id": "photo_A2F8F352_AD03_97F8_41E0_E159A156AF17",
  "label": "Saka guru",
  "width": 458,
  "class": "Photo",
  "height": 470,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17.png"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464_t.jpg",
  "id": "photo_BCBBFC5F_B382_0B66_41D4_FB7577536464",
  "label": "IMG_20250304_094745_00_012_PureShot",
  "width": 4000,
  "class": "Photo",
  "height": 4000,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464.jpg"
    }
   ]
  }
 },
 "this.audio_A3A18480_B382_3BDA_41C2_B065B593F8FB",
 "this.audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C",
 "this.audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B",
 "this.audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01",
 {
  "thumbnailUrl": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C_t.png",
  "id": "photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C",
  "label": "KEMUNCAK",
  "width": 400,
  "class": "Photo",
  "height": 600,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C.png"
    }
   ]
  }
 },
 "this.audio_F981125E_EDF4_CC1E_41DF_7D51EA31A6B3",
 {
  "thumbnailUrl": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36_t.png",
  "id": "photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36",
  "label": "jAGANG",
  "width": 606,
  "class": "Photo",
  "height": 406,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36.png"
    }
   ]
  }
 },
 "this.audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74",
 {
  "thumbnailUrl": "media/photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850_t.png",
  "id": "photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850",
  "label": "tugu jam",
  "width": 3330,
  "class": "Photo",
  "height": 4163,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850.png"
    }
   ]
  }
 }
], "children": [
 {
  "playbackBarProgressBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarRight": 0,
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderColor": "#767676",
  "minHeight": 50,
  "progressBarBorderRadius": 0,
  "progressBarOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderSize": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "width": "100%",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingLeft": 6,
  "progressBottom": 0,
  "minWidth": 100,
  "toolTipShadowOpacity": 1,
  "toolTipBorderRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "height": "100%",
  "progressHeight": 10,
  "toolTipFontColor": "#606060",
  "progressBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "progressLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarProgressOpacity": 1,
  "progressBorderSize": 0,
  "top": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBorderSize": 1,
  "playbackBarBottom": 5,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBorderColor": "#000000",
  "shadow": false,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "left": 0,
  "progressOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3
 },
 {
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.5,
  "scrollBarMargin": 2,
  "id": "HTMLText_A1CAD743_AD01_9FD8_41C9_46423D8EAD3A",
  "backgroundColor": [
   "#FFFFFF"
  ],
  "shadow": true,
  "borderRadius": 10,
  "backgroundColorRatios": [
   0.11
  ],
  "scrollBarWidth": 10,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "shadowVerticalLength": 2,
  "paddingLeft": 20,
  "shadowBlurRadius": 7,
  "shadowHorizontalLength": 2,
  "paddingTop": 20,
  "borderSize": 0,
  "minWidth": 1,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>VIRTUAL TOUR</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>MASJID GEDHE MATARAM KOTAGEDE </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Kerajaan Mataram Islam merupakan salah satu Kerajaan bercorak islam yang berdiri di pulau Jawa. Kerajaan Mataram Islam menjadi salah satu kerajaan besar dengan cakupan wilayah yang hampir mencakup seluruh wilayah di Pulau Jawa. Mataram Islam berdiri pada abad ke-17 M yang dipimpin pertama kali oleh keturunan dari Ki Ageng Pemanahan yaitu Panembahan Senapati. Meskipun masa dari Kerajaan Mataram Islam memang sudah selesai sejak lama namun tidak serta merta hilang dari peradaban begitu saja. Banyaknya peninggalan yang berhubungan dengan Kerajaan Mataram Islam masih ada hingga masa kini terutama di wilayah Yogyakarta seperti di Kotagede. </SPAN></SPAN></DIV></div>",
  "shadowOpacity": 0.19,
  "backgroundColorDirection": "horizontal",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "scrollBarVisible": "rollOver",
  "height": "16.667%",
  "width": "29.701%",
  "paddingBottom": 10,
  "left": "3.76%",
  "paddingRight": 20,
  "top": "5.28%"
 },
 {
  "bottom": "0.6%",
  "id": "IconButton_A132C64E_AD03_91E9_41BA_42A64BDC5246",
  "maxWidth": 500,
  "mode": "push",
  "maxHeight": 500,
  "shadow": false,
  "borderRadius": 0,
  "iconURL": "skin/IconButton_A132C64E_AD03_91E9_41BA_42A64BDC5246.png",
  "class": "IconButton",
  "minHeight": 1,
  "paddingLeft": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 1,
  "width": 101,
  "cursor": "hand",
  "height": 77.5,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingRight": 0,
  "right": "9.15%",
  "backgroundOpacity": 0
 },
 {
  "bottom": "2.38%",
  "id": "IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66",
  "pressedIconURL": "skin/IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66_pressed.png",
  "mode": "toggle",
  "shadow": false,
  "borderRadius": 0,
  "iconURL": "skin/IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66.png",
  "class": "IconButton",
  "minHeight": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "width": 51.5,
  "cursor": "hand",
  "height": 46.55,
  "minWidth": 0,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingRight": 0,
  "right": "4.27%",
  "backgroundOpacity": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "gap": 10,
 "scrollBarColor": "#000000",
 "shadow": false,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.68,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "paddingLeft": 0,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); }
 },
 "overflow": "visible",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 20,
 "width": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0
})