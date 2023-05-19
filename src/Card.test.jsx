// noinspection JSCheckFunctionSignatures

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Pruebas para el componente Card", () => {
  const mockProps = {
    srcImg: "https://ejemplo.com/imagen.png",
    texto1: "Texto de prueba 1",
    texto2: "Texto de prueba 2",
  };

  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Card {...mockProps} />);
  });

  it("Renderiza correctamente la imagen", () => {
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockProps.srcImg);
  });

  it("Renderiza correctamente texto1", () => {
    expect(screen.getByText(mockProps.texto1)).toBeInTheDocument();
  });

  it("Renderiza correctamente texto2", () => {
    expect(screen.getByText(mockProps.texto2)).toBeInTheDocument();
  });
});
