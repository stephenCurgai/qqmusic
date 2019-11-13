//基础路径
let baseurl = 'http://localhost:3000';
// banner接口
let banner = baseurl + '/banner';
// 推荐电台
let perfered = baseurl +'/dj/today/perfered'
// 排行
let detail = baseurl +'/toplist/detail'
// 热搜
let hot = baseurl +'/search/hot'
// 播放列表
let search = baseurl +'/search?keywords='
// 播放界面歌曲接口
let song = baseurl +'/song/url?id='
// 抛出
export default{
    banner,
    perfered,
    detail,
    hot,
    search,
    song
}