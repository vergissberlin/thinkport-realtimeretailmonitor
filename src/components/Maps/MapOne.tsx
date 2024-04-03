"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "../../js/world";

const MapOne: React.FC = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "world",
      zoomButtons: true,
      zoomOnScroll: false,
      markers: [
        { coords: [61, 105] },
        { coords: [72, -42] },
        { coords: [56, -106] },
        { coords: [31.5, 34.8] },
        { coords: [-14.235, -51.9253] },
        { coords: [35.8617, 104.1954] },
        {
          name: "Egypt",
          labelName: "Egypt",
          coords: [26.8206, 30.8025],
          style: { fill: "orange" },
        },
        {
          name: "United Kingdom",
          labelName: "UK",
          coords: [55.3781, 3.436],
          style: { fill: "yellow" },
        },
        {
          name: "United States",
          labelName: "USA",
          coords: [37.0902, -95.7129],
          style: { fill: "red" },
        },
      ],
      series: {
        markers: [
          {
            attribute: "fill",
            legend: {
              title: "Something (marker)",
            },
            scale: {
              mScale1: "#ffc371",
              mScale2: "#c79efd",
            },
            values: {
              // Notice: the key must be a number of the marker.
              0: "mScale1",
              1: "mScale2",
              2: "mScale2",
            },
          },
        ],
      },
      lines: [
        {
          from: "Egypt",
          to: "United Kingdom",
          style: {
            stroke: "red",
          },
        },
        {
          from: "United States",
          to: "United Kingdom",
          style: {
            stroke: "orange",
          },
        },
      ],

      lineStyle: {
        stroke: "#676767",
        strokeWidth: 1.5,
        fill: "#ff5566",
        fillOpacity: 1,
        strokeDasharray: "6 3 6", // OR: [6, 2, 6]
        animation: true, // Enables animation
      },

      labels: {
        markers: {
          render(code: string) {
            return ["EG", "US", "CH"].indexOf(code) > -1 ? code : null;
          },
        },
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
      visualizeData: {
        scale: ["#eeeeee", "#999999"],
        values: {
          EG: 29,
          US: 100,
          CA: 190,
          BR: 75,
          AU: 200,
          CN: 120,
        },
      },
      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
        selected: { fill: "gray" },
        selectedHover: { fill: "purple" },
      },
      selectedRegions: ["EG", "US", "GB", "FR"],
      regionsSelectable: true,
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },
    });

    return () => {
      mapOne.destroy();
    };
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Regionenübersicht
      </h4>
      <div className="h-90">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
