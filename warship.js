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
    id: 'Liaoning (type 001)',
    title: 'Liaoning (type 001)',
    images: ['src/pla/44.jpg'],
    description: 'The Liaoning-class (Type 001) is China’s first aircraft carrier, rebuilt from the unfinished Soviet Varyag hull. It features a ski-jump ramp for STOBAR (Short Take-Off But Arrested Recovery) operations, carrying J-15 fighter jets, helicopters, and AEW aircraft. Equipped with Type 1130 CIWS and HQ-10 missiles for close-in defense, it also has an island superstructure with modern radar systems. Powered by conventional steam turbines, it reaches 29 knots. Liaoning primarily serves as a training platform and proof of concept for carrier operations, marking China’s entry into blue-water naval capability.',
    details: {
      // 'Displacement': '1,625 light; 4,325 full load',
    }
  },

  {
    id: 'Shandong (type 002)',
    title: 'Shandong (type 002) ',
    images: ['src/pla/45.jpg'],
    description: 'The Shandong-class (Type 002) is China’s first domestically built aircraft carrier, based on the Soviet Kuznetsov design. It features a ski-jump ramp for STOBAR (Short Take-Off But Arrested Recovery) operations, carrying J-15 fighter jets, helicopters, and AEW aircraft. Equipped with Type 1130 CIWS and HQ-10 missiles for self-defense, it has an island superstructure with modern radar. Powered by conventional steam turbines.',
    details: {
      // 'Displacement': '14200 tonnes (13975.7 (uk) t) (15652.8 t (short)) (14200000 kg)',
    }
  },
  {
    id: 'Fujian (type 003)',
    title: 'Fujian (type 003)',
    images: ['src/pla/46.jpg'],
    description: 'The Fujian-class (Type 003) is China’s most advanced aircraft carrier, featuring a CATOBAR (Catapult Assisted Take-Off But Arrested Recovery) system with electromagnetic catapults (EMALS) for launching heavier aircraft. It has a large flight deck, an island superstructure with advanced radar, and can carry a mix of J-35 stealth fighters, J-15B jets, and KJ-600 AEW aircraft. Powered by conventional steam turbines, it is China’s first carrier designed for true blue-water operations. Fujian significantly enhances the PLA Navy’s power projection and carrier strike capabilities. Assembly of the new aircraft carrier,  commenced at Jiangnan shipyard, Changxingdao',
    details: {
      // 'Speed': '1,175 kt (2,175 km/h).',
    }
  },
  {
    id: 'Renhai (type 055) x8',
    title: 'Renhai (type 055) x8',
    images: ['src/pla/49.jpg'],
    description: 'Renhai class is associated with the Type 055 destroyers. These are large, advanced, and modern vessels used by the PLA Navy. These have a displacement of around 12,000 tons, making them some of the heaviest and most capable destroyers in the Chinese fleet. These ships can be distinguished by their stealth design. The most advanced guided-missile cruiser, featuring a dual-band AES (active electrnic scaaned array)  radar and a 112-cell VLS for HHQ-9 air-defense, YJ-18 anti-ship, CJ-10 land-attack, and Yu-8 ASW missiles. It is armed with a 130mm naval gun, Type 1130 CIWS, HQ-10 SAMs, and torpedoes for multi-role combat. A stealthy design, integrated mast, and advanced sensors enhance survivability. It carries two Z-20 helicopters for ASW and reconnaissance. Powered by gas turbines, it reaches 32 knots, serving as a key blue-water fleet leader.',
    details: {
      // 'Speed': '134 kt (248 km/h)',
    }
  },
  {
    id: 'Luyang III (type 052D) x26 ',
    title: 'Luyang III (type 052D) x26 ',
    images: ['src/pla/50.jpg'],
    description: 'The Luyang III-class destroyers are a class of advanced multi-role warships operated by the PLA NAvy. These ships are also known as Type 052D destroyers. These have a displacement of about 7,500 tons, slightly smaller than Renhai class, making them mid-sized for modern destroyers. It is a highly advanced multi-role destroyer, featuring a phased-array radar and a 64-cell vertical launch system (VLS) for HHQ-9 air-defense, YJ-18 anti-ship, and CJ-10 land-attack missiles. It is equipped with a 130mm naval gun, Type 1130 CIWS, torpedoes, and ASW rockets for comprehensive combat capabilities. A Z-20 or Z-9C helicopter enhances anti-submarine and reconnaissance roles. Powered by gas turbines, it reaches 31 knots. It is the backbone of China’s modern navy, excelling in air defense, strike, and escort missions.',
    details: {
      // 'Full Load': '59 tonnes (65 t (short)) (59000 kg) ',
    }
  },

  {
    id: 'Luyang II (type 052C) x6',
    title: 'Luyang II (type 052C) x6',
    images: ['src/pla/51.jpg'],
    description: '',
    details: {
      // 'Full Load': '83 tonnes (91.5 t (short)) (83000 kg)',
    }
  },
  {
    id: 'Luyang II (type 052D) Destroyer',
    title: 'Luyang II (type 052D) Destroyer',
    images: ['src/pla/52.jpg'],
    description: 'The Luyang II-class destroyers, also known as the Type 052C destroyers, are an earlier class of Chinese multi-role warships compared to the more advanced Luyang III-class. It has a displacement of approximately 7,000 tons. The Luyang II-class (Type 052C) is China’s first destroyer with a phased-array radar and a modern area air-defense system. Armed with HHQ-9 long-range surface-to-air missiles, YJ-62 anti-ship missiles, and a 100mm naval gun, it excels in fleet defense and strike missions. Type 730 CIWS ensures close-range protection, while torpedoes and ASW rockets enhance anti-submarine warfare. A Z-9C helicopter supports extended operations. Powered by gas turbines, it reaches 31 knots. It laid the foundation for China’s advanced naval air-defense capabilities. ',
    details: {
      // 'Full Load': '98 full load',
    }
  },
  {
    id: 'Luyang I (type 052B) x2',
    title: 'Luyang I (type 052B) x2 ',

    images: ['src/pla/53.jpg'],

    description: ' ',

    details: {
      // 'Full Load': '9 full load',
    }
  },


  {
    id: 'Luyang I (type 052B) x2',
    title: 'Luyang I (type 052B) x2',

    images: ['src/pla/54.jpg'],

    description: ' The Luyang I-class (Type 052) destroyers were an important step in modernizing the Chinese Navy, but they are relatively outdated compared to the more advanced Luyang II and III classes. With a relatively conventional design, basic air defense and anti-submarine capabilities, and older radar and missile systems, these ships represented the early stages of China’s efforts to develop modern warships for its naval forces.It carries surface-to-air missiles, YJ-83 anti-ship missiles, and a 100mm naval gun for versatile combat capability. AK-630 CIWS provides close-range protection, while torpedoes and ASW rockets enhance anti-submarine warfare. A Z-9C helicopter supports reconnaissance and ASW missions. Powered by gas turbines, it reaches 31 knots. it paved the way for advanced Luyang-class successors. ',

    details: {
      // 'Full Load': '9 full load',
    }
  },



  {
    id: 'Luzhou (type 051C) x2 ',
    title: 'Luzhou (type 051C) x2 ',

    images: ['src/pla/55.jpg'],

    description: '',

    details: {
      // 'Full Load': '1780 tonnes (1751.9 (uk) t) (1962.1 t (short)) (1780000 kg) ',
    }
  },


  {
    id: 'Luzhou (type 051C) x2',
    title: 'Luzhou (type 051C) x2',

    images: ['src/pla/56.jpg'],

    description: ' The Luzhou-class (Type 051C) is a Chinese air-defense destroyer equipped with Russian S-300FM (SA-N-20) long-range surface-to-air missiles, making it a key asset for fleet air defense. It also carries YJ-83 anti-ship missiles, a 100mm naval gun, and AK-630 CIWS for close protection. Torpedo tubes and ASW rockets enhance its anti-submarine capability, while a Z-9C helicopter provides reconnaissance and support. Powered by steam turbines, it reaches 29 knots. Built in limited numbers, it serves as a transitional design before China’s modern air-defense destroyers.',

    details: {
      // 'Full Load': '2591 tonnes (2550.1 (uk) t) (2856.1 t (short)) (2591000 kg',
    }
  },



  {
    id: 'Luhai (type 051B) x1',
    title: 'Luhai (type 051B) x1',

    images: ['src/pla/57.jpg'],

    description: 'DADONG 304 ',

    details: {
      // 'Radars': ' Navigation:  Type 756; F-band. '
    }
  },




  {
    id: 'Luhai (type 051B) x1',
    title: 'Luhai (type 051B) x1',

    images: ['src/pla/58.jpg'],

    description: 'The Luhai-class (Type 051B) was China’s first attempt at an indigenously designed modern destroyer. Armed with YJ-83 anti-ship missiles, HQ-7 surface-to-air missiles, and a 100mm naval gun, it has balanced offensive and defensive capabilities. AK-630 CIWS provides close-range protection, while torpedoes and ASW rockets support anti-submarine warfare. A hangar and flight deck accommodate a Z-9C helicopter. Powered by steam turbines, it reaches 29 knots. Though only one was built, it paved the way for future advanced Chinese destroyers.',

    details: {
      // 'Full Load': '6096 tonnes (5999.7 (uk) t) (6719.7 t (short)) (6096000 kg',
    }
  },



  {
    id: 'Luhu (type 052) x2 ',
    title: 'Luhu (type 052) x2 ',

    images: ['src/pla/59.jpg'],

    description: ' ',

    details: {
      // 'Full Load': '12167 tonnes (11974.8 (uk) t) (13411.8 t (short)) (12167000 kg)',
    }
  },


  {
    id: 'Luhu (type 052) x2',
    title: 'Luhu (type 052) x2 ',

    images: ['src/pla/60.jpg'],

    description: 'The Luhu-class (Type 052) is China’s first modern multi-role destroyer, integrating Western and Chinese technologies. Armed with YJ-83 anti-ship missiles, HQ-7 surface-to-air missiles, and a twin 100mm naval gun, it is capable in both offensive and defensive roles. AK-630 CIWS provides close-range protection, while torpedoes and ASW rockets enhance anti-submarine warfare. A Ka-28 or Z-9C helicopter supports extended operations. Powered by CODAG propulsion, it reaches 31 knots. Though limited in numbers, it marked a key step in China’s naval modernization.',

    details: {
      // 'Full Load': '4267 tonnes (4199.6 (uk) t) (4703.6 t (short)) (4267000 kg)',
    }
  },


  {
    id: 'Sovremenny (type 956e/em) x4  ',
    title: 'Sovremenny (type 956e/em) x4  ',

    images: ['src/pla/61.jpg'],

    description: 'Haiyang Dao, Liugong Dao, Chang Dao ',

    details: {
    }
  },



  {
    id: 'Sovremenny (type 956e/em) x4  ',
    title: 'Sovremenny (type 956e/em) x4 ',

    images: ['src/pla/62.jpg'],

    description: 'The Sovremenny-class is a Russian-built guided-missile destroyer operated by the PLA Navy. Equipped with Moskit (SS-N-22) supersonic anti-ship missiles, Shtil (SA-N-7) air defense missiles, and 130mm AK-130 naval guns, it excels in surface and air warfare. For close defense, it features Kashtan and AK-630 CIWS. Torpedoes, ASW rockets, and a Ka-28 helicopter enhance its anti-submarine role. Powered by steam turbines, it reaches 32 knots. Though aging, it remains a key combat asset in China’s fleet.',

    details: {
    }
  },



  {
    id: 'Jiangkai I (type 54) ',
    title: 'Jiangkai I (type 54)  ',

    images: ['src/pla/64.jpg'],

    description: 'The Jiangkai I-class (Type 054) is a class of multi-role frigates used by the PLA Navy. These ships, commissioned in the mid-2000s, are designed for various surface combat tasks and are equipped with advanced radar and weapons systems. They feature a stealthy hull design with sloped surfaces to reduce radar cross-section. It has a displacement of 3500 tonnes. There are 2 ships in this class, namely Ma’Anshan and Wenzhou. Both ofthese ships are based in the east sea fleet and have been deployed oncounter piracy operations.',

    details: {
    }
  },



  {
    id: 'Jiangkai II (type 54a)',
    title: 'Jiangkai II (type 54a) ',

    images: ['src/pla/65.jpg'],

    description: 'The Jiangkai II-class (Type 054A) is an advanced version of the Type 054 (Jiangkai I) frigate, serving in the PLA Navy. It was designed for multi-role surface combat operations, featuring improved sensors, weapons, and overall capabilities compared to their predecessors, Jiangkai I. Displacement – 3500 tonnes This class has a total 35 ships, out of which 30 were launched in 2006-18. Jiankgai III (Type 054B), a guided missile frigate is being built for the Chinese Navy. The first ship of this class, the Luohe was commissioned by China in early 2025. 4 ships of this class were ordered by Pakistan in 2017/18. ',

    details: {
    }
  },



  {
    id: 'Tughril-class frigates',
    title: 'Tughril-class frigates',

    images: ['src/pla/66.jpg'],

    description: 'The Tughril-class frigates, formally classified as the Type 054A/P (Jiangkai II) frigates, are a series of modified guided-missile frigates built by China for the Pakistan Navy. Tughril class ',

    details: {
    }
  },



  {
    id: 'Jiangwei ii (type 53h3) ',
    title: 'Jiangwei ii (type 53h3) ',

    images: ['src/pla/67.jpg'],

    description: 'The Jiangwei II class, designated as Type 053H3 by the PLA Navy, is a series of multi-role guided-missile frigates that entered service between 1999 and 2005. These vessels were developed as an enhancement over the earlier Jiangwei I class (Type 053H2G), incorporating several notable design and armament improvements. Displacement – 2250 tonnes These enhancements make the Jiangwei II class a significant advancement over its predecessor, offering improved offensive and defensive capabilities, as well as extended operational range and endurance. 4 ships of this class of a modified design were built for Pakistan (F-22P/ Sword class).  ',

    details: {
    }
  },




  {
    id: 'Zufiquar class',
    title: 'Zufiquar class ',

    images: ['src/pla/68.jpg'],

    description: 'The Zulfiquar-class frigate also known as F-22P or Sword class, is a class of multi-mission guided missile frigates. The class is based on an updated model of the Chinese Type 053H3 ( Jiangwei Class)  ',

    details: {
    }
  },






  {
    id: 'Jiangdao (type 56/56a)',
    title: 'Jiangdao (type 56/56a)',

    images: ['src/pla/72.jpg'],

    description: 'The Jiangdao-class corvette, designated as Type 056 by the PLA Navy, is a class of littoral combat-oriented corvettes that entered service starting in 2012. These vessels are primarily tasked with missions such as patrolling, guarding, escorting, and anti-submarine operations, either independently or in coordination with other forces. They have a standard displacement of around 1,300 tons and a full load displacement of approximately 1,440 tons. The Jiangdao-class corvettes are primarily used for coastal defense and patrol missions, providing a balance between stealth, firepower, and operational range. They are well-suited for tasks within the First Island Chain, contributing to China’s maritime security and power projection capabilities in regional waters.',

    details: {
    }
  },






  {
    id: 'Fuyu (type 901)',
    title: 'Fuyu (type 901) ',

    images: ['src/pla/74.jpg'],

    description: 'The Type 901 Fuyu-class is China’s largest fast combat support ship, built to resupply aircraft carriers and naval task forces at sea. With a displacement of 45,000+ tons, it carries fuel, ammunition, and supplies, using multiple underway replenishment (UNREP) stations. A large flight deck supports helicopter operations. Gas turbine propulsion gives it a speed of 25 knots, allowing it to keep up with carrier groups. The Type 901 is vital for China’s expanding blue-water navy, ensuring extended operations far from home.',

    details: {
    }
  },



  {
    id: 'Danyao (type 904 a/b)',
    title: 'Danyao (type 904 a/b)',

    images: ['src/pla/75.jpg'],

    description: 'The Danyao-class (Type 904) is a logistics support ship used by the PLA Navy to resupply island outposts and naval forces. With a displacement of around 15,000 tons, it carries food, fuel, and equipment for remote bases. It features a large cargo deck, cranes, and a flight deck for helicopter operations. Diesel-powered, it cruises at around 20 knots. The Type 904 plays a key role in sustaining China’s presence in the South China Sea and other strategic areas.',

    details: {
    }
  },


  {
    id: 'Dayun (type 904) ',
    title: 'Dayun (type 904) ',

    images: ['src/pla/76.jpg'],

    description: 'The Dayun-class (Type 904) is a logistics support ship used by the PLA Navy to resupply remote island bases and naval units. With a displacement of 10,000+ tons, it carries food, fuel, and equipment. It has a large cargo deck, cranes, and a flight deck for helicopter operations. Diesel-powered, it sails at around 20 knots. The Type 904 is essential for sustaining China’s military presence in the South China Sea and other distant regions.',

    details: {
    }
  },


  {
    id: 'Fuchi (type 903/903a) ',
    title: 'Fuchi (type 903/903a) ',

    images: ['src/pla/77.jpg'],

    description: 'The Fuchi-class (Type 903) is a fleet replenishment oiler used by the PLA Navy to resupply warships at sea. With a displacement of 23,000+ tons, it carries fuel, dry stores, and ammunition. It has multiple underway replenishment (UNREP) stations and a flight deck for helicopter operations. Diesel-powered, it cruises at around 20 knots. The Type 903 is crucial for extending the range of China’s naval operations, supporting carrier groups and distant deployments.',

    details: {
    }
  },




  {
    id: 'fusu (type 908) ',
    title: 'fusu (type 908) ',

    images: ['src/pla/78.jpg'],

    description: 'The Fusu-class (Type 908) is a fleet replenishment oiler used by the PLA Navy for at-sea resupply of warships. Originally built for the Ukrainian Navy, it was acquired by China in 1996. With a displacement of 37,000+ tons, it carries fuel, ammunition, and supplies. It features underway replenishment (UNREP) stations and a flight deck for helicopter operations. Diesel-powered, it sails at around 19 knots. The Type 908 enhances China’s blue-water capabilities, supporting long-range naval missions.  ',

    details: {
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




  {
    id: 'Han class (Type 091/091G) ',
    title: 'Han class (Type 091/091G) ',

    images: ['src/67.jpg','src/68.jpg'],

    description: 'HAN 404 (Ships of the World), Changzheng 03/04/05  ',

    details: {
      'Full Load': '4572 tonnes (4499.8 (uk) t) (5039.8 t (short)) (4572000 kg)',
      'Dimensions': 'Lenght: 96 m (315.0 ft)  (403) , 101 m (331.4 ft) (404-405) ',
      'Speed': 'top speed: 25 kt (46.3 km/h) (28.8 mph), dived: 25 kt (46.3 km/h) (28.8 mph), surfaced: 12 kt (22.2 km/h) (13.8 mph) ',

      // 'Range': '750 n miles (1389.0 km) (863.1 miles) at 17 kt (31.5 km/h) (19.6 mph)',

      'Capacity': 'crew: 75',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': 'Nuclear; turbo-electric; 1 PWR; 90 MW; 1 shaft',

      // 'Guns': '4-37 mm/63 (2 twin); 180 rds/min to 8.5 km (4.6 n miles); weight of shell 1.42 kg. 4 Type 69 14.5 mm (2 twin) or 4-25 mm (2 twin).',
      'Missiles': 'SSM:  YJ-82; inertial guidance and active radar terminal homing to 33.3 km (18 n miles) at Mach 0.9; warhead 165 kg; sea-skimmer. ',
      'Torpedoes': '6-533 mm bow tubes; combination of Yu-3 (SET-65E); passive homing to 13 km (7 n miles) at 35 kt; electric; warhead 205 kg; depth to 350 m and Yu-4B; wire-guided and active/passive homing to 15 km (8.1 n miles) at 40 kt; electric; warhead 309 kg. ',
      'Mines': '36 in lieu of torpedoes.',
      'Electronic countermeasures:': 'ESM:  Type 921-A; radar warning.',

      'Radars': 'Surface search:  Snoop Tray; I-band. ',
      'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },




  {
    id: 'Harbin H-5 (Il-28 Beagle).',
    title: 'Harbin H-5 (Il-28 Beagle).',

    images: ['src/69.jpg'],

    description: 'H-5 (Romanian colours) (Lindsay Peacock) ',

    details: {
      // 'Full Load': '4572 tonnes (4499.8 (uk) t) (5039.8 t (short)) (4572000 kg)',
      // 'Dimensions': 'Lenght: 96 m (315.0 ft)  (403) , 101 m (331.4 ft) (404-405) ',
      'Speed': '487 kt (902 km/h). ',

      'Range': '1,175 n miles (2,180 km).',

      // 'Capacity': 'crew: 75',
      // 'Cargo capacity': '9,630 tons fuel' ,

      // 'Machinery': 'Nuclear; turbo-electric; 1 PWR; 90 MW; 1 shaft',

      // 'Guns': '4-37 mm/63 (2 twin); 180 rds/min to 8.5 km (4.6 n miles); weight of shell 1.42 kg. 4 Type 69 14.5 mm (2 twin) or 4-25 mm (2 twin).',
      // 'Missiles': 'SSM:  YJ-82; inertial guidance and active radar terminal homing to 33.3 km (18 n miles) at Mach 0.9; warhead 165 kg; sea-skimmer. ',
//       'Torpedoes': '6-533 mm bow tubes; combination of Yu-3 (SET-65E); passive homing to 13 km (7 n miles) at 35 kt; electric; warhead 205 kg; depth to 350 m and Yu-4B; wire-guided and active/passive homing to 15 km (8.1 n miles) at 40 kt; electric; warhead 309 kg. ',
      'Role/Weapon systems': 'Overwater strike aircraft with ASW/ASVW roles. Numbers are doubtful as some have been phased out and others moved into second line roles suchas target towing and ECM training. Weapons: ASW; two torpedoes or four depth bombs. ASVW; one torpedo + mines. Standard; four 23 mm cannon. ',
      // 'Electronic countermeasures:': 'ESM:  Type 921-A; radar warning.',

      // 'Radars': 'Surface search:  Snoop Tray; I-band. ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },



  {
    id: 'Hongqi class',
    title: 'Hongqi class',

    images: ['src/70.jpg','src/71.jpg'],

    description: 'HONGQI CLASS (Bob Fildes) ,Fleetlist: Bei Yun 443, Bei Yun 528, Dong Yun 755, Dong Yun 756, Dong Yun 771, Nan Yun 835, Nan Yun 836 ',

    details: {
      'Full Load': '1981 tonnes (1949.7 (uk) t) (2183.7 t (short)) (1981000 kg)',
      'Dimensions': 'Lenght: 62 m (203.4 ft) ',
      'Speed': '14 kt (25.9 km/h) (16.1 mph) ',

      'Range': '2500 n miles (4630.0 km) (2876.9 miles) at 11 kt (20.4 km/h) (12.7 mph)',

      'Capacity': 'crew: 35',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '1 diesel; 1 shaft',

      'Guns': '4 Type 4 25 mm/80 (2 twin). ',
      // 'Missiles': 'SSM:  YJ-82; inertial guidance and active radar terminal homing to 33.3 km (18 n miles) at Mach 0.9; warhead 165 kg; sea-skimmer. ',
//       'Torpedoes': '6-533 mm bow tubes; combination of Yu-3 (SET-65E); passive homing to 13 km (7 n miles) at 35 kt; electric; warhead 205 kg; depth to 350 m and Yu-4B; wire-guided and active/passive homing to 15 km (8.1 n miles) at 40 kt; electric; warhead 309 kg. ',
      // 'Electronic countermeasures:': 'ESM:  Type 921-A; radar warning.',

      // 'Radars': 'Surface search:  Snoop Tray; I-band. ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      // 'Helicopters': '1 Z-8 Super Frelon. '
    }
  },




  {
    id: 'Houjian (Type 037/2) class',
    title: 'Houjian (Type 037/2) class',

    images: ['src/74.jpg'],

    description: 'Yangjiang, Shunde, Nanhai, Panyu, Lianjiang, Xinhui ',

    details: {
      'Full Load': '528 tonnes (519.7 (uk) t) (582.0 t (short)) (528000 kg)',
      'Dimensions': 'Lenght: 65.4 m (214.6 ft) ',
      'Speed': '32 kt (59.3 km/h) (36.8 mph)',

      'Range': '1800 n miles (3333.6 km) (2071.4 miles) at 18 kt (33.3 km/h) (20.7 mph) ',

      'Capacity': 'crew: 75',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '3 SEMT-Pielstick 12PA6-280 diesels; 15,840 hp(m) (11.7 MW) sustained; 3 shafts ',

      'Guns': '2 Type 76A 37 mm/63 (twin); 360 rds/min to 8.5 km (4.6 n miles); weight of shell 0.73 kg. 4 Type 69 30 mm/65 (2 twin); 600 rds/min to 7 km (3.8 n miles). ',

      'Missiles': 'SSM:  6 YJ-83 (CSS-N-8 Saccade) (2 triple); inertial guidance and active radar terminal homing to 180 km (97.2 n miles) at Mach 0.9; warhead 165 or 190 kg; sea skimmer. ',

      'Physical countermeasures:': 'Decoys:  16 Type 945G 18-barrelled launcher. ',
      'Electronic countermeasures:': ' ESM:  Type 928; intercept. ',

      'Radars': 'Surface search:  Type 363; E/F-band, Fire control:  Type 344 (MR 34) I-band, Navigation:  Type 765; I-band.',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      // 'Weapon control systems': 'Type JM-83 optronic director. '
    }
  },



  {
    id: 'Houku (type 024) class ',
    title: 'Houku (type 024) class ',

    images: ['src/75.jpg'],

    description: 'HOUKU (A Sheldon Duplaix) ',

    details: {
      'Full Load': '68 standard; 79.2 full load ',
      'Dimensions': 'Lenght: 88.6 × 20.7 × 4.3 (27 × 6.3 × 1.3) (28.6 m-Hema class)',
      'Speed': '37.5',

      'Range': '400 at 30 kt',

      'Complement': 'crew: 17 (2 officers)',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '4 Type L-12V-180 diesels; 4,800 hp(m) (3.53 MW); 4 shafts ',

      'Guns': '2 USSR 25 mm/60 (twin) (4 (2 twin) in Hema class); 270 rds/min to 3 km (1.6 n miles) anti-aircraft; weight of shell 0.34 kg ',

      'Missiles': 'SSM: 2 SY-1 (CSS-N-1 Scrubbrush); inertial cruise; active radar homing to 45 km (24.3 n miles) at 0.9 Mach; warhead 513 kg. 1 C-801 in one of the class ',

      // 'Physical countermeasures:': 'Decoys:  16 Type 945G 18-barrelled launcher. ',
      // 'Electronic countermeasures:': ' ESM:  Type 928; intercept. ',

      'Radars': 'Surface search: Square Tie; I-band; range 73 km (40 n miles) ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      'IFF': 'High pole A'
    }
  },




  {
    id: 'Huangfen (Type 021) (Osa I Type) ',
    title: 'Huangfen (Type 021) (Osa I Type)  ',

    images: ['src/78.jpg','src/79.jpg'],

    description: 'HUANGFEN 6120 (Ships of the World)',

    details: {
      'Load': 'standard: 174 tonnes (171.3 (uk) t) (191.8 t (short)) (174000 kg) full load: 208 tonnes (204.7 (uk) t) (229.3 t (short)) (208000 kg) ',
      'Dimensions': 'Lenght: 38.6 m (126.6 ft)',
      'Speed': '35 kt (64.8 km/h) (40.3 mph)',

      'Range': '800 n miles (1481.6 km) (920.6 miles) at 30 kt (55.6 km/h) (34.5 mph)',

      'Complement': 'crew: 28',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '3 Type 42-160 diesels; 12,000 hp(m) (8.8 MW) sustained; 3 shafts',
      
      'Missiles': 'SSM:  4 C-201 (HY-2/CSS-N-3 Seersucker) (2 twin) launchers; active radar or IR homing to 95 km (51 n miles) at 0.9 Mach; warhead 513 kg.',

      'Guns': '4 USSR 25 mm/60 (2 twin); 270 rds/min to 3 km (1.6 n miles) anti-aircraft. Replaced in some by 4 USSR 30 mm/65 (2 twin) AK 230.',


      // 'Physical countermeasures:': 'Decoys:  16 Type 945G 18-barrelled launcher. ',
      // 'Electronic countermeasures:': ' ESM:  Type 928; intercept. ',

      'Radars': 'Surface search:  Type 352C; Square Tie; I-band.  Fire control:  Type 331 Round Ball or Type 341 Rice Lamp; H/I-band.  IFF:  2 Square Head; High Pole A. ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      // 'IFF': 'High pole A'
    }
  },





  {
    id: 'Huchuan (type 025/026) class',
    title: 'Huchuan (type 025/026) class ',

    images: ['src/80.jpg'],

    description: 'HUCHUAN (CSSC)',

    details: {
      'Displacement, tons': '39 standard; 45.8 full load',
      'Dimensions': '71.5 × 20.7 oa × 11.8 ft (hullborne) (21.8 × 6.3 × 3.6 metres) ',
      'Speed': '50 foilborne ',

      'Range': '500 at 30 kt',

      'Complement': 'crew: 16',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '3 Type M 50 diesels; 3,300 hp(m) (2.42 MW) sustained; 3 shafts',
      
      // 'Missiles': 'SSM:  4 C-201 (HY-2/CSS-N-3 Seersucker) (2 twin) launchers; active radar or IR homing to 95 km (51 n miles) at 0.9 Mach; warhead 513 kg.',

      'Guns': '4 China 14.5 mm (2 twin); 600 rds/min to 7 km (3.8 n miles)',
      'Torpedoes': '2-21 in (533 mm) tubes. Yu-1; anti-ship; to 9.2 km (5 n miles) at 39 kt or 3.7 km (2.1 n miles) at 51 kt; warhead 400 kg',


      // 'Physical countermeasures:': 'Decoys:  16 Type 945G 18-barrelled launcher. ',
      // 'Electronic countermeasures:': ' ESM:  Type 928; intercept. ',

      'Radars': 'Surface search: Skin Head or China Type 753; I-band',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      // 'IFF': 'High pole A'
    }
  },





  {
    id: 'Hudong class (submarine rescue ship)',
    title: 'Hudong class (submarine rescue ship)',

    images: ['src/81.jpg'],

    description: 'HAIJUI 512 ',

    details: {
      'Displacement, tons': '4,500 standard; 4,900 full load',
      'Dimensions': '308.5 × 55.8 × 15.1 ft (94 × 17 × 4.6 metres) ',
      'Speed': '16 knots',

      'Range': '5,000 at 12 kt',

      'Complement': '225(est)',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 diesels; 3,600 hp(m) (2.64 MW); 2 shafts',
      
      // 'Missiles': 'SSM:  4 C-201 (HY-2/CSS-N-3 Seersucker) (2 twin) launchers; active radar or IR homing to 95 km (51 n miles) at 0.9 Mach; warhead 513 kg.',

      'Guns': '4 China 37 mm/63 (2 twin). 4 China 14.5 mm/93 (2 twin)',
      // 'Torpedoes': '2-21 in (533 mm) tubes. Yu-1; anti-ship; to 9.2 km (5 n miles) at 39 kt or 3.7 km (2.1 n miles) at 51 kt; warhead 400 kg',


      // 'Physical countermeasures:': 'Decoys:  16 Type 945G 18-barrelled launcher. ',
      // 'Electronic countermeasures:': ' ESM:  Type 928; intercept. ',

      'Radars': 'Navigation: Fin Curve; I-band ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
      // 'IFF': 'High pole A'
    }
  },




  {
    id: 'Huludao class (Type 206) ',
    title: 'Huludao class (Type 206) ',

    images: ['src/82.jpg'],

    description: 'HAI GONG HULUDAO ',

    details: {
      'Displacement, tons': '180 full load ',
      'Dimensions': '147.6 × 21 × 5.6 ft (45 × 6.4 × 1.7 metres)',
      'Speed': '29 knots',

      'Range': '1,000 at 15 kt ',

      'Complement': '24 (6 officers) ',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '3 MWM TBD604BV12 diesels; 5,204 hp(m) (3.82 MW) sustained; 3 shafts ',
      
      'Guns': '6 China 14.5 mm Type 82 (3 twin); 600 rds/min to 7 km (3.8 n miles); weight of shell 1.42 kg. ',

      // 'Radars': 'Navigation: Fin Curve; I-band ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
    }
  },




  {
    id: 'Huxin class',
    title: 'Huxin class  ',

    images: ['src/83.jpg'],

    description: 'HUXIN 44091 ',

    details: {
      'Displacement': '168 tonnes (185.2 t (short)) (168000 kg)',
      'Dimensions': 'Length: 28 m (91.86 ft) ',
      'Speed': '17 knots',

      'Range': '400 n miles at 10 kt',

      'Complement': '26 ',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 diesels; 1,000 hp(m) (735 kW); 2 shafts',
      
      'Guns': '2 China 14.5 mm/93 (twin). ',

      'Radars': 'Surface search:  Skin Head; I-band. ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
    }
  },




  {
    id: 'Inshore patrol craft',
    title: 'Inshore patrol craft ',

    images: ['src/84.jpg','src/85.jpg'],

    description: 'GONG BIAN 3110, GONG BIAN SPEEDBOAT (T Hollingsbee) ',

    details: {
      'Displacement': '33 tonnes (36.4 t (short)) (33000 kg)',
      'Dimensions': 'Length: 18.9 m (62.01 ft)',
      'Speed': '15 knots',

      // 'Range': '400 n miles at 10 kt',

      'Complement': 'crew: 5',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 diesels; 900 hp(m) (662 kW); 2 shafts',
      
      'Guns': '1-12.7 mm MG.',

      // 'Radars': 'Surface search:  Skin Head; I-band. ',
      // 'Sonars': 'Trout Cheek; hull-mounted; active/passive search and attack; medium frequency. DUUX-5; passive ranging and intercept; low frequency. ',
    }
  },





  {
    id: 'Jiangdao (Type 056), Jiangdao (Type 056A)',
    title: 'Jiangdao (Type 056), Jiangdao (Type 056A)',

    images: ['src/86.jpg','src/87.jpg','src/88.jpg'],

    description: 'BENGBU (Ships of the World), TYPE 056 (Ian Sturton), TYPE 056A (Kürsener Collection)',

    details: {
      'Displacement': '1500 tonnes (1476.3 (uk) t) (1653.5 t (short)) (1500000 kg)',
      'Dimensions': 'Length: 89.0 m (292.0 ft) ',
      'Speed': '25 kt (46.3 km/h) (28.8 mph)',

      'Range': '3500 n miles (6482.0 km) (4027.7 miles) at 16 kt (29.6 km/h) (18.4 mph)',

      'Complement': 'crew: 60, officers: 18 ',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 diesels; 2 shafts; cp props ',

      'Missiles': 'Four slant-mounted containerised missile launchers [Ref 1], containing either:  SSM:  4 YJ-83 (CSS-N-8 Saccade) (2 twin); inertial guidance and active radar terminal homing to 180 km (97.2 n miles) at Mach 0.9; warhead 165 or 190 kg; sea-skimmer [Ref 1] or  ASW:  4 ASROC-type torpedo-carrying missiles (possibly canister launched version of Cy-5 or Yu-8 derivative).  SAM:  1 HHQ-10 8-cell launcher [Ref 2]; passive IR/anti-radiation homing to 9.0 km (4.9 n miles).',

      
      'Guns': '1 H/PJ-26 76 mm/59 (AK-176); 120 rds/min to 15 km (8.1 n miles); weight of shell 5.9 kg [Ref 3]. 2 H/PJ-17 30 mm; 350 rds/min to 3 km (1.6 n miles) [Ref 4]. 2-12.7 mm or 14.5 mm machine guns (Hong Kong-based ships).',
      
      'Torpedoes': '6-324 mm (2 triple) tubes; Yu-7; active/passive homing to 14 km (7.6 n miles) at 43 kt; thermal; warhead 45 kg. ',

      'Physical countermeasures': 'Decoys:  2 9-barrelled launchers',

      'Electronic countermeasures': 'ESM:  To be announced. ',

      'Radars': 'Air/surface search:  Type 364 (Seagull C 5) [Ref 5] G-band,  Navigation:  Type 760 I-band [Ref 6],  Fire control:  Type 347G (LR66) [Ref 7] I-band. ',

      'Sonars': 'Bow mounted. VDS and SJG-206 towed array (ASW variant).',
      'Combat data systems ': 'ZKJ-5 II Combat Command System. SATCOM. ',
      'Electro-optic systems': 'IR-17 optronic sensor.',
      'Helicopters': 'Platform for 1 Z-9C/D.',
    }
  },



  {
    id: 'Jianghu I/I Upgrade (Type 053H1/053H1G) class',
    title: 'Jianghu I/I Upgrade (Type 053H1/053H1G) class',

    images: ['src/89.jpg','src/90.jpg','src/91.jpg','src/92.jpg','src/93.jpg'],

    description: 'TYPE 053H1 (JIANGHU I) (TAIZHOU) SILHOUETTE (Ian Sturton), TYPE 053H1G (JIANGHU I UPGRADE) (DONGGUAN) SILHOUETTE (Ian Sturton)',

    details: {
      'Displacement': '1500 tonnes (1476.3 (uk) t) (1653.5 t (short)) (1500000 kg)',
      'Dimensions': 'Length: 89.0 m (292.0 ft) ',
      'Speed': '25 kt (46.3 km/h) (28.8 mph)',

      'Range': '3500 n miles (6482.0 km) (4027.7 miles) at 16 kt (29.6 km/h) (18.4 mph)',

      'Complement': 'crew: 60, officers: 18 ',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 diesels; 2 shafts; cp props ',

      'Missiles': 'Four slant-mounted containerised missile launchers [Ref 1], containing either:  SSM:  4 YJ-83 (CSS-N-8 Saccade) (2 twin); inertial guidance and active radar terminal homing to 180 km (97.2 n miles) at Mach 0.9; warhead 165 or 190 kg; sea-skimmer [Ref 1] or  ASW:  4 ASROC-type torpedo-carrying missiles (possibly canister launched version of Cy-5 or Yu-8 derivative).  SAM:  1 HHQ-10 8-cell launcher [Ref 2]; passive IR/anti-radiation homing to 9.0 km (4.9 n miles).',

      
      'Guns': '1 H/PJ-26 76 mm/59 (AK-176); 120 rds/min to 15 km (8.1 n miles); weight of shell 5.9 kg [Ref 3]. 2 H/PJ-17 30 mm; 350 rds/min to 3 km (1.6 n miles) [Ref 4]. 2-12.7 mm or 14.5 mm machine guns (Hong Kong-based ships).',
      
      'Torpedoes': '6-324 mm (2 triple) tubes; Yu-7; active/passive homing to 14 km (7.6 n miles) at 43 kt; thermal; warhead 45 kg. ',

      'Physical countermeasures': 'Decoys:  2 9-barrelled launchers',

      'Electronic countermeasures': 'ESM:  To be announced. ',

      'Radars': 'Air/surface search:  Type 364 (Seagull C 5) [Ref 5] G-band,  Navigation:  Type 760 I-band [Ref 6],  Fire control:  Type 347G (LR66) [Ref 7] I-band. ',

      'Sonars': 'Bow mounted. VDS and SJG-206 towed array (ASW variant).',
      'Combat data systems ': 'ZKJ-5 II Combat Command System. SATCOM. ',
      'Electro-optic systems': 'IR-17 optronic sensor.',
      'Helicopters': 'Platform for 1 Z-9C/D.',
    }
  },




  {
    id: 'Jianghu III (Type 053H2) class ',
    title: 'Jianghu III (Type 053H2) class ',

    images: ['src/94.jpg','src/95.jpg','src/96.jpg'],

    description: 'CANGZHOU (Ian Sturton), CANGZHOU (Ships of the World)',

    details: {
      'Displacement': '1955 tonnes (1924.1 (uk) t) (2155.0 t (short)) (1955000 kg)',
      'Dimensions': 'Length: 103.2 m (338.6 ft) ',
      'Speed': '26 kt (48.2 km/h) (29.9 mph)',

      'Range': '4000 n miles (7408.0 km) (4603.1 miles) at, 15 kt (27.8 km/h) (17.3 mph), 2700 n miles (5000.4 km) (3107.1 miles) at, 18 kt (33.3 km/h) (20.7 mph)',

      'Complement': 'crew: 130',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 Type 18E 390V diesels; 14,400 hp(m) (10.6 MW) sustained; 2 shafts',

      'Missiles': 'SSM:  8 YJ-83 (CSS-N-8 Saccade) (2 quad) [Ref 1]; inertial guidance and active radar terminal homing to 180 km (97.2 n miles) at Mach 0.9; warhead 165 or 190 kg; sea-skimmer.',

      'Guns': '4 H/PJ-87 100 mm/56 (2 twin) [Ref 2]; 25 rds/min to 22 km (12 n miles); weight of shell 15.6 kg. 8-37 mm/63 (4 twin) [Ref 3]; 180 rds/min to 8.5 km (4.6 n miles) anti-aircraft; weight of shell 1.42 kg. ',

      'A/S Mortars': 'RPS Uragan system; 2 RBU-1200 5-barrel launchers [Ref 4]; RGB-12 rocket-propelled depth charges; range 400-1,200 m; depth 15-350 m; warhead 30 kg.',

      'Mines': 'Can carry up to 60.',
      'Depth Charges': '2 BMB-2 projectors; 2 racks. ',
      
      'Physical countermeasures': 'Decoys:  2 China 26-barrelled chaff launchers.',

      'Electronic countermeasures': 'ESM:  Elettronica Newton; radar warning., ECM:  Elettronica 929 (Type 981); jammer.',

      'Radars': 'Air search:  Type 517 (Knife Rest) [Ref 5]; A-band., Air/surface search:  Type 354 (Eye Shield) [Ref 6]; G-band., Surface search/fire control:  Type 352 (Square Tie) [Ref 7]; I-band., Navigation:  Fin Curve; I-band., Fire control:  Type 347G (Rice Bowl) [Ref 8]; I/J-band. Type 343, (Wok Won) [Ref 9]; I-band., IFF:  High Pole A. Square Head. ',

      'Sonars': 'Echo Type 5; hull-mounted; active search and attack; medium frequency.',
      'Combat data systems ': 'ZKJ-3. ',
      // 'Electro-optic systems': 'IR-17 optronic sensor.',
      // 'Helicopters': 'Platform for 1 Z-9C/D.',
    }
  },




  {
    id: 'Jianghu IV (Type 053HTH)',
    title: 'Jianghu IV (Type 053HTH)',

    images: ['src/97.jpg','src/98.jpg','src/99.jpg'],

    description: 'Lushun (ex-Siping) ',

    details: {
      'Displacement': 'standard: 1575 tonnes (1550.1 (uk) t) (1736.1 t (short)) (1575000 kg), full load: 1895 tonnes (1865.1 (uk) t) (2088.9 t (short)) (1895000 kg)',
      'Dimensions': 'Length: 103.2 m (338.6 ft) ',
      'Speed': '26 kt (48.2 km/h) (29.9 mph) ',

      'Range': '4000 n miles (7408.0 km) (4603.1 miles) at 15 kt (27.8 km/h) (17.3 mph) 2700 n miles (5000.4 km) (3107.1 miles) at 18 kt (33.3 km/h) (20.7 mph)',

      'Complement': 'crew: 185, officers: 30 ',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 Type 12E 390V diesels; 14,400 hp(m) (10.6 MW) sustained; 2 shafts ',

      'Missiles': 'SSM:  2 HY-2 (CSSC-3 Seersucker) (twin) launchers [Ref 1]; active radar or IR homing to 95 km (51 n miles) at Mach 0.9; warhead 513 kg. ',

      'Guns': '1 Creusot-Loire 100 mm/55 [Ref 2]; 60-80 rds/min to 17 km (9.3 n miles); weight of shell 13.5 kg. 8-37 mm/63 (4 twin) [Ref 3]; 180 rds/min to 8.5 km (4.6 n miles) anti-aircraft; weight of shell 1.42 kg.',

      'Torpedoes': '6-324 mm ILAS (2 triple) tubes [Ref 4]. Yu-7 active/passive homing to 14 km (7.6 n miles) at 43 kt; warhead 45 kg.',

      'A/S Mortars': 'RPS Uragan system; 2 RBU-1200 5-barrel launchers [Ref 5]; RGB-12 rocket-propelled depth charges; range 400-1,200 m; depth 15-350 m; warhead 30 kg.',

      'Physical countermeasures': 'Decoys:  2 SRBOC Mk 33 6-barrelled chaff launchers or 2 China 26-barrelled launchers.',

      'Radars': 'Air/surface search:  Type 354 (Eye Shield) [Ref 6]; G-band.,  Surface search/fire control:  Type 352 (Square Tie) [Ref 7]; I-band.,  Navigation:  Don 2 or Fin Curve; I-band.,  IFF:  High Pole A. Yard Rake or Square Head. ',

      'Sonars': 'Echo Type 5; hull-mounted; active search and attack; medium frequency.',
      'Weapon control systems ': 'CSEE Naja optronic director for 100 mm gun. ',
      'Helicopters': '1 Z-9C [Ref 8].',
    }
  },




  {
    id: 'Jiangkai I (Type 054) class ',
    title: 'Jiangkai I (Type 054) class ',

    images: ['src/100.jpg','src/101.jpg','src/102.jpg'],

    description: 'MA\'ANSHAN (Ian Sturton) ',

    details: {
      'Displacement': 'standard: 1575 tonnes (1550.1 (uk) t) (1736.1 t (short)) (1575000 kg), full load: 1895 tonnes (1865.1 (uk) t) (2088.9 t (short)) (1895000 kg)',
      'Dimensions': 'Length: 103.2 m (338.6 ft) ',
      'Speed': '26 kt (48.2 km/h) (29.9 mph) ',

      'Range': '4000 n miles (7408.0 km) (4603.1 miles) at 15 kt (27.8 km/h) (17.3 mph) 2700 n miles (5000.4 km) (3107.1 miles) at 18 kt (33.3 km/h) (20.7 mph)',

      'Complement': 'crew: 185, officers: 30 ',
      // 'Cargo capacity': '9,630 tons fuel' ,

      'Machinery': '2 Type 12E 390V diesels; 14,400 hp(m) (10.6 MW) sustained; 2 shafts ',

      'Missiles': 'SSM:  2 HY-2 (CSSC-3 Seersucker) (twin) launchers [Ref 1]; active radar or IR homing to 95 km (51 n miles) at Mach 0.9; warhead 513 kg. ',

      'Guns': '1 Creusot-Loire 100 mm/55 [Ref 2]; 60-80 rds/min to 17 km (9.3 n miles); weight of shell 13.5 kg. 8-37 mm/63 (4 twin) [Ref 3]; 180 rds/min to 8.5 km (4.6 n miles) anti-aircraft; weight of shell 1.42 kg.',

      'Torpedoes': '6-324 mm ILAS (2 triple) tubes [Ref 4]. Yu-7 active/passive homing to 14 km (7.6 n miles) at 43 kt; warhead 45 kg.',

      'A/S Mortars': 'RPS Uragan system; 2 RBU-1200 5-barrel launchers [Ref 5]; RGB-12 rocket-propelled depth charges; range 400-1,200 m; depth 15-350 m; warhead 30 kg.',

      'Physical countermeasures': 'Decoys:  2 SRBOC Mk 33 6-barrelled chaff launchers or 2 China 26-barrelled launchers.',

      'Radars': 'Air/surface search:  Type 354 (Eye Shield) [Ref 6]; G-band.,  Surface search/fire control:  Type 352 (Square Tie) [Ref 7]; I-band.,  Navigation:  Don 2 or Fin Curve; I-band.,  IFF:  High Pole A. Yard Rake or Square Head. ',

      'Sonars': 'Echo Type 5; hull-mounted; active search and attack; medium frequency.',
      'Weapon control systems ': 'CSEE Naja optronic director for 100 mm gun. ',
      'Helicopters': '1 Z-9C [Ref 8].',
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
