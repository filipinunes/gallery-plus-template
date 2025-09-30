import Container from "../components/container";
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
  return (
    <Container>
      <PhotosList photos={photos} />
    </Container>
  );
}
