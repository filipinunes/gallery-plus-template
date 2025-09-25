import { useForm } from "react-hook-form";
import Alert from "../components/alert";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../components/dialog";
import Divider from "../components/divider";
import ImageFilePreview from "../components/image-file-preview";
import InputCheckbox from "../components/input-checkbox";
import InputSingleFile from "../components/input-single-file";
import InputText from "../components/input-text";
import ChevronLeftIcon from "../assets/icons/chevron-left.svg?react";
import ChevronRightIcon from "../assets/icons/chevron-right.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";

export default function PageComponents() {
  const form = useForm();
  const file = form.watch("file");
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

  return (
    <div className="grid gap-7 p-6">
      <div className="flex gap-3">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button disabled>Button</Button>
        <Button handling>Loading</Button>
        <Button icon={ChevronRightIcon}>Próxima Imagem</Button>
        <Button variant="ghost" size="sm">
          Button
        </Button>
        <Button variant="primary" size="sm">
          Button
        </Button>
      </div>

      <div className="flex gap-3">
        <ButtonIcon icon={ChevronLeftIcon} />
        <ButtonIcon icon={ChevronRightIcon} variant="secondary" />
      </div>

      <div className="flex gap-3">
        <Badge>Todos</Badge>
        <Badge>Natureza</Badge>
        <Badge>Viagem</Badge>
        <Badge loading>Viagem</Badge>
        <Badge loading>Viagem</Badge>
        <Badge loading>Viagem</Badge>
      </div>

      <div>
        <Alert>
          Tamanho máximo: 50MB
          <br />
          Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
        </Alert>
      </div>

      <div>
        <Divider />
      </div>

      <div>
        <InputText placeholder="Buscar foto" icon={SearchIcon}></InputText>
      </div>

      <div>
        <Divider />
      </div>

      <div>
        <InputCheckbox />
      </div>

      <div>
        <Divider />
      </div>

      <div>
        <InputSingleFile
          form={form}
          allowedExtensions={["png", "jpg", "jpeg", "webp"]}
          maxFileSileInMB={50}
          replaceBy={<ImageFilePreview src={fileSource} alt="Imagem" />}
          {...form.register("file")}
        />
      </div>

      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Abrir modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Teste dialog</DialogHeader>
            <DialogBody>
              <InputSingleFile
                form={form}
                allowedExtensions={["png", "jpg", "jpeg", "webp"]}
                maxFileSileInMB={50}
                replaceBy={<ImageFilePreview src={fileSource} alt="Imagem" />}
                {...form.register("file")}
              />
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancelar</Button>
              </DialogClose>

              <Button variant="primary">Adicionar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
