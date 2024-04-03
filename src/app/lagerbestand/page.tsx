import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Lagerbestandsverfolgung",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const LagerbestandPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lagerbestand" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <p>
            Echtzeitinformationen über den aktuellen Lagerbestand von Produkten
            in verschiedenen Filialen oder Lagern.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LagerbestandPage;
