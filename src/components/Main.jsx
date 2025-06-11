export default function Main({ data }) {
  if (data.media_type !== "image") {
    return (
      <div className="imgContainer">
        <p>Today's content is not an image.</p>
      </div>
    );
  }

  return (
    <div className="imgContainer">
      <img
        src={data.hdurl || data.url}
        alt={data.title || 'bg-img'}
        className="bgImage"
      />
    </div>
  );
}
