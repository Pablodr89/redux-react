const Producto = ({ producto }) => {
  return (
    <tr>
      <td>nombre</td>
      <td>
        <span className="font-weight-bold"> $ {precio} </span>
      </td>
      <td className="acciones">
        <button
          type="button"
          // onClick={ () => redireccionarEdicion(producto) }
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          // onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar{' '}
        </button>
      </td>
    </tr>
  );
};

export default Producto;
