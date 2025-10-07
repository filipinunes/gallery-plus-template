import cx from "classnames";
import { Link } from "react-router";
import Logo from "../assets/images/galeria-plus-full-logo.svg?react";
import AlbumNewDialog from "../contexts/albums/components/album-new-dialog";
import PhotoNewDialog from "../contexts/photos/components/photo-new-dialog";
import Button from "./button";
import Container from "./container";
import Divider from "./divider";
import PhotosSearch from "./photos-search";

interface MainHeaderProps extends React.ComponentProps<typeof Container> {}

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  return (
    <Container
      as="header"
      className={cx(`flex justify-between items-center gap-10`, className)}
      {...props}
    >
      <Link to="/">
        <Logo className="h-5" />
      </Link>

      <PhotosSearch />

      <Divider orientation="vertical" className="h-10"></Divider>

      <div className="flex items-center gap-3">
        <PhotoNewDialog trigger={<Button>Nova foto</Button>} />
        <AlbumNewDialog
          trigger={<Button variant="secondary">Criar albúm</Button>}
        />
      </div>
    </Container>
  );
}
