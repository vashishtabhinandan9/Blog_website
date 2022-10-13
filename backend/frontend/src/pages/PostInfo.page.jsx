import SinglePost from "../components/SinglePostInfo/SinglePostInfo.component";
import Sidebar from "../components/Sidebar/Sidebar.component";

export default function PostInfoPage() {
  return (
    <div className="singlePost flex">
      <SinglePost />

      <Sidebar/>
    </div>
  );
}