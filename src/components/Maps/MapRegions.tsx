"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "../../js/edeka";

const MapRegions: React.FC = () => {
  useEffect(() => {
    const mapRegions = new jsVectorMap({
      selector: "#mapRegions",
      map: "edeka",
      zoomButtons: false,
      zoomOnScroll: false,
      markers: [
       
        {
          name: "EDDI",
          labelName: "EDDI",
          coords: [200, 200],
          style: { fill: "orange" },
        },
        {
          name: "Minden",
          labelName: "Minden",
          coords: [300, 300],
          style: { fill: "orange" },
        },
        {
          name: "Berlin",
          labelName: "Berlin",
          coords: [500, 300],
          style: { fill: "orange" },
        },
        {
          name: "Rostock",
          labelName: "Rostock",
          coords: [500, 100],
          style: { fill: "orange" },
        },
        {
          name: "München",
          labelName: "München",
          coords: [450, 750],
          style: { fill: "orange" },
        },
        {
            name: "Düsseldorf",
            labelName: "Düsseldorf",
            coords: [200, 580],
            style: { fill: "orange" },
        }
      ],
  
      lines: [
        {
          from: "EDDI",
          to: "München",
          style: {
            stroke: "red",
          },
        },
        {
          from: "EDDI",
          to: "Berlin",
          style: {
            stroke: "orange",
          },
        },
        {
          from: "EDDI",
          to: "Rostock",
          style: {
            stroke: "green",
          },
        },
        {
          from: "EDDI",
          to: "Minden",
          style: {
            stroke: "blue",
          },
        },
        {
          from: "EDDI",
          to: "Düsseldorf",
          style: {
            stroke: "yellow",
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
            'REG-1': 29,
            'REG-2': 100,
            'REG-3': 190,
            'REG-4': 75,
            'REG-5': 200,
            'REG-6': 120,
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
      selectedRegions: ["EDDI", "US", "GB", "FR"],
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
      mapRegions.destroy();
    };
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        POS Deployment
      </h4>
      <div className="h-90">
        <div id="mapRegions" className="mapRegions map-btn"></div>
      </div>
    </div>
  );
};

export default MapRegions;
