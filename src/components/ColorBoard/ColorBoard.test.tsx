import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ContextProvider } from "../../contexts/Context";
import ColorBoard from "./index";

describe("ColorBoard", () => {
  test("should render", () => {
    render(
      <ContextProvider>
        <ColorBoard />
      </ContextProvider>
    );
    expect(screen.getByText("Start")).toBeInTheDocument();
  });
  test("calls startGame when Start button is clicked", () => {
    render(
      <ContextProvider>
        <ColorBoard />
      </ContextProvider>
    );
    fireEvent.click(screen.getByText("Start"));
    expect(screen.getByText("10s")).toBeInTheDocument();
  });
  test("should be able to changes difficulty when buttons are clicked", () => {
    render(
      <ContextProvider>
        <ColorBoard />
      </ContextProvider>
    );
    fireEvent.click(screen.getByText("Easy"));
    expect(screen.getByText("Easy")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Medium"));
    expect(screen.getByText("Medium")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Hard"));
    expect(screen.getByText("Hard")).toBeInTheDocument();
  });
  test("should be able to calls setPlayer when input field is filled", () => {
    render(
      <ContextProvider>
        <ColorBoard />
      </ContextProvider>
    );
    fireEvent.change(screen.getByPlaceholderText("Type your player name"), {
      target: { value: "John Doe" },
    });
    expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();
  });
});
