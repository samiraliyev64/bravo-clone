import React from "react";
import { Card } from "antd";
import "../../assets/scss/Blog.scss";
import Image from "../../assets/image/image";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
function Blog() {
  const image = "";
  const title = "Üzünüzə qulluq edin";
  const date = "04/11/2024";
  const text =
    "Mövsüm fərqi olmadan özümüzə və üzümüzə qulluq etmək mütləqdir. Yayda günəş şüalarının faydaları olsa da, düzgün saatlarda günəşlənməsək zərərli tərəfləri ilə qarşılaşarıq....";
let navigate=useNavigate()
  return (
    <div className="container d-flex justify-content-center mb-5 mt-5">
      <Card
        hoverable
        style={{ width: "60%" }}
        cover={<img alt={title} src={Image.Blogimg0} />}
      >
        <Meta title={title} className="pb-3" />
        <p className="blog-date">{date}</p>
        <p>{text}</p>
        <a  className="blog_btn" onClick={()=>{
          navigate('/blogdetail')
        }}>
          Ətraflı oxu
        </a>
      </Card>
    </div>
  );
}

export default Blog;
