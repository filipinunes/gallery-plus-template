import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "../assets/icons/search.svg?react";
import usePhotos from "../contexts/photos/hooks/use-photos";
import { debounce } from "../helpers/utils";
import InputText from "./input-text";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = useState("");
  const { filters } = usePhotos();

  useEffect(() => {
    setInputValue(filters.q || "");
  }, []);

  const debouncedSetValue = useCallback(
    debounce((value: string) => {
      filters.setQ(value);
    }, 500),
    [filters.setQ]
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      value={inputValue}
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      onChange={handleInputChange}
    />
  );
}
