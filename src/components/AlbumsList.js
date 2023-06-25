import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";


function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const handleAddAlbum = () => {
    console.log("Add Album");
  };
  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((album) => {
      const header = <div className="flex justify-between">{album.title}</div>;

      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos in the Albums
        </ExpandablePanel>
      );
    });
  }
  return (
    <div>
      <div>
        Albums for: {user.name}
        <Button onclick={handleAddAlbum}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default AlbumsList;
