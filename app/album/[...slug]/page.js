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

    const releaseDate = new Date(albumInfo.raw.current.release_date).toLocaleDateString(
        undefined, // Use the default locale of the user's browser
        { day: 'numeric', month: 'short', year: 'numeric' }
      );

    
    return (
        <main>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Image src={albumInfo.imageUrl} alt="" className='img-fluid' width={600} height={600} priority={true} />
                    </div>
                    <div className="col-md-8">
                        <h3>{albumInfo.title}</h3>
                        <p>By: <b>{albumInfo.artist}</b></p>
                        <hr/>
                        <p>{albumInfo.raw.current.about}</p>
                        <p>Release Date : {releaseDate}</p>
                        <b>Tracks :</b>
                        <hr/>
                        {albumInfo.raw.trackinfo.map((track, index) => (
                            <div key={index} className='mb-3'>
                                <b className="card-title">{index + 1}. {track.title}</b>
                                <audio controls style={{ width: '100%' }}>
                                    <source src={track.file["mp3-128"]} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )

}