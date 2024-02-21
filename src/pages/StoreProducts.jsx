import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carritoReducer";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./storeProducts.css";

function StoreProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchList, setSearchList] = useState([]); // Estado local para almacenar la lista de búsqueda
  const [products, setProducts] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const { slug } = useParams();
  const dispatch = useDispatch();
  const imgUrl = "http://localhost:3000/img/";
  const apiUrl = "http://localhost:3000/products";

  const handleSearchListUpdate = (newSearchList) => {
    // Maneja la actualización de searchList en el componente Home
    console.log("New Search List:", newSearchList);
    // Actualiza el estado local con la nueva lista de búsqueda
    setSearchList(newSearchList);
  };

  const handleDropdownSelect = async (eventKey) => {
    try {
      const response = await axios.get(`${apiUrl}/${eventKey}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error.message);
    }
  };

  const handleBuyClick = (product) => {
    const maxStock = product.stock;
    const productId = product.id;
    const currentQuantity = selectedQuantities[productId] || 0;

    if (currentQuantity < maxStock) {
      const updatedQuantities = {
        ...selectedQuantities,
        [productId]: currentQuantity + 1,
      };
      setSelectedQuantities(updatedQuantities);
      dispatch(addToCart({ ...product, quantity: currentQuantity + 1 }));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Producto agregado exitosamente",
        customClass: {
          container: "my-custom-class",
        },
      });
    } else {
      console.log("No hay suficiente stock para la cantidad seleccionada");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Stock no disponible",
        customClass: {
          container: "my-custom-class",
        },
      });
    }
  };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error.message);
      });
  }, []);

  return (
    <>
      <NavbarComponent onSearchListUpdate={handleSearchListUpdate} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 banner d-flex flex-column align-items-center ban">
            {/* Contenido fijo de la columna */}
            <img
              className="imgBanner"
              src="/public/gifBannerStoreProducts/Black Grey Aqua Grunge Gaming Mobile Video (1).gif"
              alt="Tu GIF"
            />
          </div>

          <div className="col-lg-9">
            <div className="container containerCategory">
              <div className="row">
                <div className="col-8">
                  <h2 className="textTodosProductos">
                    Todos nuestros productos
                  </h2>
                </div>

                {/* Renderizar los resultados de búsqueda si searchList no está vacío */}
                {searchList.length !== 0 && (
                  <div className="col-12 d-flex flex-wrap">
                    {searchList.map((product, index) => (
                      <Card
                        key={index}
                        style={{ width: "15rem" }}
                        className="m-1 cardTodosMia"
                      >
                        <Link to={`/products/detail/${product.slug}`}>
                          {product.featured && (
                            <button
                              type="button"
                              className="btn btn-warning m-auto animate__animated animate__infinite infinite animate__swing fw-bold"
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "30%",
                              }}
                            >
                              En Oferta
                            </button>
                          )}
                          <Card.Img
                            variant="top"
                            src={`${imgUrl}${product.photo}`}
                            className="imgListCat"
                          />
                        </Link>
                        <Card.Body>
                          <Card.Title className="productDescription">
                            {product.name}
                          </Card.Title>
                          <Card.Text className="productDescription">
                            {product.productDescription}
                          </Card.Text>
                          <Card.Title className="productDescription">
                            U$S {product.price}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Renderizar contenido de carga si isLoading es verdadero */}
                {isLoading && (
                  <div className="col-12 d-flex flex-wrap">
                    {Array(27)
                      .fill(undefined)
                      .map((_, index) => (
                        <div className="col-2.4" key={index}>
                          <Card.Body>
                            <Card style={{ width: "15rem" }}>
                              <Skeleton variant="rect" height={260} />
                              <Card.Title className="productDescription">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Skeleton count={2} width={120} />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Skeleton count={2} width={80} />
                                </div>
                              </Card.Title>
                              <Card.Text className="productDescription" />
                              <Card.Title className="productDescription" />
                            </Card>
                          </Card.Body>
                        </div>
                      ))}
                  </div>
                )}

                {/* Renderizar contenido filtrado si searchList está vacío y no hay carga */}
                {!isLoading && searchList.length === 0 && (
                  <>
                    <div className="col-4 d-flex justify-content-end">
                      <DropdownButton
                        align="end"
                        title="Ordenar Por"
                        id="dropdown-menu-align-end"
                        variant="light"
                        onSelect={handleDropdownSelect}
                      >
                        <Dropdown.Item eventKey="destacado">
                          Destacado
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="menor">
                          Precio: Menor a mayor
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="mayor">
                          Precio: Mayor a menor
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="todos">Todos</Dropdown.Item>
                      </DropdownButton>
                      <div className="col-4 d-flex justify-content-end mt-2"></div>
                    </div>

                    <div className="col-12 d-flex flex-wrap">
                      {products.map((product, index) => (
                        <Card
                          key={index}
                          style={{ width: "15rem" }}
                          className="m-1 cardTodosMia"
                        >
                          <Link to={`/products/detail/${product.slug}`}>
                            {product.featured && (
                              <button
                                type="button"
                                className="btn btn-warning m-auto animate__animated animate__infinite infinite animate__swing fw-bold"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "30%",
                                }}
                              >
                                En Oferta
                              </button>
                            )}
                            <Card.Img
                              variant="top"
                              src={`${imgUrl}${product.photo}`}
                              className="imgListCat"
                            />
                          </Link>
                          <Card.Body>
                            <Card.Title className="productDescription">
                              {product.name}
                            </Card.Title>
                            <Card.Text className="productDescription">
                              {product.productDescription}
                            </Card.Text>
                            <Card.Title className="productDescription">
                              U$S {product.price}
                            </Card.Title>
                            <Button
                              onClick={() => handleBuyClick(product)}
                              variant=""
                              style={{
                                background: "#09072c",
                                color: "#ffffff",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                style={{
                                  cursor: "pointer",
                                  marginRight: "5px",
                                }}
                              />
                              Comprar
                            </Button>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
}

export default StoreProducts;







/* Claro, aquí están los cambios y correcciones que se realizaron:

1. **Condición de renderizado del contenido de búsqueda**: Se modificó la condición de renderizado del contenido de búsqueda para que verifique si `searchList` no está vacío antes de renderizar los productos encontrados. Antes, esta condición estaba utilizando un operador ternario, ahora se cambió a un operador lógico `&&`, lo que permite que el contenido se renderice solo si `searchList` no está vacío.

2. **Condición de renderizado del contenido de carga**: Se cambió la condición de renderizado del contenido de carga para verificar si `isLoading` es verdadero. Antes, esta condición también estaba utilizando un operador ternario, ahora se cambió a un operador lógico `&&`.

3. **Condición de renderizado del contenido filtrado**: Se añadió una nueva condición para renderizar el contenido filtrado cuando `searchList` está vacío y no hay carga (`isLoading` es falso). Esta condición utiliza un operador ternario para verificar si `searchList` está vacío y si `isLoading` es falso.

Estos cambios aseguran que el contenido se renderice correctamente dependiendo del estado de la búsqueda (`searchList`) y si la carga (`isLoading`) está en progreso o no.
 */