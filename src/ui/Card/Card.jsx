import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        <div
          className="card__bgImg"
          style={{
            backgroundImage:
              "url(https://miona-vinovatheme.myshopify.com/cdn/shop/files/img-6-4_de80ed35-47f8-4ca6-b1b3-fd4cc3a87309_380x.jpg?v=1688638806)",
          }}
        ></div>
        <img
          src="https://miona-vinovatheme.myshopify.com/cdn/shop/products/2_67f158ea-0232-4b8e-8f43-299dcb368639_260x.jpg?v=1687254219"
          alt=""
        />
      </div>

      <div className="card__info">
        <h3>Jeans short</h3>
        <p>company name</p>
      </div>
    </div>
  );
};

export default Card;
