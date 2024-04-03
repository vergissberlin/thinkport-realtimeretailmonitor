import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Standortanalysen",
  description:
    "Realtime Retail Monitor Proof of Concept",
};

const StandortanalysenPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Standortanalysen" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <p>
            Vergleich der eigenen Leistung mit der der Wettbewerber,
            einschließlich Preise, Produktangebot und Verkaufstrends.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default StandortanalysenPage;
