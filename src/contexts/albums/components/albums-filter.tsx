import cx from "classnames";
import type React from "react";
import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import usePhotos from "../../photos/hooks/use-photos";
import type { Album } from "../models/album";

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export default function AlbumsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbumsFilterProps) {
  const { filters } = usePhotos();

  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        {!loading && albums.length > 0 && (
          <>
            <Button
              variant={filters.albumId === null ? "primary" : "ghost"}
              size="sm"
              className="cursor-pointer"
              onClick={() => filters.setAlbumId(null)}
            >
              Todos
            </Button>
            {albums.map((album) => (
              <Button
                variant={filters.albumId === album.id ? "primary" : "ghost"}
                size="sm"
                className="cursor-pointer"
                key={album.id}
                onClick={() => filters.setAlbumId(album.id)}
              >
                {album.title}
              </Button>
            ))}
          </>
        )}
        {loading &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={`album-button-loadin-${index}`}
              className="h-7 w-28"
            />
          ))}
      </div>
    </div>
  );
}
