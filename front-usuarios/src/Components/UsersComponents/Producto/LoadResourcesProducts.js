function LoadStars(estrellas){

    let nro_stars = estrellas["estrellas"];
    let stars = !isNaN(nro_stars) ? parseInt(nro_stars, 10):0;
    
    let nulas = 5 - stars;
    var coloreadas = []; 
    for (var i=0; i<stars; i++){
        coloreadas.push(<i class="fas fa-star"></i>);
    }

    var vacias = [];
    for(var i=0; i<nulas; i++){
        vacias.push(<i class="far fa-star"></i>);
    }
    return(
        <>
        {coloreadas} {vacias}
        </>
    );
}

export {LoadStars} 
