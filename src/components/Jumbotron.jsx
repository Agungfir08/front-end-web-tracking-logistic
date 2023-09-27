import React from "react";
import LogisticLogo from "../assets/kalla-logistic-logo.svg";

import LogisticIllustration from "../assets/kalla-logistic-illustarion.svg";
function Jumbotron() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('./assets/IndonesiaMap.png')] bg-cover">
      <div className=" max-w-screen-xl mx-auto px-6 sm:px-8  py-16 sm:py-0">
        <div className="flex justify-center items-center sm:flex-col sm:gap-5 gap-24">
          <div className="basis-1/2 flex flex-col justify-start sm:items-center min-w-[325px] max-w-[415px] sm:max-w-[315px]">
            <img src={LogisticLogo} alt="Kalla Logistic" className=" " />
            <p className="pl-2 sm:p-0 sm:text-center sm:text-sm text-sm">
              Bisnis ini hadir dengan berbagai jenis layanan darat dan laut
              untuk memenuhi kebutuhan pelanggan. Kami menyediakan layanan
              pengiriman, pengiriman barang, pengiriman kendaraan, pergudangan,
              truk, penyimpanan kendaraan serta pertambangan.
            </p>
          </div>
          <img
            src={LogisticIllustration}
            alt="Logistic"
            className="basis-1/2 min-w-[350px] max-w-[500px] sm:max-w-[325px] "
          />
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
