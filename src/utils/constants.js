const key= process.env.REACT_APP_GOOGLE_API_KEY;
console.log(key)
export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+key;
console.log(YOUTUBE_VIDEOS_API);