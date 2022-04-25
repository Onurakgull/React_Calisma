/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

export default function PageHeader() {

  const text = " React ile yapılmış bir template kullanılmıştır. Üzerinde çalışmalar yapmaktayım.";

  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">@Onur Akgül</h1>
          <h3 className="d-none d-sm-block">
            <span>
                {text.substring(0,35).trim()}...
            </span>
            <br/>
            <br/>
            <Button color="primary" type="button">
              Detay Bilgi
              <i className="tim-icons icon-minimal-right" />
              <i className="tim-icons icon-minimal-right" />
              <i className="tim-icons icon-minimal-right" />
            </Button>
          </h3>
        </div>
      </Container>
    </div>
  );
}
