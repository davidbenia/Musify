async function testByFile(file) {
  let music_data = {
    songname: null,
    artistname: null,
    songlink: null,
    uri: null,
  };
  let json_data;

  async function scrapper(link) {
    const response = await fetch(link);
    const text = await response.text();
    let tag = '<meta property="og:image" content="';
    let start = text.indexOf(tag);
    let body = text.substring(start + tag.length, start + tag.length + 200);
    body = body.substring(0, body.indexOf('"'));

    return body;
  }

  let api_data = {
    api_token: "9ab3115ba7e837d0f41f8ae40be684c1",
    audio: file,
  };

  let options = {
    method: "POST",
    body: JSON.stringify(api_data),
    headers: { "Content-type": "multipart/form-data" },
  };

  let response = await fetch("https://api.audd.io/", options);
  json_data = await response.json();

  music_data.songname = json_data["result"]["title"];
  music_data.artistname = json_data["result"]["artist"];
  music_data.songlink = json_data["result"]["song_link"];
  let uri = await scrapper(json_data["result"]["song_link"]);
  music_data.uri = uri;

  return music_data;
}

export default testByFile;
