/*VARIABLES*/
var rules = [
	/*Fire*/
	{type_attacker: "fire",type_defender:"grass",effectiveness:2},
	{type_attacker: "fire",type_defender:"water",effectiveness:0.5},
	{type_attacker: "fire",type_defender:"electric",effectiveness:1},
	{type_attacker: "fire",type_defender:"fire",effectiveness:0.5},
	/*Water*/
	{type_attacker: "water",type_defender:"grass",effectiveness:0.5},
	{type_attacker: "water",type_defender:"water",effectiveness:0.5},
	{type_attacker: "water",type_defender:"electric",effectiveness:0.5},
	{type_attacker: "water",type_defender:"fire",effectiveness:2},
	/*Grass*/
	{type_attacker: "grass",type_defender:"grass",effectiveness:0.5},
	{type_attacker: "grass",type_defender:"water",effectiveness:2},
	{type_attacker: "grass",type_defender:"electric",effectiveness:1},
	{type_attacker: "grass",type_defender:"fire",effectiveness:0.5},
	/*Electric*/
	{type_attacker: "electric",type_defender:"grass",effectiveness:1},
	{type_attacker: "electric",type_defender:"water",effectiveness:2},
	{type_attacker: "electric",type_defender:"electric",effectiveness:0.5},
	{type_attacker: "electric",type_defender:"fire",effectiveness:1}
]

var Attacker = new pokemon("Pikachu", "electric", 350, 200);

var Defender = new pokemon("Charmander", "fire", 200, 150);


/**************************************FUNCTIONS*************************************/

/**
 * Constructor clase pokemon
 * @param  {[string]} pNombre_pokemon [el nombre del pokemon]
 * @param  {[string]} pTipo_pokemon   [el tipo del pokemon - (water, fire, grass, electric)]
 * @param  {[int]} pAttack            [el poder de ataque del pokemon]
 * @param  {[int]} pDefense           [poder en defensa del pokemon]
 * @return {[Objeto de clase pokemon]}                 [objeto pokemon que posee los atributos de nombre, tipo, ataque, defensa]
 */
function pokemon(pNombre_pokemon, pTipo_pokemon, pAttack, pDefense){
	this.name = pNombre_pokemon;
	this.tipo = pTipo_pokemon;
	this.attack = pAttack;
	this.defense = pDefense;
}
/**
 * Escribe en pantalla la información sobre un pokemon
 * @param  {[pokemon]} pPokemon [Objeto pokemon]
 * @return {[void]}          [description]
 */
function printPokemonInfo(pPokemon){ 
	document.write("Nombre: " + pPokemon.name);
   	document.write("<br>tipo: " + pPokemon.tipo);
   	document.write("<br>attack: " + pPokemon.attack);
  	document.write("<br>Defense: " + pPokemon.defense);
  	document.write("<br>"); 
}

/**
 * Recorre el array de rules para determinar el efectividad que tiene un ataque dependiendo del tipo del pokemon atacante y el pokemon que se defiende
 * @param  {[pokemon]} pokemonAttacker [El pokemon que realiza el ataque]
 * @param  {[pokemon]} pokemonDefender [pokemon que recibe el ataque]
 * @return {[int]}                 [cantidad de daño que se le causo al pokemon defendiendose]
 */
function damage(pokemonAttacker, pokemonDefender){
	var pokemon_attacker_type = pokemonAttacker.tipo;
	var pokemon_defender_type = pokemonDefender.tipo;
	for(var index_for_attacker = 0; index_for_attacker < rules.length; index_for_attacker++){
		if(rules[index_for_attacker].type_attacker == pokemon_attacker_type){
			for(var index_for_defenders = index_for_attacker; index_for_defenders < rules.length; index_for_defenders++){
				if(rules[index_for_defenders].type_defender == pokemon_defender_type){
					return damage_made(pokemonAttacker.attack, pokemonDefender.defense, rules[index_for_defenders].effectiveness);
					break;
				}
			}
		}
	}
}

/**
 * Realiza la formula para determinar la cantidad de daño producido de un pokemon a otro
 * @param  {[int]} pAttacker_power_attack       [es el poder de ataque que posee el pokemon de ataque]
 * @param  {[int]} pDefender_power_defense      [poder de defensa que posee el pokemon de defensa]
 * @param  {[int]} pEffectiveness 				[efectividad que tiene el ataque - (super efectivo:2, neutral:1, no tan efectivo: 0.5)]
 * @return {[int]}                				[cantidad de daño que se le causo al pokemon defendiendose]
 */
function damage_made(pAttacker_power_attack, pDefender_power_defense, pEffectiveness)
{
	return Math.round((50 * (pAttacker_power_attack/pDefender_power_defense) * pEffectiveness));
}

/**
 * Escribe en el documento la cantidad de daño realizado
 * @return {[void]} 
 */
function printDamage(){
	document.write("<br>Damage Made: " + damage(Attacker, Defender) + "<br>");
}

document.write("<br>POKEMON ATTACKER<br>"); 
printPokemonInfo(Attacker);
document.write("<br> POKEMON DEFENDER<br>"); 
printPokemonInfo(Defender);
printDamage();