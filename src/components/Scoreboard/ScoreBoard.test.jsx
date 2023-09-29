import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ScoreBoard from "./index";
import { Context, ContextUpdate } from "../../contexts/Context";

const renderApplicationContext = () => {
  const contextValue = {
    rankingList: [{ score: 180 }],
    inProgress: true,
    player: '',
  };
  const contextAppValue = {
    time: 30,
    contextValue: contextValue,
  };
  const updateContextValue = {
    toggleTimerOn: vi.fn(),
    toggleTimerOnQuestion: vi.fn(),
    addTime: vi.fn(),
    addCurrentScore: vi.fn(),
    addTimeQuestion: vi.fn(),
    setInProgress: vi.fn(),
    resetScoreList: vi.fn(),
  }
  return render(
    <Context.Provider value={contextAppValue}>
      <ContextUpdate.Provider value={updateContextValue}>
        <ScoreBoard />
      </ContextUpdate.Provider>
    </Context.Provider>
  );
}

describe("ScoreBoard", () => {
  test("renders ScoreBoard component", () => {
    renderApplicationContext();
    expect(screen.getByText("Score")).toBeInTheDocument();
    expect(screen.getByText("Resetar")).toBeInTheDocument();
    expect(screen.getByText("High Score")).toBeInTheDocument();
  });
  test("renders ScoreBoard component with ranking", () => {
    renderApplicationContext();
    expect(screen.getByText("180")).toBeInTheDocument();
  });
  test("should be able to displays the correct time", () => {
    renderApplicationContext();
    expect(screen.getByText("30")).toBeInTheDocument();
  });
});