import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "../../../helpers/api";

export default function usePhotoAlbums() {
  const queryClient = useQueryClient();

  async function managePhotoOnAlbum(photoId: string, albumsIds: string[]) {
    try {
      await api.put(`photos/${photoId}/albums`, {
        albumsIds,
      });

      queryClient.invalidateQueries({ queryKey: ["photo", photoId] });
      queryClient.invalidateQueries({ queryKey: ["photos"] });

      toast.success("Albuns atualizados");
    } catch (error) {
      toast.error("Falha ao atualizar albums");
      throw error;
    }
  }

  return {
    managePhotoOnAlbum,
  };
}
