const key= process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+key;
export const VIDEO_SEARCH_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+key+"&q="

export const VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + key;
export const OFFSET_LIVE_CHAT=35;
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

