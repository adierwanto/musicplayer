import Image from 'next/image'
const bandcamp = require('bandcamp-scraper')

async function getData() {
  const AllAlbums = [];
  const artistUrl = 'https://dirtyass.bandcamp.com/';

  return new Promise((resolve, reject) => {
    bandcamp.getAlbumUrls(artistUrl, function (error, albumUrls) {
      if (error) {
        reject(error);
      } else {
        let remainingAlbums = albumUrls.length;

        albumUrls.forEach(albumUrl => {
          bandcamp.getAlbumProducts(albumUrl, function (error, albumProducts) {
            remainingAlbums--;

            if (error) {
              // Handle the error, if needed.
            } else {
              AllAlbums.push(albumProducts[0]);
            }

            // Check if all albums have been processed before resolving the promise.
            if (remainingAlbums === 0) {
              resolve(AllAlbums);
            }
          });
        });
      }
    });
  });
}

export default async function Home() {
  const data = await getData()
  const arrData = [];
  data.forEach(x => {
    console.log(x);
    if (x.format === 'Digital Album') {
      const obj = {
        url: x.url,
        name: x.name,
        artist: x.artist,
        imageUrls: x.imageUrls,
        artistSlug: x.url.split(".bandcamp")[0].replace("https://", ""),
        albumSlug: x.url.split("/").pop()
      }
      arrData.push(obj);
    }
    
  });
  return (
    <main>
      
      <div className="container mt-5">
        <div className="row no-gutter">
          
          {arrData.map((item) => (
            <div className="item web col-sm-6 col-md-4 col-lg-4 col-6 mb-4" key={item.url}>
            <a href={`/album/${encodeURIComponent(item.artistSlug)}/${encodeURIComponent(item.albumSlug)}`} className="item-wrap fancybox">
              <div className="work-info">
                <h3>{item.name}</h3>
                <span>{item.artist}</span>
              </div>
              <Image src={item.imageUrls[0]} alt="" className='img-fluid' width={800} height={800} priority={true} />
            </a>
          </div>
          ))}
          
        </div>
      </div>
 
    </main>
    )
  }
  