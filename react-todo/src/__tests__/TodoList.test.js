import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add/i);

    await userEvent.type(input, "Write tests");
    fireEvent.click(button);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteBtn = screen.getAllByText("✕")[0];
    fireEvent.click(deleteBtn);
    expect(todo).not.toBeInTheDocument();
  });
});