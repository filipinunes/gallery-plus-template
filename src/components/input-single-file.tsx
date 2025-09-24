import React from "react";
import { useWatch } from "react-hook-form";
import { tv, type VariantProps } from "tailwind-variants";
import FileImageIcon from "../assets/icons/image.svg?react";
import UploadFileIcon from "../assets/icons/upload-file.svg?react";
import Icon from "./icon";
import Text, { textVariants } from "./text";

export const inputSingleFileVariants = tv({
  base: `
        flex flex-col items-center justify-center w-full
        border border-solid border-border-primary rounded-lg
        group-hover:border-border-active gap-1 transition
    `,
  variants: {
    size: {
      md: "py-6 px-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const inputSingleFileIconVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputSingleFileProps
  extends VariantProps<typeof inputSingleFileVariants>,
    Omit<React.ComponentProps<"input">, "size"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  allowedExtensions: string[];
  maxFileSileInMB: number;
  error?: React.ReactNode;
}

export default function InputSingleFile({
  size,
  className,
  error,
  form,
  allowedExtensions,
  maxFileSileInMB,
  ...props
}: InputSingleFileProps) {
  const formValues = useWatch({ control: form?.control });
  const name = props.name || "";
  const formFile: File = React.useMemo(
    () => formValues[name]?.[0],
    [formValues, name]
  );

  const { fileExtension, fileSize } = React.useMemo(
    () => ({
      fileExtension: formFile?.name?.split(".")?.pop()?.toLowerCase() || "",
      fileSize: formFile?.size || 0,
    }),
    [formFile]
  );

  function isValidExtension() {
    return allowedExtensions.includes(fileExtension);
  }

  function isValidSize() {
    return fileSize <= maxFileSileInMB * 1024 * 1024;
  }

  function isValidFile() {
    return isValidExtension() && isValidSize();
  }

  function handleRemoveFile() {
    form.setValue(name, undefined);
  }

  return (
    <div>
      {!formFile || !isValidFile() ? (
        <>
          <div
            className={`
            w-full relative group cursor-pointer 
        `}
          >
            <input
              type="file"
              className={`
                absolute top-0 right-0 w-full h-full 
                cursor-pointer
            `}
              {...props}
            />
            <div className={inputSingleFileVariants({ size, className })}>
              <Icon
                svg={UploadFileIcon}
                className={inputSingleFileIconVariants({ size })}
              />
              <Text
                variant="label-medium"
                className="text-placeholder text-center"
              >
                Arraste o arquivo aqui <br /> ou clique para selecionar
              </Text>
            </div>
          </div>
          {formFile && !isValidExtension() && (
            <Text variant="label-small" className="text-accent-red">
              Tipo de arquivo inválido
            </Text>
          )}
          {formFile && !isValidSize() && isValidExtension() && (
            <Text variant="label-small" className="text-accent-red">
              O tamanho do arquivo ultrapassa o máximo
            </Text>
          )}
          {error && (
            <Text variant="label-small" className="text-accent-red">
              {error}
            </Text>
          )}
        </>
      ) : (
        <div
          className={`
            flex gap-3 items-center 
            border border-solid border-border-primary mt-5
            p-3 rounded
          `}
        >
          <Icon svg={FileImageIcon} className="fill-white w-6 h-6" />
          <div className="flex flex-col">
            <div className="truncate max-w-80">
              <Text variant="label-medium" className="text-placeholder">
                {formFile.name}
              </Text>
            </div>
            <div className="flex">
              <button
                type="button"
                className={textVariants({
                  variant: "label-small",
                  className: "text-accent-red cursor-pointer hover:underline",
                })}
                onClick={handleRemoveFile}
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
