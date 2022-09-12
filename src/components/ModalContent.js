
const ModalContent = (props) => {

  const { data } = props;

  console.log('DATA', data);


  const getImageSrc = (object) => {
    const {additionalImages, primaryImage, primaryImageSmall } = object;
    if (primaryImage) {
      return primaryImage;
    } else if (primaryImageSmall) {
      return primaryImageSmall;
    } else if (additionalImages.length) {
      return additionalImages[0]};
    }

  const renderPhoto = (object) => {
    const src = getImageSrc(object);
    if (src) {
      return (
        <div>
          <img loading="lazy" src={src} alt={object.title} className='modal__image' />
        </div>
      )
    }
  }

  console.log(data.artistULAN_URL)
  return (
    <section className="modal-data">
      <div className="modal-data__left-half">

        <h2>About the Artist</h2>
        <p>Artist: {data.artistDisplayName}</p>
        <p>Artist Nationality: {data.artistNationality}</p>
        <p>Artist Bio: {data.artistDisplayBio}</p>
        <p>Artist Start Date: {data.artistBeginDate}</p>
        <p>Artist End Date: {data.artistEndDate}</p>


        <h2>About the Work</h2>
        <p>Object Date: {data.objectDate}</p>

        <p>Department: {data.department}</p>
        <p>Accession Year {data.accessionYear}</p>
        <p>Medium: {data.medium}</p>
        <p>Culture: {data.culture}</p>
        <p>Dimensions: {data.dimensions}</p>
        <p>{data.creditLine}</p>


      </div>
      <div className="modal-data__right-half">
        {renderPhoto(data)}
        <h2>Additional Resources</h2>
        <a href={data.objectURL}>Learn more from the Metropolitan Museum</a>
        {(data.artistULAN_URL && data.artistULAN_URL !== '(not assigned)') ? (
          <a href={data.artistULAN_URL}>ULAN record of {data.artistDisplayName}</a>
        ) : null}
        {data.objectWikidata_URL ? (
          <a href={data.objectWikidata_URL}>Wiki Data record of {data.artistDisplayName}</a>
        ) : null}
      </div>
    </section>
  )

}

export default ModalContent;