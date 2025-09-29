import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export default function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "1234",
            title: "teste",
            albums: [
              { id: "1", title: "Albúm 1" },
              { id: "2", title: "Albúm 2" },
              { id: "3", title: "Albúm 3" },
            ],
            imageId: "portrait-tower.png",
          }}
        />
        <PhotoWidget
          photo={{
            id: "5678",
            title: "teste",
            albums: [
              { id: "1", title: "Albúm 1" },
              { id: "2", title: "Albúm 2" },
              { id: "3", title: "Albúm 3" },
            ],
            imageId: "portrait-tower.png",
          }}
        />
        <PhotoWidget
          photo={{
            id: "9012",
            title: "teste",
            albums: [
              { id: "1", title: "Albúm 1" },
              { id: "2", title: "Albúm 2" },
              { id: "3", title: "Albúm 3" },
            ],
            imageId: "portrait-tower.png",
          }}
        />
        <PhotoWidget photo={{} as Photo} loading />
      </div>
    </Container>
  );
}
