$( document ).ready(function() {
    console.log( "ready!" );
    var dados = [
      {"simbolo": "H", "nome": "Hidrogênio", "numeroAtomico": 1, "massaAtomica": 1.00794, "distribuicao": [1], "classificacao": "nao-metais", "estado": "gasoso"},
      {"simbolo": "He", "nome": "Hélio", "numeroAtomico": 2, "massaAtomica": 4.002602, "distribuicao": [2], "classificacao": "gases-nobres", "estado": "gasoso"},
      {"simbolo": "Li", "nome": "Lítio", "numeroAtomico": 3, "massaAtomica": 6.941, "distribuicao": [2,1], "classificacao": "metais-alcalinos", "estado": "solido"},
      {"simbolo": "Be", "nome" : "Berílio", "numeroAtomico": 4 , "massaAtomica": 9.012182 , "distribuicao" : [2,2], "classificacao" : "metais-alcalinos-terrosos", "estado" : "solido"},
      {"simbolo":"B", "nome" : "Boro", "numeroAtomico": 5 , "massaAtomica": 10.811 , "distribuicao" : [2,3], "classificacao" : "semi-metais", "estado" : "solido"},
      {"simbolo":"C", "nome": "Carbono", "numeroAtomico": 	6	, "massaAtomica" : "12,0107", "distribuicao" : [2,4], "classificacao" : "nao-metais", "estado" : "solido"},
      {"simbolo":"N", "nome": "Nitrogênio", "numeroAtomico": 	7	, "massaAtomica" : "14,0067", "distribuicao" : [2,5], "classificacao" : "nao-metais", "estado" : "gasoso"},
      {"simbolo":"O", "nome": "Oxigênio", "numeroAtomico": 	8	, "massaAtomica" : "15,9994", "distribuicao" : [2,6], "classificacao" : "nao-metais", "estado" : "gasoso"},
      {"simbolo":"F", "nome": "Flúor", "numeroAtomico": 	9	, "massaAtomica" : "18,9984032", "distribuicao" : [2,7], "classificacao" : "halogenios", "estado" : "gasoso"},
      {"simbolo":"Ne", "nome": "Neônio", "numeroAtomico": 	10	, "massaAtomica" : "20,1797", "distribuicao" : [2,8], "classificacao" : "gases-nobres", "estado" : "gasoso"},
      {"simbolo":"Na", "nome": "Sódio", "numeroAtomico": 	11	, "massaAtomica" : "22,98976…", "distribuicao" : [2,8,1], "classificacao" : "metais-alcalinos", "estado" : "solido"},
      {"simbolo":"Mg", "nome": "Magnésio", "numeroAtomico": 	12	, "massaAtomica" : "24,305", "distribuicao" : [2,8,2], "classificacao" : "metais-alcalinos-terrosos", "estado" : "solido"},
      {"simbolo":"Al", "nome": "Alumínio", "numeroAtomico": 	13	, "massaAtomica" : "26,9815386", "distribuicao" : [2,8,3], "classificacao" : "metais-representativos", "estado" : "solido"},
      {"simbolo":"Si", "nome": "Silício", "numeroAtomico": 	14	, "massaAtomica" : "28,0855", "distribuicao" : [2,8,4], "classificacao" : "semi-metais", "estado" : "solido"},
      {"simbolo":"P", "nome": "Fósforo", "numeroAtomico": 	15	, "massaAtomica" : "30,973762", "distribuicao" : [2,8,5], "classificacao" : "nao-metais", "estado" : "solido"},
      {"simbolo":"S", "nome": "Enxofre", "numeroAtomico": 	16	, "massaAtomica" : "32,065", "distribuicao" : [2,8,6], "classificacao" : "nao-metais", "estado" : "solido"},
      {"simbolo":"Cl", "nome": "Cloro", "numeroAtomico": 	17	, "massaAtomica" : "35,453", "distribuicao" : [2,8,7], "classificacao" : "halogenios", "estado" : "gasoso"},
      {"simbolo":"Ar", "nome": "Argônio", "numeroAtomico": 	18	, "massaAtomica" : "39,948", "distribuicao" : [2,8,8], "classificacao" : "gases-nobres", "estado" : "gasoso"},
      {"simbolo":"K", "nome": "Potássio", "numeroAtomico": 	19	, "massaAtomica" : "39,0983", "distribuicao" : [2,8,8,1], "classificacao" : "metais-alcalinos", "estado" : "solido"},
      {"simbolo":"Ca", "nome": "Cálcio", "numeroAtomico": 	20	, "massaAtomica" : "40,078", "distribuicao" : [2,8,8,2], "classificacao" : "metais-alcalinos-terrosos", "estado" : "solido"},
      {"simbolo":"Sc", "nome": "Escândio", "numeroAtomico": 	21	, "massaAtomica" : "40,955912", "distribuicao" : [2,8,9,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Ti", "nome": "Titânio", "numeroAtomico": 	22	, "massaAtomica" : "47,867", "distribuicao" : [2,8,10,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"V", "nome": "Vanádio", "numeroAtomico": 	23	, "massaAtomica" : "50,9415", "distribuicao" : [2,8,11,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Cr", "nome": "Cromo", "numeroAtomico": 	24	, "massaAtomica" : "51,9961", "distribuicao" : [2,8,12,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Mn", "nome": "Manganês", "numeroAtomico": 	25	, "massaAtomica" : "54,938045", "distribuicao" : [2,8,13,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Fe", "nome": "Ferro", "numeroAtomico": 	26	, "massaAtomica" : "55,845", "distribuicao" : [2,8,14,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Co", "nome": "Cobalto", "numeroAtomico": 	27	, "massaAtomica" : "58,933195", "distribuicao" : [2,8,15,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Ni", "nome": "Níquel", "numeroAtomico": 	28	, "massaAtomica" : "58,6934", "distribuicao" : [2,8,16,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Cu", "nome": "Cobre", "numeroAtomico": 	29	, "massaAtomica" : "63,546", "distribuicao" : [2,8,17,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Zn", "nome": "Zinco", "numeroAtomico": 	30	, "massaAtomica" : "65,38", "distribuicao" : [2,8,18,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Ga", "nome": "Gálio", "numeroAtomico": 	31	, "massaAtomica" : "69,723", "distribuicao" : [2,8,18,3], "classificacao" : "metais-representativos", "estado" : "solido"},
      {"simbolo":"Ge", "nome": "Germânio", "numeroAtomico": 	32	, "massaAtomica" : "72,63", "distribuicao" : [2,8,18,4], "classificacao" : "semi-metais", "estado" : "solido"},
      {"simbolo":"As", "nome": "Arsênio", "numeroAtomico": 	33	, "massaAtomica" : "74,9216", "distribuicao" : [2,8,18,5], "classificacao" : "semi-metais", "estado" : "solido"},
      {"simbolo":"Se", "nome": "Selênio", "numeroAtomico": 	34	, "massaAtomica" : "78,96", "distribuicao" : [2,8,18,6], "classificacao" : "nao-metais", "estado" : "solido"},
      {"simbolo":"Br", "nome": "Bromo", "numeroAtomico": 	35	, "massaAtomica" : "79,904", "distribuicao" : [2,8,18,7], "classificacao" : "halogenios", "estado" : "liquido"},
      {"simbolo":"Kr", "nome": "Cripitônio", "numeroAtomico": 	36	, "massaAtomica" : "83,798", "distribuicao" : [2,8,18,8], "classificacao" : "gases-nobres", "estado" : "gasoso"},
      {"simbolo":"Rb", "nome": "Rubídio", "numeroAtomico": 	37	, "massaAtomica" : "85,4678", "distribuicao" : [2,8,18,8,1], "classificacao" : "metais-alcalinos", "estado" : "solido"},
      {"simbolo":"Sr", "nome": "Estrôncio", "numeroAtomico": 	38	, "massaAtomica" : "87,62", "distribuicao" : [2,8,18,8,2], "classificacao" : "metais-alcalinos-terrosos", "estado" : "solido"},
      {"simbolo":"Y", "nome": "Itrio", "numeroAtomico": 	39	, "massaAtomica" : "88,90585", "distribuicao" : [2,8,18,9,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Zr", "nome": "Zircônio", "numeroAtomico": 	40	, "massaAtomica" : "91,224", "distribuicao" : [2,8,18,10,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Nb", "nome": "Nióbio", "numeroAtomico": 	41	, "massaAtomica" : "92,90638", "distribuicao" : [2,8,18,12,1], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Mo", "nome": "Molibdênio", "numeroAtomico": 	42	, "massaAtomica" : "95,96", "distribuicao" : [2,8,18,13,1], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Tc", "nome": "Tecnécio", "numeroAtomico": 	43	, "massaAtomica" : "(98)", "distribuicao" : [2,8,18,13,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Ru", "nome": "Rutênio", "numeroAtomico": 	44	, "massaAtomica" : "101,07", "distribuicao" : [2,8,18,15,1], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Rh", "nome": "Ródio", "numeroAtomico": 	45	, "massaAtomica" : "102,9055", "distribuicao" : [2,8,18,16,1], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Pd", "nome": "Paládio", "numeroAtomico": 	46	, "massaAtomica" : "106,42", "distribuicao" : [2,8,18,18], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Ag", "nome": "Prata", "numeroAtomico": 	47	, "massaAtomica" : "107,8682", "distribuicao" : [2,8,18,18,1], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Cd", "nome": "Cádmio", "numeroAtomico": 	48	, "massaAtomica" : "112,411", "distribuicao" : [2,8,18,18,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"In", "nome": "Indio", "numeroAtomico": 	49	, "massaAtomica" : "114,818", "distribuicao" : [2,8,18,18,3], "classificacao" : "metais-representativos", "estado" : "solido"},
      {"simbolo":"Sn", "nome": "Estanho", "numeroAtomico": 	50	, "massaAtomica" : "118,71", "distribuicao" : [2,8,18,18,4], "classificacao" : "metais-representativos", "estado" : "solido"},
      {"simbolo":"Sb", "nome": "Antimônio", "numeroAtomico": 	51	, "massaAtomica" : "121,76", "distribuicao" : [2,8,18,18,5], "classificacao" : "semi-metais", "estado" : "solido"},
      {"simbolo":"Te", "nome": "Telúrio", "numeroAtomico": 	52	, "massaAtomica" : "127,6", "distribuicao" : [2,8,18,18,6], "classificacao" : "semi-metais", "estado" : "solido"},
      {"simbolo":"I", "nome": "Iodo", "numeroAtomico": 	53	, "massaAtomica" : "126,90447", "distribuicao" : [2,8,18,18,7], "classificacao" : "halogenios", "estado" : "solido"},
      {"simbolo":"Xe", "nome": "Xemônio", "numeroAtomico": 	54	, "massaAtomica" : "131,293", "distribuicao" : [2,8,18,18,8], "classificacao" : "gases-nobres", "estado" : "gasoso"},
      {"simbolo":"Cs", "nome": "Césio", "numeroAtomico": 	55	, "massaAtomica" : "132,9054…", "distribuicao" : [2,8,18,18,8,1], "classificacao" : "metais-alcalinos", "estado" : "solido"},
      {"simbolo":"Ba", "nome": "Bário", "numeroAtomico": 	56	, "massaAtomica" : "137,327", "distribuicao" : [2,8,18,18,8,2], "classificacao" : "metais-alcalinos-terrosos", "estado" : "solido"},
      {"simbolo":"La", "nome": "Lantânio", "numeroAtomico": 	57	, "massaAtomica" : "138,90547", "distribuicao" : [2,8,18,18,9,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Ce", "nome": "Cério", "numeroAtomico": 	58	, "massaAtomica" : "140,116", "distribuicao" : [2,8,18,19,9,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Pr", "nome": "Praseodímio", "numeroAtomico": 	59	, "massaAtomica" : "140,90765", "distribuicao" : [2,8,18,21,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Nd", "nome": "Neodímio", "numeroAtomico": 	60	, "massaAtomica" : "144,242", "distribuicao" : [2,8,18,22,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Pm", "nome": "Promécio", "numeroAtomico": 	61	, "massaAtomica" : "(145)", "distribuicao" : [2,8,18,23,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Sm", "nome": "Samário", "numeroAtomico": 	62	, "massaAtomica" : "150,36", "distribuicao" : [2,8,18,24,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Eu", "nome": "Európio", "numeroAtomico": 	63	, "massaAtomica" : "151,964", "distribuicao" : [2,8,18,25,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Gd", "nome": "Gadolínio", "numeroAtomico": 	64	, "massaAtomica" : "157,25", "distribuicao" : [2,8,18,25,9,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Tb", "nome": "Térbio", "numeroAtomico": 	65	, "massaAtomica" : "158,92535", "distribuicao" : [2,8,18,27,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Dy", "nome": "Disprósio", "numeroAtomico": 	66	, "massaAtomica" : "162,5", "distribuicao" : [2,8,18,28,8,2], "classificacao" : "lantanideos", "estado" : "desconhecido"},
      {"simbolo":"Ho", "nome": "Hólmio", "numeroAtomico": 	67	, "massaAtomica" : "164,93032", "distribuicao" : [2,8,18,29,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Er", "nome": "Érbio", "numeroAtomico": 	68	, "massaAtomica" : "167,259", "distribuicao" : [2,8,18,30,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Tm", "nome": "Túlio", "numeroAtomico": 	69	, "massaAtomica" : "168,93421", "distribuicao" : [2,8,18,31,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Yb", "nome": "Itérbio", "numeroAtomico": 	70	, "massaAtomica" : "173,054", "distribuicao" : [2,8,18,32,8,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Lu", "nome": "Lutécio", "numeroAtomico": 	71	, "massaAtomica" : "174,9668", "distribuicao" : [2,8,18,32,9,2], "classificacao" : "lantanideos", "estado" : "solido"},
      {"simbolo":"Hf", "nome": "Háfnio", "numeroAtomico": 	72	, "massaAtomica" : "178,49", "distribuicao" : [2,8,18,32,10,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Ta", "nome": "Tântalo", "numeroAtomico": 	73	, "massaAtomica" : "180,94788", "distribuicao" : [2,8,18,32,11,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"W", "nome": "Tungstênio", "numeroAtomico": 	74	, "massaAtomica" : "183,84", "distribuicao" : [2,8,18,32,12,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Re", "nome": "Rênio", "numeroAtomico": 	75	, "massaAtomica" : "186,207", "distribuicao" : [2,8,18,32,13,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Os", "nome": "Ósmio", "numeroAtomico": 	76	, "massaAtomica" : "190,23", "distribuicao" : [2,8,18,32,14,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Ir", "nome": "Irídio", "numeroAtomico": 	77	, "massaAtomica" : "192,217", "distribuicao" : [2,8,18,32,15,2], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Pt", "nome": "Platina", "numeroAtomico": 	78	, "massaAtomica" : "195,084", "distribuicao" : [2,8,18,32,17,1], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Au", "nome": "Ouro", "numeroAtomico": 	79	, "massaAtomica" : "169,966569", "distribuicao" : [2,8,18,32,18,1], "classificacao" : "metais-em-transicao", "estado" : "solido"},
      {"simbolo":"Hg", "nome": "Mercúrio", "numeroAtomico": 	80	, "massaAtomica" : "200,59", "distribuicao" : [2,8,18,32,18,2], "classificacao" : "metais-em-transicao", "estado" : "liquido"},
      {"simbolo":"Tl", "nome": "Tálio", "numeroAtomico": 	81	, "massaAtomica" : "204,3833", "distribuicao" : [2,8,18,32,18,3], "classificacao" : "metais-representativos", "estado" : "solido"},
      {"simbolo":"Pb", "nome": "Chumbo", "numeroAtomico": 	82	, "massaAtomica" : "207,2", "distribuicao" : [2,8,18,32,18,4], "classificacao" : "metais-representativos", "estado" : "solido"},
      {"simbolo":"Bi", "nome": "Bismuto", "numeroAtomico": 	83	, "massaAtomica" : "208,9804", "distribuicao" : [2,8,18,32,18,5], "classificacao" : "metais-representativos", "estado" : "solido"},
      {"simbolo":"Po", "nome": "Polônio", "numeroAtomico": 	84	, "massaAtomica" : "(209)", "distribuicao" : [2,8,18,32,18,6], "classificacao" : "semi-metais", "estado" : "solido"},
      {"simbolo":"At", "nome": "Astato", "numeroAtomico": 	85	, "massaAtomica" : "(210)", "distribuicao" : [2,8,18,32,18,7], "classificacao" : "halogenios", "estado" : "solido"},
      {"simbolo":"Rn", "nome": "Radônio", "numeroAtomico": 	86	, "massaAtomica" : "(222)", "distribuicao" : [2,8,18,32,18,8], "classificacao" : "gases-nobres", "estado" : "gasoso"},
      {"simbolo":"Fr", "nome": "Frâncio", "numeroAtomico": 	87	, "massaAtomica" : "(223)", "distribuicao" : [2,8,18,32,18,8,1], "classificacao" : "metais-alcalinos", "estado" : "solido"},
      {"simbolo":"Ra", "nome": "Rádio", "numeroAtomico": 	88	, "massaAtomica" : "(226)", "distribuicao" : [2,8,18,32,18,8,2], "classificacao" : "metais-alcalinos-terrosos", "estado" : "solido"},
      {"simbolo":"Ac", "nome": "Actínio", "numeroAtomico": 	89	, "massaAtomica" : "(227)", "distribuicao" : [2,8,18,32,18,9,2], "classificacao" : "actinideos", "estado" : "solido"},
      {"simbolo":"Th", "nome": "Tório", "numeroAtomico": 	90	, "massaAtomica" : "232,03806", "distribuicao" : [2,8,18,32,18,10,2], "classificacao" : "actinideos", "estado" : "solido"},
      {"simbolo":"Pa", "nome": "Protactínio", "numeroAtomico": 	91	, "massaAtomica" : "231,03588", "distribuicao" : [2,8,18,32,20,9,2], "classificacao" : "actinideos", "estado" : "solido"},
      {"simbolo":"U", "nome": "Urânio", "numeroAtomico": 	92	, "massaAtomica" : "238,02891", "distribuicao" : [2,8,18,32,21,9,2], "classificacao" : "actinideos", "estado" : "solido"},
      {"simbolo":"Np", "nome": "Neptúnio", "numeroAtomico": 	93	, "massaAtomica" : "(237)", "distribuicao" : [2,8,18,32,22,9,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Pu", "nome": "Plutônio", "numeroAtomico": 	94	, "massaAtomica" : "(244)", "distribuicao" : [2,8,18,32,24,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Am", "nome": "Amerício", "numeroAtomico": 	95	, "massaAtomica" : "(243)", "distribuicao" : [2,8,18,32,25,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Cm", "nome": "Cúrio", "numeroAtomico": 	96	, "massaAtomica" : "(247)", "distribuicao" : [2,8,18,32,25,9,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Bk", "nome": "Berquélio", "numeroAtomico": 	97	, "massaAtomica" : "(247)", "distribuicao" : [2,8,18,32,27,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Cf", "nome": "Califórnio", "numeroAtomico": 	98	, "massaAtomica" : "(251)", "distribuicao" : [2,8,18,32,28,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Es", "nome": "Einstênio", "numeroAtomico": 	99	, "massaAtomica" : "(252)", "distribuicao" : [2,8,18,32,29,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Fm", "nome": "Férmio", "numeroAtomico": 	100	, "massaAtomica" : "(257)", "distribuicao" : [2,8,18,32,30,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Md", "nome": "Mendelévio", "numeroAtomico": 	101	, "massaAtomica" : "(258)", "distribuicao" : [2,8,18,32,31,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"No", "nome": "Nobélio", "numeroAtomico": 	102	, "massaAtomica" : "(259)", "distribuicao" : [2,8,18,32,32,8,2], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Lr", "nome": "Laurêncio", "numeroAtomico": 	103	, "massaAtomica" : "(262)", "distribuicao" : [2,8,18,32,32,8,3], "classificacao" : "actinideos", "estado" : "desconhecido"},
      {"simbolo":"Rf", "nome": "Rutherfórdio", "numeroAtomico": 	104	, "massaAtomica" : "(267)", "distribuicao" : [2,8,18,32,32,10,2], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Db", "nome": "Dúbnio", "numeroAtomico": 	105	, "massaAtomica" : "(268)", "distribuicao" : [2,8,18,32,32,11,2], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Sg", "nome": "Seabórgio", "numeroAtomico": 	106	, "massaAtomica" : "(271)", "distribuicao" : [2,8,18,32,32,12,2], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Bh", "nome": "Bóhrio", "numeroAtomico": 	107	, "massaAtomica" : "(272)", "distribuicao" : [2,8,18,32,32,13,2], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Hs", "nome": "Hássio", "numeroAtomico": 	108	, "massaAtomica" : "(270)", "distribuicao" : [2,8,18,32,32,14,2], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Mt", "nome": "Meitnério", "numeroAtomico": 	109	, "massaAtomica" : "(276)", "distribuicao" : [2,8,18,32,32,15,2], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Ds", "nome": "Darmstádio", "numeroAtomico": 	110	, "massaAtomica" : "(281)", "distribuicao" : [2,8,18,32,32,17,1], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Rg", "nome": "Roentgênio", "numeroAtomico": 	111	, "massaAtomica" : "(280)", "distribuicao" : [2,8,18,32,32,18,1], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Cn", "nome": "Copernício", "numeroAtomico": 	112	, "massaAtomica" : "(285)", "distribuicao" : [2,8,18,32,32,18,2], "classificacao" : "metais-em-transicao", "estado" : "desconhecido"},
      {"simbolo":"Uut", "nome": "Ununtrio", "numeroAtomico": 	113	, "massaAtomica" : "(284)", "distribuicao" : [2,8,18,32,32,18,3], "classificacao" : "metais-representativos", "estado" : "desconhecido"},
      {"simbolo":"Fl", "nome": "Fleróvio", "numeroAtomico": 	114	, "massaAtomica" : "(289)", "distribuicao" : [2,8,18,32,32,18,4], "classificacao" : "metais-representativos", "estado" : "desconhecido"},
      {"simbolo":"Uup", "nome": "Ununpentio", "numeroAtomico": 	115	, "massaAtomica" : "(288)", "distribuicao" : [2,8,18,32,32,18,5], "classificacao" : "metais-representativos", "estado" : "desconhecido"},
      {"simbolo":"Lv", "nome": "Livermório", "numeroAtomico": 	116	, "massaAtomica" : "(293)", "distribuicao" : [2,8,18,32,32,18,6], "classificacao" : "metais-representativos", "estado" : "desconhecido"},
      {"simbolo":"Uus", "nome": "Ununséptio", "numeroAtomico": 	117	, "massaAtomica" : "(294)", "distribuicao" : [2,8,18,32,32,18,7], "classificacao" : "halogenios", "estado" : "desconhecido"},
      {"simbolo":"Uuo", "nome": "Ununóctio", "numeroAtomico": 	118	, "massaAtomica" : "(294)", "distribuicao" : [2,8,18,32,32,18,8], "classificacao" : "gases-nobres", "estado" : "desconhecido"},
    ]
    $('td').click(function(){
      let simbolo = $(this).children('h3').text();
      if(simbolo){
        let elemento;
        for (var i = 0; i < dados.length; i++) {
          if(dados[i].simbolo == simbolo){
            elemento = dados[i];
          }
        }
        let exibir =
        '<div class="modal">'+
        '<span id="fecharModal">X</span>'+
        '<div class="elemento '+elemento.classificacao+'">'+
        '<span>Nº Atômico <b>'+elemento.numeroAtomico+'</b></span>'+
        '<span class="distribuicao">Dist.<br><b>'+elemento.distribuicao.join('<br>')+'</b></span>'+
        '<h1 class="'+elemento.estado+'">'+elemento.simbolo+'</h1>'+
        '<strong>'+elemento.nome+'</strong><br>'+
        '<span>Massa Atômica<br><b>'+elemento.massaAtomica+'</b></span>'+
        '</div>'+
        '</div>'
        $('body').append(exibir);


        $('#fecharModal').click(function(){
          $('.modal').detach()
        })
      }
    })
    var table = $('table');
    var htmlStr = ''
    table.find('tr').each(function(indice){
      $(this).find('td').each(function(indice){
        for (var i = 0; i < dados.length; i++) {
          if(dados[i].simbolo == $(this).text()){
              htmlStr += '<span>'+dados[i].numeroAtomico+'</span>'+
              '<span class="distribuicao">'+dados[i].distribuicao.join('<br>')+'</span>'+
              '<h3 class="'+dados[i].estado+'">'+dados[i].simbolo+'</h3>'+
              '<strong>'+dados[i].nome+'</strong>'+
              '<strong>'+dados[i].massaAtomica+'</strong>';
              $(this).text('').append(htmlStr).addClass(dados[i].classificacao).prop('title', dados[i].nome).css('cursor', 'pointer');
              htmlStr = ''
          }
        }
      });
  });
  $('td').mouseover(function(){
    if($(this).prop('id')){
      $('.'+$(this).prop('id')).css('box-shadow', '0px 0px 5px')
    }
  })
  $('td').mouseout(function(){
    if($(this).prop('id')){
      $('.'+$(this).prop('id')).css('box-shadow', '0px 0px 0px')
    }
  })
});
