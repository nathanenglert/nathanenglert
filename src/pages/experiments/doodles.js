import React from "react";

import Doodle from "../../components/doodle";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";

import "./doodles.scss";

const Doodles = () => {
  return (
    <Layout>
      <Navbar className="has-background-light" />
      <Doodle
        rule={`
          :doodle {
            @grid: 9x18;
            @size: 100vmax, 48vmax;
            background: rgb(245, 245, 245);
          }
          @shape: square 5;
          background: hsla(
            calc(180 - @i() * 4), 0%, 68%, @r(.8)
          );
          transform:
            scale(@r(.2, 1.5))
            translate(@m2(@r(-50%, 50%)));
        `}
      />
    </Layout>
  );
};

export default Doodles;
