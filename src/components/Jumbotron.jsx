import LogisticLogo from "../assets/kalla-logistic-logo.svg";
import LogisticIllustration from "../assets/kalla-logistic-illustarion.svg";

const Jumbotron = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('./assets/IndonesiaMap.png')] bg-cover">
      <div className="px-6 py-16 sm:px-8 sm:py-0 md:px-12 flex justify-center items-center sm:flex-col sm:gap-5 xl:gap-24 lg:gap-12">
        <div className="basis-1/2 flex flex-col justify-start sm:items-center min-w-[300px] max-w-[415px] sm:max-w-[315px] md:max-w-[325px] lg:max-w-[350px]">
          <img src={LogisticLogo} alt="Kalla Logistic" loading="lazy" />
          <p className="pl-2 sm:p-0 sm:text-center text-sm">
            Bisnis ini hadir dengan berbagai jenis layanan darat dan laut untuk
            memenuhi kebutuhan pelanggan. Kami menyediakan layanan pengiriman,
            pengiriman barang, pengiriman kendaraan, pergudangan, truk,
            penyimpanan kendaraan serta pertambangan.
          </p>
        </div>
        <img
          src={LogisticIllustration}
          alt="Kalla Translog"
          className="basis-1/2 min-w-[300px] max-w-[500px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[385px]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Jumbotron;
