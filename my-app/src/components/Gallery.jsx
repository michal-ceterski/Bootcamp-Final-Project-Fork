export const Gallery =() => {

    return (
        <>
        <h1>The current theme is {theme}.</h1>;
        <div className="gallery">
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Zdjęcie Galerii ${index + 1}`} />
          ))}
        </div>
        </>
      );
}