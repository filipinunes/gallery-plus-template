import { useParams } from "react-router";
import Button from "../components/button";
import Container from "../components/container";
import ImagePreview from "../components/image-preview";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";
import useAlbums from "../contexts/albums/hooks/use-albums";
import PhotoNavigator from "../contexts/photos/components/photos-navigator";
import usePhoto from "../contexts/photos/hooks/use-photo";
import type { Photo } from "../contexts/photos/models/photo";

export default function PagePhotoDetails() {
  const { id } = useParams();
  const { albums, isLoadingAlbums } = useAlbums();
  const { photo, isLoadingPhoto } = usePhoto(id);

  if (!isLoadingPhoto && !photo)
    return (
      <Text variant="paragraph-large" className="accent-accent-red">
        Foto não encontrada!
      </Text>
    );

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photo?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotoNavigator />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <>
              <ImagePreview
                src={`${import.meta.env.VITE_IMAGES_URL}/${photo?.imageId}`}
                title={photo?.title}
                className="h-[21rem]"
              />
              <Button variant="destructive">Excluir</Button>
            </>
          ) : (
            <>
              <Skeleton className="h-[21rem]" />
              <Skeleton className="w-20 h-10" />
            </>
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Albuns
          </Text>

          <AlbumsListSelectable
            photo={photo as Photo}
            albums={albums}
            loading={isLoadingAlbums}
          />
        </div>
      </div>
    </Container>
  );
}
