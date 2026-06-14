// ===== ELEMENT DICTIONARIES =====

const ELEMENTS_LV = {
  'H':'Ūdeņradis','He':'Hēlijs','Li':'Litijs','Be':'Berilijs','B':'Bors',
  'C':'Ogleklis','N':'Slāpeklis','O':'Skābeklis','F':'Fluors','Ne':'Neons',
  'Na':'Nātrijs','Mg':'Magnijs','Al':'Alumīnijs','Si':'Silīcijs','P':'Fosfors',
  'S':'Sērs','Cl':'Hlors','Ar':'Argons','K':'Kālijs','Ca':'Kalcijs',
  'Sc':'Skandijs','Ti':'Titāns','V':'Vanādijs','Cr':'Hroms','Mn':'Mangāns',
  'Fe':'Dzelzs','Co':'Kobalts','Ni':'Niķelis','Cu':'Varš','Zn':'Cinks',
  'Ga':'Gallijs','Ge':'Germānijs','As':'Arsēns','Se':'Selēns','Br':'Broms',
  'Kr':'Kriptons','Rb':'Rubīdijs','Sr':'Stroncijs','Y':'Itrijs','Zr':'Cirkonijs',
  'Nb':'Niobijs','Mo':'Molibdēns','Tc':'Tehnēcijs','Ru':'Rutēnijs','Rh':'Rodijs',
  'Pd':'Pallādijs','Ag':'Sudrabs','Cd':'Kadms','In':'Indijs','Sn':'Alva',
  'Sb':'Antimons','Te':'Telūrs','I':'Jods','Xe':'Ksenons','Cs':'Cēzijs',
  'Ba':'Bārijs','La':'Lantāns','Ce':'Cērijs','Pr':'Praziodīms','Nd':'Neodīms',
  'Pm':'Prometijs','Sm':'Samārijs','Eu':'Eiropijs','Gd':'Gadolīnijs','Tb':'Terbijs',
  'Dy':'Disprozijs','Ho':'Holmijs','Er':'Erbijs','Tm':'Tulijs','Yb':'Iterbijs',
  'Lu':'Lutēcijs','Hf':'Hafnijs','Ta':'Tantals','W':'Volframs','Re':'Renijs',
  'Os':'Osmijs','Ir':'Irīdijs','Pt':'Platīns','Au':'Zelts','Hg':'Dzīvsudrabs',
  'Tl':'Tallijs','Pb':'Svins','Bi':'Bismuts','Po':'Polonijs','At':'Astats',
  'Rn':'Radons','Fr':'Francijs','Ra':'Rādijs','Ac':'Aktīnijs','Th':'Torijs',
  'Pa':'Protaktīnijs','U':'Urāns','Np':'Neptūnijs','Pu':'Plutonijs','Am':'Amerīcijs',
  'Cm':'Kirijs','Bk':'Berklijs','Cf':'Kalifornijs','Es':'Einšteinijs','Fm':'Fermijs',
  'Md':'Mendeļejevijs','No':'Nobēlijs','Lr':'Lorencijs','Rf':'Rezerfordijs','Db':'Dubnijs',
  'Sg':'Sīborgijs','Bh':'Borijs','Hs':'Hasijs','Mt':'Mejtnerijs','Ds':'Darmštadijs',
  'Rg':'Rentgenijs','Cn':'Kopernicijs','Nh':'Nihonijs','Fl':'Flerovijs','Mc':'Moskovijs',
  'Lv':'Livermorijs','Ts':'Tenesīnijs','Og':'Oganesons'
};

const ELEMENTS_EN = {
  'H':'Hydrogen','He':'Helium','Li':'Lithium','Be':'Beryllium','B':'Boron',
  'C':'Carbon','N':'Nitrogen','O':'Oxygen','F':'Fluorine','Ne':'Neon',
  'Na':'Sodium','Mg':'Magnesium','Al':'Aluminum','Si':'Silicon','P':'Phosphorus',
  'S':'Sulfur','Cl':'Chlorine','Ar':'Argon','K':'Potassium','Ca':'Calcium',
  'Sc':'Scandium','Ti':'Titanium','V':'Vanadium','Cr':'Chromium','Mn':'Manganese',
  'Fe':'Iron','Co':'Cobalt','Ni':'Nickel','Cu':'Copper','Zn':'Zinc',
  'Ga':'Gallium','Ge':'Germanium','As':'Arsenic','Se':'Selenium','Br':'Bromine',
  'Kr':'Krypton','Rb':'Rubidium','Sr':'Strontium','Y':'Yttrium','Zr':'Zirconium',
  'Nb':'Niobium','Mo':'Molybdenum','Tc':'Technetium','Ru':'Ruthenium','Rh':'Rhodium',
  'Pd':'Palladium','Ag':'Silver','Cd':'Cadmium','In':'Indium','Sn':'Tin',
  'Sb':'Antimony','Te':'Tellurium','I':'Iodine','Xe':'Xenon','Cs':'Cesium',
  'Ba':'Barium','La':'Lanthanum','Ce':'Cerium','Pr':'Praseodymium','Nd':'Neodymium',
  'Pm':'Promethium','Sm':'Samarium','Eu':'Europium','Gd':'Gadolinium','Tb':'Terbium',
  'Dy':'Dysprosium','Ho':'Holmium','Er':'Erbium','Tm':'Thulium','Yb':'Ytterbium',
  'Lu':'Lutetium','Hf':'Hafnium','Ta':'Tantalum','W':'Tungsten','Re':'Rhenium',
  'Os':'Osmium','Ir':'Iridium','Pt':'Platinum','Au':'Gold','Hg':'Mercury',
  'Tl':'Thallium','Pb':'Lead','Bi':'Bismuth','Po':'Polonium','At':'Astatine',
  'Rn':'Radon','Fr':'Francium','Ra':'Radium','Ac':'Actinium','Th':'Thorium',
  'Pa':'Protactinium','U':'Uranium','Np':'Neptunium','Pu':'Plutonium','Am':'Americium',
  'Cm':'Curium','Bk':'Berkelium','Cf':'Californium','Es':'Einsteinium','Fm':'Fermium',
  'Md':'Mendelevium','No':'Nobelium','Lr':'Lawrencium','Rf':'Rutherfordium','Db':'Dubnium',
  'Sg':'Seaborgium','Bh':'Bohrium','Hs':'Hassium','Mt':'Meitnerium','Ds':'Darmstadtium',
  'Rg':'Roentgenium','Cn':'Copernicium','Nh':'Nihonium','Fl':'Flerovium','Mc':'Moscovium',
  'Lv':'Livermorium','Ts':'Tennessine','Og':'Oganesson'
};

// ===== WORD LISTS =====

const WORDS_LV = [
  'acs','acteks','agaragars','agars','agnosticisms','agora','alauns','alga','algebra',
  'alkas','alkoholisms','alksnene','alksnis','alnis','alts','alus','aluspuisis',
  'amatalus','amatieris','amatpersona','amats','amba','aminogrupa','arnikas','arods',
  'arodskola','artelis','asfalts','asinis','asins','asinsrite','asns','aspirants',
  'ass','aste','astere','atauga','atbalss','atbalsts','atcere','atkusnis','atlants',
  'atlase','atrauga','atruna','atsauce','atsperrati','atsvars','atvars','aube','aukla',
  'auklis','auns','auseklis','auss','babulis','bacilis','bads','bagars','bakas','baks',
  'balamute','balanss','balasts','balons','balsene','balss','balsts','baltalus',
  'baltenis','balti','baltists','balts','baneris','bankrots','banneris','baobabs',
  'baroklis','baronese','barons','bars','baseins','bass','batons','bauslis','bebrs',
  'beigas','bekons','berete','bikses','bikts','bilance','binoklis','birste','bise',
  'bite','bizness','blakne','blakts','blakusamats','blakusefekts','blakusistaba',
  'blats','bokseris','bokss','boss','bota','botas','botes','brangas','briesmonis',
  'brits','brokastis','brunete','bubulis','bufete','bukinists','buks','bula',
  'bundulis','bungas','bura','burbulis','butanons','carisms','cars','cece','cehs',
  'celaine','celis','celu','cena','censonis','cents','cepamdesas','cepure','ciba',
  'cilas','cimds','cinis','cinks','ciparkods','cipars','ciprese','cirks','cirkulis',
  'cirslis','cirta','cirvis','cisas','cista','esparsete','falsets','fauna',
  'fenamifoss','fentions','firns','firsts','flanelis','flauta','flirts','floksis',
  'flora','flote','fokuss','fonds','fonola','fons','fonts','fronte','furgons',
  'futbolists','gabals','gads','gadsimts','gaigala','gailis','gaiss','gaita',
  'gaitenis','galapunkts','galvasauts','galvaskauss','galvassega','galvgalis',
  'galvvirss','gandrene','gani','gans','garaste','garastis','halons','hamburgers',
  'harmonikas','harta','heks','elikopters','hercogiste','hercogs','hercs','homofobs',
  'homofons','homosekss','hostelis','ierocis','iesals','iesnas','iespaids','incis',
  'indiference','indiferentisms','inerce','infarkts','infokiosks','instance',
  'interese','intereses','irbe','irbene','irbulis','irklis','irsis','istaba',
  'istabene','izruna','kalnracis','kalns','kalpone','kalps','kalsnis','kalte','kalts',
  'kambaris','kamerkoncerts','kamiesis','kampars','kamparspirts','karalauks','karalis',
  'karaliste','karatists','karogs','karose','karote','karsonis','karte','kartelis',
  'karts','karuselis','kasieris','kastanis','kaste','katalogs','katolicisms','katolis',
  'katolisms','kauns','kauslapa','kauslis','kauss','kikbokseris','kikboksists',
  'kikbokss','kino','kinoamatieris','kinoamatierisms','kinobuss','kinofonds',
  'kinogads','kinokarte','kinoklubs','kinokonference','kinokriticisms','kinolauks',
  'kinoplacis','kinoposms','kinosalons','kinoskats','kinoskola','kipa','klabata',
  'klabeklis','klaips','klapatas','klase','klasicisms','klauns','klavieres','klints',
  'klipsis','klucis','knipis','knislis','knupis','kods','koferis','kokalis','kokkopis',
  'koks','koksne','kolikas','koncepts','koncerns','koncertansamblis','koncertants',
  'koncertmikrofons','koncerts','kondicionieris','konfekte','konference','konfeti',
  'konflikts','konga','konkista','konkurence','konkurents','kons','konservi',
  'konsistence','konsonanse','konsonantisms','konsonants','konstante','kontakts',
  'kontaktstanga','konteineris','konteiners','konteksts','kontinents','konts',
  'konverts','kopa','kopaina','kopsolis','kore','kosmoss','kovids','krabis','krampis',
  'krams','krants','krasts','krauklis','kraupis','kreilis','krese','kripata',
  'kriptospora','krogs','krona','kronis','krosene','krosenes','krucifikss','krupis',
  'krusts','ksenofobs','kubs','kuce','kuilis','kukaragas','kukulis','kukuragas',
  'kumoss','kunfists','kupica','kupris','kvarcs','kvarta','kvass','kviesis','kvinta',
  'labrocis','laga','laikposms','laikraksts','laikrite','laiks','laineris','laipa',
  'lakacis','lakats','lakonisms','laksti','laksts','lapa','lapaspuse','lappuse',
  'lapsene','lapsusuns','lapukoks','lasis','laso','lata','lats','laucis','lauki',
  'lauks','launaglaiks','launags','lauskas','lausks','lauznis','librets','licence',
  'lieste','liktenis','linaita','linga','lini','lins','lits','lubas','luga','luksts',
  'lupa','lupata','lupatlasis','lutausis','luteklis','mobilais','mokas','monarhisms',
  'monarhists','monarhs','naba','nabaga','nabags','nafta','nagla','nags','naids',
  'naktene','nakts','namdaris','namrunis','nams','narcise','narcises','narciss',
  'nasta','negaiss','negausis','neirons','nelabais','nelaiks','nervs','netiklis',
  'nieres','nihilisms','nogabals','nokalne','nolase','nomods','noraga','noraksts',
  'noruna','notece','nots','novuss','obelisks','ods','oga','ola','olis','omnibuss',
  'onkulis','opaps','opis','ore','osis','osta','ota','pabalsts','pabiras','pacifisms',
  'pacifists','pagalvis','pagasts','pagrabs','pakausis','paksis','pakulas','palags',
  'pali','pamatne','pamatprincips','pamats','pamatskola','panna','pans','pantera',
  'pants','papagailis','papiross','parabola','paraksts','paralakse','paribe',
  'parks','paruna','pasaulaina','pase','pasega','pastaiga','pastala','pastalas','pasts',
  'patafons','patekas','patents','patina','pauna','pavards','pavasaris','peri',
  'periods','perons','persona','pestelis','pfu','piesis','piesta','piga','pikpauna',
  'pikselis','pineklis','pionieris','pipars','pirkstainis','pirksts','piroga','pirts',
  'placis','plakne','planieris','plauksta','plaukts','pliknis','pluss','poga',
  'policists','polifons','polips','polis','polise','politeisms','pops','pora','posms',
  'posts','prakse','prauli','prece','preference','prese','pretmikrobu','pretskats',
  'pretspars','pretsporu','pretstats','pretsvars','princese','princips','princis',
  'procents','process','progresists','progress','propoliss','prostata','protests',
  'province','puds','puisis','puksts','pulveris','punkts','pupa','pupi','puplaksis',
  'pups','puputis','puravs','purene','purns','puscena','puse','pusgads','pusgrasis',
  'puskalps','pusmaratons','pusnakts','pusnomods','puspavasaris','puspuisis','putas',
  'puteklis','putenis','rabarbers','rabats','rads','ragalis','ragana','ragavas',
  'raksts','rapa','rasene','rasisms','rasists','rati','rats','receklis','recepte',
  'referents','reibonis','reihs','reiss','reivs','remonts','rene','renkulis','rente',
  'repis','reps','resgalis','resnis','restes','revolveris','revolvervirpa','rubenis',
  'rublis','rugaine','runa','runcis','runga','rusicisms','rusofobs','salkas','salna',
  'salons','salonvagons','sals','samba','sambo','samestaukla','samtene','samtenes',
  'samts','saruna','saskarne','satvars','sauklis','sausna','sega','sekas','sekss',
  'sekta','sektantisms','sektants','senatne','sencis','seppuku','serveris','serviss',
  'sesks','sfagns','sials','siers','siksna','silikons','sinepes','sintakse','sirds',
  'sirdsbalss','sirdspuksti','sirdspuksts','sirmgalvis','sirpis','sirsenis','sisenis',
  'skalbe','skals','skatpunkts','skats','skatupunkts','skausts','skice','sklandrausis',
  'sklandurausis','skola','skopulis','skots','skrandas','skropsta','skrots','skupsna',
  'slaids','slaucene','slita','smagsvars','smalkne','smogs','snovs','sods','solis',
  'solists','spainis','spalis','spams','spararats','spars','spice','spirts','spogulis',
  'spoks','spora','sprands','sprauga','sproga','sprogas','sprosts','stabs','stafete',
  'stanga','stangas','stara','starene','statists','stats','steiga','steks','stends',
  'stereotips','stiba','stiga','subate','subkonts','suga','sula','sulainis','suns',
  'suta','sutana','sutenerisms','suteners','svari','svars','sviests','svins','svira',
  'tabula','taburete','taiga','taisne','takse','taksis','takts','talants','tamtams',
  'tangenss','tangente','tankists','tanks','tante','tapa','tara','tase','tauki',
  'taure','taurenis','tauste','tauta','tautskola','tece','tekne','teksts','tenkas',
  'terase','tiesnesis','tifons','tinis','tinte','tips','tirgonis','tirgus','ubags',
  'ukrainis','uravas','urbis','usne','ute','uts','uzruna','vagars','vagons','valnis',
  'valsis','valsts','varonis','vasks','vats','verbs','verga','verste','versts','veru',
  'vesperes','vica','viesis','viesistaba','vieskoncerts','viesulis','vira','virca',
  'virkne','virpa','virpulis','virsbikses','virsis','virspuse','virtene','vista',
  'volvo','znots','arhitekts','asaris','austere','balkons','bambuss','banknote',
  'begemots','behemots','biste','bits','bots','brunets','cariste','cauna','censone',
  'ceplis','cigarete','circenis','cirksnis','cukurgrauds','cunfte','finieris','gane',
  'haubice','hotelis','igaunis','ikona','insekts','kalifs','kalla','klans',
  'klavierkoncerts','klubs','kobalts','kokteilis','kola','konuss','kriptons','krists',
  'kross','ksenons','kuteklis','laborants','laukirbe','liga','nacisms','neonacisms',
  'neons','papa','particips','partikula','persiks','pica','plaksts','plate','pods',
  'policiste','profesore','psihe','psihiatre','rase','salnis','sams','sers','sinagoga',
  'skunkss','smaragds','sonets','spals','tenisists','teniss','tests','tirgone',
  'valis','veseris','veste','vikontese','vikonts'
];

const WORDS_EN = [
  'acceptance','access','accuracy','accusation','acorn','acoustics','acre','action','activation','agony',
  'alb','algebra','alias','alibi','almond','alpaca','alteration','amber','ambition','ambulance',
  'arch','archer','archives','ark','armoire','array','artificer','ascend','ash','asparagus',
  'aspic','ass','assertion','assistance','assurance','atmosphere','attack','attacker','attention','attic',
  'auction','babe','baboon','baby','back','backbone','backburn','backpack','backup','bacon',
  'bag','baggage','baker','bakery','balance','balcony','bamboo','ban','banana','band',
  'bandolier','bank','bankbook','banker','bankruptcy','banner','baobab','bar','barber','bargain',
  'barge','bark','barn','barracks','barrage','bartender','base','baseline','basics','basin',
  'basis','bass','bassoon','bat','bath','bather','bathhouse','battalion','battleship','bay',
  'bayou','beach','beam','bear','beat','beck','beer','behalf','bench','bend',
  'beyond','bias','bifocals','bikini','bin','biopsy','biosphere','biplane','birch','birdbath',
  'birth','bite','black','blackfish','blackness','blank','blind','blinker','blush','boar',
  'boat','bob','bobcat','body','bog','bond','bone','bonfire','bonus','book',
  'bookcase','boon','bore','boss','botany','bother','boundary','bow','bower','boy',
  'bra','brace','brain','bran','branch','brand','brandy','brass','breath','brewer',
  'bribery','brick','brink','broccoli','brochure','broker','bronchitis','bronco','brooch','brook',
  'brother','brow','brown','browser','brunch','brush','brushfire','buck','buckwheat','buffalo',
  'buffer','bun','bunch','bunkhouse','bureau','burn','bus','bush','business','butane',
  'butcher','butler','buy','buyer','cabana','cabbage','cabin','caboose','cacao','cafe',
  'caffeine','caftan','cage','calculus','calf','caliber','calibre','calico','camp','camper',
  'campus','can','canal','cancer','candy','cane','cannibal','cannon','canon','canopy',
  'canvas','cap','caper','capitalism','capon','cappuccino','captain','caption','car','carabao',
  'carbon','care','career','cargo','caribou','carnation','carnival','carotene','carp','cartilage',
  'case','cash','cashew','cashier','casino','cassock','cat','catalysis','catch','catcher',
  'cation','catsup','causal','cause','caution','caviar','cenotaph','census','ceramic','ceramics',
  'cereal','ceremony','chalice','chalk','chamber','champagne','champion','charge','charlatan','chassis',
  'check','checkbook','cheer','chef','chess','chick','chiffonier','chili','chin','chino',
  'chip','chipmunk','chives','chocolate','choice','choir','choker','chop','chops','chopstick',
  'chopsticks','chorus','chow','chub','chuck','churn','cinder','cinnamon','cirrhosis','cirrus',
  'clam','clamp','clan','clank','clasp','class','classic','clause','clavier','claw',
  'clay','cleric','clerk','click','cliff','clinic','clip','clipper','clock','clogs',
  'clone','close','closure','cloth','clothes','clover','cloves','club','clutch','coach',
  'coal','coalition','coat','cob','cock','cockroach','coffin','cohesion','coin','column',
  'con','concept','conception','concern','conclusion','concrete','condition','cone','conference','confusion',
  'conga','conifer','connection','consensus','conspiracy','consulate','container','contention','conversion','conviction',
  'cook','cookbook','coonskin','cop','copper','copy','core','corn','corner','cornflakes',
  'couch','countess','coupon','courage','cousin','cover','cow','cowboy','coyote','crab',
  'crack','cracker','crackers','crane','cranky','crap','crash','crate','cravat','craw',
  'crayfish','crayon','cream','creation','creature','creche','crew','crib','cribbage','crinoline',
  'crisis','crisp','critic','criticism','crocus','crook','crop','cross','crotch','croup',
  'crow','crown','cruise','crunch','crush','cry','cub','cube','cuckoo','cuisine',
  'cup','cupola','cure','cushion','cyclone','cylinder','cynic','dynamics','dynamite','dynamo',
  'eraser','erosion','espalier','essence','essential','estate','fallacy','familiar','fashion','fat',
  'father','fear','feather','feature','fen','fence','fender','festival','few','fiber',
  'fiberglass','fibre','fibrosis','fiction','fiery','fiesta','fifth','final','finance','fine',
  'finer','finish','finisher','fir','fire','fireplace','fish','fishbone','fishery','flag',
  'flair','flan','flanker','flare','flash','flat','flatboat','flesh','flick','flicker',
  'flintlock','flock','flow','flower','flu','flute','fly','foal','foam','fob',
  'focus','fog','footage','footstep','forage','foray','forebear','forever','forgery','foundation',
  'founder','fountain','fraction','fragrance','freon','fresco','friction','fries','frigate','fringe',
  'frock','frog','frontier','frown','fry','fuck','fun','function','fund','funeral',
  'gaffe','gaffer','gain','gander','gap','garage','garb','gas','gasoline','gasp',
  'gate','gather','gauge','gear','gelatin','gender','gene','general','generation','genetics',
  'genius','genre','geography','geyser','half','ham','hamburger','hammock','hardship','harmonica',
  'harmonise','harmony','harp','harpooner','hash','hassock','haste','hat','health','heartache',
  'hearth','heat','heater','hectare','heifer','heir','helicopter','hen','hepatitis','herb',
  'herbs','heritage','hero','heroine','heron','hesitation','hiccups','hierarchy','hip','hire',
  'hobby','hog','homogenate','honey','hoof','hook','hop','hops','horn','hose',
  'hosiery','hospice','hostess','hound','hourglass','house','houseboat','housewife','hub','hubcap',
  'hubris','hunchback','husband','hutch','hyacinth','hypothesis','ice','iceberg','icecream','icon',
  'icy','incense','inch','incision','inclusion','incubation','indication','indigence','infarction','infection',
  'infinite','inflation','info','infusion','inhibition','initial','initialise','ink','inlay','inn',
  'innocence','innovation','instance','insulation','insurance','intention','intestine','invasion','inverse','inversion',
  'invitation','invite','invoice','iris','iron','irony','island','isolation','itinerary','kick',
  'kimono','kinase','kind','kindness','kiosk','kiss','kitchen','kite','kitsch','kiwi',
  'knickers','knife','knock','lab','lace','lack','lady','lanai','land','lane',
  'lantern','lap','lapdog','laptop','lasagna','lashes','latency','law','lawn','lawyer',
  'lay','layer','liar','library','licence','license','lieu','life','ligand','lilac',
  'limo','line','linen','liner','link','lion','lip','lipstick','literate','litigation',
  'litmus','liver','luck','lunch','lunge','lute','moat','mob','moccasins','mochi',
  'molasses','money','monk','monsoon','month','moody','moon','moonshine','moose','mop',
  'moth','mother','motion','motivation','mound','mountain','mouse','mouser','mousse','moustache',
  'mouth','mover','mower','napkin','nasal','nation','nature','navigation','neck','necklace',
  'neon','neonate','nephew','netbook','news','newspaper','newsstand','niche','nick','nobody',
  'noir','noise','nonsense','noon','nose','notation','note','notebook','notice','notion',
  'noun','nun','oar','oasis','oat','oats','obi','obligation','obsession','occasion',
  'occupation','octavo','odyssey','oeuvre','offence','offense','offer','office','officer','official',
  'okra','omnivore','onion','online','operation','opinion','opposite','opposition','option','orange',
  'ore','oregano','osmosis','osprey','other','ounce','outback','outhouse','outline','outlook',
  'oval','ovary','overcharge','overcoat','owner','ownership','pace','pack','pagan','page',
  'pain','pair','palace','palate','pan','pancreas','panic','pannier','pansy','panther',
  'panties','pants','papa','paper','paperback','parachute','paragraph','park','parser','parsnip',
  'pass','passbook','passion','pasta','paste','pat','patch','pate','path','patina',
  'patio','pattern','pause','pavilion','paw','pawnshop','pay','payoff','percentage','perception',
  'perch','perfection','peripheral','perp','person','personal','pheromone','phone','phrase','physical',
  'physics','pick','pickup','picnic','pier','pigeon','pilaf','pin','pinafore','pine',
  'pinecone','pink','pioneer','piracy','pirate','piss','pita','pitch','pitcher','pith',
  'place','placebo','plain','plaintiff','plan','plane','plantation','planula','plastic','plate',
  'play','player','plier','pliers','poison','poker','police','policy','polish','politics',
  'poncho','pond','pony','pop','popcorn','poppy','population','position','possession','postage',
  'potential','pouch','pound','power','practice','praise','pray','prayer','precision','preference',
  'presence','preserves','press','pressure','prestige','prey','price','prince','princess','principal',
  'prison','prisoner','privacy','probation','probe','process','profession','progress','promotion','pronoun',
  'proof','propane','proposal','prose','protection','protein','province','provision','prow','prune',
  'pruner','pub','public','publisher','puffin','pun','punch','pup','pupa','puppy',
  'push','pusher','rabbi','raccoon','race','racer','racism','rack','rage','rain',
  'rainbow','raincoat','rainy','raise','raisin','ranch','rancher','range','rank','rap',
  'rate','ratepayer','ratio','rations','ravioli','ray','rayon','reach','reaction','real',
  'reamer','rear','reason','receipt','receiver','reception','recess','recession','recliner','recovery',
  'recreation','reference','refuge','refund','refusal','refuse','relation','relay','relish','reluctance',
  'remote','removal','repair','reparation','replica','republic','republican','reputation','research','researcher',
  'reservoir','resistance','resolution','respite','response','retention','retina','reunion','reversal','reverse',
  'revival','revolution','revolver','rhinoceros','rhubarb','rubber','rubbish','rubric','ruby','ruckus',
  'ruin','run','runner','rush','rutabaga','sac','sack','salami','salary','salmon',
  'salon','saloon','salute','samovar','sampan','samurai','sari','sash','satin','satire',
  'sauce','saucer','scallion','scalp','scam','scanner','scarecrow','scarf','scenario','scene',
  'scenery','schooner','score','scorn','scotch','scow','scrap','scraper','scratch','screamer',
  'screw','scrip','script','scripture','scrutiny','seal','search','seashore','season','seat',
  'second','secrecy','secretion','section','sectional','senate','sender','sense','sentence','sepal',
  'separation','serial','series','sermon','serval','server','service','session','setback','sewer',
  'shack','shampoo','shark','shear','sheath','shin','shine','ship','shipper','shoat',
  'shock','shoes','shofar','shop','shopper','shore','shoreline','show','shower','sick',
  'sickness','silica','silicon','silver','sin','sink','sip','sir','site','ski',
  'skin','skunk','sky','skyline','skyscraper','skywalk','slapstick','slash','slate','slavery',
  'slaw','slice','slip','slipper','slippers','smith','smock','smog','snack','snap',
  'snob','snow','snuck','soccer','socialism','sock','socks','solitaire','solution','son',
  'sonar','sonata','sophomore','soprano','sound','soundness','soup','south','sow','soy',
  'space','span','spank','sparerib','spark','spasm','spat','spatula','spawn','sphere',
  'spice','spinach','spine','spiral','spite','sponge','spoon','spouse','sprag','sprat',
  'spray','spruce','spy','stab','stack','staff','stage','stain','stair','staircase',
  'stance','stand','standoff','state','statin','station','statistic','statistics','stay','stealth',
  'steam','stench','step','stepmother','stepson','stereo','stew','stick','sticker','stitch',
  'stitcher','sub','subroutine','subsection','subsidy','substance','suburb','success','succotash','suck',
  'sucker','suite','sun','sunbeam','sundial','sunflower','sunshine','supper','supplier','surgery',
  'sushi','sustenance','suv','swamp','swath','swine','switch','sycamore','syndicate','synergy',
  'synthesis','syrup','tab','tabby','taco','tactics','tan','tank','tanker','tap',
  'tapioca','task','taste','tavern','teacher','team','tear','tech','tender','tennis',
  'tension','tenth','testimony','thesis','thickness','thorn','threat','thrush','thunder','tic',
  'tick','tin','tip','tire','tsunami','underneath','underpants','underpass','undertaker','underwire',
  'unibody','union','universe','upper','upstairs','urn','use','user','usher','usual',
  'vacation','vaccine','vampire','variation','verb','verse','version','vibe','vibraphone','vibration',
  'vice','vine','vintage','viola','violation','violin','virginal','virus','viscose','vise',
  'vision','vista','visual','vivo','vixen','voice','volunteer','vote','wagon','walk',
  'walker','wallaby','walrus','war','warmth','warren','wash','washbasin','washcloth','washer',
  'wasp','waste','watch','watcher','water','watercress','western','whack','wharf','wheat',
  'whey','whip','whisker','whisper','white','wick','wife','wifi','win','wind',
  'window','wine','winery','wink','winner','wire','wiretap','wish','witch','wok',
  'wonder','wound','wrap','wraparound','wrapper','wreck','wrecker','wren','wrench','wrestler',
  'yam','yarn','yin','yoga','youth','yoyo'
];

// ===== GAME STATE =====

let lang = 'lv';
let currentWord = '';
let currentCombo = [];
let timeLeft = 0;
let timerInterval = null;
let isPaused = false;
let practiceSymbols = [];
let practiceCorrect = 0;
let practiceCurrentSymbol = '';
let validWordsLV = [];
let validWordsEN = [];

// memoize per language to speed up filtering
const _memo = { lv: new Map(), en: new Map() };

// ===== ALGORITHM =====

function wordAnagram(word, elements, memoKey) {
  const cache = _memo[memoKey];
  if (cache.has(word)) return cache.get(word);

  if (word.length === 0) { cache.set(word, [[]]); return [[]]; }

  const results = [];
  const sym1 = word[0].toUpperCase();
  if (elements[sym1] !== undefined) {
    const sub = wordAnagram(word.slice(1), elements, memoKey);
    if (sub) for (const c of sub) results.push([sym1, ...c]);
  }
  if (word.length >= 2) {
    const sym2 = word[0].toUpperCase() + word[1].toLowerCase();
    if (elements[sym2] !== undefined) {
      const sub = wordAnagram(word.slice(2), elements, memoKey);
      if (sub) for (const c of sub) results.push([sym2, ...c]);
    }
  }
  const result = results.length ? results : null;
  cache.set(word, result);
  return result;
}

function getElements() { return lang === 'lv' ? ELEMENTS_LV : ELEMENTS_EN; }
function getMemoKey() { return lang; }

function pickRandomWord() {
  const words = lang === 'lv' ? validWordsLV : validWordsEN;
  if (!words.length) return null;
  const word = words[Math.floor(Math.random() * words.length)];
  const combos = wordAnagram(word, getElements(), getMemoKey());
  if (!combos) return pickRandomWord();
  const combo = combos[Math.floor(Math.random() * combos.length)];
  return { word, combo };
}

// ===== UI TEXT =====

const T = {
  lv: {
    title: '🧪 Ķīmisko Elementu Spēle',
    subtitle: 'Atšifrējiet elementu kombināciju un atrodiet vārdu!',
    timerPrefix: 'Atlikušais laiks: ',
    timerSuffix: ' sekundes',
    timerWarning: '⚠️ Atlikušais laiks: ',
    timerOut: '⏰ Laiks beidzies!',
    placeholder: 'Ievadiet vārdu...',
    submit: 'Iesniegt',
    pause: '⏸️ Pauze',
    resume: '▶️ Atsākt',
    newGame: '🔄 Jauna spēle',
    correct: 'Pareizi! Jūs uzminējāt vārdu! 🎉',
    wrong: w => `Nepareizi! Pareizais vārds bija "${w.toUpperCase()}".`,
    timeout: w => `Laiks beidzies! Pareizais vārds bija "${w.toUpperCase()}". ⏰`,
    practiceBtn: '📚 Trenēties',
    practiceLabel: 'Kāds ir šī elementa simbols?',
    progressText: n => `${n} / 10`,
    checkBtn: '✓ Pārbaudīt',
    backBtn: '↩ Uz spēli',
    wrongSymbol: s => `Nepareizi! Pareizais simbols bija ${s}. Sāk no sākuma!`,
    practiceComplete: 'Lielisks darbs! 10 pareizas atbildes pēc kārtas! 🏆',
    noWords: 'Nav pieejamu vārdu.',
    helpTitle: 'Kā spēlēt?',
    modalContent: `
      <p>Ekrānā redzēsi ķīmisko elementu nosaukumus latviešu valodā.</p>
      <p style="margin-top:10px">Tavs uzdevums ir saprast, kāds vārds paslēpts zem elementu simboliem!</p>
      <div class="example-box">
        <p><strong>Piemērs:</strong></p>
        <p style="font-size:1.1em">Erbijs &nbsp;+&nbsp; Sērs &nbsp;+&nbsp; Silīcijs</p>
        <p style="font-size:1.5em;margin:8px 0"><strong>Er + S + Si = SIERS</strong></p>
      </div>
      <p>Atrodiet vārdu pirms laika beigām!</p>
    `,
    startBtn: 'Sākt spēli!'
  },
  en: {
    title: '🧪 Chemical Elements Game',
    subtitle: 'Decode the element combination and find the word!',
    timerPrefix: 'Time left: ',
    timerSuffix: ' seconds',
    timerWarning: '⚠️ Time left: ',
    timerOut: '⏰ Time\'s up!',
    placeholder: 'Type the word...',
    submit: 'Submit',
    pause: '⏸️ Pause',
    resume: '▶️ Resume',
    newGame: '🔄 New game',
    correct: 'Correct! You guessed the word! 🎉',
    wrong: w => `Wrong! The correct word was "${w.toUpperCase()}".`,
    timeout: w => `Time's up! The correct word was "${w.toUpperCase()}". ⏰`,
    practiceBtn: '📚 Practice',
    practiceLabel: 'What is the symbol for this element?',
    progressText: n => `${n} / 10`,
    checkBtn: '✓ Check',
    backBtn: '↩ Back to game',
    wrongSymbol: s => `Wrong! The correct symbol was ${s}. Starting over!`,
    practiceComplete: 'Great job! 10 correct answers in a row! 🏆',
    noWords: 'No words available.',
    helpTitle: 'How to play?',
    modalContent: `
      <p>You'll see chemical element names on screen.</p>
      <p style="margin-top:10px">Your task — figure out which word is hidden in the element symbols!</p>
      <div class="example-box">
        <p><strong>Example:</strong></p>
        <p style="font-size:1.1em">Barium &nbsp;+&nbsp; Oxygen &nbsp;+&nbsp; Carbon &nbsp;+&nbsp; Nitrogen</p>
        <p style="font-size:1.5em;margin:8px 0"><strong>Ba + O + C + N = BACON</strong></p>
      </div>
      <p>Find the word before time runs out!</p>
    `,
    startBtn: 'Start playing!'
  }
};

function t(key, ...args) {
  const val = T[lang][key];
  return typeof val === 'function' ? val(...args) : val;
}

// ===== INIT =====

function init() {
  validWordsLV = WORDS_LV.filter(w => w.length >= 4 && w.length <= 10 && wordAnagram(w, ELEMENTS_LV, 'lv'));
  validWordsEN = WORDS_EN.filter(w => w.length >= 4 && w.length <= 10 && wordAnagram(w, ELEMENTS_EN, 'en'));
  updateLangUI();
  if (!sessionStorage.getItem('played')) {
    showHelp();
  }
  newGame();
}

// ===== LANGUAGE =====

function setLanguage(newLang) {
  lang = newLang;
  _memo.lv.clear();
  _memo.en.clear();
  validWordsLV = WORDS_LV.filter(w => w.length >= 4 && w.length <= 10 && wordAnagram(w, ELEMENTS_LV, 'lv'));
  validWordsEN = WORDS_EN.filter(w => w.length >= 4 && w.length <= 10 && wordAnagram(w, ELEMENTS_EN, 'en'));
  updateLangUI();
  newGame();
}

function updateLangUI() {
  document.getElementById('btn-lv').classList.toggle('active', lang === 'lv');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.querySelector('h1').textContent = t('title');
  document.title = lang === 'lv' ? 'Ķīmisko Elementu Spēle' : 'Chemical Elements Game';
  document.querySelector('.subtitle').textContent = t('subtitle');
  document.getElementById('guessInput').placeholder = t('placeholder');
  document.getElementById('submit-btn').textContent = t('submit');
  document.getElementById('new-game-btn').textContent = t('newGame');
  document.getElementById('modal-title').textContent = t('helpTitle');
  document.getElementById('modal-body').innerHTML = t('modalContent');
  document.getElementById('modal-start-btn').textContent = t('startBtn');
  document.documentElement.lang = lang;
}

// ===== MODAL =====

function showHelp() {
  document.getElementById('help-modal').classList.remove('hidden');
}

function hideHelp() {
  document.getElementById('help-modal').classList.add('hidden');
}

// ===== GAME =====

function newGame() {
  sessionStorage.setItem('played', '1');
  stopTimer();
  isPaused = false;

  const result = pickRandomWord();
  if (!result) {
    document.getElementById('elements-display').textContent = t('noWords');
    return;
  }

  currentWord = result.word;
  currentCombo = result.combo;

  // Shuffle element names for display
  const elements = getElements();
  const names = currentCombo.map(sym => elements[sym]);
  const shuffled = [...names].sort(() => Math.random() - 0.5);

  const container = document.getElementById('elements-display');
  container.innerHTML = '';
  shuffled.forEach(name => {
    const tag = document.createElement('span');
    tag.className = 'element-tag';
    tag.textContent = name;
    container.appendChild(tag);
  });

  // Time based on word length
  const len = currentWord.length;
  timeLeft = len <= 6 ? 50 : len <= 8 ? 60 : 90;

  document.getElementById('guessInput').value = '';
  document.getElementById('pauseButton').textContent = t('pause');

  showSection('game-section');
  startTimer();
  document.getElementById('guessInput').focus();
}

function sameElementMultiset(combo1, combo2) {
  if (combo1.length !== combo2.length) return false;
  return [...combo1].sort().join(',') === [...combo2].sort().join(',');
}

function isAlternativeAnswer(guess) {
  const words = lang === 'lv' ? validWordsLV : validWordsEN;
  if (!words.includes(guess)) return false;
  const combos = wordAnagram(guess, getElements(), getMemoKey());
  if (!combos) return false;
  return combos.some(c => sameElementMultiset(c, currentCombo));
}

function checkAnswer(e) {
  e.preventDefault();
  const guess = document.getElementById('guessInput').value.trim().toLowerCase();
  stopTimer();

  if (guess === currentWord || isAlternativeAnswer(guess)) {
    showResult(t('correct'), true, false);
  } else {
    showResult(t('wrong', currentWord), false, false);
  }
}

function handleTimeout() {
  stopTimer();
  showResult(t('timeout', currentWord), false, true);
}

function showResult(message, correct, timeout) {
  const msgEl = document.getElementById('result-message');
  msgEl.textContent = message;
  msgEl.className = 'message ' + (correct ? 'correct' : 'incorrect');

  const practiceBtn = document.getElementById('practice-btn');
  practiceBtn.textContent = t('practiceBtn');
  practiceBtn.classList.toggle('hidden', correct);

  document.getElementById('continue-btn').textContent = t('newGame');
  showSection('result-section');
}

// ===== TIMER =====

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay(timeLeft);
  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      updateTimerDisplay(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleTimeout();
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimerDisplay(secs) {
  const el = document.getElementById('timer');
  if (!el) return;
  if (secs <= 0) {
    el.innerHTML = t('timerOut');
    el.style.color = '#e74c3c';
  } else if (secs <= 10) {
    el.innerHTML = t('timerWarning') + secs + t('timerSuffix');
    el.style.color = '#e74c3c';
    el.style.animation = 'pulse 0.5s infinite';
  } else if (secs <= 30) {
    el.innerHTML = '⏱️ ' + t('timerPrefix') + secs + t('timerSuffix');
    el.style.color = '#f39c12';
    el.style.animation = '';
  } else {
    el.innerHTML = '⏱️ ' + t('timerPrefix') + secs + t('timerSuffix');
    el.style.color = '#3498db';
    el.style.animation = '';
  }
}

function togglePause() {
  const btn = document.getElementById('pauseButton');
  isPaused = !isPaused;
  btn.textContent = isPaused ? t('resume') : t('pause');
  if (isPaused) {
    btn.style.background = 'linear-gradient(135deg, #27ae60, #219a52)';
  } else {
    btn.style.background = '';
    startTimer();
  }
}

// ===== PRACTICE =====

function startPractice() {
  practiceCorrect = 0;
  practiceSymbols = Object.keys(getElements()).sort(() => Math.random() - 0.5);
  showSection('practice-section');
  document.getElementById('practice-label').textContent = t('practiceLabel');
  document.getElementById('check-btn').textContent = t('checkBtn');
  document.getElementById('back-btn').textContent = t('backBtn');
  nextPracticeQuestion();
}

function nextPracticeQuestion() {
  if (!practiceSymbols.length) {
    practiceSymbols = Object.keys(getElements()).sort(() => Math.random() - 0.5);
  }
  practiceCurrentSymbol = practiceSymbols.pop();
  const elements = getElements();
  document.getElementById('practice-element-name').textContent = elements[practiceCurrentSymbol];
  document.getElementById('practice-feedback').classList.add('hidden');
  document.getElementById('practiceInput').value = '';
  updateProgressBar();
  document.getElementById('practiceInput').focus();
}

function checkPracticeAnswer(e) {
  e.preventDefault();
  const guess = document.getElementById('practiceInput').value.trim();
  const normalized = guess.length === 1 ? guess.toUpperCase() : guess[0].toUpperCase() + guess.slice(1).toLowerCase();
  const feedback = document.getElementById('practice-feedback');

  if (normalized === practiceCurrentSymbol) {
    practiceCorrect++;
    if (practiceCorrect >= 10) {
      feedback.textContent = t('practiceComplete');
      feedback.classList.remove('hidden');
      feedback.style.background = 'rgba(39,174,96,0.1)';
      feedback.style.color = '#27ae60';
      feedback.style.border = '2px solid rgba(39,174,96,0.3)';
      updateProgressBar();
      setTimeout(() => newGame(), 2000);
      return;
    }
    feedback.classList.add('hidden');
    nextPracticeQuestion();
  } else {
    practiceCorrect = 0;
    feedback.textContent = t('wrongSymbol', practiceCurrentSymbol);
    feedback.classList.remove('hidden');
    feedback.style.background = 'rgba(231,76,60,0.1)';
    feedback.style.color = '#e74c3c';
    feedback.style.border = '2px solid rgba(231,76,60,0.3)';
    practiceSymbols = Object.keys(getElements()).sort(() => Math.random() - 0.5);
    updateProgressBar();
    setTimeout(() => nextPracticeQuestion(), 1500);
  }
}

function updateProgressBar() {
  const pct = (practiceCorrect / 10) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = t('progressText', practiceCorrect);
}

// ===== SECTION VISIBILITY =====

function showSection(id) {
  ['game-section','result-section','practice-section'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

// ===== KEYBOARD =====

document.addEventListener('keydown', e => {
  if (e.key === ' ' && e.target.tagName !== 'INPUT') {
    e.preventDefault();
    if (document.getElementById('game-section') && !document.getElementById('game-section').classList.contains('hidden')) {
      togglePause();
    }
  }
});

// ===== RIPPLE =====

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', e => {
    const btn = e.target.closest('button, .button');
    if (!btn) return;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;background:rgba(255,255,255,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s ease-out;pointer-events:none`;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  const style = document.createElement('style');
  style.textContent = '@keyframes ripple{to{transform:scale(2);opacity:0}}';
  document.head.appendChild(style);

  init();
});
