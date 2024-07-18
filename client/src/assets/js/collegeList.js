const COLLEGES = [
  {
    "key": "_w5tj1v8w8",
    "name": "A. D. Patel Institute of Technology"
  },
  {
    "key": "_nu9bok6qe",
    "name": "A.K.G. Engineering College"
  },
  {
    "key": "_vv6tezry5",
    "name": "A.R.J. College of Engineering and Technology"
  },
  {
    "key": "_fwjzd5hdr",
    "name": "ABES Engineering College"
  },
  {
    "key": "_8euhm0fce",
    "name": "ACE Engineering College"
  },
  {
    "key": "_yaba6bj8u",
    "name": "AES American Embassy School"
  },
  {
    "key": "_ceyb8ivpo",
    "name": "AIMIT"
  },
  {
    "key": "_tjfrjvwxg",
    "name": "AIT"
  },
  {
    "key": "_fbs8c77s2",
    "name": "AMC Engineering College"
  },
  {
    "key": "_16bhegfjj",
    "name": "APS College of Engineering"
  },
  {
    "key": "_n7iq96hhg",
    "name": "AQJ College"
  },
  {
    "key": "_ci56zax5d",
    "name": "ASM Institute of Business Management and Research"
  },
  {
    "key": "_mh68o28r0",
    "name": "Aalim Muhammed Salegh College"
  },
  {
    "key": "_kje5235sh",
    "name": "Aarupadai Veedu Institute of Technology"
  },
  {
    "key": "_5b85yb3kq",
    "name": "Acharya Institute of Technology"
  },
  {
    "key": "_qcst3j5es",
    "name": "Acharya N.G. Ranga Agricultural University"
  },
  {
    "key": "_lk63yeeow",
    "name": "Acharya Nagarjuna Vishwavidhyalayamu"
  },
  {
    "key": "_eslysfx31",
    "name": "Acropolis Institute of Technology and Research"
  },
  {
    "key": "_eyzhrrr4l",
    "name": "Acropolis Technical Campus"
  },
  {
    "key": "_23335ynli",
    "name": "Adhiyamaan College of Engineering"
  },
  {
    "key": "_btmne4doz",
    "name": "Adi Shankara Institute of Engineering and Technology"
  },
  {
    "key": "_0bc1u5uez",
    "name": "Adikavi Nannaya University"
  },
  {
    "key": "_t84mn9woy",
    "name": "Aditanar College of Arts and Science"
  },
  {
    "key": "_x8d26m8zj",
    "name": "Aditya Institute of Technology and Management"
  },
  {
    "key": "_6nidpjejr",
    "name": "Advanced Institute of Technology and Management"
  },
  {
    "key": "_wcf8p6tn7",
    "name": "Agra College"
  },
  {
    "key": "_l2nq0xaqc",
    "name": "Ajmer Institute of Technology"
  },
  {
    "key": "_vqq3v98mi",
    "name": "Akkineni Nageswara Rao College"
  },
  {
    "key": "_e9zgbiydy",
    "name": "Al-Ameen Educational and Medical Foundation"
  },
  {
    "key": "_uo5znxrkf",
    "name": "Alagappa University College of Education"
  },
  {
    "key": "_w21byl9s1",
    "name": "Alard Institute of Management Sciences (AIMS)"
  },
  {
    "key": "_oiym626mo",
    "name": "Aligarh Muslim University"
  },
  {
    "key": "_lquevhjk3",
    "name": "All India Institute of Medical Sciences"
  },
  {
    "key": "_m2lw168ku",
    "name": "All Saints College of Technology"
  },
  {
    "key": "_m36i24y0z",
    "name": "All Saints  College"
  },
  {
    "key": "_e9vnmp35d",
    "name": "Allahabad Agricultural Institute"
  },
  {
    "key": "_exbibvrc2",
    "name": "Allahabad University"
  },
  {
    "key": "_qh0vsxf6r",
    "name": "Allana Inistitute Of Management Sciences"
  },
  {
    "key": "_6hec5q2ay",
    "name": "Allana Institute of Management Studies"
  },
  {
    "key": "_til99s0eb",
    "name": "Alpha College of Engineering"
  },
  {
    "key": "_gh17rgk40",
    "name": "Amal Jyothi College of Engineering"
  },
  {
    "key": "_ftybvsppa",
    "name": "Ambala College of Engineering"
  },
  {
    "key": "_98uadkc9v",
    "name": "Ambedkar Institute of Technology"
  },
  {
    "key": "_fivum1c7o",
    "name": "American School of Bombay"
  },
  {
    "key": "_7wnxirhfz",
    "name": "Amity School of Engineering and Technology - New Delhi"
  },
  {
    "key": "_jfyv4vxho",
    "name": "Amity University Lucknow Campus"
  },
  {
    "key": "_rxco8qwgx",
    "name": "Amity University Haryana"
  },
  {
    "key": "_245s6g7te",
    "name": "Amrapali Institute of Management and Computer Applications"
  },
  {
    "key": "_j87ggwsnf",
    "name": "Amrapali Institute of Technology and Sciences"
  },
  {
    "key": "_87ng3yva5",
    "name": "Amravati University"
  },
  {
    "key": "_vqpczldot",
    "name": "Amrita Vishwa Vidyapeetham - Coimbatore"
  },
  {
    "key": "_f1xowfyrh",
    "name": "Amrita Vishwa Vidyapeetham - Amritapuri"
  },
  {
    "key": "_fjltrqvrr",
    "name": "Amrita Vishwa Vidyapeetham - Bangalore"
  },
  {
    "key": "_u2j3q87cg",
    "name": "Amrita School of Arts and Sciences - Mysore"
  },
  {
    "key": "_kl5mlnhlt",
    "name": "Amrita School of Arts and Sciences - Kochi"
  },
  {
    "key": "_1brkhczjt",
    "name": "Amrutvahini College of Engineering"
  },
  {
    "key": "_5558dqytx",
    "name": "Anand Institute of Higher Technology"
  },
  {
    "key": "_rxyyfuitw",
    "name": "Anand Institute of Information Science"
  },
  {
    "key": "_d6x8yj4v0",
    "name": "Anbanathapuram Vahaira Charities College - A.V.C."
  },
  {
    "key": "_c8sv3bfk1",
    "name": "Andhra University"
  },
  {
    "key": "_sj5ydxli8",
    "name": "Angel College of Engineering and Technology"
  },
  {
    "key": "_3440dvtm7",
    "name": "Anil Neerukonda Institute of Technology and Sciences - ANITS"
  },
  {
    "key": "_vao8w4nul",
    "name": "Anja Polytechnic College"
  },
  {
    "key": "_pov5eeusb",
    "name": "Anjalai Ammal Mahalingam Engineering College"
  },
  {
    "key": "_8fu8d5skz",
    "name": "Anjuman College of Engineering and Technology"
  },
  {
    "key": "_ks1at3ns4",
    "name": "Anna University"
  },
  {
    "key": "_8q1wdgdgq",
    "name": "Annai Mathammal Sheela Engineering College"
  },
  {
    "key": "_rasduuzwv",
    "name": "Annai Teresa Magalir Palkalaikazhgam"
  },
  {
    "key": "_14eb1omt0",
    "name": "Annamacharya Institute of Technology and Sciences"
  },
  {
    "key": "_6h1immmij",
    "name": "Annamalai University"
  },
  {
    "key": "_81a22731z",
    "name": "Anurag group of Institutions"
  },
  {
    "key": "_lm3jvoxh2",
    "name": "Apeejay College of Engineering"
  },
  {
    "key": "_wwpkds1yc",
    "name": "Apeejay Institute of Technology"
  },
  {
    "key": "_ss9f2ynu9",
    "name": "Apex Institute of Management and Science"
  },
  {
    "key": "_ea749przl",
    "name": "Appa Institute of Engineering and Technology"
  },
  {
    "key": "_u4f4ts9d5",
    "name": "Arasu Engineering College"
  },
  {
    "key": "_m5v9pbi0d",
    "name": "Army Institute of Technology"
  },
  {
    "key": "_4joyrcoca",
    "name": "Arul Anandar College"
  },
  {
    "key": "_0ph7zixtw",
    "name": "Arya College of Engineering and Information Technology"
  },
  {
    "key": "_w65uo4r8m",
    "name": "Arya Institute of Engineering and Technology"
  },
  {
    "key": "_1x2tk3tdi",
    "name": "Aryabhatta Institute of Engineering and Management"
  },
  {
    "key": "_eg1voqzky",
    "name": "Asansol Engineering College"
  },
  {
    "key": "_w3m0whqt5",
    "name": "Asia Pacific Institute of Information Technology"
  },
  {
    "key": "_yy0brh8n5",
    "name": "Assam Agricultural University"
  },
  {
    "key": "_4gsimyac2",
    "name": "Assam Engineering College"
  },
  {
    "key": "_x2bbxd2qc",
    "name": "Assam University"
  },
  {
    "key": "_g3jemtjs4",
    "name": "Atal Birahi Vajpayee Indian Institute of Information Technology and Management"
  },
  {
    "key": "_0f53urvw2",
    "name": "Atharva College of Engineering"
  },
  {
    "key": "_lvs23pqs0",
    "name": "Atmiya Institute of Technology and Science"
  },
  {
    "key": "_a96h7d1v8",
    "name": "Atria Institute of Technology"
  },
  {
    "key": "_kd3c19ndm",
    "name": "Auden Technology and Management Academy"
  },
  {
    "key": "_gttbo8u4y",
    "name": "Aurora P. G. College"
  },
  {
    "key": "_yos7lgxhc",
    "name": "Aurora Engineering College"
  },
  {
    "key": "_s3i8sxcha",
    "name": "Avanthi Institute of Engineering and Technology"
  },
  {
    "key": "_59sdmuikk",
    "name": "Avinashilingam Institute for Home Science and Higher Education for Women"
  },
  {
    "key": "_16a16lstf",
    "name": "Awadhesh Pratap Singh Vishwavidyalaya"
  },
  {
    "key": "_5jl55f08h",
    "name": "Ayya Nadar Janaki Ammal College"
  },
  {
    "key": "_jw2lmod8g",
    "name": "B P Poddar Institute of Management and Technology"
  },
  {
    "key": "_gjotwt5mx",
    "name": "B. P. Poddar Institute of Management and Technology"
  },
  {
    "key": "_y5dp10gl4",
    "name": "B. V. B. College of Engineering and Technology"
  },
  {
    "key": "_4f1jlguzi",
    "name": "B.N. Mandal University"
  },
  {
    "key": "_1x21imd18",
    "name": "B.S. Anangpuria Institute of Technology and Management"
  },
  {
    "key": "_4fa81go34",
    "name": "B.V.B. College of Engineering and Technology"
  },
  {
    "key": "_nv7dvcsgb",
    "name": "B.V.C. Engineering College"
  },
  {
    "key": "_mvp119027",
    "name": "BBS College of Engineering and. Technology"
  },
  {
    "key": "_6hagmwwk8",
    "name": "BK Birla Institue of Engineering and Technology"
  },
  {
    "key": "_q2buf9yn7",
    "name": "BLDEACET"
  },
  {
    "key": "_9bzf30cxh",
    "name": "BMS College of Engineering (BMSCE)"
  },
  {
    "key": "_e7p5acy9x",
    "name": "BMS Institute of Technology (BMSIT)"
  },
  {
    "key": "_ck2mwn3zt",
    "name": "BNM Institute of Technology"
  },
  {
    "key": "_vsz60om2w",
    "name": "BSA College of Engineering and Technology"
  },
  {
    "key": "_br6okbhpd",
    "name": "BSA Crescent Engineering College"
  },
  {
    "key": "_02j0fmu9s",
    "name": "Baba Banda Singh Bahadur Engineering College"
  },
  {
    "key": "_4lor2w2v8",
    "name": "Baba Farid University of Health Sciences"
  },
  {
    "key": "_kfv9dmfsj",
    "name": "Baba Saheb Ambedkar Institute of Technology and Management"
  },
  {
    "key": "_pthq9qqn0",
    "name": "Babaria Institute of Technology"
  },
  {
    "key": "_acx6736za",
    "name": "Babasaheb Bhimrao Ambedkar Bihar University"
  },
  {
    "key": "_cwxg4o2xd",
    "name": "Babasaheb Bhimrao Ambedkar University"
  },
  {
    "key": "_5qosd9ene",
    "name": "Babu Banarasi Das National Institute of Technology and Management"
  },
  {
    "key": "_6k1npi3g4",
    "name": "Babu Banarsi Das Institute of Technology"
  },
  {
    "key": "_qyy57hm35",
    "name": "Babu Mohanlal Arya Smarak Engineering College"
  },
  {
    "key": "_3v4e2e1na",
    "name": "Bahadhur Shastri National Academy of Administration"
  },
  {
    "key": "_9tc297v2q",
    "name": "Baharati Vidyapeeth College of Engineering"
  },
  {
    "key": "_4ux1za0qa",
    "name": "Bahai Institute for Higher Education"
  },
  {
    "key": "_of692kv6j",
    "name": "Baldev Ram Mirdha Institute of Technology"
  },
  {
    "key": "_8jg9y9kkw",
    "name": "Balaji Institute of Technology &amp; Science"
  },
  {
    "key": "_7v34bquoy",
    "name": "Banaras Hindu University"
  },
  {
    "key": "_z1kx2texv",
    "name": "Banarsidas Chandiwala Institute Of Information Technology"
  },
  {
    "key": "_3pjdi3pzj",
    "name": "Banasthali Vidyapith for Women"
  },
  {
    "key": "_eosepsrxt",
    "name": "Bangalore Institute of Technology"
  },
  {
    "key": "_w5kze0sii",
    "name": "Bangalore University"
  },
  {
    "key": "_0su6nt4ru",
    "name": "Bankura Unnayani Institute of Engineering"
  },
  {
    "key": "_q2ouz9rj9",
    "name": "Bannari Amman Institute of Technology"
  },
  {
    "key": "_hhg00zcl4",
    "name": "Bansal College of Engineering"
  },
  {
    "key": "_x8j91hcgp",
    "name": "Bansal Institute of Science and Technology"
  },
  {
    "key": "_96q5lgby6",
    "name": "Bansal School of Engineering and Technology"
  },
  {
    "key": "_gjcvmc6r8",
    "name": "Bapuji Institute of Engineering and Technology"
  },
  {
    "key": "_l36586lye",
    "name": "Bapuji Institute of Hi-Tech Education"
  },
  {
    "key": "_uz0yb9hdn",
    "name": "Bapurao Deshmukh College of Engineering"
  },
  {
    "key": "_ao94h4wdt",
    "name": "Barkatullah Vishwavidyalaya"
  },
  {
    "key": "_1yxw7tlcw",
    "name": "Basaveshwar Engineering College - Bagalkot"
  },
  {
    "key": "_24kll3pc3",
    "name": "Beant College of Engineering and Technology"
  },
  {
    "key": "_ewho335cl",
    "name": "Bellary Engineering College"
  },
  {
    "key": "_kardrkwjl",
    "name": "Bengal College of Engineering and Technology"
  },
  {
    "key": "_xl33z2mi6",
    "name": "Bengal Engineering College"
  },
  {
    "key": "_179kqh0ax",
    "name": "Bengal Engineering and Science University"
  },
  {
    "key": "_s4rkfacsg",
    "name": "Bengal Institute of Technology"
  },
  {
    "key": "_f9whqqhwr",
    "name": "Berhampur University"
  },
  {
    "key": "_how9c78m4",
    "name": "Bhajarang Engineering College"
  },
  {
    "key": "_ty7eebxxo",
    "name": "Bharat Institute of Technology"
  },
  {
    "key": "_tk4fcrwbn",
    "name": "Bharath Institute of Science and Technology"
  },
  {
    "key": "_2d0swa4lx",
    "name": "Bharath Niketan Engineering College"
  },
  {
    "key": "_2j0xf43og",
    "name": "Bharathiar University"
  },
  {
    "key": "_w5e7z5q20",
    "name": "Bharathidasan University"
  },
  {
    "key": "_mn85wmamd",
    "name": "Bharati Vidyapeeth"
  },
  {
    "key": "_5nax25o2l",
    "name": "Bharati Vidyapeeth Institute of Management and IT"
  },
  {
    "key": "_ne2db3y5c",
    "name": "Bharati Vidyapeeth University Institute of Management and Research"
  },
  {
    "key": "_voi4zrwdr",
    "name": "Bharatiya Vidya Bhavans S. P. Jain Institute of Management and Research (SPJIMR)"
  },
  {
    "key": "_rbw1a7x5v",
    "name": "Bhartiya Pashu-Chikitsa Anusandhan Sansthan"
  },
  {
    "key": "_t6sy6au5y",
    "name": "Bhatkhande Music Institute"
  },
  {
    "key": "_137lq2pfs",
    "name": "Bhavnagar University"
  },
  {
    "key": "_tjxj765c4",
    "name": "Bhilai Institute of Technology"
  },
  {
    "key": "_69oeh2m2i",
    "name": "Bhiwani Institute of Technology and Sciences"
  },
  {
    "key": "_eic98muxf",
    "name": "Bhoj Reddy Engineering College for Women"
  },
  {
    "key": "_lm7oi0sqg",
    "name": "Bhoomaraddi College of Engineering and Technology (BVBCET)"
  },
  {
    "key": "_549wqbxio",
    "name": "Bhopal Engineering College"
  },
  {
    "key": "_ven969vy7",
    "name": "Bidhan Chandra Krishi Viswavidyalaya"
  },
  {
    "key": "_0u4w1s328",
    "name": "Bihar Yoga Bharati"
  },
  {
    "key": "_hc8v068oq",
    "name": "Biju Patnaik University of Technology"
  },
  {
    "key": "_bb46qa5bs",
    "name": "Birbhum Institute of Engineering and Technology"
  },
  {
    "key": "_gqt8tipdy",
    "name": "Birla Institute of Applied Science"
  },
  {
    "key": "_ki307xkjg",
    "name": "Birla Institute of Technology - Ranchi"
  },
  {
    "key": "_a6lq0edfe",
    "name": "Birla Institute of Technology and Science - BITS Pilani"
  },
  {
    "key": "_tx3xuo3m0",
    "name": "Birla Institute of Technology"
  },
  {
    "key": "_ze9nwxr7w",
    "name": "Birsa Agricultural University"
  },
  {
    "key": "_f4tr8q19m",
    "name": "Birsa Institute of Technology"
  },
  {
    "key": "_hcq5riugd",
    "name": "Bishop Heber College"
  },
  {
    "key": "_uhti2j3la",
    "name": "Biyani Institute of Science and Management - BISMA"
  },
  {
    "key": "_zbn3gp15w",
    "name": "Brindavan College of Engineering"
  },
  {
    "key": "_73uuen3uf",
    "name": "Bundelkhand Institute of Engineering and Technology"
  },
  {
    "key": "_1dtpzcgh2",
    "name": "Bundelkhand University"
  },
  {
    "key": "_c3h3ty3bo",
    "name": "C K Pithawala College of Engineering and Technology"
  },
  {
    "key": "_d75gy0cde",
    "name": "C U Shah College of Engineering and Technology"
  },
  {
    "key": "_hx45vi0uo",
    "name": "C.B. Patel Computer College"
  },
  {
    "key": "_28z2zxmfn",
    "name": "CET Karnataka Information and Counselling"
  },
  {
    "key": "_hgmmw791q",
    "name": "CIT-Changa"
  },
  {
    "key": "_kj93k9v0h",
    "name": "CMR College of Engineering Technology (CMRCET)"
  },
  {
    "key": "_vntd421qe",
    "name": "CMR College of Engineering and Technology"
  },
  {
    "key": "_toya1jgnu",
    "name": "CMR Institute of Technology"
  },
  {
    "key": "_0e19ycjve",
    "name": "CSI College Of Engineering (CSICE)"
  },
  {
    "key": "_bier1yvqu",
    "name": "CV Raman College of Engineering"
  },
  {
    "key": "_9v95aut6g",
    "name": "CVR College of Engineering"
  },
  {
    "key": "_gb4yiauo1",
    "name": "Calcutta Institute of Engineering and Management"
  },
  {
    "key": "_xu2e41dxm",
    "name": "Calcutta Institute of Technology"
  },
  {
    "key": "_jtvs43qyb",
    "name": "Canara Engineering College"
  },
  {
    "key": "_9o9uxcum4",
    "name": "Chandubhai S Patel Institute of Technology"
  },
  {
    "key": "_ktybaud7z",
    "name": "Central Agricultural University"
  },
  {
    "key": "_10v1unin4",
    "name": "Central Institute of English and Foreign Languages"
  },
  {
    "key": "_ndj3bw9xi",
    "name": "Central Institute of Fisheries Education"
  },
  {
    "key": "_m53dkxoam",
    "name": "Central Institute of Higher Tibetan Studies"
  },
  {
    "key": "_x08w9b5c4",
    "name": "Centre for Development of Advanced Computing"
  },
  {
    "key": "_1usujhrj4",
    "name": "Centre for Environmental Planning and Technology"
  },
  {
    "key": "_8v8r7s08s",
    "name": "Chaitanya Bharati Institute of Technology"
  },
  {
    "key": "_3pwccrl27",
    "name": "Chaityana Institute of Science and Technology"
  },
  {
    "key": "_9x7ff036a",
    "name": "Chamelidevi Institute of Technology and Management"
  },
  {
    "key": "_59plefh3w",
    "name": "Chandigarh Engineering College"
  },
  {
    "key": "_33s4op8ce",
    "name": "Chandra Shekhar Azad University of Agriculture and Technology"
  },
  {
    "key": "_t8bzf7a69",
    "name": "Chaudhary Charan Singh Haryana Agricultural University"
  },
  {
    "key": "_8azv888at",
    "name": "Chaudhary Charan Singh University"
  },
  {
    "key": "_ga0f3fmag",
    "name": "Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishwavidyalaya"
  },
  {
    "key": "_o8nfyh6fz",
    "name": "Chennai Mathematical Institute"
  },
  {
    "key": "_ykc0iecy9",
    "name": "Cherraans Arts and Science College"
  },
  {
    "key": "_rosvdk5l8",
    "name": "Chettinad College of Engineering and Technology"
  },
  {
    "key": "_jwwd9bxzz",
    "name": "Chhattisgarh Swami Vivekanand Technical University"
  },
  {
    "key": "_qnxo5m7kk",
    "name": "Chhatrapati Shahu Ji Maharaj University"
  },
  {
    "key": "_tvmrv058i",
    "name": "Chhatrapati Shivaji Institute of Technoloty"
  },
  {
    "key": "_cnawrlyid",
    "name": "Chikhli College"
  },
  {
    "key": "_vu3zzntsa",
    "name": "Chinmaya Institute of Technology"
  },
  {
    "key": "_7ft0kkwhc",
    "name": "Chitkara Educational Trust"
  },
  {
    "key": "_zh6zy0ek2",
    "name": "Chouksey Engineering College"
  },
  {
    "key": "_rqt3736my",
    "name": "Christ College"
  },
  {
    "key": "_hl4mpqztj",
    "name": "Christ University"
  },
  {
    "key": "_bmlenl57o",
    "name": "Christu Jayanthi Jubilee College"
  },
  {
    "key": "_znorrmqsu",
    "name": "Co-operative Institute of Technology - Vadakara"
  },
  {
    "key": "_r297zgd02",
    "name": "Cochin University of Science and Technology - Kerala"
  },
  {
    "key": "_zrivkao63",
    "name": "Coimbatore Institute of Engineering and Technology"
  },
  {
    "key": "_8zyejbhmc",
    "name": "Coimbatore Institute of Technology"
  },
  {
    "key": "_vzyyamn8i",
    "name": "College of Engineering and Management"
  },
  {
    "key": "_px8v13qyi",
    "name": "College of Engineering and Technology"
  },
  {
    "key": "_y46xm6p60",
    "name": "College of Engineering Kallooppara"
  },
  {
    "key": "_f9i495s2m",
    "name": "College Of  Engineering Karunagapally"
  },
  {
    "key": "_ubff11qzh",
    "name": "College of Engineering Poonjar"
  },
  {
    "key": "_920m57sdt",
    "name": "College of Engineering Roorkee"
  },
  {
    "key": "_qil9l3wtu",
    "name": "College of Engineering Thalassery"
  },
  {
    "key": "_13dcqumu4",
    "name": "College of Engineering Trivandrum"
  },
  {
    "key": "_350wchqzl",
    "name": "College of Engineering"
  },
  {
    "key": "_3ukr63vsj",
    "name": "College of Technology And Engineering"
  },
  {
    "key": "_zx1th7jgb",
    "name": "Cummins College of Engineering for Women"
  },
  {
    "key": "_8h435u9f0",
    "name": "D. G. Ruparel College"
  },
  {
    "key": "_q9rbxs67z",
    "name": "D.G. Vaishnav College - Chennai"
  },
  {
    "key": "_828fzs3w6",
    "name": "D.N.R College"
  },
  {
    "key": "_dano8n55x",
    "name": "DAV College of Engineering and Technology"
  },
  {
    "key": "_7erymbv38",
    "name": "DAV Institute of Engineering and Technology"
  },
  {
    "key": "_wdhc4khn9",
    "name": "DB Pampa College"
  },
  {
    "key": "_2oyohh04f",
    "name": "DES Navinchandra Mehta Institute of Technology and Development"
  },
  {
    "key": "_l5q1wsevx",
    "name": "DMCE Online"
  },
  {
    "key": "_zzff25z8l",
    "name": "DRK Institute of Science and Technology"
  },
  {
    "key": "_a21bfo01x",
    "name": "DVR college of Engineering and Technology"
  },
  {
    "key": "_v3unebgqv",
    "name": "Dadi Institute of Engineering and Technology"
  },
  {
    "key": "_roczokvj8",
    "name": "Dakshina Bharat Hindi Prachar Sabha"
  },
  {
    "key": "_l47zcln7f",
    "name": "Darda Engineering College Yavatmal"
  },
  {
    "key": "_rbvbv3za2",
    "name": "Dayalbagh Educational Institute"
  },
  {
    "key": "_j2j1hfrvn",
    "name": "Dayananda Sagar Institutions"
  },
  {
    "key": "_txzefk9ai",
    "name": "Deccan College of Engineering and Technology"
  },
  {
    "key": "_86i15usf0",
    "name": "Deenbandhu Chhotu Ram University of Science and Technology"
  },
  {
    "key": "_nntpzqmds",
    "name": "Deendayal Upadhyay Gorakhpur University"
  },
  {
    "key": "_yclyaog1u",
    "name": "Deepshikha College of Technical Education"
  },
  {
    "key": "_bbw28vgkm",
    "name": "Dehradun Institute of Technology"
  },
  {
    "key": "_nqovxozhv",
    "name": "Delhi College of Engineering"
  },
  {
    "key": "_7q7kfgb4g",
    "name": "Delhi University"
  },
  {
    "key": "_v76ifsbhg",
    "name": "Delhi Vishwavidyalaya"
  },
  {
    "key": "_6y7kb5fsx",
    "name": "Deogiri College Aurangabad"
  },
  {
    "key": "_npp0x90ws",
    "name": "Dev Sanskriti Vishwavidyalaya"
  },
  {
    "key": "_8hkqsr94i",
    "name": "Devanga Arts College"
  },
  {
    "key": "_5wk3um8ms",
    "name": "Devi Ahilya Vishwavidyalaya"
  },
  {
    "key": "_1hpty0jxu",
    "name": "Devineni Venkata Ramana and Dr. HS Mic College of Technology"
  },
  {
    "key": "_n076pbxqs",
    "name": "Dhanalakshmi College of Engineering"
  },
  {
    "key": "_a9pb6hwu6",
    "name": "Dharmsinh Desai University"
  },
  {
    "key": "_ssfytu2h1",
    "name": "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)"
  },
  {
    "key": "_nfwtspd4k",
    "name": "Dhruva College of Management"
  },
  {
    "key": "_ux1qww0l2",
    "name": "Dibrugarh University"
  },
  {
    "key": "_wfxfbdjan",
    "name": "Dnyaneswar Vidyapeeth IST "
  },
  {
    "key": "_fejdg3sio",
    "name": "Doctor B.R. Ambedkar Open University"
  },
  {
    "key": "_qof4ps99a",
    "name": "Doctor Babasaheb Ambedkar Technological University"
  },
  {
    "key": "_4k4rayj71",
    "name": "Doctor Balasaheb Sawant Konkan Krishi Vidyapeeth"
  },
  {
    "key": "_xcwy3loka",
    "name": "Doctor Bhim Rao Ambedkar University"
  },
  {
    "key": "_vxidwplum",
    "name": "Doctor Harisingh Gour Vishwavidyalaya"
  },
  {
    "key": "_ns3yxj1vv",
    "name": "Doctor Panjabrao Deshmukh Krishi Vidyapeeth"
  },
  {
    "key": "_90qb2qoh4",
    "name": "Doctor Ram Manohar Lohia Awadh University"
  },
  {
    "key": "_jth06kc59",
    "name": "Doctor Yashwant Singh Parmar University of Horticulture and Forestry"
  },
  {
    "key": "_wxk26y8dm",
    "name": "Don Bosco Institute of Technology"
  },
  {
    "key": "_nr0cr45zm",
    "name": "Dr G R Damodaran College of Science"
  },
  {
    "key": "_clqinstg9",
    "name": "Dr MGR College"
  },
  {
    "key": "_yzu2qt81c",
    "name": "Dr Mahalingam College of Engineering and Technology"
  },
  {
    "key": "_56ey6y0v4",
    "name": "Dr Paul Raj Engineering College"
  },
  {
    "key": "_msd5g6uph",
    "name": "Dr. B.C. Roy Engineering College"
  },
  {
    "key": "_il0qj0zfg",
    "name": "Dr. Babasaheb Ambedkar Marathwada University"
  },
  {
    "key": "_qjj6g7d7n",
    "name": "Dr. D. Y. Patil College of Engineering"
  },
  {
    "key": "_900gpo4v6",
    "name": "Dr. D. Y. Patil Institute Of Management and Research"
  },
  {
    "key": "_i5yxmi8xr",
    "name": "Dr. Kedar Nath Modi Institute of Engineering and Technology"
  },
  {
    "key": "_vm4fnizhs",
    "name": "Dr. M.G.R Engineering College"
  },
  {
    "key": "_c35uj2ti8",
    "name": "Dr. Navalar Nedunchezhian College Of Engineering"
  },
  {
    "key": "_3pcqv4dl5",
    "name": "Dr. Pauls Engineering College"
  },
  {
    "key": "_2tcim49us",
    "name": "Dr. Ram Manohar Lohia Institute"
  },
  {
    "key": "_3kwy99f60",
    "name": "Dr. Sivanthi Aditanar College of Engineering"
  },
  {
    "key": "_5uwdwn5k2",
    "name": "Dr. T. Thimmaiah Institute of Technology"
  },
  {
    "key": "_5m21dbjz5",
    "name": "Dr.M.G.R University"
  },
  {
    "key": "_3u1psytqv",
    "name": "Dravidian University"
  },
  {
    "key": "_p4tq4c379",
    "name": "Dronacharya College of Engineering"
  },
  {
    "key": "_u3qqmy8n4",
    "name": "Durgapur Institute of Advanced Technology and Management"
  },
  {
    "key": "_c108kr2ym",
    "name": "ERandDCI Institute of Technology"
  },
  {
    "key": "_641wzn2zo",
    "name": "East Point College of Engineering and Technology"
  },
  {
    "key": "_djvlroiss",
    "name": "Easwari Engineering College"
  },
  {
    "key": "_ewi28w4uy",
    "name": "Einstein College of Engineering"
  },
  {
    "key": "_cq8ao8rgz",
    "name": "Engineering College Ajmer"
  },
  {
    "key": "_sri40vf93",
    "name": "Engineering College in Patiala"
  },
  {
    "key": "_bt9frp3vl",
    "name": "Engineering College of Kota"
  },
  {
    "key": "_lx3ngd4gi",
    "name": "Engineering College"
  },
  {
    "key": "_8knejw6fu",
    "name": "Erode Sengunthar Engineering College"
  },
  {
    "key": "_pp6fz2tfb",
    "name": "Ethiraj College"
  },
  {
    "key": "_or8267x1v",
    "name": "FET"
  },
  {
    "key": "_0p8swhgxb",
    "name": "FORE School of Management"
  },
  {
    "key": "_502ebrh6q",
    "name": "Faculdades Integradas Logatti"
  },
  {
    "key": "_lkuchclu6",
    "name": "Fakir Mohan University"
  },
  {
    "key": "_yiygbsm8a",
    "name": "Farah Institute of Computer Science"
  },
  {
    "key": "_owsp8wj02",
    "name": "Federal Institute of Science and Technology"
  },
  {
    "key": "_hs77n7wcg",
    "name": "Fergusson College - Pune"
  },
  {
    "key": "_72p7p7wcr",
    "name": "Feroz Gandhi Institute of Engineering and Technology"
  },
  {
    "key": "_jgmhh7acn",
    "name": "Forest Research Institute"
  },
  {
    "key": "_n95wj23ei",
    "name": "Forte Institute of Technology"
  },
  {
    "key": "_qjc7wxil7",
    "name": "Fr. Conceicao Rodrigues College of Engineering"
  },
  {
    "key": "_2d6da0r1d",
    "name": "Future Institute of Engineering and Management"
  },
  {
    "key": "_ki8q5ow82",
    "name": "Gujarat Forensic Science University"
  },
  {
    "key": "_monrre0cq",
    "name": "G H Raisoni Institute of Information Technology"
  },
  {
    "key": "_nw98kxhsw",
    "name": "G. B. Pant Engineering College - Uttar Pradesh"
  },
  {
    "key": "_ij5pba43q",
    "name": "G. D. Goenka World Institute - Lancaster University"
  },
  {
    "key": "_18jn52les",
    "name": "G. Narayanamma Institute of Technology and Science"
  },
  {
    "key": "_ekgztjhkp",
    "name": "G. Pulla Reddy Engineering College"
  },
  {
    "key": "_kyranajyk",
    "name": "G. Pullaiah College of Engineering and Technology"
  },
  {
    "key": "_9u8ujylj4",
    "name": "G.H. Patel College of Engineering and Technology"
  },
  {
    "key": "_quunyl58z",
    "name": "G.V.M. Institute of Technology and Management - GVMITM"
  },
  {
    "key": "_v3nr9o06y",
    "name": "GATES Institute of Technology"
  },
  {
    "key": "_o0l3qwk0e",
    "name": "GLA Institute of Technology and Management"
  },
  {
    "key": "_h5yh3hv9i",
    "name": "GLS Institute of Computer Technology"
  },
  {
    "key": "_14yampt66",
    "name": "GMR Institute of Technology (GMRIT)"
  },
  {
    "key": "_cnazkeo98",
    "name": "Gnanamani College Of Engineering"
  },
  {
    "key": "_db8tqkriv",
    "name": "GS Medical College"
  },
  {
    "key": "_b7gr7p7qw",
    "name": "GVP College of Engineering"
  },
  {
    "key": "_ctqreg4vt",
    "name": "Galgotia Institute of Management and Technology"
  },
  {
    "key": "_mbgqr7e1b",
    "name": "Galgotias College of Engineering and Technology"
  },
  {
    "key": "_v5wb4m6uv",
    "name": "Ganadipathy Tulsis Engineering College"
  },
  {
    "key": "_ytuqxo0l7",
    "name": "Gandhi Institute for Technology"
  },
  {
    "key": "_j6ieo079c",
    "name": "Gandhi Institute of Engineering and Technology (GIET)"
  },
  {
    "key": "_u6l181l9p",
    "name": "Gandhi Institute of Engineering and Technology"
  },
  {
    "key": "_o9ziiq9s8",
    "name": "Gandhi Institute of Technology and Management"
  },
  {
    "key": "_mdnp8dlte",
    "name": "Gandhigram Rural Institute"
  },
  {
    "key": "_rxuk9pbfi",
    "name": "Ganpat University"
  },
  {
    "key": "_8zyw8gtbk",
    "name": "Garden City College"
  },
  {
    "key": "_8e161i27k",
    "name": "Gauhati University"
  },
  {
    "key": "_fmeykz42y",
    "name": "Gauthami Degree College For Women"
  },
  {
    "key": "_scmo7feg9",
    "name": "Gayatri Vidya Parishad College of Engineering"
  },
  {
    "key": "_fx98ii366",
    "name": "Geeta Institute Of Management And Technology"
  },
  {
    "key": "_42f3r560x",
    "name": "Geetanjali Institute of Technical Studies"
  },
  {
    "key": "_6wxpr0bjx",
    "name": "Gitam Institute of Technology and Science"
  },
  {
    "key": "_qnr60hbpd",
    "name": "Gitam University"
  },
  {
    "key": "_029r89jwd",
    "name": "Gitarattan International Business School"
  },
  {
    "key": "_k1sv49ecc",
    "name": "Global Academy of Technology"
  },
  {
    "key": "_9h5q1iv7l",
    "name": "Global Institute of Management and Technology (GIMT)"
  },
  {
    "key": "_17qsanqe6",
    "name": "Global Institute of Technology"
  },
  {
    "key": "_l591ik6mf",
    "name": "Goa Institute of Management"
  },
  {
    "key": "_kqvxyg4zh",
    "name": "Goa University"
  },
  {
    "key": "_jpv2xo17g",
    "name": "Godavari Institute of Engineering and Technology"
  },
  {
    "key": "_h69372tum",
    "name": "Gogte Institute of Technology"
  },
  {
    "key": "_nz4nxldif",
    "name": "Gojan School of Business and Technology"
  },
  {
    "key": "_ly6fopoam",
    "name": "Gokaraju Rangaraju Institute of Engineering and Technology"
  },
  {
    "key": "_bkhc9eql7",
    "name": "Gokhale Institute of Politics and Economics"
  },
  {
    "key": "_r2juxw1rr",
    "name": "Gopal Ramalingam Memorial Engineering College"
  },
  {
    "key": "_g6ivo2y1i",
    "name": "Government College Of Engineering - Pune"
  },
  {
    "key": "_x7l7wgqo1",
    "name": "Government College of Arts"
  },
  {
    "key": "_wqkg1fr3r",
    "name": "Government College of Engineering"
  },
  {
    "key": "_6p4gahbii",
    "name": "Government College of Engineering Auranagabd"
  },
  {
    "key": "_043bqkcq1",
    "name": "Government College of Engineering and Ceramic Technology"
  },
  {
    "key": "_mu69pebdc",
    "name": "Government College of Engineering and Leather Technology"
  },
  {
    "key": "_g1zl0wfdk",
    "name": "Government College of Engineering"
  },
  {
    "key": "_mvk6if2x4",
    "name": "Government Engineering College"
  },
  {
    "key": "_30aeudw28",
    "name": "Government College of Technology"
  },
  {
    "key": "_9c57qsrbu",
    "name": "Government Engineering College Ajmer"
  },
  {
    "key": "_6jj2dibst",
    "name": "Government Polytechnic Institute"
  },
  {
    "key": "_d2vqqnae5",
    "name": "Government Polytechnic"
  },
  {
    "key": "_hy7s79uun",
    "name": "Govind Ballabh Pant Krishi Evam Praudyogik Vishwavidyalaya"
  },
  {
    "key": "_qqa4bdl6j",
    "name": "Govt. Mahila Engineering College"
  },
  {
    "key": "_u86xgk6zp",
    "name": "Graphic Era Institute of Technology"
  },
  {
    "key": "_r102lh51h",
    "name": "Great Lakes Institute of Management"
  },
  {
    "key": "_qzta9cdgh",
    "name": "Greater Noida Institute of Technology"
  },
  {
    "key": "_5op92cflr",
    "name": "Gudlavalleru Engineering College"
  },
  {
    "key": "_mign89n7j",
    "name": "Gujarat Agricultural University"
  },
  {
    "key": "_iiazyt8qp",
    "name": "Gujarat Ayurved University"
  },
  {
    "key": "_wx9napfvb",
    "name": "Gujarat University"
  },
  {
    "key": "_zt0xq2bgr",
    "name": "Gujarat Vidyapith"
  },
  {
    "key": "_fvesxcmjz",
    "name": "Gulbarga University"
  },
  {
    "key": "_kv7pw3v7w",
    "name": "Gulzar Group Of Institutes"
  },
  {
    "key": "_aaordp1kx",
    "name": "Gurgaon Institute of Technology and Management"
  },
  {
    "key": "_rmovsd8no",
    "name": "Guru Ghasidas University"
  },
  {
    "key": "_h7986e3zk",
    "name": "Guru Gobind Singh College of Engineering and Technology"
  },
  {
    "key": "_88v6uaorr",
    "name": "Guru Gobind Singh Indraprastha University"
  },
  {
    "key": "_buet43iqv",
    "name": "Guru Jambeshwar University"
  },
  {
    "key": "_e5o205sty",
    "name": "Guru Nanak Dev University"
  },
  {
    "key": "_6zftxr59w",
    "name": "Guru Nanak Enginerring College"
  },
  {
    "key": "_pigcazyp6",
    "name": "Guru Ramdas Khalsa Institite of Technology"
  },
  {
    "key": "_u5tcty6cl",
    "name": "Guru Tegh Bahadur Institute of Technology-GTBIT"
  },
  {
    "key": "_smkwylngn",
    "name": "Gurukula Kangri Vishwavidyalaya"
  },
  {
    "key": "_i7skiijtu",
    "name": "Gurunanak Institute of Technology"
  },
  {
    "key": "_5oah3ep76",
    "name": "Gyan Ganga Institute of Technology and Sciences"
  },
  {
    "key": "_5nq7hvhqb",
    "name": "Gyan Vihar School of Engineering and Technology"
  },
  {
    "key": "_9j80juach",
    "name": "H.K.R.H. College"
  },
  {
    "key": "_jf0wd00xd",
    "name": "HKBK College of Engineering"
  },
  {
    "key": "_qnphbmmcd",
    "name": "HMS Institute of Technology"
  },
  {
    "key": "_dgk9s48hq",
    "name": "Haldia Insitute of Technology"
  },
  {
    "key": "_40nin5293",
    "name": "Harcourt Butler Technological Institute - Kanpur"
  },
  {
    "key": "_l2vr8wk8e",
    "name": "Hemchandracharya North Gujarat University"
  },
  {
    "key": "_tz7k6mk77",
    "name": "Hemwati Nandan Bahuguna Garhwal University"
  },
  {
    "key": "_tkojznpdd",
    "name": "Heritage Institute of Technology"
  },
  {
    "key": "_sfqfzd2cb",
    "name": "Hi-Point College of Engineering and Technology"
  },
  {
    "key": "_s16pj3tox",
    "name": "Himachal Pradesh University"
  },
  {
    "key": "_97tsp9vpv",
    "name": "Hindustan College of Engineering"
  },
  {
    "key": "_pz11t2fau",
    "name": "Hindustan College of Science and Technology"
  },
  {
    "key": "_94frtyzno",
    "name": "Hitkarini College of Engineering and Technology"
  },
  {
    "key": "_yxr8aqnpb",
    "name": "Holy Mary Institute of Technology and Science"
  },
  {
    "key": "_1rqyq2t2b",
    "name": "Hyderabad Central University"
  },
  {
    "key": "_klgiowc4t",
    "name": "IBS Ahmedabad"
  },
  {
    "key": "_d9h93frtj",
    "name": "IBS Hyderabad"
  },
  {
    "key": "_t82pg8uwy",
    "name": "ICFAI Business School"
  },
  {
    "key": "_d3bi3mv0c",
    "name": "ICFAI National College"
  },
  {
    "key": "_p1p0gi9in",
    "name": "ICFAI School of Information Technology"
  },
  {
    "key": "_501ax9buw",
    "name": "ICFAI University"
  },
  {
    "key": "_njlyth4ma",
    "name": "IEC College of Engineering and Technology"
  },
  {
    "key": "_ixbkpir4y",
    "name": "IMPS College of Engineering and Technology - IMPSCET"
  },
  {
    "key": "_k6oljsnqx",
    "name": "IMS College Of Engineering"
  },
  {
    "key": "_rwho1yzn4",
    "name": "INMANTEC Integrated Academy of Management and Technology"
  },
  {
    "key": "_4t107cgyy",
    "name": "Ilahia College of Engineering and Technology"
  },
  {
    "key": "_sggw4qswk",
    "name": "India Business School "
  },
  {
    "key": "_c7hnkbmru",
    "name": "Indian Agricultural Research Institute"
  },
  {
    "key": "_q5qvt3aqm",
    "name": "Indian Association for the Cultivation of Science"
  },
  {
    "key": "_1xmky9tex",
    "name": "Indian Business Academy"
  },
  {
    "key": "_udikpl1mu",
    "name": "Indian Institute of Foreign Trade"
  },
  {
    "key": "_oikrs8l8b",
    "name": "Indian Institute of Information Management"
  },
  {
    "key": "_522vf1vc4",
    "name": "Indian Institute of Information Technology"
  },
  {
    "key": "_cvwx30ycx",
    "name": "Indian Institute of Information Technology - IIIT Allahabad"
  },
  {
    "key": "_3fu6oyl38",
    "name": "Indian Institute of Information Technology - IIIT Bangalore"
  },
  {
    "key": "_h1krxg3qn",
    "name": "Indian Institute of Information Technology - IIIT Hyderabad"
  },
  {
    "key": "_6kd2k76ut",
    "name": "Indian Institute of Information Technology - IIIT Kolkata"
  },
  {
    "key": "_vaz68oxtp",
    "name": "Indian Institute of Information Technology - IIIT Pune"
  },
  {
    "key": "_5judvw6ts",
    "name": "Indian Institute of Information Technology Jabalpur"
  },
  {
    "key": "_4lzvt86cy",
    "name": "Indian Institute of Information Technology and Management - Kerala"
  },
  {
    "key": "_0jls9e21g",
    "name": "Indian Institute of Information Technology and Management"
  },
  {
    "key": "_hbtvxt7gw",
    "name": "Indian Institute of Management"
  },
  {
    "key": "_lt2fj7k51",
    "name": "Indian Institute of Rural Management"
  },
  {
    "key": "_fxtlaa0u6",
    "name": "Indian Institute of Science"
  },
  {
    "key": "_xd64zxf2y",
    "name": "Indian Institute of Science and Information Technology"
  },
  {
    "key": "_b9yj5l5ma",
    "name": "Indian Institute of Science - IISc Bangalore"
  },
  {
    "key": "_edbg5e5gv",
    "name": "Indian Institute of Science Education and Research Pune"
  },
  {
    "key": "_wai8mu7nv",
    "name": "Indian Institute of Space Science and Technology"
  },
  {
    "key": "_rjq6333lw",
    "name": "Indian Institute of Social Welfare and Business Management"
  },
  {
    "key": "_np37w9yyh",
    "name": "Indian Institute of Technology - IIT Bhubaneswar"
  },
  {
    "key": "_r42jvuit8",
    "name": "Indian Institute of Technology - IIT Bombay"
  },
  {
    "key": "_dvmpqefnp",
    "name": "Indian Institute of Technology - IIT Delhi"
  },
  {
    "key": "_6rr10f98s",
    "name": "Indian Institute of Technology - IIT Guwahati"
  },
  {
    "key": "_htykemafe",
    "name": "Indian Institute of Technology - IIT Kanpur"
  },
  {
    "key": "_gh1iih1ik",
    "name": "Indian Institute of Technology - IIT Kharagpur"
  },
  {
    "key": "_dy7xe3cdv",
    "name": "Indian Institute of Technology - IIT Madras"
  },
  {
    "key": "_63jprlykw",
    "name": "Indian Institute of Technology - IIT Powaii"
  },
  {
    "key": "_yprzs8lhb",
    "name": "Indian Institute of Technology - IIT Roorkee"
  },
  {
    "key": "_dibu112k6",
    "name": "Indian Institute of Technology - IIT Patna"
  },
  {
    "key": "_a1fpooroz",
    "name": "Indian Institute of Technology - IIT Ropar"
  },
  {
    "key": "_ipmu73uuy",
    "name": "Indian Institute of Technology - IIT Hyderabad"
  },
  {
    "key": "_pph7hlb6z",
    "name": "Indian Institute of Technology - IIT Gandhinagar"
  },
  {
    "key": "_s4unpl2x1",
    "name": "Indian Institute of Technology - IIT Rajasthan"
  },
  {
    "key": "_2qae5nld4",
    "name": "Indian Institute of Technology - IIT Mandi"
  },
  {
    "key": "_niekb6na1",
    "name": "Indian Institute of Technology - IIT Indore"
  },
  {
    "key": "_csu77hyk5",
    "name": "Indian Institute of Technology - IIT BHU"
  },
  {
    "key": "_osyd477v0",
    "name": "Indian School of Business"
  },
  {
    "key": "_urmwwhow8",
    "name": "Indian School of Mines - Dhanbad"
  },
  {
    "key": "_oo90c2fbq",
    "name": "Indian Statistical Institute"
  },
  {
    "key": "_2i9ftf6vj",
    "name": "Indira College of Engineering and Management"
  },
  {
    "key": "_c74knywuo",
    "name": "Indira Gandhi Institute of Development and Research"
  },
  {
    "key": "_ltdkdo4ir",
    "name": "Indira Gandhi Institute of Technology"
  },
  {
    "key": "_esph7am0c",
    "name": "Indira Gandhi Krishi Vishwavidyalaya"
  },
  {
    "key": "_7s4m0wut4",
    "name": "Indira Gandhi National Open University"
  },
  {
    "key": "_n15mssg6e",
    "name": "Indira Gandhi Rashtriya Mukta Vishwavidyalaya"
  },
  {
    "key": "_f4ihqakxf",
    "name": "Indira Institute of Management"
  },
  {
    "key": "_6kussr06a",
    "name": "Indraprastha Institute of Information Technology"
  },
  {
    "key": "_xyb482olb",
    "name": "Indira Kala Sangeet Vishwavidyalaya"
  },
  {
    "key": "_n2l26pgr7",
    "name": "Indo Global Engineering"
  },
  {
    "key": "_5x4htw0id",
    "name": "Indore Institute of Science and Technology"
  },
  {
    "key": "_qka99o4q8",
    "name": "Indore Professional Studies Academy"
  },
  {
    "key": "_dfa8sdj36",
    "name": "Indur Institute of Engineering and Technology"
  },
  {
    "key": "_jdamjeohq",
    "name": "Infant Jesus College of Engineering"
  },
  {
    "key": "_jwfbagom5",
    "name": "Institute of Informatics and Communication"
  },
  {
    "key": "_quxabrxz2",
    "name": "Institute for Development and Research in Banking Technology"
  },
  {
    "key": "_djdu36r0j",
    "name": "Institute for Electronic Governance"
  },
  {
    "key": "_mdbh7ihhh",
    "name": "Institute of Advanced Computer and Research"
  },
  {
    "key": "_v21s41ph2",
    "name": "Institute of Advanced Studies in Education"
  },
  {
    "key": "_d9ke3fub0",
    "name": "Institute of Aeronautical Engineering"
  },
  {
    "key": "_ai65jfdt6",
    "name": "Institute of Armament Technology"
  },
  {
    "key": "_kh22a5air",
    "name": "Institute of Engineering and Science IPS Academy"
  },
  {
    "key": "_z0og73kfj",
    "name": "Institute of Engineering and Technology"
  },
  {
    "key": "_g3a5z33b4",
    "name": "Institute of Foreign Trade and Management"
  },
  {
    "key": "_z43lgkq33",
    "name": "Institute of Industrial and Computer Management and Research A.T.S.S.  I.I.C.M.R."
  },
  {
    "key": "_4sa0r8wav",
    "name": "Institute of Information Technology and Management"
  },
  {
    "key": "_t7damr6es",
    "name": "Institute of Management Research and Development"
  },
  {
    "key": "_4iqx94x13",
    "name": "Institute of Management Research"
  },
  {
    "key": "_1idv2pl75",
    "name": "Institute of Management Studies Career Development and Research"
  },
  {
    "key": "_iqrrvbk1u",
    "name": "Institute of Management Studies Noida"
  },
  {
    "key": "_b2eib35sh",
    "name": "Institute of Management Studies- Ghaziabad"
  },
  {
    "key": "_02ion2vpf",
    "name": "Institute of Management Technology"
  },
  {
    "key": "_qcho87g59",
    "name": "Institute of Management and Research"
  },
  {
    "key": "_9r7wl3tzz",
    "name": "Institute of Mathematical Sciences - IMSc Chennai"
  },
  {
    "key": "_paqdpdgdj",
    "name": "Institute of Productivity and Management"
  },
  {
    "key": "_i3lccdz5w",
    "name": "Institute of Productivity and Management"
  },
  {
    "key": "_eo0ghd531",
    "name": "Institute of Road and Transport Technology"
  },
  {
    "key": "_cgzpubn3o",
    "name": "Institute of Rural Management Anand"
  },
  {
    "key": "_as274xl7m",
    "name": "Institute of Technology and Management"
  },
  {
    "key": "_qg8c03yn7",
    "name": "Institute of Technology and Science (ITS)"
  },
  {
    "key": "_io46zkj1r",
    "name": "Institute of Technology and Marine Engineering"
  },
  {
    "key": "_4g0lxjsu5",
    "name": "Integral University"
  },
  {
    "key": "_oejug28cq",
    "name": "International Institute for Population Sciences"
  },
  {
    "key": "_hzjwwogz9",
    "name": "International Institute for Special Education"
  },
  {
    "key": "_vv7tcw2ti",
    "name": "International Institute of Information Technology"
  },
  {
    "key": "_yddbkx1s1",
    "name": "International Institute of Management Science"
  },
  {
    "key": "_it2r0lv28",
    "name": "International Management Institute"
  },
  {
    "key": "_xdn801avd",
    "name": "International School Of Informatics and Management"
  },
  {
    "key": "_6cbmef8rg",
    "name": "International School of Business and Research"
  },
  {
    "key": "_xdnrc34ld",
    "name": "International School of Business and Media"
  },
  {
    "key": "_xrtbmmh64",
    "name": "International School of Informatics and Management"
  },
  {
    "key": "_ep3z3vspz",
    "name": "International School of Information Management"
  },
  {
    "key": "_htrp2lxwf",
    "name": "International School of Management Excellence"
  },
  {
    "key": "_gq27xcb72",
    "name": "Invertis Institute of Engineering and Technology"
  },
  {
    "key": "_15ntp4zvf",
    "name": "Ishwarchand Vidya Sagar Institute of Technology and Management"
  },
  {
    "key": "_ag2myhoku",
    "name": "Islamiah Institute of Technology"
  },
  {
    "key": "_1msisnr5i",
    "name": "Islamic University of Science and Technology"
  },
  {
    "key": "_18f0zecrb",
    "name": "J.B. Institute of Engineering and Technology"
  },
  {
    "key": "_8l2smwmb9",
    "name": "J.T. Mahajan College of Engineering"
  },
  {
    "key": "_l654rts41",
    "name": "Jay Sriram College of Technology"
  },
  {
    "key": "_55a8chqhq",
    "name": "JIS College of Engineering"
  },
  {
    "key": "_ouyxlt5yd",
    "name": "JM Institute of Technology"
  },
  {
    "key": "_v5ai2x537",
    "name": "JNTU College of Engineering"
  },
  {
    "key": "_m3rcklzk9",
    "name": "JSPMs Abacus Institute Of Computer Application"
  },
  {
    "key": "_0xkc4973s",
    "name": "JSS Academy of Technical Education"
  },
  {
    "key": "_bmv7ts1pv",
    "name": "JSS College for Women"
  },
  {
    "key": "_o5sytg422",
    "name": "Jabalpur Engineering College"
  },
  {
    "key": "_aamc313mq",
    "name": "Jadavpur University - Jadavpur University"
  },
  {
    "key": "_mpyqw8s52",
    "name": "Jagan Institute of Management Studies"
  },
  {
    "key": "_dpkbd4mm8",
    "name": "Jagan Nath University"
  },
  {
    "key": "_kye8l6n8o",
    "name": "Jagannath Institute for Technology and Management"
  },
  {
    "key": "_wu2h33llf",
    "name": "Jagarlamudi Kuppuswamy Chowdary College"
  },
  {
    "key": "_af2gov5av",
    "name": "Jai Narain Vyas University"
  },
  {
    "key": "_6m7fpb24d",
    "name": "Jai Prakash Vishwavidyalaya"
  },
  {
    "key": "_dvam8mk5f",
    "name": "Jain University"
  },
  {
    "key": "_u7pb8xem2",
    "name": "Jaipur Engineering College and Research Centre"
  },
  {
    "key": "_dhchmntmr",
    "name": "Jaipur Engineering College"
  },
  {
    "key": "_nha1lt4c4",
    "name": "Jaipuria Institute of Management"
  },
  {
    "key": "_ggf39k146",
    "name": "Jamia Hamdard - Delhi"
  },
  {
    "key": "_mjiypzy7n",
    "name": "Jamia Millia Islamia"
  },
  {
    "key": "_g69o1qq7x",
    "name": "Jansons School of Business"
  },
  {
    "key": "_0howtnc06",
    "name": "Jansons Institute of Technology"
  },
  {
    "key": "_nuz5ylg7x",
    "name": "Jawaharlal Institute of Technology"
  },
  {
    "key": "_06xxvrr8i",
    "name": "Jawaharlal Nehru Centre for Advanced Scientific Research"
  },
  {
    "key": "_n1vu2o3ug",
    "name": "Jawaharlal Nehru Engineering College - JNEC"
  },
  {
    "key": "_sf03u157k",
    "name": "Jawaharlal Nehru Krishi Vishwavidyalaya"
  },
  {
    "key": "_r54w1etm5",
    "name": "Jawaharlal Nehru Technological University"
  },
  {
    "key": "_jj4bvemca",
    "name": "Jawaharlal Nehru Technological University"
  },
  {
    "key": "_p6cqmyf9d",
    "name": "Jawaharlal Nehru University - JNU Delhi"
  },
  {
    "key": "_h9f5susbe",
    "name": "Jawaharlal Nehru Vishvavidyalaya"
  },
  {
    "key": "_bt8vik1zk",
    "name": "Jaya College of Arts and Science"
  },
  {
    "key": "_c8oyo7w6p",
    "name": "Jaya Engineering College"
  },
  {
    "key": "_x7ogjghl6",
    "name": "Jayam College of Engineering and Technology"
  },
  {
    "key": "_4ue5mvdpj",
    "name": "Jayawant Institute of Computer Applications"
  },
  {
    "key": "_ayr6xembs",
    "name": "Jayawant Shikshan Prasarak Mandal"
  },
  {
    "key": "_frumv9psr",
    "name": "Jayawantrao Sawant College of Engineering"
  },
  {
    "key": "_h3x55u7se",
    "name": "Jaypee Institute of Information Technology"
  },
  {
    "key": "_fqwrqymmt",
    "name": "Jaypee University of Information Technology"
  },
  {
    "key": "_w4tqcs0pb",
    "name": "Jaypee University of Engineering &amp; Technology"
  },
  {
    "key": "_97ruirotw",
    "name": "Jehangirabad Institute of Technology"
  },
  {
    "key": "_t7gw1n98m",
    "name": "Jeppiaar Engineering College"
  },
  {
    "key": "_igsxdezk2",
    "name": "Jerusalem College of Engineering"
  },
  {
    "key": "_hskadamj9",
    "name": "Jind Institute of Engineering and Technology"
  },
  {
    "key": "_c08vz4bra",
    "name": "Jiwaji University"
  },
  {
    "key": "_g6asu1fid",
    "name": "Jnana Vikas Institute of Technology"
  },
  {
    "key": "_k3prenw1d",
    "name": "Jodhpur Engineering College and Research Centre"
  },
  {
    "key": "_qjbyhjc5b",
    "name": "Jodhpur Institute of Engineering and Technology"
  },
  {
    "key": "_m61fgdapa",
    "name": "Jorhat Engineering College"
  },
  {
    "key": "_pe50c8lcl",
    "name": "Jyothi Engineering College"
  },
  {
    "key": "_3j36ltw99",
    "name": "Jyothi Nivas College"
  },
  {
    "key": "_qkinl0606",
    "name": "Jyothishmathi Institute of Technology and Science"
  },
  {
    "key": "_i4w6s6lnr",
    "name": "K L University"
  },
  {
    "key": "_3g3j0xuqz",
    "name": "K. J. Somaiya College of Engineering"
  },
  {
    "key": "_1q6mt8rp4",
    "name": "K. K. Wagh Institute of Engineering Education and Research"
  },
  {
    "key": "_m60jzly8b",
    "name": "K. R. School of Information Technology"
  },
  {
    "key": "_8rnvy9b8r",
    "name": "K. S. R. College of Technology - Tamilnadu"
  },
  {
    "key": "_98ehnq2sv",
    "name": "K.C. College of Engineering"
  },
  {
    "key": "_4zrvnj2aq",
    "name": "KCG College of Technology"
  },
  {
    "key": "_phw2h40p8",
    "name": "KGiSL Institute of Information Management"
  },
  {
    "key": "_z6eam3avu",
    "name": "KGiSL Institute of Technology"
  },
  {
    "key": "_iql3tija5",
    "name": "KIIT College of Engineering"
  },
  {
    "key": "_ka6uxdott",
    "name": "KIIT University"
  },
  {
    "key": "_fb5rxwpo6",
    "name": "KLE Society College of Engineering and Technology"
  },
  {
    "key": "_atubs6ede",
    "name": "KLN College of Engineering"
  },
  {
    "key": "_76f0y86vz",
    "name": "KLN College of Information Technology - KLNCIT"
  },
  {
    "key": "_3jayrjwyi",
    "name": "KS Institute of Technology - KSIT"
  },
  {
    "key": "_1l8op3o8f",
    "name": "KSR College of Technology"
  },
  {
    "key": "_245njkv95",
    "name": "KSRM College of Engineering"
  },
  {
    "key": "_pqplxur00",
    "name": "KVM College of Engineering and Information Technology"
  },
  {
    "key": "_ks52t9xbx",
    "name": "Kakatiya Institute of Technology and Science"
  },
  {
    "key": "_ai2hbj4rt",
    "name": "Kakatiya University"
  },
  {
    "key": "_93srh15wx",
    "name": "Kakinada Institute of Engineering and Technology"
  },
  {
    "key": "_kn86wz83t",
    "name": "Kalasalingam University"
  },
  {
    "key": "_9wo4o5p4k",
    "name": "Kalikata Viswavidyalaya"
  },
  {
    "key": "_mnpr1nres",
    "name": "Kalinga Institute of Industrial Technology - Bhubaneshwar"
  },
  {
    "key": "_l1as2084w",
    "name": "Kalyani Government Engineering College"
  },
  {
    "key": "_pbnmal547",
    "name": "Kamala Institute of Technology and Science"
  },
  {
    "key": "_vb8nx33co",
    "name": "Kamaraj College of Engineering and Technology"
  },
  {
    "key": "_ia72331vm",
    "name": "Kameshwar Singh Darbhanga Sanskrit University"
  },
  {
    "key": "_84ox462yg",
    "name": "Kamla Nehru Institute of Technology - KNIT"
  },
  {
    "key": "_faa8xnr8b",
    "name": "Kanchi Pallavan Enginnering College"
  },
  {
    "key": "_b1qsm6b1b",
    "name": "Kandula Sreenivasa Reddy Memorial College Of Engineering"
  },
  {
    "key": "_tk9tgqyzp",
    "name": "Kannada University"
  },
  {
    "key": "_9uvw48gtm",
    "name": "Kannur University"
  },
  {
    "key": "_za3yuc4xg",
    "name": "Kanpur Institute of Technology"
  },
  {
    "key": "_zuhx7itgq",
    "name": "Karnatak University"
  },
  {
    "key": "_m3csb9fh9",
    "name": "Karnataka State Open University"
  },
  {
    "key": "_8ek4q7umr",
    "name": "Karpaga Vinayaga College of Engineering and Technology"
  },
  {
    "key": "_i8ho8pysg",
    "name": "Karpagam Arts and Science College"
  },
  {
    "key": "_mpvfqaic7",
    "name": "Karpagam College of Engineering"
  },
  {
    "key": "_ip5avxx0c",
    "name": "Karpagam Institute of Technology"
  },
  {
    "key": "_lf2r9321j",
    "name": "Karpagam University"
  },
  {
    "key": "_cz33sy0sa",
    "name": "Karunya University"
  },
  {
    "key": "_e3ios3bo9",
    "name": "Kathir College of Engineering - KCE"
  },
  {
    "key": "_0kpipu5ar",
    "name": "Kautilya Institute of Technology and Engineering"
  },
  {
    "key": "_fm4ui08fr",
    "name": "Kavikulguru Institute of Technology and Science"
  },
  {
    "key": "_00vo63yeo",
    "name": "Kavikulguru Kalidas Sanskrit Vishwavidyalaya"
  },
  {
    "key": "_cprwzgke8",
    "name": "Kedar Nath Ginni Devi Modi Engineering College"
  },
  {
    "key": "_6vrg1lvhy",
    "name": "Kelkar Education Trust Vinayak Ganesh Vaze College"
  },
  {
    "key": "_74a32wn27",
    "name": "Kerala University"
  },
  {
    "key": "_mwmv48xbz",
    "name": "Kerala Agricultural University"
  },
  {
    "key": "_caan2ks99",
    "name": "Keshav Mahavidyalaya"
  },
  {
    "key": "_d0o1spn14",
    "name": "Keshav Memorial Institute of Technology"
  },
  {
    "key": "_gt21q4t5y",
    "name": "Khadir Mohideen College"
  },
  {
    "key": "_mkadgbtlf",
    "name": "Khalsa College for Women"
  },
  {
    "key": "_c238f8hoz",
    "name": "Kings College of Engineering"
  },
  {
    "key": "_l6qmsnqs8",
    "name": "Kings Engineering College"
  },
  {
    "key": "_dj5n2k000",
    "name": "K.I.T College Of Engineering"
  },
  {
    "key": "_e55teleye",
    "name": "Koneru Lakshmaiah College of Engineering"
  },
  {
    "key": "_an40v7rep",
    "name": "Kongu Arts and Science College"
  },
  {
    "key": "_pmsw08dxd",
    "name": "Kongu Engineering College"
  },
  {
    "key": "_bgpxmb8nr",
    "name": "Kongunadu Arts and Science College"
  },
  {
    "key": "_t1agd2rke",
    "name": "Kota Open University"
  },
  {
    "key": "_k6wijq1il",
    "name": "Koti Womens College"
  },
  {
    "key": "_y2e8spwj3",
    "name": "Krishna Engineering College"
  },
  {
    "key": "_1n349egxf",
    "name": "Krishna Institute of Engineering and Technology"
  },
  {
    "key": "_mylr53qx3",
    "name": "Krishnasamy College of Engineering and Technology"
  },
  {
    "key": "_c34xuluv8",
    "name": "Kristu Jyothi College of Management and Technology"
  },
  {
    "key": "_g2ua7ncba",
    "name": "Kumaraguru College of Technology - KCT"
  },
  {
    "key": "_x84skx3d0",
    "name": "Kumaun University"
  },
  {
    "key": "_2yuqhzrsh",
    "name": "Kurukshetra University - Haryana"
  },
  {
    "key": "_ey0pr4z8p",
    "name": "Kuvempu University"
  },
  {
    "key": "_hg5w09814",
    "name": "LBS Institute of Technology for Women"
  },
  {
    "key": "_5pb7cwg2n",
    "name": "LBS PG College"
  },
  {
    "key": "_pm31m46lh",
    "name": "LD College of Engineering"
  },
  {
    "key": "_cnt3f65aw",
    "name": "LDRP Institute of Technology and Research"
  },
  {
    "key": "_bczjrxxnj",
    "name": "LJ Institute of Computer Applications - LJMCA"
  },
  {
    "key": "_cgwmudk27",
    "name": "Lady Shriram CC"
  },
  {
    "key": "_xbve9l7mn",
    "name": "Lakshmi Narain College of Technology - LNCT"
  },
  {
    "key": "_lrrwawwnu",
    "name": "Lakshmibai National Institute of Physical Education"
  },
  {
    "key": "_gq6ff7ez0",
    "name": "Lal Bahadur Shastri Institute of Management"
  },
  {
    "key": "_ko5vnw8uu",
    "name": "Lala Lajpat Rai Institute of Engineering and Technology"
  },
  {
    "key": "_73asqvpbh",
    "name": "Lalit Narayan Mithila University"
  },
  {
    "key": "_yeb4qjnp4",
    "name": "Larsen and Toubro Institute of Technology"
  },
  {
    "key": "_wlv3huruo",
    "name": "Late Bhausaheb Hiray S.S.Trusts College of Architecture"
  },
  {
    "key": "_2h4j2vorb",
    "name": "Laxmi Devi Institute of Engineering and Technology"
  },
  {
    "key": "_cm47bzddx",
    "name": "Laxmi Niwas Mittal Institute of Information Technology"
  },
  {
    "key": "_w2untb1lf",
    "name": "Les Filles MVN Institute of Engineering and Technology"
  },
  {
    "key": "_1k75hmyv8",
    "name": "Lokamanya Tilak PG College"
  },
  {
    "key": "_w7gbevytv",
    "name": "Lokmanya Tilak College of Engineering"
  },
  {
    "key": "_tvqk2y90u",
    "name": "Lovely Professional University"
  },
  {
    "key": "_cdqh85pv1",
    "name": "Loyola College - Chennai"
  },
  {
    "key": "_5gb9otu14",
    "name": "Loyola Institute of Business Administration"
  },
  {
    "key": "_ro5g8xmi2",
    "name": "Ludhiana College of Engineering and Technology - LCET"
  },
  {
    "key": "_yi17qfjuq",
    "name": "M. S. Ramaiah Institute of Technology - Bangalore"
  },
  {
    "key": "_syj1ahcmc",
    "name": "M.S. Engineering College"
  },
  {
    "key": "_qinac5n4k",
    "name": "MCKV Institute of Engineering"
  },
  {
    "key": "_t9d2uuwx5",
    "name": "MDS University"
  },
  {
    "key": "_m8k5l9hgj",
    "name": "MEASI Institute of Information Technology"
  },
  {
    "key": "_xp9bzcbo8",
    "name": "MES College of Engineering"
  },
  {
    "key": "_o7vhf0gl6",
    "name": "MES College"
  },
  {
    "key": "_2o1s2821o",
    "name": "MET Institute of Computer Science"
  },
  {
    "key": "_d9whjelx9",
    "name": "MET Institute of Engineering"
  },
  {
    "key": "_ygyjw33l1",
    "name": "MET Institute of Management"
  },
  {
    "key": "_z5ljmj3yo",
    "name": "MGM College of Engineering and Technology"
  },
  {
    "key": "_ai0rmawus",
    "name": "MH Saboo Siddik College of Engineering"
  },
  {
    "key": "_vmwp8n4n0",
    "name": "MIT College of Engineering"
  },
  {
    "key": "_6pp1743xp",
    "name": "MIT School of Telecom and Management Studies"
  },
  {
    "key": "_pqbt4v36v",
    "name": "MITS School of Biotechnology - MSB"
  },
  {
    "key": "_t2wfjwwg3",
    "name": "MK Institute of Computer Studies"
  },
  {
    "key": "_h3hyajz0n",
    "name": "MLR Institute of Technology"
  },
  {
    "key": "_y5f4byuzj",
    "name": "MLV Textile and Engineering College"
  },
  {
    "key": "_pisg9qkk8",
    "name": "MRD Arts and E E Laher Kosadia Commerce College"
  },
  {
    "key": "_heh1kwy2b",
    "name": "MVSR Engineering College"
  },
  {
    "key": "_5s8nkleob",
    "name": "Maamallan Institute of Technology"
  },
  {
    "key": "_tsgf52711",
    "name": "Madanapalle Institute of Technology and Science"
  },
  {
    "key": "_9i9wnp2gg",
    "name": "Madha Engineering College"
  },
  {
    "key": "_o1bbat59e",
    "name": "Madhav Institute of Technology and Science"
  },
  {
    "key": "_yvasxjeto",
    "name": "Madhira Institute of Technology and Sciences"
  },
  {
    "key": "_ldhrjrhik",
    "name": "Madhya Pradesh Bhoj (Open) University"
  },
  {
    "key": "_hznvqdsca",
    "name": "Madina Engineering College"
  },
  {
    "key": "_315dgxnvc",
    "name": "Madras Institute of Technology"
  },
  {
    "key": "_wsdvxucxf",
    "name": "Madurai Kamaraj University"
  },
  {
    "key": "_hzleictkn",
    "name": "Magadh University"
  },
  {
    "key": "_jx8ufu1rs",
    "name": "Magnus School of Business"
  },
  {
    "key": "_64w2upibu",
    "name": "Maha College of Engineering"
  },
  {
    "key": "_femcgp5rg",
    "name": "Mahakal Institute of Technology and Science"
  },
  {
    "key": "_juqpx17bc",
    "name": "Maharaj Vijayaram Gajapath Raj College of Engineering"
  },
  {
    "key": "_fh6g5m7ng",
    "name": "Maharaja Agrasen Institute of Technology"
  },
  {
    "key": "_i2v6v8nxm",
    "name": "Maharaja Engineering College"
  },
  {
    "key": "_fy0nl0gll",
    "name": "Maharaja Institute of Technology"
  },
  {
    "key": "_pextuiba4",
    "name": "Maharaja Ranjit Singh College of Professional Sciences - MRS"
  },
  {
    "key": "_ot80qoe14",
    "name": "Maharaja Surajmal Institute of Technology"
  },
  {
    "key": "_fkfmhh7db",
    "name": "Maharana Pratap Engineering College"
  },
  {
    "key": "_zq0efa9ih",
    "name": "Maharana Pratap University of Agriculture and Technology"
  },
  {
    "key": "_88g298tec",
    "name": "Maharashtra Academy of Engineering"
  },
  {
    "key": "_a00ky5g6s",
    "name": "Maharashtra Animal and Fishery Sciences University"
  },
  {
    "key": "_lfybkd9th",
    "name": "Maharashtra Institute of Technology (MIT)"
  },
  {
    "key": "_ayuzakb2m",
    "name": "Maharashtra University of Health Sciences"
  },
  {
    "key": "_j308hbn2x",
    "name": "Maharishi Arvind Institute of Engineering and Technology"
  },
  {
    "key": "_y7ti8ai8w",
    "name": "Maharishi Arvind Institute of Science and Management - MAISM"
  },
  {
    "key": "_ph7fuwk03",
    "name": "Maharishi Mahesh Yogi Vedic Vishwavidyalaya"
  },
  {
    "key": "_v4jhujt7q",
    "name": "Maharshi Dayanand Saraswati University"
  },
  {
    "key": "_cdepps763",
    "name": "Maharshi Dayanand University"
  },
  {
    "key": "_gag8ts9e9",
    "name": "Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya"
  },
  {
    "key": "_5yn7rhqak",
    "name": "Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya"
  },
  {
    "key": "_70pqok7tb",
    "name": "Mahatma Gandhi Institute of Technology - MGIT"
  },
  {
    "key": "_7aajtz6de",
    "name": "Mahatma Gandhi Kashi Vidyapeeth"
  },
  {
    "key": "_i4fxzvffv",
    "name": "Mahatma Gandhi Memorial Medical College"
  },
  {
    "key": "_rokdlozgi",
    "name": "Mahatma Gandhi University"
  },
  {
    "key": "_56qdfentk",
    "name": "Mahatma Jyotiba Phule (MJP) Rohilkhand University"
  },
  {
    "key": "_tffrg5yoq",
    "name": "Mahatma Phule Krishi Vidyapeeth"
  },
  {
    "key": "_5nem3i4e4",
    "name": "Mahaveer Institute of Science and Technology"
  },
  {
    "key": "_m4ungi9lh",
    "name": "Mahendra Engineering College"
  },
  {
    "key": "_x5nxor8yy",
    "name": "Maheshwara Engineering College"
  },
  {
    "key": "_m5jsdulef",
    "name": "Mailam Engineering College"
  },
  {
    "key": "_ohuhe0u5i",
    "name": "Makhanlal Chaturvedi Rashtriya Patrakarita Vishwavidhyalaya"
  },
  {
    "key": "_ce9clekhn",
    "name": "Malankara Catholic College"
  },
  {
    "key": "_dwt2k718q",
    "name": "Malaviya National Institute of Technology"
  },
  {
    "key": "_izc0zunwp",
    "name": "Malla Reddy College of Engineering and Technology"
  },
  {
    "key": "_pz1eug4fy",
    "name": "Malla Reddy Engineering College"
  },
  {
    "key": "_6inj7ngqr",
    "name": "Mallabhum Institute of Technology"
  },
  {
    "key": "_pxurh7mik",
    "name": "Malnad College of Engineering"
  },
  {
    "key": "_2p5piuenw",
    "name": "Malout Institute of Management and Information Technology"
  },
  {
    "key": "_ipjvzj1q8",
    "name": "Management Development Institute"
  },
  {
    "key": "_uzrw0mvwn",
    "name": "Management Education and Research Institute"
  },
  {
    "key": "_8h16jy8fb",
    "name": "Manav Rachna College of Engineering"
  },
  {
    "key": "_98sjs1ygr",
    "name": "Mandsaur Institute of Technology"
  },
  {
    "key": "_qvkrhipug",
    "name": "Mangalmay Institute of Management and Technology"
  },
  {
    "key": "_0oksirjdb",
    "name": "Mangalore University"
  },
  {
    "key": "_uarc2tz2f",
    "name": "Mangalore Institiute of Technology and Engineering"
  },
  {
    "key": "_b1op150pc",
    "name": "Manipal Academy of Higher Education"
  },
  {
    "key": "_pai4xx2wm",
    "name": "Manipur University"
  },
  {
    "key": "_0pboet5td",
    "name": "Manjara Charitable Trust Rajiv Gandhi Institute of Technology"
  },
  {
    "key": "_xr7r64kix",
    "name": "Manonmaniam Sundaranar University"
  },
  {
    "key": "_xsh2rbxfn",
    "name": "Mar Athanasius College of Engineering"
  },
  {
    "key": "_160m0uqrn",
    "name": "Mar Thoma Institute of Information Technology - MIIT"
  },
  {
    "key": "_9g04c72d0",
    "name": "Marathwada Institute of Technology Bulandshahr"
  },
  {
    "key": "_99atsxf6r",
    "name": "Marathwada Krishi Vidyapeeth"
  },
  {
    "key": "_dx8m5hdgc",
    "name": "Marathwada Mitra Mandal College of Engineering"
  },
  {
    "key": "_l1i60c4xp",
    "name": "Marian Engineering College"
  },
  {
    "key": "_3l9wyabnc",
    "name": "Marine Engineering College - MERI"
  },
  {
    "key": "_m5wwqwwnh",
    "name": "Marudhar Engineering College"
  },
  {
    "key": "_8mwmlsraz",
    "name": "Matrusri Institute of Post Graduate Studies"
  },
  {
    "key": "_qfp3cdevg",
    "name": "Maulana Azad College"
  },
  {
    "key": "_0hjwry57t",
    "name": "Maulana Azad College"
  },
  {
    "key": "_sckbmz1o9",
    "name": "Maulana Azad National Institute of Technology"
  },
  {
    "key": "_7id678oey",
    "name": "Maulana Azad National Urdu University"
  },
  {
    "key": "_b38bwnkyu",
    "name": "Medicaps Institute of Technology and Management"
  },
  {
    "key": "_hwl5eyr4x",
    "name": "Meenakshi College for Women"
  },
  {
    "key": "_pg5ta7g87",
    "name": "Meenakshi Sundararajan Engineering College"
  },
  {
    "key": "_w01hlphiu",
    "name": "Meerut Institute of Engineering and Technology"
  },
  {
    "key": "_zu47bzh0z",
    "name": "Meghnad Saha Institute of Technology"
  },
  {
    "key": "_9qi60f66f",
    "name": "Mepco Schlenk Engineering College"
  },
  {
    "key": "_lfu21gwmd",
    "name": "Military College of Telecommunication Engineering"
  },
  {
    "key": "_xgdv4e2ch",
    "name": "Misrimal Navajee Munoth Jain Engineering College"
  },
  {
    "key": "_4qepr98e2",
    "name": "Mizoram University"
  },
  {
    "key": "_6nzcd5uq2",
    "name": "Model Institute of Engineering and Technology"
  },
  {
    "key": "_0nr2brmp1",
    "name": "Model Engineering College"
  },
  {
    "key": "_ywovwnc4u",
    "name": "Modi Institute of Technology"
  },
  {
    "key": "_gmtgf1qzx",
    "name": "Mody Institute of Technology and Science"
  },
  {
    "key": "_w7622lubg",
    "name": "Mohamed Sathak A.J. College of Engineering"
  },
  {
    "key": "_gjxmh2i0a",
    "name": "Mohan Lal Sukhadia University"
  },
  {
    "key": "_gx90jgsmr",
    "name": "Mohandas College of Engineering and Technology"
  },
  {
    "key": "_gytk59fvu",
    "name": "Mohanlal Sukhadia University - MLSU"
  },
  {
    "key": "_oy8lx4t1r",
    "name": "Mona College of Engineering and Technology"
  },
  {
    "key": "_a87ebfjtv",
    "name": "Moolji Jaitha College"
  },
  {
    "key": "_pd49zq0c2",
    "name": "Mother Teresa Institute of Management"
  },
  {
    "key": "_ya5q7tlly",
    "name": "Motilal Nehru National Institute of Technology"
  },
  {
    "key": "_4v39ewaxc",
    "name": "Mount Carmel College"
  },
  {
    "key": "_zvw6u1phv",
    "name": "Mudra Institute of Communications"
  },
  {
    "key": "_bp6vs0yhk",
    "name": "Muffakham Jah College of Engineering and Technology"
  },
  {
    "key": "_8e96xm57x",
    "name": "Mugniram Bangur Memorial Engineering College"
  },
  {
    "key": "_la908zfdo",
    "name": "Mukesh Patel School of Technology Management and Engineering"
  },
  {
    "key": "_u6yaq3x43",
    "name": "Mumbai Educational Trust (MET)"
  },
  {
    "key": "_tp9kagqv7",
    "name": "Munnar Engineering College"
  },
  {
    "key": "_38mghiyo0",
    "name": "Murshidabad College of Engineering and Technology"
  },
  {
    "key": "_5vur9c6q5",
    "name": "Mysore Medical College &amp; Research Institute"
  },
  {
    "key": "_hxlbj4vju",
    "name": "NBKR Institute of Science and Technology"
  },
  {
    "key": "_rmqjr07k6",
    "name": "NERIST"
  },
  {
    "key": "_xygmyrrnr",
    "name": "NLCPAS Navsari"
  },
  {
    "key": "_1daaouj1r",
    "name": "NMAM Institute of Technology"
  },
  {
    "key": "_a4l6gtheu",
    "name": "NMKRV College"
  },
  {
    "key": "_b334rogeh",
    "name": "NRI Institute of Information"
  },
  {
    "key": "_dv1zrf7u3",
    "name": "NRI Institute of Technology"
  },
  {
    "key": "_wjbdpdc0y",
    "name": "NTR University of Health Sciences Andhra Pradesh"
  },
  {
    "key": "_4uzbwm87n",
    "name": "Nadar Mahajana Sangam S.Vellaichamy Nadar College"
  },
  {
    "key": "_zf7e1vu8a",
    "name": "Nagaland University"
  },
  {
    "key": "_rj6ighsel",
    "name": "Nagarjuna College of Engineering and Technology"
  },
  {
    "key": "_1ivwo2nq1",
    "name": "Nagarjuna University"
  },
  {
    "key": "_1szqr8cd6",
    "name": "Nagpur University"
  },
  {
    "key": "_p7oqxmnqu",
    "name": "Nalanda Institute of Engineering and Technology"
  },
  {
    "key": "_nwzb4xh65",
    "name": "Nalanda Khula Vishwavidyalaya"
  },
  {
    "key": "_jt2jfk7w0",
    "name": "Nalla Malla Reddy Engineering College"
  },
  {
    "key": "_jar9omq28",
    "name": "Nallamuthu Gounder Mahalingam College"
  },
  {
    "key": "_swgjmj4yv",
    "name": "Nandha Engineering College - Erode"
  },
  {
    "key": "_o55audubg",
    "name": "Narasu Sarathy Institute of Technology"
  },
  {
    "key": "_yqj9nmjen",
    "name": "Narayana Engineering College"
  },
  {
    "key": "_0xuoybw2a",
    "name": "Narendra Deva University of Agriculture and Technology"
  },
  {
    "key": "_j81w35c48",
    "name": "Nargund College of Pharmacy"
  },
  {
    "key": "_zl833bkjk",
    "name": "Narmada College of Computer Application"
  },
  {
    "key": "_dqp7j6vsh",
    "name": "Narsee Monjee Institute of Management and Higher Studies"
  },
  {
    "key": "_t2veb21kd",
    "name": "Narula Institute of Technology"
  },
  {
    "key": "_f6rv6riok",
    "name": "National Academy of Legal Studies and Research University"
  },
  {
    "key": "_7ultt605x",
    "name": "National Dairy Research Institute"
  },
  {
    "key": "_xoa15vmlx",
    "name": "National Engineering College"
  },
  {
    "key": "_1707tqwjm",
    "name": "National Institute of Construction Management and Research"
  },
  {
    "key": "_ulyz15e0s",
    "name": "National Institute of Cooperative Management"
  },
  {
    "key": "_bkvd1zk4u",
    "name": "National Institute of Design"
  },
  {
    "key": "_0pkwokz14",
    "name": "National Institute of Engineering"
  },
  {
    "key": "_fg9o4aa8w",
    "name": "National Institute of Engineering (NIE) Mysore"
  },
  {
    "key": "_7c853kuwn",
    "name": "National Institute of Fashion Technology"
  },
  {
    "key": "_dl7vy7mie",
    "name": "National Institute of Industrial Engineering"
  },
  {
    "key": "_rdbnlclt5",
    "name": "National Institute of Information Technology"
  },
  {
    "key": "_qldau6n65",
    "name": "National Institute of Mental Health and Neuro Sciences"
  },
  {
    "key": "_4msqos4v1",
    "name": "National Institute of Pharmaceutical Education and Research"
  },
  {
    "key": "_291g63yg8",
    "name": "National Institute of Science and Technology"
  },
  {
    "key": "_y51sw0aig",
    "name": "National Institute of Technology Calicut (NITC)"
  },
  {
    "key": "_0v3amjjaq",
    "name": "National Institute of Technology Durgapur"
  },
  {
    "key": "_ustqu8yzf",
    "name": "National Institute of Technology Hamirpur"
  },
  {
    "key": "_3j6hgf4zd",
    "name": "National Institute of Technology Karnataka"
  },
  {
    "key": "_re2rz70vc",
    "name": "National Institute of Technology Kurukshetra"
  },
  {
    "key": "_rttlm5ury",
    "name": "National Institute of Technology Meghalaya"
  },
  {
    "key": "_z7izz90ti",
    "name": "National Institute of Technology Silchar"
  },
  {
    "key": "_2x2ftbdds",
    "name": "National Institute of Technology Warangal"
  },
  {
    "key": "_98zzox54k",
    "name": "National Institute of Technology Trichy"
  },
  {
    "key": "_jwqt1zj04",
    "name": "National Institute of Technology "
  },
  {
    "key": "_i710c02a3",
    "name": "National Insurance Academy (NIA)"
  },
  {
    "key": "_rvwzm0fge",
    "name": "National Law Institute University"
  },
  {
    "key": "_hi2l8nlcj",
    "name": "National Law School of India University"
  },
  {
    "key": "_ela3zot62",
    "name": "National Law University"
  },
  {
    "key": "_miwpvi2zr",
    "name": "Nehru College of Management"
  },
  {
    "key": "_fcn2cdugq",
    "name": "Nelson Marlborough Institute of Technology"
  },
  {
    "key": "_e0txnvdbq",
    "name": "Netaji Subhas Institute of Technology - Delhi"
  },
  {
    "key": "_8roka2s1o",
    "name": "Netaji Subhas Open University"
  },
  {
    "key": "_sj8ngpszb",
    "name": "Netaji Subhash Engineering College - NSEC"
  },
  {
    "key": "_8r0ef2y98",
    "name": "Neville Wadia Institute of Management Studies and Research"
  },
  {
    "key": "_3o8fvl6fw",
    "name": "New Horizon College of Engineering"
  },
  {
    "key": "_gj6uvce2u",
    "name": "Nirma Institute of Technology"
  },
  {
    "key": "_spe3v6hq5",
    "name": "Nirma University of Science and Technology"
  },
  {
    "key": "_3l9na2nm2",
    "name": "Nishitha College of Engineering and Technology"
  },
  {
    "key": "_83l0su6eh",
    "name": "Nishitha PG College"
  },
  {
    "key": "_lysn2pnba",
    "name": "Nitte Meenakshi Institute of Technology"
  },
  {
    "key": "_6ptcz5y89",
    "name": "Nizams Institute of Medical Sciences"
  },
  {
    "key": "_gvjqfgyc0",
    "name": "Noble Institute of Science and Technology"
  },
  {
    "key": "_gdh02quig",
    "name": "Noida Institute Of Enginnering And Technology"
  },
  {
    "key": "_yz6dyst01",
    "name": "Noorul Islam College of Engineering"
  },
  {
    "key": "_8poyvfrq9",
    "name": "Nootan Sarva Vidyalaya Sanchalit MCA College"
  },
  {
    "key": "_r846gtmvl",
    "name": "North Gujarat University"
  },
  {
    "key": "_20rud40fa",
    "name": "North Maharashtra University"
  },
  {
    "key": "_y1pqwspjp",
    "name": "North Orissa University"
  },
  {
    "key": "_jfeb7ze19",
    "name": "Northwood High School"
  },
  {
    "key": "_qwf1x4gym",
    "name": "North-Eastern Hill University"
  },
  {
    "key": "_gmeqyqpux",
    "name": "Northern India Engineering College"
  },
  {
    "key": "_atnh9pyjt",
    "name": "Nova College of Engineering and Technology"
  },
  {
    "key": "_2nqak9w0r",
    "name": "N.S.S College of Engineering"
  },
  {
    "key": "_cjice1e32",
    "name": "O. U. College for Women"
  },
  {
    "key": "_uxm5iklhv",
    "name": "Oriental Institute of Science and Technology"
  },
  {
    "key": "_pq5k86a5z",
    "name": "Orissa University of Agriculture and Technology"
  },
  {
    "key": "_ww2fhlnzm",
    "name": "Osmania University"
  },
  {
    "key": "_wcy5dseap",
    "name": "Oxford College of Engineering"
  },
  {
    "key": "_s17ljrtej",
    "name": "Oxford Engineering College"
  },
  {
    "key": "_8m4ojpy13",
    "name": "P. A. College of Engineering"
  },
  {
    "key": "_x41yvgfvh",
    "name": "Palakkad Institute of Science and Technology"
  },
  {
    "key": "_8x0etaqin",
    "name": "P. E. S. College of Engineering"
  },
  {
    "key": "_wfdj84yhl",
    "name": "P. S. R. Engineering College"
  },
  {
    "key": "_xn0vmqibd",
    "name": "P. V. P. Siddhartha Engineering College"
  },
  {
    "key": "_4mdqfqc63",
    "name": "P.B.R. Visvodaya Institute of Technology and Science"
  },
  {
    "key": "_nfckfgxrf",
    "name": "P.C. Jabin Science College"
  },
  {
    "key": "_bl4ba50m5",
    "name": "P.E. Society Modern College of Engineering"
  },
  {
    "key": "_ydg2lzzvg",
    "name": "P.E.S. College Of Engineering"
  },
  {
    "key": "_drfojqr48",
    "name": "P.G. College"
  },
  {
    "key": "_ygwcj5q3y",
    "name": "PDM College of Engineering"
  },
  {
    "key": "_8j7lyoa8y",
    "name": "PRRM Engineering College"
  },
  {
    "key": "_1a2q1jjim",
    "name": "PSG College of Arts and Science"
  },
  {
    "key": "_kwdr3qvoy",
    "name": "PSG College of Technology"
  },
  {
    "key": "_7d6pyowow",
    "name": "PSNA College of Engineering and Technology"
  },
  {
    "key": "_8ee2xnt5x",
    "name": "Paavai Engineering College"
  },
  {
    "key": "_5iqexcpk4",
    "name": "Pachaiyappas College"
  },
  {
    "key": "_frshn3skf",
    "name": "Dr. D. Y. Patil Institute of Master of Computer Applications"
  },
  {
    "key": "_jvycathf8",
    "name": "Dr D. Y. Patil Vidyapeeth"
  },
  {
    "key": "_mv009zu4x",
    "name": "BVRIT"
  },
  {
    "key": "_cowod7jj3",
    "name": "Padre Conceicao College of Engineering"
  },
  {
    "key": "_rs3qbsvpb",
    "name": "Pailan College of Management and Technology"
  },
  {
    "key": "_j1vbrwq1x",
    "name": "Pandit Ravishankar Shukla University"
  },
  {
    "key": "_8egp7qewd",
    "name": "Pandian Saraswathi yadava Engineering College"
  },
  {
    "key": "_7pvwav5w3",
    "name": "Panimalar Engineering College"
  },
  {
    "key": "_kcptk1t90",
    "name": "Panipat Institute of Textile and Engineering"
  },
  {
    "key": "_sgvkz5vu8",
    "name": "Panjab University"
  },
  {
    "key": "_23k5ihpgy",
    "name": "Park College of Engineering and Technology"
  },
  {
    "key": "_w1wvc6gp6",
    "name": "Parul Institute of Engineering and Technology"
  },
  {
    "key": "_hotd5xh8l",
    "name": "Patel College Of Science and Technology"
  },
  {
    "key": "_l59kdbyoq",
    "name": "Patna University"
  },
  {
    "key": "_0u73iy2ou",
    "name": "Peoples Education Society Institute of Technology - PESIT"
  },
  {
    "key": "_49dlph2wc",
    "name": "Peoples Educational Soceity School of Engineering"
  },
  {
    "key": "_pxxoad2a7",
    "name": "Periyar Maniammai College of Technology for Women"
  },
  {
    "key": "_j8oljupia",
    "name": "Periyar University"
  },
  {
    "key": "_2ctlt95bj",
    "name": "Pimpri Chichwad Polytechnic"
  },
  {
    "key": "_7kboeej1d",
    "name": "Pimpri Chinchwad College of Engineering"
  },
  {
    "key": "_bbtomc80r",
    "name": "Poddard International College"
  },
  {
    "key": "_dq0f44kje",
    "name": "Pondicherry Engineering College"
  },
  {
    "key": "_yp5ka3p1p",
    "name": "Pondicherry University"
  },
  {
    "key": "_ss5f1ijqk",
    "name": "Ponjesly College of Engineering"
  },
  {
    "key": "_vse9yrofb",
    "name": "Poona College"
  },
  {
    "key": "_n2q90bf9s",
    "name": "Poornima College of Engineering"
  },
  {
    "key": "_igyeqlnz7",
    "name": "Poornima Institute of Engineering and Technology"
  },
  {
    "key": "_cg1o0sadt",
    "name": "Postgraduate Institute of Medical Education and Research"
  },
  {
    "key": "_qu6o6gjgb",
    "name": "Potti Sreeramulu Telugu University"
  },
  {
    "key": "_2gq0vrn1l",
    "name": "Pragati Engineering College"
  },
  {
    "key": "_2fuyrxwbg",
    "name": "Prakasam Engineering College"
  },
  {
    "key": "_n2rvhto9f",
    "name": "Pranveer Singh Institute of Technology"
  },
  {
    "key": "_fdylb4s3b",
    "name": "Prestige Institute of Management Dewas"
  },
  {
    "key": "_pi160eadh",
    "name": "Priyadarshini College of Engineering"
  },
  {
    "key": "_7ue7664zz",
    "name": "Pune Institute of Computer Technology"
  },
  {
    "key": "_fkyg5g17t",
    "name": "Pune Vidhyarthi Grihas College of Engineering and Technology"
  },
  {
    "key": "_znj1p6isr",
    "name": "Punjab Agricultural University"
  },
  {
    "key": "_gynge2nuo",
    "name": "Punjab College of Engineering and Technology"
  },
  {
    "key": "_ojfpkt9c6",
    "name": "Punjab Engineering College"
  },
  {
    "key": "_6jmbemuku",
    "name": "Punjab Technical University"
  },
  {
    "key": "_1oewm989f",
    "name": "Punjab University - Chandigarh"
  },
  {
    "key": "_2w3rt8axk",
    "name": "Punjabi University Neighbourhood Campus"
  },
  {
    "key": "_6jfls1dw6",
    "name": "Punjabi University Patiala"
  },
  {
    "key": "_l0gnvoy2l",
    "name": "Pydah Engineering College"
  },
  {
    "key": "_p3vznaifl",
    "name": "QIS College of Engineering and Technology"
  },
  {
    "key": "_cx1uvjjhb",
    "name": "R. C. Patel Institute of Technology"
  },
  {
    "key": "_marox9p76",
    "name": "R. D. Gardi Medical College"
  },
  {
    "key": "_o6cqpgxnv",
    "name": "R. M. K. Engineering College"
  },
  {
    "key": "_244iiqbuw",
    "name": "R. N. S. Institute of Technology"
  },
  {
    "key": "_x9h1u5sf9",
    "name": "R. V. College of Engineering - Bangalore"
  },
  {
    "key": "_fl3d9yrtl",
    "name": "R. V. S. College of Arts and Science"
  },
  {
    "key": "_7yqbo3ddu",
    "name": "R. V. S. College of Engineering and Technology"
  },
  {
    "key": "_0sb2fyjmd",
    "name": "R.P.Sharma Institute of Technology"
  },
  {
    "key": "_ihw63rk11",
    "name": "RCC Institute of Information Technology"
  },
  {
    "key": "_uqixigamo",
    "name": "RL Jalappa Institute of Technology"
  },
  {
    "key": "_6e10j2gsv",
    "name": "RMD Engineering College"
  },
  {
    "key": "_4d5kp6sbv",
    "name": "RV College of Engineering"
  },
  {
    "key": "_fhgpqeq8r",
    "name": "RVR and JC College Of Engineering"
  },
  {
    "key": "_cxgy7y7mu",
    "name": "Rabindra Bharati University"
  },
  {
    "key": "_q0e8stx9m",
    "name": "Radha Govind Engineering College"
  },
  {
    "key": "_oirtmufp7",
    "name": "Raghu Engineering College"
  },
  {
    "key": "_mkem259ea",
    "name": "Raipur Institute Of Tecnology"
  },
  {
    "key": "_i5txfoib1",
    "name": "Raja College of Engineering"
  },
  {
    "key": "_bjbgkm8z5",
    "name": "Raja Mahendra College of Engineering"
  },
  {
    "key": "_32819s8me",
    "name": "Rajagiri School of Engineering and Technology"
  },
  {
    "key": "_xhlz09ver",
    "name": "Rajalakshmi Engineering College"
  },
  {
    "key": "_5wwfyu7b4",
    "name": "Rajarambapu Institute of Technology"
  },
  {
    "key": "_n8vcycubh",
    "name": "Rajarshi Shahu College Of Engineering - RSCOE"
  },
  {
    "key": "_il5949m2p",
    "name": "Rajasthan Agricultural University"
  },
  {
    "key": "_2b1aewofz",
    "name": "Rajasthan College of Engineering For Women"
  },
  {
    "key": "_bltzihlok",
    "name": "Rajasthan Institute Of Engineering and Technology"
  },
  {
    "key": "_ipj0gywjf",
    "name": "Rajasthan Sanskrit Vishwavidyalaya"
  },
  {
    "key": "_gd2v7adfg",
    "name": "Rajasthan Vidyapeeth"
  },
  {
    "key": "_iovvo1l46",
    "name": "Rajeev Gandhi Memorial College Of Engineering and Technology"
  },
  {
    "key": "_cwe7r3mwh",
    "name": "Rajeev Gandhi Institute of Technology"
  },
  {
    "key": "_5i9ilp63p",
    "name": "Rajeev Gandhi Technical University"
  },
  {
    "key": "_is4ei2b8n",
    "name": "Rajendra Agricultural University"
  },
  {
    "key": "_8e6k87i71",
    "name": "Rajiv Academy For Technology And Management"
  },
  {
    "key": "_daf5p3m3g",
    "name": "Rajiv Gandhi Institute of Technology"
  },
  {
    "key": "_2oiuzfaod",
    "name": "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
  },
  {
    "key": "_ygkhioz41",
    "name": "Rajiv Gandhi University of Health Sciences"
  },
  {
    "key": "_z4vqjdgi7",
    "name": "Rajiv Gandhi University of Knowledge Technologies"
  },
  {
    "key": "_g7wlesaw9",
    "name": "Rajlalakshmi Engineering College"
  },
  {
    "key": "_c87bfh39n",
    "name": "Ramnarain Ruia College for Arts and Science"
  },
  {
    "key": "_3vwb5268t",
    "name": "Ramrao Adik Institute of Technology - Navi Mumbai"
  },
  {
    "key": "_379p5wp8h",
    "name": "Ranchi University"
  },
  {
    "key": "_fy3xadok4",
    "name": "Ranganathan Engineering College"
  },
  {
    "key": "_kg3gkcqir",
    "name": "Rani Durgavati Vishwavidyalaya"
  },
  {
    "key": "_gewvgy3dw",
    "name": "Rashtriya Sanskrit Vidyapeetha"
  },
  {
    "key": "_tya3e3br4",
    "name": "Rashtriya Vidyalaya College of Engineering - RVCE"
  },
  {
    "key": "_mgzjdafhy",
    "name": "Rayat Institute of Engineering and Information Technology"
  },
  {
    "key": "_upkzkpzbv",
    "name": "Rayat and Bahra Institute of Engineering and Bio-Technology"
  },
  {
    "key": "_vxnltbsvf",
    "name": "Regency Institute of Technology"
  },
  {
    "key": "_1hhcezo3n",
    "name": "Regional Engineering College"
  },
  {
    "key": "_8u2i3kx3o",
    "name": "Reva Institute of Technology and Management"
  },
  {
    "key": "_j093xk7u3",
    "name": "Rishiraj Institute of Technology"
  },
  {
    "key": "_wgzhewasw",
    "name": "Rizvi College Of Arts"
  },
  {
    "key": "_pez9m9lco",
    "name": "Roland Institute of Technology"
  },
  {
    "key": "_nfhxr8kai",
    "name": "Royal School of Management and Technology"
  },
  {
    "key": "_pr9pquc9l",
    "name": "Rukmani Devi Institute of Advanced Studies - RDIAS"
  },
  {
    "key": "_3yxv5fs6u",
    "name": "Rungta College of Engineering and Technology"
  },
  {
    "key": "_8p3hzb8r0",
    "name": "Rural Engineering College"
  },
  {
    "key": "_vbklej3b6",
    "name": "Rustamji Institute of Technology - RJIT"
  },
  {
    "key": "_5md0y9cdd",
    "name": "S V Institute of Computer Studies"
  },
  {
    "key": "_69j8u5803",
    "name": "S. K. Patel Institute of Management and Computer Studies"
  },
  {
    "key": "_i9gdj1c2x",
    "name": "S.R.M.S. College of Engineering and Technology - Bareilly"
  },
  {
    "key": "_dp2laoqqf",
    "name": "S. Sukhjinder Singh Engineering and Technology College"
  },
  {
    "key": "_ur94jrtof",
    "name": "S.D. Sabha Institute Of Technology"
  },
  {
    "key": "_lz4bu0ob6",
    "name": "S.I.E.S. College of Management Studies (SIESCOMS)"
  },
  {
    "key": "_kyz6qjp7h",
    "name": "S.K.R. Engineering College"
  },
  {
    "key": "_wgrjsyvik",
    "name": "S.P. Chowgule College"
  },
  {
    "key": "_c6n0lmlza",
    "name": "S.R. Engineering College"
  },
  {
    "key": "_cmqkaaepn",
    "name": "S.V.H. College of Engineering"
  },
  {
    "key": "_gbc7mkemh",
    "name": "S.V.K.P And Dr K.S. Raju Arts And Science College"
  },
  {
    "key": "_tc1bmxaxw",
    "name": "S.V.P.M College Of Engineering Malegaon (Bk)"
  },
  {
    "key": "_amr3gthhj",
    "name": "SACS MAVMM Engineering College"
  },
  {
    "key": "_04yed5ofx",
    "name": "SASTRA University"
  },
  {
    "key": "_qgbnmr65w",
    "name": "SCSVMV"
  },
  {
    "key": "_eciyzr5va",
    "name": "SCT Institute of Technology"
  },
  {
    "key": "_qrig2l0zp",
    "name": "SD College"
  },
  {
    "key": "_zbra6x4ly",
    "name": "SDM College of Engineering and Technology"
  },
  {
    "key": "_9fck1gv72",
    "name": "SDP College for Women"
  },
  {
    "key": "_hfff81j8j",
    "name": "SGGS College of Engineering and Technology"
  },
  {
    "key": "_fuvl1sgyl",
    "name": "SHM Engineering College"
  },
  {
    "key": "_pca3nlvn1",
    "name": "Shobhit University Meerut"
  },
  {
    "key": "_7fz8hzq5k",
    "name": "SIBER College"
  },
  {
    "key": "_qbezifro6",
    "name": "SJM Institute of Technology"
  },
  {
    "key": "_ccusmk3dd",
    "name": "SLBS Engineering College"
  },
  {
    "key": "_1g1jgaodn",
    "name": "SLC Institute of Engineering and Technology"
  },
  {
    "key": "_nnf3jahi4",
    "name": "SN Kansagra School"
  },
  {
    "key": "_ekkibzoor",
    "name": "SNS College of Engineering"
  },
  {
    "key": "_z2inp9cq1",
    "name": "SP Jain Institute of Management and Research"
  },
  {
    "key": "_uo4x02319",
    "name": "SR UNIVERSITY"
  },
  {
    "key": "_dtgdsmk0l",
    "name": "SRK Institute of Technology"
  },
  {
    "key": "_niu6o7495",
    "name": "SRM Engineering College"
  },
  {
    "key": "_c9pdd771f",
    "name": "SRM University"
  },
  {
    "key": "_8951p2uav",
    "name": "SS Institute of Technology - Hyderabad"
  },
  {
    "key": "_gh69ofufd",
    "name": "SS Jain Subodh College"
  },
  {
    "key": "_pby07mqi7",
    "name": "SSJ Engineering College - Sri Sai Jyothi Engineering College"
  },
  {
    "key": "_iljhqpicq",
    "name": "SSM College of Engineering"
  },
  {
    "key": "_wmbk3uie7",
    "name": "SSN College of Engineering"
  },
  {
    "key": "_ck819ugue",
    "name": "ST. Peters Engineering College"
  },
  {
    "key": "_odw6novyy",
    "name": "St. Thomas College Of Engineering &amp; Technology"
  },
  {
    "key": "_fbalynia5",
    "name": "STJ Institute of Technology"
  },
  {
    "key": "_og7n467yr",
    "name": "SUS College of Engineering and Technology"
  },
  {
    "key": "_fxarqtsrj",
    "name": "SVKP and Dr. Kalidindi Suryanarayana Raju Arts and Science College"
  },
  {
    "key": "_my2ksimr2",
    "name": "Sagi Ramakrishnam Raju Engineering College - SRKR"
  },
  {
    "key": "_izcx5gbfq",
    "name": "Sahrdaya College of Engineering and Technology"
  },
  {
    "key": "_f4x4sbrhn",
    "name": "Sai-Sudhir Post Graduate College"
  },
  {
    "key": "_0krq54ssm",
    "name": "Sakthi Mariamman Engineering College - SMEC"
  },
  {
    "key": "_6kzw2qw6t",
    "name": "Sambalpur University"
  },
  {
    "key": "_9h60z5rg6",
    "name": "Sambhram Institute of Technology"
  },
  {
    "key": "_uxya8g2xd",
    "name": "Sampurnanand Sanskrit Vishwavidyalaya"
  },
  {
    "key": "_q2jl4jmab",
    "name": "Samrat Ashok Technological Institute Vidisha - SATI"
  },
  {
    "key": "_zmdsex96l",
    "name": "Sanjay Gandhi Memorial Government Polytechnic"
  },
  {
    "key": "_ym72xuhmy",
    "name": "Sanjay Gandhi Postgraduate lnstitute of Medical Sciences"
  },
  {
    "key": "_8niyt6i89",
    "name": "Sankalchand Patel College of Engineering"
  },
  {
    "key": "_lk9kydtwq",
    "name": "Sankara College"
  },
  {
    "key": "_bsjq60668",
    "name": "Sanketika Vidya Parishad Engineering College"
  },
  {
    "key": "_yrt6nljzs",
    "name": "Sant Gadge Baba Amravati University"
  },
  {
    "key": "_ahkfvyao6",
    "name": "Sant Longowal Institiute of Engineering and Technology"
  },
  {
    "key": "_gx08r8vxb",
    "name": "Sapthagiri College of Engineering"
  },
  {
    "key": "_elb1q0bz7",
    "name": "Saranathan College of Engineering"
  },
  {
    "key": "_i2rus16xv",
    "name": "Sardar Patel College of Engineering - Mumbai"
  },
  {
    "key": "_i7q1db1sz",
    "name": "Sardar Patel Institute of Technology - Mumbai"
  },
  {
    "key": "_8cdtq48nf",
    "name": "Sardar Patel University"
  },
  {
    "key": "_ra8fnjt44",
    "name": "Sardar Vallabhbai Polytechnic College"
  },
  {
    "key": "_6n5z5vmcx",
    "name": "Sardar Vallabhbhai National Institute of Technology"
  },
  {
    "key": "_tub7lgilq",
    "name": "Saroj Mohan Institute of Technology"
  },
  {
    "key": "_sgsuf3whm",
    "name": "Sarva Vidhyalaya Institute of Computer Studies"
  },
  {
    "key": "_gldmhimbo",
    "name": "Sarvajanik College of Engineering"
  },
  {
    "key": "_srt8yqbdk",
    "name": "Sasi Institute of Technology and Engineering"
  },
  {
    "key": "_wbmgkr5ul",
    "name": "Sathyabama Engineering College - Chennai"
  },
  {
    "key": "_1ilkfq46d",
    "name": "Sathyabama Institute of Science and Technology"
  },
  {
    "key": "_rugxrs4da",
    "name": "Sathyabama University"
  },
  {
    "key": "_65pwoa18i",
    "name": "Satpriya Institute of Engineering and Technology"
  },
  {
    "key": "_fzgrhvovk",
    "name": "Saurashtra University"
  },
  {
    "key": "_21d9wsj03",
    "name": "Saveetha Engineering College"
  },
  {
    "key": "_885fjodur",
    "name": "School of Planning and Architecture"
  },
  {
    "key": "_xnbslpvk9",
    "name": "Scient Institute of Technology"
  },
  {
    "key": "_b5yegxt6j",
    "name": "Seacom Engineering College"
  },
  {
    "key": "_kzb2huml8",
    "name": "Seth Rajiv Govind Sable Institute Of Technology"
  },
  {
    "key": "_xmscvuf4b",
    "name": "Sethu Institute of Technology"
  },
  {
    "key": "_il0m4bcrw",
    "name": "Shadan College of Engineering and Technology"
  },
  {
    "key": "_n8d63mlvz",
    "name": "Shadan Womens College of Engineering and Technology"
  },
  {
    "key": "_uoucryv1t",
    "name": "Shankara Institute of Technology"
  },
  {
    "key": "_ag8ia0ivj",
    "name": "Shanmuganathan Engineering College"
  },
  {
    "key": "_4f812hm64",
    "name": "Shanmugha Arts"
  },
  {
    "key": "_u0s6ieifv",
    "name": "Shanmugha College of Engineering - Tamilnadu"
  },
  {
    "key": "_7655q9y3m",
    "name": "Shantilal Shah Engineering College"
  },
  {
    "key": "_chveqo6s6",
    "name": "Sharda University"
  },
  {
    "key": "_dc58heqm1",
    "name": "Shekhawati Engineering College"
  },
  {
    "key": "_95j0c3im6",
    "name": "Shivaji University"
  },
  {
    "key": "_hfz6erdyw",
    "name": "Shree Rayeshwar Institute of Engineering and IT"
  },
  {
    "key": "_64gho111e",
    "name": "Shree Sant Muktabai Institute of Technology - SMIT"
  },
  {
    "key": "_j4khobsid",
    "name": "Shreemati Nathibai Damodar Thackersey Womens University"
  },
  {
    "key": "_moj4jroec",
    "name": "Shri Andal Alagar College of Engineering"
  },
  {
    "key": "_fee381h5v",
    "name": "Shri Balaji College of Engineering and Technology"
  },
  {
    "key": "_orh4lcgqu",
    "name": "Shri Govindram Seksaria Institute of Technology and Science"
  },
  {
    "key": "_ix23e5nqc",
    "name": "Shri Guru Gobind Singhji College of Engineering and Technology"
  },
  {
    "key": "_ehhzr69uj",
    "name": "Shri Guru Ram Rai Institute of Technology and Science"
  },
  {
    "key": "_wvwqyleao",
    "name": "Shri Hanuman Vyayam Prasarak Mandals College of Engg and Tech"
  },
  {
    "key": "_5ch9a8q68",
    "name": "Shri Jagannath Sanskrit Vishwavidyalaya"
  },
  {
    "key": "_51qfmpeqo",
    "name": "Shri Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeeth"
  },
  {
    "key": "_abn3hyipa",
    "name": "Shri Mata Vaishno Devi University"
  },
  {
    "key": "_5yso83bmj",
    "name": "Shri Ram Murti Smarak College of Engineering"
  },
  {
    "key": "_h582u2sle",
    "name": "Shri Ramdeobaba Kamla Nehru College"
  },
  {
    "key": "_pjfaxgowx",
    "name": "Shri Ramswaroop Memorial College of Engineering and Management"
  },
  {
    "key": "_44043qpf5",
    "name": "Shri Sant Gajanan Maharaja College of Engineering - SSGM"
  },
  {
    "key": "_pv3x1w9uo",
    "name": "Shri Vaishnav Institute of Technology and Science"
  },
  {
    "key": "_cvguupu0y",
    "name": "Shri Venkteshwar Institute Of Technology"
  },
  {
    "key": "_0mgr7wpk1",
    "name": "Shri Vishnu Engineering College for Women"
  },
  {
    "key": "_yrnrx3l48",
    "name": "Shrimad Rajchandra Institute of Management and Computer Application"
  },
  {
    "key": "_11oant08n",
    "name": "Shrinathji Institute of Technology and Engineering"
  },
  {
    "key": "_h8gy2g92a",
    "name": "Siddaganga Institute  of Technology"
  },
  {
    "key": "_85p9d9c63",
    "name": "Siddharth Institute of Engineering and Technology - SIETK"
  },
  {
    "key": "_fviefjph6",
    "name": "Siddhu Kanhu Murmu University"
  },
  {
    "key": "_w0tn1orf3",
    "name": "Sikkim Manipal University of Health"
  },
  {
    "key": "_o9vrmmoci",
    "name": "Sinhgad Academy of Engineering"
  },
  {
    "key": "_8k0b45oy1",
    "name": "Sinhgad College of Engineering - SCOE"
  },
  {
    "key": "_fht7kfhgu",
    "name": "Sinhgad Institute of Management and Computer Application"
  },
  {
    "key": "_zdvv082to",
    "name": "Sinhgad Institute of Technology"
  },
  {
    "key": "_dxsz3f67h",
    "name": "Sinhgad Technical Educational Society - Pune"
  },
  {
    "key": "_u57fqlmqp",
    "name": "Sinhudurg Shikshan Prasarak Mandals College of Engineering"
  },
  {
    "key": "_tbdocvsid",
    "name": "Sipnas College of Engineering and Technology"
  },
  {
    "key": "_oh2qtpxwe",
    "name": "Sir C R Reddy College of Engineering"
  },
  {
    "key": "_h1hay4fkj",
    "name": "Sir M. Visvesvaraya Institute of Technology"
  },
  {
    "key": "_cnv4gkqak",
    "name": "Sir Padampat Singhania University"
  },
  {
    "key": "_gqloi8i77",
    "name": "Sir Visvesvaraya Memorial Engineering College"
  },
  {
    "key": "_pjxsf3vsk",
    "name": "Smt Kashibai Navale College Of Engineering"
  },
  {
    "key": "_1j5qs94b8",
    "name": "Smt Kasturbai Walchand College"
  },
  {
    "key": "_3ina9443h",
    "name": "Smt Parvatibai Chowgule College"
  },
  {
    "key": "_gub8catqa",
    "name": "Kamala and Venkappa M. Agadi College of Engineering and Technology"
  },
  {
    "key": "_cc88zji33",
    "name": "SNDT Women's University"
  },
  {
    "key": "_7l57ohql5",
    "name": "Sobhasaria Engineering College"
  },
  {
    "key": "_6qaq18ftv",
    "name": "Sona College of Technology"
  },
  {
    "key": "_gtgh3m0g7",
    "name": "Sophia Girls College Ajmer"
  },
  {
    "key": "_dbpv0tws3",
    "name": "Sourashtra College"
  },
  {
    "key": "_nmvpgh06g",
    "name": "South Gujarat University - Surat"
  },
  {
    "key": "_x2ykhemtf",
    "name": "South Travancore Hindu College"
  },
  {
    "key": "_0wh0x57my",
    "name": "Sphoorthy Engineering College"
  },
  {
    "key": "_0xwujz46i",
    "name": "Sree Chaitanya College of Engineering"
  },
  {
    "key": "_hrdtwkrj1",
    "name": "Sree Chitra Tirunal Institute for Medical Sciences and Technology"
  },
  {
    "key": "_kusu92w4i",
    "name": "Sree Dattha Institute of Engineering"
  },
  {
    "key": "_psdchyijf",
    "name": "Sree Narayana Guru Institute of Science and Technology"
  },
  {
    "key": "_9o1xn316k",
    "name": "Sree Sankaracharya University of Sanskrit"
  },
  {
    "key": "_eoqk6xuv8",
    "name": "Sree Sastha Engineering College"
  },
  {
    "key": "_g1mazw05p",
    "name": "Sreenidhi Institute of Science and Technology"
  },
  {
    "key": "_xjacx10xh",
    "name": "Sreenivasa Institute of Technology and Management Studies"
  },
  {
    "key": "_vt4irem0f",
    "name": "Sri Balaji College of Engineering and Technology"
  },
  {
    "key": "_ezo5ktxob",
    "name": "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya"
  },
  {
    "key": "_7kpg345ir",
    "name": "Sri Datta College of Engineering and Science - SDITS"
  },
  {
    "key": "_wyhx2uaqg",
    "name": "Sri Devi Womens Engineering College"
  },
  {
    "key": "_h06uzjclr",
    "name": "Sri Indu College of Engineering and Technology"
  },
  {
    "key": "_hoosnih73",
    "name": "Sri Jagadguru Balagangadaranath swamiji Institute of Technology"
  },
  {
    "key": "_opmmj0xeu",
    "name": "Sri Jagadguru Chandrasekaranathaswamiji Institute of Technology"
  },
  {
    "key": "_cjaokygem",
    "name": "Sri Jayachamarajendra College of Engineering"
  },
  {
    "key": "_sx4s3l4eh",
    "name": "Sri Kaliswari College"
  },
  {
    "key": "_tzxmtlbw2",
    "name": "Sri Krishna College of Engineering and Technology (SKCET)"
  },
  {
    "key": "_d47nwg9ii",
    "name": "Sri Krishnadevaraya University"
  },
  {
    "key": "_vrcwrg2yo",
    "name": "Sri Manakula Vinayagar Engineering College"
  },
  {
    "key": "_uce62e9h7",
    "name": "Sri Muthukumaran Institute of Technology"
  },
  {
    "key": "_g5f4j5lkx",
    "name": "Sri Padmavati Mahila Viswavidyalayam"
  },
  {
    "key": "_667bwvbax",
    "name": "Sri Prakash College of Engineering Tuni"
  },
  {
    "key": "_4cyk35mr8",
    "name": "Sri Ramachandra Medical College and Research Institute"
  },
  {
    "key": "_de0b900mw",
    "name": "Sri Ramakrishna Engineering College"
  },
  {
    "key": "_ewm10hh4m",
    "name": "Sri Ramakrishna Mission Vidyalaya College of Arts and Science"
  },
  {
    "key": "_eyrx7ryhi",
    "name": "Sri Ramanujar Engineering College"
  },
  {
    "key": "_0wmwicrji",
    "name": "Sri Sarathi Institute of Engineering and Technology"
  },
  {
    "key": "_0ap2bjxk5",
    "name": "Sri Sathya Sai Institute of Higher Learning"
  },
  {
    "key": "_y73xxvf4o",
    "name": "Sri Shakthi Institute of Engineering and Technology"
  },
  {
    "key": "_lqwxaj3lm",
    "name": "Sri Siddhartha Institute of Technology"
  },
  {
    "key": "_95x6orgev",
    "name": "Sri Sivasubramaniya Nadar College of Engineering"
  },
  {
    "key": "_9gqq6x4ze",
    "name": "Sri Vasavi Engineering College"
  },
  {
    "key": "_lr8xm5nci",
    "name": "Sri Venkatesa Perumal College of Engineering and Technology"
  },
  {
    "key": "_036wu2zqv",
    "name": "Sri Venkateswara College of Engineering"
  },
  {
    "key": "_t0apcf1ky",
    "name": "Sri Venkateswara University"
  },
  {
    "key": "_bqows80p3",
    "name": "Sri Vidyaniketan Engineering College"
  },
  {
    "key": "_3oint7kmo",
    "name": "Srikalahasteeswara Institute of Technology"
  },
  {
    "key": "_5dj5ktkve",
    "name": "Srimad Andavan Arts and Science College"
  },
  {
    "key": "_isew2t2b5",
    "name": "Srinivas Institute of Technology-Mangalore"
  },
  {
    "key": "_45ck20ic4",
    "name": "Srinivasa Institute of Engineering and Technology"
  },
  {
    "key": "_j12t80gfp",
    "name": "Srinivasan Engineering College"
  },
  {
    "key": "_8tjs3kyx8",
    "name": "Sriram Engineering College"
  },
  {
    "key": "_qj812wowx",
    "name": "St Anns College of Engineering"
  },
  {
    "key": "_4h25ck0cw",
    "name": "St Josephs College of Engineering"
  },
  {
    "key": "_mgxphqgr1",
    "name": "St Patricks PG College"
  },
  {
    "key": "_j2lyudf91",
    "name": "St Stephen"
  },
  {
    "key": "_pwpv3trsf",
    "name": "St. Francis Institute of Technology"
  },
  {
    "key": "_hbbjz9nf9",
    "name": "St. Johns College of Engineering and Techonology"
  },
  {
    "key": "_ulrmazosf",
    "name": "St. Josephs College (Autonomous) - Tiruchirappalli"
  },
  {
    "key": "_wwkn6lz19",
    "name": "St. Margaret Engineering College - Neemrana"
  },
  {
    "key": "_g3d3xafm7",
    "name": "St. Martins Engineering College"
  },
  {
    "key": "_egzdbzffd",
    "name": "St. Marys Engineering College"
  },
  {
    "key": "_5klh22go3",
    "name": "St. Theressa Institute of Engineering and Technology"
  },
  {
    "key": "_d67ckvyuj",
    "name": "St. Vincent Pallotti College"
  },
  {
    "key": "_iw5wm1kgl",
    "name": "St. Xaviers College"
  },
  {
    "key": "_fw2syf1sr",
    "name": "St.Xaviers Catholic College of Engineering"
  },
  {
    "key": "_hiu1tgfc7",
    "name": "SAINTGITS COLLEGE OF ENGINEERING"
  },
  {
    "key": "_69y6wihpa",
    "name": "Stani Memorial College of Engineering and Technology"
  },
  {
    "key": "_0fx8qnvca",
    "name": "Sudharsan Engineering College"
  },
  {
    "key": "_kr28qyvab",
    "name": "Sushila Devi Bansal College of Technology"
  },
  {
    "key": "_gpzdijkpu",
    "name": "Swami Keshvanand Institute of Technology"
  },
  {
    "key": "_p20acx60z",
    "name": "Swami Parmanand College of Engineering and Technology"
  },
  {
    "key": "_rgmei44rv",
    "name": "Swami Ramanand Teerth Marathwada University"
  },
  {
    "key": "_4p7illdl6",
    "name": "Swami Ramananda Tirtha Institute of Science and Technology"
  },
  {
    "key": "_t8tvl50ho",
    "name": "Swami Sachchidanand Polytechnic College Visnagar"
  },
  {
    "key": "_b8ux4ba80",
    "name": "Swami Sahajanand College of Commerce And Management"
  },
  {
    "key": "_wxp9uv47k",
    "name": "Swami Vivekananda PG College"
  },
  {
    "key": "_jhlrlbqhz",
    "name": "Swarnandhra College of Engineering"
  },
  {
    "key": "_qmn6907hp",
    "name": "Symbiosis"
  },
  {
    "key": "_g0ueg0hre",
    "name": "T.K.M. College of Engineering"
  },
  {
    "key": "_5cj7tctok",
    "name": "TERI School of Advanced Studies"
  },
  {
    "key": "_xwkxw0k22",
    "name": "TRR College of Engineering"
  },
  {
    "key": "_q30wfu3l7",
    "name": "Techno India Salt Lake"
  },
  {
    "key": "_1100m12bx",
    "name": "TRUBA Institute of Engineering and Information Technology"
  },
  {
    "key": "_sk2lgbzu6",
    "name": "Tagore Engineering College"
  },
  {
    "key": "_uj95mlzoe",
    "name": "Tamil Nadu Agricultural University"
  },
  {
    "key": "_9tlgxi0vd",
    "name": "Tamil Nadu Doctor Ambedkar Law University"
  },
  {
    "key": "_n56cirye4",
    "name": "Tamil Nadu Doctor M.G.R. Medical University"
  },
  {
    "key": "_yjk7yronw",
    "name": "Tamil Nadu Veterinary and Animal Sciences University"
  },
  {
    "key": "_a8frz63c0",
    "name": "Tamil University"
  },
  {
    "key": "_x2bt04kx0",
    "name": "Tamilnadu College of Engineering"
  },
  {
    "key": "_jfthktbi1",
    "name": "Tata Institute of Fundamental Research - TIFR Mumbai"
  },
  {
    "key": "_kfucsgn2j",
    "name": "Tata Institute of Social Sciences"
  },
  {
    "key": "_elszvrcyj",
    "name": "Tatysaheb Kore Institute of Engineering and Technology - Warana"
  },
  {
    "key": "_11xju2iu5",
    "name": "Technocrats Institute of Technology"
  },
  {
    "key": "_059rzckw9",
    "name": "Technological Institute Of Textile and Sciences"
  },
  {
    "key": "_e61nmj6ov",
    "name": "Techno India College of Technology"
  },
  {
    "key": "_a4zscvvms",
    "name": "Teerthanker Mahaveer Institute of Management and Technology"
  },
  {
    "key": "_b2kvhptb8",
    "name": "Tezpur University"
  },
  {
    "key": "_ipcdjqy77",
    "name": "Thadomal Shahani Engineering College"
  },
  {
    "key": "_1eje0x07m",
    "name": "Thakral College of Technology"
  },
  {
    "key": "_sf2iwmail",
    "name": "Thakur College Of Engeneering And Technology"
  },
  {
    "key": "_s0ecepdjs",
    "name": "Thangal Kunju Musaliar College of Engineering - TKM"
  },
  {
    "key": "_29y47hiao",
    "name": "Thangavelu College"
  },
  {
    "key": "_mnnjcu3b3",
    "name": "Thapar Institute of Engineering and Technology"
  },
  {
    "key": "_nhlm97ayj",
    "name": "The American College"
  },
  {
    "key": "_xx4njvxid",
    "name": "The Heritage Academy"
  },
  {
    "key": "_1j5mp2al4",
    "name": "The Maharaja Sayajirao University of Baroda"
  },
  {
    "key": "_ej0jttypz",
    "name": "Theegala Krishna Reddy College of Engineering and Technology"
  },
  {
    "key": "_6tu10k28d",
    "name": "Thiagarajar College of Engineering"
  },
  {
    "key": "_p708dj7uv",
    "name": "Thiagarajar School of Management"
  },
  {
    "key": "_ziggnn2p7",
    "name": "Tilak Maharashtra Vidyapeeth"
  },
  {
    "key": "_nryorlco5",
    "name": "Tilka Manjhi Bhagalpur University"
  },
  {
    "key": "_lb0hx14y2",
    "name": "Toc-H Institute of Science and Technology"
  },
  {
    "key": "_i5yt9sh0s",
    "name": "Tripura University"
  },
  {
    "key": "_m7emf8wqm",
    "name": "U. V. Patel College of Engineering"
  },
  {
    "key": "_byheb27ro",
    "name": "Ujjain Engineering College"
  },
  {
    "key": "_068shglf4",
    "name": "Union Christian College"
  },
  {
    "key": "_mcy76de0d",
    "name": "United College of Engineering &amp; Research"
  },
  {
    "key": "_l4p2c5yea",
    "name": "United College of Engineering and Research"
  },
  {
    "key": "_4cuivyalr",
    "name": "United Institute of Technology - UIT"
  },
  {
    "key": "_mih0q0tm5",
    "name": "University College of Engineering"
  },
  {
    "key": "_6i2po1dz7",
    "name": "University Institute of Computer Science and Applications"
  },
  {
    "key": "_b2yg480ss",
    "name": "University Institute of Engineering and Technology - UIET"
  },
  {
    "key": "_8wd9ke758",
    "name": "University Institute of Technology Barkatullah University"
  },
  {
    "key": "_rh26oehk3",
    "name": "UIT RGPV"
  },
  {
    "key": "_r0smlxva8",
    "name": "University Visvesvaraya College of Engineering"
  },
  {
    "key": "_h00aaakau",
    "name": "University of Agricultural Sciences"
  },
  {
    "key": "_wan24ye5g",
    "name": "University of Burdwan"
  },
  {
    "key": "_ee67f8sf3",
    "name": "University of Calcutta"
  },
  {
    "key": "_vccglwdfe",
    "name": "University of Calicut"
  },
  {
    "key": "_rqrftffue",
    "name": "University of Delhi - University of Delhi"
  },
  {
    "key": "_e33mccf5p",
    "name": "University of Hyderabad"
  },
  {
    "key": "_0zipg7a3f",
    "name": "University of Jammu"
  },
  {
    "key": "_wqmljjq71",
    "name": "University of Kalyani"
  },
  {
    "key": "_lzpv61h6g",
    "name": "University of Kashmir"
  },
  {
    "key": "_y87yofs2t",
    "name": "University of Kerela"
  },
  {
    "key": "_39wi1ahll",
    "name": "University of Lucknow"
  },
  {
    "key": "_3lhwvzjmv",
    "name": "University of Madras"
  },
  {
    "key": "_k2q5qa9m9",
    "name": "University of Mumbai"
  },
  {
    "key": "_pidb17ove",
    "name": "University of Mysore"
  },
  {
    "key": "_n907ssdww",
    "name": "University of North Bengal"
  },
  {
    "key": "_4gqo66whu",
    "name": "University of Petroleum and Energy Studies - UPES"
  },
  {
    "key": "_93wlpd2y7",
    "name": "University of Pune"
  },
  {
    "key": "_rng1lc9sz",
    "name": "University of Rajasthan"
  },
  {
    "key": "_270eloozb",
    "name": "University of Roorkee - UP"
  },
  {
    "key": "_u1l84771j",
    "name": "University of Vishweshwariya College of Engineering"
  },
  {
    "key": "_fqwz4u1ul",
    "name": "Utkal Sanskruti Viswavidyalaya"
  },
  {
    "key": "_b3fjg9jmr",
    "name": "Utkal University"
  },
  {
    "key": "_05c10smgt",
    "name": "Uttam Devi Mohan Lal College of Engineering"
  },
  {
    "key": "_fgcc8y967",
    "name": "Uttar Banga Krishni Viswavidyalaya"
  },
  {
    "key": "_ifef3k2b7",
    "name": "Uttar Maharashtra Vidyapeeth"
  },
  {
    "key": "_lphk0hzgi",
    "name": "Uttar Pradesh Rajarshi Tandon Open University"
  },
  {
    "key": "_ansjv63lx",
    "name": "Uttar Pradesh Technical University"
  },
  {
    "key": "_0pc275wjq",
    "name": "Uttaranchal Institute of Management"
  },
  {
    "key": "_2k40pqhsn",
    "name": "V. H. N. Senthikumaranadar College"
  },
  {
    "key": "_eyaojhur9",
    "name": "V. L. B. Janakiammal College"
  },
  {
    "key": "_xzh5hxbpu",
    "name": "V. S. Patel College"
  },
  {
    "key": "_3j1dlilzr",
    "name": "V.B.S Purvanchal University"
  },
  {
    "key": "_chuba902l",
    "name": "V.S.M. College"
  },
  {
    "key": "_9hlmj2cwe",
    "name": "VEL TECH MULTI TECH Engineering College"
  },
  {
    "key": "_ml4o4cxqu",
    "name": "VHNSN College"
  },
  {
    "key": "_0p6fdumgk",
    "name": "VIF College of Engineering and Technology"
  },
  {
    "key": "_h7kltiqh3",
    "name": "VR Siddhartha Engineering College"
  },
  {
    "key": "_hz36va0it",
    "name": "VRS College of Engineering and Technology - VRSCET"
  },
  {
    "key": "_0zs6i8swa",
    "name": "VVV College for Women"
  },
  {
    "key": "_sp6l69rzz",
    "name": "Vaagdevi Institute of Technology and Science"
  },
  {
    "key": "_gxw1u14cj",
    "name": "Valliammai Engineering College"
  },
  {
    "key": "_ybw7zr3pz",
    "name": "VNRVJIET"
  },
  {
    "key": "_zkfpxskbi",
    "name": "Vardhaman College Of Engineering"
  },
  {
    "key": "_8n26xfdvh",
    "name": "Vasavi College of Engineering"
  },
  {
    "key": "_3ss8pnho7",
    "name": "Veer Kunwar Singh University"
  },
  {
    "key": "_qywnx856e",
    "name": "Veer Narmad South Gujarat University"
  },
  {
    "key": "_t9kdbgl52",
    "name": "Veer Surendra Sai University Of Technology"
  },
  {
    "key": "_rcls5sgo2",
    "name": "Veermata Jijabai Technological Institute"
  },
  {
    "key": "_6r7jbzgqh",
    "name": "Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College"
  },
  {
    "key": "_d9d3ie0ek",
    "name": "Velammal College of Management and Computer Studies"
  },
  {
    "key": "_bu6l7jhyn",
    "name": "Velammal Engineering College - VEC"
  },
  {
    "key": "_1s3iwd6fa",
    "name": "Vellalar College of Engineering and Technology"
  },
  {
    "key": "_i5pqx9ooh",
    "name": "Vellore Engineering College"
  },
  {
    "key": "_ol3r0cct9",
    "name": "Vellore Institute of Technology"
  },
  {
    "key": "_7melxd8k4",
    "name": "Vemana Institute of Technology"
  },
  {
    "key": "_3cb4yz19p",
    "name": "Vickram College of Engineering"
  },
  {
    "key": "_i139iqrb2",
    "name": "Vidya Academy of Science and Technology"
  },
  {
    "key": "_2ar0nxjfv",
    "name": "Vidya Bhawan Rural Institute"
  },
  {
    "key": "_2tufknj5a",
    "name": "Vidya Jyothi Institute of technology - VJIT"
  },
  {
    "key": "_ec9lin7jv",
    "name": "Vidya Pratishthan College Of Engineering"
  },
  {
    "key": "_g12s4ov2c",
    "name": "Vidyalankar Institute Of Technology"
  },
  {
    "key": "_f929h3gam",
    "name": "Vidyalankar Polytechnic"
  },
  {
    "key": "_69fdy9sms",
    "name": "Vidyasagar Viswavidyalaya"
  },
  {
    "key": "_9uee1hve0",
    "name": "Vignan Institute of Technology and Science"
  },
  {
    "key": "_1h9kxom73",
    "name": "Vignans Engineering College"
  },
  {
    "key": "_s7u6zep6t",
    "name": "Vignana Jyothi College Of Engineering And Technology"
  },
  {
    "key": "_9tfuc866o",
    "name": "Vijetha Degree College"
  },
  {
    "key": "_5072qgm4b",
    "name": "Vikasa Engineering Institute of Technology"
  },
  {
    "key": "_l9yjta5al",
    "name": "Vikram University"
  },
  {
    "key": "_xaommarpq",
    "name": "Villa Marie P. G. College For Women"
  },
  {
    "key": "_s4jc708kg",
    "name": "Vimal Jyothi Engineering College"
  },
  {
    "key": "_vs99jr75m",
    "name": "Vinayaka Missions Research Foundation - University"
  },
  {
    "key": "_1ta11sq61",
    "name": "Vinoba Bhave University"
  },
  {
    "key": "_63vrk9760",
    "name": "Vishwakarma Institute of Technology"
  },
  {
    "key": "_laormlpgd",
    "name": "Visva-Bharati"
  },
  {
    "key": "_71vq7st8o",
    "name": "Visvesvaraya National Institute of Technology"
  },
  {
    "key": "_7xjfay5am",
    "name": "Visvesvaraya Technological University"
  },
  {
    "key": "_p81fuotj2",
    "name": "Visveswaraiah Technological University"
  },
  {
    "key": "_bck4dgbfz",
    "name": "Viswajyothi College of Engineering and Technology"
  },
  {
    "key": "_tt4yo91x8",
    "name": "Vivekanand Education Society Institute of Technology"
  },
  {
    "key": "_ikpcvbfj8",
    "name": "Vivekanand Institute of Technology"
  },
  {
    "key": "_l3fiflfkx",
    "name": "Vivekananda College of Computer Science"
  },
  {
    "key": "_4248e8xis",
    "name": "Vivekanandha Institute of Engineering and Technology for Women"
  },
  {
    "key": "_q2r090cvv",
    "name": "Vivekanandha College of Technology for Women"
  },
  {
    "key": "_i4k3bg4dp",
    "name": "Vivekananda Institute of Technology and Science"
  },
  {
    "key": "_hrnz9ve3p",
    "name": "Vivekananda Institute of Technology"
  },
  {
    "key": "_85r9qwmtx",
    "name": "Vivekananda School of Post Graduate Studies"
  },
  {
    "key": "_fuaauewwg",
    "name": "Walchand College of Engineering"
  },
  {
    "key": "_ivg74pxc5",
    "name": "West Bengal National University of Juridical Sciences"
  },
  {
    "key": "_2xmzzptz6",
    "name": "West Bengal University of Animal and Fishery Sciences"
  },
  {
    "key": "_e1sh482gi",
    "name": "West Bengal University of Technology"
  },
  {
    "key": "_fm9avyrfq",
    "name": "Womens College"
  },
  {
    "key": "_efz3qu38k",
    "name": "XLRI Jamshedpur Business School"
  },
  {
    "key": "_e95qs9eo8",
    "name": "Xavier Institute of Management"
  },
  {
    "key": "_e72kxff6e",
    "name": "Xavier Institute of Social Service"
  },
  {
    "key": "_llsvurjd4",
    "name": "Yagyavalkya Institute of Technology - YIT"
  },
  {
    "key": "_h8h19p2yc",
    "name": "Yashwantrao Chavan Maharashtra Open University"
  },
  {
    "key": "_lki8xrbah",
    "name": "Yeahwantro Chavan College Of Engineering (YCCE)"
  },
  {
    "key": "_sgnelc52c",
    "name": "Zakir Hussain College of Engg &amp; Technology"
  },
  {
    "key": "_4yscfcisq",
    "name": "Velalar College of Engineering and Technology"
  },
  {
    "key": "_bkx667bjx",
    "name": "Sri Eshwar College Of Engineering"
  },
  {
    "key": "_5szcxzpfb",
    "name": "PSG Institute Of Technology and Applied Research"
  },
  {
    "key": "_ti6m5o9b6",
    "name": "Mahendra Institute of Technology"
  },
  {
    "key": "_9fexofwbh",
    "name": "knowledge institute of technology"
  },
  {
    "key": "_szmqdmebl",
    "name": "seagi"
  },
  {
    "key": "_s5y0ystth",
    "name": "sree vidyanikethan engineering college"
  },
  {
    "key": "_11eyaiakt",
    "name": "Gayatri Vidya Parishad College of engineering for women "
  },
  {
    "key": "_m5xf0om14",
    "name": "KIT - Kalaignar Karunanidhi Institute of Technology"
  },
  {
    "key": "_cb9twlcfg",
    "name": "Info Institute of Engineering"
  },
  {
    "key": "_esbm8lece",
    "name": "KPR Institute of Engineering and Technology"
  },
  {
    "key": "_62tuhh8o6",
    "name": "Sri Sairam Institute of technology"
  },
  {
    "key": "_pg646n1ek",
    "name": "Dr.NGP Institute of technology"
  },
  {
    "key": "_g76hmwmgu",
    "name": "PSGR Krishnammal College for Women"
  },
  {
    "key": "_iadktmrum",
    "name": "Central Institute of Plastic Engineering and Technology"
  },
  {
    "key": "_xu31wrxc8",
    "name": "Akshaya College of Engineering and Technology"
  },
  {
    "key": "_tysgfgow7",
    "name": "Sree Sakthi Engineering College"
  },
  {
    "key": "_zhvuw2o9e",
    "name": "Muthoot Institute of Technology and Science"
  },
  {
    "key": "_bx769r754",
    "name": "Indian Institute of Information Technology"
  },
  {
    "key": "_cbgz8fuvn",
    "name": "Ramco Institute of Technology"
  },
  {
    "key": "_a58ljehkb",
    "name": "Dhirajlal Gandhi College of Technology"
  },
  {
    "key": "_hdw2yllxd",
    "name": "Velammal College Of Engineering and Technology"
  },
  {
    "key": "_o6vw4fqst",
    "name": "TRP Engineering College"
  },
  {
    "key": "_j3xdmij7o",
    "name": "Nandha College of Technology"
  },
  {
    "key": "_3yi457biz",
    "name": "MIET Engineering College"
  },
  {
    "key": "_hdhmo606v",
    "name": "Christ college of engineering and technology"
  },
  {
    "key": "_jjciadmw9",
    "name": "K. Ramakrishnan College of Technology"
  },
  {
    "key": "_weircs4u9",
    "name": "Sri Ramakrishna Institute of Technology"
  },
  {
    "key": "_rdprs9d63",
    "name": "Sree Chitra Thirunal College of Engineering"
  },
  {
    "key": "_343j3hepu",
    "name": "Galaxy Institute of Technology"
  },
  {
    "key": "_6rubt5x8k",
    "name": "JCT College of Engineering and Technology"
  },
  {
    "key": "_vxb7xoc7z",
    "name": "Sri Krishna College of Technology (SKCT)"
  },
  {
    "key": "_61hrieyw5",
    "name": "Daiata Madhusudhana Sastry sri venkateswara hindu Colllege of Engineering"
  },
  {
    "key": "_jbka6b3vl",
    "name": "CMF College"
  },
  {
    "key": "_4lxfg0vy5",
    "name": "CMS College"
  },
  {
    "key": "_l9ae3cje1",
    "name": "Kongunadu Institute of Engineering and Technology"
  },
  {
    "key": "_1mzc5u7c9",
    "name": "bharathi matriculation higher secondary school"
  },
  {
    "key": "_9dzfm4w12",
    "name": "Mahatma Gandhi Medical College & Research Institute"
  },
  {
    "key": "_ckq6dk4tj",
    "name": "SSS Film Academy"
  },
  {
    "key": "_pk7tfz6yk",
    "name": "Rathinam College of Arts"
  },
  {
    "key": "_ae9dzvsqq",
    "name": "SSN Institute of Engineering & Technology"
  },
  {
    "key": "_1jobrx9x0",
    "name": "sri guru institute of technlogy"
  },
  {
    "key": "_x9vsbef9y",
    "name": "Suguna PIP School"
  },
  {
    "key": "_1x5zvxi05",
    "name": "Nehru College of Aeronautics & Applied science"
  },
  {
    "key": "_dbyzqld7f",
    "name": "SVS College of Engineering"
  },
  {
    "key": "_2j0jhoqir",
    "name": "KAP Viswanatham Government Medical College"
  },
  {
    "key": "_j0ngxj6x6",
    "name": "SSM Institute of Engineering and technology"
  },
  {
    "key": "_y7res2t2r",
    "name": "NGM Arts & Science College"
  },
  {
    "key": "_3685zj4n9",
    "name": "SNS College of Technology"
  },
  {
    "key": "_xjwgk3mm6",
    "name": "RVS College of engineering and technology"
  },
  {
    "key": "_snsh1dy9b",
    "name": "Nehru Institute OF Engineering & Technology"
  },
  {
    "key": "_kej30vju2",
    "name": "A. T. Still University"
  },
  {
    "key": "_7osvw7gh3",
    "name": "Abilene Christian University"
  },
  {
    "key": "_ni875lnqq",
    "name": "Abraham Baldwin Agricultural College"
  },
  {
    "key": "_85giadon0",
    "name": "Academy of Art University"
  },
  {
    "key": "_njcffm1b6",
    "name": "Adams State College"
  },
  {
    "key": "_lw2w5vyjc",
    "name": "Adelphi University"
  },
  {
    "key": "_a4gvnfdba",
    "name": "Adrian College"
  },
  {
    "key": "_ud6sr5k2q",
    "name": "Agnes Scott College"
  },
  {
    "key": "_sk4tbn6rk",
    "name": "Air Force Institute of Technology"
  },
  {
    "key": "_5jgf73m7a",
    "name": "Air University"
  },
  {
    "key": "_pxe4mr49x",
    "name": "Alabama A&M University"
  },
  {
    "key": "_tq65cwvx4",
    "name": "Alabama State University"
  },
  {
    "key": "_w259jzji3",
    "name": "Alaska Bible College"
  },
  {
    "key": "_ozgrvj44v",
    "name": "Alaska Pacific University"
  },
  {
    "key": "_st8x3jngk",
    "name": "Albertus Magnus College"
  },
  {
    "key": "_4umt532he",
    "name": "Albion College"
  },
  {
    "key": "_l7gbge4r2",
    "name": "Albright College"
  },
  {
    "key": "_gst2m83gy",
    "name": "Alcorn State University"
  },
  {
    "key": "_nb8dzfkoj",
    "name": "Alderson-Broaddus College"
  },
  {
    "key": "_hx07k4o6m",
    "name": "Alfred State College, State University of New York College of Technology"
  },
  {
    "key": "_l5os1hqh8",
    "name": "Alfred University"
  },
  {
    "key": "_bz8cagoxo",
    "name": "Allegheny College"
  },
  {
    "key": "_f9mhc7fdl",
    "name": "Allen College"
  },
  {
    "key": "_4det4f81j",
    "name": "Allen University"
  },
  {
    "key": "_dp734ui2c",
    "name": "Alliant International University"
  },
  {
    "key": "_sxo1z5exf",
    "name": "Allied University"
  },
  {
    "key": "_f4ufyzput",
    "name": "Alma College"
  },
  {
    "key": "_m94uoofl9",
    "name": "Alvernia College"
  },
  {
    "key": "_l4szyvydq",
    "name": "Alverno College"
  },
  {
    "key": "_6oinlq5rd",
    "name": "Amberton University"
  },
  {
    "key": "_sd2at0j0q",
    "name": "American Academy of Art"
  },
  {
    "key": "_f6aj8pz7z",
    "name": "American Bible College and Seminary"
  },
  {
    "key": "_l6b2xezld",
    "name": "American Coastline University"
  },
  {
    "key": "_su60r89qm",
    "name": "The American College"
  },
  {
    "key": "_6jkomy66t",
    "name": "American Global University"
  },
  {
    "key": "_loylg4om2",
    "name": "American Graduate School of International Management"
  },
  {
    "key": "_g34co7s6o",
    "name": "American Institute for Computer Sciences"
  },
  {
    "key": "_ijkphxg1o",
    "name": "American InterContinental University"
  },
  {
    "key": "_sn6iya77r",
    "name": "American International College"
  },
  {
    "key": "_2fjt1lca1",
    "name": "American Military University"
  },
  {
    "key": "_p9g71u5f4",
    "name": "American Public University"
  },
  {
    "key": "_gc9d1lewy",
    "name": "American University"
  },
  {
    "key": "_ffu4tde88",
    "name": "American University of Hawaii"
  },
  {
    "key": "_bh5r6mjk2",
    "name": "American University of Judasim"
  },
  {
    "key": "_022uaaicr",
    "name": "Amherst College"
  },
  {
    "key": "_l67f3dzog",
    "name": "Anderson College"
  },
  {
    "key": "_bcwu2mvvt",
    "name": "Anderson University"
  },
  {
    "key": "_9z5fa4lag",
    "name": "Andrew Jackson University"
  },
  {
    "key": "_g0cac2zz4",
    "name": "Andrews University"
  },
  {
    "key": "_jwi8vty4t",
    "name": "Angelo State University"
  },
  {
    "key": "_ta5bb8m6g",
    "name": "Anna Maria College"
  },
  {
    "key": "_a4624vy5e",
    "name": "Antioch College"
  },
  {
    "key": "_2wg6za22i",
    "name": "Antioch New England Graduate School"
  },
  {
    "key": "_cv7r3ngpw",
    "name": "Antioch University Los Angeles"
  },
  {
    "key": "_lif9ys56g",
    "name": "Antioch University Santa Barbara"
  },
  {
    "key": "_d4p7om0u3",
    "name": "Antioch University Seattle"
  },
  {
    "key": "_h7wyhxdch",
    "name": "Antioch University Yellow Springs OH"
  },
  {
    "key": "_ja8z51dfx",
    "name": "Apache University"
  },
  {
    "key": "_e0q3vu5nt",
    "name": "Appalachian School of Law"
  },
  {
    "key": "_irturl5fm",
    "name": "Appalachian State University"
  },
  {
    "key": "_hw0lapfr8",
    "name": "Aquinas College"
  },
  {
    "key": "_vpdujz0nd",
    "name": "Arcadia University"
  },
  {
    "key": "_6s8j51drs",
    "name": "Argosy University"
  },
  {
    "key": "_ls6r4merl",
    "name": "Arizona International College"
  },
  {
    "key": "_o1de5046h",
    "name": "Arizona State University"
  },
  {
    "key": "_andfa7nfn",
    "name": "Arizona State University West"
  },
  {
    "key": "_glzutqgmg",
    "name": "Arkansas State University"
  },
  {
    "key": "_k44bltyka",
    "name": "Arkansas Tech University"
  },
  {
    "key": "_tu9y4vlwx",
    "name": "Arlington Baptist College"
  },
  {
    "key": "_zj20yp5xk",
    "name": "Armstrong Atlantic State University"
  },
  {
    "key": "_8fevq17am",
    "name": "Art Center College of Design"
  },
  {
    "key": "_7tiga6u2j",
    "name": "Art Institute of Chicago"
  },
  {
    "key": "_7ph1fpqoj",
    "name": "Art Institute of Ft Lauderdale"
  },
  {
    "key": "_9mhsxnona",
    "name": "The Art Institute of Phoenix"
  },
  {
    "key": "_kboeagvjy",
    "name": "The Art Institute of Southern California"
  },
  {
    "key": "_xgku0eusj",
    "name": "The Art Institute of Washington"
  },
  {
    "key": "_xp4yzr47a",
    "name": "Asbury College"
  },
  {
    "key": "_k2iu1jdua",
    "name": "Ashford University"
  },
  {
    "key": "_d35fcabia",
    "name": "Ashland University"
  },
  {
    "key": "_qrqwf7pnr",
    "name": "Aspen University"
  },
  {
    "key": "_ifewltueg",
    "name": "Assumption College"
  },
  {
    "key": "_ug10vhxhk",
    "name": "Athena University"
  },
  {
    "key": "_6bacxcky2",
    "name": "Athens State College"
  },
  {
    "key": "_u3gjr12tf",
    "name": "Atlantic Union College"
  },
  {
    "key": "_sao0gdonc",
    "name": "Auburn University"
  },
  {
    "key": "_18z95zagt",
    "name": "Auburn University, Montgomery"
  },
  {
    "key": "_owgoo9sd1",
    "name": "Augsburg College"
  },
  {
    "key": "_1wm51cl81",
    "name": "Augusta State University"
  },
  {
    "key": "_erq3syrzi",
    "name": "Augustana College, Rock Island Illinois"
  },
  {
    "key": "_bwn0lb5ti",
    "name": "Augustana College, Sioux Falls South Dakota"
  },
  {
    "key": "_acq2pnfkl",
    "name": "Aurora University"
  },
  {
    "key": "_qlegsbetn",
    "name": "Austin College"
  },
  {
    "key": "_cg3yckmrt",
    "name": "Austin Peay State University"
  },
  {
    "key": "_u36trluxn",
    "name": "Averett College"
  },
  {
    "key": "_o25s4dhel",
    "name": "Avila College"
  },
  {
    "key": "_dnu15i4h2",
    "name": "Azusa Pacific University"
  },
  {
    "key": "_4ppfukkrv",
    "name": "Babson College"
  },
  {
    "key": "_1ezoskua1",
    "name": "Bacone College"
  },
  {
    "key": "_n5wv9kzeu",
    "name": "Baker College"
  },
  {
    "key": "_r3gkcdhjz",
    "name": "Baker University"
  },
  {
    "key": "_za7r1824n",
    "name": "Baldwin-Wallace College"
  },
  {
    "key": "_9ux8p5kf9",
    "name": "Ball State University"
  },
  {
    "key": "_0br9c1uwj",
    "name": "Baltimore Hebrew University"
  },
  {
    "key": "_c1b6e9hip",
    "name": "Bank Street College of Education"
  },
  {
    "key": "_5psyj2gy7",
    "name": "Baptist Bible College and Seminary"
  },
  {
    "key": "_v95pejbr2",
    "name": "The Baptist College of Florida"
  },
  {
    "key": "_v530r5hwj",
    "name": "Barber-Scotia College"
  },
  {
    "key": "_q3r9eyo7d",
    "name": "Bard College"
  },
  {
    "key": "_1k20tqt0p",
    "name": "Barclay College"
  },
  {
    "key": "_iom9mm2ud",
    "name": "Barnard College"
  },
  {
    "key": "_jy5e53hpd",
    "name": "Barrington University"
  },
  {
    "key": "_tcewyla37",
    "name": "Barry University"
  },
  {
    "key": "_nn3k2evnp",
    "name": "Barton College"
  },
  {
    "key": "_lp32wucal",
    "name": "Bastyr University"
  },
  {
    "key": "_t4xafvk9i",
    "name": "Bates College"
  },
  {
    "key": "_7lieh5wff",
    "name": "Bay Path College"
  },
  {
    "key": "_34u8q8b4d",
    "name": "Baylor College of Dentistry"
  },
  {
    "key": "_m7itu0ey3",
    "name": "Baylor College of Medicine"
  },
  {
    "key": "_2dmyi0kh1",
    "name": "Baylor University"
  },
  {
    "key": "_uvklon07f",
    "name": "Belhaven College"
  },
  {
    "key": "_tsm2vznvd",
    "name": "Bellarmine University"
  },
  {
    "key": "_hvut19z61",
    "name": "Bellevue University"
  },
  {
    "key": "_5s0crb0za",
    "name": "Belmont Abbey College"
  },
  {
    "key": "_bnhjkw5gn",
    "name": "Belmont University"
  },
  {
    "key": "_bs8v5wnq0",
    "name": "Beloit College"
  },
  {
    "key": "_7rhxjrs1v",
    "name": "Bemidji State University"
  },
  {
    "key": "_xkpcd67lg",
    "name": "Benedict College"
  },
  {
    "key": "_18d1t4yp2",
    "name": "Benedictine College"
  },
  {
    "key": "_t4c1eubzx",
    "name": "Benedictine University"
  },
  {
    "key": "_re7iruk7i",
    "name": "Bennett College"
  },
  {
    "key": "_0k2pk05lv",
    "name": "Bennington College"
  },
  {
    "key": "_7n8ubslrs",
    "name": "Bentley College"
  },
  {
    "key": "_cnze7la35",
    "name": "Berea College"
  },
  {
    "key": "_9rtqpflk0",
    "name": "Berkeley College"
  },
  {
    "key": "_9u4235aol",
    "name": "Berklee College of Music"
  },
  {
    "key": "_x33og9y24",
    "name": "Berry College"
  },
  {
    "key": "_3bgireh08",
    "name": "Bethany Bible College"
  },
  {
    "key": "_xwg6z64j6",
    "name": "Bethany College, West Virginia"
  },
  {
    "key": "_dfbff9nyr",
    "name": "Bethany College, Lindsborg, KS"
  },
  {
    "key": "_jfv2mz4qe",
    "name": "Bethany College, Scotts Valley, CA"
  },
  {
    "key": "_6joc39y46",
    "name": "Bethany Lutheran College"
  },
  {
    "key": "_xoqlr4ymg",
    "name": "Bethel College and Seminary, Saint Paul Minnesota"
  },
  {
    "key": "_cmoycv2ul",
    "name": "Bethel College, McKenzie, Tennessee"
  },
  {
    "key": "_rxu0cdj83",
    "name": "Bethel College, Mishawaka, Indiana"
  },
  {
    "key": "_ff2pk4htb",
    "name": "Bethel College, Newton, Kansas"
  },
  {
    "key": "_ljral4pqb",
    "name": "Bethune-Cookman College"
  },
  {
    "key": "_pxqnc1reg",
    "name": "Bienville University"
  },
  {
    "key": "_y5laaku29",
    "name": "Biola University"
  },
  {
    "key": "_wqxvm9mb0",
    "name": "Birmingham-Southern College"
  },
  {
    "key": "_j8yuugk32",
    "name": "Bismarck State College"
  },
  {
    "key": "_ziwhxiaos",
    "name": "Black Hills State University"
  },
  {
    "key": "_zdcp7i31d",
    "name": "Blackburn College"
  },
  {
    "key": "_4eofd3jtq",
    "name": "Bloomfield College"
  },
  {
    "key": "_a983n31hl",
    "name": "Bloomsburg University"
  },
  {
    "key": "_3ijdtri78",
    "name": "Blue Mountain College"
  },
  {
    "key": "_7fjg5e9uz",
    "name": "Bluefield College"
  },
  {
    "key": "_mdr0j0gwp",
    "name": "Bluefield State College"
  },
  {
    "key": "_4pza67ylk",
    "name": "Bluffton University"
  },
  {
    "key": "_dvdepvocn",
    "name": "Bob Jones University"
  },
  {
    "key": "_mogceskl6",
    "name": "Boise State University"
  },
  {
    "key": "_9wc0yugd8",
    "name": "The Boston Architectural Center"
  },
  {
    "key": "_xpuy51ki9",
    "name": "Boston College"
  },
  {
    "key": "_qvm70d58z",
    "name": "Boston Conservatory"
  },
  {
    "key": "_drnh5amwt",
    "name": "Boston University"
  },
  {
    "key": "_i1z9kfmkn",
    "name": "Bowdoin College"
  },
  {
    "key": "_qiuee94vl",
    "name": "Bowie State University"
  },
  {
    "key": "_pujw4gh4p",
    "name": "Bowling Green State University"
  },
  {
    "key": "_hwlepo5c9",
    "name": "Bradford College"
  },
  {
    "key": "_404vuqak8",
    "name": "Bradley University"
  },
  {
    "key": "_8frdhmh8r",
    "name": "Brandeis University"
  },
  {
    "key": "_hkodoa6kf",
    "name": "Brenau University"
  },
  {
    "key": "_kxw9yh6yw",
    "name": "Brevard College"
  },
  {
    "key": "_m5odvnsxp",
    "name": "Brewton-Parker College"
  },
  {
    "key": "_678njnndf",
    "name": "Briar Cliff University"
  },
  {
    "key": "_qkqu41th1",
    "name": "Bridgewater College"
  },
  {
    "key": "_13xvwg2yg",
    "name": "Bridgewater State College"
  },
  {
    "key": "_x1vr5agk4",
    "name": "Brigham Young University"
  },
  {
    "key": "_s02s63k34",
    "name": "Brigham Young University Hawaii"
  },
  {
    "key": "_g0it6xmil",
    "name": "Brigham Young University Idaho"
  },
  {
    "key": "_45nmagc9g",
    "name": "Brooklyn College"
  },
  {
    "key": "_shrmx9qhb",
    "name": "Brooklyn Law School"
  },
  {
    "key": "_puahpiy0z",
    "name": "Brooks Institute"
  },
  {
    "key": "_usxwwh0sp",
    "name": "Brown University"
  },
  {
    "key": "_hxkpvczvx",
    "name": "Bryan College"
  },
  {
    "key": "_nfn067ysa",
    "name": "Bryant College"
  },
  {
    "key": "_hyrw50qxq",
    "name": "Bryn Mawr College"
  },
  {
    "key": "_c14ommreg",
    "name": "Bucknell University"
  },
  {
    "key": "_c285tk7ut",
    "name": "Buena Vista University"
  },
  {
    "key": "_h5judxvo0",
    "name": "Butler University"
  },
  {
    "key": "_n024csfti",
    "name": "C. R. Drew University of Medicine and Science"
  },
  {
    "key": "_3r0r423dl",
    "name": "Cabarrus College of Health Sciences"
  },
  {
    "key": "_wdj65zfa6",
    "name": "Cabrini College"
  },
  {
    "key": "_8mjfh51fx",
    "name": "Caldwell College"
  },
  {
    "key": "_4g9vtxrb1",
    "name": "California Baptist University"
  },
  {
    "key": "_qxveeuy06",
    "name": "California Coast University"
  },
  {
    "key": "_fpvebasg0",
    "name": "California College of the Arts"
  },
  {
    "key": "_qmmhj849f",
    "name": "California College for Health Sciences"
  },
  {
    "key": "_r3b61wjq2",
    "name": "California College of Podiatric Medicine"
  },
  {
    "key": "_109dar0a9",
    "name": "California Institute of the Arts"
  },
  {
    "key": "_f0nlmkk6c",
    "name": "California Institute for Human Science"
  },
  {
    "key": "_1ncm183z4",
    "name": "California Institute of Integral Studies"
  },
  {
    "key": "_6io9w3xsu",
    "name": "California Institute of Technology"
  },
  {
    "key": "_ppkfn5yw8",
    "name": "California Lutheran University"
  },
  {
    "key": "_11m1axhb3",
    "name": "The California Maritime Academy"
  },
  {
    "key": "_ir89n66mc",
    "name": "California National University for Advanced Studies"
  },
  {
    "key": "_jwsndfe1j",
    "name": "California Pacific University"
  },
  {
    "key": "_dnc12vjwc",
    "name": "California Polytechnic State University, San Luis Obispo"
  },
  {
    "key": "_0u997k5q8",
    "name": "California State Polytechnic University, Pomona"
  },
  {
    "key": "_xjd8ya8s6",
    "name": "California State University, Bakersfield"
  },
  {
    "key": "_7ws7n3t26",
    "name": "California State University, Channel Islands"
  },
  {
    "key": "_m9ztjztgt",
    "name": "California State University, Chico"
  },
  {
    "key": "_l94p1ucpn",
    "name": "California State University, Dominguez Hills"
  },
  {
    "key": "_bewfhsuk6",
    "name": "California State University, Fresno"
  },
  {
    "key": "_hmga55olh",
    "name": "California State University, Fullerton"
  },
  {
    "key": "_zw9zx9l07",
    "name": "California State University, Hayward"
  },
  {
    "key": "_n5rrz77tw",
    "name": "California State University, Long Beach"
  },
  {
    "key": "_o1ds558sn",
    "name": "California State University, Los Angeles"
  },
  {
    "key": "_jr2faemyz",
    "name": "California State University, Monterey"
  },
  {
    "key": "_v66l4fc35",
    "name": "California State University, Northridge"
  },
  {
    "key": "_21q71ldi7",
    "name": "California State University, Sacramento"
  },
  {
    "key": "_1e113kmeo",
    "name": "California State University, San Bernardino"
  },
  {
    "key": "_x89g7095z",
    "name": "California State University, San Marcos"
  },
  {
    "key": "_uwrfsz2lk",
    "name": "California State University, Stanislaus"
  },
  {
    "key": "_qc102hn0j",
    "name": "California University of Pennsylvania"
  },
  {
    "key": "_vq232uv2f",
    "name": "Calumet College of St. Joseph"
  },
  {
    "key": "_yyx04d7m6",
    "name": "Calvin College"
  },
  {
    "key": "_pvos01h2y",
    "name": "Cambridge College"
  },
  {
    "key": "_py0jo5ily",
    "name": "Cameron University"
  },
  {
    "key": "_ertl27mri",
    "name": "Campbell University"
  },
  {
    "key": "_5cwgrhbf6",
    "name": "Campbellsville University"
  },
  {
    "key": "_xh216vpwi",
    "name": "Canisius College"
  },
  {
    "key": "_abbj9qq00",
    "name": "Canyon College"
  },
  {
    "key": "_hhi6xqbbh",
    "name": "Capella University"
  },
  {
    "key": "_iasoq3s90",
    "name": "Capital University"
  },
  {
    "key": "_i5r1wmxpt",
    "name": "Capitol College"
  },
  {
    "key": "_fjyost74x",
    "name": "Cardinal Stritch University"
  },
  {
    "key": "_7v5t9vbiu",
    "name": "Carleton College"
  },
  {
    "key": "_2lxirei46",
    "name": "Carlos Albizu University"
  },
  {
    "key": "_a183w1bdi",
    "name": "Carlow College"
  },
  {
    "key": "_bs2sw3855",
    "name": "Carnegie Institution of Washington"
  },
  {
    "key": "_hohbuf5rc",
    "name": "Carnegie Mellon University"
  },
  {
    "key": "_8kbjw95sz",
    "name": "Carrol University"
  },
  {
    "key": "_0qzpiacrt",
    "name": "Carroll College, Helena, MT"
  },
  {
    "key": "_za0ikh0k1",
    "name": "Carson-Newman College"
  },
  {
    "key": "_tkasr4499",
    "name": "Carthage College"
  },
  {
    "key": "_mkbli1cw3",
    "name": "Case Western Reserve University"
  },
  {
    "key": "_8eb55h9u4",
    "name": "Castleton State College"
  },
  {
    "key": "_oc6slc8a4",
    "name": "Catawba College"
  },
  {
    "key": "_qgz4mi2jt",
    "name": "The Catholic University of America"
  },
  {
    "key": "_dqf9eg7jr",
    "name": "Cazenovia College"
  },
  {
    "key": "_bz2x8ami6",
    "name": "Cedar Crest College"
  },
  {
    "key": "_s4vuk5brs",
    "name": "Cedarville University"
  },
  {
    "key": "_08lm3dg1l",
    "name": "Centenary College of Louisiana"
  },
  {
    "key": "_9wlux80nq",
    "name": "Centenary College of New Jersey"
  },
  {
    "key": "_hx9hg27d2",
    "name": "Center for Creative Studies College of Art and Design"
  },
  {
    "key": "_jrnlsetmi",
    "name": "Central Bible College"
  },
  {
    "key": "_ue0gzfrt7",
    "name": "Central Christian College of the Bible"
  },
  {
    "key": "_zrwybdj3m",
    "name": "Central Christian College of Kansas"
  },
  {
    "key": "_wt8974z8l",
    "name": "Central College"
  },
  {
    "key": "_ybuzo4tov",
    "name": "Central Connecticut State University"
  },
  {
    "key": "_toxzgtdrh",
    "name": "Central Methodist College"
  },
  {
    "key": "_hjvqieapc",
    "name": "Central Michigan University"
  },
  {
    "key": "_wk9hzkgv8",
    "name": "Central Missouri State University"
  },
  {
    "key": "_8bevzir4c",
    "name": "Central Pennsylvania College"
  },
  {
    "key": "_94a2s0ooj",
    "name": "Central State University"
  },
  {
    "key": "_j8u1bpzz0",
    "name": "Central Washington University"
  },
  {
    "key": "_np61z4clv",
    "name": "Centre College, Danville Kentucky"
  },
  {
    "key": "_5xad6dp7w",
    "name": "Century University"
  },
  {
    "key": "_8pn2enjn0",
    "name": "Chadron State College"
  },
  {
    "key": "_8dbhvqngw",
    "name": "Chadwick University"
  },
  {
    "key": "_gottxporc",
    "name": "Chaminade University of Honolulu, Hawaii"
  },
  {
    "key": "_5ik9bsoig",
    "name": "Champlain College"
  },
  {
    "key": "_mpg62rkz1",
    "name": "Chapman University"
  },
  {
    "key": "_640ic3rzi",
    "name": "Charles R. Drew University of Medicine and Science"
  },
  {
    "key": "_w947boboh",
    "name": "Charleston Southern"
  },
  {
    "key": "_1oswmnbfb",
    "name": "Charter Oak State College"
  },
  {
    "key": "_a83vee4hc",
    "name": "Chatham College"
  },
  {
    "key": "_vj874fl7z",
    "name": "Cheyney University of Pennsylvania"
  },
  {
    "key": "_n7ot5sxny",
    "name": "Chicago-Kent College of Law"
  },
  {
    "key": "_3grz29yeb",
    "name": "Chicago School of Professional Psychology"
  },
  {
    "key": "_urex7wske",
    "name": "Chicago State University"
  },
  {
    "key": "_aca7hihkg",
    "name": "Chowan College"
  },
  {
    "key": "_bo6kcdoiv",
    "name": "Christendom College"
  },
  {
    "key": "_yvibl9nc1",
    "name": "Christian Bible College and Seminary"
  },
  {
    "key": "_31cjdxlh4",
    "name": "Christian Brothers University"
  },
  {
    "key": "_ki2iye141",
    "name": "Christopher Newport University"
  },
  {
    "key": "_rasn19md7",
    "name": "Circleville Bible College"
  },
  {
    "key": "_x39rnqo75",
    "name": "The Citadel"
  },
  {
    "key": "_ycyyosks8",
    "name": "City Colleges of Chicago"
  },
  {
    "key": "_j5u6vhvhs",
    "name": "City University, Bellevue Washington"
  },
  {
    "key": "_xcxwrim9z",
    "name": "City University of Los Angeles"
  },
  {
    "key": "_ahz9qoftm",
    "name": "City University of New York"
  },
  {
    "key": "_xt23oe3bk",
    "name": "Claflin College"
  },
  {
    "key": "_zzwmbemkf",
    "name": "Claremont Graduate University"
  },
  {
    "key": "_0hqhqfxex",
    "name": "Claremont McKenna College"
  },
  {
    "key": "_tvti6rpwf",
    "name": "Clarion University"
  },
  {
    "key": "_8ixc85s6x",
    "name": "Clark Atlanta University"
  },
  {
    "key": "_te3lhz4w0",
    "name": "Clark College"
  },
  {
    "key": "_tm33z7oek",
    "name": "Clark University"
  },
  {
    "key": "_ro1dw5sh1",
    "name": "Clarke College"
  },
  {
    "key": "_dw5zzyw4u",
    "name": "Clarkson University"
  },
  {
    "key": "_gbh5hu434",
    "name": "Clayton College and State University"
  },
  {
    "key": "_oaurqtzc5",
    "name": "Clayton College of Natural Health"
  },
  {
    "key": "_vxp2zojgm",
    "name": "Clemson University"
  },
  {
    "key": "_zsrlyrl9c",
    "name": "Clear Creek Baptist Bible College"
  },
  {
    "key": "_hxiv229bf",
    "name": "Clearwater Christian College"
  },
  {
    "key": "_v3mhgizjm",
    "name": "Cleary University"
  },
  {
    "key": "_nzj3uqkzc",
    "name": "Cleveland Chiropractic College"
  },
  {
    "key": "_gatqdszc5",
    "name": "Cleveland Institute of Art"
  },
  {
    "key": "_auoxsw4lv",
    "name": "Cleveland Institute of Music"
  },
  {
    "key": "_b3gpsnn6z",
    "name": "Cleveland State University"
  },
  {
    "key": "_i9ovgtjev",
    "name": "Clinch Valley College"
  },
  {
    "key": "_broq8jxwj",
    "name": "Coastal Carolina University"
  },
  {
    "key": "_ouf8vqips",
    "name": "Coe College"
  },
  {
    "key": "_p7s06r061",
    "name": "Cogswell Polytechnical College"
  },
  {
    "key": "_fjyoedyvi",
    "name": "Coker College"
  },
  {
    "key": "_10qnob9qm",
    "name": "Colby College"
  },
  {
    "key": "_pkb7cpsyd",
    "name": "Colby-Sawyer College"
  },
  {
    "key": "_te3t19ua7",
    "name": "Colgate University"
  },
  {
    "key": "_dx903ifl7",
    "name": "Coleman College"
  },
  {
    "key": "_txxyjgtx2",
    "name": "College of the Atlantic"
  },
  {
    "key": "_8x7zn96m3",
    "name": "College of Charleston"
  },
  {
    "key": "_0467a67ul",
    "name": "College of Eastern Utah"
  },
  {
    "key": "_02cdh4ltc",
    "name": "College of the Holy Cross"
  },
  {
    "key": "_jb4yt6m8q",
    "name": "College of Idaho"
  },
  {
    "key": "_9dc31vogl",
    "name": "The College of Insurance"
  },
  {
    "key": "_rps2p0ixo",
    "name": "The College of Metaphysical Studies"
  },
  {
    "key": "_4msoqq5ol",
    "name": "College Misericordia"
  },
  {
    "key": "_6y2yx2nlw",
    "name": "College of Mount Saint Joseph"
  },
  {
    "key": "_zohhjxrj4",
    "name": "College of Mount Saint Vincent"
  },
  {
    "key": "_w5qxjm5f9",
    "name": "The College of New Jersey"
  },
  {
    "key": "_mv1y10bkq",
    "name": "College of New Rochelle"
  },
  {
    "key": "_510d2f2ka",
    "name": "College of Notre Dame of Maryland"
  },
  {
    "key": "_cnabh38l3",
    "name": "College of the Ozarks"
  },
  {
    "key": "_4s0wq4tg2",
    "name": "College of Saint Benedict"
  },
  {
    "key": "_355uar315",
    "name": "College of Saint Catherine"
  },
  {
    "key": "_p9y703kab",
    "name": "College of Saint Elizabeth"
  },
  {
    "key": "_sdimgr4n3",
    "name": "College of Saint Joseph"
  },
  {
    "key": "_p90rase5p",
    "name": "College of Saint Mary"
  },
  {
    "key": "_xay99bzhu",
    "name": "College of Saint Scholastica"
  },
  {
    "key": "_n7iahbz2g",
    "name": "The College of Saint Thomas More"
  },
  {
    "key": "_diqcwic1r",
    "name": "The College of Saint Rose"
  },
  {
    "key": "_dgy0z90st",
    "name": "The College of Santa Fe"
  },
  {
    "key": "_0tg4afzz9",
    "name": "College of William and Mary"
  },
  {
    "key": "_ff4ywkb39",
    "name": "The College of Wooster"
  },
  {
    "key": "_5ghzw2opg",
    "name": "Colorado Christian University"
  },
  {
    "key": "_81lsm3f27",
    "name": "Colorado College"
  },
  {
    "key": "_4ksnjb8a3",
    "name": "Colorado School of Mines"
  },
  {
    "key": "_w7irpar49",
    "name": "Colorado State University"
  },
  {
    "key": "_0p8nn91kv",
    "name": "Colorado State - Pueblo"
  },
  {
    "key": "_idwhss22v",
    "name": "Colorado Technical University"
  },
  {
    "key": "_8hla1bdpz",
    "name": "Columbia College"
  },
  {
    "key": "_em3dkq9cm",
    "name": "Columbia College, South Carolina"
  },
  {
    "key": "_8dlhbsjja",
    "name": "Columbia College of Missouri"
  },
  {
    "key": "_huaow2ht5",
    "name": "Columbia International University"
  },
  {
    "key": "_e0cwgr4ub",
    "name": "Columbia Southern University"
  },
  {
    "key": "_j1uznuqoz",
    "name": "Columbia Union College"
  },
  {
    "key": "_ks5iaf7db",
    "name": "Columbia University"
  },
  {
    "key": "_g202k8g2k",
    "name": "Columbus College of Art and Design"
  },
  {
    "key": "_x4dvjv5wt",
    "name": "Columbus State University"
  },
  {
    "key": "_mbwtwn4kh",
    "name": "Concord College"
  },
  {
    "key": "_z2ebe40e6",
    "name": "Concordia College, Ann Arbor Michigan"
  },
  {
    "key": "_05qp9twfw",
    "name": "Concordia College, Austin Texas"
  },
  {
    "key": "_3lltfb7dg",
    "name": "Concordia College, Bronxville, New York"
  },
  {
    "key": "_fjvrvzo4y",
    "name": "Concordia College, Moorhead Minnesota"
  },
  {
    "key": "_2m72d9w3k",
    "name": "Concordia College, Saint Paul Minnesota"
  },
  {
    "key": "_6hmayah5w",
    "name": "Concordia College, Selma Alabama"
  },
  {
    "key": "_9x3y3c8g3",
    "name": "Concordia College, Seward Nebraska"
  },
  {
    "key": "_0qziqe48a",
    "name": "Concordia University, Irvine California"
  },
  {
    "key": "_3rgjoajth",
    "name": "Concordia University, Mequon Wisconsin"
  },
  {
    "key": "_4vvrjfvmu",
    "name": "Concordia University, Portland Oregon"
  },
  {
    "key": "_y0qqsrg1t",
    "name": "Concordia University, Chicago"
  },
  {
    "key": "_vlohf45ks",
    "name": "Connecticut College"
  },
  {
    "key": "_fqc2iz9z5",
    "name": "Converse College"
  },
  {
    "key": "_m0q4yrmr4",
    "name": "Conway School of Landscape Design"
  },
  {
    "key": "_rxrv0dhoj",
    "name": "Cooper Union for the Advancement of Science and Art"
  },
  {
    "key": "_kumckcb42",
    "name": "Coppin State College"
  },
  {
    "key": "_bk2az191g",
    "name": "Cornell College, Iowa"
  },
  {
    "key": "_xixk8l0wz",
    "name": "Corcoran College of Art + Design"
  },
  {
    "key": "_17gv2w2as",
    "name": "Cornell University"
  },
  {
    "key": "_0b072d7n6",
    "name": "Cornerstone University"
  },
  {
    "key": "_vk3eaj8oh",
    "name": "Cornish College of the Arts"
  },
  {
    "key": "_qjiviuhlx",
    "name": "Cottey College"
  },
  {
    "key": "_3hhwwa121",
    "name": "Covenant College"
  },
  {
    "key": "_v2w4t8awk",
    "name": "Creighton University"
  },
  {
    "key": "_ezonly61g",
    "name": "Crichton College"
  },
  {
    "key": "_v1091lsen",
    "name": "Crossroads College"
  },
  {
    "key": "_hn03k69dl",
    "name": "Crown College"
  },
  {
    "key": "_z9x8cqk4c",
    "name": "Culver-Stockton College"
  },
  {
    "key": "_s8ew6kzqr",
    "name": "Cumberland College"
  },
  {
    "key": "_21ohciez3",
    "name": "Cumberland University"
  },
  {
    "key": "_76u553ghr",
    "name": "Curry College"
  },
  {
    "key": "_p634yr25n",
    "name": "Cypress College"
  },
  {
    "key": "_slok69p96",
    "name": "Daemen College"
  },
  {
    "key": "_kgpp21krz",
    "name": "Dakota State University"
  },
  {
    "key": "_a0cjr6ikz",
    "name": "Dakota Wesleyan University"
  },
  {
    "key": "_6h0m79uh6",
    "name": "Dallas Baptist University"
  },
  {
    "key": "_8utp3qv2b",
    "name": "Dallas Theological Seminary"
  },
  {
    "key": "_r58f7q79r",
    "name": "Dana College"
  },
  {
    "key": "_7bsx61yrg",
    "name": "Daniel Webster College"
  },
  {
    "key": "_xhl0uvg8w",
    "name": "Dartmouth College"
  },
  {
    "key": "_2sahr8o4l",
    "name": "Davenport College"
  },
  {
    "key": "_1m7vaiyfh",
    "name": "Davidson College"
  },
  {
    "key": "_ivbwpycsk",
    "name": "Davis and Elkins College"
  },
  {
    "key": "_xozry0alc",
    "name": "Davis College"
  },
  {
    "key": "_6aysm8jz8",
    "name": "Dawson College"
  },
  {
    "key": "_atbfzm2mi",
    "name": "Dean College"
  },
  {
    "key": "_50mrad8kg",
    "name": "Deep Springs College"
  },
  {
    "key": "_2dnqidhuo",
    "name": "Defiance College"
  },
  {
    "key": "_5uqqo3zs9",
    "name": "Delaware State University"
  },
  {
    "key": "_2g3g04c7l",
    "name": "Delaware Valley College"
  },
  {
    "key": "_jlvv5hxkn",
    "name": "Delta College"
  },
  {
    "key": "_1uonzrub2",
    "name": "Delta State University"
  },
  {
    "key": "_g2k433wtz",
    "name": "Denison University"
  },
  {
    "key": "_ycc1aktlz",
    "name": "Denver Seminary"
  },
  {
    "key": "_t3epvtnu7",
    "name": "DePaul University"
  },
  {
    "key": "_5swos5km2",
    "name": "DePauw University"
  },
  {
    "key": "_mwgz7hd9q",
    "name": "DeSales University"
  },
  {
    "key": "_8nzyee6ly",
    "name": "DeVry University"
  },
  {
    "key": "_7mqzxwvl2",
    "name": "DeVry University, Columbus"
  },
  {
    "key": "_7k1p3vnam",
    "name": "Diablo Valley College"
  },
  {
    "key": "_gtfwokle0",
    "name": "Dickinson College"
  },
  {
    "key": "_12168x2yr",
    "name": "Dickinson State University"
  },
  {
    "key": "_hyhxm7jgb",
    "name": "Digital Media Arts College"
  },
  {
    "key": "_flbrq43d3",
    "name": "Dillard University"
  },
  {
    "key": "_b8ulnkkwa",
    "name": "Dixie State College"
  },
  {
    "key": "_7vio1okao",
    "name": "Doane College"
  },
  {
    "key": "_fbeo8952p",
    "name": "Dominican College"
  },
  {
    "key": "_wv53dnsi5",
    "name": "Dominican University"
  },
  {
    "key": "_vb9nmqujm",
    "name": "Dominican University of California"
  },
  {
    "key": "_xy1onlmgo",
    "name": "Dordt College"
  },
  {
    "key": "_h2hfh5rmp",
    "name": "Dowling College"
  },
  {
    "key": "_o5olgvddn",
    "name": "Drake University"
  },
  {
    "key": "_tycy9wivc",
    "name": "Drew University"
  },
  {
    "key": "_ymcdx8wl5",
    "name": "Drexel University"
  },
  {
    "key": "_yg26eenb4",
    "name": "Drury University"
  },
  {
    "key": "_5yujojua4",
    "name": "Duke University"
  },
  {
    "key": "_epj9dmpjr",
    "name": "Duquesne University"
  },
  {
    "key": "_pfrv7dxyx",
    "name": "D'Youville College"
  },
  {
    "key": "_j2zgnnvq6",
    "name": "Earlham College"
  },
  {
    "key": "_x6lgy0fgm",
    "name": "East Carolina University"
  },
  {
    "key": "_s8c6xtsy9",
    "name": "East Central University, Ada Oklahoma"
  },
  {
    "key": "_5rfomgfrh",
    "name": "East Stroudsburg State University"
  },
  {
    "key": "_izwvkqhva",
    "name": "East Tennessee State University"
  },
  {
    "key": "_pyu7arb8l",
    "name": "East Texas Baptist University"
  },
  {
    "key": "_ef3i7y4ey",
    "name": "East-West University"
  },
  {
    "key": "_4noqpqy46",
    "name": "Eastern College"
  },
  {
    "key": "_dxpzly7r3",
    "name": "Eastern Connecticut State University"
  },
  {
    "key": "_qr2axnsvz",
    "name": "Eastern Illinois University"
  },
  {
    "key": "_o5vof5tnt",
    "name": "Eastern Kentucky University"
  },
  {
    "key": "_7ejug99ba",
    "name": "Eastern Mennonite University"
  },
  {
    "key": "_9jhdun1wg",
    "name": "Eastern Michigan University"
  },
  {
    "key": "_1kjtcwmbk",
    "name": "Eastern Nazarene College"
  },
  {
    "key": "_ov2kcf4tw",
    "name": "Eastern New Mexico University"
  },
  {
    "key": "_vutl0fb2j",
    "name": "Eastern Oregon University"
  },
  {
    "key": "_ue27xg44u",
    "name": "Eastern Washington University"
  },
  {
    "key": "_zkywdvd6h",
    "name": "Eckerd College"
  },
  {
    "key": "_wgw3yejjr",
    "name": "Edgewood College"
  },
  {
    "key": "_1h73686wl",
    "name": "Edinboro University of Pennsylvania"
  },
  {
    "key": "_fv7agr3xp",
    "name": "Edward Waters College"
  },
  {
    "key": "_dnbum038y",
    "name": "Elizabeth City State University"
  },
  {
    "key": "_3l5hlbopp",
    "name": "Elizabethtown College"
  },
  {
    "key": "_rq67lsgpu",
    "name": "Elmhurst College"
  },
  {
    "key": "_8yfmadg6l",
    "name": "Elmira College"
  },
  {
    "key": "_v3hh7qd2x",
    "name": "Elms College"
  },
  {
    "key": "_amm20a53n",
    "name": "Elon University"
  },
  {
    "key": "_wzvi8x760",
    "name": "Embry-Riddle Aeronautical University"
  },
  {
    "key": "_di6yflq27",
    "name": "Emerson College"
  },
  {
    "key": "_atrt3gx86",
    "name": "Emmanuel College"
  },
  {
    "key": "_vpqkgyx4m",
    "name": "Emmaus Bible College"
  },
  {
    "key": "_3039jjurr",
    "name": "Emory University"
  },
  {
    "key": "_4hkmrcnq1",
    "name": "Emory & Henry College"
  },
  {
    "key": "_7avhw9xo4",
    "name": "Empire State College"
  },
  {
    "key": "_dtuyzx494",
    "name": "Emporia State University"
  },
  {
    "key": "_f903jhcaw",
    "name": "Endicott College"
  },
  {
    "key": "_1ezjxlklv",
    "name": "Erskine College"
  },
  {
    "key": "_ezpu4pk6u",
    "name": "Eureka College"
  },
  {
    "key": "_v8j13raxw",
    "name": "Evangel University"
  },
  {
    "key": "_ekrbmbj16",
    "name": "Everglades University"
  },
  {
    "key": "_2vkixdu6o",
    "name": "Evergreen State College"
  },
  {
    "key": "_0wbg4r6qn",
    "name": "Excelsior College"
  },
  {
    "key": "_9jxo04y2y",
    "name": "Fairfield University"
  },
  {
    "key": "_lwzf1xnkj",
    "name": "Fairleigh Dickinson University"
  },
  {
    "key": "_eu21s90d9",
    "name": "Fairmont State College"
  },
  {
    "key": "_9feguofzv",
    "name": "Faith Baptist Bible College and Theological Seminary"
  },
  {
    "key": "_zie5fj2v5",
    "name": "Faulkner University"
  },
  {
    "key": "_nfjnus6ww",
    "name": "Fayetteville State University"
  },
  {
    "key": "_l2qwg0deb",
    "name": "Felician College"
  },
  {
    "key": "_7dv8tz9ih",
    "name": "Ferris State University"
  },
  {
    "key": "_hcdgfo8de",
    "name": "Ferrum College"
  },
  {
    "key": "_uvsn24h9f",
    "name": "Fielding Graduate University"
  },
  {
    "key": "_afiooupz2",
    "name": "Finch University of Health Sciences/The Chicago Medical School"
  },
  {
    "key": "_340w97lwm",
    "name": "Finlandia University"
  },
  {
    "key": "_r8q2obrm4",
    "name": "Fisk University"
  },
  {
    "key": "_xsgsz3u12",
    "name": "Fitchburg State College"
  },
  {
    "key": "_7glotst7t",
    "name": "Flagler College"
  },
  {
    "key": "_4xws1bqzm",
    "name": "Florida A & M University"
  },
  {
    "key": "_twkuf1ujm",
    "name": "Florida Atlantic University"
  },
  {
    "key": "_82bbbllwz",
    "name": "Florida Christian College"
  },
  {
    "key": "_nx3zrlcpr",
    "name": "Florida College"
  },
  {
    "key": "_t7ykcolsn",
    "name": "Florida Gulf Coast University"
  },
  {
    "key": "_0bei5cwrc",
    "name": "Florida Institute of Technology"
  },
  {
    "key": "_2xqibsp36",
    "name": "Florida International University"
  },
  {
    "key": "_ghvury94q",
    "name": "Florida Memorial College"
  },
  {
    "key": "_pze7v2qgs",
    "name": "Florida Metropolitan University"
  },
  {
    "key": "_zu1c4gqh2",
    "name": "Florida Southern College"
  },
  {
    "key": "_cpl9w95bc",
    "name": "Florida State University"
  },
  {
    "key": "_koeld15sc",
    "name": "Fontbonne University"
  },
  {
    "key": "_bw9zy62ao",
    "name": "Fordham University"
  },
  {
    "key": "_rh6ppqg3m",
    "name": "Forest Institute of Professional Psychology"
  },
  {
    "key": "_vr3h42sju",
    "name": "Fort Hays State University"
  },
  {
    "key": "_nezuj8881",
    "name": "Fort Lewis College"
  },
  {
    "key": "_34fvme1xq",
    "name": "Fort Valley State University"
  },
  {
    "key": "_vkqkv5ifc",
    "name": "Framingham State College"
  },
  {
    "key": "_s4ij9qwe0",
    "name": "Francis Marion University"
  },
  {
    "key": "_3501fc46f",
    "name": "Franciscan University of Steubenville"
  },
  {
    "key": "_jg7dkpd58",
    "name": "Franklin and Marshall College"
  },
  {
    "key": "_83ochb5dd",
    "name": "Franklin College"
  },
  {
    "key": "_h0tnc8rsr",
    "name": "Franklin Pierce University"
  },
  {
    "key": "_7k4th6reg",
    "name": "Franklin Pierce Law Center"
  },
  {
    "key": "_ht161ytss",
    "name": "Franklin University"
  },
  {
    "key": "_53ou6wcad",
    "name": "Franklin W. Olin College of Engineering"
  },
  {
    "key": "_yifofuzn4",
    "name": "Freed-Hardeman University"
  },
  {
    "key": "_zqbthzd18",
    "name": "Freewill Baptist Bible College"
  },
  {
    "key": "_hl1tu9rl6",
    "name": "Fresno Pacific University"
  },
  {
    "key": "_96vn08sw2",
    "name": "Friends University"
  },
  {
    "key": "_2t1z5h16i",
    "name": "Frostburg State University"
  },
  {
    "key": "_v4a7nv4kx",
    "name": "Full Sail University"
  },
  {
    "key": "_zvnjaabd3",
    "name": "Fuller Theological Seminary"
  },
  {
    "key": "_y1yql9aka",
    "name": "Fullerton College"
  },
  {
    "key": "_wcqnpuhv2",
    "name": "Furman University"
  },
  {
    "key": "_cvj5tjg0i",
    "name": "Gallaudet University"
  },
  {
    "key": "_rmyxgy9vf",
    "name": "Gannon University"
  },
  {
    "key": "_n7s5j53pc",
    "name": "Gardner-Webb University"
  },
  {
    "key": "_utcrir6ew",
    "name": "Geneva College"
  },
  {
    "key": "_2f0uhozfb",
    "name": "George Fox University"
  },
  {
    "key": "_2us3lzu8j",
    "name": "George Mason University"
  },
  {
    "key": "_fgtae3ufa",
    "name": "George Washington University"
  },
  {
    "key": "_5th9nyj82",
    "name": "Georgetown College"
  },
  {
    "key": "_x3fd2v8uf",
    "name": "Georgetown University"
  },
  {
    "key": "_90bhd8t86",
    "name": "Georgian Court College"
  },
  {
    "key": "_2xtzg5hcm",
    "name": "Georgia College and State University"
  },
  {
    "key": "_q7z10ny9r",
    "name": "Georgia Institute of Technology"
  },
  {
    "key": "_ufj5nvr63",
    "name": "Georgia Perimeter College"
  },
  {
    "key": "_wrt6o68wx",
    "name": "Georgia Southern University"
  },
  {
    "key": "_tz4ayhmbg",
    "name": "Georgia Southwestern State University"
  },
  {
    "key": "_bzf1p4lt7",
    "name": "Georgia State University"
  },
  {
    "key": "_6ernnmacn",
    "name": "Georgian Court College"
  },
  {
    "key": "_qjy5ovlf1",
    "name": "Gettysburg College"
  },
  {
    "key": "_19ht0r28s",
    "name": "Globe University"
  },
  {
    "key": "_u9hkta5mo",
    "name": "Glenville State College"
  },
  {
    "key": "_xorck9n9e",
    "name": "Globe Institute of Technology"
  },
  {
    "key": "_8blujojql",
    "name": "Goddard College"
  },
  {
    "key": "_az7lm1dah",
    "name": "Golden Gate University"
  },
  {
    "key": "_fjhqnc08n",
    "name": "Golden State Baptist College"
  },
  {
    "key": "_povwulq8a",
    "name": "Goldey-Beacom College"
  },
  {
    "key": "_68n9d1v8n",
    "name": "Gonzaga University"
  },
  {
    "key": "_39y8x8szi",
    "name": "Gooding Institute of Nurse Anesthesia"
  },
  {
    "key": "_lm6o80m51",
    "name": "Gordon College"
  },
  {
    "key": "_s0sgmvlxb",
    "name": "Gordon-Conwell Theological Seminary"
  },
  {
    "key": "_rpv7xkroo",
    "name": "Goshen College"
  },
  {
    "key": "_npyil7ttd",
    "name": "Goucher College"
  },
  {
    "key": "_cz7xzlfli",
    "name": "Governors State University"
  },
  {
    "key": "_cmrloi8tn",
    "name": "Grace College"
  },
  {
    "key": "_1w3g57b07",
    "name": "Grace University"
  },
  {
    "key": "_55fzk14qz",
    "name": "Graceland University"
  },
  {
    "key": "_cw5ykn616",
    "name": "The Graduate Center, City University of New York"
  },
  {
    "key": "_lsemd9hbl",
    "name": "Grambling State University"
  },
  {
    "key": "_s4jta43ot",
    "name": "Grand Canyon University"
  },
  {
    "key": "_fwn9a49cq",
    "name": "Grand Valley State University"
  },
  {
    "key": "_mhkbe65dn",
    "name": "Grand View College"
  },
  {
    "key": "_3adnflg4u",
    "name": "Granite State College"
  },
  {
    "key": "_9pwvmzwwk",
    "name": "Grantham University"
  },
  {
    "key": "_rsliypj3o",
    "name": "Great Lakes Maritime Academy"
  },
  {
    "key": "_sjwsa4dnn",
    "name": "Green Mountain College"
  },
  {
    "key": "_9dkr3rfgc",
    "name": "Greenleaf University"
  },
  {
    "key": "_gomejnjmo",
    "name": "Greensboro College"
  },
  {
    "key": "_wuzpl3lqn",
    "name": "Greenville College"
  },
  {
    "key": "_uokhmtu3s",
    "name": "Greenwich University"
  },
  {
    "key": "_qxt3azwkp",
    "name": "Grinnell College"
  },
  {
    "key": "_ab15s7e7v",
    "name": "Grove City College"
  },
  {
    "key": "_hlgg91ucw",
    "name": "Guilford College"
  },
  {
    "key": "_h231a923b",
    "name": "Gustavus Adolphus College, Saint Peter, Minnesota"
  },
  {
    "key": "_b8vb9oacv",
    "name": "Gutenberg College"
  },
  {
    "key": "_te1950r4t",
    "name": "Gwynedd-Mercy College"
  },
  {
    "key": "_4yguthmyb",
    "name": "Hamilton College"
  },
  {
    "key": "_i50alzewg",
    "name": "Hamilton University"
  },
  {
    "key": "_k2ihjxntd",
    "name": "Hamline University"
  },
  {
    "key": "_n9cv4f2tu",
    "name": "Hampden-Sydney College"
  },
  {
    "key": "_z2rjl17le",
    "name": "Hampshire College"
  },
  {
    "key": "_swv96hp81",
    "name": "Hampton University"
  },
  {
    "key": "_pxzyk901d",
    "name": "Hannibal-LaGrange College"
  },
  {
    "key": "_0cuh2kjh2",
    "name": "Hanover College"
  },
  {
    "key": "_etse0ovwg",
    "name": "Hardin-Simmons University"
  },
  {
    "key": "_bz29cg5j7",
    "name": "Harding University"
  },
  {
    "key": "_m5nkvqb82",
    "name": "Harrington College of Design"
  },
  {
    "key": "_28lf5w6g6",
    "name": "Harris-Stowe State College"
  },
  {
    "key": "_lfk30kmkf",
    "name": "Hartwick College"
  },
  {
    "key": "_kcdry7e5r",
    "name": "Harvard University"
  },
  {
    "key": "_yv1pjd3sm",
    "name": "Harvey Mudd College"
  },
  {
    "key": "_z7pndguv8",
    "name": "Haskell Indian Nations University"
  },
  {
    "key": "_rdggtzi8u",
    "name": "Hastings College"
  },
  {
    "key": "_ix6luqrkc",
    "name": "Haverford College"
  },
  {
    "key": "_ewynj2cet",
    "name": "Hawaii Pacific University"
  },
  {
    "key": "_abyx1r1ev",
    "name": "Hebrew College"
  },
  {
    "key": "_rbteuklrg",
    "name": "Heidelberg College"
  },
  {
    "key": "_n8s76pazm",
    "name": "Henderson State Univerisity"
  },
  {
    "key": "_hxnfsaa5v",
    "name": "Hendrix College"
  },
  {
    "key": "_495cextsu",
    "name": "Henry Cogswell College"
  },
  {
    "key": "_qje03bgg8",
    "name": "Heritage University"
  },
  {
    "key": "_22niuvi9f",
    "name": "Hesser College"
  },
  {
    "key": "_gouv8sb8f",
    "name": "Hesston College"
  },
  {
    "key": "_u3jbz0q4t",
    "name": "High Point University"
  },
  {
    "key": "_k21f9f7ak",
    "name": "Hilbert College"
  },
  {
    "key": "_t0jncyuax",
    "name": "Hillsdale College"
  },
  {
    "key": "_d44ycysv4",
    "name": "Hillsdale Freewill Baptist College"
  },
  {
    "key": "_2lxz7z8kw",
    "name": "Hiram College"
  },
  {
    "key": "_knx9l5rco",
    "name": "Hobart and William Smith Colleges"
  },
  {
    "key": "_0z99n3x01",
    "name": "Hofstra University"
  },
  {
    "key": "_dx8o9rdaw",
    "name": "Hollins University"
  },
  {
    "key": "_41ifzsl27",
    "name": "Holy Cross College, Notre Dame Indiana"
  },
  {
    "key": "_hjbrmpi3v",
    "name": "Holy Family College"
  },
  {
    "key": "_tqehdlcn1",
    "name": "Holy Names University"
  },
  {
    "key": "_kua9rd66w",
    "name": "Hood College"
  },
  {
    "key": "_7evisg4ng",
    "name": "Hope College"
  },
  {
    "key": "_emmzrc6l4",
    "name": "Houghton College"
  },
  {
    "key": "_zecivpsg3",
    "name": "Houston Baptist University"
  },
  {
    "key": "_ueowefjoc",
    "name": "Howard Payne University"
  },
  {
    "key": "_9augxi9j9",
    "name": "Howard University"
  },
  {
    "key": "_6ocmo3gds",
    "name": "Hult International Business School"
  },
  {
    "key": "_pdoliy9bw",
    "name": "Humboldt State University"
  },
  {
    "key": "_g5i0ktmmb",
    "name": "Hunter College"
  },
  {
    "key": "_jfxoz5aml",
    "name": "Huntingdon College"
  },
  {
    "key": "_mox8sg9cu",
    "name": "Huntington University"
  },
  {
    "key": "_tb7uu7776",
    "name": "Huron University"
  },
  {
    "key": "_0at1aat7h",
    "name": "Husson College"
  },
  {
    "key": "_7tajr4izn",
    "name": "Huston-Tillotson College"
  },
  {
    "key": "_1y8zxfvg6",
    "name": "Idaho State University"
  },
  {
    "key": "_n2h02milh",
    "name": "Illinois College"
  },
  {
    "key": "_j6fguhipb",
    "name": "Illinois Institute of Technology"
  },
  {
    "key": "_ci451btmp",
    "name": "Illinois State University"
  },
  {
    "key": "_ewo57nfdi",
    "name": "Illinois Wesleyan University"
  },
  {
    "key": "_zdbklvbct",
    "name": "Immaculata College"
  },
  {
    "key": "_nbormx4zd",
    "name": "Indiana Institute of Technology"
  },
  {
    "key": "_epkpxs7iv",
    "name": "Indiana State University"
  },
  {
    "key": "_1w6wttkgo",
    "name": "Indiana Wesleyan University"
  },
  {
    "key": "_xqpuw9bay",
    "name": "Indiana University"
  },
  {
    "key": "_yrqj46z4k",
    "name": "Indiana University Northwest"
  },
  {
    "key": "_h4vwzvr7y",
    "name": "Indiana University of Pennsylvania"
  },
  {
    "key": "_mj08b2l8a",
    "name": "Indiana University at South Bend"
  },
  {
    "key": "_xwjvjpsem",
    "name": "Indiana University Southeast"
  },
  {
    "key": "_duajlx7f8",
    "name": "Indiana University - Purdue University, Columbus"
  },
  {
    "key": "_lti374c6u",
    "name": "Indiana University - Purdue University, Fort Wayne"
  },
  {
    "key": "_2pu0zmqco",
    "name": "Indiana University - Purdue University, Indianapolis"
  },
  {
    "key": "_oxdacrk4i",
    "name": "Institute for Christian Works"
  },
  {
    "key": "_r6lpq9oj5",
    "name": "Institute of Computer Technology"
  },
  {
    "key": "_7r4d96qbm",
    "name": "Institute of Paper Science and Technology"
  },
  {
    "key": "_gn50h8tq1",
    "name": "Institute for Transpersonal Psychology"
  },
  {
    "key": "_c1fedbhxn",
    "name": "Inter American University of Puerto Rico"
  },
  {
    "key": "_nfrn9hwok",
    "name": "International College"
  },
  {
    "key": "_tr62s78jc",
    "name": "International Fine Arts College"
  },
  {
    "key": "_3pkv56qga",
    "name": "International Institue of the Americas"
  },
  {
    "key": "_1d9ornptu",
    "name": "International Reform University"
  },
  {
    "key": "_t53t2w0qj",
    "name": "Iona College"
  },
  {
    "key": "_hroil19kl",
    "name": "Iowa State University"
  },
  {
    "key": "_th2anv0e4",
    "name": "Iowa Wesleyan College"
  },
  {
    "key": "_udahdzrn9",
    "name": "Irvine University College of Law"
  },
  {
    "key": "_6kcrx2dys",
    "name": "Ithaca College"
  },
  {
    "key": "_e07gqgpli",
    "name": "Jackson State University"
  },
  {
    "key": "_6ogjrhk2t",
    "name": "Jacksonville State University"
  },
  {
    "key": "_0mhx54iok",
    "name": "Jacksonville University"
  },
  {
    "key": "_06xmronq9",
    "name": "James Madison University"
  },
  {
    "key": "_avxqd11cw",
    "name": "Jamestown College"
  },
  {
    "key": "_tgz9l50g2",
    "name": "Jarvis Christian College"
  },
  {
    "key": "_q8phjb98q",
    "name": "Jewish Theological Seminary"
  },
  {
    "key": "_xcgvv4ddf",
    "name": "John Brown University"
  },
  {
    "key": "_vf8xhfmyz",
    "name": "John Carroll University"
  },
  {
    "key": "_xf6ehsiox",
    "name": "John F. Kennedy University"
  },
  {
    "key": "_vdh2dbl4h",
    "name": "John Jay College of Criminal Justice"
  },
  {
    "key": "_iepxnkwje",
    "name": "The Johns Hopkins University"
  },
  {
    "key": "_3k9ic9ww3",
    "name": "Johnson and Wales University"
  },
  {
    "key": "_41eig16q5",
    "name": "Johnson Bible College"
  },
  {
    "key": "_0aog7sa8q",
    "name": "Johnson C. Smith University"
  },
  {
    "key": "_2kcbl7k9k",
    "name": "Johnson State College"
  },
  {
    "key": "_88mvu12xi",
    "name": "Joint Military Intelligence College"
  },
  {
    "key": "_sxlv4jbwq",
    "name": "Jones College"
  },
  {
    "key": "_jwmtmbkub",
    "name": "Jones International University"
  },
  {
    "key": "_2q2im7bx1",
    "name": "Judson College, Marion AL"
  },
  {
    "key": "_aa2037uwn",
    "name": "Judson College, Elgin IL"
  },
  {
    "key": "_8f1k8rfvg",
    "name": "The Julliard School"
  },
  {
    "key": "_16kmbq31y",
    "name": "Juniata College"
  },
  {
    "key": "_1j1i3mtik",
    "name": "Kalamazoo College"
  },
  {
    "key": "_08ngukdvj",
    "name": "Kansas City Art Institute"
  },
  {
    "key": "_ts7t24khs",
    "name": "Kansas Newman College"
  },
  {
    "key": "_u9p8unezr",
    "name": "Kansas State University"
  },
  {
    "key": "_madj6clay",
    "name": "Kansas Wesleyan University"
  },
  {
    "key": "_s0rn1zvyf",
    "name": "Kaplan University"
  },
  {
    "key": "_ovqap3raj",
    "name": "Kean University"
  },
  {
    "key": "_zvsorgnj6",
    "name": "Keck Graduate Institute"
  },
  {
    "key": "_riz5nc9vr",
    "name": "Keene State College"
  },
  {
    "key": "_s96zgaab3",
    "name": "Keiser University"
  },
  {
    "key": "_l5f0tfver",
    "name": "Kendall College"
  },
  {
    "key": "_9fx31jf83",
    "name": "Kennedy-Western University"
  },
  {
    "key": "_pb514acu3",
    "name": "Kennesaw State University"
  },
  {
    "key": "_y4mhx1jg8",
    "name": "Kent State University"
  },
  {
    "key": "_xvjyzvo9n",
    "name": "Kentucky Christian College"
  },
  {
    "key": "_2t79ccp9s",
    "name": "Kentucky State University"
  },
  {
    "key": "_xx259s51y",
    "name": "Kentucky Wesleyan College"
  },
  {
    "key": "_98ju86cl8",
    "name": "Kenyon College"
  },
  {
    "key": "_qbz4oxci9",
    "name": "Kettering University"
  },
  {
    "key": "_vngde8651",
    "name": "Keuka College"
  },
  {
    "key": "_0zetu25j5",
    "name": "King College"
  },
  {
    "key": "_z3dxjvwi9",
    "name": "King's College, Wilkes-Barre, PA"
  },
  {
    "key": "_59yxutxzr",
    "name": "The King's College, New York City, NY"
  },
  {
    "key": "_yyj4uyco4",
    "name": "Knox College"
  },
  {
    "key": "_o2bs0zjcg",
    "name": "Knox Theological Seminary"
  },
  {
    "key": "_506790py7",
    "name": "Knoxville College"
  },
  {
    "key": "_pvfb51p7y",
    "name": "Kutztown University of Pennsylvania"
  },
  {
    "key": "_c84a33s9o",
    "name": "La Roche College"
  },
  {
    "key": "_0suuk57z3",
    "name": "La Salle University"
  },
  {
    "key": "_mzmurjewg",
    "name": "La Sierra University"
  },
  {
    "key": "_x98zpn86o",
    "name": "Lafayette College"
  },
  {
    "key": "_rxvv8l6bw",
    "name": "LaGrange College"
  },
  {
    "key": "_b1zyg03mm",
    "name": "Lake Erie College"
  },
  {
    "key": "_5eu4qghan",
    "name": "Lake Forest College"
  },
  {
    "key": "_jzxgbkiac",
    "name": "Lake Forest Graduate School of Management"
  },
  {
    "key": "_j6aughm72",
    "name": "Lake Superior State University"
  },
  {
    "key": "_9i7xormyh",
    "name": "Lakeland College"
  },
  {
    "key": "_lv81rpmjc",
    "name": "Lamar University"
  },
  {
    "key": "_ucvaov36f",
    "name": "Lambuth University"
  },
  {
    "key": "_9hgdq5a49",
    "name": "Lancaster Bible College"
  },
  {
    "key": "_aj0wlsqkc",
    "name": "Lancaster Theological Seminary"
  },
  {
    "key": "_rf6pyh58n",
    "name": "Lander University"
  },
  {
    "key": "_458ege4qa",
    "name": "Landmark College"
  },
  {
    "key": "_24hfd124d",
    "name": "Langston University"
  },
  {
    "key": "_46c0rclos",
    "name": "Lane College"
  },
  {
    "key": "_dfb6j2dpo",
    "name": "Lasell College"
  },
  {
    "key": "_i3lbehv3l",
    "name": "Lawrence Technological University"
  },
  {
    "key": "_uvpyfr2u5",
    "name": "Lawrence University"
  },
  {
    "key": "_w5gh1dm30",
    "name": "Le Moyne College"
  },
  {
    "key": "_rzjc50wvl",
    "name": "Lebanon Valley College"
  },
  {
    "key": "_kxamnmni5",
    "name": "Lee College"
  },
  {
    "key": "_g7b0gkvd8",
    "name": "Lee University"
  },
  {
    "key": "_tilc2b1m6",
    "name": "Lees-McRae College"
  },
  {
    "key": "_eulbdxx70",
    "name": "Lehigh Univervsity"
  },
  {
    "key": "_kl52za3cq",
    "name": "Le Moyne College"
  },
  {
    "key": "_18rx8mrpg",
    "name": "LeMoyne-Owen College"
  },
  {
    "key": "_cgumndvre",
    "name": "Lenoir-Rhyne College"
  },
  {
    "key": "_qdme2ni5i",
    "name": "Lenox Institute of Water Technology"
  },
  {
    "key": "_4qkjh9wb6",
    "name": "Lesley University"
  },
  {
    "key": "_lwnasf8fh",
    "name": "LeTourneau University"
  },
  {
    "key": "_7ga8o4t21",
    "name": "Lewis & Clark College"
  },
  {
    "key": "_suwp2teec",
    "name": "Lewis-Clark State College"
  },
  {
    "key": "_rmlh2tck7",
    "name": "Lewis University"
  },
  {
    "key": "_u04htk6xz",
    "name": "Liberty University"
  },
  {
    "key": "_lgli8gqil",
    "name": "Life Pacific College"
  },
  {
    "key": "_9prdntp5d",
    "name": "Life University"
  },
  {
    "key": "_ej5z9tgwk",
    "name": "Limestone College"
  },
  {
    "key": "_bf133rn8y",
    "name": "Lincoln Christian College and Seminary"
  },
  {
    "key": "_2zm4xivw0",
    "name": "Lincoln College"
  },
  {
    "key": "_9on6mfvve",
    "name": "Lincoln Memorial University"
  },
  {
    "key": "_760004nq5",
    "name": "Lincoln University, Jefferson City Missouri"
  },
  {
    "key": "_cqi41ie1i",
    "name": "Lincoln University, San Francisco California"
  },
  {
    "key": "_6lzsqlocx",
    "name": "Lincoln University of Pennsylvania"
  },
  {
    "key": "_2wd6mpnhh",
    "name": "Lindenwood College"
  },
  {
    "key": "_yecu8fna8",
    "name": "Lindsey Wilson College"
  },
  {
    "key": "_wtk2s1w7e",
    "name": "Linfield College"
  },
  {
    "key": "_2s1huepqn",
    "name": "Lipscomb University"
  },
  {
    "key": "_n1bxq6qc9",
    "name": "Lock Haven University"
  },
  {
    "key": "_0oec7dkly",
    "name": "Logan College of Chiropractic"
  },
  {
    "key": "_s9rv710kw",
    "name": "Loma Linda University"
  },
  {
    "key": "_oj93yc9gt",
    "name": "Long Island University"
  },
  {
    "key": "_288tdlwaj",
    "name": "Longwood College"
  },
  {
    "key": "_2tp1skkc0",
    "name": "Loras College"
  },
  {
    "key": "_wq81tzr05",
    "name": "Louisburg College"
  },
  {
    "key": "_e5oeq9lfi",
    "name": "Louisiana Baptist Universty"
  },
  {
    "key": "_nmgwe0zev",
    "name": "Louisiana College"
  },
  {
    "key": "_nb8k0mwil",
    "name": "Louisiana State University at Alexandria"
  },
  {
    "key": "_pbilqd1wv",
    "name": "Louisiana State University at Baton Rouge"
  },
  {
    "key": "_8y8fusrgy",
    "name": "Louisiana State University Health Sciences Center New Orleans"
  },
  {
    "key": "_tq06ixznk",
    "name": "Louisiana State University at Shreveport"
  },
  {
    "key": "_fa6a3t7zp",
    "name": "Louisiana Tech University"
  },
  {
    "key": "_zni3dtvek",
    "name": "Lourdes College"
  },
  {
    "key": "_0u7yow6ut",
    "name": "Loyola College, Baltimore"
  },
  {
    "key": "_aehmqodhu",
    "name": "Loyola Marymount University"
  },
  {
    "key": "_il2by3rle",
    "name": "Loyola University, Chicago"
  },
  {
    "key": "_7z2almsru",
    "name": "Loyola University, New Orleans"
  },
  {
    "key": "_osun4661z",
    "name": "Lubbock Christian University"
  },
  {
    "key": "_29pfjvdzl",
    "name": "Luther College"
  },
  {
    "key": "_ie7e6w7yv",
    "name": "Luther Seminary"
  },
  {
    "key": "_bph98mkvx",
    "name": "Lutheran Bible Institute"
  },
  {
    "key": "_p7f4h8ltk",
    "name": "Lutheran Theological Seminary at Gettysburg"
  },
  {
    "key": "_lb0egemb8",
    "name": "Lycoming College"
  },
  {
    "key": "_daohe8vs7",
    "name": "Lyme Academy of Fine Arts"
  },
  {
    "key": "_y4bepn6gc",
    "name": "Lynchburg College"
  },
  {
    "key": "_fq7n79h4s",
    "name": "Lyndon State College"
  },
  {
    "key": "_mdtvi820g",
    "name": "Lynn University"
  },
  {
    "key": "_wjv4yssyu",
    "name": "Lyon College"
  },
  {
    "key": "_132g08il2",
    "name": "Macalester College"
  },
  {
    "key": "_lujbedlel",
    "name": "MacMurray College"
  },
  {
    "key": "_m7ye4b5u8",
    "name": "Madonna University"
  },
  {
    "key": "_01ad34409",
    "name": "Magdalen College"
  },
  {
    "key": "_poltye9he",
    "name": "Maharishi University of Management"
  },
  {
    "key": "_uzhjmfazg",
    "name": "Maine College of Art"
  },
  {
    "key": "_afndx8ngk",
    "name": "Maine Maritime Academy"
  },
  {
    "key": "_x8ly0hqoa",
    "name": "Malone College"
  },
  {
    "key": "_ktn80lydf",
    "name": "Manchester College"
  },
  {
    "key": "_peylzgte3",
    "name": "Manhattan College"
  },
  {
    "key": "_tro8a96c6",
    "name": "Manhattanville College"
  },
  {
    "key": "_xznn66epm",
    "name": "Mansfield University"
  },
  {
    "key": "_7uoo0xr1r",
    "name": "Maranatha Baptist Bible College"
  },
  {
    "key": "_tv9ryvxgc",
    "name": "Marian College"
  },
  {
    "key": "_1zoajyxfx",
    "name": "Marietta College"
  },
  {
    "key": "_sxm3rwnn4",
    "name": "Marlboro College"
  },
  {
    "key": "_3atx9jhqx",
    "name": "Marlboro College Graduate Center"
  },
  {
    "key": "_bfl0xlqnd",
    "name": "Marist College"
  },
  {
    "key": "_nqgo6gvm8",
    "name": "Marquette University"
  },
  {
    "key": "_1tub17z1q",
    "name": "Mars Hill College"
  },
  {
    "key": "_rgx7ez9zf",
    "name": "Marshall University"
  },
  {
    "key": "_drirus8bs",
    "name": "Mary Baldwin College"
  },
  {
    "key": "_xaoy0w3dr",
    "name": "Marygrove College"
  },
  {
    "key": "_yk9nh5k4f",
    "name": "Maryland Institute, College of Art"
  },
  {
    "key": "_1ah5cjizv",
    "name": "Marylhurst University"
  },
  {
    "key": "_edk593bnu",
    "name": "Marymount College"
  },
  {
    "key": "_8uxluw80n",
    "name": "Marymount Manhattan College"
  },
  {
    "key": "_swa8xi2ji",
    "name": "Marymount University"
  },
  {
    "key": "_tnedo9o3v",
    "name": "Maryville College"
  },
  {
    "key": "_pen5w6isl",
    "name": "Maryville University of Saint Louis"
  },
  {
    "key": "_1lbx35p8i",
    "name": "Marywood University"
  },
  {
    "key": "_s9hov2jjj",
    "name": "Massachusetts College of Art"
  },
  {
    "key": "_8v2zbqbys",
    "name": "Massachusetts College of Liberal Arts"
  },
  {
    "key": "_tchyceytr",
    "name": "Massachusetts College of Pharmacy and Health Sciences"
  },
  {
    "key": "_4o6he7wgj",
    "name": "Massachusetts Institute of Technology"
  },
  {
    "key": "_o50n4zh4i",
    "name": "Massachusetts Maritime Academy"
  },
  {
    "key": "_0d2m7qn05",
    "name": "Massachusetts School of Professional Psychology"
  },
  {
    "key": "_yagj454lz",
    "name": "The Master's College"
  },
  {
    "key": "_v9ch6remi",
    "name": "The Mayo Foundation"
  },
  {
    "key": "_chxw6mhsz",
    "name": "Mayville State University"
  },
  {
    "key": "_sx1ks5dji",
    "name": "McDaniel College"
  },
  {
    "key": "_jrnp9rseb",
    "name": "The McGregor School of Antioch University"
  },
  {
    "key": "_e6zok5mha",
    "name": "McKendree College"
  },
  {
    "key": "_evu6r276e",
    "name": "McMurry University"
  },
  {
    "key": "_y64spxuyf",
    "name": "McNeese State University"
  },
  {
    "key": "_s3tdo85v5",
    "name": "MCP Hahnemann University"
  },
  {
    "key": "_g51tslrut",
    "name": "McPherson College"
  },
  {
    "key": "_0q9644xzt",
    "name": "Medaille College"
  },
  {
    "key": "_7qwc4h1f2",
    "name": "Medical College of Georgia"
  },
  {
    "key": "_5sz8w47sw",
    "name": "Medical College of Ohio"
  },
  {
    "key": "_hn0rwmvo6",
    "name": "Medical College of Pennsylvania and Hahnemann University"
  },
  {
    "key": "_ucsc271xv",
    "name": "Medical College of Wisconsin"
  },
  {
    "key": "_c6bnpgs1j",
    "name": "Medical University of South Carolina"
  },
  {
    "key": "_j2kbdj68l",
    "name": "Meharry Medical College"
  },
  {
    "key": "_53q85i0m7",
    "name": "Menlo College"
  },
  {
    "key": "_f92v6110e",
    "name": "Mercer University"
  },
  {
    "key": "_2aw9ua6g4",
    "name": "Mercy College"
  },
  {
    "key": "_yqaj3h3eo",
    "name": "Mercy College of Health Sciences"
  },
  {
    "key": "_6phhcd4e9",
    "name": "Mercyhurst College"
  },
  {
    "key": "_zd41rrp3h",
    "name": "Meredith College"
  },
  {
    "key": "_0mcomwbqt",
    "name": "Merrimack College"
  },
  {
    "key": "_m6gien5k3",
    "name": "Mesa State College"
  },
  {
    "key": "_amit3wcbd",
    "name": "Messiah College"
  },
  {
    "key": "_4gw8xz3v6",
    "name": "Methodist College"
  },
  {
    "key": "_d53d536zb",
    "name": "Methodist Theological School in Ohio"
  },
  {
    "key": "_7spktbn2c",
    "name": "Metropolitan College"
  },
  {
    "key": "_2p2ved12i",
    "name": "Metropolitan College of New York"
  },
  {
    "key": "_4bsrs5d3w",
    "name": "Metropolitan State College of Denver"
  },
  {
    "key": "_8m7l2y24l",
    "name": "Metropolitan State University"
  },
  {
    "key": "_snf1u1jxx",
    "name": "Miami Christian University"
  },
  {
    "key": "_0l6l5ix7l",
    "name": "Miami University of Ohio"
  },
  {
    "key": "_rdgzwi8aq",
    "name": "Michigan Jewish Institute"
  },
  {
    "key": "_bg1x88ksk",
    "name": "Michigan State University"
  },
  {
    "key": "_wkab1zeh8",
    "name": "Michigan Technological University"
  },
  {
    "key": "_94dx05kiq",
    "name": "Mid-America Nazarene University"
  },
  {
    "key": "_00jtxp0c9",
    "name": "Middle Georgia College"
  },
  {
    "key": "_vzjqdmipm",
    "name": "Middle Tennessee State University"
  },
  {
    "key": "_0najffvnd",
    "name": "Middlebury College"
  },
  {
    "key": "_q43vutksb",
    "name": "Midwestern Baptist College"
  },
  {
    "key": "_41ej2ekkx",
    "name": "Midwestern State University"
  },
  {
    "key": "_02kuwe0o1",
    "name": "Miles College"
  },
  {
    "key": "_2ur607qy7",
    "name": "Millersville University"
  },
  {
    "key": "_sg4lkjblo",
    "name": "Milligan College"
  },
  {
    "key": "_m7jbk3vm5",
    "name": "Millikin University"
  },
  {
    "key": "_tdwp2w0yz",
    "name": "Mills College"
  },
  {
    "key": "_t0i4olcri",
    "name": "Millsaps College"
  },
  {
    "key": "_794wjn2pj",
    "name": "Milwaukee School of Engineering"
  },
  {
    "key": "_2kistv1h7",
    "name": "Minneapolis College of Art and Design"
  },
  {
    "key": "_9g9dg1dyw",
    "name": "Minnesota State University Mankato"
  },
  {
    "key": "_5rdr148rt",
    "name": "Minnesota State University Moorhead"
  },
  {
    "key": "_ja4j7894s",
    "name": "Minot State University"
  },
  {
    "key": "_29pzsli80",
    "name": "Minot State University--Bottineau"
  },
  {
    "key": "_76lwqy1jl",
    "name": "Mississippi College"
  },
  {
    "key": "_t0eq100dv",
    "name": "Mississippi State University"
  },
  {
    "key": "_aww1u4rmw",
    "name": "Mississippi University for Women"
  },
  {
    "key": "_4d53bixjr",
    "name": "Mississippi Valley State University"
  },
  {
    "key": "_wyfwv8s5j",
    "name": "Missouri Baptist College"
  },
  {
    "key": "_ukl671aji",
    "name": "Missouri Southern State College"
  },
  {
    "key": "_5hzh0lga0",
    "name": "Missouri State University"
  },
  {
    "key": "_fbebb39eh",
    "name": "Missouri Tech"
  },
  {
    "key": "_huxm1agt7",
    "name": "Missouri University of Science and Technology"
  },
  {
    "key": "_yskvpljbq",
    "name": "Missouri Valley College"
  },
  {
    "key": "_azfndgr6o",
    "name": "Missouri Western State College"
  },
  {
    "key": "_h5qqbok5x",
    "name": "Mitchell College"
  },
  {
    "key": "_jswhewghm",
    "name": "Molloy College"
  },
  {
    "key": "_fyci8uot0",
    "name": "Monmouth College, Monmouth Illinois"
  },
  {
    "key": "_jczkapr9x",
    "name": "Monmouth University, West Long Branch New Jersey"
  },
  {
    "key": "_hmpzp1jqa",
    "name": "Monroe College"
  },
  {
    "key": "_xmrh114p8",
    "name": "Montana State University-Billings"
  },
  {
    "key": "_h2r9e3tnw",
    "name": "Montana State University-Bozeman"
  },
  {
    "key": "_wb78z38e2",
    "name": "Montana State University College of Technology, Great Falls"
  },
  {
    "key": "_43s4beyhb",
    "name": "Montana State University-Northern Havre"
  },
  {
    "key": "_lt210ma3l",
    "name": "Montana Tech"
  },
  {
    "key": "_gl69waovr",
    "name": "Montclair State University"
  },
  {
    "key": "_mqnjwu4qn",
    "name": "Monterey College of Law"
  },
  {
    "key": "_nzfalasx5",
    "name": "Monterey Institute of International Studies"
  },
  {
    "key": "_ovztujiu8",
    "name": "Montreat College"
  },
  {
    "key": "_i2mrd9s98",
    "name": "Moravian College"
  },
  {
    "key": "_z2jvnyjal",
    "name": "Morehead State University"
  },
  {
    "key": "_jvi2nsgd7",
    "name": "Morehouse College"
  },
  {
    "key": "_kczk7hjrf",
    "name": "Morehouse School of Medicine"
  },
  {
    "key": "_cnl8lohd1",
    "name": "Morgan State University"
  },
  {
    "key": "_yejm9ipcu",
    "name": "Morningside College"
  },
  {
    "key": "_ub5qh2yne",
    "name": "Morris Brown College"
  },
  {
    "key": "_kxmsjto2y",
    "name": "Morris College"
  },
  {
    "key": "_ukj4ljhln",
    "name": "Mount Aloysius College"
  },
  {
    "key": "_1ot9qrnbk",
    "name": "Mount Holyoke College"
  },
  {
    "key": "_chpxa22ye",
    "name": "Mount Ida College"
  },
  {
    "key": "_e1qlhuoea",
    "name": "Mount Marty College"
  },
  {
    "key": "_edsyynz77",
    "name": "Mount Mary College"
  },
  {
    "key": "_elviri90l",
    "name": "Mount Mercy College"
  },
  {
    "key": "_o8xwjf8vq",
    "name": "Mount Olive College"
  },
  {
    "key": "_baqy2skre",
    "name": "Mount Saint Mary College"
  },
  {
    "key": "_9bqriis1v",
    "name": "Mount St. Mary's College and Seminary, Emmitsburg Maryland"
  },
  {
    "key": "_0bjwwerti",
    "name": "Mount St. Mary's College, Los Angeles California"
  },
  {
    "key": "_d2wnczja1",
    "name": "Mount Senario College"
  },
  {
    "key": "_kiqq7a35z",
    "name": "Mt. Sierra College"
  },
  {
    "key": "_02vt6ake3",
    "name": "Mount Union College"
  },
  {
    "key": "_li5v0u622",
    "name": "Mount Vernon Nazarene College"
  },
  {
    "key": "_jkjanlcr8",
    "name": "Mountain State University"
  },
  {
    "key": "_4dixgx5bl",
    "name": "Muhlenberg College"
  },
  {
    "key": "_rt4b893gb",
    "name": "Murray State University"
  },
  {
    "key": "_9g98a6cl1",
    "name": "Muskingum College"
  },
  {
    "key": "_fykggf4jh",
    "name": "Naropa University"
  },
  {
    "key": "_wfa17l3tc",
    "name": "National American University"
  },
  {
    "key": "_j2wl2xlcu",
    "name": "National Defense University"
  },
  {
    "key": "_ezcado3b3",
    "name": "The National Graduate School"
  },
  {
    "key": "_z42wcwlcx",
    "name": "National-Louis University"
  },
  {
    "key": "_floef2kkt",
    "name": "National Technological University"
  },
  {
    "key": "_2olq40fcr",
    "name": "National University"
  },
  {
    "key": "_xey63iqz2",
    "name": "National University of Health Sciences"
  },
  {
    "key": "_hg5ihoso5",
    "name": "The Naval Postgraduate School"
  },
  {
    "key": "_ld0d378nz",
    "name": "Nazarene Bible College"
  },
  {
    "key": "_r46djf6sp",
    "name": "Nazareth College"
  },
  {
    "key": "_57kg2968d",
    "name": "Nebraska Methodist College"
  },
  {
    "key": "_8r45zh2d9",
    "name": "Nebraska Wesleyan University"
  },
  {
    "key": "_hbwt2auuh",
    "name": "Neumann College"
  },
  {
    "key": "_hfnp456fx",
    "name": "Nevada State College"
  },
  {
    "key": "_egbc8lm5i",
    "name": "New Brunswick Theological Seminary"
  },
  {
    "key": "_v7jak2kh8",
    "name": "New College of Florida"
  },
  {
    "key": "_d85bfp7ub",
    "name": "New England College"
  },
  {
    "key": "_joiwvluq1",
    "name": "New England College of Optometry"
  },
  {
    "key": "_wgjdix032",
    "name": "New England Conservatory of Music"
  },
  {
    "key": "_388gsu40j",
    "name": "New England Institute of Technology"
  },
  {
    "key": "_er46v81jo",
    "name": "New England Law"
  },
  {
    "key": "_ib3y8ifua",
    "name": "New England School of Communications"
  },
  {
    "key": "_hhghewnd8",
    "name": "New Jersey City University"
  },
  {
    "key": "_5apkc6897",
    "name": "New Jersey Institute of Technology"
  },
  {
    "key": "_95cv1tbdy",
    "name": "New Mexico Highlands University"
  },
  {
    "key": "_lpljhephe",
    "name": "New Mexico Institute of Mining and Technology"
  },
  {
    "key": "_tn8v8cho4",
    "name": "New Mexico State University"
  },
  {
    "key": "_9haywjmwz",
    "name": "New Saint Andrews College"
  },
  {
    "key": "_5q1nq7g9f",
    "name": "New School of Architecture and Design"
  },
  {
    "key": "_cy9czlu90",
    "name": "New School University"
  },
  {
    "key": "_6kvvxlh12",
    "name": "New World School of the Arts"
  },
  {
    "key": "_1hz26td1o",
    "name": "New York Academy of Art"
  },
  {
    "key": "_6663rhqek",
    "name": "New York Institute of Technology"
  },
  {
    "key": "_xm1fpl9us",
    "name": "New York Law School"
  },
  {
    "key": "_cbu0voahr",
    "name": "New York University"
  },
  {
    "key": "_chv25hoq7",
    "name": "Newberry College"
  },
  {
    "key": "_vmnx7e96g",
    "name": "Newport University"
  },
  {
    "key": "_0375tiyju",
    "name": "Niagara University"
  },
  {
    "key": "_4e7mgmm65",
    "name": "Nicholls State University"
  },
  {
    "key": "_a0fniz9es",
    "name": "Nichols College"
  },
  {
    "key": "_p9kabhisx",
    "name": "Norfolk State University"
  },
  {
    "key": "_e0hk54cqr",
    "name": "North Carolina Agricultural and Technical State University"
  },
  {
    "key": "_86ugyuzqb",
    "name": "North Carolina Central University"
  },
  {
    "key": "_ua0ptoq5p",
    "name": "North Carolina School of the Arts"
  },
  {
    "key": "_suehhjx1d",
    "name": "North Carolina State University"
  },
  {
    "key": "_yo9c01d1r",
    "name": "North Carolina Wesleyan College"
  },
  {
    "key": "_0lk1cy8fn",
    "name": "North Central College"
  },
  {
    "key": "_nw4cxncdm",
    "name": "North Central University"
  },
  {
    "key": "_xx68an8a2",
    "name": "North Dakota State University--Fargo"
  },
  {
    "key": "_23s38js5h",
    "name": "North Georgia College and State University, the Military College of Georgia"
  },
  {
    "key": "_6lnyysfla",
    "name": "North Greenville University"
  },
  {
    "key": "_vfgphqo6m",
    "name": "North Park University"
  },
  {
    "key": "_gwymueu42",
    "name": "Northcentral University"
  },
  {
    "key": "_annd6bxc0",
    "name": "Northeastern Illinois University"
  },
  {
    "key": "_25w3pckph",
    "name": "Northeastern University"
  },
  {
    "key": "_ncdrl5wzc",
    "name": "Northeastern State University"
  },
  {
    "key": "_vquzepkgi",
    "name": "Northern Arizona University"
  },
  {
    "key": "_96q7ftpph",
    "name": "Northern Illinois University"
  },
  {
    "key": "_3n8hrxy6l",
    "name": "Northern Kentucky University"
  },
  {
    "key": "_ubjonn76k",
    "name": "Northern Michigan University"
  },
  {
    "key": "_79mk0wsog",
    "name": "Northern State University"
  },
  {
    "key": "_lo7b55zzi",
    "name": "Northland College"
  },
  {
    "key": "_l0o3aivvk",
    "name": "Northwest Christian College"
  },
  {
    "key": "_7f9ipq4oq",
    "name": "Northwest College of Art"
  },
  {
    "key": "_05tx8yuuz",
    "name": "Northwest Missouri State University"
  },
  {
    "key": "_9pkl2f4ma",
    "name": "Northwest Nazarene University"
  },
  {
    "key": "_jz4mj0wdl",
    "name": "Northwest University"
  },
  {
    "key": "_x05vsqwvw",
    "name": "Northwestern Oklahoma State University"
  },
  {
    "key": "_cu0nlfa1g",
    "name": "Northwestern State University, Louisiana"
  },
  {
    "key": "_ir9ti8d07",
    "name": "Northwestern College, Iowa"
  },
  {
    "key": "_03dpbctfv",
    "name": "Northwestern College, Saint Paul, MN"
  },
  {
    "key": "_6agydddig",
    "name": "Northwestern Michigan College"
  },
  {
    "key": "_9lqqnw0u5",
    "name": "Northwestern University"
  },
  {
    "key": "_dot8rjv18",
    "name": "Northwood University"
  },
  {
    "key": "_en95k9i5p",
    "name": "Norwich University"
  },
  {
    "key": "_avimqu99u",
    "name": "Notre Dame College of Ohio"
  },
  {
    "key": "_wy0nsqzn4",
    "name": "Notre Dame de Namur University"
  },
  {
    "key": "_z2clvxbu4",
    "name": "Nova Southeastern University"
  },
  {
    "key": "_z7nyrjxf2",
    "name": "Nyack College"
  },
  {
    "key": "_qeyox0g1o",
    "name": "Oakland University"
  },
  {
    "key": "_bp9v8648b",
    "name": "Oakwood College"
  },
  {
    "key": "_x1r8pcp5w",
    "name": "Oberlin College"
  },
  {
    "key": "_k3wjldmq9",
    "name": "Occidental College"
  },
  {
    "key": "_hbedv50jl",
    "name": "Oglethorpe University"
  },
  {
    "key": "_nnhf40k8z",
    "name": "Ohio Dominican University"
  },
  {
    "key": "_tyggm6sl9",
    "name": "Ohio Northern University"
  },
  {
    "key": "_yfqagftb1",
    "name": "The Ohio State University"
  },
  {
    "key": "_4wmll13ol",
    "name": "Ohio University"
  },
  {
    "key": "_4jqtcchxb",
    "name": "Ohio Valley College"
  },
  {
    "key": "_47clgg6zg",
    "name": "Ohio Wesleyan University"
  },
  {
    "key": "_cfnd7ybv2",
    "name": "Oklahoma Baptist University"
  },
  {
    "key": "_rrtkrns27",
    "name": "Oklahoma Christian University"
  },
  {
    "key": "_0qrbmsv5h",
    "name": "Oklahoma City University"
  },
  {
    "key": "_b6qstcmel",
    "name": "Oklahoma Panhandle State University"
  },
  {
    "key": "_ilgjq9yi8",
    "name": "Oklahoma State University"
  },
  {
    "key": "_b3toqlyr3",
    "name": "Oklahoma State University Tulsa"
  },
  {
    "key": "_8fg1jkfzs",
    "name": "Oklahoma Wesleyan University"
  },
  {
    "key": "_ol3vrbp8a",
    "name": "Old Dominion University"
  },
  {
    "key": "_2il0b8qp0",
    "name": "Olin College of Engineering"
  },
  {
    "key": "_msvipwwn0",
    "name": "Olivet College"
  },
  {
    "key": "_ikxl1ia1m",
    "name": "Olivet Nazarene University"
  },
  {
    "key": "_7ran9n7xg",
    "name": "The Open University"
  },
  {
    "key": "_9amjpylfi",
    "name": "Oral Roberts University"
  },
  {
    "key": "_scls70icg",
    "name": "Oregon Graduate Institute of Science and Technology"
  },
  {
    "key": "_og4v5cg9g",
    "name": "Oregon Health Sciences University"
  },
  {
    "key": "_xvqg8j8qa",
    "name": "Oregon Institute of Technology"
  },
  {
    "key": "_kanh6bdu3",
    "name": "Oregon State University"
  },
  {
    "key": "_niuwflcst",
    "name": "Otterbein College"
  },
  {
    "key": "_4uvhu41x8",
    "name": "Ottawa University"
  },
  {
    "key": "_x4ditcv5r",
    "name": "Ouachita Baptist University"
  },
  {
    "key": "_eaazpjl3p",
    "name": "Our Lady of the Lake University"
  },
  {
    "key": "_e6qbj7py0",
    "name": "Our Lady of Holy Cross College"
  },
  {
    "key": "_9hv4rkfu6",
    "name": "Pace University"
  },
  {
    "key": "_r77a3v8s2",
    "name": "Pacific College of Oriental Medicine"
  },
  {
    "key": "_yq6rq50af",
    "name": "Pacific Lutheran University"
  },
  {
    "key": "_cf654nmeb",
    "name": "Pacific Northwest College of Art"
  },
  {
    "key": "_jz4he1sdm",
    "name": "Pacific Oaks College"
  },
  {
    "key": "_a00n5tqtk",
    "name": "Pacific States University"
  },
  {
    "key": "_8x4dl2bs1",
    "name": "Pacific Union College"
  },
  {
    "key": "_asua0ril3",
    "name": "Pacific University"
  },
  {
    "key": "_sca5bjac2",
    "name": "Paine College"
  },
  {
    "key": "_8uuhtbl76",
    "name": "Palm Beach Atlantic College"
  },
  {
    "key": "_nb05v0du6",
    "name": "Palmer College of Chiropractic"
  },
  {
    "key": "_038dnarek",
    "name": "Park College"
  },
  {
    "key": "_bg31cgzmk",
    "name": "Parsons School of Design"
  },
  {
    "key": "_f8p93mhfm",
    "name": "Patten College"
  },
  {
    "key": "_bb8skdk90",
    "name": "Patrick Henry College"
  },
  {
    "key": "_w7nph42lr",
    "name": "Paul Quinn College"
  },
  {
    "key": "_vp57pjgs6",
    "name": "Paul Smith's College"
  },
  {
    "key": "_np5qf7aek",
    "name": "Peace College"
  },
  {
    "key": "_9t0xmygdd",
    "name": "Pennsylvania College of Technology"
  },
  {
    "key": "_wu211r3g2",
    "name": "The Pennsylvania State University"
  },
  {
    "key": "_5j7ihxjs8",
    "name": "Pennsylvania State University at Altoona"
  },
  {
    "key": "_4wuvi3nq9",
    "name": "Pennsylvania State University, Great Valley"
  },
  {
    "key": "_z1b5af3vi",
    "name": "Pennsylvania State University at Harrisburg"
  },
  {
    "key": "_7kbygm76t",
    "name": "Pennsylvania State University, Worthington Scranton"
  },
  {
    "key": "_uvdaxskyg",
    "name": "Pensacola Christian College"
  },
  {
    "key": "_z57tmet2h",
    "name": "Pepperdine University"
  },
  {
    "key": "_x6m7yomsz",
    "name": "Peru State College"
  },
  {
    "key": "_351o1o3ms",
    "name": "Pfeiffer University"
  },
  {
    "key": "_1j0rf3fbw",
    "name": "Pickering University"
  },
  {
    "key": "_7kr2is0qm",
    "name": "Piedmont College"
  },
  {
    "key": "_o7cuegve7",
    "name": "Pikeville College"
  },
  {
    "key": "_r0dn1ij2a",
    "name": "Pine Manor College"
  },
  {
    "key": "_sincoy8j6",
    "name": "Pittsburg State University"
  },
  {
    "key": "_tbwumlpal",
    "name": "Pitzer College"
  },
  {
    "key": "_q03snq2z6",
    "name": "Philadelphia Biblical University"
  },
  {
    "key": "_m0ejvd0do",
    "name": "Philadelphia University"
  },
  {
    "key": "_vjg7vg2k9",
    "name": "Philander Smith College"
  },
  {
    "key": "_58kbasto4",
    "name": "Phillips University"
  },
  {
    "key": "_6e965fxy0",
    "name": "Plymouth State University, Plymouth New Hampshire"
  },
  {
    "key": "_fgebky5gc",
    "name": "Point Loma Nazarene College"
  },
  {
    "key": "_64m4ynpps",
    "name": "Point Park University"
  },
  {
    "key": "_lmvpoqhtj",
    "name": "Polytechnic University of New York"
  },
  {
    "key": "_zx10x02xx",
    "name": "Polytechnic University of Puerto Rico"
  },
  {
    "key": "_usme1uhqa",
    "name": "Pomona College"
  },
  {
    "key": "_e3prlds9w",
    "name": "Pontifical University"
  },
  {
    "key": "_g123v4rwi",
    "name": "Portland State University"
  },
  {
    "key": "_v70732uia",
    "name": "Potomac College"
  },
  {
    "key": "_vbkaa49yt",
    "name": "Prairie View A & M University"
  },
  {
    "key": "_u98cbrixb",
    "name": "Pratt Institute"
  },
  {
    "key": "_nkblcon77",
    "name": "Presbyterian College"
  },
  {
    "key": "_1synuselp",
    "name": "Prescott College"
  },
  {
    "key": "_ukmvbhgvx",
    "name": "Preston University"
  },
  {
    "key": "_fgbxckn7o",
    "name": "Princeton University"
  },
  {
    "key": "_s0bte4hd4",
    "name": "Principia College"
  },
  {
    "key": "_eys9phv58",
    "name": "Providence College"
  },
  {
    "key": "_83z3wko7v",
    "name": "Purdue University"
  },
  {
    "key": "_v8n58efrz",
    "name": "Purdue University North Central"
  },
  {
    "key": "_2mn1j2g0s",
    "name": "Queens College"
  },
  {
    "key": "_imzzobqit",
    "name": "Quincy University"
  },
  {
    "key": "_qgg3nh4ce",
    "name": "Quinnipiac College"
  },
  {
    "key": "_q2ktg4ik5",
    "name": "Radford University"
  },
  {
    "key": "_lway7l5k7",
    "name": "Ramapo College of New Jersey"
  },
  {
    "key": "_5jh0s2arz",
    "name": "Randolph College"
  },
  {
    "key": "_ylm57ji0w",
    "name": "Randolph-Macon College"
  },
  {
    "key": "_2608zxxpc",
    "name": "Rasmussen College"
  },
  {
    "key": "_cml4eolqp",
    "name": "Reed College"
  },
  {
    "key": "_lzmfhvgtl",
    "name": "Regent University"
  },
  {
    "key": "_yts1bn0vf",
    "name": "Regis College"
  },
  {
    "key": "_rpbryhnuq",
    "name": "Regis University"
  },
  {
    "key": "_sudqmqpvs",
    "name": "Reinhardt College"
  },
  {
    "key": "_mxomnqtbb",
    "name": "Remington College"
  },
  {
    "key": "_5a6jnil5l",
    "name": "Rensselaer Polytechnic Institute"
  },
  {
    "key": "_o4fr1z97v",
    "name": "Rhode Island College"
  },
  {
    "key": "_rcxk5vk1d",
    "name": "Rhode Island School of Design"
  },
  {
    "key": "_u5do2vguy",
    "name": "Rhodes College"
  },
  {
    "key": "_sixl2ji4h",
    "name": "Rice University"
  },
  {
    "key": "_ftg1uyt8s",
    "name": "The Richard Stockton College of New Jersey"
  },
  {
    "key": "_euc40pka3",
    "name": "Rider University"
  },
  {
    "key": "_pwzr3x5t1",
    "name": "Ringling School of Art and Design"
  },
  {
    "key": "_e42jlprzm",
    "name": "Ripon College"
  },
  {
    "key": "_ar1p2jgon",
    "name": "Rivier College"
  },
  {
    "key": "_6qy34mgkl",
    "name": "Roanoke College"
  },
  {
    "key": "_q1siyveea",
    "name": "Robert Morris College, Illinois"
  },
  {
    "key": "_vgrqnraky",
    "name": "Robert Morris College, Pittsburgh, PA"
  },
  {
    "key": "_fninpuvmz",
    "name": "Roberts Wesleyan College"
  },
  {
    "key": "_e27chxipu",
    "name": "Rochester Institute of Technology"
  },
  {
    "key": "_5bvg3ko4r",
    "name": "Rochester College"
  },
  {
    "key": "_09zgngi85",
    "name": "The Rockefeller University"
  },
  {
    "key": "_6jt2ht5u3",
    "name": "Rockford College"
  },
  {
    "key": "_n3p98aqgt",
    "name": "Rockhurst University"
  },
  {
    "key": "_8p6zqxa0u",
    "name": "Rocky Mountain College"
  },
  {
    "key": "_t9rlz8cf7",
    "name": "Roger Williams University"
  },
  {
    "key": "_vzwll1aee",
    "name": "Rogers State University"
  },
  {
    "key": "_7rs562rg1",
    "name": "Rollins College"
  },
  {
    "key": "_ulmfhfegx",
    "name": "Roosevelt University"
  },
  {
    "key": "_9ueq71woa",
    "name": "Rose-Hulman Institute of Technology"
  },
  {
    "key": "_6v4wrpryc",
    "name": "Rosemont College"
  },
  {
    "key": "_k84p4g56a",
    "name": "Rowan University"
  },
  {
    "key": "_3c9dpxbwr",
    "name": "Rush University"
  },
  {
    "key": "_2vkcw70sy",
    "name": "Russell Sage College"
  },
  {
    "key": "_p4oy5j9pw",
    "name": "Rust College"
  },
  {
    "key": "_kvt1z67pd",
    "name": "Rutgers University"
  },
  {
    "key": "_5rhgwcndv",
    "name": "Rutgers University-Camden"
  },
  {
    "key": "_2z8lhi88x",
    "name": "Rutgers University-Newark"
  },
  {
    "key": "_eeltqe3u9",
    "name": "Ryokan College"
  },
  {
    "key": "_gxene9hs9",
    "name": "Sacred Heart University"
  },
  {
    "key": "_dxtq13nem",
    "name": "Sacred Heart University, Puerto Rico"
  },
  {
    "key": "_vtwazgzdu",
    "name": "The Sage Colleges"
  },
  {
    "key": "_srkzlo81y",
    "name": "Saginaw Valley State University"
  },
  {
    "key": "_yc5m3fiy1",
    "name": "Saint Ambrose University"
  },
  {
    "key": "_diifm8o4u",
    "name": "Saint Andrews Presbyterian College"
  },
  {
    "key": "_owllex7v4",
    "name": "Saint Anselm College"
  },
  {
    "key": "_nf359alba",
    "name": "Saint Anthony College of Nursing"
  },
  {
    "key": "_hkospb93t",
    "name": "Saint Augustine's College"
  },
  {
    "key": "_zllbyyecq",
    "name": "Saint Bonaventure University"
  },
  {
    "key": "_xj6zvl8rd",
    "name": "Saint Cloud State University"
  },
  {
    "key": "_komh4zt6i",
    "name": "Saint Edwards University"
  },
  {
    "key": "_pqlult5m5",
    "name": "Saint Francis College, Brooklyn Heights, New York"
  },
  {
    "key": "_tj94kvv9k",
    "name": "Saint Francis College, Fort Wayne, Indiana"
  },
  {
    "key": "_d40u7p2i8",
    "name": "Saint Francis College, Loretto, Pennsylvania"
  },
  {
    "key": "_03rqtnq45",
    "name": "Saint Gregory's University"
  },
  {
    "key": "_bhumchbi8",
    "name": "Saint John Fisher College"
  },
  {
    "key": "_c2hhaxjv5",
    "name": "Saint John's College"
  },
  {
    "key": "_7n4reol0i",
    "name": "Saint John's University, Collegeville Minnesota"
  },
  {
    "key": "_55nt8pwcn",
    "name": "Saint John's University, Jamaica New York"
  },
  {
    "key": "_fb9832oq1",
    "name": "Saint Joseph College"
  },
  {
    "key": "_hbi2mphjt",
    "name": "Saint Joseph's College"
  },
  {
    "key": "_6bkyich22",
    "name": "Saint Joseph's College of Maine"
  },
  {
    "key": "_6rum4h2fv",
    "name": "Saint Joseph's University"
  },
  {
    "key": "_6g92bsgpz",
    "name": "Saint Lawrence University"
  },
  {
    "key": "_bgkobxo9v",
    "name": "Saint Leo University"
  },
  {
    "key": "_a9mlxr8hf",
    "name": "Saint Louis University"
  },
  {
    "key": "_qt8mncluy",
    "name": "Saint Louis Christian College"
  },
  {
    "key": "_u6p5vudgp",
    "name": "Saint Martin's University"
  },
  {
    "key": "_gsasqvzsq",
    "name": "Saint Mary-of-the-Woods College"
  },
  {
    "key": "_j9pr1zrcf",
    "name": "Saint Mary's College of California"
  },
  {
    "key": "_6xhbu36oz",
    "name": "Saint Mary's College of Maryland"
  },
  {
    "key": "_v7yklrm8z",
    "name": "Saint Mary's University of Minnesota"
  },
  {
    "key": "_yowxe6zpb",
    "name": "Saint Mary's University of San Antonio"
  },
  {
    "key": "_celzpmfj7",
    "name": "Saint Meinrad's School of Theology"
  },
  {
    "key": "_tio68impn",
    "name": "Saint Michael's College"
  },
  {
    "key": "_13ip2sjyn",
    "name": "Saint Norbert College"
  },
  {
    "key": "_hzr162glc",
    "name": "Saint Olaf College"
  },
  {
    "key": "_sf6q5rxgw",
    "name": "Saint Paul's College"
  },
  {
    "key": "_9yulqbpyr",
    "name": "Saint Peter's College"
  },
  {
    "key": "_r7uojdr5k",
    "name": "Saint Petersburg College"
  },
  {
    "key": "_01xjj1tpo",
    "name": "Saint Rose College"
  },
  {
    "key": "_2bhhli35y",
    "name": "Saint Thomas Aquinas College"
  },
  {
    "key": "_0y2504agi",
    "name": "Saint Thomas University"
  },
  {
    "key": "_r7i4xqg7c",
    "name": "Saint Vincent College"
  },
  {
    "key": "_ev1h0qwxa",
    "name": "Saint Xavier University"
  },
  {
    "key": "_xpmyv4zcn",
    "name": "Salem College"
  },
  {
    "key": "_1m4r30h9w",
    "name": "Salem International University"
  },
  {
    "key": "_vy2l3k3vy",
    "name": "Salem State College"
  },
  {
    "key": "_5io6rl870",
    "name": "Salisbury State University"
  },
  {
    "key": "_7nckob5to",
    "name": "The Salk Institute for Biological Studies"
  },
  {
    "key": "_hbj3wyxww",
    "name": "Salve Regina University"
  },
  {
    "key": "_pg03qqbbx",
    "name": "Sam Houston State University"
  },
  {
    "key": "_0kllvcz6g",
    "name": "Samford University"
  },
  {
    "key": "_3mv0f1n9i",
    "name": "Samuel Merritt College"
  },
  {
    "key": "_9s4xkfne2",
    "name": "San Diego State University"
  },
  {
    "key": "_013k2tjn3",
    "name": "San Francisco Art Institute"
  },
  {
    "key": "_06n0cwntd",
    "name": "San Francisco Law School"
  },
  {
    "key": "_v9jyfg423",
    "name": "San Francisco State University"
  },
  {
    "key": "_alqc3qm1k",
    "name": "San Joaquin College of Law"
  },
  {
    "key": "_p43s6qer2",
    "name": "San Jose Christian College"
  },
  {
    "key": "_iovyh5ycq",
    "name": "San Jose State University"
  },
  {
    "key": "_f46bb4u1d",
    "name": "Santa Clara University"
  },
  {
    "key": "_t37acnlv5",
    "name": "Sarah Lawrence College"
  },
  {
    "key": "_m432pdu1v",
    "name": "Saratoga University School of Law"
  },
  {
    "key": "_oqvaem1l2",
    "name": "Sarah Lawrence College"
  },
  {
    "key": "_qamvtwl4g",
    "name": "Savannah College of Art and Design"
  },
  {
    "key": "_dezr29gfw",
    "name": "Savannah State University"
  },
  {
    "key": "_4ib0ega9v",
    "name": "Saybrook Graduate School and Research Center"
  },
  {
    "key": "_4vqnk3970",
    "name": "Schiller International University"
  },
  {
    "key": "_vl0te7xar",
    "name": "School for International Training"
  },
  {
    "key": "_pv187lgxs",
    "name": "School of the Art Institute of Chicago"
  },
  {
    "key": "_s2qaq5pbz",
    "name": "School of Islamic and Social Sciences"
  },
  {
    "key": "_sd2l9wo0d",
    "name": "School of the Museum of Fine Arts, Boston"
  },
  {
    "key": "_6i2k68wkp",
    "name": "School of the Visual Arts"
  },
  {
    "key": "_axoy7e5ak",
    "name": "Schreiner College"
  },
  {
    "key": "_lp1lgwvj7",
    "name": "Scripps College"
  },
  {
    "key": "_fnb9jz3ei",
    "name": "The Scripps Research Institute"
  },
  {
    "key": "_piy8pgth6",
    "name": "Seattle Pacific University"
  },
  {
    "key": "_jrody2q8e",
    "name": "Seattle University"
  },
  {
    "key": "_g6y5rr4y6",
    "name": "Seton Hall University"
  },
  {
    "key": "_njqm17vcd",
    "name": "Seton Hill College"
  },
  {
    "key": "_jxhl1kdq5",
    "name": "Shasta Bible College"
  },
  {
    "key": "_ou6z6t4f2",
    "name": "Shawnee State University"
  },
  {
    "key": "_67bt23cpe",
    "name": "Shaw University"
  },
  {
    "key": "_bhpb2xqhe",
    "name": "Sheffield School of Interior Design"
  },
  {
    "key": "_jd4c6w90m",
    "name": "Sheldon Jackson College"
  },
  {
    "key": "_ux5wy38ef",
    "name": "Shenandoah University"
  },
  {
    "key": "_bksju6fzj",
    "name": "Shepherd College"
  },
  {
    "key": "_2ju5yowf7",
    "name": "Sherman College of Straight Chiropractic"
  },
  {
    "key": "_vtb19502j",
    "name": "Shimer College"
  },
  {
    "key": "_e7dz86jzp",
    "name": "Shippensburg University of Pennsylvania"
  },
  {
    "key": "_t8i74tt53",
    "name": "Shorter College"
  },
  {
    "key": "_fa18r7rgh",
    "name": "Siena College"
  },
  {
    "key": "_a1vfxsvfc",
    "name": "Siena Heights University"
  },
  {
    "key": "_bhcbhmnxr",
    "name": "Sierra Nevada College"
  },
  {
    "key": "_ciboih11q",
    "name": "Silver Lake College"
  },
  {
    "key": "_fsv6mepqq",
    "name": "Simmons College"
  },
  {
    "key": "_8di7c1apt",
    "name": "Simon's Rock College"
  },
  {
    "key": "_qc8euj3yd",
    "name": "Simpson College, Redding California"
  },
  {
    "key": "_wtx2bqz1f",
    "name": "Simpson College, Indianola Iowa"
  },
  {
    "key": "_4tz56z61t",
    "name": "Skidmore College"
  },
  {
    "key": "_t3ne6mkq7",
    "name": "Slippery Rock University"
  },
  {
    "key": "_kjwznlq9d",
    "name": "Smith Chapel Bible College"
  },
  {
    "key": "_gbo51of0w",
    "name": "Smith College"
  },
  {
    "key": "_uuajsm5a1",
    "name": "Soka University of America"
  },
  {
    "key": "_3sgclmqek",
    "name": "Sonoma State University"
  },
  {
    "key": "_5155k4hsx",
    "name": "South Carolina State University"
  },
  {
    "key": "_3g4dnpeai",
    "name": "South Dakota School of Mines and Technology "
  },
  {
    "key": "_s9687yf8y",
    "name": "South Dakota State University"
  },
  {
    "key": "_a6g25vuzs",
    "name": "South Pacific University"
  },
  {
    "key": "_pbf3ospj3",
    "name": "South Texas College of Law"
  },
  {
    "key": "_fg2z5lsl9",
    "name": "Southampton College"
  },
  {
    "key": "_dogizhexj",
    "name": "Southeast College of Technology"
  },
  {
    "key": "_yxs8bvy2j",
    "name": "Southeast Missouri State University"
  },
  {
    "key": "_ihuqinnws",
    "name": "Southeastern Bible College"
  },
  {
    "key": "_2tmpn6vdj",
    "name": "Southeastern College"
  },
  {
    "key": "_wr194m74g",
    "name": "Southeastern Louisiana University"
  },
  {
    "key": "_errgan8ec",
    "name": "Southeastern Oklahoma State University"
  },
  {
    "key": "_hpjv637kz",
    "name": "Southeastern University"
  },
  {
    "key": "_08gssj723",
    "name": "Southern Adventist University"
  },
  {
    "key": "_4r5zve9hi",
    "name": "Southern Arkansas University"
  },
  {
    "key": "_inrdnrnd3",
    "name": "Southern California University of Health Sciences"
  },
  {
    "key": "_axem8g49q",
    "name": "Southern California University of Professional Studies"
  },
  {
    "key": "_6si2l90hw",
    "name": "Southern Connecticut State University"
  },
  {
    "key": "_jv66rwkps",
    "name": "Southern Illinois University at Carbondale"
  },
  {
    "key": "_qe2v5vx89",
    "name": "Southern Illinois University at Edwardsville"
  },
  {
    "key": "_i60dbubzu",
    "name": "Southern Illinois University Medical School at Springsfield"
  },
  {
    "key": "_amoigp7l6",
    "name": "Southern Methodist University"
  },
  {
    "key": "_qg0johreg",
    "name": "Southern Nazarene University"
  },
  {
    "key": "_9mwrfeydu",
    "name": "Southern New Hampshire University"
  },
  {
    "key": "_inklr4bz5",
    "name": "Southern Oregon State College"
  },
  {
    "key": "_sawck67sc",
    "name": "Southern Oregon University"
  },
  {
    "key": "_plkx3j202",
    "name": "Southern Polytechnic State Univerisity"
  },
  {
    "key": "_aa8mfk2i3",
    "name": "Southern Vermont College"
  },
  {
    "key": "_g871n80mf",
    "name": "Southern Virginia University"
  },
  {
    "key": "_55pa2j68f",
    "name": "Southern Wesleyan University"
  },
  {
    "key": "_l52etojy5",
    "name": "Southern University, Baton Rouge"
  },
  {
    "key": "_hijxuycyk",
    "name": "Southern University, New Orleans"
  },
  {
    "key": "_91k67pg69",
    "name": "Southern University, Shreveport-Bossier City"
  },
  {
    "key": "_qllg1o1eh",
    "name": "Southern Utah University"
  },
  {
    "key": "_b64rjpeud",
    "name": "Southwest Baptist University"
  },
  {
    "key": "_l9unjneke",
    "name": "Southwest Bible College and Seminary"
  },
  {
    "key": "_x4csc8fb5",
    "name": "Southwest Florida College"
  },
  {
    "key": "_oz5pope2k",
    "name": "Southwest Minnesota State University"
  },
  {
    "key": "_y5vjh5zg3",
    "name": "Southwest University"
  },
  {
    "key": "_p9e2gxqe9",
    "name": "Southwestern Adventist University"
  },
  {
    "key": "_ztdhnyl8r",
    "name": "Southwestern Assemblies of God University"
  },
  {
    "key": "_39ymwdbfr",
    "name": "Southwestern College, Kansas"
  },
  {
    "key": "_46xflvdlx",
    "name": "Southwestern College, New Mexico"
  },
  {
    "key": "_v32njt4iz",
    "name": "Southwestern Oklahoma State University"
  },
  {
    "key": "_yd6po6nk8",
    "name": "Southwestern University"
  },
  {
    "key": "_1m6rojhub",
    "name": "Southwestern University School of Law"
  },
  {
    "key": "_q80dxw8zm",
    "name": "Spalding University"
  },
  {
    "key": "_qyfwxmrxh",
    "name": "Spartanburg Methodist College"
  },
  {
    "key": "_kbibdttsu",
    "name": "Spelman College"
  },
  {
    "key": "_qyjrlb8fd",
    "name": "Spertus College"
  },
  {
    "key": "_iknoj3dnj",
    "name": "Spring Arbor College"
  },
  {
    "key": "_a4bqucrnu",
    "name": "Spring Hill College"
  },
  {
    "key": "_mbax31200",
    "name": "Springfield College"
  },
  {
    "key": "_mk49e2x81",
    "name": "Stamford International College"
  },
  {
    "key": "_b37jtnnd3",
    "name": "Stanford University"
  },
  {
    "key": "_pyrwgd010",
    "name": "State University of New York at Albany"
  },
  {
    "key": "_77o1bfq78",
    "name": "State University of New York at Binghamton"
  },
  {
    "key": "_b1fswh2w9",
    "name": "State University of New York at Buffalo"
  },
  {
    "key": "_er8ry81hp",
    "name": "State University of New York at Oswego"
  },
  {
    "key": "_7qk1zkz54",
    "name": "State University of New York at Stony Brook"
  },
  {
    "key": "_f62mng0d5",
    "name": "State University of New York College of Agriculture and Technology, Cobleskill"
  },
  {
    "key": "_5ob04ozs3",
    "name": "State University of New York College of Agriculture and Technology, Morrisville"
  },
  {
    "key": "_o1dvxvyhj",
    "name": "State University of New York College at Brockport"
  },
  {
    "key": "_sohf2ggvn",
    "name": "State University of New York College at Buffalo (Buffalo State College)"
  },
  {
    "key": "_e0htu4vbp",
    "name": "State University of New York College at Cortland"
  },
  {
    "key": "_ke8xbdcud",
    "name": "State University of New York College of Environmental Science and Forestry"
  },
  {
    "key": "_gg5kvhn2d",
    "name": "State University of New York College at Farmingdale"
  },
  {
    "key": "_n02dv2d55",
    "name": "State University of New York College at Fredonia"
  },
  {
    "key": "_xr9i0lf5g",
    "name": "State University of New York College at Geneseo"
  },
  {
    "key": "_vwxlkewvd",
    "name": "State University of New York College Maritime College at Fort Schuyler"
  },
  {
    "key": "_0fj4psvhr",
    "name": "State University of New York College at New Paltz"
  },
  {
    "key": "_fdqlbpmaa",
    "name": "State University of New York College at Old Westbury"
  },
  {
    "key": "_bcqfwom6o",
    "name": "State University of New York College at Oneonta"
  },
  {
    "key": "_vgxb7em7y",
    "name": "State University of New York College at Oswego"
  },
  {
    "key": "_fej2y6r8t",
    "name": "State University of New York College at Plattsburgh"
  },
  {
    "key": "_osig2sdpw",
    "name": "State University of New York College at Potsdam"
  },
  {
    "key": "_ym4wlk5ih",
    "name": "State University of New York College at Purchase"
  },
  {
    "key": "_pg5jcvgf1",
    "name": "State University of New York Institute of Technology at Canton"
  },
  {
    "key": "_0c73h9dhz",
    "name": "State University of New York Institute of Technology at Delhi"
  },
  {
    "key": "_ge9y6b7e2",
    "name": "State University of New York Institute of Technology at Utica/Rome"
  },
  {
    "key": "_dxl7ejnrv",
    "name": "The Stefan University"
  },
  {
    "key": "_1lxewbnn3",
    "name": "Stephen F. Austin State University"
  },
  {
    "key": "_u3b3umud4",
    "name": "Stephens College"
  },
  {
    "key": "_cbstf83kw",
    "name": "Sterling College, Sterling Kansas"
  },
  {
    "key": "_3mcoglvs0",
    "name": "Sterling College, Kansas"
  },
  {
    "key": "_fjkndbmoi",
    "name": "Sterling College, Vermont"
  },
  {
    "key": "_8f7wonijz",
    "name": "Stetson University"
  },
  {
    "key": "_2xf6ckdtg",
    "name": "Stevens-Henager College"
  },
  {
    "key": "_0avvjomu7",
    "name": "Stevens Institute of Technology"
  },
  {
    "key": "_fi3c9vpcb",
    "name": "Stevenson University"
  },
  {
    "key": "_i6oxkg96c",
    "name": "Stillman College"
  },
  {
    "key": "_w4phsv6xn",
    "name": "Stonehill College"
  },
  {
    "key": "_j29jid6ha",
    "name": "Stratford University"
  },
  {
    "key": "_n2muinvo5",
    "name": "Strayer University"
  },
  {
    "key": "_yik8gf7qf",
    "name": "Suffolk University"
  },
  {
    "key": "_4gparjxv2",
    "name": "Sul Ross State University"
  },
  {
    "key": "_qravyaikr",
    "name": "Summit University of Louisiana"
  },
  {
    "key": "_ct0f9pygk",
    "name": "Susquehanna University"
  },
  {
    "key": "_hgqt69csv",
    "name": "Swarthmore College"
  },
  {
    "key": "_kf80frl8t",
    "name": "Sweet Briar College"
  },
  {
    "key": "_mi1ibklv8",
    "name": "Syracuse University"
  },
  {
    "key": "_395tvzsaz",
    "name": "Tabor College"
  },
  {
    "key": "_ktaca5d7h",
    "name": "Talladega College"
  },
  {
    "key": "_rfx5x7l9r",
    "name": "Tarleton State University"
  },
  {
    "key": "_sue1rjg0r",
    "name": "Taylor University"
  },
  {
    "key": "_vu4zxf4m1",
    "name": "Teachers College"
  },
  {
    "key": "_af6aol7cd",
    "name": "Teikyo Marycrest University"
  },
  {
    "key": "_b9je6j93v",
    "name": "Teikyo Post University"
  },
  {
    "key": "_nykis4351",
    "name": "Temple University"
  },
  {
    "key": "_jtkzr9joe",
    "name": "Tennessee State University"
  },
  {
    "key": "_l7rjye1yv",
    "name": "Tennessee Technological University"
  },
  {
    "key": "_n5y0jsi8n",
    "name": "Tennessee Temple University"
  },
  {
    "key": "_8c8tomg2l",
    "name": "Tennessee Wesleyan College"
  },
  {
    "key": "_j5vpmxjwj",
    "name": "Texas A&M International University"
  },
  {
    "key": "_qjpfsneku",
    "name": "Texas A&M University"
  },
  {
    "key": "_wdxzuwqr4",
    "name": "Texas A&M University, Commerce"
  },
  {
    "key": "_pwiro4dwd",
    "name": "Texas A&M University, Corpus Christi"
  },
  {
    "key": "_ub90maz8q",
    "name": "Texas A&M University, Galveston"
  },
  {
    "key": "_0m9h0yvr4",
    "name": "Texas A&M University, Kingsville"
  },
  {
    "key": "_tkn881ltz",
    "name": "Texas A&M University, Texarkana"
  },
  {
    "key": "_cjz56fdcm",
    "name": "Texas Chiropractic College"
  },
  {
    "key": "_pg8gjbimm",
    "name": "Texas Christian University"
  },
  {
    "key": "_dd4dlwwt6",
    "name": "Texas Lutheran University"
  },
  {
    "key": "_mdj1csz30",
    "name": "Texas Southern University"
  },
  {
    "key": "_5uu360pk5",
    "name": "Texas State University"
  },
  {
    "key": "_g6q1c5fva",
    "name": "Texas Tech University"
  },
  {
    "key": "_2madvp55t",
    "name": "Texas Wesleyan University"
  },
  {
    "key": "_jddtrmrzg",
    "name": "Texas Woman's University"
  },
  {
    "key": "_hi54h6w8q",
    "name": "Thiel College"
  },
  {
    "key": "_4jhy5obts",
    "name": "Thomas Aquinas College, Santa Paula CA"
  },
  {
    "key": "_mk1bko8ap",
    "name": "Thomas Edison State College"
  },
  {
    "key": "_ns448lm2w",
    "name": "Thomas College"
  },
  {
    "key": "_1njnfwv4q",
    "name": "Thomas Cooley Law School"
  },
  {
    "key": "_afyfxf5l8",
    "name": "Thomas More College"
  },
  {
    "key": "_jno76kn9p",
    "name": "Thomas Jefferson University"
  },
  {
    "key": "_3snz51h3o",
    "name": "Thunderbird School of Global Management"
  },
  {
    "key": "_ga9njimgv",
    "name": "Toccoa Falls College"
  },
  {
    "key": "_athdqx0r2",
    "name": "Tougaloo College"
  },
  {
    "key": "_4r3lq4xr1",
    "name": "Touro College"
  },
  {
    "key": "_umu8nokuh",
    "name": "Towson University"
  },
  {
    "key": "_nb08clg2v",
    "name": "The Transworld University"
  },
  {
    "key": "_zgldj7j88",
    "name": "Transylvania University"
  },
  {
    "key": "_x9js17do5",
    "name": "Trevecca Nazarene University"
  },
  {
    "key": "_dkmjq5nys",
    "name": "Trinity Baptist College"
  },
  {
    "key": "_juvl5o9od",
    "name": "Trinity Christian College"
  },
  {
    "key": "_rbk0xgrx7",
    "name": "Trinity College, Hartford Connecticut"
  },
  {
    "key": "_6v0uzc744",
    "name": "Trinity College of Florida"
  },
  {
    "key": "_qli1gvknw",
    "name": "Trinity College, Washington DC"
  },
  {
    "key": "_n530komhx",
    "name": "Trinity International University"
  },
  {
    "key": "_9npv54unz",
    "name": "Trinity University"
  },
  {
    "key": "_u3vq6kgpb",
    "name": "Tri-State University"
  },
  {
    "key": "_ze6nzt57u",
    "name": "Troy State University"
  },
  {
    "key": "_lp7lv1sb8",
    "name": "Troy State University - Dothan"
  },
  {
    "key": "_x1o8orp10",
    "name": "Truman State University"
  },
  {
    "key": "_to33ktv01",
    "name": "Tufts University"
  },
  {
    "key": "_yifyob7uh",
    "name": "Tulane University"
  },
  {
    "key": "_jd5l6r798",
    "name": "Tusculum College"
  },
  {
    "key": "_bjvi4skcl",
    "name": "Tuskegee University"
  },
  {
    "key": "_n3dk59zqx",
    "name": "Uniformed Services Universty of the Health Sciences"
  },
  {
    "key": "_duuq3r9fb",
    "name": "Union College, Barbourville KY"
  },
  {
    "key": "_kznaezbxv",
    "name": "Union College"
  },
  {
    "key": "_wn7ngsl8a",
    "name": "Union College"
  },
  {
    "key": "_w6fhfhmx9",
    "name": "Union Theological Seminary"
  },
  {
    "key": "_ucxkjhz5w",
    "name": "Union University"
  },
  {
    "key": "_iqfjktgl5",
    "name": "The Union Institute"
  },
  {
    "key": "_i12zqxgm8",
    "name": "United States Air Force Academy"
  },
  {
    "key": "_k3cruvgln",
    "name": "United States Coast Guard Academy"
  },
  {
    "key": "_pdxbgfj6i",
    "name": "United States Merchant Marine Academy"
  },
  {
    "key": "_d9d8uz9wg",
    "name": "United States Military Academy"
  },
  {
    "key": "_bud1dhu9d",
    "name": "United States Naval Academy"
  },
  {
    "key": "_orh91nr14",
    "name": "United States Open University"
  },
  {
    "key": "_rzxpygjfl",
    "name": "United States Sports Academy"
  },
  {
    "key": "_du98xl55e",
    "name": "United Theological Seminar"
  },
  {
    "key": "_vrd5554sw",
    "name": "Unity College"
  },
  {
    "key": "_50w8cey27",
    "name": "University of Advancing Technology"
  },
  {
    "key": "_fvzm8dj1a",
    "name": "University of Akron"
  },
  {
    "key": "_tbbcvxptp",
    "name": "University of Alabama"
  },
  {
    "key": "_5ai4yvoog",
    "name": "University of Alabama, Birmingham"
  },
  {
    "key": "_qbpxrrzcu",
    "name": "University of Alabama, Huntsville"
  },
  {
    "key": "_vqu0etmmm",
    "name": "University of Alaska, Anchorage"
  },
  {
    "key": "_2bzy8ogvf",
    "name": "University of Alaska, Fairbanks"
  },
  {
    "key": "_80oj4os86",
    "name": "University of Alaska, Southeast"
  },
  {
    "key": "_v7zjra4qj",
    "name": "University of Arizona"
  },
  {
    "key": "_hot65xdnj",
    "name": "University of Arkansas, Fayetteville"
  },
  {
    "key": "_jw2dqb1ih",
    "name": "University of Arkansas at Little Rock"
  },
  {
    "key": "_2rxv9hp0z",
    "name": "University of Arkansas at Monticello"
  },
  {
    "key": "_qlulqt9q6",
    "name": "University of Arkansas at Pine Bluff"
  },
  {
    "key": "_4lry8bmnw",
    "name": "University of the Arts"
  },
  {
    "key": "_cjjl6sdvb",
    "name": "University of Baltimore"
  },
  {
    "key": "_1nc37zthu",
    "name": "University of Bridgeport"
  },
  {
    "key": "_psd6ecmgg",
    "name": "University of California, Berkeley"
  },
  {
    "key": "_4qn1r3gub",
    "name": "University of California, Davis"
  },
  {
    "key": "_a6lx21bha",
    "name": "University of California, Hastings College of Law"
  },
  {
    "key": "_0ao8vw8pg",
    "name": "University of California, Irvine"
  },
  {
    "key": "_p2upbi4my",
    "name": "University of California, Los Angeles"
  },
  {
    "key": "_zzvwhup57",
    "name": "University of California, Merced"
  },
  {
    "key": "_mkxq2t8rj",
    "name": "University of California, Riverside"
  },
  {
    "key": "_l75zarujy",
    "name": "University of California, San Diego"
  },
  {
    "key": "_e3d5albub",
    "name": "University of California, San Francisco"
  },
  {
    "key": "_fpna57jgm",
    "name": "University of California, Santa Barbara"
  },
  {
    "key": "_ynlv27ldn",
    "name": "University of California, Santa Cruz"
  },
  {
    "key": "_sw3ilu1m3",
    "name": "University of Central Arkansas"
  },
  {
    "key": "_5o7ai4vud",
    "name": "University of Central Florida"
  },
  {
    "key": "_kowi14vr6",
    "name": "University of Central Oklahoma"
  },
  {
    "key": "_jus3a8dn9",
    "name": "University of Charleston"
  },
  {
    "key": "_0wz78219u",
    "name": "University of Chicago"
  },
  {
    "key": "_ef1ah3b3e",
    "name": "University of Cincinnati"
  },
  {
    "key": "_6u3osq4ex",
    "name": "University of Colorado at Boulder"
  },
  {
    "key": "_vuy1gpc1e",
    "name": "University of Colorado, Colorado Springs"
  },
  {
    "key": "_ob3wgwx3y",
    "name": "University of Colorado, Denver"
  },
  {
    "key": "_4dw0gddn4",
    "name": "University of Connecticut"
  },
  {
    "key": "_nc6jxo1uv",
    "name": "University of Dallas"
  },
  {
    "key": "_yemfsikt9",
    "name": "University of Dayton"
  },
  {
    "key": "_2y30bigqc",
    "name": "University of Delaware"
  },
  {
    "key": "_ft511g8d6",
    "name": "University of Denver"
  },
  {
    "key": "_2m4pop40m",
    "name": "University of Detroit Mercy"
  },
  {
    "key": "_eo0z1gh6j",
    "name": "University of the District of Columbia"
  },
  {
    "key": "_uu0va2xii",
    "name": "University of Dubuque"
  },
  {
    "key": "_hk7rw2223",
    "name": "University of Evansville"
  },
  {
    "key": "_ymmsi3l5v",
    "name": "University of Findlay"
  },
  {
    "key": "_zsgyvwd9g",
    "name": "University of Florida"
  },
  {
    "key": "_dqia496dt",
    "name": "University of Georgia"
  },
  {
    "key": "_h6dpvttwe",
    "name": "University of Great Falls"
  },
  {
    "key": "_tnfl1ycfd",
    "name": "University of Guam"
  },
  {
    "key": "_7g28r81lr",
    "name": "University of Hartford"
  },
  {
    "key": "_szx25mpdr",
    "name": "University of Hawai`i"
  },
  {
    "key": "_o7a68vava",
    "name": "University of Hawai`i, Hilo"
  },
  {
    "key": "_vu5o2k6nd",
    "name": "University of Hawai`i, Manoa"
  },
  {
    "key": "_7stnze15e",
    "name": "University of Hawai`i, West O`ahu"
  },
  {
    "key": "_rxjjg1u45",
    "name": "University of Health Sciences College of Osteopathic Medicine"
  },
  {
    "key": "_e9t9kk567",
    "name": "University of Houston"
  },
  {
    "key": "_z9fk18uo3",
    "name": "University of Houston, Clear Lake"
  },
  {
    "key": "_27cvwudwj",
    "name": "University of Houston, Downtown"
  },
  {
    "key": "_dswtgukm7",
    "name": "University of Houston, Victoria"
  },
  {
    "key": "_nof9d7ewy",
    "name": "University of Idaho"
  },
  {
    "key": "_nv8ygsleo",
    "name": "University of the Incarnate Word"
  },
  {
    "key": "_66agd02g5",
    "name": "University of Indianapolis"
  },
  {
    "key": "_5hm5l7oe8",
    "name": "University of Illinois at Chicago"
  },
  {
    "key": "_7zhh9lfjf",
    "name": "University of Illinois at Springfield"
  },
  {
    "key": "_np4eryga2",
    "name": "University of Illinois at Urbana-Champaign"
  },
  {
    "key": "_vft82aota",
    "name": "University of Iowa"
  },
  {
    "key": "_9whlq8gcz",
    "name": "University of Kansas"
  },
  {
    "key": "_21000vw81",
    "name": "University of Kansas Medical Center"
  },
  {
    "key": "_wcy7dk85m",
    "name": "University of Kentucky"
  },
  {
    "key": "_4pr439p3j",
    "name": "University of La Vernee"
  },
  {
    "key": "_vyf91a2k2",
    "name": "University of Louisiana at Lafayette"
  },
  {
    "key": "_soqs7575t",
    "name": "University of Louisiana at Monroe"
  },
  {
    "key": "_t80qcjnuj",
    "name": "University of Louisville"
  },
  {
    "key": "_wfr7x3exm",
    "name": "University of Maine"
  },
  {
    "key": "_33wkmgqth",
    "name": "University of Maine at Farmington"
  },
  {
    "key": "_24c06fd4z",
    "name": "University of Maine at Fort Kent"
  },
  {
    "key": "_32zp8zqbw",
    "name": "University of Maine at Presque Isle"
  },
  {
    "key": "_r91u793m7",
    "name": "University of Mary Hardin-Baylor"
  },
  {
    "key": "_qofak99qv",
    "name": "University of Mary Washington"
  },
  {
    "key": "_whldcl716",
    "name": "University of Maryland Baltimore County"
  },
  {
    "key": "_bifg6wkm8",
    "name": "University of Maryland at Baltimore"
  },
  {
    "key": "_t1ju075ah",
    "name": "University of Maryland at College Park"
  },
  {
    "key": "_7ir5av7cq",
    "name": "University of Maryland Eastern Shore"
  },
  {
    "key": "_371bc5fjs",
    "name": "University of Maryland University College"
  },
  {
    "key": "_g7v2ifraj",
    "name": "University of Massachusetts at Amherst"
  },
  {
    "key": "_2c96ne2lj",
    "name": "University of Massachusetts at Boston"
  },
  {
    "key": "_qn4zrva8z",
    "name": "University of Massachusetts at Dartmouth"
  },
  {
    "key": "_s88cqfw06",
    "name": "University of Massachusetts at Lowell"
  },
  {
    "key": "_o6yzp07m6",
    "name": "University of Massachusetts Medical School"
  },
  {
    "key": "_xqtb1bz0q",
    "name": "University of Medicine and Dentistry of New Jersey"
  },
  {
    "key": "_dxinpj70e",
    "name": "University of Memphis"
  },
  {
    "key": "_qg0dma8ka",
    "name": "University of Miami"
  },
  {
    "key": "_59xmchm0g",
    "name": "University of Michigan-Ann Arbor"
  },
  {
    "key": "_8ry0h3l43",
    "name": "University of Michigan-Dearborn"
  },
  {
    "key": "_n51atleta",
    "name": "University of Michigan-Flint"
  },
  {
    "key": "_9xmsqgapn",
    "name": "University of Minnesota-Crookston"
  },
  {
    "key": "_d8ttjggyj",
    "name": "University of Minnesota-Duluth"
  },
  {
    "key": "_0smanmtzl",
    "name": "University of Minnesota-Morris"
  },
  {
    "key": "_j3nr56lnx",
    "name": "University of Minnesota-Twin Cities"
  },
  {
    "key": "_g1irytvz1",
    "name": "University of Mississippi"
  },
  {
    "key": "_uptwglrry",
    "name": "University of Missouri-Columbia"
  },
  {
    "key": "_o3isompxx",
    "name": "University of Missouri-Kansas City"
  },
  {
    "key": "_k5padmpza",
    "name": "University of Missouri-Saint Louis"
  },
  {
    "key": "_2p8eklcy5",
    "name": "University of Montana, Missoula"
  },
  {
    "key": "_av7wmbth7",
    "name": "University of Montevallo"
  },
  {
    "key": "_dawmty7ob",
    "name": "University of Natural Medicine"
  },
  {
    "key": "_xj5ex9rvz",
    "name": "University of Nebraska, Kearney"
  },
  {
    "key": "_pgeixr75f",
    "name": "University of Nebraska, Lincoln"
  },
  {
    "key": "_0m0sv4ynp",
    "name": "University of Nebraska, Omaha"
  },
  {
    "key": "_myhrx8xyj",
    "name": "University of Nevada, Las Vegas"
  },
  {
    "key": "_9io12cuq9",
    "name": "University of Nevada, Reno"
  },
  {
    "key": "_p19mh0sw0",
    "name": "University of New England"
  },
  {
    "key": "_fwxxdx26p",
    "name": "University of New Hampshire, Durham"
  },
  {
    "key": "_cfjqbcbu0",
    "name": "University of New Haven"
  },
  {
    "key": "_70pft2ss2",
    "name": "University of New Mexico"
  },
  {
    "key": "_gywnldcbu",
    "name": "University of New Orleans"
  },
  {
    "key": "_vew1yzm24",
    "name": "University of Newport"
  },
  {
    "key": "_8bkelvudk",
    "name": "University of North Alabama"
  },
  {
    "key": "_8ztupztn2",
    "name": "University of North Carolina at Asheville"
  },
  {
    "key": "_0l4d2o6dt",
    "name": "University of North Carolina at Chapel Hill"
  },
  {
    "key": "_0j2e43hyz",
    "name": "University of North Carolina at Charlotte"
  },
  {
    "key": "_ejexys44q",
    "name": "University of North Carolina at Greensboro"
  },
  {
    "key": "_qmtswz7gt",
    "name": "University of North Carolina at Pembroke"
  },
  {
    "key": "_s9sey2jts",
    "name": "University of North Carolina at Wilmington"
  },
  {
    "key": "_ps6o3v0xg",
    "name": "University of North Dakota"
  },
  {
    "key": "_irlg4tbcf",
    "name": "University of North Dakota--Lake Region"
  },
  {
    "key": "_y92gd1b8j",
    "name": "University of North Florida"
  },
  {
    "key": "_jp8dwh0j3",
    "name": "University of North Texas"
  },
  {
    "key": "_4t2ugu9zc",
    "name": "University of Northern Colorado"
  },
  {
    "key": "_v97tg6tv7",
    "name": "University of Northern Iowa"
  },
  {
    "key": "_ammrujsrd",
    "name": "University of Notre Dame"
  },
  {
    "key": "_yd8lzf8ik",
    "name": "University of Oklahoma"
  },
  {
    "key": "_kxl7z61a3",
    "name": "University of Oregon"
  },
  {
    "key": "_61123glh5",
    "name": "University of Orlando"
  },
  {
    "key": "_odj7j3zsz",
    "name": "University of Osteopathic Medicine and Health Science"
  },
  {
    "key": "_umhcsws6o",
    "name": "University of the Ozarks"
  },
  {
    "key": "_tmsnhuehe",
    "name": "University of the Pacific"
  },
  {
    "key": "_g98zrqvdr",
    "name": "University of Pennsylvania"
  },
  {
    "key": "_3ofk4jc4q",
    "name": "University of Phoenix"
  },
  {
    "key": "_qo3skudfx",
    "name": "University of Pittsburgh"
  },
  {
    "key": "_lbku89aqk",
    "name": "University of Pittsburgh at Bradford"
  },
  {
    "key": "_4cpybosgr",
    "name": "University of Pittsburgh at Greenburg"
  },
  {
    "key": "_jt8357zdg",
    "name": "University of Pittsburgh at Johnstown"
  },
  {
    "key": "_0u99jokvg",
    "name": "University of Portland"
  },
  {
    "key": "_trvvh52fz",
    "name": "University of Puerto Rico, Mayaguez"
  },
  {
    "key": "_05so1h1w2",
    "name": "University of Puerto Rico, Rio Piedras"
  },
  {
    "key": "_uz2wctzlp",
    "name": "University of Puget Sound"
  },
  {
    "key": "_lyxssedth",
    "name": "University of Redlands"
  },
  {
    "key": "_vup0hew6z",
    "name": "University of Rhode Island"
  },
  {
    "key": "_08dy5qp0s",
    "name": "University of Richmond"
  },
  {
    "key": "_yx61uyacp",
    "name": "University of Rio Grande"
  },
  {
    "key": "_e8v5lbpwe",
    "name": "University of Rochester"
  },
  {
    "key": "_s3e18xqhv",
    "name": "University of Saint Francis"
  },
  {
    "key": "_6pbo9e06t",
    "name": "University of Saint Mary"
  },
  {
    "key": "_86md7y0gn",
    "name": "University of Saint Thomas, Houston"
  },
  {
    "key": "_a02bzbwy5",
    "name": "University of Saint Thomas, Saint Paul"
  },
  {
    "key": "_1bumsqj7c",
    "name": "University of San Diego"
  },
  {
    "key": "_4bexxlv0o",
    "name": "University of San Francisco"
  },
  {
    "key": "_ufp2z1dti",
    "name": "University of Sarasota"
  },
  {
    "key": "_guf4cy79q",
    "name": "University of Science and Arts of Oklahoma"
  },
  {
    "key": "_uf5epev4z",
    "name": "University of the Sciences in Philadelphia"
  },
  {
    "key": "_koh12bvbw",
    "name": "University of Scranton"
  },
  {
    "key": "_q0tcyj4wn",
    "name": "University of Sioux Falls"
  },
  {
    "key": "_w7jfw72uq",
    "name": "University of the South"
  },
  {
    "key": "_j2x8v7yfu",
    "name": "University of South Alabama"
  },
  {
    "key": "_gakq103tr",
    "name": "University of South Carolina"
  },
  {
    "key": "_ztp8lmxon",
    "name": "University of South Carolina, Aiken"
  },
  {
    "key": "_s8c19c1m8",
    "name": "University of South Carolina, Beaufort"
  },
  {
    "key": "_wszjnnsa9",
    "name": "University of South Carolina, Spartanburg"
  },
  {
    "key": "_dmmr7zoqi",
    "name": "University of South Dakota"
  },
  {
    "key": "_qhiwfq2l3",
    "name": "University of South Florida"
  },
  {
    "key": "_51bpnbpnf",
    "name": "University of Southern California"
  },
  {
    "key": "_4l8tw5fr0",
    "name": "University of Southern Indiana"
  },
  {
    "key": "_afexete10",
    "name": "University of Southern Maine"
  },
  {
    "key": "_fdyzd1of3",
    "name": "University of Southern Mississippi"
  },
  {
    "key": "_c7act34eo",
    "name": "University of Tampa"
  },
  {
    "key": "_3om09naqy",
    "name": "University of Tennessee, Chattanooga"
  },
  {
    "key": "_w476s4yp5",
    "name": "University of Tennessee Health Science Center"
  },
  {
    "key": "_o55pjh3tz",
    "name": "University of Tennessee, Knoxville"
  },
  {
    "key": "_gzc5gadu5",
    "name": "University of Tennessee, Martin"
  },
  {
    "key": "_ddcdpc4m2",
    "name": "University of Texas at Arlington"
  },
  {
    "key": "_ww4uueqvx",
    "name": "University of Texas at Austin"
  },
  {
    "key": "_hr8sk3jmx",
    "name": "University of Texas at Brownsville"
  },
  {
    "key": "_gz7sf36ok",
    "name": "University of Texas at Dallas"
  },
  {
    "key": "_o0z6hv5sr",
    "name": "University of Texas at El Paso"
  },
  {
    "key": "_m15w1ujfa",
    "name": "University of Texas Health Science Center at Houston"
  },
  {
    "key": "_dammi8vsl",
    "name": "University of Texas Health Science Center at San Antonio"
  },
  {
    "key": "_64843bj95",
    "name": "University of Texas Health Center at Tyler"
  },
  {
    "key": "_3i29yf3l6",
    "name": "University of Texas Medical Branch"
  },
  {
    "key": "_8fgulekok",
    "name": "University of Texas-Pan American"
  },
  {
    "key": "_foe58yk2y",
    "name": "University of Texas of the Permian Basin"
  },
  {
    "key": "_pk0w7aapc",
    "name": "University of Texas at San Antonio"
  },
  {
    "key": "_ntlfv1bsu",
    "name": "University of Texas at Tyler"
  },
  {
    "key": "_jdzektymt",
    "name": "University of Texas Southwestern Medical Center"
  },
  {
    "key": "_553pz2g2g",
    "name": "University of the Southwest"
  },
  {
    "key": "_n6g5qtoju",
    "name": "University of Toledo"
  },
  {
    "key": "_twerhh7et",
    "name": "University of Tulsa"
  },
  {
    "key": "_71x9f3x6v",
    "name": "University of Utah"
  },
  {
    "key": "_88eyunfq7",
    "name": "University of Vermont"
  },
  {
    "key": "_4mh9kuyqo",
    "name": "University of the Virgin Islands"
  },
  {
    "key": "_1syhrojm6",
    "name": "University of Virginia"
  },
  {
    "key": "_irooefkmi",
    "name": "University of Washington"
  },
  {
    "key": "_qzs1bhklf",
    "name": "University of West Alabama"
  },
  {
    "key": "_gqgz3yyf3",
    "name": "University of West Florida"
  },
  {
    "key": "_i3vobsqsg",
    "name": "University of West Georgia"
  },
  {
    "key": "_excz7562j",
    "name": "University of Wisconsin-Green Bay"
  },
  {
    "key": "_tnjcakc71",
    "name": "University of Wisconsin-Eau Claire"
  },
  {
    "key": "_q1zhhcaka",
    "name": "University of Wisconsin-La Crosse"
  },
  {
    "key": "_v0u6ggm1x",
    "name": "University of Wisconsin-Madison"
  },
  {
    "key": "_0henbocy5",
    "name": "University of Wisconsin-Milwaukee"
  },
  {
    "key": "_6a3pow4um",
    "name": "University of Wisconsin-Oshkosh"
  },
  {
    "key": "_cbt5tnpnr",
    "name": "University of Wisconsin-Parkside"
  },
  {
    "key": "_2gxivk11c",
    "name": "University of Wisconsin-Platteville"
  },
  {
    "key": "_fqp76zl6o",
    "name": "University of Wisconsin-Stevens Point"
  },
  {
    "key": "_s22u07pyi",
    "name": "University of Wisconsin-Stout"
  },
  {
    "key": "_ggg05z7up",
    "name": "University of Wisconsin-Superior"
  },
  {
    "key": "_8s2s4ng1m",
    "name": "University of Wisconsin-River Falls"
  },
  {
    "key": "_2ivewgt4j",
    "name": "University of Wisconsin-Whitewater"
  },
  {
    "key": "_klb0c3nmf",
    "name": "University of Wyoming"
  },
  {
    "key": "_55tf57tzw",
    "name": "Upper Iowa University"
  },
  {
    "key": "_zemhlt0s5",
    "name": "Urbana University"
  },
  {
    "key": "_aj3lbazmx",
    "name": "Ursinus College"
  },
  {
    "key": "_y973unyj3",
    "name": "Ursuline College"
  },
  {
    "key": "_gystkqjfx",
    "name": "Utah State University"
  },
  {
    "key": "_rpebl3953",
    "name": "Utah Valley State College"
  },
  {
    "key": "_niz5gxufo",
    "name": "Utica College"
  },
  {
    "key": "_xox5gzdlj",
    "name": "Valdosta State University"
  },
  {
    "key": "_m798nuyl3",
    "name": "Valley City State University"
  },
  {
    "key": "_lumyfktby",
    "name": "Valparaiso University"
  },
  {
    "key": "_xrdsyb9d2",
    "name": "Vanderbilt University"
  },
  {
    "key": "_p96n5es7g",
    "name": "Vanguard University"
  },
  {
    "key": "_fsx3uh3ow",
    "name": "Vassar College"
  },
  {
    "key": "_8urqcpw0z",
    "name": "Vaughn College of Aeronautics"
  },
  {
    "key": "_pu47ru523",
    "name": "Vennard College"
  },
  {
    "key": "_srcjni2nq",
    "name": "Vermont Technical College"
  },
  {
    "key": "_4oi8dq7xo",
    "name": "Villanova University"
  },
  {
    "key": "_qqgh47v5s",
    "name": "Virginia Commonwealth University"
  },
  {
    "key": "_xmrjp4ags",
    "name": "Virginia Intermont College"
  },
  {
    "key": "_u45t1z588",
    "name": "Virginia International University"
  },
  {
    "key": "_dubqadsk6",
    "name": "Virginia Military Institute"
  },
  {
    "key": "_dc5i8igpu",
    "name": "Virginia Polytechnic Institute and State University"
  },
  {
    "key": "_owmdxf36g",
    "name": "Virginia State University"
  },
  {
    "key": "_sqt5n007k",
    "name": "Virginia Union University"
  },
  {
    "key": "_6cpx6tf9u",
    "name": "Virginia University of Lynchburg"
  },
  {
    "key": "_cscf8uysh",
    "name": "Virginia Wesleyan College"
  },
  {
    "key": "_ny1rus1wb",
    "name": "Viterbo College"
  },
  {
    "key": "_3cnac0jz0",
    "name": "Voorhees College"
  },
  {
    "key": "_wh7rjp66x",
    "name": "Wabash College"
  },
  {
    "key": "_42qf9rc16",
    "name": "Wagner College"
  },
  {
    "key": "_frzmr672l",
    "name": "Wake Forest University"
  },
  {
    "key": "_rlbzijfxj",
    "name": "Warner Pacific College"
  },
  {
    "key": "_6fbnupc7r",
    "name": "Wartburg College"
  },
  {
    "key": "_p7xrmo4og",
    "name": "Walden University"
  },
  {
    "key": "_rap1i8ofv",
    "name": "Waldorf College"
  },
  {
    "key": "_gksaqqmso",
    "name": "Walla Walla University"
  },
  {
    "key": "_pm8yvnenc",
    "name": "Walsh University"
  },
  {
    "key": "_jezil3q8q",
    "name": "Warren Wilson College"
  },
  {
    "key": "_cbq7w720j",
    "name": "Washburn University"
  },
  {
    "key": "_wrufnkj9q",
    "name": "Washington & Jefferson College"
  },
  {
    "key": "_zb7h7qhid",
    "name": "Washington & Lee University"
  },
  {
    "key": "_39os8dfoc",
    "name": "Washington Bible College / Capital Bible Seminary"
  },
  {
    "key": "_1q1nvbigq",
    "name": "Washington College"
  },
  {
    "key": "_0nkh2qg8g",
    "name": "Washington State University"
  },
  {
    "key": "_sy2xzszsx",
    "name": "Washington University in Saint Louis"
  },
  {
    "key": "_lfvaiybgk",
    "name": "Watkins College of Art, Design and Film"
  },
  {
    "key": "_bpdrjv207",
    "name": "Wayland Baptist University"
  },
  {
    "key": "_dilvtluvx",
    "name": "Wayne State College"
  },
  {
    "key": "_42j383cyb",
    "name": "Wayne State University"
  },
  {
    "key": "_74g64braa",
    "name": "Waynesburg College"
  },
  {
    "key": "_j9txx9upb",
    "name": "Webb Institute"
  },
  {
    "key": "_jl8eapt65",
    "name": "Weber State University"
  },
  {
    "key": "_anxwoceau",
    "name": "Webster University"
  },
  {
    "key": "_c3z1e4803",
    "name": "Webster University North Florida"
  },
  {
    "key": "_tz6yn7dt4",
    "name": "Webster University Orlando"
  },
  {
    "key": "_0nbklfwpy",
    "name": "Wellesley College"
  },
  {
    "key": "_24m3rgjzv",
    "name": "Wells College"
  },
  {
    "key": "_pj6xcw8a9",
    "name": "Wentworth Institute of Technology"
  },
  {
    "key": "_8jlj4ocp7",
    "name": "Wesley College"
  },
  {
    "key": "_0a0m5d5bz",
    "name": "Wesleyan College"
  },
  {
    "key": "_afebmf3zq",
    "name": "Wesleyan University"
  },
  {
    "key": "_pui0xpduz",
    "name": "West Coast University"
  },
  {
    "key": "_g72i78eqn",
    "name": "West Chester University of Pennsylvania"
  },
  {
    "key": "_ki3sz5o0b",
    "name": "West Liberty State College"
  },
  {
    "key": "_v136xfut2",
    "name": "West Texas A&M University"
  },
  {
    "key": "_p9f1af9c7",
    "name": "West Virginia State University"
  },
  {
    "key": "_nopnvoi28",
    "name": "West Virginia University"
  },
  {
    "key": "_4vo00sdry",
    "name": "West Virginia University Parkersburg"
  },
  {
    "key": "_n6770ches",
    "name": "West Virginia Wesleyan College"
  },
  {
    "key": "_r89kjdy9y",
    "name": "Western Baptist College"
  },
  {
    "key": "_uu2lkm2x4",
    "name": "Western Carolina University"
  },
  {
    "key": "_i64b2eu3c",
    "name": "Western Connecticut State University"
  },
  {
    "key": "_pmliddkxr",
    "name": "Western Governors University"
  },
  {
    "key": "_tefuj5chr",
    "name": "Western Illinois University"
  },
  {
    "key": "_tlbscztm3",
    "name": "Western International University"
  },
  {
    "key": "_sdawmj7a7",
    "name": "Western Kentucky University"
  },
  {
    "key": "_envdp155h",
    "name": "Western Maryland College"
  },
  {
    "key": "_jwg8owi7t",
    "name": "Western Michigan University"
  },
  {
    "key": "_o2gf6o1ez",
    "name": "Western Montana College"
  },
  {
    "key": "_9fmmq2or8",
    "name": "Western New England College"
  },
  {
    "key": "_50l1q3c7g",
    "name": "Western New Mexico University"
  },
  {
    "key": "_fno95etn9",
    "name": "Western Oregon University"
  },
  {
    "key": "_ow8gg7r4q",
    "name": "Western State College"
  },
  {
    "key": "_oc51ywcax",
    "name": "Western State University College of Law"
  },
  {
    "key": "_i0p0qkf1e",
    "name": "Western States Chiropractic College"
  },
  {
    "key": "_61mb3umq5",
    "name": "Western University of Health Sciences"
  },
  {
    "key": "_9e0gnwytr",
    "name": "Western Washington University"
  },
  {
    "key": "_1bpdlvlc4",
    "name": "Westfield State College"
  },
  {
    "key": "_lp6r1q771",
    "name": "Westminster College, Fulton Missouri"
  },
  {
    "key": "_7lzru05wd",
    "name": "Westminster College, New Wilmington Pennsylvania"
  },
  {
    "key": "_n53bk7r1d",
    "name": "Westminster College, Salt Lake City"
  },
  {
    "key": "_ujlrdra0l",
    "name": "Westminster Theological Seminary"
  },
  {
    "key": "_va2xr4glt",
    "name": "Westminster Theological Seminary in California"
  },
  {
    "key": "_wque4xts8",
    "name": "Westmont College"
  },
  {
    "key": "_ckd1inn3a",
    "name": "Westwood College — California"
  },
  {
    "key": "_xrgebewab",
    "name": "Westwood College — Colorado"
  },
  {
    "key": "_mj30si7yv",
    "name": "Westwood College — Georgia"
  },
  {
    "key": "_vkjm9ae85",
    "name": "Westwood College — Illinois"
  },
  {
    "key": "_9vmlu4842",
    "name": "Westwood College — Texas"
  },
  {
    "key": "_d5fxu9ywk",
    "name": "Westwood College — Virginia"
  },
  {
    "key": "_d4qqvkt4s",
    "name": "Westwood College of Technology"
  },
  {
    "key": "_1c51rwtpc",
    "name": "Wheaton College, Wheaton Illinois"
  },
  {
    "key": "_rvsgl0je5",
    "name": "Wheaton College, Massachusetts"
  },
  {
    "key": "_2zbgn39ub",
    "name": "Wheeling Jesuit University"
  },
  {
    "key": "_8ip2ozz3h",
    "name": "Wheelock College"
  },
  {
    "key": "_m7u7hl0eh",
    "name": "Whitman College"
  },
  {
    "key": "_hen5ybkx9",
    "name": "Whittier College"
  },
  {
    "key": "_krtvtdz65",
    "name": "Whitworth University"
  },
  {
    "key": "_e3fi8h8lz",
    "name": "Wichita State University"
  },
  {
    "key": "_eo625vxp9",
    "name": "Widener University"
  },
  {
    "key": "_5ga3jilkv",
    "name": "Wilberforce University"
  },
  {
    "key": "_dvgbp718h",
    "name": "Wilkes University"
  },
  {
    "key": "_5hit028vi",
    "name": "Willamette University"
  },
  {
    "key": "_oghelxhhh",
    "name": "William Carey International University"
  },
  {
    "key": "_273eiomi1",
    "name": "William Howard Taft University"
  },
  {
    "key": "_efhvilmzd",
    "name": "William Jessup University"
  },
  {
    "key": "_4fg4k8lbx",
    "name": "William Jewell College"
  },
  {
    "key": "_qyzd2f53u",
    "name": "William Mitchell College of Law"
  },
  {
    "key": "_26b97j3cf",
    "name": "William Paterson University"
  },
  {
    "key": "_57j3fogqv",
    "name": "William Penn College"
  },
  {
    "key": "_o2kfzkeks",
    "name": "William Woods University"
  },
  {
    "key": "_pz1ntqpn3",
    "name": "Williams Baptist College"
  },
  {
    "key": "_59qbdlzq6",
    "name": "William Carey University"
  },
  {
    "key": "_90w52tlm5",
    "name": "Williams College"
  },
  {
    "key": "_wdlnamkle",
    "name": "Wilmington College, New Castle Delaware"
  },
  {
    "key": "_f64110d3x",
    "name": "Wilmington College, Wilmington Ohio"
  },
  {
    "key": "_ukkvexjvl",
    "name": "Wilson College"
  },
  {
    "key": "_ubyu8m2bt",
    "name": "Wingate University"
  },
  {
    "key": "_faguwtz8q",
    "name": "Winston-Salem State University"
  },
  {
    "key": "_nfofj9xu1",
    "name": "Winona State University"
  },
  {
    "key": "_gna7y1ti3",
    "name": "Winthrop University"
  },
  {
    "key": "_yehm5vtjx",
    "name": "Wisconsin Lutheran College"
  },
  {
    "key": "_1ctv31f8l",
    "name": "Wittenberg University"
  },
  {
    "key": "_7cf79qx1p",
    "name": "Wofford College"
  },
  {
    "key": "_c8b8p8b6m",
    "name": "Woodbury University"
  },
  {
    "key": "_pjc9leqqq",
    "name": "Woods Hole Oceanographic Institution"
  },
  {
    "key": "_miil7gx8g",
    "name": "Worcester Polytechnic Institute"
  },
  {
    "key": "_ywznrivbt",
    "name": "Worcester State College"
  },
  {
    "key": "_9ouxykl4s",
    "name": "Wright Institute"
  },
  {
    "key": "_04ua0uetj",
    "name": "Wright State University"
  },
  {
    "key": "_0faklzj8t",
    "name": "Xavier University, Cincinnati, OH"
  },
  {
    "key": "_p86unyjoh",
    "name": "Xavier University of Louisiana"
  },
  {
    "key": "_2xr2pjbyc",
    "name": "Yale University"
  },
  {
    "key": "_wkcz4ew30",
    "name": "Yeshiva University"
  },
  {
    "key": "_swnpt5fb2",
    "name": "York College, York Nebraska"
  },
  {
    "key": "_l20wdjrx9",
    "name": "York College of Pennsylvania"
  },
  {
    "key": "_j4rlyawxe",
    "name": "Youngstown State University"
  },
  {
    "key": "_6ky975x1g",
    "name": "Zion Bible Institute"
  }
]


export default COLLEGES;