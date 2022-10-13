import useInputValue from "./useInputValue";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useInputValue", () => {
  it("When render component", () => {
    const { result } = renderHook(() => useInputValue());

    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  it("When render initial Value", () => {
    const { result } = renderHook(() => useInputValue());

    act(() => {
      result.current.onChange({
        target: { value: "testing" },
      });
    });
    expect(result.current.value).toBe("testing");
  });

  test("When Re-Render initial value for value", () => {
    const { result, rerender } = renderHook(
      ({ initialValue }) => useInputValue(initialValue),
      { initialProps: { initialValue: "new Testing" } }
    );

    act(() => {
      result.current.onChange({ target: { value: "new testing" } });
    });

    rerender("Updated");
    expect(result.current.value).toBe("new testing");
  });
});
