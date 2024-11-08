import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../assets/scss/WishList.scss";
import { ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import "../../assets/scss/Basket.scss";
import { Button, Space } from "antd";
import swal from "sweetalert";
import Image from "../../assets/image/image";
import { products } from "../../api/db";
import Shop from "../pages/Shop";

const Basket = () => {
  const navigate = useNavigate();
  let [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
  );

  //functions

  //total price
  const totalPrice = () => {
    let total = basket.reduce(
      (total, product) => total + product.price * product.count.toFixed(2),
      0
    );
    document.getElementById(
      "totalPrice"
    ).innerHTML = `Toplam ödəniş: ${total.toFixed(2)} ₼`;
  };
  //increment
  let increment = (product) => {
    basket.forEach((p) => {
      if (p.id === product.id) {
        product.count++;
      }
    });
    document.getElementById(product.id).innerHTML = product.count;
    localStorage.setItem("basket", JSON.stringify(basket));
    totalPrice();
  };

  //decrement
  let decrement = (product) => {
    basket.forEach((p) => {
      if (p.id === product.id) {
        if (product.count > 1) {
          product.count--;
        }
      }
    });
    document.getElementById(product.id).innerHTML = product.count;
    localStorage.setItem("basket", JSON.stringify(basket));
    totalPrice();
  };

  //alert
  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Səbətiniz artıq boşdur!",
      icon: "success",
    });
  };

  //remove product
  const removeProduct = (id) => {
    const updatedBasket = basket.filter((product) => product.id !== id);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  //clear basket
  const clearBasket = () => {
    localStorage.removeItem("basket");
    setBasket(null);
    Alert();
  };

  return (
    <div className="container basket pt-5 pb-5">
      <h1>Səbət</h1>
      {basket !== null ? (
        <div className="cart">
          {basket.map((product) => (
            <div>
              <table className=" table table-bordered ">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Şəkil</th>
                    <th>Ad</th>
                    <th>Qiymət</th>
                    <th>Say</th>
                    <th>Sil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={product.id}>
                    <td>{product.id}
                    </td>
                    <td className="d-flex align-items-center">
                      {" "}
                      <img
                        src={Image.Product1}
                        alt="bal"
                        className="basket_img"
                      />
                    </td>
                    <td>
                      {" "}
                      <h5 className="y-auto">{product.name}</h5>
                    </td>
                    <td>
                      <p>{product.price}  ₼</p>
                    </td>
                    <td>
                      <div className="prd-inc-desc">
                        <button
                          className="product_btn me-3"
                          onClick={() => increment(product)}
                        >
                          +
                        </button>
                        <h3 className="product_btn_text" id={product.id}>{product.count}</h3>
                        <button
                          className="product_btn ms-3"
                          onClick={() => decrement(product)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>
                      <span className="remove-product"
                        onClick={() => removeProduct(product.id)}
                      ></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          <Space wrap>
            <div>
              <h3 id="totalPrice">
                Toplam ödəniş:
                <span className="total-price">
                  {basket.reduce(
                    (total, product) =>
                      total + product.price * product.count.toFixed(2),
                    0
                  )} ₼
                </span>
              </h3>
              <Button
                type="primary"
                onClick={() => {
                  clearBasket();
                  Alert();
                }}
              >
                Səbəti boşalt!
              </Button>
              <Button className="basket_btn ms-3">Sifarişi təsdiqlə</Button>
            </div>
          </Space>
        </div>
      ) : (
        <div className="text-center">
          <h3>
            <AiOutlineShoppingCart />
          </h3>
          <p>Səbətiniz boşdur</p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            Kataloqa Keçin
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
