import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Verkaufsanalysen",
  description:
    "Realtime Retail Monitor Proof of Concept",
};

const VerkaufsanalysenPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Verkaufsanalysen" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <p>
            Daten zu aktuellen Verkaufszahlen und Umsätzen in Echtzeit,
            einschließlich Umsatz nach Produkt, Standort, Zeitraum usw.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default VerkaufsanalysenPage;
