var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('fondo', 'assets/IndiceInicial.png');
    game.load.spritesheet('personaje', 'assets/personajeColono.png', 32, 48);
    game.load.spritesheet('personaje', 'assets/personajeFinquero.png', 32, 48);
    game.load.spritesheet('personaje', 'assets/personajeLatifundista.png', 32, 48);

}

var personajeColono;
var personajeFinquero;
var personajeLatifundista;

var txtColono;
var txtFinquero;
var txtLatifundista;

var sndPunto;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	game.add.sprite(0, 0, 'fondo');
	
	
	suelo = game.add.sprite(0, game.world.height - 5, 'plataforma');
	suelo.width = 800;
	suelo.height = 5;
	game.physics.arcade.enable(suelo);
	
	bandeja = game.add.sprite(50, game.world.height - 100, 'plataforma');
	bandeja.width = 150;
	game.physics.arcade.enable(bandeja);
	
	personaje = game.add.sprite(32, 0, 'personaje');
	game.physics.arcade.enable(personaje);
	personaje.body.gravity.y = 300;
	personaje.body.velocity.x = 250;
	
	personaje.animations.add('left', [0, 1, 2, 3], 10, true);
    personaje.animations.add('right', [5, 6, 7, 8], 10, true);
    personaje.animations.play('right');

	
	//Variables del juego
	game.giro = 250;
	game.velocidadDiamantes = 500;
	game.gravedadDiamantes = 150;
	game.vidas = 5;
	game.puntaje = 0;
	game.nivel = 1;
	
	//Loops y eventos
	game.subirNivel = game.time.events.loop(10000, subirNivel, this);
	
	//Indicadores de puntaje y vidas
	txtColono = game.add.text(25, 16, 'Puntaje: 0', { font: '24px Arial', fill: '#000' });
	txtFinquero= game.add.text(325, 16, 'Nivel: 1', {font: '24px Arial', fill: '#000'});
	txtLatifundista = game.add.text(625, 16, 'Vidas: 5', {font: '24px Arial', fill: '#000'});
	
	
}

function update() {
	

}

function subirNivel(){
	game.gravedadDiamantes *= 1.2;
	personaje.body.velocity.x *= 1.2;
	game.nivel += 1;
	txtNivel.setText('Nivel: '+game.nivel);
}

//function desplazamientoPersonaje(bandeja, diamante){
	//personajeColono.kill();
	//game.puntaje += 5;
	//txtPuntaje.setText('Puntaje: '+game.puntaje);
	//sndPunto.play();
}

