import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="fw-bold mb-4">About Us</h1>
            <p className="lead mb-4 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              inventore tempore, ipsa cupiditate alias aut tenetur deserunt
              debitis architecto iusto, cum necessitatibus atque distinctio,
              velit placeat quae totam. Placeat debitis architecto totam nam
              laudantium asperiores dolorem! Maxime, incidunt dolore?
              Aspernatur, ex necessitatibus. Iure similique neque laudantium
              nihil! Modi, dolor qui! Asperiores perferendis inventore
              cupiditate autem repellendus reprehenderit unde possimus facere,
              distinctio, sed in sunt molestias nihil qui eius voluptatum
              aspernatur accusamus reiciendis doloremque blanditiis error neque.
              Nostrum eligendi ad mollitia voluptatem quasi non, itaque, cumque
              officiis iste atque error rem recusandae nesciunt saepe distinctio
              pariatur voluptatibus debitis dolores? Commodi, id.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
