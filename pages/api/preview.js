export default function handler(req, res) {
    res.json(
        {
            "regularPrice": 5300,
            "finalPrice": 2600,
            "bundle": {
                "name": "BUSHIDO BUNDLE",
                "info": "6 Item Bundle",
                "image": "https://fortnite-api.com/images/cosmetics/br/materialinstances/mi_bundle_featured_bluesamurai/offerimage.png"
            },
            "banner": {
                "value": "2700 V-Bucks Off",
                "intensity": "Low",
                "backendValue": "AmountOff"
            },
            "giftable": true,
            "refundable": true,
            "sortPriority": -3,
            "categories": [
                "Panel 03"
            ],
            "sectionId": "Featured3",
            "section": {
                "id": "Featured3",
                "name": "Featured",
                "index": 100,
                "landingPriority": 64,
                "sortOffersByOwnership": false,
                "showIneligibleOffers": true,
                "showIneligibleOffersIfGiftable": false,
                "showTimer": true,
                "enableToastNotification": true,
                "hidden": false
            },
            "devName": "[VIRTUAL]1 x Musha, 1 x Sashimono, 1 x Hime, 1 x Shiro, 1 x Cat's Claw, 1 x Purrfect for -1 MtxCurrency",
            "offerId": "v2:/e015e4c9295c4be75e71d972880cd97da811ef7eae6aeaf0923ad48cd52c5fa7",
            "displayAssetPath": "FortniteGame/Content/Catalog/DisplayAssets/DA_Featured_BlueSamurai_Bundle",
            "tileSize": "DoubleWide",
            "newDisplayAssetPath": "FortniteGame/Content/Catalog/NewDisplayAssets/S22/DAv2_Bundle_Featured_BlueSamurai",
            "newDisplayAsset": {
                "id": "DAv2_Bundle_Featured_BlueSamurai",
                "cosmeticId": null,
                "materialInstances": [
                    {
                        "id": "MI_Bundle_Featured_BlueSamurai",
                        "images": {
                            "OfferImage": "https://fortnite-api.com/images/cosmetics/br/materialinstances/mi_bundle_featured_bluesamurai/offerimage.png",
                            "Background": "https://fortnite-api.com/images/cosmetics/br/materialinstances/mi_bundle_featured_bluesamurai/background_v1-2.webp"
                        },
                        "colors": {
                            "Background_Color_A": "060631ff",
                            "Background_Color_B": "9e6500ff",
                            "FallOff_Color": "e94600ff"
                        },
                        "scalings": {
                            "FallOffColor_Fill_Percent": 25,
                            "FallOffColor_Postion": 40,
                            "OffsetImage_X": 0.5,
                            "OffsetImage_Y": -6,
                            "ZoomImage_Percent": 35.2,
                            "RefractionDepthBias": 0,
                            "Gradient_Hardness": 7.712856,
                            "Gradient_Position_X": 68.4268,
                            "Gradient_Position_Y": 130.73157,
                            "Gradient_Size": 140.4892,
                            "Spotlight_Hardness": 8.143147,
                            "Spotlight_Intensity": 218.3558,
                            "Spotlight_Position_X": 43.76523,
                            "Spotlight_Position_Y": 72.335175,
                            "Spotlight_Size": 263.14496
                        },
                        "flags": null
                    }
                ]
            },
            "items": [
                {
                    "id": "CID_198_Athena_Commando_M_BlueSamurai",
                    "name": "Musha",
                    "description": "A fearless and noble warrior.",
                    "type": {
                        "value": "outfit",
                        "displayValue": "Outfit",
                        "backendValue": "AthenaCharacter"
                    },
                    "rarity": {
                        "value": "legendary",
                        "displayValue": "Legendary",
                        "backendValue": "EFortRarity::Legendary"
                    },
                    "series": null,
                    "set": {
                        "value": "Bushido",
                        "text": "Part of the Bushido set.",
                        "backendValue": "BlueSamurai"
                    },
                    "introduction": {
                        "chapter": "1",
                        "season": "5",
                        "text": "Introduced in Chapter 1, Season 5.",
                        "backendValue": 5
                    },
                    "images": {
                        "smallIcon": "https://fortnite-api.com/images/cosmetics/br/cid_198_athena_commando_m_bluesamurai/smallicon.png",
                        "icon": "https://fortnite-api.com/images/cosmetics/br/cid_198_athena_commando_m_bluesamurai/icon.png",
                        "featured": "https://fortnite-api.com/images/cosmetics/br/cid_198_athena_commando_m_bluesamurai/featured.png",
                        "other": null
                    },
                    "variants": [
                        {
                            "channel": "Material",
                            "type": "STYLE",
                            "options": [
                                {
                                    "tag": "Mat0",
                                    "name": "Default",
                                    "image": "https://fortnite-api.com/images/cosmetics/br/cid_198_athena_commando_m_bluesamurai/variants/material/mat0.png"
                                },
                                {
                                    "tag": "Mat1",
                                    "name": "Without Mask",
                                    "image": "https://fortnite-api.com/images/cosmetics/br/cid_198_athena_commando_m_bluesamurai/variants/material/mat1.png"
                                },
                                {
                                    "tag": "Mat2",
                                    "name": "No Mask or Helmet",
                                    "image": "https://fortnite-api.com/images/cosmetics/br/cid_198_athena_commando_m_bluesamurai/variants/material/mat2.png"
                                }
                            ]
                        }
                    ],
                    "searchTags": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.BlueSamurai",
                        "Cosmetics.UserFacingFlags.HasVariants",
                        "Cosmetics.Filter.Season.5",
                        "SoundLibrary.ID.StepType.Sandal",
                        "SoundLibrary.ID.ClothingType.ArmorMetal",
                        "SoundLibrary.ID.HandType.Glove"
                    ],
                    "metaTags": null,
                    "showcaseVideo": "bQ0-CJU0OYM",
                    "dynamicPakId": null,
                    "displayAssetPath": "FortniteGame/Content/Catalog/DisplayAssets/DA_Featured_CID_198_Athena_Commando_M_BlueSamurai",
                    "definitionPath": "FortniteGame/Content/Athena/Heroes/HID_198_Athena_Commando_M_BlueSamurai",
                    "path": "FortniteGame/Content/Athena/Items/Cosmetics/Characters/CID_198_Athena_Commando_M_BlueSamurai",
                    "added": "2019-11-20T12:50:19Z",
                    "shopHistory": [
                        "2018-08-24T00:00:00Z",
                        "2018-08-25T00:00:00Z",
                        "2018-09-26T00:00:00Z",
                        "2018-11-06T00:00:00Z",
                        "2019-01-10T00:00:00Z",
                        "2019-02-19T00:00:00Z",
                        "2019-04-08T00:00:00Z",
                        "2019-05-09T00:00:00Z",
                        "2019-06-16T00:00:00Z",
                        "2019-08-31T00:00:00Z",
                        "2019-10-05T00:00:00Z",
                        "2020-06-07T00:00:00Z",
                        "2020-10-13T00:00:00Z",
                        "2021-04-29T00:00:00Z",
                        "2021-04-30T00:00:00Z",
                        "2021-05-01T00:00:00Z",
                        "2021-05-02T00:00:00Z",
                        "2021-05-03T00:00:00Z",
                        "2021-05-04T00:00:00Z",
                        "2021-05-05T00:00:00Z",
                        "2022-10-11T00:00:00Z",
                        "2022-11-13T00:00:00Z",
                        "2022-12-17T00:00:00Z"
                    ]
                },
                {
                    "id": "BID_098_BlueSamuraiMale",
                    "name": "Sashimono",
                    "description": "Storied sigil.",
                    "type": {
                        "value": "backpack",
                        "displayValue": "Back Bling",
                        "backendValue": "AthenaBackpack"
                    },
                    "rarity": {
                        "value": "legendary",
                        "displayValue": "Legendary",
                        "backendValue": "EFortRarity::Legendary"
                    },
                    "series": null,
                    "set": {
                        "value": "Bushido",
                        "text": "Part of the Bushido set.",
                        "backendValue": "BlueSamurai"
                    },
                    "introduction": {
                        "chapter": "1",
                        "season": "5",
                        "text": "Introduced in Chapter 1, Season 5.",
                        "backendValue": 5
                    },
                    "images": {
                        "smallIcon": "https://fortnite-api.com/images/cosmetics/br/bid_098_bluesamuraimale/smallicon.png",
                        "icon": "https://fortnite-api.com/images/cosmetics/br/bid_098_bluesamuraimale/icon.png",
                        "featured": null,
                        "other": null
                    },
                    "variants": null,
                    "searchTags": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.BlueSamurai",
                        "Cosmetics.Filter.Season.5"
                    ],
                    "metaTags": null,
                    "showcaseVideo": null,
                    "dynamicPakId": null,
                    "itemPreviewHeroPath": "FortniteGame/Content/Athena/Items/Cosmetics/Characters/CID_198_Athena_Commando_M_BlueSamurai",
                    "displayAssetPath": null,
                    "definitionPath": null,
                    "path": "FortniteGame/Content/Athena/Items/Cosmetics/Backpacks/BID_098_BlueSamuraiMale",
                    "added": "2019-11-20T12:50:39Z",
                    "shopHistory": [
                        "2020-06-07T00:00:00Z",
                        "2020-10-13T00:00:00Z",
                        "2021-04-29T00:00:00Z",
                        "2021-04-30T00:00:00Z",
                        "2021-05-01T00:00:00Z",
                        "2021-05-02T00:00:00Z",
                        "2021-05-03T00:00:00Z",
                        "2021-05-04T00:00:00Z",
                        "2021-05-05T00:00:00Z",
                        "2022-10-11T00:00:00Z",
                        "2022-11-13T00:00:00Z",
                        "2022-12-17T00:00:00Z"
                    ]
                },
                {
                    "id": "CID_199_Athena_Commando_F_BlueSamurai",
                    "name": "Hime",
                    "description": "Catlike grace under pressure.",
                    "type": {
                        "value": "outfit",
                        "displayValue": "Outfit",
                        "backendValue": "AthenaCharacter"
                    },
                    "rarity": {
                        "value": "legendary",
                        "displayValue": "Legendary",
                        "backendValue": "EFortRarity::Legendary"
                    },
                    "series": null,
                    "set": {
                        "value": "Bushido",
                        "text": "Part of the Bushido set.",
                        "backendValue": "BlueSamurai"
                    },
                    "introduction": {
                        "chapter": "1",
                        "season": "5",
                        "text": "Introduced in Chapter 1, Season 5.",
                        "backendValue": 5
                    },
                    "images": {
                        "smallIcon": "https://fortnite-api.com/images/cosmetics/br/cid_199_athena_commando_f_bluesamurai/smallicon.png",
                        "icon": "https://fortnite-api.com/images/cosmetics/br/cid_199_athena_commando_f_bluesamurai/icon.png",
                        "featured": "https://fortnite-api.com/images/cosmetics/br/cid_199_athena_commando_f_bluesamurai/featured.png",
                        "other": null
                    },
                    "variants": [
                        {
                            "channel": "Material",
                            "type": "STYLE",
                            "options": [
                                {
                                    "tag": "Mat0",
                                    "name": "DEFAULT",
                                    "image": "https://fortnite-api.com/images/cosmetics/br/cid_199_athena_commando_f_bluesamurai/variants/material/mat0.png"
                                },
                                {
                                    "tag": "Mat1",
                                    "name": "WITHOUT MASK",
                                    "image": "https://fortnite-api.com/images/cosmetics/br/cid_199_athena_commando_f_bluesamurai/variants/material/mat1.png"
                                },
                                {
                                    "tag": "Mat2",
                                    "name": "NO MASK OR HELMET",
                                    "image": "https://fortnite-api.com/images/cosmetics/br/cid_199_athena_commando_f_bluesamurai/variants/material/mat2.png"
                                }
                            ]
                        }
                    ],
                    "searchTags": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.BlueSamurai",
                        "Cosmetics.UserFacingFlags.HasVariants",
                        "Cosmetics.Filter.Season.5",
                        "SoundLibrary.ID.StepType.Sandal",
                        "SoundLibrary.ID.ClothingType.ArmorMetal",
                        "SoundLibrary.ID.HandType.Glove"
                    ],
                    "metaTags": null,
                    "showcaseVideo": "NY6d-xDobIw",
                    "dynamicPakId": null,
                    "displayAssetPath": "FortniteGame/Content/Catalog/DisplayAssets/DA_Featured_CID_199_Athena_Commando_F_BlueSamurai",
                    "definitionPath": "FortniteGame/Content/Athena/Heroes/HID_199_Athena_Commando_F_BlueSamurai",
                    "path": "FortniteGame/Content/Athena/Items/Cosmetics/Characters/CID_199_Athena_Commando_F_BlueSamurai",
                    "added": "2019-11-20T12:50:19Z",
                    "shopHistory": [
                        "2018-08-24T00:00:00Z",
                        "2018-08-25T00:00:00Z",
                        "2018-09-26T00:00:00Z",
                        "2018-11-06T00:00:00Z",
                        "2019-01-10T00:00:00Z",
                        "2019-02-19T00:00:00Z",
                        "2019-04-08T00:00:00Z",
                        "2019-05-09T00:00:00Z",
                        "2019-06-16T00:00:00Z",
                        "2019-08-31T00:00:00Z",
                        "2019-10-05T00:00:00Z",
                        "2020-05-31T00:00:00Z",
                        "2020-07-06T00:00:00Z",
                        "2020-08-11T00:00:00Z",
                        "2020-09-16T00:00:00Z",
                        "2020-10-18T00:00:00Z",
                        "2021-01-25T00:00:00Z",
                        "2021-04-29T00:00:00Z",
                        "2021-04-30T00:00:00Z",
                        "2021-05-01T00:00:00Z",
                        "2021-05-02T00:00:00Z",
                        "2021-05-03T00:00:00Z",
                        "2021-05-04T00:00:00Z",
                        "2021-05-05T00:00:00Z",
                        "2021-11-14T00:00:00Z",
                        "2022-01-05T00:00:00Z",
                        "2022-01-21T00:00:00Z",
                        "2022-02-25T00:00:00Z",
                        "2022-10-11T00:00:00Z",
                        "2022-11-13T00:00:00Z",
                        "2022-12-17T00:00:00Z"
                    ]
                },
                {
                    "id": "BID_099_BlueSamuraiFemale",
                    "name": "Shiro",
                    "description": "Nyan!",
                    "type": {
                        "value": "backpack",
                        "displayValue": "Back Bling",
                        "backendValue": "AthenaBackpack"
                    },
                    "rarity": {
                        "value": "legendary",
                        "displayValue": "Legendary",
                        "backendValue": "EFortRarity::Legendary"
                    },
                    "series": null,
                    "set": {
                        "value": "Bushido",
                        "text": "Part of the Bushido set.",
                        "backendValue": "BlueSamurai"
                    },
                    "introduction": {
                        "chapter": "1",
                        "season": "5",
                        "text": "Introduced in Chapter 1, Season 5.",
                        "backendValue": 5
                    },
                    "images": {
                        "smallIcon": "https://fortnite-api.com/images/cosmetics/br/bid_099_bluesamuraifemale/smallicon.png",
                        "icon": "https://fortnite-api.com/images/cosmetics/br/bid_099_bluesamuraifemale/icon.png",
                        "featured": null,
                        "other": null
                    },
                    "variants": null,
                    "searchTags": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.BlueSamurai",
                        "Cosmetics.Filter.Season.5"
                    ],
                    "metaTags": null,
                    "showcaseVideo": null,
                    "dynamicPakId": null,
                    "itemPreviewHeroPath": "FortniteGame/Content/Athena/Items/Cosmetics/Characters/CID_199_Athena_Commando_F_BlueSamurai",
                    "displayAssetPath": null,
                    "definitionPath": null,
                    "path": "FortniteGame/Content/Athena/Items/Cosmetics/Backpacks/BID_099_BlueSamuraiFemale",
                    "added": "2019-11-20T12:50:39Z",
                    "shopHistory": [
                        "2020-05-31T00:00:00Z",
                        "2020-07-06T00:00:00Z",
                        "2020-08-11T00:00:00Z",
                        "2020-09-16T00:00:00Z",
                        "2020-10-18T00:00:00Z",
                        "2021-01-25T00:00:00Z",
                        "2021-04-29T00:00:00Z",
                        "2021-04-30T00:00:00Z",
                        "2021-05-01T00:00:00Z",
                        "2021-05-02T00:00:00Z",
                        "2021-05-03T00:00:00Z",
                        "2021-05-04T00:00:00Z",
                        "2021-05-05T00:00:00Z",
                        "2021-11-14T00:00:00Z",
                        "2022-01-05T00:00:00Z",
                        "2022-01-21T00:00:00Z",
                        "2022-02-25T00:00:00Z",
                        "2022-10-11T00:00:00Z",
                        "2022-11-13T00:00:00Z",
                        "2022-12-17T00:00:00Z"
                    ]
                },
                {
                    "id": "Pickaxe_ID_090_SamuraiBlue",
                    "name": "Cat's Claw",
                    "description": "Scratch and slash.",
                    "type": {
                        "value": "pickaxe",
                        "displayValue": "Harvesting Tool",
                        "backendValue": "AthenaPickaxe"
                    },
                    "rarity": {
                        "value": "rare",
                        "displayValue": "Rare",
                        "backendValue": "EFortRarity::Rare"
                    },
                    "series": null,
                    "set": {
                        "value": "Bushido",
                        "text": "Part of the Bushido set.",
                        "backendValue": "BlueSamurai"
                    },
                    "introduction": {
                        "chapter": "1",
                        "season": "5",
                        "text": "Introduced in Chapter 1, Season 5.",
                        "backendValue": 5
                    },
                    "images": {
                        "smallIcon": "https://fortnite-api.com/images/cosmetics/br/pickaxe_id_090_samuraiblue/smallicon.png",
                        "icon": "https://fortnite-api.com/images/cosmetics/br/pickaxe_id_090_samuraiblue/icon.png",
                        "featured": "https://fortnite-api.com/images/cosmetics/br/pickaxe_id_090_samuraiblue/featured.png",
                        "other": null
                    },
                    "variants": null,
                    "searchTags": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.BlueSamurai",
                        "Cosmetics.Filter.Season.5"
                    ],
                    "metaTags": null,
                    "showcaseVideo": "JY7nBIPljaM",
                    "dynamicPakId": null,
                    "displayAssetPath": "FortniteGame/Content/Catalog/DisplayAssets/DA_Featured_Pickaxe_ID_090_SamuraiBlue",
                    "definitionPath": "FortniteGame/Content/Athena/Items/Weapons/WID_Harvest_Pickaxe_SamuraiBlue",
                    "path": "FortniteGame/Content/Athena/Items/Cosmetics/PickAxes/Pickaxe_ID_090_SamuraiBlue",
                    "added": "2019-11-20T12:50:55Z",
                    "shopHistory": [
                        "2018-08-24T00:00:00Z",
                        "2018-08-25T00:00:00Z",
                        "2018-09-26T00:00:00Z",
                        "2018-11-06T00:00:00Z",
                        "2019-01-10T00:00:00Z",
                        "2019-02-19T00:00:00Z",
                        "2019-04-08T00:00:00Z",
                        "2019-05-09T00:00:00Z",
                        "2019-06-16T00:00:00Z",
                        "2019-08-31T00:00:00Z",
                        "2019-10-05T00:00:00Z",
                        "2020-05-31T00:00:00Z",
                        "2020-07-06T00:00:00Z",
                        "2020-08-11T00:00:00Z",
                        "2020-09-16T00:00:00Z",
                        "2021-01-25T00:00:00Z",
                        "2021-04-29T00:00:00Z",
                        "2021-04-30T00:00:00Z",
                        "2021-05-01T00:00:00Z",
                        "2021-05-02T00:00:00Z",
                        "2021-05-03T00:00:00Z",
                        "2021-05-04T00:00:00Z",
                        "2021-05-05T00:00:00Z",
                        "2022-10-11T00:00:00Z",
                        "2022-11-13T00:00:00Z",
                        "2022-12-17T00:00:00Z"
                    ]
                },
                {
                    "id": "Glider_ID_066_SamuraiBlue",
                    "name": "Purrfect",
                    "description": "It's the cat's meow.",
                    "type": {
                        "value": "glider",
                        "displayValue": "Glider",
                        "backendValue": "AthenaGlider"
                    },
                    "rarity": {
                        "value": "uncommon",
                        "displayValue": "Uncommon",
                        "backendValue": "EFortRarity::Uncommon"
                    },
                    "series": null,
                    "set": {
                        "value": "Bushido",
                        "text": "Part of the Bushido set.",
                        "backendValue": "BlueSamurai"
                    },
                    "introduction": {
                        "chapter": "1",
                        "season": "5",
                        "text": "Introduced in Chapter 1, Season 5.",
                        "backendValue": 5
                    },
                    "images": {
                        "smallIcon": "https://fortnite-api.com/images/cosmetics/br/glider_id_066_samuraiblue/smallicon.png",
                        "icon": "https://fortnite-api.com/images/cosmetics/br/glider_id_066_samuraiblue/icon.png",
                        "featured": "https://fortnite-api.com/images/cosmetics/br/glider_id_066_samuraiblue/featured.png",
                        "other": null
                    },
                    "variants": null,
                    "searchTags": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.BlueSamurai",
                        "Cosmetics.Filter.Season.5"
                    ],
                    "metaTags": null,
                    "showcaseVideo": "D7ztSNZ5Ud4",
                    "dynamicPakId": null,
                    "displayAssetPath": "FortniteGame/Content/Catalog/DisplayAssets/DA_Featured_Glider_ID_066_SamuraiBlue",
                    "definitionPath": null,
                    "path": "FortniteGame/Content/Athena/Items/Cosmetics/Gliders/Glider_ID_066_SamuraiBlue",
                    "added": "2019-11-20T12:51:08Z",
                    "shopHistory": [
                        "2018-08-24T00:00:00Z",
                        "2018-08-25T00:00:00Z",
                        "2018-09-26T00:00:00Z",
                        "2018-11-06T00:00:00Z",
                        "2019-01-10T00:00:00Z",
                        "2019-02-19T00:00:00Z",
                        "2019-04-08T00:00:00Z",
                        "2019-05-09T00:00:00Z",
                        "2019-06-16T00:00:00Z",
                        "2019-08-31T00:00:00Z",
                        "2019-10-05T00:00:00Z",
                        "2021-04-29T00:00:00Z",
                        "2021-04-30T00:00:00Z",
                        "2021-05-01T00:00:00Z",
                        "2021-05-02T00:00:00Z",
                        "2021-05-03T00:00:00Z",
                        "2021-05-04T00:00:00Z",
                        "2021-05-05T00:00:00Z",
                        "2022-10-11T00:00:00Z",
                        "2022-11-13T00:00:00Z",
                        "2022-12-17T00:00:00Z"
                    ]
                }
            ]
        }
    );
}