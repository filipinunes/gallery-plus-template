import Button from "../components/button";
import Container from "../components/container";
import ImagePreview from "../components/image-preview";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";
import PhotoNavigator from "../contexts/photos/components/photos-navigator";
import type { Photo } from "../contexts/photos/models/photo";

export default function PagePhotoDetails() {
  const isLoadingPhoto = false;
  const photo = {
    id: "3",
    title: "teste",
    albums: [
      { id: "1", title: "Albúm 1" },
      { id: "2", title: "Albúm 2" },
      { id: "3", title: "Albúm 3" },
    ],
    imageId: "portrait-tower.png",
  } as Photo;

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
                src={`/public/images/${photo?.imageId}`}
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
            photo={photo}
            albums={[
              { id: "1", title: "Albúm 1" },
              { id: "2", title: "Albúm 2" },
              { id: "3", title: "Albúm 3" },
            ]}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  );
}
