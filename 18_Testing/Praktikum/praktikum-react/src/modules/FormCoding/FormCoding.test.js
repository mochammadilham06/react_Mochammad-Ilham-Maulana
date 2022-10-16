import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NameForm from "./FormCoding";
import userEvent from "@testing-library/user-event";

describe("NameForm", () => {
  test("When Render All Component", () => {
    render(<NameForm />);
    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan:/)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Kelas Coding yang Dipilih:/)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Foto Surat Kesungguhan:/)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)
    ).toBeInTheDocument();
  });

  test("When Check input Value", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "test" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "test@mail.com" },
    });

    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), {
      target: { value: "085157022076" },
    });

    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(selectedItem, "reactjs");

    const testImageFile = new File(
      ["testing"],
      "testing.pdf",
      { name: /surat kesungguhan/i },
      { type: "image/*,.pdf" }
    );
    const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), {
      target: { value: "Testing lagi" },
    });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("test");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("test@mail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue(
      "085157022076"
    );
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue(
      "reactjs"
    );

    expect(fileInput.files.length).toBe(0);
    userEvent.upload(fileInput, testImageFile);
    expect(fileInput.files.length).toBe(1);

    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)
    ).toHaveValue("Testing lagi");
  });

  test("When input for value Nama Lengkap with number", () => {
    render(<NameForm />);

    fireEvent.input(
      screen.getByRole("textbox", {
        name: /nama/i,
      }),
      { target: { value: "test106" } }
    );
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
  });

  test("input for email with invalid format", () => {
    render(<NameForm />);

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "testmail.com" },
    });

    // Expected result when click the submit button
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });

  test("When input for phone number with length <9 and >14 characters", () => {
    render(<NameForm />);

    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), {
      target: { value: "0851" },
    });

    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), {
      target: { value: "0000000000000000000000000000" },
    });

    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });

  test("when click submit button and data must refreshed", () => {
    render(<NameForm />);

    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "test" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "test@mail.com" },
    });

    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), {
      target: { value: "085157022076" },
    });

    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));

    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(selectedItem, "reactjs");

    const testImageFile = new File(
      ["testing"],
      "testing.pdf",
      { name: /surat kesungguhan/i },
      { type: "image/*,.pdf" }
    );
    const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), {
      target: { value: "Testing" },
    });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("test");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("test@mail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue(
      "085157022076"
    );
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked(
      true
    );
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue(
      "reactjs"
    );

    expect(fileInput.files.length).toBe(0);
    userEvent.upload(fileInput, testImageFile);
    expect(fileInput.files.length).toBe(1);

    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)
    ).toHaveValue("Testing");

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(alertMock).toHaveBeenCalledTimes(1);

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan:/)
    ).not.toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("");
    expect(fileInput.value).toBe("");
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)
    ).toHaveValue("");
  });
});
