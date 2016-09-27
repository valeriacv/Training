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
 * Pokemon class constructor
 * @param  {[string]} pPokemon_name   [the name of the pokemon]
 * @param  {[string]} pPokemon_type   [the type of the pokemon - (water, fire, grass, electc)]
 * @param  {[int]} pAttack            [power in attack that the pokemon has]
 * @param  {[int]} pDefense           [power in defense that the pokemon has]i
 * @return {[Objeto de clase pokemon]}                 [pokemon object that has the attributes of: name, type, attack, defense]
 */r
function pokemon(pPokemon_name, pPokemon_type, pAttack, pDefense){
	this.name = pPokemon_name;
	this.type = pPokemon_type;
	this.attack = pAttack;
	this.defense = pDefense;
}
/**
 * Write in the screen the information of a pokemon
 * @param  {[pokemon]} pPokemon [Pokemon object]
 * @return {[void]}      
 */
function printPokemonInfo(pPokemon){ 
	document.write("Nombre: " + pPokemon.name);
   	document.write("<br>type: " + pPokemon.type);
   	document.write("<br>attack: " + pPokemon.attack);
  	document.write("<br>Defense: " + pPokemon.defense);
  	document.write("<br>"); 
}

/**
 * Runs through an array of rules and gets the effectivity of an attack depending in the type of pokemon attacker and the type of pokemon defender
 * @param  {[pokemon]} pokemonAttacker [Pokemon that attacks]
 * @param  {[pokemon]} pokemonDefender [Pokemon that recibes the attack]
 * @return {[int]}                 [amount of damage made to the pokemon defender]
 */
function damage(pokemonAttacker, pokemonDefender){
	var pokemon_attacker_type = pokemonAttacker.type;
	var pokemon_defender_type = pokemonDefender.type;
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
 * Calculate the amount of damage made from one pokemon to another
 * @param  {[int]} pAttacker_power_attack       [the amount of power attack that the pokemon attacker has]
 * @param  {[int]} pDefender_power_defense      [the amount of power defense that the pokemon defender has]
 * @param  {[int]} pEffectiveness 				[attack effectivity - (super effective:2, neutral:1, not effective: 0.5)]
 * @return {[int]}                				[amount of damage made to the defender pokemon]
 */
function damage_made(pAttacker_power_attack, pDefender_power_defense, pEffectiveness)
{
	return Math.round((50 * (pAttacker_power_attack/pDefender_power_defense) * pEffectiveness));
}

/**
 * Write in the document the amount of damage amount
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