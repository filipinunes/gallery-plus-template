import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
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
import InputText from "../../../components/input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";
import type { Photo } from "../../photos/models/photo";

interface AlbumNewDialogProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  const isLoadingPhotos = false;
  const photos: Photo[] = [
    {
      id: "1",
      title: "teste",
      albums: [
        { id: "1", title: "Albúm 1" },
        { id: "2", title: "Albúm 2" },
        { id: "3", title: "Albúm 3" },
      ],
      imageId: "portrait-tower.png",
    },
    {
      id: "2",
      title: "teste",
      albums: [
        { id: "1", title: "Albúm 1" },
        { id: "2", title: "Albúm 2" },
        { id: "3", title: "Albúm 3" },
      ],
      imageId: "portrait-tower.png",
    },
    {
      id: "3",
      title: "teste",
      albums: [
        { id: "1", title: "Albúm 1" },
        { id: "2", title: "Albúm 2" },
        { id: "3", title: "Albúm 3" },
      ],
      imageId: "portrait-tower.png",
    },
    {
      id: "4",
      title: "teste",
      albums: [
        { id: "1", title: "Albúm 1" },
        { id: "2", title: "Albúm 2" },
        { id: "3", title: "Albúm 3" },
      ],
      imageId: "portrait-tower.png",
    },
  ];

  function handleTogglePhoto(selected: boolean, photoId: string) {
    console.log(`photo: ${photoId} - selected: ${selected} `);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>Criar álbum</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título"></InputText>

          {isLoadingPhotos && (
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  key={`photo-loading-${index}`}
                  className="h-20 w-20 rounded-lg"
                />
              ))}
            </div>
          )}

          {!isLoadingPhotos && photos.length > 0 && (
            <div className="space-y-3">
              <Text as="div" variant="label-small">
                Fotos cadastradas
              </Text>
              <div className="flex flex-wrap gap-3">
                {photos.map((photo) => (
                  <PhotoImageSelectable
                    key={photo.id}
                    imageClassName="h-20 w-20"
                    src={`images/${photo.imageId}`}
                    title={photo.title}
                    onSelectImage={(selected) =>
                      handleTogglePhoto(selected, photo.id)
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {!isLoadingPhotos && photos.length === 0 && (
            <div className="flex flex-col items-center gap-3">
              <SelectCheckboxIllustration />
              <Text variant="paragraph-medium" className="text-center">
                Nenhuma foto disponível para seleção
              </Text>
            </div>
          )}
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
