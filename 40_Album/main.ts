// creating function
function make_album (artist_name : string, album_title : string, tracks ? : number){
    let album : {artist : string , title :string , tracks ? : number } = {
        artist: artist_name,
        title : album_title,
    }
if (tracks !== undefined){
    album.tracks = tracks;

}
return album;
}
// creatin three function and creating three variables with different values 
let album1 = make_album("Faizan","karachi Trip's",3.5);
let album2 = make_album("Ahmed","Pakistan Zindabad",2);
let album3 = make_album("Faisal","Come on buddy its our trip",8.5);
// printing the variables
console.log(album1);
console.log(album2);
console.log(album3);