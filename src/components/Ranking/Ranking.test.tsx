import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ContextProvider } from "../../contexts/Context";
import Ranking from "./index";

describe("Ranking", () => {
  test("should render", () => {
    render(
      <ContextProvider>
        <Ranking />
      </ContextProvider>
    );
    expect(screen.getByText("Ranking Guess the color game")).toBeInTheDocument();
  });
});