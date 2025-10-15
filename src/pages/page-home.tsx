import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albums";
import { PhotosList } from "../contexts/photos/components/photos-list";
import type { Photo } from "../contexts/photos/models/photo";

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

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums();

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />
      <PhotosList photos={photos} />
    </Container>
  );
}
