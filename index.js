const express = require('express');
const bodyParser = require('body-parser');
const levelup = require('levelup');

const app = express();
const db = levelup('./catalogoMovies',{valueEncoding:'json'});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'));

const router = express.Router();
router.get('/', (req, res) =>{
	res.json({message:"Hola, soy el api de laboratoria"});
});

router.post('/movies',(req,res)=>{
	const id= req.body.nombre.toLowerCase().split(" ").join("-");
	db.put(id, req.body, (error)=>{
		if(error) return res.json({message:"Hubo un error"});
	});
	res.json({message: "Se cargó la pelicula"});
});

router.get('/movies',(req,res)=>{
	let movies = [];
	db.createValueStream().on('data',(data)=>{
		movies.push(data);
	}).on('end', _=>{
		res.json(movies);
	});
});

router.get('/movies/:id', (req,res)=>{
	if(req.params.id){
		db.get(req.params.id,(error, movie)=>{
			if(error) return res.json({message:"Hubo un error al obtener el movie"});
			res.json(movie);
		});
	}
});

app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, _=> {
  console.log('El servidor está corriendo en el puerto '+port+'!')
})
