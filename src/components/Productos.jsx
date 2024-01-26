const Productos = () => {
  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      {/* {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)} */}

      {/* { cargando ? <p className="text-center">Cargando....</p> : null } */}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* { productos.length === 0 ? 'No hay productos' : (
                       productos.map(producto => (
                           <Producto
                                key={producto.id}
                                producto={producto}
                           />
                       ))
                   ) } */}
        </tbody>
      </table>
    </>
  );
};

export default Productos;
