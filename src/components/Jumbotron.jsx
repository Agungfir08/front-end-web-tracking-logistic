import React from "react";
import LogisticLogo from "../assets/kalla-logistic-logo.svg";

import LogisticIllustration from "../assets/kalla-logistic-illustarion.svg";
function Jumbotron() {
  return (
    <section class="bg-center bg-no-repeat bg-[url('D:\Kalla\frontend\front-end-web-tracking-logistic\src\assets\IndonesiaMap.png')] bg-cover">
      <div className=" max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="flex justify-center items-center sm:flex-col sm:gap-5 gap-16">
          <div className="basis-1/2 flex flex-col justify-start sm:items-center">
            <img
              src={LogisticLogo}
              alt="Kalla Logistic"
              className=" w-[450px] sm:w-[315px]"
            />
            <p className="pl-2 sm:p-0 w-full sm:text-center sm:text-sm">
              Bisnis ini hadir dengan berbagai jenis layanan darat dan laut
              untuk memenuhi kebutuhan pelanggan. Kami menyediakan layanan
              pengiriman, pengiriman barang, pengiriman kendaraan, pergudangan,
              truk, penyimpanan kendaraan serta pertambangan.
            </p>
          </div>
          <img
            src={LogisticIllustration}
            alt="Logistic"
            className="basis-1/2 w-[350px] sm:min-w-[315px] "
          />
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
