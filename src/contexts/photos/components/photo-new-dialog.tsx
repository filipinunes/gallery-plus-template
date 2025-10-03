import { useForm } from "react-hook-form";
import Alert from "../../../components/alert";
import Button from "../../../components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../../components/dialog";
import ImagePreview from "../../../components/image-preview";
import InputSingleFile from "../../../components/input-single-file";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Album } from "../../albums/models/album";
import Skeleton from "../../../components/skeleton";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  // TODO: apenas para mock, será removido assim que a API foi integrada
  const isLoadingAlbum = false;
  const albums: Album[] = [
    { id: "1", title: "Albúm 1" },
    { id: "2", title: "Albúm 2" },
    { id: "3", title: "Albúm 3" },
  ];
  const form = useForm();
  const file = form.watch("file");
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Adicionar foto</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" maxLength={255} />

          <Alert>
            Tamanho máximo: 50MB.
            <br />
            Você pode selecionar arquivos em PNG, JPG ou JPEG.
          </Alert>

          <InputSingleFile
            form={form}
            maxFileSileInMB={50}
            allowedExtensions={["PNG", "JPG", "JPEG"]}
            replaceBy={
              <ImagePreview
                className="w-full h-56"
                src={fileSource}
                alt="Imagem"
              />
            }
            {...form.register("file")}
          />

          <div className="space-y-3">
            <Text variant="label-small">Selecionar álbums</Text>

            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbum &&
                albums.length > 0 &&
                albums.map((album) => (
                  <Button
                    key={album.id}
                    variant="ghost"
                    size="sm"
                    className="truncate"
                  >
                    {album.title}
                  </Button>
                ))}

              {isLoadingAlbum &&
                Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton
                    key={`album-loading-${index}`}
                    className="w-20 h-7"
                  />
                ))}
            </div>

            {!isLoadingAlbum && albums.length === 0 && (
              <Text>Nenhum álbum encontrado</Text>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
