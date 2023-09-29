import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ContextProvider } from "../../contexts/Context";
import ScoreList from "./index";

describe("ScoreList", () => {
  test("should render", () => {
    render(
      <ContextProvider>
        <ScoreList />
      </ContextProvider>
    );
    expect(screen.getByText("Current/Last game")).toBeInTheDocument();
  });
});