const NuevoProductos = ({ history }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

            {/* {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null } */}

            <form>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  // value={nombre}
                  // onChange={e => guardarNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  // value={precio}
                  // onChange={e =>  guardarPrecio( Number(e.target.value) )}
                />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Agregar
              </button>
            </form>

            {/* { cargando ? <p>Cargando...</p> : null } */}

            {/* {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProductos;
