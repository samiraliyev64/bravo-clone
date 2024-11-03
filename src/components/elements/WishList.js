import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import "../../assets/scss/WishList.scss";
import Product1 from '../../assets/image/product1.jpg'; 


const WishList = () => {
  const navigate = useNavigate();

  let [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  return (
    <div className="container wishlist">
      <h1>Sevimli</h1>

      {wishlist !== null ? (
        <div className="cart">
          {wishlist.map((product) => (
            <div>
              <table className=" table table-bordered ">
                <thead>
                  <tr>
                    <th></th>
                    <th>Şəkil</th>
                    <th>Ad</th>
                    <th>Qiymət</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={product.id}>
                    <td className="">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        ></label>
                      </div>
                    </td>
                    <td className="d-flex align-items-center">
                      {" "}
                      <img
                        src={Product1}
                        alt="bal"
                        className="basket_img"
                      />
                    </td>
                    <td>
                      {" "}
                      <h5 className="y-auto">{product.name}</h5>
                    </td>
                    <td>
                      <p>${product.price}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
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

export default WishList;
