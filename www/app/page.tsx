"use client";

import * as React from "react";
import { huez } from "huez";
import { Category, Color, Search } from "@/components";

export default function Home() {
  const [baseColor, setBaseColor] = React.useState("#0077CC");
  const [format, setFormat] = React.useState<"hsl" | "rgb" | "hex">("hex");
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState<any>(() => huez(baseColor, format));

  const display = () => {
    return Object.keys(data).map((category, categoryId) => (
      <Category key={categoryId} name={category}>
        {data[category].map(
          (color: string | Array<number>, colorId: string) => (
            <Color
              format={format}
              key={colorId}
              color={color}
              name={category + " " + colorId}
            />
          )
        )}
      </Category>
    ));
  };
  const changeBaseColor = (newColor: string) => {
    setBaseColor(newColor);
  };
  const changeFormat = (newFormat: "hsl" | "rgb" | "hex") => {
    setFormat(newFormat);
    localStorage.setItem("localFormat", newFormat);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      changeBaseColor(baseColor);
      setData(huez(baseColor, format));
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  React.useEffect(() => {
    setData(huez(baseColor, format));
    const localFormat = localStorage.getItem("localFormat");
    if (localFormat) {
      setFormat(localFormat as "hsl" | "rgb" | "hex");
    }
    setMounted(true);
  }, [format]);
  if (!mounted) {
    return null; //TODO: add loading spinner
  }
  return (
    <div>
      <Search
        format={format}
        changeBaseColor={changeBaseColor}
        baseColor={baseColor}
        changeFormat={changeFormat}
        handleSubmit={handleSubmit}
      />
      {display()}
    </div>
  );
}
