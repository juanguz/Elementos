
var x;
x = $(document);
x.ready(inicializar);
	function inicializar(){
		var x = $("#boton1");

		$(document).ready(function() {
		$('#boton1').click(function() {
		muestratabla($('#campoTexto').val());
		});
		}
	);

		$('#campoTexto').keypress(function (e) {
			if (e.which == 13) {
			muestratabla($('#campoTexto').val());
			return false;
		}
		});
	}






function muestratabla(cadena){
	var arrayElementos=[];
	var inicioCadena=0;
	arrayElementos=comprobar(cadena,arrayElementos,inicioCadena,0);
	if((typeof arrayElementos != "undefined" && arrayElementos != null && arrayElementos.length > 0)){
		var codigoTabla='<table border="1"><tr><td>Símbolo</td><td>Nombre</td><td>Número</td></tr>';
		
			for(i=0;i<arrayElementos.length;i++){
				codigoTabla=codigoTabla+"<tr><td>"+arrayElementos[i].sym+"</td><td>"+arrayElementos[i].nom+"</td><td>"+arrayElementos[i].numa+"</td></tr>";
			}

		codigoTabla=codigoTabla+"</table>";
		var x;
		x=$("#tabla1");
		x.html(codigoTabla);
	}

	else{
		codigoTabla="<p>No se puede formar esa palabra combinando los símbolos de los elementos de la tabla periódica</p>";
		var x;
		x=$("#tabla1");
		x.html(codigoTabla);


	}
}










var tabla=[
{numa:1,sym:"H",nom:"Hydrogen",color:"FFFFFF"},
{numa:2,sym:"He",nom:"Helium",color:"D9FFFF"},
{numa:3,sym:"Li",nom:"Lithium",color:"CC80FF"},
{numa:4,sym:"Be",nom:"Beryllium",color:"C2FF00"},
{numa:5,sym:"B",nom:"Boron",color:"FFB5B5"},
{numa:6,sym:"C",nom:"Carbon",color:"909090"},
{numa:7,sym:"N",nom:"Nitrogen",color:"3050F8"},
{numa:8,sym:"O",nom:"Oxygen",color:"FF0D0D"},
{numa:9,sym:"F",nom:"Fluorine",color:"900000"},
{numa:10,sym:"Ne",nom:"Neon",color:"B3E3F5"},
{numa:11,sym:"Na",nom:"Sodium",color:"AB5CF2"},
{numa:12,sym:"Mg",nom:"Magnesium",color:"8AFF00"},
{numa:13,sym:"Al",nom:"Aluminum or Aluminium",color:"BFA6A6"},
{numa:14,sym:"Si",nom:"Silicon",color:"F0C8A0"},
{numa:15,sym:"P",nom:"Phosphorus",color:"FF8000"},
{numa:16,sym:"S",nom:"Sulfur",color:"FFFF30"},
{numa:17,sym:"Cl",nom:"Chlorine",color:"1FF01F"},
{numa:18,sym:"Ar",nom:"Argon",color:"80D1E3"},
{numa:19,sym:"K",nom:"Potassium",color:"8F40D4"},
{numa:20,sym:"Ca",nom:"Calcium",color:"3DFF00"},
{numa:21,sym:"Sc",nom:"Scandium",color:"E6E6E6"},
{numa:22,sym:"Ti",nom:"Titanium",color:"BFC2C7"},
{numa:23,sym:"V",nom:"Vanadium",color:"A6A6AB"},
{numa:24,sym:"Cr",nom:"Chromium",color:"8A99C7"},
{numa:25,sym:"Mn",nom:"Manganese",color:"9C7AC7"},
{numa:26,sym:"Fe",nom:"Iron",color:"E06633"},
{numa:27,sym:"Co",nom:"Cobalt",color:"F090A0"},
{numa:28,sym:"Ni",nom:"Nickel",color:"50D050"},
{numa:29,sym:"Cu",nom:"Copper",color:"C88033"},
{numa:30,sym:"Zn",nom:"Zinc",color:"7D80B0"},
{numa:31,sym:"Ga",nom:"Gallium",color:"C28F8F"},
{numa:32,sym:"Ge",nom:"Germanium",color:"668F8F"},
{numa:33,sym:"As",nom:"Arsenic",color:"BD80E3"},
{numa:34,sym:"Se",nom:"Selenium",color:"FFA100"},
{numa:35,sym:"Br",nom:"Bromine",color:"A62929"},
{numa:36,sym:"Kr",nom:"Krypton",color:"5CB8D1"},
{numa:37,sym:"Rb",nom:"Rubidium",color:"702EB0"},
{numa:38,sym:"Sr",nom:"Strontium",color:"00FF00"},
{numa:39,sym:"Y",nom:"Yttrium",color:"94FFFF"},
{numa:40,sym:"Zr",nom:"Zirconium",color:"94E0E0"},
{numa:41,sym:"Nb",nom:"Niobium",color:"73C2C9"},
{numa:42,sym:"Mo",nom:"Molybdenum",color:"54B5B5"},
{numa:43,sym:"Tc",nom:"Technetium",color:"3B9E9E"},
{numa:44,sym:"Ru",nom:"Ruthenium",color:"248F8F"},
{numa:45,sym:"Rh",nom:"Rhodium",color:"0A7D8C"},
{numa:46,sym:"Pd",nom:"Palladium",color:"6985"},
{numa:47,sym:"Ag",nom:"Silver",color:"C0C0C0"},
{numa:48,sym:"Cd",nom:"Cadmium",color:"FFD98F"},
{numa:49,sym:"In",nom:"Indium",color:"A67573"},
{numa:50,sym:"Sn",nom:"Tin",color:"668080"},
{numa:51,sym:"Sb",nom:"Antimony",color:"9E63B5"},
{numa:52,sym:"Te",nom:"Tellurium",color:"D47A00"},
{numa:53,sym:"I",nom:"Iodine",color:"940094"},
{numa:54,sym:"Xe",nom:"Xenon",color:"429EB0"},
{numa:55,sym:"Cs",nom:"Cesium",color:"57178F"},
{numa:56,sym:"Ba",nom:"Barium",color:"00C900"},
{numa:57,sym:"La",nom:"Lanthanum",color:"70D4FF"},
{numa:58,sym:"Ce",nom:"Cerium",color:"FFFFC7"},
{numa:59,sym:"Pr",nom:"Praseodymium",color:"D9FFC7"},
{numa:60,sym:"Nd",nom:"Neodymium",color:"C7FFC7"},
{numa:61,sym:"Pm",nom:"Promethium",color:"A3FFC7"},
{numa:62,sym:"Sm",nom:"Samarium",color:"8FFFC7"},
{numa:63,sym:"Eu",nom:"Europium",color:"61FFC7"},
{numa:64,sym:"Gd",nom:"Gadolinium",color:"45FFC7"},
{numa:65,sym:"Tb",nom:"Terbium",color:"30FFC7"},
{numa:66,sym:"Dy",nom:"Dysprosium",color:"1FFFC7"},
{numa:67,sym:"Ho",nom:"Holmium",color:"00FF9C"},
{numa:68,sym:"Er",nom:"Erbium",color:"0.00E+0"},
{numa:69,sym:"Tm",nom:"Thulium",color:"00D452"},
{numa:70,sym:"Yb",nom:"Ytterbium",color:"00BF38"},
{numa:71,sym:"Lu",nom:"Lutetium",color:"00AB24"},
{numa:72,sym:"Hf",nom:"Hafnium",color:"4DC2FF"},
{numa:73,sym:"Ta",nom:"Tantalum",color:"4DA6FF"},
{numa:74,sym:"W",nom:"Tungsten",color:"2194D6"},
{numa:75,sym:"Re",nom:"Rhenium",color:"267DAB"},
{numa:76,sym:"Os",nom:"Osmium",color:"266696"},
{numa:77,sym:"Ir",nom:"Iridium",color:"175487"},
{numa:78,sym:"Pt",nom:"Platinum",color:"D0D0E0"},
{numa:79,sym:"Au",nom:"Gold",color:"FFD123"},
{numa:80,sym:"Hg",nom:"Mercury",color:"B8B8D0"},
{numa:81,sym:"Tl",nom:"Thallium",color:"A6544D"},
{numa:82,sym:"Pb",nom:"Lead",color:"575961"},
{numa:83,sym:"Bi",nom:"Bismuth",color:"9E4FB5"},
{numa:84,sym:"Po",nom:"Polonium",color:"AB5C00"},
{numa:85,sym:"At",nom:"Astatine",color:"754F45"},
{numa:86,sym:"Rn",nom:"Radon",color:"428296"},
{numa:87,sym:"Fr",nom:"Francium",color:"420066"},
{numa:88,sym:"Ra",nom:"Radium",color:"007D00"},
{numa:89,sym:"Ac",nom:"Actinium",color:"70ABFA"},
{numa:90,sym:"Th",nom:"Thorium",color:"00BAFF"},
{numa:91,sym:"Pa",nom:"Protactinium",color:"00A1FF"},
{numa:92,sym:"U",nom:"Uranium",color:"008FFF"},
{numa:93,sym:"Np",nom:"Neptunium",color:"0080FF"},
{numa:94,sym:"Pu",nom:"Plutonium",color:"006BFF"},
{numa:95,sym:"Am",nom:"Americium",color:"545CF2"},
{numa:96,sym:"Cm",nom:"Curium",color:"785CE3"},
{numa:97,sym:"Bk",nom:"Berkelium",color:"8A4FE3"},
{numa:98,sym:"Cf",nom:"Californium",color:"A136D4"},
{numa:99,sym:"Es",nom:"Einsteinium",color:"B31FD4"},
{numa:100,sym:"Fm",nom:"Fermium",color:"B31FBA"},
{numa:101,sym:"Md",nom:"Mendelevium",color:"B30DA6"},
{numa:102,sym:"No",nom:"Nobelium",color:"BD0D87"},
{numa:103,sym:"Lr",nom:"Lawrencium",color:"C70066"},
{numa:104,sym:"Rf",nom:"Rutherfordium",color:"CC0059"},
{numa:105,sym:"Db",nom:"Dubnium",color:"D1004F"},
{numa:106,sym:"Sg",nom:"Seaborgium",color:"D90045"},
{numa:107,sym:"Bh",nom:"Bohrium",color:"E00038"},
{numa:108,sym:"Hs",nom:"Hassium",color:"E6002E"},
{numa:109,sym:"Mt",nom:"Meitnerium",color:"EB0026"},
{numa:110,sym:"Ds",nom:"Darmstadtium",color:"FFFFFF"},
{numa:111,sym:"Rg",nom:"Roentgenium",color:"FFFFFF"},
{numa:112,sym:"Cn",nom:"Copernicium",color:"FFFFFF"},
{numa:113,sym:"Uut",nom:"Ununtrium",color:"FFFFFF"},
{numa:114,sym:"Uuq",nom:"Ununquadium",color:"FFFFFF"},
{numa:115,sym:"Uup",nom:"Ununpentium",color:"FFFFFFF"},
{numa:116,sym:"Uuh",nom:"Ununhexium",color:"FFFFFF"},
{numa:117,sym:"Uus",nom:"Ununseptium",color:"FFFFFFF"},
{numa:118,sym:"Uuo",nom:"Ununoctium",color:"FFFFFF"}
];




	function comprobar(cadena,arrayElementos,inicioCadena,contador){
		for(i=contador;i<tabla.length;i++){
		

				if(comprobarSimbolo(tabla[i],cadena,inicioCadena)){
					arrayElementos.push(tabla[i]);
					inicioCadena=inicioCadena+tabla[i].sym.length;
						if(longitudArrayElementos(arrayElementos)==cadena.length){

							return arrayElementos;

						}
					
						else{

							arrayElementos=comprobar(cadena,arrayElementos,inicioCadena,0);
								if(longitudArrayElementos(arrayElementos)==cadena.length){

								return arrayElementos;

								}
						}
				}
				else{
					if(i==117 && (typeof arrayElementos != "undefined" && arrayElementos != null && arrayElementos.length > 0)){

						inicioCadena=inicioCadena-arrayElementos[arrayElementos.length-1].sym.length;
						cont=arrayElementos[arrayElementos.length-1].numa;
						
						
						arrayElementos.pop();
						arrayElementos=comprobar(cadena,arrayElementos,inicioCadena,cont);
					if(longitudArrayElementos(arrayElementos)==cadena.length){
					
					return arrayElementos;
					}
						
							

						
						}
						
						
					}
					if(i==117 && !(typeof arrayElementos != "undefined" && arrayElementos != null && arrayElementos.length > 0) ){

						return arrayElementos;
					}



				}
		}
	





function comprobarSimbolo(elemento,cadena,inicioCadena){

	if(cadena.length<inicioCadena+elemento.sym.length){
	return false;
	}
	else{
	cadena=cadena.toUpperCase();
	simbolo=elemento.sym;
	simbolo=simbolo.toUpperCase();
	if(cadena.substring(inicioCadena, inicioCadena+elemento.sym.length).toUpperCase()==simbolo){
	return true;
	}
	else {return false;}

}
}



function longitudArrayElementos(arrayElementos){
var longitud=0;
	if((typeof arrayElementos != "undefined" && arrayElementos != null && arrayElementos.length > 0)){
	
	for(i=0;i<arrayElementos.length;i++){
	 longitud=arrayElementos[i].sym.length+longitud;
	}
	}
	
	return longitud;
}



function valida(e){
  tecla=(document.all) ? e.keyCode : e.which;
  if(tecla == 13){
}

}
