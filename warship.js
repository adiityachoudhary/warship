/**
 * Project: CBT System
 * File: warship.js
 * Description: catalogue.
 * Author: Aditya Choudhary(Computer Science Graduate | Developer | Lifelong Learner)
 * GitHub: https://github.com/adiityachoudhary
 * Created: 12-Nov-2025
 * Last Modified: 02-Dec-2025 (updated navigation & layout)
 * Version: 1.0.2
 * License: MIT
 * Signature: © 2025 Aditya Choudhary | All Rights Reserved
 *
 * Change log:
 *  - 02-Dec-2025: Fixed image count labeling and removed image container from the details slide
 *  - 10-Dec-2025: (this file) Show description only on last page, remove search bar,
 *                dynamic button labels, no circular navigation, one-button last slide.
 */


const topics = [
  // (unchanged data) ... paste your full topics array exactly as before
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
    title: 'Luyang I (type 052B) x2',

    images: ['src/pla/53.jpg'],

    description: ' The Luyang I-class (Type 052) destroyers were an important step in modernizing the Chinese Navy, but they are relatively outdated compared to the more advanced Luyang II and III classes. With a relatively conventional design, basic air defense and anti-submarine capabilities, and older radar and missile systems, these ships represented the early stages of China’s efforts to develop modern warships for its naval forces.It carries surface-to-air missiles, YJ-83 anti-ship missiles, and a 100mm naval gun for versatile combat capability. AK-630 CIWS provides close-range protection, while torpedoes and ASW rockets enhance anti-submarine warfare. A Z-9C helicopter supports reconnaissance and ASW missions. Powered by gas turbines, it reaches 31 knots. it paved the way for advanced Luyang-class successors. ',

    details: {
      // 'Full Load': '9 full load',
    }
  },



  {
    id: 'Luzhou (type 051C) x2',
    title: 'Luzhou (type 051C) x2',

    images: ['src/pla/55.jpg'],

    description: ' The Luzhou-class (Type 051C) is a Chinese air-defense destroyer equipped with Russian S-300FM (SA-N-20) long-range surface-to-air missiles, making it a key asset for fleet air defense. It also carries YJ-83 anti-ship missiles, a 100mm naval gun, and AK-630 CIWS for close protection. Torpedo tubes and ASW rockets enhance its anti-submarine capability, while a Z-9C helicopter provides reconnaissance and support. Powered by steam turbines, it reaches 29 knots. Built in limited numbers, it serves as a transitional design before China’s modern air-defense destroyers.',

    details: {
      // 'Full Load': '2591 tonnes (2550.1 (uk) t) (2856.1 t (short)) (2591000 kg',
    }
  },






  {
    id: 'Luhai (type 051B) x1',
    title: 'Luhai (type 051B) x1',

    images: ['src/pla/57.jpg',],

    description: 'The Luhai-class (Type 051B) was China’s first attempt at an indigenously designed modern destroyer. Armed with YJ-83 anti-ship missiles, HQ-7 surface-to-air missiles, and a 100mm naval gun, it has balanced offensive and defensive capabilities. AK-630 CIWS provides close-range protection, while torpedoes and ASW rockets support anti-submarine warfare. A hangar and flight deck accommodate a Z-9C helicopter. Powered by steam turbines, it reaches 29 knots. Though only one was built, it paved the way for future advanced Chinese destroyers.',

    details: {
      // 'Full Load': '6096 tonnes (5999.7 (uk) t) (6719.7 t (short)) (6096000 kg',
    }
  },




  {
    id: 'Luhu (type 052) x2',
    title: 'Luhu (type 052) x2 ',

    images: ['src/pla/59.jpg'],

    description: 'The Luhu-class (Type 052) is China’s first modern multi-role destroyer, integrating Western and Chinese technologies. Armed with YJ-83 anti-ship missiles, HQ-7 surface-to-air missiles, and a twin 100mm naval gun, it is capable in both offensive and defensive roles. AK-630 CIWS provides close-range protection, while torpedoes and ASW rockets enhance anti-submarine warfare. A Ka-28 or Z-9C helicopter supports extended operations. Powered by CODAG propulsion, it reaches 31 knots. Though limited in numbers, it marked a key step in China’s naval modernization.',

    details: {
      // 'Full Load': '4267 tonnes (4199.6 (uk) t) (4703.6 t (short)) (4267000 kg)',
    }
  },



  {
    id: 'Sovremenny (type 956e/em) x4  ',
    title: 'Sovremenny (type 956e/em) x4 ',

    images: ['src/pla/61.jpg'],

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

    description: 'The Tughril-class frigates, formally classified as the Type 054A/P (Jiangkai II) frigates, are a series of modified guided-missile frigates built by China for the Pakistan Navy. Tughril class ',

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

    description: 'The Zulfiquar-class frigate also known as F-22P or Sword class, is a class of multi-mission guided missile frigates. The class is based on an updated model of the Chinese Type 053H3 ( Jiangwei Class)  ',

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
    id: 'Haizhui/Shanghai III (Type 062/1) class ',
    title: 'Haizhui/Shanghai III (Type 062/1) class ',

    images: ['src/66.jpg'],

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
    id: 'Jiangdao (Type 056), Jiangdao (Type 056A)',
    title: 'Jiangdao (Type 056), Jiangdao (Type 056A)',

    images: ['src/87.jpg'],

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

    images: ['src/94.jpg'],

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
      'Guns': '1 H/PJ-26 76 mm/59 (AK-176); 120 rds/min to 15 km (8.1 n miles); weight of shell 5.9 kg [Ref 3]. 2 H/PJ-17 30 mm; 350 rds/min to 3 km (1.6 n miles) [Ref 4]. 2-12.7 mm or 14.5 mm machine guns ( Hong Kong-based ships).',
      'Torpedoes': '6-324 mm ILAS (2 triple) tubes; Yu-7 active/passive homing to 14 km (7.6 n miles) at 43 kt; warhead 45 kg.',
      'Physical countermeasures': 'Decoys:  2 SRBOC Mk 33 6-barrelled chaff launchers or 2 China 26-barrelled launchers.',
      'Radars': 'Air/surface search:  Type 354 (Eye Shield) [Ref 6]; G-band.,  Surface search/fire control:  Type 352 (Square Tie) [Ref 7]; I-band.,  Navigation:  Don 2 or Fin Curve; I-band.,  IFF:  High Pole A. Yard Rake or Square Head. ',
      'Sonars': 'Echo Type 5; hull-mounted; active search and attack; medium frequency.',
      'Combat data systems ': 'ZKJ-3. ',
      'Electro-optic systems': 'IR-17 optronic sensor.',
      'Helicopters': 'Platform for 1 Z-9C/D.',
    }
  },

  {
    id: 'Jianghu III (Type 053H2) class ',
    title: 'Jianghu III (Type 053H2) class ',

    images: ['src/94.jpg'],

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

    images: ['src/97.jpg'],

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

    images: ['src/100.jpg'],

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

  // ... (rest of topics unchanged)
];

// DOM roots
const topicsEl = document.getElementById('topics');
const detailEl = document.getElementById('detail');
// removed searchEl - search bar removed per request

let currentIndex = null;      // index in original topics[]
let visibleIndexes = [];      // indexes currently rendered in sidebar (after filtering)

// per-ship subslide index. 0 = display_image (placeholder), 1..M = images, M+1 = details
let currentSubslide = 0;

// Tailwind classes used when an item is active.
const ACTIVE_OUTER = ['bg-indigo-600', 'text-white'];
const ACTIVE_AVATAR = ['from-indigo-700', 'to-indigo-500'];

/**
 * Helper: placeholder display image src for ship index (1-based in path).
 * As requested: "src/disp/1.jpg", "src/disp/2.jpg", ...
 */
function displayImageSrcForShipIndex(idx) {
  return `src/disp/${idx + 1}.jpg`;
}

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
    // When selecting a ship via sidebar, select that ship and reset subslide to 0 (display image)
    showDetail(i, /* resetSubslide = */ true);
  });

  return el;
}


// render sidebar based on optional filter string (search removed; still supports optional filter param)
function renderSidebar(filter = '') {
  topicsEl.innerHTML = '';
  visibleIndexes = [];

  const q = (filter || '').toLowerCase().trim();
  topics.forEach((t, i) => {
    if (!q || t.title.toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q)) {
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

/**
 * Returns total subslides for a topic:
 *  1 (display image placeholder) + images.length + 1 (details)
 * = images.length + 2
 */
function subslideCountForTopic(i) {
  const t = topics[i];
  const imagesCount = Array.isArray(t.images) ? t.images.length : (t.img ? 1 : 0);
  return imagesCount + 2;
}

/**
 * Map a subslide index to a short button label according to rules:
 * - If the subslide is the details slide (imagesCount+1) => "Description"
 * - If subslide === 1 => "Weapon"
 * - Otherwise fallback to "Weapon" (keeps labels consistent for image slides)
 * This follows the user's requirement that first slide's next shows "Weapon" and second shows "Description".
 */
function labelForSubslide(subslide, imagesCount) {
  if (subslide === imagesCount + 1) return 'Sensors';
  if (subslide === 1) return 'Weapons';
  // fallback: for other image slides keep 'Weapon' (or could be Image n)
  return 'Weapons';
}

/**
 * Render the current topic using currentIndex and currentSubslide.
 * This function replaces the old behavior of rendering all images at once.
 * Adjusted to:
 *  - hide description except on the last (details) subslide
 *  - remove image position label
 *  - dynamic nav button labels and non-circular navigation
 *  - last slide shows only one button
 */
function renderCurrentDetail() {
  if (currentIndex === null || currentIndex === undefined) {
    detailEl.innerHTML = '';
    updateActiveSidebar();
    return;
  }

  const t = topics[currentIndex];
  if (!t) return;

  // rows for details table
  const rows = Object.entries(t.details || {}).map(([k, v]) => `
    <tr class="border-b hover:bg-gray-50">
      <td class="p-3 font-semibold bg-gray-50 w-1/3">${k}</td>
      <td class="p-3">${v}</td>
    </tr>
  `).join('');

  // compute indexes
  const imagesArray = Array.isArray(t.images) ? t.images : (t.img ? [t.img] : []);
  const imagesCount = imagesArray.length;
  const totalSubslides = imagesCount + 2; // images + display + details

  // subslide mapping:
  // 0 => display (placeholder) image path: src/disp/{currentIndex+1}.jpg
  // 1..imagesCount => imagesArray[0..imagesCount-1]
  // imagesCount+1 => details

  // Prepare image HTML (single image element) and details container
  let mediaHtml = '';
  let showMediaArea = false;

  if (currentSubslide === 0) {
    // display placeholder image (distinct src/disp/X.jpg per ship)
    const src = displayImageSrcForShipIndex(currentIndex);
    mediaHtml = `<img id="subslideImg" loading="lazy" class="max-w-full h-auto object-contain rounded-lg" src="${src}" alt="${t.title} — display image" />`;
    showMediaArea = true;
  } else if (currentSubslide >= 1 && currentSubslide <= imagesCount) {
    const imgIndex = currentSubslide - 1;
    const src = imagesArray[imgIndex] || '';
    mediaHtml = `<img id="subslideImg" loading="lazy" class="max-w-full h-auto object-contain rounded-lg" src="${src}" alt="${t.title} — image ${imgIndex + 1}" />`;
    showMediaArea = true;
  } else {
    // details page - do not render/hide media area at all
    mediaHtml = '';
    showMediaArea = false;
  }

  // Render detail panel. Note: hide media container on details slide completely.
  // Removed the positionLabel element entirely (user requested removal of "Image 1 of 2 / Details" labels)
  detailEl.innerHTML = `
    <div class="fade-up">
      ${ showMediaArea ? `
        <div class="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-4 flex justify-center gap-4">
          <div class="p-4 w-full flex justify-center">
            ${mediaHtml}
          </div>
        </div>
      ` : '' }

      <div class="mb-3 flex items-center justify-between">
        <h2 class="text-3xl font-semibold text-indigo-700">${t.title}</h2>
        <!-- position label removed per request -->
      </div>

      ${ (currentSubslide === imagesCount + 1) ? `<p class="text-gray-700 leading-relaxed mb-6">${t.description}</p>` : '' }

      <table class="w-full border border-gray-300 text-left text-gray-700 rounded-lg overflow-hidden shadow-sm ${ (currentSubslide === imagesCount + 1) ? '' : 'hidden'}">
        <tbody>${rows}</tbody>
      </table>

      <div class="mt-6 flex items-center gap-4" id="navArea">
        <!-- buttons injected below -->
      </div>
    </div>
  `;

  // Build navigation buttons according to currentSubslide and totalSubslides
  const navArea = document.getElementById('navArea');

  // helper to safely create buttons
  function createButton(id, label, classes = '') {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = `px-4 py-2 rounded-md border bg-indigo-100 hover:bg-gray-100 ${classes}`;
    btn.textContent = label;
    return btn;
  }

  // Determine prev/next indices (no circular navigation)
  const prevIndex = currentSubslide - 1;
  const nextIndex = currentSubslide + 1;
  const isFirst = currentSubslide === 0;
  const isLast = currentSubslide === (totalSubslides - 1); // imagesCount + 1

  // Last slide: show only one button (back to "Weapon" or second slide). This satisfies "only show one button in the last slide dont make it circular"
  if (isLast) {
    const targetBack = Math.max(0, imagesCount >= 1 ? 1 : 0); // if there is at least one image, back goes to slide 1 (weapon); else go to display 0
    const backLabel = labelForSubslide(targetBack, imagesCount) || 'Back';
    const singleBtn = createButton('singleBtn', backLabel, 'ml-auto');
    singleBtn.addEventListener('click', () => {
      currentSubslide = targetBack;
      renderCurrentDetail();
    });
    navArea.appendChild(singleBtn);
  } else {
    // Not last: show Prev (if not first) and Next (always shown unless there are no next - but by logic there is a next)
    if (!isFirst) {
      const prevLabel = labelForSubslide(prevIndex, imagesCount);
      const prevBtn = createButton('prevBtn', prevLabel);
      prevBtn.addEventListener('click', () => {
        goPrevSubslide();
      });
      navArea.appendChild(prevBtn);
    } else {
      // If first slide, we hide Prev (user wanted first slide button will always shows weapon — that'll be the Next button)
      const spacer = document.createElement('div');
      spacer.className = 'flex-1';
      navArea.appendChild(spacer);
    }

    // Next button (present on all non-last slides)
    const nextLabel = labelForSubslide(nextIndex, imagesCount);
    const nextBtn = createButton('nextBtn', nextLabel, 'ml-auto');
    nextBtn.addEventListener('click', () => {
      goNextSubslide();
    });
    navArea.appendChild(nextBtn);
  }

  // update active sidebar
  selectTopic(currentIndex);
}

/**
 * Show detail for topic index i.
 * If resetSubslide is true, set currentSubslide = 0 (display image).
 */
function showDetail(i, resetSubslide = false) {
  if (typeof i !== 'number' || i < 0 || i >= topics.length) return;
  if (resetSubslide) currentSubslide = 0;
  // Set currentIndex and render
  currentIndex = i;
  renderCurrentDetail();
}

// Prev / Next behavior is now per-ship subslides only (does not change ship).
// IMPORTANT: Navigation is NOT circular anymore. We clamp.
function goPrevSubslide() {
  if (currentIndex === null) return;
  const total = subslideCountForTopic(currentIndex); // images + 2
  if (currentSubslide <= 0) {
    // already at first slide: do nothing
    return;
  }
  currentSubslide = currentSubslide - 1;
  if (currentSubslide < 0) currentSubslide = 0;
  renderCurrentDetail();
}

function goNextSubslide() {
  if (currentIndex === null) return;
  const total = subslideCountForTopic(currentIndex);
  if (currentSubslide >= total - 1) {
    // already at last slide: do nothing (no circular)
    return;
  }
  currentSubslide = currentSubslide + 1;
  if (currentSubslide > total - 1) currentSubslide = total - 1;
  renderCurrentDetail();
}

// initial render
renderSidebar('');

// removed search wiring (search bar removed per user request)

// Home button functionality — reset to default "empty" view
const homeBtnEl = document.getElementById('homeBtn');
if (homeBtnEl) {
  homeBtnEl.addEventListener('click', () => {
    window.location.href = "index.html";
    currentIndex = null;
    currentSubslide = 0;
    detailEl.innerHTML = '';
    updateActiveSidebar(); // remove highlight
  });
}

// Provide keyboard shortcuts for subslide navigation (Left/Right) — respect non-circular navigation
document.addEventListener('keydown', (e) => {
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  if (currentIndex === null) return;
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    goPrevSubslide();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    goNextSubslide();
  }
});

// === Developer Signature ===
console.log("%c🚀 CBT System © 2025 | Designed & Developed by Aditya Choudhary", "color: red; font-weight: bold; font-size: 14px;");
console.log("%c🔗 GitHub: https://github.com/adiityachoudhary", "color: gray; font-size: 12px;");
