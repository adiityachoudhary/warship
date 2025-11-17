/**
 * Project: CBT System
 * File: warship.js
 * Description: catalogue.
 * Author: Aditya Choudhary(Computer Science Graduate | Developer | Lifelong Learner)
 * GitHub: https://github.com/adiityachoudhary
 * Created: 12-Nov-2025
 * Last Modified: 25-Nov-2025
 * Version: 1.0.0
 * License: MIT
 * Signature: © 2025 Aditya Choudhary | All Rights Reserved
 */


const topics = [
  {
    id: 'achelous',
    title: 'Achelous Class',
    images: ['src/1.jpg'],
    description: 'DAGUSHAN (ex-Hsiang An, ex-Achilles ARL 41, ex-LST 455) ',
    details: {
      'Displacement': '1,625 light; 4,325 full load',
      'Dimensions feet(meters)': '328 × 50 × 14 (100 × 15.2 × 4.3) ',
      'Main machinery': '2 GM 12-567A diesels; 1,800 hp (1.34 MW); 2 shafts',
      'Speed': '12 knots',
      'Armament': '12 China 37 mm/63 (6 twin). 4 China 14.5 mm/93 (2 twin)',
      'Radar': 'Navigation: Fin Curve; I-band '
    }
  },
  {
    id: 'anwei',
    title: 'Anwei Type 920 ',
    images: ['src/2.jpg'],
    description: 'DAISHAN DAO (Annati Collection)',
    details: {
      'Displacement': '14200 tonnes (13975.7 (uk) t) (15652.8 t (short)) (14200000 kg)',
      'Dimensions feet(meters)': '178.0 m (584.0 ft)',
      'Main machinery': '2 diesels; 2 shafts',
      'Speed': '20 kt (37.0 km/h) (23.0 mph) ',
      'Capacity': '135',
      'Armament': '12 China 37 mm/63 (6 twin). 4 China 14.5 mm/93 (2 twin)',
      'Radar': 'To be announced. ',
      'Helicopters': '1 Z-8JH'
    }
  },
  {
    id: 'CAC J-7E. ',
    title: 'CAC J-7E. ',
    images: ['src/3.jpg'],
    description: 'J-7E (Ships of the World)',
    details: {
      'Speed': '1,175 kt (2,175 km/h).',
      'Range': '804 n miles (1,490 km).',
      'Armament': 'Fleet air defence fighter with limited strike role against enemy shipping or beachhead. Total of about 30 delivered from 1992. About 24 estimated in service. Sensors: Search attack radar, some ECM. Weapons: ASuW; 500 kg bombs or 36 rockets. Standard; two 30 mm cannon. AAM; PL-5B, PL-8. ',
      'Service Ceiling': '61,680 ft (18,800 m). '
    }
  },
  {
    id: 'CAIG Z-8 Super-Frelon. ',
    title: 'CAIG Z-8 Super-Frelon. ',
    images: ['src/4.jpg'],
    description: 'A fast-attack destroyer optimized for anti-submarine and air defense operations in escort missions.',
    details: {
      'Speed': '134 kt (248 km/h)',
      'Service Ceiling': '10,000 ft (3,050 m). ',
      'Range': '440 n miles (815 km). ',
      'Armament': 'Anti-submarine warfare (ASW), anti-surface (ASuW), Medivac and SAR roles. Derived from SA 321G Super Frelon initially supplied from France in 1977. 14 ASW/ASuW (Z-8J), 4 Medivac (Z-8JH), and about 20 utility (Z-8) believed to be in-service. Operate from shore or amphibious ships. Deployed on Type 071 LPH for counter piracy operations in 2010, 2013, and 2014. Sensors: surface search radar, Thomson-Sintra HS-12 dipping sonar. Some aircraft fitted with FLIR turret. Weapons: ASW; lightweight torpedoes (Yu-7). ASuW: YJ-83K missile, rockets, and machine guns. '
    }
  },
  {
    id: 'Coastal Patrol Craft  ',
    title: 'Coastal Patrol Craft ',
    images: ['src/7.jpg', 'src/8.jpg'],
    description: '1: Gong Bian 4401,  2: Gong Bian 4407 ',
    details: {
      'Full Load': '59 tonnes (65 t (short)) (59000 kg) ',
      'Length': '22.5 m (73.82 ft) ',
      'Speed': '22 kt ',
      'Range': '850 n miles at 11 kt',
      'Capacity': '13',
      'Machinery': '2 diesels; 1,600 hp(m) (1.18 MW); 2 shafts',
      'Guns': '2-14.5 mm (twin). ',
      'Radars': 'Surface search:  I-band.'
    }
  },
  {
    id: 'Gong Bian 1301 ',
    title: 'Gong Bian 1301 ',
    images: ['src/9.jpg'],
    description: 'Gong Bian 1301 ',
    details: {
      'Full Load': '83 tonnes (91.5 t (short)) (83000 kg)',
      'Length': '25 m (82.02 ft)  ',
      'Speed': '14 kt',
      'Range': '900 n miles at 11 kt',
      'Capacity': '12',
      'Machinery': '2 diesels; 900 hp(m) (662 kW); 2 shafts',
      'Guns': '4-14.5 mm/93 2 (twin) ',
      'Radars': 'Surface search:  Fin Curve; I-band.'
    }
  },
  {
    id: 'HAI GUAN 812-T-Hollingsbee ',
    title: 'HAI GUAN 812-T-Hollingsbee ',
    images: ['src/11.jpg'],
    description: 'Building in Shanghai at about six a year since 1992. More may follow.  ',
    details: {
      'Full Load': '98 full load',
      'Dimensions': '101.7 × 15.4 × 4.6 (31 × 4.7 × 1.4) ',
      'Speed': '32 kt ',
      // 'Range': '850 n miles at 11 kt',
      // 'Capacity': '13',
      'Machinery': '2 diesels; 2 shafts',
      'Guns': '2 China 14.5 mm/93 (twin).',
      'Radars': '  Surface search: Racal Decca ARPA; I-band. '
    }
  },
  {
    id: 'Combatboat 90E ',
    title: 'Combatboat 90E ',

    images: ['src/12.jpg'],

    description: ' Two delivered to Hai Guan in April 1997. This is the transport version of the Swedish raiding craft and can lift two tons of stores or 6-10 troops.',

    details: {
      'Full Load': '9 full load',
      'Dimensions': '39 × 9.5 × 2.3 (11.9 × 2.9 × 0.7) ',
      'Speed': '40 kt ',
      // 'Range': '850 n miles at 11 kt',
      // 'Capacity': '13',
      'Machinery': '1 Scania AB DSI 14 diesel; 398 hp(m) (293 kW); waterjet ',
      // 'Guns': '2 China 14.5 mm/93 (twin).',
      // 'Radars': '  Surface search: Racal Decca ARPA; I-band. '
    }
  },


  {
    id: 'Dachou (Type 917A) class',
    title: 'Dachou Type 917A-class',

    images: ['src/13.jpg'],

    description: ' Bei Yun 530, Dong Yun 760, Nan Yun 846, Nan Yun 847 ',

    details: {
      'Full Load': '9 full load',
      'Dimensions': 'Length   overall: 67 m (219.8 ft) ',
      // 'Speed': '40 kt ',
      // 'Range': '850 n miles at 11 kt',
      // 'Capacity': '13',
      'Machinery': '2 diesels; 2 shafts',
      // 'Guns': '2 China 14.5 mm/93 (twin).',
      // 'Radars': ' To be announced.'
    }
  },



  {
    id: 'Dadao Type 648-class ',
    title: 'Dadao Type 648-class ',

    images: ['src/14.jpg','src/15.jpg'],

    description: ' Dong Xiu 911 , Builders: Bohai Shipyard , Huludao ',

    details: {
      'Full Load': '1780 tonnes (1751.9 (uk) t) (1962.1 t (short)) (1780000 kg) ',
      'Dimensions': 'Length   overall:78.7 m (258.2 ft) ',
      'Speed': '16 kt (29.6 km/h) (18.4 mph) ',
      // 'Range': '850 n miles at 11 kt',
      // 'Capacity': '13',
      'Machinery': '2 diesels; 2 shafts ',
      'Guns': '8-25 mm (4 twin).',
      'Radars': ' Navigation:  I-band. '
    }
  },


  

  {
    id: 'Dadie Type 814A-class',
    title: 'Dadie Type 814A-class',

    images: ['src/16.jpg'],

    description: ' Bei Diao 900 (ex-Bei Diao 841 , ex-V 841) / Wuchang Shipyard , Wuhan 1986',

    details: {
      'Full Load': '2591 tonnes (2550.1 (uk) t) (2856.1 t (short)) (2591000 kg',
      'Dimensions': 'Length   overall:     94 m (308.4 ft) ',
      'Speed': '20 kt (37.0 km/h) (23.0 mph)',
      // 'Range': '850 n miles at 11 kt',
      'Capacity': '170',
      'Machinery': '2 diesels; 2 shafts ',
      'Guns': '4-14.5 mm',
      'Radars': ' Navigation:  2 Type 753; I-band '
    }
  },






  {
    id: 'Dadong Type 946A-class',
    title: 'Dadong Type 946A-class',

    images: ['src/17.jpg'],

    description: 'DADONG 304 ',

    details: {
      'Full Load': '1524 tonnes (1499.9 (uk) t) (1679.9 t (short)) (1524000 kg',
      'Dimensions': 'Length   overall:     84.4 m (276.9 ft) ',
      'Speed': '18 kt (33.3 km/h) (20.7 mph)',
      // 'Range': '850 n miles at 11 kt',
      'Capacity': '150',
      'Machinery': '2 diesels; 7,400 hp(m) (5.44 MW); 2 shafts ',
      'Guns': '4-25 mm/80 (2 twin). ',
      'Radars': ' Navigation:  Type 756; F-band. '
    }
  },







  {
    id: 'Dahua Type 909/909A-class',
    title: 'Dahua Type 909/909A-class',

    images: ['src/18.jpg'],

    description: 'Bi Sheng 891 (ex-970 , ex-909) Hudong-Zhonghua --Shanghai Dec 1997, Hua Luogeng 892 / Hudong-Zhonghua -- Shanghai 2012 ',

    details: {
      'Full Load': '6096 tonnes (5999.7 (uk) t) (6719.7 t (short)) (6096000 kg',
      'Dimensions': 'Length   overall:     130.0 m (426.5 ft)  ',
      'Speed': '20 kt (37.0 km/h) (23.0 mph)',
      // 'Range': '850 n miles at 11 kt',
      'Capacity': '80',
      'Machinery': '2 diesels; 2 shafts ',
      // 'Guns': '4-25 mm/80 (2 twin). ',
      // 'Radars': ' Navigation:  Type 756; F-band. '
      'Helicopters': ' Platform (891) for one medium.  '
    }
  },





  {
    id: 'Dajiang Type 925-class ',
    title: 'Dajiang Type 925-class ',

    images: ['src/19.jpg','src/20.jpg'],

    description: 'CHONGMING DAO (Ships of the World), DAJIANG CLASS SILHOUETTE (Ian Sturton)  ',

    details: {
      'Full Load': '12167 tonnes (11974.8 (uk) t) (13411.8 t (short)) (12167000 kg)',
      'Dimensions': 'Length   overall:     156.2 m (512.5 ft)  ',
      'Speed': '20 kt (37.0 km/h) (23.0 mph)',
      // 'Range': '850 n miles at 11 kt',
      'Capacity': '308',
      'Machinery': '2 MAN K9Z60/105E diesels; 18,000 hp(m) (13.4 MW); 2 shafts',
      // 'Guns': '4-25 mm/80 (2 twin). ',
      'Radars': ' Surface search:  Eye Shield; E-band, Navigation:  2 Fin Curve; I-band. ',
      'Helicopters': ' 2 Z-8  '
    }
  },






  {
    id: 'Dalang II/III(Type 922III/IIIA)-class ',
    title: 'Dalang II/III(Type 922III/IIIA)-class ',

    images: ['src/21.jpg','src/22.jpg'],

    description: 'Bei Ju 122, Bei Ju 138, Dong Ju 332, Nan Ju 510  ',

    details: {
      'Full Load': '4267 tonnes (4199.6 (uk) t) (4703.6 t (short)) (4267000 kg)',
      'Dimensions': 'Length   overall:     111.9 m (367.1 ft)  ',
      'Speed': '16 kt (29.6 km/h) (18.4 mph)',
      'Range': '88000 n miles (14816.0 km) (9206.2 miles) at 14 kt (25.9 km/h) (16.1 mph)',
      'Capacity': '180',
      'Machinery': '2 diesels; 4,000 hp(m) (2.94 MW); 2 shafts',
      'Guns': '4 Type 61/76 37 mm (2 twin) (122 [Dalang II]). ',
      'Radars': ' Navigation:  Fin Curve; I-band.',
      // 'Helicopters': ' 2 Z-8  '
    }
  },







  {
    id: 'Dalao Type 926-class  ',
    title: 'Dalao Type 926-class  ',

    images: ['src/23.jpg'],

    description: 'Haiyang Dao, Liugong Dao, Chang Dao ',

    details: {
      'Full Load': '9652 tonnes (9499.6 (uk) t) (10639.5 t (short)) (9652000 kg)',
      'Dimensions': 'Length   overall:   136 m (446.2 ft)   ',
      // 'Speed': '16 kt (29.6 km/h) (18.4 mph)',
      // 'Range': '88000 n miles (14816.0 km) (9206.2 miles) at 14 kt (25.9 km/h) (16.1 mph)',
      // 'Capacity': '180',
      'Machinery': 'To be announced ',
      // 'Guns': '4 Type 61/76 37 mm (2 twin) (122 [Dalang II]). ',
      'Radars': ' To be announced ',
      'Helicopters': ' Flight deck only.  '
    }
  },






  {
    id: 'Danlin class  ',
    title: 'Danlin class  ',

    images: ['src/24.jpg','src/25.jpg'],

    description: 'DANLIN 794 (Henry Dodds) ',

    details: {
      'Full Load': '1311 tonnes (1290.3 (uk) t) (1445.1 t (short)) (1311000 kg)',
      'Dimensions': 'Length   overall:   60.5 m (198.5 ft)   ',
      'Speed': '15 kt (27.8 km/h) (17.3 mph)',
      // 'Range': '88000 n miles (14816.0 km) (9206.2 miles) at 14 kt (25.9 km/h) (16.1 mph)',
      'Capacity': '35',
      'Cargo capacity': '750-800 tons' ,
      'Machinery': '1 USSR/PRC Type 6DRN 30/50 diesel; 750 hp(m) (551 kW); 1 shaft ',
      'Guns': '4-25 mm/80 (2 twin). 4-14.5 mm (2 twin). ',
      'Radars': ' Navigation:  Fin Curve or Skin Head; I-band. ',
      // 'Helicopters': ' Flight deck only.  '
    }
  },





  {
    id: 'Danyao Type 904A/904B-class  ',
    title: 'Danyao Type 904A/904B-class   ',

    images: ['src/26.jpg'],

    description: 'Fuxian Hu , Junshan Hu, Lugu Hu ',

    details: {
      'Full Load': '15241 tonnes (15000.3 (uk) t) (16800.3 t (short)) (15241000 kg)',
      'Dimensions': 'Length   overall:   159.5 m (523.3 ft)  ',
      // 'Speed': '15 kt (27.8 km/h) (17.3 mph)',
      // 'Range': '88000 n miles (14816.0 km) (9206.2 miles) at 14 kt (25.9 km/h) (16.1 mph)',

      // 'Capacity': '35',
      // 'Cargo capacity': '750-800 tons' ,

      'Machinery': '2 Shaanxi SEMT-Pielstick 16PC2.6V-400 diesels; 24,000 hp (17.9 MW); 2 shafts ',

      'Guns': 'Type 904A: 4 H/PJ-76F 37 mm (2 twin) 400 rds/min to 9.4 km (5.1 n miles); weight of shell 0.73 kg. 4 Type 61 25 mm/60 (2 twin). Type 904B: 2 H/PJ-17 30 mm; 350 rds/min to 3 km (1.6 n miles) . ',
      // 'Radars': ' Navigation:  Fin Curve or Skin Head; I-band. ',
      'Helicopters': ' Type 904A: Platform for one medium. Type 904B: Z-8 or Ka-28. '
    }
  },






  {
    id: 'Daozha class   ',
    title: 'Daozha class    ',

    images: ['src/27.jpg','src/28.jpg'],

    description: 'DAOZHA (Hachiro Nakai) ',

    details: {
      'Full Load': '4064 tonnes (3999.8 (uk) t) (4479.8 t (short)) (4064000 kg)',
      'Dimensions': 'Length   overall:   84 m (275.6 ft) ',
      'Speed': '18 kt (33.3 km/h) (20.7 mph)',
      // 'Range': '88000 n miles (14816.0 km) (9206.2 miles) at 14 kt (25.9 km/h) (16.1 mph)',

      'Capacity': '125',
      // 'Cargo capacity': '750-800 tons' ,

      'Machinery': '2 diesels; 8,600 hp(m) (6.32 MW); 2 shafts',

      // 'Guns': 'Type 904A: 4 H/PJ-76F 37 mm (2 twin) 400 rds/min to 9.4 km (5.1 n miles); weight of shell 0.73 kg. 4 Type 61 25 mm/60 (2 twin). Type 904B: 2 H/PJ-17 30 mm; 350 rds/min to 3 km (1.6 n miles) . ',
      // 'Radars': ' Navigation:  Fin Curve or Skin Head; I-band. ',
      // 'Helicopters': ' Type 904A: Platform for one medium. Type 904B: Z-8 or Ka-28. '
    }
  },




  {
    id: 'Daxin Type 679 ',
    title: 'Daxin Type 679 ',

    images: ['src/29.jpg','src/30.jpg'],

    description: 'Zheng He ',

    details: {
      'Full Load': '6000 tonnes (5905.2 (uk) t) (6613.9 t (short)) (6000000 kg)',
      'Dimensions': 'Length   overall:  132 m (433.1 ft)',
      'Speed': '15 kt (27.8 km/h) (17.3 mph)',
      'Range': '5000 n miles (9260.0 km) (5753.9 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      'Capacity': 'crew: 400, instructors: 30, midshipmen: 200',
      // 'Cargo capacity': '750-800 tons' ,

      'Machinery': '2 SEMT Pielstick 6PC2.5L diesels; 7,800 hp(m) (5.73 MW); 2 shafts',

      'Guns': '2-57 mm/70 (twin). 4 AK-230 30 mm/64 (2 twin). 4-12.7 mm MGs. ',
     ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',
      'Radars': 'Air/surface search:  Eye Shield E-band. , Surface search:  Type 756; I-band. , Navigation:  Racal Decca 1290 I-band. , Fire control:  Round Ball; I-band. ,  Navigation:  Racal Decca 1290 I-band.,  Fire control:  Roun,dBall; I-band. ',
      'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      'Helicopters': ' Platform only. '
    }
  },



  {
    id: 'Dayun Type 904-class ',
    title: 'Dayun Type 904-class ',

    images: ['src/31.jpg','src/32.jpg'],

    description: 'Dongting Hu  ',

    details: {
      'Full Load': '11151 tonnes (10974.9 (uk) t) (12291.9 t (short)) (11151000 kg)',
      'Dimensions': 'Length   overall:  124.2 m (407.5 ft) ',
      'Speed': '22 kt (40.7 km/h) (25.3 mph)',
      // 'Range': '5000 n miles (9260.0 km) (5753.9 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      'Capacity': '240',
      // 'Cargo capacity': '750-800 tons' ,

      'Machinery': '2 diesels; 18,000 hp (13.2 MW); 2 shafts',

      'Guns': '4-37 mm/63 (2 twin). 4-25 mm/80 (2 twin).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'Navigation:  2 Type 756; I-band. ',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      'Helicopters': ' Flight deck only.  '
    }
  },




  {
    id: 'Dazhi class',
    title: 'Dazhi class ',

    images: ['src/33.jpg','src/34.jpg'],

    description: 'DAZHI ',

    details: {
      'Full Load': '5,600 full load ',
      'Dimensions': '350 × 50 × 20 (106.7 × 15.3 × 6.1)',
      'Speed': '14 knots',
      'Range': '6,000 at 14 kt',

      // 'Capacity': '240',
      'Cargo capacity': '500 tons dieso' ,

      'Machinery': 'Diesel-electric; 2 diesel generators; 3,500 hp(m) (2.57 MW); 2 shafts',

      'Guns': '4 China 37 mm/63 (2 twin). 4-25 mm/60 (2 twin). ',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'Fin Curve; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      // 'Helicopters': ' Flight deck only.  '
    }
  },






  {
    id: 'Dazhou Type 946-class',
    title: 'Dazhou Type 946-class ',

    images: ['src/35.jpg'],

    description: 'DAZHOU 502  ',

    details: {
      'Full Load': '1118 tonnes (1100.3 (uk) t) (1232.4 t (short)) (1118000 kg)',
      'Dimensions': 'Length : 379 m (259.2 ft)',
      'Speed': '18 kt (33.3 km/h) (20.7 mph)',
      // 'Range': '6,000 at 14 kt',

      'Capacity': '130',
      // 'Cargo capacity': '500 tons dieso' ,

      'Machinery': '2 diesels; 2 shafts',

      'Guns': '2 China 37 mm/63 (twin). 4-14.5 mm/93 (2 twin).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'Navigation:  Fin Curve; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      // 'Helicopters': ' Flight deck only.  '
    }
  },






  {
    id: 'Dongdiao (Type 815/815A/815B) class',
    title: 'Dongdiao (Type 815/815A/815B) class ',

    images: ['src/36.jpg','src/37.jpg'],

    description: 'Beijixing, Tianwangxing,  Haiwangxing, Tianlangxing, Tianshuxing, Kaiyangxing, Tianquanxing, Yuhengxing, Jinxing',

    details: {
      'Full Load': '6096 tonnes (5999.7 (uk) t) (6719.7 t (short)) (6096000 kg) ',
      'Dimensions': 'Length : 130 m (426.5 ft)',
      'Speed': '20 kt (37.0 km/h) (23.0 mph)',
      // 'Range': '6,000 at 14 kt',

      'Capacity': '250',
      // 'Cargo capacity': '500 tons dieso' ,

      'Machinery': '2 diesels; 2 shafts',

      'Guns': 'Type 815: 1-37 mm. 2-14.5 mm. Type 815A and B: 2 H/PJ-14 30 mm (fwd). 2-14.5 mm (aft) (852-859). ',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      // 'Radars': 'Navigation:  Fin Curve; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      'Helicopters': ' 1 Z-9 (can be embarked).  '
    }
  },



  {
    id: 'Donghai Dao class',
    title: 'Donghai Dao class',

    images: ['src/38.jpg'],

    description: 'Donghai Dao ',

    details: {
      'Full Load': '20000 tonnes (19684.1 (uk) t) (22046.2 t (short)) (20000000 kg) ',
      'Dimensions': 'Length : 175.5 m (575.8 ft)',
      'Speed': '14 kt (25.9 km/h) (16.1 mph)',
      // 'Range': '6,000 at 14 kt',

      // 'Capacity': '250',
      // 'Cargo capacity': '500 tons dieso' ,

      'Machinery': 'To be announced.',

      // 'Guns': 'Type 815: 1-37 mm. 2-14.5 mm. Type 815A and B: 2 H/PJ-14 30 mm (fwd). 2-14.5 mm (aft) (852-859). ',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'To be announced.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      // 'Helicopters': ' 1 Z-9 (can be embarked).  '
    }
  },




  {
    id: 'Fuchi (Type 903/903A) class ',
    title: 'Fuchi (Type 903/903A) class ',

    images: ['src/39.jpg','src/40.jpg','src/41.jpg','src/42.jpg','src/43.jpg'],

    description: '23369 tonnes (22999.9 (uk) t) (25759.9 t (short)) (23369000 kg) ',

    details: {
      'Full Load': '20000 tonnes (19684.1 (uk) t) (22046.2 t (short)) (20000000 kg) ',
      'Dimensions': 'Length : 178.5 m (585.6 ft)',
      'Speed': '19 kt (35.2 km/h) (21.9 mph)',
      'Range': '10000 n miles (18520.0 km) (11507.8 miles) at 14 kt (25.9 km/h) (16.1 mph)',

      'Capacity': '130',
      'Cargo capacity': '10,500 tonnes fuel, 250 tonnes of water, 680 tonnes of ammunition and stores ' ,

      'Machinery': '2 Shaanxi SEMT-Pielstick diesels; 24,000 hp (17.9 MW); 2 shafts',

      'Guns': 'Type 903: 8 H/PJ-76F 37 mm/63 (4 twin); 400 rds/min to 9.4 km (5.1 n miles); weight of shell 0.73 kg. Type 903A: 4 H/PJ-14 30 mm; 350 rds/min to 3 km (1.6 n miles) .',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'To be announced.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      'Helicopters': ' 1 Z-8/Z-18'
    }
  },




  {
    id: 'Fujian class ',
    title: 'Fujian class ',

    images: ['src/44.jpg'],

    description: 'Bei You 400, Bei You 561, Bei You 562, Bei You 573, Dong You 630, Dong You 632, Dong You 634, Dong You 635, Dong You 638, Dong You 639, Dong You 650, Nan You 954, Nan You 965, 89 | Page, Nan You 962, Nan You 969, Nan You 970, Bei Shui 566, Bei Shui 581, Dong Shui 650, Nan Shui 970 ',

    details: {
      'Full Load': '2337 tonnes (2300.1 (uk) t) (2576.1 t (short)) (2337000 kg)',
      'Dimensions': 'Length : 72 m (236.2 ft)',
      'Speed': '10 kt (18.5 km/h) (11.5 mph)',
      'Range': '1500 n miles (2778.0 km) (1726.2 miles) at 8 kt (14.8 km/h) (9.2 mph)',

      'Capacity': '30',
      // 'Cargo capacity': '10,500 tonnes fuel, 250 tonnes of water, 680 tonnes of ammunition and stores ' ,

      'Machinery': '1 diesel; 600 hp(m) (441 kW); 1 shaft',

      'Guns': '4-14.5 mm/93 (2 twin).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'Navigation:  Fin Curve; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      // 'Helicopters': ' 1 Z-8/Z-18'
    }
  },




  {
    id: 'Fulin class ',
    title: 'Fulin class ',

    images: ['src/45.jpg','src/46.jpg'],

    description: 'FULIN 629  ',

    details: {
      'Full Load': '2134 tonnes (2100.3 (uk) t) (2352.3 t (short)) (2134000 kg)',
      'Dimensions': 'Length : 63.5 m (208.3 ft)',
      'Speed': '11 kt (20.4 km/h) (12.7 mph)',
      // 'Range': '1500 n miles (2778.0 km) (1726.2 miles) at 8 kt (14.8 km/h) (9.2 mph)',

      'Capacity': '35',
      'Cargo capacity': '600 tons' ,

      'Machinery': '1 diesel; 600 hp(m) (441 kW); 1 shaft',

      'Guns': '4-25 mm/80 (2 twin). 4-14.5 mm/93 (2 twin).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'Navigation:  Fin Curve; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      // 'Helicopters': ' 1 Z-8/Z-18'
    }
  },




  {
    id: 'Fuqing (Type 905) class ',
    title: 'Fuqing (Type 905) class ',

    images: ['src/47.jpg','src/48.jpg','src/49.jpg'],

    description: 'Poyang Hu (exFencang) ',

    details: {
      'Full Load': '22099 tonnes (21750.0 (uk) t) (24360.0 t (short)) (22099000 kg)',
      'Dimensions': 'Length : 168.2 m (551.8 ft)',
      'Speed': '18 kt (33.3 km/h) (20.7 mph)',
      'Range': '18000 n miles (33336.0 km) (20714.0 miles) at 14 kt (25.9 km/h) (16.1 mph)',

      'Capacity': 'crew: 130, officers: 24 ',
      'Cargo capacity': '10,550 tonnes fuel; 1,000 tonnes dieso; 200 tonnes feed water; 200 tonnes drinking water; 4 small cranes' ,

      'Machinery': '1 Sulzer 8RL B66 diesel; 15,000 hp(m) (11 MW) sustained; 1 shaft',

      'Guns': '8-37 mm (4 twin) (may be fitted).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      'Radars': 'Navigation:  Fin Curve or Racal Decca 1290; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      'Helicopters': 'Platform for 1 medium.'
    }
  },



  {
    id: 'Fusu (Type 908) class  ',
    title: 'Fusu (Type 908) class  ',

    images: ['src/50.jpg','src/51.jpg'],

    description: 'Qinghai Hu (ex-Nancang , ex-Vladimir Peregudov) ',

    details: {
      'Full Load': '37594 tonnes (37000.3 (uk) t) (41440.3 t (short)) (37594000 kg) ',
      'Dimensions': 'Length : 188.9 m (619.8 ft)',
      'Speed': '16 kt (29.6 km/h) (18.4 mph)',
      // 'Range': '18000 n miles (33336.0 km) (20714.0 miles) at 14 kt (25.9 km/h) (16.1 mph)',

      'Capacity': '125',
      'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '1 B&W diesel; 11,600 hp(m) (8.53 MW); 1 shaft',

      // 'Guns': '8-37 mm (4 twin) (may be fitted).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      // 'Radars': 'Navigation:  Fin Curve or Racal Decca 1290; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      'Helicopters': '1 Z-8 Super Frelon. '
    }
  },



  {
    id: 'Futi class (Type 312)',
    title: 'Futi class (Type 312)',

    images: ['src/52.jpg'],

    description: 'DRONE Type 312 (CSSC)  ',

    details: {
      'Full Load': '48 tonnes (47.2 (uk) t) (52.9 t (short)) (48000 kg)',
      'Dimensions': 'Length : 20.9 m (68.6 ft)',
      'Speed': '12 kt (22.2 km/h) (13.8 mph)',
      'Range': '144 n miles (266.7 km) (165.7 miles) at 12 kt (22.2 km/h) (13.8 mph)',

      'Capacity': '3',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': 'Diesel-electric; 1 Type 12V 150C diesel generator; 300 hp(m) (220 kW); 1 motor; cp prop ',

      // 'Guns': '8-37 mm (4 twin) (may be fitted).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      // 'Radars': 'Navigation:  Fin Curve or Racal Decca 1290; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      'Helicopters': '1 Z-8 Super Frelon. '
    }
  },




  {
    id: 'Ganzhu class',
    title: 'Ganzhu class',

    images: ['src/53.jpg','src/54.jpg'],

    description: 'GANZHU 420  ',

    details: {
      'Full Load': '1016 tonnes (1000.0 (uk) t) (1119.9 t (short)) (1016000 kg)',
      'Dimensions': 'Length : 65 m (213.3 ft) ',
      'Speed': '20 kt (37.0 km/h) (23.0 mph)',
      // 'Range': '144 n miles (266.7 km) (165.7 miles) at 12 kt (22.2 km/h) (13.8 mph)',

      'Capacity': '125',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '4 diesels; 4,400 hp(m) (3.23 MW); 2 shafts',

      'Guns': '4-37 mm/63 (2 twin); 8-14.5 mm (4 twin).',
    //  ' A/S Mortars': '2 FQF 2500 fixed 12-tubed launchers; range 1,200 m; warhead 34 kg.',

      // 'Radars': 'Navigation:  Fin Curve or Racal Decca 1290; I-band.',
      // 'Sonars': ' Echo Type 5; hull-mounted; active; high frequency. ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },




  {
    id: 'Golf class (Type 031) ',
    title: 'Golf class (Type 031) ',

    images: ['src/55.jpg','src/56.jpg'],

    description: 'GOLF 200 (Ships of the World)  ',

    details: {
      'Full Load': '2388 tonnes (2350.3 (uk) t) (2632.3 t (short)) (2388000 kg)',
      'Dimensions': 'Length : 97.5 m (319.9 ft)',
      'Speed': 'top speed: 17 kt (31.5 km/h) (19.6 mph), dived: 13 kt (24.1 km/h) (15.0 mph), surfaced: 17 kt (31.5 km/h) (19.6 mph) ',
      'Range': '6000 n miles (11112.0 km) (6904.7 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      'Capacity': 'crew: 86, officers: 12',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': 'Diesel-electric; 3 Type 37-D diesels; 6,000 hp(m) (4.41 MW); 3 motors; 5,500 hp(m) (4 MW); 3 shafts',

      'Torpedoes': '10-21 in (533 mm) tubes (6 bow, 4 stern). 12 Type Yu-4 (SAET-50); passive homing to 15 km (8.1 n miles) at 30 kt; warhead 309 kg.',
     ' Missiles': 'SLBM:  1 JL-2 (CSS-NX-5); 3-stage solid fuel; stellar inertial guidance to 8,000 km (4,320 n miles); single nuclear warhead of 1 MT or 3-8 MIRV of smaller yield. CEP 300 m approx',

      'Radars': 'Navigation:  Snoop Plate; I-band.',
      'Sonars': 'Pike Jaw; hull-mounted; active/passive search; medium frequency. ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },





  {
    id: 'Guangzhou class ',
    title: 'Guangzhou class ',

    images: ['src/57.jpg'],

    description: 'GUANGZHOU 645 (Chris Sattler) ',

    details: {
      'Full Load': '539 tonnes (530.5 (uk) t) (594.1 t (short)) (539000 kg)',
      'Dimensions': '49 m (160.8 ft)',
      'Speed': '10 kt (18.5 km/h) (11.5 mph)',
      // 'Range': '6000 n miles (11112.0 km) (6904.7 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      'Capacity': 'crew: 19',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '1 diesel; 1 shaft ',

      // 'Torpedoes': '10-21 in (533 mm) tubes (6 bow, 4 stern). 12 Type Yu-4 (SAET-50); passive homing to 15 km (8.1 n miles) at 30 kt; warhead 309 kg.',
    //  ' Missiles': 'SLBM:  1 JL-2 (CSS-NX-5); 3-stage solid fuel; stellar inertial guidance to 8,000 km (4,320 n miles); single nuclear warhead of 1 MT or 3-8 MIRV of smaller yield. CEP 300 m approx',

    //   'Radars': 'Navigation:  Snoop Plate; I-band.',
    //   'Sonars': 'Pike Jaw; hull-mounted; active/passive search; medium frequency. ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },




  {
    id: 'HAIG Z-9C/9D (Haitun) ',
    title: 'HAIG Z-9C/9D (Haitun)',

    images: ['src/58.jpg'],

    description: 'Z-9C (Michael Nitz) ',

    details: {
      // 'Full Load': '539 tonnes (530.5 (uk) t) (594.1 t (short)) (539000 kg)',
      // 'Dimensions': '49 m (160.8 ft)',
      'Speed': '236 n miles (437 km).',
      'Range': '6000 n miles (11112.0 km) (6904.7 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      // 'Capacity': 'crew: 19',
      // 'Cargo capacity': '9,630 tons fuel' ,

      // 'Machinery': '1 diesel; 1 shaft ',

      'Role/Weapom systems': 'ASW (Z-9C), ASuW (Z-9D) and SAR. Licensed assembly of 50 Aerospatiale AS365N Dauphin/AS565MA Panther for PLA and PLAN commenced 1980. Production by HAIG commenced 1988. Z-9C ASW variant may carry dipping sonar or torpedoes but not both. Someaircraft equipped with dipping sonar similar in appearance to Helras sonar.Aircraft adapted for SAR role fitted with EO turret (TV and FLIR), searchlightand winch. Aircraft deployed on counter-piracy operations may be fittedwith 12.7 mm machine gun and 57 mm rocket launcher. Z-9D anti-ship variant capable of carrying 4 short range AShMs. Widely deployed on Type 054A frigates. Sensors: Thomson-CSF Agrion-15 or KLC-1 surface search I/Jband radar; Thomson-Sintra HS-12 or Type 605 dipping sonar. Weapons: ASW; 2 lightweight torpedoes (Yu-7). ASuW; 4 KJ-10B anti-ship missiles.',
    //  ' Missiles': 'SLBM:  1 JL-2 (CSS-NX-5); 3-stage solid fuel; stellar inertial guidance to 8,000 km (4,320 n miles); single nuclear warhead of 1 MT or 3-8 MIRV of smaller yield. CEP 300 m approx',

    //   'Radars': 'Navigation:  Snoop Plate; I-band.',
    //   'Sonars': 'Pike Jaw; hull-mounted; active/passive search; medium frequency. ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },



  {
    id: 'Hainan (Type 037) class ',
    title: 'Hainan (Type 037) class',

    images: ['src/59.jpg','src/60.jpg','src/61.jpg'],

    description: 'HAINAN CLASS (A Sheldon-Duplaix) ',

    details: {
      'Full Load': '398 tonnes (391.7 (uk) t) (438.7 t (short)) (398000 kg)',
      'Dimensions': '58.8 m (192.9 ft) ',
      'Speed': '30.5 kt (56.5 km/h) (35.1 mph)',
      'Range': '1300 n miles (2407.6 km) (1496.0 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      'Capacity': 'crew: 78',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '4 PCR/Kolomna Type 9D8 diesels; 4,000 hp(m) (2.94 MW) sustained; 4 shafts ',

      'Guns': '4-57 mm/70 (2 twin); 120 rds/min to 12 km (6.5 n miles); weight of shell 6.31 kg. 4-25 mm/60 (2 twin).',

     ' Missiles': ' Can be fitted with 4 YJ-1 launchers in lieu of the after 57 mm gun. ',

     ' A/S Mortars': ' RPS Uragan system; 4 RBU-1200 5-barrel launchers; RGB-12 rocketpropelled depth charges; range 400-1,200 m; depth 15-350 m; warhead 30 kg.',

     ' Mines': ' Rails fitted for 12. ',
     ' Depth charges': ' 2 BMB-2 projectors; 2 racks. 18 DCs.  ',

      'Radars': 'Surface search:  Type 351; Pot Head or Skin Head; E/F-band.  IFF:  High Pole.',
      'Sonars': 'Stag Ear; hull-mounted; active search and attack; high frequency. Thomson Sintra SS 12 (in some); VDS.',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },




  {
    id: 'Haiqing (Type 037/1S) class ',
    title: 'Haiqing (Type 037/1S) class',

    images: ['src/62.jpg'],

    description: 'Zhangqiu, Renqiu, Baofeng, Yichuan, Longhai, Yunhe, Fuyang, Xiaoshan, Shangyu',

    details: {
      'Full Load': '486 tonnes (478.3 (uk) t) (535.7 t (short)) (486000 kg)',
      'Dimensions': 'Length: 62.8 m (206.0 ft)',
      'Speed': '28 kt (51.9 km/h) (32.2 mph)',
      'Range': '1300 n miles (2407.6 km) (1496.0 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      'Capacity': 'crew: 71',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '4 PR 230ZC diesels; 4,000 hp(m) (2.94 MW) sustained; 4 shafts ',

      'Guns': '4 Type 76 37 mm/63 (2 twin); 4 Type 69 14.5 mm (2 twin).',

    //  ' Missiles': ' Can be fitted with 4 YJ-1 launchers in lieu of the after 57 mm gun. ',

     ' A/S Mortars': '2 Type 87; 6-barrelled fixed launchers; range 1,200 m; warhead 34 kg. ',

    //  ' Mines': ' Rails fitted for 12. ',
    //  ' Depth charges': ' 2 BMB-2 projectors; 2 racks. 18 DCs.  ',

      'Radars': 'Surface search:  Anritsu RA 723; I-band.',
      'Sonars': 'Hull mounted; active search and attack; medium frequency.',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },




  {
    id: 'Haixun I class  ',
    title: 'Haixun I class ',

    images: ['src/63.jpg'],

    description: 'HAIXUN 21 (A Sheldon-Duplaix)  ',

    details: {
      'Full Load': '1583 tonnes (1558.0 (uk) t) (1745.0 t (short)) (1583000 kg)',
      'Dimensions': 'Length: 93.2 m (305.8 ft) ',
      'Speed': '22 kt (40.7 km/h) (25.3 mph)',
      // 'Range': '1300 n miles (2407.6 km) (1496.0 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      // 'Capacity': 'crew: 78',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 Niigata 16MG26HX diesels; 10,014 hp (7.37 MW); 2 shafts',

      // 'Guns': '4-57 mm/70 (2 twin); 120 rds/min to 12 km (6.5 n miles); weight of shell 6.31 kg. 4-25 mm/60 (2 twin).',

    //  ' Missiles': ' Can be fitted with 4 YJ-1 launchers in lieu of the after 57 mm gun. ',

    //  ' A/S Mortars': ' RPS Uragan system; 4 RBU-1200 5-barrel launchers; RGB-12 rocketpropelled depth charges; range 400-1,200 m; depth 15-350 m; warhead 30 kg.',

    //  ' Mines': ' Rails fitted for 12. ',
    //  ' Depth charges': ' 2 BMB-2 projectors; 2 racks. 18 DCs.  ',

      'Radars': 'Navigation',
      // 'Sonars': 'Stag Ear; hull-mounted; active search and attack; high frequency. Thomson Sintra SS 12 (in some); VDS.',
      'Helicopters': 'Platform for one medium. '
    }
  },




  {
    id: 'Haixun II (Type 718) class ',
    title: 'Haixun II (Type 718) class',

    images: ['src/64.jpg'],

    description: 'Haijing 31101 (ex-Haijing 1001)  ',

    details: {
      'Full Load': '1617 tonnes (1591.5 (uk) t) (1782.4 t (short)) (1617000 kg)',
      'Dimensions': 'Length: 95.6 m (313.6 ft)  ',
      // 'Speed': '30.5 kt (56.5 km/h) (35.1 mph)',
      // 'Range': '1300 n miles (2407.6 km) (1496.0 miles) at 15 kt (27.8 km/h) (17.3 mph)',

      // 'Capacity': 'crew: 78',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': 'To be announced',

      'Guns': '1-37 mm. ',

    //  ' Missiles': ' Can be fitted with 4 YJ-1 launchers in lieu of the after 57 mm gun. ',

    //  ' A/S Mortars': ' RPS Uragan system; 4 RBU-1200 5-barrel launchers; RGB-12 rocketpropelled depth charges; range 400-1,200 m; depth 15-350 m; warhead 30 kg.',

    //  ' Mines': ' Rails fitted for 12. ',
    //  ' Depth charges': ' 2 BMB-2 projectors; 2 racks. 18 DCs.  ',

      'Radars': 'Surface search:  E/F-band.  Navigation:  I-band',
      // 'Sonars': ' ',
      'Helicopters': 'Platform only'
    }
  },




  {
    id: 'Haizhui/Shanghai III (Type 062/1) class ',
    title: 'Haizhui/Shanghai III (Type 062/1) class ',

    images: ['src/65.jpg','src/66.jpg'],

    description: 'HAIZHUI 1205-1208 (Kürsener Collection)',

    details: {
      'Full Load': '173 tonnes (170.3 (uk) t) (190.7 t (short)) (173000 kg)',
      'Dimensions': 'Lenght: 41 m (134.5 ft) ',
      'Speed': '25 kt (46.3 km/h) (28.8 mph)',
      'Range': '750 n miles (1389.0 km) (863.1 miles) at 17 kt (31.5 km/h) (19.6 mph)',

      'Capacity': 'crew: 43',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '4 HND L12-180A diesels; 4,400 hp(m) (3.22 MW) sustained; 4 shafts',

      'Guns': '4-37 mm/63 (2 twin); 180 rds/min to 8.5 km (4.6 n miles); weight of shell 1.42 kg. 4 Type 69 14.5 mm (2 twin) or 4-25 mm (2 twin).',

      'Radars': 'Surface search:  Type 351 (Pot Head) or Anritsu 726; I-band.',
      'Sonars': 'Stag Ear; hull-mounted; active search; high frequency (in some). ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },






];

const topicsEl = document.getElementById('topics');
const detailEl = document.getElementById('detail');
const searchEl = document.getElementById('search');

let currentIndex = null;      // index in original topics[]
let visibleIndexes = [];      // indexes currently rendered in sidebar (after filtering)

// Tailwind classes used when an item is active.
// We toggle classes on the outer item and on the avatar for clear contrast.
const ACTIVE_OUTER = ['bg-indigo-600', 'text-white'];
const ACTIVE_AVATAR = ['from-indigo-700', 'to-indigo-500'];

// create a sidebar item with SERIAL NUMBER
function makeItem(t, idx) {
  const el = document.createElement('div');
  el.className = 'topic-item p-3 rounded-lg bg-white border border-gray-100 flex items-center gap-3 cursor-pointer';
  el.setAttribute('data-idx', idx);

  // SERIAL NUMBER (idx+1)
  const serialNumber = idx + 1;

  el.innerHTML = `
    <div class="avatar w-12 h-12 rounded-md bg-gradient-to-br from-indigo-400 to-sky-300
                flex items-center justify-center text-white font-semibold">
      ${serialNumber}
    </div>

    <div class="flex-1">
      <div class="font-medium title">
        ${serialNumber}. ${t.title}
      </div>
      <div class="text-xs subtitle text-gray-400">Click to view</div>
    </div>

    <div class="text-xs text-gray-300">›</div>
  `;

  el.addEventListener('click', () => {
    const i = Number(el.getAttribute('data-idx'));
    showDetail(i);
  });

  return el;
}


// render sidebar based on optional filter string
function renderSidebar(filter = '') {
  topicsEl.innerHTML = '';
  visibleIndexes = [];

  const q = (filter || '').toLowerCase().trim();
  topics.forEach((t, i) => {
    if (!q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)) {
      topicsEl.appendChild(makeItem(t, i));
      visibleIndexes.push(i);
    }
  });

  if (visibleIndexes.length === 0) {
    topicsEl.innerHTML = '<div class="text-gray-400 p-2 text-sm">No topics found</div>';
  }

  // apply active styles if currentIndex is visible
  updateActiveSidebar();
}

// apply / remove active styles on sidebar items based on currentIndex
function updateActiveSidebar() {
  const items = topicsEl.querySelectorAll('[data-idx]');
  items.forEach(el => {
    const idx = Number(el.getAttribute('data-idx'));
    const avatar = el.querySelector('.avatar');
    const subtitle = el.querySelector('.subtitle');

    if (idx === currentIndex) {
      // outer
      ACTIVE_OUTER.forEach(c => el.classList.add(c));
      el.style.borderColor = '#4338ca'; // indigo-700 tint for border
      // avatar: replace gradient to indigo shades for contrast
      if (avatar) {
        avatar.classList.remove('from-indigo-400', 'to-sky-300');
        ACTIVE_AVATAR.forEach(c => avatar.classList.add(c));
      }
      // subtitle color
      if (subtitle) subtitle.classList.remove('text-gray-400'), subtitle.classList.add('text-white/80');
    } else {
      // remove
      ACTIVE_OUTER.forEach(c => el.classList.remove(c));
      el.style.borderColor = '';
      if (avatar) {
        avatar.classList.remove(...ACTIVE_AVATAR);
        avatar.classList.add('from-indigo-400', 'to-sky-300');
      }
      if (subtitle) subtitle.classList.remove('text-white/80'), subtitle.classList.add('text-gray-400');
    }
  });
}

// mark currentIndex and ensure sidebar scrolls to visible item (if present)
function selectTopic(i) {
  currentIndex = i;
  updateActiveSidebar();
  const item = topicsEl.querySelector(`[data-idx="${i}"]`);
  if (item) item.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// show detail for topic index i
function showDetail(i) {
  const t = topics[i];
  if (!t) return;

  // build table rows dynamically
  const rows = Object.entries(t.details).map(([k, v]) => `
    <tr class="border-b hover:bg-gray-50">
      <td class="p-3 font-semibold bg-gray-50 w-1/3">${k}</td>
      <td class="p-3">${v}</td>
    </tr>
  `).join('');

  // render detail panel. image uses natural aspect ratio (no forced height)
  detailEl.innerHTML = `
    <div class="fade-up">
     <div class="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-6 flex justify-center gap-4 flex-wrap">
  ${(t.images || [t.img]).map(src => `
      <img loading="lazy" class="max-w-full h-auto object-contain rounded-lg" src="${src}" alt="${t.title}" />
    `).join('')
    }
</div>


      <h2 class="text-3xl font-semibold mb-3 text-indigo-700">${t.title}</h2>
      <p class="text-gray-700 leading-relaxed mb-6">${t.description}</p>

      <table class="w-full border border-gray-300 text-left text-gray-700 rounded-lg overflow-hidden shadow-sm">
        <tbody>${rows}</tbody>
      </table>

      <div class="mt-6 flex items-center gap-4">
        <button id="prevBtn" class="px-4 py-2 rounded-md border bg-indigo-100 hover:bg-gray-100">Previous</button>
        <button id="nextBtn" class="px-4 py-2 rounded-md border bg-indigo-100 hover:bg-gray-100">Next</button>
        <div class="flex-1"></div>
      </div>
    </div>
  `;

  // wire nav buttons (safe: elements are recreated each time)
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  prevBtn && prevBtn.addEventListener('click', navigatePrevious);
  nextBtn && nextBtn.addEventListener('click', navigateNext);

  // update selection highlight
  selectTopic(i);
}

// next/previous navigation (wraps around)
function navigateNext() {
  if (currentIndex === null) return;
  let next = currentIndex + 1;
  if (next >= topics.length) next = 0;
  showDetail(next);
}

function navigatePrevious() {
  if (currentIndex === null) return;
  let prev = currentIndex - 1;
  if (prev < 0) prev = topics.length - 1;
  showDetail(prev);
}

// initial render
renderSidebar('');

// search wiring
searchEl.addEventListener('input', () => {
  renderSidebar(searchEl.value);
});



// Home button functionality — reset to default "empty" view
document.getElementById('homeBtn').addEventListener('click', () => {
  detailEl.innerHTML = `
     <div id="empty" class="text-center text-gray-500">
          <h2 class="text-2xl font-black mb-2">CBT-Sortie</h2>
          <p class="font-sans">INDIAN NAVY</p>
          <br>
          <div class="flex justify-center my-300 pb-7">
            <img src="src/navy.png" alt="navy" class="w-60 h-auto logo">
          </div>
        </div>
  `;
  currentIndex = null;
  updateActiveSidebar(); // remove highlight
});


// === Developer Signature ===
console.log("%c🚀 CBT System © 2025 | Designed & Developed by Aditya Choudhary", "color: red; font-weight: bold; font-size: 14px;");
console.log("%c🔗 GitHub: https://github.com/adiityachoudhary", "color: gray; font-size: 12px;");
