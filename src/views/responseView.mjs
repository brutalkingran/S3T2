// capa de presentación
// funciones para mostrar datos de superhéroes
// 6)

export const renderizarSuperheroe = ( superheroe ) => {
    return {
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos
    }
}

export const renderizarListaSuperheroes = (superheroes) => {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}

export const formatearArray = ( textoArray = '' ) => {
    if (Array.isArray(textoArray)) {
        // Si ya es un array, solo aplicamos trim() a cada elemento
        return textoArray.map(item => (typeof item === 'string' ? item.trim() : item)).filter(item => item !== "");
    } else if (typeof textoArray === 'string') {
        // Si es un string, lo dividimos y luego aplicamos trim()
        return textoArray
            .split(",")
            .map(item => item.trim())
            .filter(item => item !== "");
    }
    return []; // Si no es ni string ni array, devolvemos array vacío
}