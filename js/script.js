function abrir_productos(){
    var Productos = document.getElementById('Contenedor_productos');
    var Nosotros = document.getElementById('Contenedor_nosotros');
    Nosotros.style.display = 'none';
    Productos.style.display = 'flex';
}
function abrir_nosotros(){
    var Productos = document.getElementById('Contenedor_productos');
    var Nosotros = document.getElementById('Contenedor_nosotros');
    Nosotros.style.display = 'flex';
    Productos.style.display = 'none';
}