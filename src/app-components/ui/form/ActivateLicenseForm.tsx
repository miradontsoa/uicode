import React, { FormEvent, useState } from "react";
import ButtonApp from "../buttons/ButtonApp";
import InputContainerApp from "./InputContainerApp";

type Props = {
  userId: string;
  onSuccess?: (message: string, license: string) => void;
  onError?: (message: string) => void;
};

export default function ActivateLicenseForm({
  userId,
  onSuccess,
  onError,
}: Props) {
  const [formData, setFormData] = useState({
    license: "",
    userId: userId,
  });
  const [loading, setLoading] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(". . .");
    e.preventDefault();
    try {
      const response = await fetch("/api/license/activate", {
        method: `POST`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      const data = await response.json();
      // TODO send notification or set on success
      onSuccess && onSuccess(data.message, formData.license);
      //   return data;
    } catch (error: any) {
      onError && onError(error.message);
    } finally {
      setLoading("");
    }
  };

  return (
    <div>
      <form className=" mt-3 mb-6 max-w-sm" onSubmit={handleSubmit}>
        <InputContainerApp
          className="mb-2"
          variant="primary"
          rounded="small"
          border="thin"
        >
          <input
            type={"text"}
            name={"license"}
            placeholder="License key here..."
            value={formData.license}
            onChange={(e) => {
              setFormData({
                ...formData,
                license: e.target.value,
              });
            }}
          />
        </InputContainerApp>
        <div>
          <ButtonApp type="submit">Activate</ButtonApp>
          <span className="ml-4">{loading}</span>
        </div>
      </form>
    </div>
  );
}
