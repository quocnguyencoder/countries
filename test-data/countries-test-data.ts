import Country from '@/interfaces/country'
// 22 countries has 'v' character in common name
const testData = [
    {
        "name": {
            "common": "Saint Kitts and Nevis",
            "official": "Federation of Saint Christopher and Nevis",
            "nativeName": {
                "eng": {
                    "official": "Federation of Saint Christopher and Nevis",
                    "common": "Saint Kitts and Nevis"
                }
            }
        },
        "tld": [
            ".kn"
        ],
        "cca2": "KN",
        "ccn3": "659",
        "cca3": "KNA",
        "cioc": "SKN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "idd": {
            "root": "+1",
            "suffixes": [
                "869"
            ]
        },
        "capital": [
            "Basseterre"
        ],
        "altSpellings": [
            "KN",
            "Federation of Saint Christopher and Nevis"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ara": {
                "official": "اتحاد القديس كريستوفر ونيفيس",
                "common": "سانت كيتس ونيفيس"
            },
            "ces": {
                "official": "Federace Sv. Kryštof a Nevis",
                "common": "Svatý Kryštof a Nevis"
            },
            "cym": {
                "official": "Federation of Saint Christopher and Nevis",
                "common": "Saint Kitts and Nevis"
            },
            "deu": {
                "official": "Föderation von St. Kitts und Nevis",
                "common": "St. Kitts und Nevis"
            },
            "est": {
                "official": "Saint Kittsi ja Nevise Föderatsioon",
                "common": "Saint Kitts ja Nevis"
            },
            "fin": {
                "official": "Saint Christopherin ja Nevisin federaatio",
                "common": "Saint Kitts ja Nevis"
            },
            "fra": {
                "official": "Fédération de Saint-Christophe-et-Niévès",
                "common": "Saint-Christophe-et-Niévès"
            },
            "hrv": {
                "official": "Federacija Sv.Kristofora i Nevisa",
                "common": "Sveti Kristof i Nevis"
            },
            "hun": {
                "official": "Saint Christopher és Nevis Államszövetség",
                "common": "Saint Kitts és Nevis"
            },
            "ita": {
                "official": "Federazione di Saint Christopher e Nevis",
                "common": "Saint Kitts e Nevis"
            },
            "jpn": {
                "official": "セントクリストファーNevis連盟",
                "common": "セントクリストファー・ネイビス"
            },
            "kor": {
                "official": "세인트키츠 네비스 연방",
                "common": "세인트키츠 네비스"
            },
            "nld": {
                "official": "Federatie van Saint Kitts en Nevis",
                "common": "Saint Kitts en Nevis"
            },
            "per": {
                "official": "فدراسیون سنت کیتس و نویس",
                "common": "سنت کیتس و نویس"
            },
            "pol": {
                "official": "Federacja Saint Kitts i Nevis",
                "common": "Saint Kitts i Nevis"
            },
            "por": {
                "official": "Federação de São Cristóvão e Nevis",
                "common": "São Cristóvão e Nevis"
            },
            "rus": {
                "official": "Федерация Сент-Кристофер и Н е в и с",
                "common": "Сент-Китс и Невис"
            },
            "slk": {
                "official": "Feder໡cia Svätého Krištofa a Nevisu",
                "common": "Svätý Krištof a Nevis"
            },
            "spa": {
                "official": "Federación de San Cristóbal y Nevis",
                "common": "San Cristóbal y Nieves"
            },
            "swe": {
                "official": "Federationen Saint Kitts och Nevis",
                "common": "Saint Kitts och Nevis"
            },
            "urd": {
                "official": "وفاقِ سینٹ کیٹز و ناویس",
                "common": "سینٹ کیٹز و ناویس"
            },
            "zho": {
                "official": "圣克里斯托弗和尼维斯联邦",
                "common": "圣基茨和尼维斯"
            }
        },
        "latlng": [
            17.33333333,
            -62.75
        ],
        "landlocked": false,
        "area": 261,
        "demonyms": {
            "eng": {
                "f": "Kittitian or Nevisian",
                "m": "Kittitian or Nevisian"
            },
            "fra": {
                "f": "Kittitienne-et-nevicienne",
                "m": "Kittitien-et-nevicien"
            }
        },
        "flag": "🇰🇳",
        "maps": {
            "googleMaps": "https://goo.gl/maps/qiaVwcLVTXX3eoTNA",
            "openStreetMaps": "https://www.openstreetmap.org/relation/536899"
        },
        "population": 53192,
        "fifa": "SKN",
        "car": {
            "signs": [
                "KN"
            ],
            "side": "left"
        },
        "timezones": [
            "UTC-04:00"
        ],
        "continents": [
            "North America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/kn.png",
            "svg": "https://flagcdn.com/kn.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/kn.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/kn.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                17.3,
                -62.72
            ]
        }
    },
    {
        "name": {
            "common": "United States Virgin Islands",
            "official": "Virgin Islands of the United States",
            "nativeName": {
                "eng": {
                    "official": "Virgin Islands of the United States",
                    "common": "United States Virgin Islands"
                }
            }
        },
        "tld": [
            ".vi"
        ],
        "cca2": "VI",
        "ccn3": "850",
        "cca3": "VIR",
        "cioc": "ISV",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "idd": {
            "root": "+1",
            "suffixes": [
                "340"
            ]
        },
        "capital": [
            "Charlotte Amalie"
        ],
        "altSpellings": [
            "VI",
            "Virgin Islands, U.S."
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ara": {
                "official": "جزر العذراء الامريكية",
                "common": "جزر العذراء الامريكية"
            },
            "ces": {
                "official": "Americké Panenské ostrovy",
                "common": "Americké Panenské ostrovy"
            },
            "cym": {
                "official": "Virgin Islands of the United States",
                "common": "United States Virgin Islands"
            },
            "deu": {
                "official": "Amerikanische Jungferninseln",
                "common": "Amerikanische Jungferninseln"
            },
            "est": {
                "official": "Ühendriikide Neitsisaared",
                "common": "Neitsisaared, USA"
            },
            "fin": {
                "official": "Yhdysvaltain Neitsytsaaret",
                "common": "Neitsytsaaret"
            },
            "fra": {
                "official": "Îles Vierges des États-Unis",
                "common": "Îles Vierges des États-Unis"
            },
            "hrv": {
                "official": "Djevičanski Otoci SAD",
                "common": "Američki Djevičanski Otoci"
            },
            "hun": {
                "official": "Amerikai Virgin-szigetek",
                "common": "Amerikai Virgin-szigetek"
            },
            "ita": {
                "official": "Isole Vergini degli Stati Uniti",
                "common": "Isole Vergini americane"
            },
            "jpn": {
                "official": "米国のバージン諸島",
                "common": "アメリカ領ヴァージン諸島"
            },
            "kor": {
                "official": "미국령 버진아일랜드",
                "common": "미국령 버진아일랜드"
            },
            "nld": {
                "official": "Maagdeneilanden van de Verenigde Staten",
                "common": "Amerikaanse Maagdeneilanden"
            },
            "per": {
                "official": "جزایر ویرجین ایالات متحده آمریکا",
                "common": "جزایر ویرجین ایالات متحده آمریکا"
            },
            "pol": {
                "official": "Wyspy Dziewicze Stanów Zjednoczonych",
                "common": "Wyspy Dziewicze Stanów Zjednoczonych"
            },
            "por": {
                "official": "Ilhas Virgens dos Estados Unidos",
                "common": "Ilhas Virgens dos Estados Unidos"
            },
            "rus": {
                "official": "Виргинские острова Соединенных Штатов",
                "common": "Виргинские Острова"
            },
            "slk": {
                "official": "Americké Panenské ostrovy",
                "common": "Americké Panenské ostrovy"
            },
            "spa": {
                "official": "Islas Vírgenes de los Estados Unidos",
                "common": "Islas Vírgenes de los Estados Unidos"
            },
            "swe": {
                "official": "Amerikanska Jungfruöarna",
                "common": "Amerikanska Jungfruöarna"
            },
            "urd": {
                "official": "امریکی جزائر ورجن",
                "common": "امریکی جزائر ورجن"
            },
            "zho": {
                "official": "美属维尔京群岛",
                "common": "美属维尔京群岛"
            }
        },
        "latlng": [
            18.35,
            -64.933333
        ],
        "landlocked": false,
        "area": 347,
        "demonyms": {
            "eng": {
                "f": "Virgin Islander",
                "m": "Virgin Islander"
            }
        },
        "flag": "🇻🇮",
        "maps": {
            "googleMaps": "https://goo.gl/maps/mBfreywj8dor6q4m9",
            "openStreetMaps": "openstreetmap.org/relation/286898"
        },
        "population": 106290,
        "fifa": "VIR",
        "car": {
            "signs": [
                "USA"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC-04:00"
        ],
        "continents": [
            "North America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/vi.png",
            "svg": "https://flagcdn.com/vi.svg"
        },
        "coatOfArms": {},
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                18.35,
                -64.93
            ]
        }
    },
    {
        "name": {
            "common": "Bouvet Island",
            "official": "Bouvet Island",
            "nativeName": {
                "nor": {
                    "official": "Bouvetøya",
                    "common": "Bouvetøya"
                }
            }
        },
        "tld": [
            ".bv"
        ],
        "cca2": "BV",
        "ccn3": "074",
        "cca3": "BVT",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "idd": {
            "root": "+4",
            "suffixes": [
                "7"
            ]
        },
        "altSpellings": [
            "BV",
            "Bouvetøya",
            "Bouvet-øya"
        ],
        "region": "Antarctic",
        "languages": {
            "nor": "Norwegian"
        },
        "translations": {
            "ara": {
                "official": "جزر بوفيه",
                "common": "جزر بوفيه"
            },
            "ces": {
                "official": "Bouvetův ostrov",
                "common": "Bouvetův ostrov"
            },
            "cym": {
                "official": "Bouvet Island",
                "common": "Bouvet Island"
            },
            "deu": {
                "official": "Bouvetinsel",
                "common": "Bouvetinsel"
            },
            "est": {
                "official": "Bouvet’ saar",
                "common": "Bouvet’ saar"
            },
            "fin": {
                "official": "Bouvet'nsaari",
                "common": "Bouvet'nsaari"
            },
            "fra": {
                "official": "Île Bouvet",
                "common": "Île Bouvet"
            },
            "hrv": {
                "official": "Bouvet Island",
                "common": "Otok Bouvet"
            },
            "hun": {
                "official": "Bouvet-sziget",
                "common": "Bouvet-sziget"
            },
            "ita": {
                "official": "Isola Bouvet",
                "common": "Isola Bouvet"
            },
            "jpn": {
                "official": "ブーヴェ島",
                "common": "ブーベ島"
            },
            "kor": {
                "official": "부베 섬",
                "common": "부베 섬"
            },
            "nld": {
                "official": "Bouvet Island",
                "common": "Bouveteiland"
            },
            "per": {
                "official": "جزیرهٔ بووه",
                "common": "جزیرهٔ بووه"
            },
            "pol": {
                "official": "Wyspa Bouveta",
                "common": "Wyspa Bouveta"
            },
            "por": {
                "official": "Ilha Bouvet",
                "common": "Ilha Bouvet"
            },
            "rus": {
                "official": "Остров Буве",
                "common": "Остров Буве"
            },
            "slk": {
                "official": "Bouvetov ostrov",
                "common": "Bouvetov ostrov"
            },
            "spa": {
                "official": "Isla Bouvet",
                "common": "Isla Bouvet"
            },
            "swe": {
                "official": "Bouvetön",
                "common": "Bouvetön"
            },
            "urd": {
                "official": "جزیرہ بووہ",
                "common": "جزیرہ بووہ"
            },
            "zho": {
                "official": "布维岛",
                "common": "布维岛"
            }
        },
        "latlng": [
            -54.43333333,
            3.4
        ],
        "landlocked": false,
        "area": 49,
        "flag": "🇧🇻",
        "maps": {
            "googleMaps": "https://goo.gl/maps/7WRQAEKZb4uK36yi9",
            "openStreetMaps": "https://www.openstreetmap.org/way/174996681"
        },
        "population": 0,
        "car": {
            "signs": [
                ""
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Antarctica"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/bv.png",
            "svg": "https://flagcdn.com/bv.svg"
        },
        "coatOfArms": {},
        "startOfWeek": "monday",
        "capitalInfo": {}
    },
    {
        "name": {
            "common": "Kosovo",
            "official": "Republic of Kosovo",
            "nativeName": {
                "sqi": {
                    "official": "Republika e Kosovës",
                    "common": "Kosova"
                },
                "srp": {
                    "official": "Република Косово",
                    "common": "Косово"
                }
            }
        },
        "cca2": "XK",
        "cca3": "UNK",
        "cioc": "KOS",
        "status": "user-assigned",
        "unMember": false,
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "idd": {
            "root": "+3",
            "suffixes": [
                "83"
            ]
        },
        "capital": [
            "Pristina"
        ],
        "altSpellings": [
            "XK",
            "Република Косово"
        ],
        "region": "Europe",
        "subregion": "Southeast Europe",
        "languages": {
            "sqi": "Albanian",
            "srp": "Serbian"
        },
        "translations": {
            "ara": {
                "official": "جمهورية كوسوفو",
                "common": "كوسوفو"
            },
            "ces": {
                "official": "Kosovská republika",
                "common": "Kosovo"
            },
            "cym": {
                "official": "Republic of Kosovo",
                "common": "Kosovo"
            },
            "deu": {
                "official": "Republik Kosovo",
                "common": "Kosovo"
            },
            "est": {
                "official": "Kosovo Vabariik",
                "common": "Kosovo"
            },
            "fin": {
                "official": "Kosovon tasavalta",
                "common": "Kosovo"
            },
            "fra": {
                "official": "République du Kosovo",
                "common": "Kosovo"
            },
            "hrv": {
                "official": "Republika Kosovo",
                "common": "Kosovo"
            },
            "hun": {
                "official": "Koszovó",
                "common": "Koszovó"
            },
            "ita": {
                "official": "Repubblica del Kosovo",
                "common": "Kosovo"
            },
            "kor": {
                "official": "코소보 공화국",
                "common": "코소보"
            },
            "nld": {
                "official": "Republiek Kosovo",
                "common": "Kosovo"
            },
            "per": {
                "official": "جمهوری کوزوو",
                "common": "کوزوو"
            },
            "pol": {
                "official": "Republika Kosowa",
                "common": "Kosowo"
            },
            "por": {
                "official": "República do Kosovo",
                "common": "Kosovo"
            },
            "rus": {
                "official": "Республика Косово",
                "common": "Республика Косово"
            },
            "slk": {
                "official": "Republika Kosovo",
                "common": "Kosovo"
            },
            "spa": {
                "official": "República de Kosovo",
                "common": "Kosovo"
            },
            "swe": {
                "official": "Republiken Kosovo",
                "common": "Kosovo"
            },
            "urd": {
                "official": "جمہوریہ کوسووہ",
                "common": "کوسووہ"
            },
            "zho": {
                "official": "科索沃共和国",
                "common": "科索沃"
            }
        },
        "latlng": [
            42.666667,
            21.166667
        ],
        "landlocked": true,
        "borders": [
            "ALB",
            "MKD",
            "MNE",
            "SRB"
        ],
        "area": 10908,
        "demonyms": {
            "eng": {
                "f": "Kosovar",
                "m": "Kosovar"
            },
            "fra": {
                "f": "Kosovare",
                "m": "Kosovar"
            }
        },
        "flag": "🇽🇰",
        "maps": {
            "googleMaps": "https://goo.gl/maps/CSC4Yc8SWPgburuD9",
            "openStreetMaps": "https://www.openstreetmap.org/relation/2088990"
        },
        "population": 1775378,
        "gini": {
            "2017": 29
        },
        "fifa": "KVX",
        "car": {
            "signs": [
                "CS"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/xk.png",
            "svg": "https://flagcdn.com/xk.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/xk.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/xk.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                42.67,
                21.17
            ]
        }
    },
    {
        "name": {
            "common": "Venezuela",
            "official": "Bolivarian Republic of Venezuela",
            "nativeName": {
                "spa": {
                    "official": "República Bolivariana de Venezuela",
                    "common": "Venezuela"
                }
            }
        },
        "tld": [
            ".ve"
        ],
        "cca2": "VE",
        "ccn3": "862",
        "cca3": "VEN",
        "cioc": "VEN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "VES": {
                "name": "Venezuelan bolívar soberano",
                "symbol": "Bs.S."
            }
        },
        "idd": {
            "root": "+5",
            "suffixes": [
                "8"
            ]
        },
        "capital": [
            "Caracas"
        ],
        "altSpellings": [
            "VE",
            "Bolivarian Republic of Venezuela",
            "Venezuela, Bolivarian Republic of",
            "República Bolivariana de Venezuela"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ara": {
                "official": "جمهورية فنزويلا البوليفارية",
                "common": "فنزويلا"
            },
            "ces": {
                "official": "Bolívarská republika Venezuela",
                "common": "Venezuela"
            },
            "cym": {
                "official": "Bolivarian Republic of Venezuela",
                "common": "Venezuela"
            },
            "deu": {
                "official": "Bolivarische Republik Venezuela",
                "common": "Venezuela"
            },
            "est": {
                "official": "Venezuela Bolívari Vabariik",
                "common": "Venezuela"
            },
            "fin": {
                "official": "Venezuelan bolivariaainen tasavalta",
                "common": "Venezuela"
            },
            "fra": {
                "official": "République bolivarienne du Venezuela",
                "common": "Venezuela"
            },
            "hrv": {
                "official": "BOLIVARIJANSKA Republika Venezuela",
                "common": "Venezuela"
            },
            "hun": {
                "official": "Venezuelai Bolivári Köztársaság",
                "common": "Venezuela"
            },
            "ita": {
                "official": "Repubblica Bolivariana del Venezuela",
                "common": "Venezuela"
            },
            "jpn": {
                "official": "ベネズエラ·ボリバル共和国",
                "common": "ベネズエラ・ボリバル共和国"
            },
            "kor": {
                "official": "베네수엘라 볼리바르 공화국",
                "common": "베네수엘라"
            },
            "nld": {
                "official": "Bolivariaanse Republiek Venezuela",
                "common": "Venezuela"
            },
            "per": {
                "official": "جمهوری بولیواری ونزوئلا",
                "common": "ونزوئلا"
            },
            "pol": {
                "official": "Boliwariańska Republika Wenezueli",
                "common": "Wenezuela"
            },
            "por": {
                "official": "República Bolivariana da Venezuela",
                "common": "Venezuela"
            },
            "rus": {
                "official": "Боливарианская Республика Венесуэла",
                "common": "Венесуэла"
            },
            "slk": {
                "official": "Venezuelská bolívarovská republika",
                "common": "Venezuela"
            },
            "spa": {
                "official": "República Bolivariana de Venezuela",
                "common": "Venezuela"
            },
            "swe": {
                "official": "Bolivarianska republiken Venezuela",
                "common": "Venezuela"
            },
            "urd": {
                "official": "جمہوریہ وینیزویلا",
                "common": "وینیزویلا"
            },
            "zho": {
                "official": "委内瑞拉玻利瓦尔共和国",
                "common": "委内瑞拉"
            }
        },
        "latlng": [
            8,
            -66
        ],
        "landlocked": false,
        "borders": [
            "BRA",
            "COL",
            "GUY"
        ],
        "area": 916445,
        "demonyms": {
            "eng": {
                "f": "Venezuelan",
                "m": "Venezuelan"
            },
            "fra": {
                "f": "Vénézuélienne",
                "m": "Vénézuélien"
            }
        },
        "flag": "🇻🇪",
        "maps": {
            "googleMaps": "https://goo.gl/maps/KLCwDN8sec7z2kse9",
            "openStreetMaps": "https://www.openstreetmap.org/relation/272644"
        },
        "population": 28435943,
        "gini": {
            "2006": 44.8
        },
        "fifa": "VEN",
        "car": {
            "signs": [
                "YV"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC-04:00"
        ],
        "continents": [
            "South America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/ve.png",
            "svg": "https://flagcdn.com/ve.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/ve.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/ve.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                10.48,
                -66.87
            ]
        },
        "postalCode": {
            "format": "####",
            "regex": "^(\\d{4})$"
        }
    },
    {
        "name": {
            "common": "Slovakia",
            "official": "Slovak Republic",
            "nativeName": {
                "slk": {
                    "official": "Slovenská republika",
                    "common": "Slovensko"
                }
            }
        },
        "tld": [
            ".sk"
        ],
        "cca2": "SK",
        "ccn3": "703",
        "cca3": "SVK",
        "cioc": "SVK",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "idd": {
            "root": "+4",
            "suffixes": [
                "21"
            ]
        },
        "capital": [
            "Bratislava"
        ],
        "altSpellings": [
            "SK",
            "Slovak Republic",
            "Slovenská republika"
        ],
        "region": "Europe",
        "subregion": "Central Europe",
        "languages": {
            "slk": "Slovak"
        },
        "translations": {
            "ara": {
                "official": "جمهورية سلوفاكيا",
                "common": "سلوفاكيا"
            },
            "ces": {
                "official": "Slovenská republika",
                "common": "Slovensko"
            },
            "cym": {
                "official": "Slovak Republic",
                "common": "Slovakia"
            },
            "deu": {
                "official": "Slowakische Republik",
                "common": "Slowakei"
            },
            "est": {
                "official": "Slovaki Vabariik",
                "common": "Slovakkia"
            },
            "fin": {
                "official": "Slovakian tasavalta",
                "common": "Slovakia"
            },
            "fra": {
                "official": "République slovaque",
                "common": "Slovaquie"
            },
            "hrv": {
                "official": "slovačka",
                "common": "Slovačka"
            },
            "hun": {
                "official": "Szlovák Köztársaság",
                "common": "Szlovákia"
            },
            "ita": {
                "official": "Repubblica slovacca",
                "common": "Slovacchia"
            },
            "jpn": {
                "official": "スロバキア共和国",
                "common": "スロバキア"
            },
            "kor": {
                "official": "슬로바키아 공화국",
                "common": "슬로바키아"
            },
            "nld": {
                "official": "Slowaakse Republiek",
                "common": "Slowakije"
            },
            "per": {
                "official": "جمهوری اسلواکی",
                "common": "اِسلُواکی"
            },
            "pol": {
                "official": "Republika Słowacka",
                "common": "Słowacja"
            },
            "por": {
                "official": "República Eslovaca",
                "common": "Eslováquia"
            },
            "rus": {
                "official": "Словацкая Республика",
                "common": "Словакия"
            },
            "slk": {
                "official": "Slovenská republika",
                "common": "Slovensko"
            },
            "spa": {
                "official": "República Eslovaca",
                "common": "República Eslovaca"
            },
            "swe": {
                "official": "Republiken Slovakien",
                "common": "Slovakien"
            },
            "urd": {
                "official": "جمہوریہ سلوواکیہ",
                "common": "سلوواکیہ"
            },
            "zho": {
                "official": "斯洛伐克共和国",
                "common": "斯洛伐克"
            }
        },
        "latlng": [
            48.66666666,
            19.5
        ],
        "landlocked": true,
        "borders": [
            "AUT",
            "CZE",
            "HUN",
            "POL",
            "UKR"
        ],
        "area": 49037,
        "demonyms": {
            "eng": {
                "f": "Slovak",
                "m": "Slovak"
            },
            "fra": {
                "f": "Slovaque",
                "m": "Slovaque"
            }
        },
        "flag": "🇸🇰",
        "maps": {
            "googleMaps": "https://goo.gl/maps/uNSH2wW4bLoZVYJj7",
            "openStreetMaps": "https://www.openstreetmap.org/relation/14296"
        },
        "population": 5458827,
        "gini": {
            "2018": 25
        },
        "fifa": "SVK",
        "car": {
            "signs": [
                "SK"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/sk.png",
            "svg": "https://flagcdn.com/sk.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/sk.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/sk.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                48.15,
                17.12
            ]
        },
        "postalCode": {
            "format": "###  ##",
            "regex": "^(\\d{5})$"
        }
    },
    {
        "name": {
            "common": "Latvia",
            "official": "Republic of Latvia",
            "nativeName": {
                "lav": {
                    "official": "Latvijas Republikas",
                    "common": "Latvija"
                }
            }
        },
        "tld": [
            ".lv"
        ],
        "cca2": "LV",
        "ccn3": "428",
        "cca3": "LVA",
        "cioc": "LAT",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "idd": {
            "root": "+3",
            "suffixes": [
                "71"
            ]
        },
        "capital": [
            "Riga"
        ],
        "altSpellings": [
            "LV",
            "Republic of Latvia",
            "Latvijas Republika"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "lav": "Latvian"
        },
        "translations": {
            "ara": {
                "official": "جمهورية لاتفيا",
                "common": "لاتفيا"
            },
            "ces": {
                "official": "Lotyšská republika",
                "common": "Lotyšsko"
            },
            "cym": {
                "official": "Republic of Latvia",
                "common": "Latvia"
            },
            "deu": {
                "official": "Republik Lettland",
                "common": "Lettland"
            },
            "est": {
                "official": "Läti Vabariik",
                "common": "Läti"
            },
            "fin": {
                "official": "Latvian tasavalta",
                "common": "Latvia"
            },
            "fra": {
                "official": "République de Lettonie",
                "common": "Lettonie"
            },
            "hrv": {
                "official": "Republika Latvija",
                "common": "Latvija"
            },
            "hun": {
                "official": "Lett Köztársaság",
                "common": "Lettország"
            },
            "ita": {
                "official": "Repubblica di Lettonia",
                "common": "Lettonia"
            },
            "jpn": {
                "official": "ラトビア共和国",
                "common": "ラトビア"
            },
            "kor": {
                "official": "라트비아 공화국",
                "common": "라트비아"
            },
            "nld": {
                "official": "Republiek Letland",
                "common": "Letland"
            },
            "per": {
                "official": "جمهوری لتونی",
                "common": "لتونی"
            },
            "pol": {
                "official": "Republika Łotewska",
                "common": "Łotwa"
            },
            "por": {
                "official": "República da Letónia",
                "common": "Letónia"
            },
            "rus": {
                "official": "Латвийская Республика",
                "common": "Латвия"
            },
            "slk": {
                "official": "Lotyšská republika",
                "common": "Lotyšsko"
            },
            "spa": {
                "official": "República de Letonia",
                "common": "Letonia"
            },
            "swe": {
                "official": "Republiken Lettland",
                "common": "Lettland"
            },
            "urd": {
                "official": "جمہوریہ لٹویا",
                "common": "لٹویا"
            },
            "zho": {
                "official": "拉脱维亚共和国",
                "common": "拉脱维亚"
            }
        },
        "latlng": [
            57,
            25
        ],
        "landlocked": false,
        "borders": [
            "BLR",
            "EST",
            "LTU",
            "RUS"
        ],
        "area": 64559,
        "demonyms": {
            "eng": {
                "f": "Latvian",
                "m": "Latvian"
            },
            "fra": {
                "f": "Lettone",
                "m": "Letton"
            }
        },
        "flag": "🇱🇻",
        "maps": {
            "googleMaps": "https://goo.gl/maps/iQpUkH7ghq31ZtXe9",
            "openStreetMaps": "https://www.openstreetmap.org/relation/72594"
        },
        "population": 1901548,
        "gini": {
            "2018": 35.1
        },
        "fifa": "LVA",
        "car": {
            "signs": [
                "LV"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+02:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/lv.png",
            "svg": "https://flagcdn.com/lv.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/lv.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/lv.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                56.95,
                24.1
            ]
        },
        "postalCode": {
            "format": "LV-####",
            "regex": "^(?:LV)*(\\d{4})$"
        }
    },
    {
        "name": {
            "common": "British Virgin Islands",
            "official": "Virgin Islands",
            "nativeName": {
                "eng": {
                    "official": "Virgin Islands",
                    "common": "British Virgin Islands"
                }
            }
        },
        "tld": [
            ".vg"
        ],
        "cca2": "VG",
        "ccn3": "092",
        "cca3": "VGB",
        "cioc": "IVB",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "idd": {
            "root": "+1",
            "suffixes": [
                "284"
            ]
        },
        "capital": [
            "Road Town"
        ],
        "altSpellings": [
            "VG",
            "Virgin Islands, British"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ara": {
                "official": "جزر العذراء البريطانية",
                "common": "جزر العذراء"
            },
            "ces": {
                "official": "Britské Panenské ostrovy",
                "common": "Britské Panenské ostrovy"
            },
            "cym": {
                "official": "Virgin Islands",
                "common": "British Virgin Islands"
            },
            "deu": {
                "official": "Jungferninseln",
                "common": "Britische Jungferninseln"
            },
            "est": {
                "official": "Neitsisaared",
                "common": "Briti Neitsisaared"
            },
            "fin": {
                "official": "Brittiläiset Neitsytsaaret",
                "common": "Neitsytsaaret"
            },
            "fra": {
                "official": "îles Vierges",
                "common": "Îles Vierges britanniques"
            },
            "hrv": {
                "official": "Djevičanski Otoci",
                "common": "Britanski Djevičanski Otoci"
            },
            "hun": {
                "official": "Brit Virgin-szigetek",
                "common": "Brit Virgin-szigetek"
            },
            "ita": {
                "official": "Isole Vergini",
                "common": "Isole Vergini Britanniche"
            },
            "jpn": {
                "official": "バージン諸島",
                "common": "イギリス領ヴァージン諸島"
            },
            "kor": {
                "official": "영국령 버진아일랜드",
                "common": "영국령 버진아일랜드"
            },
            "nld": {
                "official": "Maagdeneilanden",
                "common": "Britse Maagdeneilanden"
            },
            "per": {
                "official": "جزایر ویرجین بریتانیا",
                "common": "جزایر ویرجین بریتانیا"
            },
            "pol": {
                "official": "Brytyjskie Wyspy Dziewicze",
                "common": "Brytyjskie Wyspy Dziewicze"
            },
            "por": {
                "official": "Ilhas Virgens",
                "common": "Ilhas Virgens"
            },
            "rus": {
                "official": "Виргинские острова",
                "common": "Британские Виргинские острова"
            },
            "slk": {
                "official": "Panenské ostrovy",
                "common": "Panenské ostrovy"
            },
            "spa": {
                "official": "Islas Vírgenes",
                "common": "Islas Vírgenes del Reino Unido"
            },
            "swe": {
                "official": "Brittiska Jungfruöarna",
                "common": "Brittiska Jungfruöarna"
            },
            "urd": {
                "official": "برطانوی جزائر ورجن",
                "common": "برطانوی جزائر ورجن"
            },
            "zho": {
                "official": "英属维尔京群岛",
                "common": "英属维尔京群岛"
            }
        },
        "latlng": [
            18.431383,
            -64.62305
        ],
        "landlocked": false,
        "area": 151,
        "demonyms": {
            "eng": {
                "f": "Virgin Islander",
                "m": "Virgin Islander"
            }
        },
        "flag": "🇻🇬",
        "maps": {
            "googleMaps": "https://goo.gl/maps/49C9cSesNVAR9DQk8",
            "openStreetMaps": "https://www.openstreetmap.org/relation/285454"
        },
        "population": 30237,
        "fifa": "VGB",
        "car": {
            "signs": [
                "BVI"
            ],
            "side": "left"
        },
        "timezones": [
            "UTC-04:00"
        ],
        "continents": [
            "North America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/vg.png",
            "svg": "https://flagcdn.com/vg.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/vg.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/vg.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                18.42,
                -64.62
            ]
        }
    },
    {
        "name": {
            "common": "Vanuatu",
            "official": "Republic of Vanuatu",
            "nativeName": {
                "bis": {
                    "official": "Ripablik blong Vanuatu",
                    "common": "Vanuatu"
                },
                "eng": {
                    "official": "Republic of Vanuatu",
                    "common": "Vanuatu"
                },
                "fra": {
                    "official": "République de Vanuatu",
                    "common": "Vanuatu"
                }
            }
        },
        "tld": [
            ".vu"
        ],
        "cca2": "VU",
        "ccn3": "548",
        "cca3": "VUT",
        "cioc": "VAN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "VUV": {
                "name": "Vanuatu vatu",
                "symbol": "Vt"
            }
        },
        "idd": {
            "root": "+6",
            "suffixes": [
                "78"
            ]
        },
        "capital": [
            "Port Vila"
        ],
        "altSpellings": [
            "VU",
            "Republic of Vanuatu",
            "Ripablik blong Vanuatu",
            "République de Vanuatu"
        ],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "bis": "Bislama",
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "ara": {
                "official": "جمهورية فانواتو",
                "common": "فانواتو"
            },
            "ces": {
                "official": "Republika Vanuatu",
                "common": "Vanuatu"
            },
            "cym": {
                "official": "Republic of Vanuatu",
                "common": "Vanuatu"
            },
            "deu": {
                "official": "Vanuatu",
                "common": "Vanuatu"
            },
            "est": {
                "official": "Vanuatu Vabariik",
                "common": "Vanuatu"
            },
            "fin": {
                "official": "Vanuatun tasavalta",
                "common": "Vanuatu"
            },
            "fra": {
                "official": "République de Vanuatu",
                "common": "Vanuatu"
            },
            "hrv": {
                "official": "Republika Vanuatu",
                "common": "Vanuatu"
            },
            "hun": {
                "official": "Vanuatui Köztársaság",
                "common": "Vanuatu"
            },
            "ita": {
                "official": "Repubblica di Vanuatu",
                "common": "Vanuatu"
            },
            "jpn": {
                "official": "バヌアツ共和国",
                "common": "バヌアツ"
            },
            "kor": {
                "official": "바누아투 공화국",
                "common": "바누아투"
            },
            "nld": {
                "official": "Republiek Vanuatu",
                "common": "Vanuatu"
            },
            "per": {
                "official": "جمهوری وانواتو",
                "common": "وانواتو"
            },
            "pol": {
                "official": "Republika Vanuatu",
                "common": "Vanuatu"
            },
            "por": {
                "official": "República de Vanuatu",
                "common": "Vanuatu"
            },
            "rus": {
                "official": "Республика Вануату",
                "common": "Вануату"
            },
            "slk": {
                "official": "Vanuatská republika",
                "common": "Vanuatu"
            },
            "spa": {
                "official": "República de Vanuatu",
                "common": "Vanuatu"
            },
            "swe": {
                "official": "Republiken Vanuatu",
                "common": "Vanuatu"
            },
            "urd": {
                "official": "جمہوریہ وانواتو",
                "common": "وانواتو"
            },
            "zho": {
                "official": "瓦努阿图共和国",
                "common": "瓦努阿图"
            }
        },
        "latlng": [
            -16,
            167
        ],
        "landlocked": false,
        "area": 12189,
        "demonyms": {
            "eng": {
                "f": "Ni-Vanuatu",
                "m": "Ni-Vanuatu"
            },
            "fra": {
                "f": "Vanuatuane",
                "m": "Vanuatuan"
            }
        },
        "flag": "🇻🇺",
        "maps": {
            "googleMaps": "https://goo.gl/maps/hwAjehcT7VfvP5zJ8",
            "openStreetMaps": "https://www.openstreetmap.org/relation/2177246"
        },
        "population": 307150,
        "gini": {
            "2010": 37.6
        },
        "fifa": "VAN",
        "car": {
            "signs": [
                "VU"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+11:00"
        ],
        "continents": [
            "Oceania"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/vu.png",
            "svg": "https://flagcdn.com/vu.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/vu.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/vu.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                -17.73,
                168.32
            ]
        }
    },
    {
        "name": {
            "common": "Bosnia and Herzegovina",
            "official": "Bosnia and Herzegovina",
            "nativeName": {
                "bos": {
                    "official": "Bosna i Hercegovina",
                    "common": "Bosna i Hercegovina"
                },
                "hrv": {
                    "official": "Bosna i Hercegovina",
                    "common": "Bosna i Hercegovina"
                },
                "srp": {
                    "official": "Боснa и Херцеговина",
                    "common": "Боснa и Херцеговина"
                }
            }
        },
        "tld": [
            ".ba"
        ],
        "cca2": "BA",
        "ccn3": "070",
        "cca3": "BIH",
        "cioc": "BIH",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "BAM": {
                "name": "Bosnia and Herzegovina convertible mark"
            }
        },
        "idd": {
            "root": "+3",
            "suffixes": [
                "87"
            ]
        },
        "capital": [
            "Sarajevo"
        ],
        "altSpellings": [
            "BA",
            "Bosnia-Herzegovina",
            "Босна и Херцеговина"
        ],
        "region": "Europe",
        "subregion": "Southeast Europe",
        "languages": {
            "bos": "Bosnian",
            "hrv": "Croatian",
            "srp": "Serbian"
        },
        "translations": {
            "ara": {
                "official": "جمهورية البوسنة والهرسك",
                "common": "البوسنة والهرسك"
            },
            "ces": {
                "official": "Bosna a Hercegovina",
                "common": "Bosna a Hercegovina"
            },
            "cym": {
                "official": "Bosnia a Hercegovina",
                "common": "Bosnia a Hercegovina"
            },
            "deu": {
                "official": "Bosnien und Herzegowina",
                "common": "Bosnien und Herzegowina"
            },
            "est": {
                "official": "Bosnia ja Hertsegoviina",
                "common": "Bosnia ja Hertsegoviina"
            },
            "fin": {
                "official": "Bosnia ja Hertsegovina",
                "common": "Bosnia ja Hertsegovina"
            },
            "fra": {
                "official": "Bosnie-et-Herzégovine",
                "common": "Bosnie-Herzégovine"
            },
            "hrv": {
                "official": "Bosna i Hercegovina",
                "common": "Bosna i Hercegovina"
            },
            "hun": {
                "official": "Bosznia-Hercegovina",
                "common": "Bosznia-Hercegovina"
            },
            "ita": {
                "official": "Bosnia-Erzegovina",
                "common": "Bosnia ed Erzegovina"
            },
            "jpn": {
                "official": "ボスニア·ヘルツェゴビナ",
                "common": "ボスニア・ヘルツェゴビナ"
            },
            "kor": {
                "official": "보스니아 헤르체고비나",
                "common": "보스니아 헤르체고비나"
            },
            "nld": {
                "official": "Bosnië-Herzegovina",
                "common": "Bosnië en Herzegovina"
            },
            "per": {
                "official": "بوسنی و هرزگوین",
                "common": "بوسنی و هرزگوین"
            },
            "pol": {
                "official": "Bośnia i Hercegowina",
                "common": "Bośnia i Hercegowina"
            },
            "por": {
                "official": "Bósnia e Herzegovina",
                "common": "Bósnia e Herzegovina"
            },
            "rus": {
                "official": "Босния и Герцеговина",
                "common": "Босния и Герцеговина"
            },
            "slk": {
                "official": "Republika Bosny a Hercegoviny",
                "common": "Bosna a Hercegovina"
            },
            "spa": {
                "official": "Bosnia y Herzegovina",
                "common": "Bosnia y Herzegovina"
            },
            "swe": {
                "official": "Bosnien och Hercegovina",
                "common": "Bosnien och Hercegovina"
            },
            "urd": {
                "official": "بوسنیا و ہرزیگووینا",
                "common": "بوسنیا و ہرزیگووینا"
            },
            "zho": {
                "official": "波斯尼亚和黑塞哥维那",
                "common": "波斯尼亚和黑塞哥维那"
            }
        },
        "latlng": [
            44,
            18
        ],
        "landlocked": false,
        "borders": [
            "HRV",
            "MNE",
            "SRB"
        ],
        "area": 51209,
        "demonyms": {
            "eng": {
                "f": "Bosnian, Herzegovinian",
                "m": "Bosnian, Herzegovinian"
            },
            "fra": {
                "f": "Bosnienne",
                "m": "Bosnien"
            }
        },
        "flag": "🇧🇦",
        "maps": {
            "googleMaps": "https://www.google.com/maps/place/Bosnia+and+Herzegovina",
            "openStreetMaps": "https://www.openstreetmap.org/relation/2528142"
        },
        "population": 3280815,
        "gini": {
            "2011": 33
        },
        "fifa": "BIH",
        "car": {
            "signs": [
                "BIH"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/ba.png",
            "svg": "https://flagcdn.com/ba.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/ba.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/ba.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                43.87,
                18.42
            ]
        },
        "postalCode": {
            "format": "#####",
            "regex": "^(\\d{5})$"
        }
    },
    {
        "name": {
            "common": "Vatican City",
            "official": "Vatican City State",
            "nativeName": {
                "ita": {
                    "official": "Stato della Città del Vaticano",
                    "common": "Vaticano"
                },
                "lat": {
                    "official": "Status Civitatis Vaticanæ",
                    "common": "Vaticanæ"
                }
            }
        },
        "tld": [
            ".va"
        ],
        "cca2": "VA",
        "ccn3": "336",
        "cca3": "VAT",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "idd": {
            "root": "+3",
            "suffixes": [
                "906698",
                "79"
            ]
        },
        "capital": [
            "Vatican City"
        ],
        "altSpellings": [
            "VA",
            "Holy See (Vatican City State)",
            "Vatican City State",
            "Stato della Città del Vaticano"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ita": "Italian",
            "lat": "Latin"
        },
        "translations": {
            "ara": {
                "official": "دولة مدينة الفاتيكان",
                "common": "مدينة الفاتيكان"
            },
            "ces": {
                "official": "Městský stát Vatikán",
                "common": "Vatikán"
            },
            "cym": {
                "official": "Vatican City State",
                "common": "Vatican City"
            },
            "deu": {
                "official": "Staat Vatikanstadt",
                "common": "Vatikanstadt"
            },
            "est": {
                "official": "Vatikani Linnriik",
                "common": "Vatikan"
            },
            "fin": {
                "official": "Vatikaanin kaupunkivaltio",
                "common": "Vatikaani"
            },
            "fra": {
                "official": "Cité du Vatican",
                "common": "Cité du Vatican"
            },
            "hrv": {
                "official": "Vatikan",
                "common": "Vatikan"
            },
            "hun": {
                "official": "Vatikán Állam",
                "common": "Vatikán"
            },
            "ita": {
                "official": "Città del Vaticano",
                "common": "Città del Vaticano"
            },
            "jpn": {
                "official": "バチカン市国の状態",
                "common": "バチカン市国"
            },
            "kor": {
                "official": "바티칸 시국",
                "common": "바티칸"
            },
            "nld": {
                "official": "Vaticaanstad",
                "common": "Vaticaanstad"
            },
            "per": {
                "official": "دولت‌شهر واتیکان",
                "common": "واتیکان"
            },
            "pol": {
                "official": "Państwo Watykańskie",
                "common": "Watykan"
            },
            "por": {
                "official": "Cidade do Vaticano",
                "common": "Cidade do Vaticano"
            },
            "rus": {
                "official": "Город-государство Ватикан",
                "common": "Ватикан"
            },
            "slk": {
                "official": "Svätá stolica (Vatikánsky mestský štát",
                "common": "Vatikán"
            },
            "spa": {
                "official": "Ciudad del Vaticano",
                "common": "Ciudad del Vaticano"
            },
            "swe": {
                "official": "Vatikanstaten",
                "common": "Vatikanstaten"
            },
            "urd": {
                "official": "ویٹیکن سٹی",
                "common": "ویٹیکن سٹی"
            },
            "zho": {
                "official": "梵蒂冈城国",
                "common": "梵蒂冈"
            }
        },
        "latlng": [
            41.9,
            12.45
        ],
        "landlocked": true,
        "borders": [
            "ITA"
        ],
        "area": 0.44,
        "demonyms": {
            "eng": {
                "f": "Vatican",
                "m": "Vatican"
            },
            "fra": {
                "f": "Vaticane",
                "m": "Vatican"
            }
        },
        "flag": "🇻🇦",
        "maps": {
            "googleMaps": "https://goo.gl/maps/DTKvw5Bd1QZaDZmE8",
            "openStreetMaps": "https://www.openstreetmap.org/relation/36989"
        },
        "population": 451,
        "car": {
            "signs": [
                "V"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/va.png",
            "svg": "https://flagcdn.com/va.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/va.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/va.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                41.9,
                12.45
            ]
        }
    },
    {
        "name": {
            "common": "Svalbard and Jan Mayen",
            "official": "Svalbard og Jan Mayen",
            "nativeName": {
                "nor": {
                    "official": "Svalbard og Jan Mayen",
                    "common": "Svalbard og Jan Mayen"
                }
            }
        },
        "tld": [
            ".sj"
        ],
        "cca2": "SJ",
        "ccn3": "744",
        "cca3": "SJM",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
            "NOK": {
                "name": "krone",
                "symbol": "kr"
            }
        },
        "idd": {
            "root": "+4",
            "suffixes": [
                "779"
            ]
        },
        "capital": [
            "Longyearbyen"
        ],
        "altSpellings": [
            "SJ",
            "Svalbard and Jan Mayen Islands"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "nor": "Norwegian"
        },
        "translations": {
            "ara": {
                "official": "سفالبارد ويان ماين",
                "common": "سفالبارد ويان ماين"
            },
            "ces": {
                "official": "Špicberky a Jan Mayen",
                "common": "Špicberky a Jan Mayen"
            },
            "cym": {
                "official": "Svalbard og Jan Mayen",
                "common": "Svalbard and Jan Mayen"
            },
            "deu": {
                "official": "Spitzbergen und Jan Mayen",
                "common": "Spitzbergen und Jan Mayen"
            },
            "est": {
                "official": "Svalbard",
                "common": "Svalbard"
            },
            "fin": {
                "official": "Huippuvuoret",
                "common": "Huippuvuoret"
            },
            "fra": {
                "official": "Jan Mayen Svalbard",
                "common": "Svalbard et Jan Mayen"
            },
            "hrv": {
                "official": "Svalbard og Jan Mayen",
                "common": "Svalbard i Jan Mayen"
            },
            "hun": {
                "official": "Svalbard és Jan Mayen",
                "common": "Svalbard és Jan Mayen"
            },
            "ita": {
                "official": "Svalbard og Jan Mayen",
                "common": "Svalbard e Jan Mayen"
            },
            "jpn": {
                "official": "スバールバル諸島OGヤンマイエン",
                "common": "スヴァールバル諸島およびヤンマイエン島"
            },
            "kor": {
                "official": "스발바르 얀마옌 제도",
                "common": "스발바르 얀마옌 제도"
            },
            "nld": {
                "official": "Svalbard og Jan Mayen",
                "common": "Svalbard en Jan Mayen"
            },
            "per": {
                "official": "سوالبارد و یان ماین",
                "common": "سوالبارد و یان ماین"
            },
            "pol": {
                "official": "Svalbard i Jan Mayen",
                "common": "Svalbard i Jan Mayen"
            },
            "por": {
                "official": "Svalbard og Jan Mayen",
                "common": "Ilhas Svalbard e Jan Mayen"
            },
            "rus": {
                "official": "Свальбарда ог Ян-Майен",
                "common": "Шпицберген и Ян-Майен"
            },
            "slk": {
                "official": "Svalbard a Jan Mayen",
                "common": "Svalbard a Jan Mayen"
            },
            "spa": {
                "official": "Svalbard og Jan Mayen",
                "common": "Islas Svalbard y Jan Mayen"
            },
            "swe": {
                "official": "Svalbard och Jan Mayen",
                "common": "Svalbard och Jan Mayen"
            },
            "urd": {
                "official": "سوالبارڈ اور جان میئن",
                "common": "سوالبارڈ اور جان میئن"
            },
            "zho": {
                "official": "斯瓦尔巴特",
                "common": "斯瓦尔巴特"
            }
        },
        "latlng": [
            78,
            20
        ],
        "landlocked": false,
        "area": -1,
        "demonyms": {
            "eng": {
                "f": "Norwegian",
                "m": "Norwegian"
            }
        },
        "flag": "🇸🇯",
        "maps": {
            "googleMaps": "https://goo.gl/maps/L2wyyn3cQ16PzQ5J8",
            "openStreetMaps": "https://www.openstreetmap.org/relation/1337397"
        },
        "population": 2562,
        "car": {
            "signs": [
                "N"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/sj.png",
            "svg": "https://flagcdn.com/sj.svg"
        },
        "coatOfArms": {},
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                78.22,
                15.63
            ]
        }
    },
    {
        "name": {
            "common": "Bolivia",
            "official": "Plurinational State of Bolivia",
            "nativeName": {
                "aym": {
                    "official": "Wuliwya Suyu",
                    "common": "Wuliwya"
                },
                "grn": {
                    "official": "Tetã Volívia",
                    "common": "Volívia"
                },
                "que": {
                    "official": "Buliwya Mamallaqta",
                    "common": "Buliwya"
                },
                "spa": {
                    "official": "Estado Plurinacional de Bolivia",
                    "common": "Bolivia"
                }
            }
        },
        "tld": [
            ".bo"
        ],
        "cca2": "BO",
        "ccn3": "068",
        "cca3": "BOL",
        "cioc": "BOL",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "BOB": {
                "name": "Bolivian boliviano",
                "symbol": "Bs."
            }
        },
        "idd": {
            "root": "+5",
            "suffixes": [
                "91"
            ]
        },
        "capital": [
            "Sucre"
        ],
        "altSpellings": [
            "BO",
            "Buliwya",
            "Wuliwya",
            "Bolivia, Plurinational State of",
            "Plurinational State of Bolivia",
            "Estado Plurinacional de Bolivia",
            "Buliwya Mamallaqta",
            "Wuliwya Suyu",
            "Tetã Volívia"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "aym": "Aymara",
            "grn": "Guaraní",
            "que": "Quechua",
            "spa": "Spanish"
        },
        "translations": {
            "ara": {
                "official": "دولة بوليفيا المتعددة القوميات",
                "common": "بوليفيا"
            },
            "ces": {
                "official": "Mnohonárodnostní stát Bolívie",
                "common": "Bolívie"
            },
            "cym": {
                "official": "Gweriniaeth Bolifia",
                "common": "Bolifia"
            },
            "deu": {
                "official": "Plurinationaler Staat Bolivien",
                "common": "Bolivien"
            },
            "est": {
                "official": "Boliivia Paljurahvuseline Riik",
                "common": "Boliivia"
            },
            "fin": {
                "official": "Bolivian monikansainen valtio",
                "common": "Bolivia"
            },
            "fra": {
                "official": "État plurinational de Bolivie",
                "common": "Bolivie"
            },
            "hrv": {
                "official": "Plurinational State of Bolivia",
                "common": "Bolivija"
            },
            "hun": {
                "official": "Bolíviai Többnemzetiségű Állam",
                "common": "Bolívia"
            },
            "ita": {
                "official": "Stato Plurinazionale della Bolivia",
                "common": "Bolivia"
            },
            "jpn": {
                "official": "ボリビアの多民族国",
                "common": "ボリビア多民族国"
            },
            "kor": {
                "official": "볼리비아 다민족국",
                "common": "볼리비아"
            },
            "nld": {
                "official": "Plurinationale Staat van Bolivia",
                "common": "Bolivia"
            },
            "per": {
                "official": "جمهوری بولیوی",
                "common": "بولیوی"
            },
            "pol": {
                "official": "Wielonarodowe Państwo Boliwia",
                "common": "Boliwia"
            },
            "por": {
                "official": "Estado Plurinacional da Bolívia",
                "common": "Bolívia"
            },
            "rus": {
                "official": "Многонациональное Государство Боливия",
                "common": "Боливия"
            },
            "slk": {
                "official": "Bolívijská republika",
                "common": "Bolívia"
            },
            "spa": {
                "official": "Estado Plurinacional de Bolivia",
                "common": "Bolivia"
            },
            "swe": {
                "official": "Mångnationella staten Bolivia",
                "common": "Bolivia"
            },
            "urd": {
                "official": "جمہوریہ بولیویا",
                "common": "بولیویا"
            },
            "zho": {
                "official": "多民族玻利维亚国",
                "common": "玻利维亚"
            }
        },
        "latlng": [
            -17,
            -65
        ],
        "landlocked": true,
        "borders": [
            "ARG",
            "BRA",
            "CHL",
            "PRY",
            "PER"
        ],
        "area": 1098581,
        "demonyms": {
            "eng": {
                "f": "Bolivian",
                "m": "Bolivian"
            },
            "fra": {
                "f": "Bolivienne",
                "m": "Bolivien"
            }
        },
        "flag": "🇧🇴",
        "maps": {
            "googleMaps": "https://goo.gl/maps/9DfnyfbxNM2g5U9b9",
            "openStreetMaps": "https://www.openstreetmap.org/relation/252645"
        },
        "population": 11673029,
        "gini": {
            "2019": 41.6
        },
        "fifa": "BOL",
        "car": {
            "signs": [
                "BOL"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC-04:00"
        ],
        "continents": [
            "South America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/bo.png",
            "svg": "https://flagcdn.com/bo.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/bo.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/bo.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                -19.02,
                -65.26
            ]
        }
    },
    {
        "name": {
            "common": "Tuvalu",
            "official": "Tuvalu",
            "nativeName": {
                "eng": {
                    "official": "Tuvalu",
                    "common": "Tuvalu"
                },
                "tvl": {
                    "official": "Tuvalu",
                    "common": "Tuvalu"
                }
            }
        },
        "tld": [
            ".tv"
        ],
        "cca2": "TV",
        "ccn3": "798",
        "cca3": "TUV",
        "cioc": "TUV",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            },
            "TVD": {
                "name": "Tuvaluan dollar",
                "symbol": "$"
            }
        },
        "idd": {
            "root": "+6",
            "suffixes": [
                "88"
            ]
        },
        "capital": [
            "Funafuti"
        ],
        "altSpellings": [
            "TV"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "tvl": "Tuvaluan"
        },
        "translations": {
            "ara": {
                "official": "توفالو",
                "common": "توفالو"
            },
            "ces": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "cym": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "deu": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "est": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "fin": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "fra": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "hrv": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "hun": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "ita": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "jpn": {
                "official": "ツバル",
                "common": "ツバル"
            },
            "kor": {
                "official": "투발루",
                "common": "투발루"
            },
            "nld": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "per": {
                "official": "تووالو",
                "common": "تووالو"
            },
            "pol": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "por": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "rus": {
                "official": "Тувалу",
                "common": "Тувалу"
            },
            "slk": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "spa": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "swe": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "urd": {
                "official": "تووالو",
                "common": "تووالو"
            },
            "zho": {
                "official": "图瓦卢",
                "common": "图瓦卢"
            }
        },
        "latlng": [
            -8,
            178
        ],
        "landlocked": false,
        "area": 26,
        "demonyms": {
            "eng": {
                "f": "Tuvaluan",
                "m": "Tuvaluan"
            },
            "fra": {
                "f": "Tuvaluane",
                "m": "Tuvaluan"
            }
        },
        "flag": "🇹🇻",
        "maps": {
            "googleMaps": "https://goo.gl/maps/LbuUxtkgm1dfN1Pn6",
            "openStreetMaps": "https://www.openstreetmap.org/relation/2177266"
        },
        "population": 11792,
        "gini": {
            "2010": 39.1
        },
        "car": {
            "signs": [
                "TUV"
            ],
            "side": "left"
        },
        "timezones": [
            "UTC+12:00"
        ],
        "continents": [
            "Oceania"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/tv.png",
            "svg": "https://flagcdn.com/tv.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/tv.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/tv.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                -8.52,
                179.22
            ]
        }
    },
    {
        "name": {
            "common": "Ivory Coast",
            "official": "Republic of Côte d'Ivoire",
            "nativeName": {
                "fra": {
                    "official": "République de Côte d'Ivoire",
                    "common": "Côte d'Ivoire"
                }
            }
        },
        "tld": [
            ".ci"
        ],
        "cca2": "CI",
        "ccn3": "384",
        "cca3": "CIV",
        "cioc": "CIV",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "idd": {
            "root": "+2",
            "suffixes": [
                "25"
            ]
        },
        "capital": [
            "Yamoussoukro"
        ],
        "altSpellings": [
            "CI",
            "Côte d'Ivoire",
            "Ivory Coast",
            "Republic of Côte d'Ivoire",
            "République de Côte d'Ivoire"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ara": {
                "official": "جمهورية ساحل العاج",
                "common": "ساحل العاج"
            },
            "ces": {
                "official": "Republika Pobřeží slonoviny",
                "common": "Pobřeží slonoviny"
            },
            "cym": {
                "official": "Republic of Côte d'Ivoire",
                "common": "Ivory Coast"
            },
            "deu": {
                "official": "Republik Côte d'Ivoire",
                "common": "Elfenbeinküste"
            },
            "est": {
                "official": "Côte d’Ivoire’i Vabariik",
                "common": "Elevandiluurannik"
            },
            "fin": {
                "official": "Norsunluurannikon tasavalta",
                "common": "Norsunluurannikko"
            },
            "fra": {
                "official": "République de Côte d' Ivoire",
                "common": "Côte d'Ivoire"
            },
            "hrv": {
                "official": "Republika Côte d'Ivoire",
                "common": "Obala Bjelokosti"
            },
            "hun": {
                "official": "Elefántcsontparti Köztársaság",
                "common": "Elefántcsontpart"
            },
            "ita": {
                "official": "Repubblica della Costa d'Avorio",
                "common": "Costa d'Avorio"
            },
            "jpn": {
                "official": "コートジボワール共和国",
                "common": "コートジボワール"
            },
            "kor": {
                "official": "코트디부아르 공화국",
                "common": "코트디부아르"
            },
            "nld": {
                "official": "Republiek Ivoorkust",
                "common": "Ivoorkust"
            },
            "per": {
                "official": "جمهوری ساحل عاج",
                "common": "ساحل عاج"
            },
            "pol": {
                "official": "Republika WybrzeŻa Kości Słoniowej",
                "common": "WybrzeŻe Kości Słoniowej"
            },
            "por": {
                "official": "República da Côte d'Ivoire",
                "common": "Costa do Marfim"
            },
            "rus": {
                "official": "Республика Кот-д'Ивуаре",
                "common": "Кот-д’Ивуар"
            },
            "slk": {
                "official": "Republika Pobrežie Slonoviny",
                "common": "Pobržie Slonoviny"
            },
            "spa": {
                "official": "República de Côte d'Ivoire",
                "common": "Costa de Marfil"
            },
            "swe": {
                "official": "Republiken Elfenbenskusten",
                "common": "Elfenbenskusten"
            },
            "urd": {
                "official": "جمہوریہ کوت دیواغ",
                "common": "آئیوری کوسٹ"
            },
            "zho": {
                "official": "科特迪瓦共和国",
                "common": "科特迪瓦"
            }
        },
        "latlng": [
            8,
            -5
        ],
        "landlocked": false,
        "borders": [
            "BFA",
            "GHA",
            "GIN",
            "LBR",
            "MLI"
        ],
        "area": 322463,
        "demonyms": {
            "eng": {
                "f": "Ivorian",
                "m": "Ivorian"
            },
            "fra": {
                "f": "Ivoirienne",
                "m": "Ivoirien"
            }
        },
        "flag": "🇨🇮",
        "maps": {
            "googleMaps": "https://goo.gl/maps/wKsmN7f5qAeNtGjP6",
            "openStreetMaps": "https://www.openstreetmap.org/relation/192779"
        },
        "population": 26378275,
        "gini": {
            "2015": 41.5
        },
        "fifa": "CIV",
        "car": {
            "signs": [
                "CI"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC"
        ],
        "continents": [
            "Africa"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/ci.png",
            "svg": "https://flagcdn.com/ci.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/ci.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/ci.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                6.82,
                -5.27
            ]
        }
    },
    {
        "name": {
            "common": "Slovenia",
            "official": "Republic of Slovenia",
            "nativeName": {
                "slv": {
                    "official": "Republika Slovenija",
                    "common": "Slovenija"
                }
            }
        },
        "tld": [
            ".si"
        ],
        "cca2": "SI",
        "ccn3": "705",
        "cca3": "SVN",
        "cioc": "SLO",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "idd": {
            "root": "+3",
            "suffixes": [
                "86"
            ]
        },
        "capital": [
            "Ljubljana"
        ],
        "altSpellings": [
            "SI",
            "Republic of Slovenia",
            "Republika Slovenija"
        ],
        "region": "Europe",
        "subregion": "Central Europe",
        "languages": {
            "slv": "Slovene"
        },
        "translations": {
            "ara": {
                "official": "جمهورية سلوفينيا",
                "common": "سلوفينيا"
            },
            "ces": {
                "official": "Slovinská republika",
                "common": "Slovinsko"
            },
            "cym": {
                "official": "Republic of Slovenia",
                "common": "Slovenia"
            },
            "deu": {
                "official": "Republik Slowenien",
                "common": "Slowenien"
            },
            "est": {
                "official": "Sloveenia Vabariik",
                "common": "Sloveenia"
            },
            "fin": {
                "official": "Slovenian tasavalta",
                "common": "Slovenia"
            },
            "fra": {
                "official": "République de Slovénie",
                "common": "Slovénie"
            },
            "hrv": {
                "official": "Republika Slovenija",
                "common": "Slovenija"
            },
            "hun": {
                "official": "Szlovén Köztársaság",
                "common": "Szlovénia"
            },
            "ita": {
                "official": "Repubblica di Slovenia",
                "common": "Slovenia"
            },
            "jpn": {
                "official": "スロベニア共和国",
                "common": "スロベニア"
            },
            "kor": {
                "official": "슬로베니아 공화국",
                "common": "슬로베니아"
            },
            "nld": {
                "official": "Republiek Slovenië",
                "common": "Slovenië"
            },
            "per": {
                "official": "جمهوری اسلوونی",
                "common": "اسلوونی"
            },
            "pol": {
                "official": "Republika Słowenii",
                "common": "Słowenia"
            },
            "por": {
                "official": "República da Eslovénia",
                "common": "Eslovénia"
            },
            "rus": {
                "official": "Республика Словения",
                "common": "Словения"
            },
            "slk": {
                "official": "Slovinská republika",
                "common": "Slovinsko"
            },
            "spa": {
                "official": "República de Eslovenia",
                "common": "Eslovenia"
            },
            "swe": {
                "official": "Republiken Slovenien",
                "common": "Slovenien"
            },
            "urd": {
                "official": "جمہوریہ سلووینیا",
                "common": "سلووینیا"
            },
            "zho": {
                "official": "斯洛文尼亚共和国",
                "common": "斯洛文尼亚"
            }
        },
        "latlng": [
            46.11666666,
            14.81666666
        ],
        "landlocked": false,
        "borders": [
            "AUT",
            "HRV",
            "ITA",
            "HUN"
        ],
        "area": 20273,
        "demonyms": {
            "eng": {
                "f": "Slovene",
                "m": "Slovene"
            },
            "fra": {
                "f": "Slovène",
                "m": "Slovène"
            }
        },
        "flag": "🇸🇮",
        "maps": {
            "googleMaps": "https://goo.gl/maps/7zgFmswcCJh5L5D49",
            "openStreetMaps": "https://www.openstreetmap.org/relation/218657"
        },
        "population": 2100126,
        "gini": {
            "2018": 24.6
        },
        "fifa": "SVN",
        "car": {
            "signs": [
                "SLO"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/si.png",
            "svg": "https://flagcdn.com/si.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/si.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/si.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                46.05,
                14.52
            ]
        },
        "postalCode": {
            "format": "SI- ####",
            "regex": "^(?:SI)*(\\d{4})$"
        }
    },
    {
        "name": {
            "common": "Moldova",
            "official": "Republic of Moldova",
            "nativeName": {
                "ron": {
                    "official": "Republica Moldova",
                    "common": "Moldova"
                }
            }
        },
        "tld": [
            ".md"
        ],
        "cca2": "MD",
        "ccn3": "498",
        "cca3": "MDA",
        "cioc": "MDA",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "MDL": {
                "name": "Moldovan leu",
                "symbol": "L"
            }
        },
        "idd": {
            "root": "+3",
            "suffixes": [
                "73"
            ]
        },
        "capital": [
            "Chișinău"
        ],
        "altSpellings": [
            "MD",
            "Moldova, Republic of",
            "Republic of Moldova",
            "Republica Moldova"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ron": "Moldavian"
        },
        "translations": {
            "ara": {
                "official": "جمهورية مولدوڤا",
                "common": "مولدوڤا"
            },
            "ces": {
                "official": "Moldavská republika",
                "common": "Moldavsko"
            },
            "cym": {
                "official": "Republic of Moldova",
                "common": "Moldova"
            },
            "deu": {
                "official": "Republik Moldau",
                "common": "Moldawien"
            },
            "est": {
                "official": "Moldova Vabariik",
                "common": "Moldova"
            },
            "fin": {
                "official": "Moldovan tasavalta",
                "common": "Moldova"
            },
            "fra": {
                "official": "République de Moldavie",
                "common": "Moldavie"
            },
            "hrv": {
                "official": "Moldavija",
                "common": "Moldova"
            },
            "hun": {
                "official": "Moldovai Köztársaság",
                "common": "Moldova"
            },
            "ita": {
                "official": "Repubblica di Moldova",
                "common": "Moldavia"
            },
            "jpn": {
                "official": "モルドバ共和国",
                "common": "モルドバ共和国"
            },
            "kor": {
                "official": "몰도바 공화국",
                "common": "몰도바"
            },
            "nld": {
                "official": "Republiek Moldavië",
                "common": "Moldavië"
            },
            "per": {
                "official": "جمهوری مولداوی",
                "common": "مولداوی"
            },
            "pol": {
                "official": "Republika Mołdawii",
                "common": "Mołdawia"
            },
            "por": {
                "official": "República da Moldávia",
                "common": "Moldávia"
            },
            "rus": {
                "official": "Молдова",
                "common": "Молдавия"
            },
            "slk": {
                "official": "Moldavská republika",
                "common": "Moldavsko"
            },
            "spa": {
                "official": "República de Moldova",
                "common": "Moldavia"
            },
            "swe": {
                "official": "Republiken Moldavien",
                "common": "Moldavien"
            },
            "urd": {
                "official": "جمہوریہ مالدووا",
                "common": "مالدووا"
            },
            "zho": {
                "official": "摩尔多瓦共和国",
                "common": "摩尔多瓦"
            }
        },
        "latlng": [
            47,
            29
        ],
        "landlocked": true,
        "borders": [
            "ROU",
            "UKR"
        ],
        "area": 33846,
        "demonyms": {
            "eng": {
                "f": "Moldovan",
                "m": "Moldovan"
            },
            "fra": {
                "f": "Moldave",
                "m": "Moldave"
            }
        },
        "flag": "🇲🇩",
        "maps": {
            "googleMaps": "https://goo.gl/maps/JjmyUuULujnDeFPf7",
            "openStreetMaps": "https://www.openstreetmap.org/relation/58974"
        },
        "population": 2617820,
        "gini": {
            "2018": 25.7
        },
        "fifa": "MDA",
        "car": {
            "signs": [
                "MD"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+02:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/md.png",
            "svg": "https://flagcdn.com/md.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/md.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/md.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                47.01,
                28.9
            ]
        },
        "postalCode": {
            "format": "MD-####",
            "regex": "^(?:MD)*(\\d{4})$"
        }
    },
    {
        "name": {
            "common": "Saint Vincent and the Grenadines",
            "official": "Saint Vincent and the Grenadines",
            "nativeName": {
                "eng": {
                    "official": "Saint Vincent and the Grenadines",
                    "common": "Saint Vincent and the Grenadines"
                }
            }
        },
        "tld": [
            ".vc"
        ],
        "cca2": "VC",
        "ccn3": "670",
        "cca3": "VCT",
        "cioc": "VIN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "idd": {
            "root": "+1",
            "suffixes": [
                "784"
            ]
        },
        "capital": [
            "Kingstown"
        ],
        "altSpellings": [
            "VC"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ara": {
                "official": "سانت فينسنت والغرينادين",
                "common": "سانت فينسنت والغرينادين"
            },
            "ces": {
                "official": "Svatý Vincenc a Grenadiny",
                "common": "Svatý Vincenc a Grenadiny"
            },
            "cym": {
                "official": "Saint Vincent and the Grenadines",
                "common": "Saint Vincent and the Grenadines"
            },
            "deu": {
                "official": "St. Vincent und die Grenadinen",
                "common": "St. Vincent und die Grenadinen"
            },
            "est": {
                "official": "Saint Vincent ja Grenadiinid",
                "common": "Saint Vincent"
            },
            "fin": {
                "official": "Saint Vincent ja Grenadiinit",
                "common": "Saint Vincent ja Grenadiinit"
            },
            "fra": {
                "official": "Saint-Vincent-et-les Grenadines",
                "common": "Saint-Vincent-et-les-Grenadines"
            },
            "hrv": {
                "official": "Sveti Vincent i Grenadini",
                "common": "Sveti Vincent i Grenadini"
            },
            "hun": {
                "official": "Saint Vincent és a Grenadine-szigetek",
                "common": "Saint Vincent és a Grenadine-szigetek"
            },
            "ita": {
                "official": "Saint Vincent e Grenadine",
                "common": "Saint Vincent e Grenadine"
            },
            "jpn": {
                "official": "セントビンセントおよびグレナディーン諸島",
                "common": "セントビンセントおよびグレナディーン諸島"
            },
            "kor": {
                "official": "세인트빈센트 그레나딘",
                "common": "세인트빈센트 그레나딘"
            },
            "nld": {
                "official": "Saint Vincent en de Grenadines",
                "common": "Saint Vincent en de Grenadines"
            },
            "per": {
                "official": "سنت وینسنت و گرنادین‌ها",
                "common": "سنت وینسنت و گرنادین‌ها"
            },
            "pol": {
                "official": "Saint Vincent i Grenadyny",
                "common": "Saint Vincent i Grenadyny"
            },
            "por": {
                "official": "São Vicente e Granadinas",
                "common": "São Vincente e Granadinas"
            },
            "rus": {
                "official": "Сент-Винсент и Гренадины",
                "common": "Сент-Винсент и Гренадины"
            },
            "slk": {
                "official": "Svätý Vincent a Grenadíny",
                "common": "Svätý Vincent a Grenadíny"
            },
            "spa": {
                "official": "San Vicente y las Granadinas",
                "common": "San Vicente y Granadinas"
            },
            "swe": {
                "official": "Saint Vincent och Grenadinerna",
                "common": "Saint Vincent och Grenadinerna"
            },
            "urd": {
                "official": "سینٹ وینسینٹ و گریناڈائنز",
                "common": "سینٹ وینسینٹ و گریناڈائنز"
            },
            "zho": {
                "official": "圣文森特和格林纳丁斯",
                "common": "圣文森特和格林纳丁斯"
            }
        },
        "latlng": [
            13.25,
            -61.2
        ],
        "landlocked": false,
        "area": 389,
        "demonyms": {
            "eng": {
                "f": "Saint Vincentian",
                "m": "Saint Vincentian"
            },
            "fra": {
                "f": "Vincentaise",
                "m": "Vincentais"
            }
        },
        "flag": "🇻🇨",
        "maps": {
            "googleMaps": "https://goo.gl/maps/wMbnMqjG37FMnrwf7",
            "openStreetMaps": "https://www.openstreetmap.org/relation/550725"
        },
        "population": 110947,
        "fifa": "VIN",
        "car": {
            "signs": [
                "WV"
            ],
            "side": "left"
        },
        "timezones": [
            "UTC-04:00"
        ],
        "continents": [
            "North America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/vc.png",
            "svg": "https://flagcdn.com/vc.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/vc.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/vc.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                13.13,
                -61.22
            ]
        }
    },
    {
        "name": {
            "common": "El Salvador",
            "official": "Republic of El Salvador",
            "nativeName": {
                "spa": {
                    "official": "República de El Salvador",
                    "common": "El Salvador"
                }
            }
        },
        "tld": [
            ".sv"
        ],
        "cca2": "SV",
        "ccn3": "222",
        "cca3": "SLV",
        "cioc": "ESA",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "idd": {
            "root": "+5",
            "suffixes": [
                "03"
            ]
        },
        "capital": [
            "San Salvador"
        ],
        "altSpellings": [
            "SV",
            "Republic of El Salvador",
            "República de El Salvador"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ara": {
                "official": "جمهورية السلفادور",
                "common": "السلفادور"
            },
            "ces": {
                "official": "Salvadorská republika",
                "common": "Salvador"
            },
            "cym": {
                "official": "Gweriniaeth El Salfador",
                "common": "El Salfador"
            },
            "deu": {
                "official": "Republik El Salvador",
                "common": "El Salvador"
            },
            "est": {
                "official": "El Salvadori Vabariik",
                "common": "El Salvador"
            },
            "fin": {
                "official": "El Salvadorin tasavalta",
                "common": "El Salvador"
            },
            "fra": {
                "official": "République du Salvador",
                "common": "Salvador"
            },
            "hrv": {
                "official": "Republika El Salvador",
                "common": "Salvador"
            },
            "hun": {
                "official": "Salvadori Köztársaság",
                "common": "Salvador"
            },
            "ita": {
                "official": "Repubblica di El Salvador",
                "common": "El Salvador"
            },
            "jpn": {
                "official": "エルサルバドル共和国",
                "common": "エルサルバドル"
            },
            "kor": {
                "official": "엘살바도르 공화국",
                "common": "엘살바도르"
            },
            "nld": {
                "official": "Republiek El Salvador",
                "common": "El Salvador"
            },
            "per": {
                "official": "جمهوری السالوادور",
                "common": "السالوادور"
            },
            "pol": {
                "official": "Republika Salwadoru",
                "common": "Salwador"
            },
            "por": {
                "official": "República de El Salvador",
                "common": "El Salvador"
            },
            "rus": {
                "official": "Республика Эль-Сальвадор",
                "common": "Сальвадор"
            },
            "slk": {
                "official": "Salvádorská republika",
                "common": "Salvádor"
            },
            "spa": {
                "official": "República de El Salvador",
                "common": "El Salvador"
            },
            "swe": {
                "official": "Republiken El Salvador",
                "common": "El Salvador"
            },
            "urd": {
                "official": "جمہوریہ ایل سیلواڈور",
                "common": "ایل سیلواڈور"
            },
            "zho": {
                "official": "萨尔瓦多共和国",
                "common": "萨尔瓦多"
            }
        },
        "latlng": [
            13.83333333,
            -88.91666666
        ],
        "landlocked": false,
        "borders": [
            "GTM",
            "HND"
        ],
        "area": 21041,
        "demonyms": {
            "eng": {
                "f": "Salvadoran",
                "m": "Salvadoran"
            },
            "fra": {
                "f": "Salvadorienne",
                "m": "Salvadorien"
            }
        },
        "flag": "🇸🇻",
        "maps": {
            "googleMaps": "https://goo.gl/maps/cZnCEi5sEMQtKKcB7",
            "openStreetMaps": "https://www.openstreetmap.org/relation/1520612"
        },
        "population": 6486201,
        "gini": {
            "2019": 38.8
        },
        "fifa": "SLV",
        "car": {
            "signs": [
                "ES"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC-06:00"
        ],
        "continents": [
            "North America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/sv.png",
            "svg": "https://flagcdn.com/sv.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/sv.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/sv.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                13.7,
                -89.2
            ]
        },
        "postalCode": {
            "format": "CP ####",
            "regex": "^(?:CP)*(\\d{4})$"
        }
    },
    {
        "name": {
            "common": "Vietnam",
            "official": "Socialist Republic of Vietnam",
            "nativeName": {
                "vie": {
                    "official": "Cộng hòa xã hội chủ nghĩa Việt Nam",
                    "common": "Việt Nam"
                }
            }
        },
        "tld": [
            ".vn"
        ],
        "cca2": "VN",
        "ccn3": "704",
        "cca3": "VNM",
        "cioc": "VIE",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "VND": {
                "name": "Vietnamese đồng",
                "symbol": "₫"
            }
        },
        "idd": {
            "root": "+8",
            "suffixes": [
                "4"
            ]
        },
        "capital": [
            "Hanoi"
        ],
        "altSpellings": [
            "VN",
            "Socialist Republic of Vietnam",
            "Cộng hòa Xã hội chủ nghĩa Việt Nam",
            "Viet Nam"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "vie": "Vietnamese"
        },
        "translations": {
            "ara": {
                "official": "جمهورية فيتنام الاشتراكية",
                "common": "فيتنام"
            },
            "ces": {
                "official": "Vietnamská socialistická republika",
                "common": "Vietnam"
            },
            "cym": {
                "official": "Socialist Republic of Vietnam",
                "common": "Vietnam"
            },
            "deu": {
                "official": "Sozialistische Republik Vietnam",
                "common": "Vietnam"
            },
            "est": {
                "official": "Vietnami Sotsialistlik Vabariik",
                "common": "Vietnam"
            },
            "fin": {
                "official": "Vietnamin sosialistinen tasavalta",
                "common": "Vietnam"
            },
            "fra": {
                "official": "République socialiste du Viêt Nam",
                "common": "Viêt Nam"
            },
            "hrv": {
                "official": "Socijalistička Republika Vijetnam",
                "common": "Vijetnam"
            },
            "hun": {
                "official": "Vietnámi Szocialista Köztársaság",
                "common": "Vietnám"
            },
            "ita": {
                "official": "Repubblica socialista del Vietnam",
                "common": "Vietnam"
            },
            "jpn": {
                "official": "ベトナム社会主義共和国",
                "common": "ベトナム"
            },
            "kor": {
                "official": "베트남 사회주의 공화국",
                "common": "베트남"
            },
            "nld": {
                "official": "Socialistische Republiek Vietnam",
                "common": "Vietnam"
            },
            "per": {
                "official": "جمهوری سوسیالیستی ویتنام",
                "common": "ویتنام"
            },
            "pol": {
                "official": "Socjalistyczna Republika Wietnamu",
                "common": "Wietnam"
            },
            "por": {
                "official": "República Socialista do Vietname",
                "common": "Vietname"
            },
            "rus": {
                "official": "Социалистическая Республика Вьетнам",
                "common": "Вьетнам"
            },
            "slk": {
                "official": "Vietnamská socialistická republika",
                "common": "Vietnam"
            },
            "spa": {
                "official": "República Socialista de Vietnam",
                "common": "Vietnam"
            },
            "swe": {
                "official": "Socialistiska republiken Vietnam",
                "common": "Vietnam"
            },
            "urd": {
                "official": "اشتراکی جمہوریہ ویتنام",
                "common": "ویتنام"
            },
            "zho": {
                "official": "越南社会主义共和国",
                "common": "越南"
            }
        },
        "latlng": [
            16.16666666,
            107.83333333
        ],
        "landlocked": false,
        "borders": [
            "KHM",
            "CHN",
            "LAO"
        ],
        "area": 331212,
        "demonyms": {
            "eng": {
                "f": "Vietnamese",
                "m": "Vietnamese"
            },
            "fra": {
                "f": "Vietnamienne",
                "m": "Vietnamien"
            }
        },
        "flag": "🇻🇳",
        "maps": {
            "googleMaps": "https://goo.gl/maps/PCpVt9WzdJ9A9nEZ9",
            "openStreetMaps": "https://www.openstreetmap.org/relation/49915"
        },
        "population": 97338583,
        "gini": {
            "2018": 35.7
        },
        "fifa": "VIE",
        "car": {
            "signs": [
                "VN"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+07:00"
        ],
        "continents": [
            "Asia"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/vn.png",
            "svg": "https://flagcdn.com/vn.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/vn.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/vn.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                21.03,
                105.85
            ]
        },
        "postalCode": {
            "format": "######",
            "regex": "^(\\d{6})$"
        }
    },
    {
        "name": {
            "common": "Cape Verde",
            "official": "Republic of Cabo Verde",
            "nativeName": {
                "por": {
                    "official": "República de Cabo Verde",
                    "common": "Cabo Verde"
                }
            }
        },
        "tld": [
            ".cv"
        ],
        "cca2": "CV",
        "ccn3": "132",
        "cca3": "CPV",
        "cioc": "CPV",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "CVE": {
                "name": "Cape Verdean escudo",
                "symbol": "Esc"
            }
        },
        "idd": {
            "root": "+2",
            "suffixes": [
                "38"
            ]
        },
        "capital": [
            "Praia"
        ],
        "altSpellings": [
            "CV",
            "Republic of Cabo Verde",
            "República de Cabo Verde"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "ara": {
                "official": "جمهورية كابو فيردي",
                "common": "كابو فيردي"
            },
            "ces": {
                "official": "Kapverdská republika",
                "common": "Kapverdy"
            },
            "cym": {
                "official": "Gweriniaeth Cabo Verde",
                "common": "Penrhyn Verde"
            },
            "deu": {
                "official": "Republik Cabo Verde",
                "common": "Kap Verde"
            },
            "est": {
                "official": "Cabo Verde Vabariik",
                "common": "Roheneemesaared"
            },
            "fin": {
                "official": "Kap Verden tasavalta",
                "common": "Kap Verde"
            },
            "fra": {
                "official": "République du Cap-Vert",
                "common": "Îles du Cap-Vert"
            },
            "hrv": {
                "official": "Republika Cabo Verde",
                "common": "Zelenortska Republika"
            },
            "hun": {
                "official": "Zöld-foki Köztársaság",
                "common": "Zöld-foki Köztársaság"
            },
            "ita": {
                "official": "Repubblica di Capo Verde",
                "common": "Capo Verde"
            },
            "jpn": {
                "official": "カーボベルデ共和国",
                "common": "カーボベルデ"
            },
            "kor": {
                "official": "카보베르데 공화국",
                "common": "카보베르데"
            },
            "nld": {
                "official": "Republiek van Cabo Verde",
                "common": "Kaapverdië"
            },
            "per": {
                "official": "جمهوری کبو ورد",
                "common": "دماغهٔ سبز"
            },
            "pol": {
                "official": "Republika Zielonego Przylądka",
                "common": "Republika Zielonego Przylądka"
            },
            "por": {
                "official": "República de Cabo Verde",
                "common": "Cabo Verde"
            },
            "rus": {
                "official": "Республика Кабо -Верде",
                "common": "Кабо-Верде"
            },
            "slk": {
                "official": "Kapverdská republika",
                "common": "Kapverdy"
            },
            "spa": {
                "official": "República de Cabo Verde",
                "common": "Cabo Verde"
            },
            "swe": {
                "official": "Republiken Kap Verde",
                "common": "Kap Verde"
            },
            "urd": {
                "official": "جمہوریہ کیپ ورڈی",
                "common": "کیپ ورڈی"
            },
            "zho": {
                "official": "佛得角共和国",
                "common": "佛得角"
            }
        },
        "latlng": [
            16,
            -24
        ],
        "landlocked": false,
        "area": 4033,
        "demonyms": {
            "eng": {
                "f": "Cape Verdian",
                "m": "Cape Verdian"
            },
            "fra": {
                "f": "Cap-verdienne",
                "m": "Cap-verdien"
            }
        },
        "flag": "🇨🇻",
        "maps": {
            "googleMaps": "https://goo.gl/maps/Kc9vy5ChjuiAgMfXA",
            "openStreetMaps": "https://www.openstreetmap.org/relation/535774"
        },
        "population": 555988,
        "gini": {
            "2015": 42.4
        },
        "fifa": "CPV",
        "car": {
            "signs": [
                "CV"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC-01:00"
        ],
        "continents": [
            "Africa"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/cv.png",
            "svg": "https://flagcdn.com/cv.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/cv.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/cv.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                14.92,
                -23.52
            ]
        },
        "postalCode": {
            "format": "####",
            "regex": "^(\\d{4})$"
        }
    },
    {
        "name": {
            "common": "Maldives",
            "official": "Republic of the Maldives",
            "nativeName": {
                "div": {
                    "official": "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
                    "common": "ދިވެހިރާއްޖޭގެ"
                }
            }
        },
        "tld": [
            ".mv"
        ],
        "cca2": "MV",
        "ccn3": "462",
        "cca3": "MDV",
        "cioc": "MDV",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "MVR": {
                "name": "Maldivian rufiyaa",
                "symbol": ".ރ"
            }
        },
        "idd": {
            "root": "+9",
            "suffixes": [
                "60"
            ]
        },
        "capital": [
            "Malé"
        ],
        "altSpellings": [
            "MV",
            "Maldive Islands",
            "Republic of the Maldives",
            "Dhivehi Raajjeyge Jumhooriyya"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "div": "Maldivian"
        },
        "translations": {
            "ara": {
                "official": "جمهورية المالديف",
                "common": "المالديف"
            },
            "ces": {
                "official": "Maledivská republika",
                "common": "Maledivy"
            },
            "cym": {
                "official": "Republic of the Maldives",
                "common": "Maldives"
            },
            "deu": {
                "official": "Republik Malediven",
                "common": "Malediven"
            },
            "est": {
                "official": "Maldiivi Vabariik",
                "common": "Maldiivid"
            },
            "fin": {
                "official": "Malediivien tasavalta",
                "common": "Malediivit"
            },
            "fra": {
                "official": "République des Maldives",
                "common": "Maldives"
            },
            "hrv": {
                "official": "Republika Maldivi",
                "common": "Maldivi"
            },
            "hun": {
                "official": "Maldív-szigetek",
                "common": "Maldív-szigetek"
            },
            "ita": {
                "official": "Repubblica delle Maldive",
                "common": "Maldive"
            },
            "jpn": {
                "official": "モルディブ共和国",
                "common": "モルディブ"
            },
            "kor": {
                "official": "몰디브 공화국",
                "common": "몰디브"
            },
            "nld": {
                "official": "Republiek van de Malediven",
                "common": "Maldiven"
            },
            "per": {
                "official": "جمهوری مالدیو",
                "common": "مالدیو"
            },
            "pol": {
                "official": "Republika Malediwów",
                "common": "Malediwy"
            },
            "por": {
                "official": "República das Maldivas",
                "common": "Maldivas"
            },
            "rus": {
                "official": "Республика Мальдивы",
                "common": "Мальдивы"
            },
            "slk": {
                "official": "Maldivská republika",
                "common": "Maldivy"
            },
            "spa": {
                "official": "República de las Maldivas",
                "common": "Maldivas"
            },
            "swe": {
                "official": "Republiken Maldiverna",
                "common": "Maldiverna"
            },
            "urd": {
                "official": "جمہوریہ مالدیپ",
                "common": "مالدیپ"
            },
            "zho": {
                "official": "马尔代夫共和国",
                "common": "马尔代夫"
            }
        },
        "latlng": [
            3.25,
            73
        ],
        "landlocked": false,
        "area": 300,
        "demonyms": {
            "eng": {
                "f": "Maldivan",
                "m": "Maldivan"
            },
            "fra": {
                "f": "Maldivienne",
                "m": "Maldivien"
            }
        },
        "flag": "🇲🇻",
        "maps": {
            "googleMaps": "https://goo.gl/maps/MNAWGq9vEdbZ9vUV7",
            "openStreetMaps": "https://www.openstreetmap.org/relation/536773"
        },
        "population": 540542,
        "gini": {
            "2016": 31.3
        },
        "fifa": "MDV",
        "car": {
            "signs": [
                "MV"
            ],
            "side": "left"
        },
        "timezones": [
            "UTC+05:00"
        ],
        "continents": [
            "Asia"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/mv.png",
            "svg": "https://flagcdn.com/mv.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/mv.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/mv.svg"
        },
        "startOfWeek": "sunday",
        "capitalInfo": {
            "latlng": [
                4.17,
                73.51
            ]
        },
        "postalCode": {
            "format": "#####",
            "regex": "^(\\d{5})$"
        }
    }
]

export default JSON.parse(JSON.stringify(testData)) as Country[]