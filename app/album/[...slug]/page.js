import Image from 'next/image'
const bandcamp = require('bandcamp-scraper')

export default async function Album({ params }) {
    const albumUrl = 'https://' + [params.slug[0]][0] + '.bandcamp.com/album/' + [params.slug[1]][0];
    const albumInfo = await new Promise((resolve, reject) => {
        bandcamp.getAlbumInfo(albumUrl, function (error, albumInfo) {
          if (error) {
            reject(error);
          } else {
            resolve(albumInfo);
          }
        });
      });
    return (
        <main>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5">
                        <Image src={albumInfo.imageUrl} alt="" className='img-fluid' width={600} height={600} />
                    </div>
                    <div className="col-md-7 mt-3">
                        <h1>{albumInfo.title}</h1>
                        <p>By: <b>{albumInfo.artist}</b></p>
                        <hr/>
                        <p>{albumInfo.raw.current.about}</p>
                        <b>Release Date : {albumInfo.raw.current.release_date}</b>
                    </div>
                    <div className="col-12 mt-3">
                        {albumInfo.raw.trackinfo.map((track, index) => (
                            <div className="card mb-2" key={index}>
                                <div className="card-body">
                                    <p className="card-title">{index + 1}. {track.title}</p>
                                </div>
                              </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )

}