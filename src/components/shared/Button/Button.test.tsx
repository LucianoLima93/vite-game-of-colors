import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button from "./index";

describe("Button", () => {
  test("should render", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
  test("should render with className", () => {
    render(<Button className="test">Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("test");
  });
  test("should render with onClick", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Button</Button>);
    fireEvent.click(screen.getByText("Button"));
    expect(onClick).toHaveBeenCalled();
  });
});